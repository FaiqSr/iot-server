import { initFirebase, sendDeviceNotification, sendTopicNotification } from "../service/notificationService"; // Sesuaikan path import
import prisma from "../utils/prisma";
import admin from "firebase-admin";

// --- INTERFACES ---
interface Alat {
  id: string;
  type?: string;
  nama?: string;
}

interface SensorSetting {
  id: number;
  alatId: string;
  sensor_type: string;
  min_value: number | null;
  max_value: number | null;
  alert_interval: number | null;
  last_notified_at: Date | null;
  alat?: Alat;
}

interface FcmToken {
  id: number | string; 
  token: string;
  userId: string;
}

// Normalisasi key sensor sesuai dengan struktur data di RTDB kamu
function sensorTypeToPathKeys(sensorType: string): string[] {
  const s = String(sensorType).toUpperCase();
  switch (s) {
    case "OXYGEN":
    case "DO": return ["do", "oxygen", "o2"];
    case "AMMONIA":
    case "NH3": return ["nh3", "ammonia"];
    case "PH": return ["ph"];
    case "TEMPERATURE": return ["temperature", "temp", "suhu"];
    case "TURBIDITY": return ["turbidity", "turbidyty"];
    default: return [sensorType.toLowerCase()];
  }
}

// Fungsi helper untuk mengekstrak nilai angka dari berbagai kemungkinan struktur object di RTDB
function extractNumericValue(rawVal: any): number | undefined {
  if (typeof rawVal === "number") return rawVal;
  if (rawVal && typeof rawVal === "object") {
    if (typeof rawVal.value === "number") return rawVal.value;
    if (typeof rawVal.val === "number") return rawVal.val;
    if (typeof rawVal.current === "number") return rawVal.current;
    // Cari keys lain di dalam object jika formatnya dinamis
    for (const k of Object.keys(rawVal)) {
      if (typeof rawVal[k] === "number") return rawVal[k];
    }
  }
  if (typeof rawVal === "string") {
    const n = Number(rawVal);
    if (!Number.isNaN(n)) return n;
  }
  return undefined;
}

// Hanya membaca NODE ROOT DEVICE (1 kali request per device)
async function readRtdbDeviceNode(typeAlat: string, idAlat: string): Promise<Record<string, any> | undefined> {
  const timeoutMs = Number(process.env.RTDB_READ_TIMEOUT_MS ?? process.env.FIREBASE_RTD_READ_TIMEOUT_MS ?? "5000");
  
  // Sesuai path yang efisien: devices/{typeAlat}/{idAlat}/realtime
  // (Jika di db kamu root-nya singular "device", ubah "devices/" jadi "device/")
  const path = `devices/${typeAlat}/${idAlat}/realtime`;

  try {
    const getPromise = admin.database().ref(path).get();
    const snap = await Promise.race([
      getPromise,
      new Promise((_, reject) => setTimeout(() => reject(new Error("RTDB_TIMEOUT")), timeoutMs)),
    ]) as admin.database.DataSnapshot;
    
    if (!snap || !snap.exists()) return undefined;
    return snap.val();
  } catch (err: any) {
    if (err?.message === "RTDB_TIMEOUT") {
      console.error(`RTDB read timeout for path ${path} (${timeoutMs}ms)`);
    } else {
      console.error(`RTDB read error for path ${path}`, err);
    }
    return undefined;
  }
}

let isRunning = false; 

