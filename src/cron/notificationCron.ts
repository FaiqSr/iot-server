import { initFirebase, sendDeviceNotification, sendTopicNotification } from "../service/notificationService";
import prisma from "../utils/prisma";
import admin from "firebase-admin";

// --- INTERFACES ---
interface Alat {
  id: string;
  type?: string;
  nama?: string;
}

interface SensorSetting {
  id: number; // Tipe data sudah disesuaikan dengan skema Prisma (Integer/Number)
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

const DEFAULT_PATHS = [
  "devices/{deviceType}/{deviceId}/realtime/{sensorKey}",
  "devices/{deviceType}/{deviceId}/realtime",
  "devices/{deviceType}/{deviceId}/{sensorKey}",
  "devices/{alatId}/sensors/{sensorKey}",
  "devices/{alatId}/{sensorKey}",
  "alat/{alatId}/sensors/{sensorKey}",
  "alat/{alatId}/{sensorKey}",
];

function resolvePaths(
  template: string | undefined,
  deviceId: string,
  sensorKey: string,
  deviceType?: string,
) {
  const paths: string[] = [];
  const addPath = (p: string) => {
    paths.push(
      p.replace(/{deviceId}/g, deviceId)
       .replace(/{alatId}/g, deviceId)
       .replace(/{deviceType}/g, deviceType ?? "")
       .replace(/{sensorType}/g, sensorKey)
       .replace(/{sensorKey}/g, sensorKey)
    );
  };

  if (template) addPath(template);
  for (const p of DEFAULT_PATHS) addPath(p);

  return Array.from(new Set(paths));
}

function sensorTypeToPathKeys(sensorType: string) {
  const s = String(sensorType).toUpperCase();
  switch (s) {
    case "OXYGEN": return ["do", "oxygen", "o2"];
    case "AMMONIA":
    case "NH3": return ["nh3", "ammonia"];
    case "PH": return ["ph"];
    case "TEMPERATURE": return ["temperature", "temp"];
    case "TURBIDITY": return ["turbidity", "turbidyty"];
    default: return [sensorType.toLowerCase()];
  }
}

async function readRtdbValue(path: string): Promise<number | undefined> {
  const timeoutMs = Number(process.env.RTDB_READ_TIMEOUT_MS ?? process.env.FIREBASE_RTD_READ_TIMEOUT_MS ?? "5000");
  try {
    const getPromise = admin.database().ref(path).get();
    const snap = await Promise.race([
      getPromise,
      new Promise((_, reject) => setTimeout(() => reject(new Error("RTDB_TIMEOUT")), timeoutMs)),
    ]) as admin.database.DataSnapshot;
    
    if (!snap || !snap.exists()) return undefined;
    
    const val = snap.val();
    if (typeof val === "number") return val;
    if (val && typeof val === "object") {
      if (typeof val.value === "number") return val.value;
      if (typeof val.val === "number") return val.val;
      if (typeof val.current === "number") return val.current;
      for (const k of Object.keys(val)) {
        if (typeof val[k] === "number") return val[k];
      }
    }
    if (typeof val === "string") {
      const n = Number(val);
      if (!Number.isNaN(n)) return n;
    }
    return undefined;
  } catch (err: any) {
    if (err?.message === "RTDB_TIMEOUT") {
      console.error(`RTDB read timeout for path ${path} (${timeoutMs}ms)`);
    } else {
      console.error(`RTDB read error for path ${path}`, err);
    }
    return undefined;
  }
}

// Global flag untuk mencegah overlap eksekusi cron
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
    // Inisialisasi Firebase service
    await initFirebase();

    // Mengambil data setting sensor yang aktif dari database
    const settings = await prisma.sensorSetting.findMany({ 
      where: { is_active: true }, 
      include: { alat: true } 
    }) as SensorSetting[];

    // Memproses semua sensor secara paralel menggunakan Promise.all
    await Promise.all(settings.map(async (setting) => {
      checked++;
      const { alatId, sensor_type, min_value, max_value, alert_interval, last_notified_at, alat } = setting;
      
      const sensorKeys = sensorTypeToPathKeys(sensor_type);
      const allPaths = sensorKeys.flatMap(key => resolvePaths(process.env.FIREBASE_RTD_PATH_TEMPLATE, alatId, key, alat?.type));
      
      // Mengecek nilai RTDB secara paralel untuk mencari data numerik pertama yang valid
      const rtdbResults = await Promise.all(allPaths.map(p => readRtdbValue(p)));
      const value = rtdbResults.find(val => typeof val === "number");

      if (typeof value !== "number") return; // Lanjut jika tidak ada nilai numerik

      const breached =
        (min_value != null && value < min_value) ||
        (max_value != null && value > max_value);

      if (!breached) return; // Lanjut jika nilai normal

      const now = new Date();
      const minutesSinceLast = last_notified_at ? (now.getTime() - new Date(last_notified_at).getTime()) / (1000 * 60) : Infinity;

      if (minutesSinceLast <= (alert_interval ?? 0)) return; // Lanjut jika belum melewati batas waktu interval alert

      const title = `Alert: ${sensor_type} - ${alat?.nama ?? alatId}`;
      const body = `Value ${value} out of range${min_value != null || max_value != null ? ` (min:${min_value ?? "-"}, max:${max_value ?? "-"})` : ""}`;
      const data = { sensorType: sensor_type, currentValue: String(value), alertId: String(setting.id), alatId };

      try {
        const userAlats = await prisma.userAlat.findMany({ where: { alatId }, select: { userId: true } });
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
          // Mengirim notifikasi ke semua token user secara paralel
          await Promise.all(tokens.map(async (tk) => {
            if (!tk.token) return;
            try {
              const result = await sendDeviceNotification(tk.token, title, body, data);
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

          // Hanya update database jika ada setidaknya 1 notifikasi berhasil terkirim ke FCM
          if (anySent) {
            await prisma.sensorSetting.update({ where: { id: setting.id }, data: { last_notified_at: now } });
          }
        } else {
          // Fallback ke Topic jika token FCM personal tidak ada
          await sendTopicNotification(`alat_${alatId}`, title, body, data);
          sent++;
          
          // Update timestamp notifikasi setelah pengiriman topic berhasil
          await prisma.sensorSetting.update({ where: { id: setting.id }, data: { last_notified_at: now } });
        }
      } catch (err) {
        console.error(`Failed to handle notification for setting ${setting.id}`, err);
      }
    }));

  } catch (err) {
    console.error("Critical error in Notification cron", err);
  } finally {
    console.log(`Notification cron: finished. checked=${checked} sent=${sent}`);
    // Melepas lock state agar proses selanjutnya bisa berjalan
    isRunning = false; 
  }
}

export function startNotificationCron() {
  const enabled = process.env.ENABLE_NOTIFICATION_CRON ?? "true";
  if (enabled === "false" || enabled === "0") return;

  const intervalSec = Number(process.env.NOTIFICATION_CRON_INTERVAL_SECONDS ?? process.env.CRON_INTERVAL_SECONDS ?? "300");
  
  // Menjalankan fungsi di awal saat script pertama kali di-load
  runNotificationCheck().catch((e) => console.error("Initial cron run failed", e));
  
  // Mengatur interval untuk running cron berikutnya
  setInterval(() => runNotificationCheck().catch((e) => console.error("Cron run failed", e)), intervalSec * 1000);
}

export default { startNotificationCron, runNotificationCheck };