export async function runNotificationCheck() {
  if (isRunning) {
    console.log("Notification cron: Previous run still active, skipping...");
    return;
  }
  
  isRunning = true;
  console.log("Notification cron: start");
  let checked = 0;
  let sent = 0;

  try {
    await initFirebase();

    // 1. Ambil semua setting yang aktif
    const settings = await prisma.sensorSetting.findMany({ 
      where: { is_active: true }, 
      include: { alat: true } 
    }) as SensorSetting[];

    // 2. KELOMPOKKAN (GROUPING) SETTINGS BERDASARKAN ALAT
    // Ini agar kita cukup panggil Firebase 1x per alat, bukan 1x per sensor
    const alatMap = new Map<string, { alat: Alat, settings: SensorSetting[] }>();
    for (const setting of settings) {
      if (!setting.alat) continue; // Skip jika tidak ada data alat
      if (!alatMap.has(setting.alatId)) {
        alatMap.set(setting.alatId, { alat: setting.alat, settings: [] });
      }
      alatMap.get(setting.alatId)!.settings.push(setting);
    }

    // 3. PROSES SETIAP ALAT SECARA PARALEL
    await Promise.all(Array.from(alatMap.values()).map(async ({ alat, settings: deviceSettings }) => {
      
      const typeAlat = alat.type || "unknown"; // swarmAerator / HydroSense
      const idAlat = alat.id;

      // FETCH 1x SAJA untuk mendapatkan semua sensor alat ini (pH, DO, NH3, Temp, Turbidity, dll)
      const realtimeData = await readRtdbDeviceNode(typeAlat, idAlat);
      if (!realtimeData) return; // Skip jika alat sedang offline atau data kosong

      // 4. CEK SETIAP SETTING SENSOR UNTUK ALAT INI DARI DATA LOKAL (YANG SUDAH DI-FETCH)
      for (const setting of deviceSettings) {
        checked++;
        const { sensor_type, min_value, max_value, alert_interval, last_notified_at } = setting;
        
        const sensorKeys = sensorTypeToPathKeys(sensor_type);
        let sensorValue: number | undefined = undefined;

        // Cari value di dalam object realtimeData berdasarkan keys
        for (const key of sensorKeys) {
          if (realtimeData[key] !== undefined) {
            sensorValue = extractNumericValue(realtimeData[key]);
            if (sensorValue !== undefined) break; // Berhenti mencari jika sudah dapat
          }
        }

        if (typeof sensorValue !== "number") continue; // Skip jika tidak ada nilai numerik di RTDB

        // Cek apakah melanggar batas (breached)
        const breached =
          (min_value != null && sensorValue < min_value) ||
          (max_value != null && sensorValue > max_value);

        if (!breached) continue; // Skip jika aman

        // Cek interval notifikasi
        const now = new Date();
        const minutesSinceLast = last_notified_at 
          ? (now.getTime() - new Date(last_notified_at).getTime()) / (1000 * 60) 
          : Infinity;

        if (minutesSinceLast <= (alert_interval ?? 0)) continue;

        // Persiapkan Notifikasi
        const title = `Alert: ${sensor_type.toUpperCase()} - ${alat.nama ?? idAlat}`;
        const body = `Value ${sensorValue} out of range${min_value != null || max_value != null ? ` (min:${min_value ?? "-"}, max:${max_value ?? "-"})` : ""}`;
        const dataPayload = { 
          sensorType: sensor_type, 
          currentValue: String(sensorValue), 
          alertId: String(setting.id), 
          alatId: idAlat 
        };

        try {
          const userAlats = await prisma.userAlat.findMany({ where: { alatId: idAlat }, select: { userId: true } });
          const userIds = userAlats.map((u) => u.userId).filter(Boolean);

          let tokens: FcmToken[] = [];
          if (userIds.length > 0) {
            tokens = await (prisma as any).fcmToken.findMany({ 
              where: { userId: { in: userIds } }, 
              select: { id: true, token: true, userId: true } 
            });
          }

          if (tokens.length > 0) {
            let anySent = false;
            await Promise.all(tokens.map(async (tk) => {
              if (!tk.token) return;
              try {
                const result = await sendDeviceNotification(tk.token, title, body, dataPayload);
                if ((result as any)?.success) {
                  sent++;
                  anySent = true;
                } else if ((result as any)?.error === "invalid_token") {
                  await (prisma as any).fcmToken.delete({ where: { id: tk.id } });
                }
              } catch (err) {
                console.error(`Failed to send token for user ${tk.userId}`, err);
              }
            }));

            if (anySent) {
              await prisma.sensorSetting.update({ where: { id: setting.id }, data: { last_notified_at: now } });
            }
          } else {
            // Fallback ke Topic jika tidak ada token personal
            await sendTopicNotification(`alat_${idAlat}`, title, body, dataPayload);
            sent++;
            await prisma.sensorSetting.update({ where: { id: setting.id }, data: { last_notified_at: now } });
          }
        } catch (err) {
          console.error(`Failed to handle notification for setting ${setting.id}`, err);
        }
      } // End of setting loop
    })); // End of device parallel map

  } catch (err) {
    console.error("Critical error in Notification cron", err);
  } finally {
    console.log(`Notification cron: finished. checked=${checked} sent=${sent}`);
    isRunning = false; 
  }
}

export function startNotificationCron() {
  const enabled = process.env.ENABLE_NOTIFICATION_CRON ?? "true";
  if (enabled === "false" || enabled === "0") return;

  const intervalSec = Number(process.env.NOTIFICATION_CRON_INTERVAL_SECONDS ?? process.env.CRON_INTERVAL_SECONDS ?? "300");
  
  runNotificationCheck().catch((e) => console.error("Initial cron run failed", e));
  setInterval(() => runNotificationCheck().catch((e) => console.error("Cron run failed", e)), intervalSec * 1000);
}

export default { startNotificationCron, runNotificationCheck };