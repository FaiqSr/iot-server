import admin from "firebase-admin";
import fs from "fs";
import path from "path";
import type { ServiceAccount } from "firebase-admin";

let initialized = false;

export async function initFirebase(
  serviceAccount?: string | ServiceAccount,
  databaseUrl?: string,
) {
  if (initialized) return;
  let cred: ServiceAccount | undefined;

  if (typeof serviceAccount === "string") {
    const p = path.isAbsolute(serviceAccount)
      ? serviceAccount
      : path.join(process.cwd(), serviceAccount);
    if (!fs.existsSync(p))
      throw new Error(`Firebase service account file not found at ${p}`);
    const content = fs.readFileSync(p, "utf8");
    cred = JSON.parse(content) as ServiceAccount;
  } else if (serviceAccount) {
    cred = serviceAccount as ServiceAccount;
  } else if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    try {
      cred = JSON.parse(
        process.env.FIREBASE_SERVICE_ACCOUNT_JSON,
      ) as ServiceAccount;
    } catch (e) {
      const parseError = new Error("Invalid FIREBASE_SERVICE_ACCOUNT_JSON");
      (parseError as unknown as Record<string, unknown>).cause = e;
      throw parseError;
    }
  } else if (process.env.FIREBASE_SERVICE_ACCOUNT_PATH) {
    const p = path.isAbsolute(process.env.FIREBASE_SERVICE_ACCOUNT_PATH)
      ? process.env.FIREBASE_SERVICE_ACCOUNT_PATH
      : path.join(
          process.cwd(),
          process.env.FIREBASE_SERVICE_ACCOUNT_PATH as string,
        );
    if (!fs.existsSync(p))
      throw new Error(`Firebase service account file not found at ${p}`);
    const content = fs.readFileSync(p, "utf8");
    cred = JSON.parse(content) as ServiceAccount;
  } else {
    throw new Error(
      "No Firebase service account provided. Set FIREBASE_SERVICE_ACCOUNT_PATH or FIREBASE_SERVICE_ACCOUNT_JSON.",
    );
  }

  const candidates: string[] = [];
  if (databaseUrl) candidates.push(databaseUrl);
  if (process.env.FIREBASE_DATABASE_URL)
    candidates.push(process.env.FIREBASE_DATABASE_URL);
  if (cred && (cred as any).project_id) {
    const projectId = (cred as any).project_id as string;
    candidates.push(`https://${projectId}-default-rtdb.firebaseio.com`);
    candidates.push(`https://${projectId}.default-rtdb.firebaseio.com`);
  }

  const tried = new Set<string>();
  let lastErr: unknown = null;

  const tryInit = async (url: string) => {
    try {
      if (admin.apps && admin.apps.length > 0) {
        await Promise.all(admin.apps.map((a) => a!.delete()));
      }
      admin.initializeApp({
        credential: admin.credential.cert(cred as ServiceAccount),
        databaseURL: url,
      });
      console.log("Firebase initialized with databaseURL:", url);
      initialized = true;
      return true;
    } catch (err: any) {
      lastErr = err;
      if (err && err.message) {
        const m = err.message.match(/https:\/\/[^)\s]+/);
        if (m && m[0]) {
          const hinted = m[0];
          if (!tried.has(hinted)) candidates.unshift(hinted);
        }
      }
      try {
        if (admin.apps && admin.apps.length > 0)
          await Promise.all(admin.apps.map((a) => a!.delete()));
      } catch {}
      return false;
    }
  };

  while (candidates.length > 0) {
    const c = candidates.shift();
    if (!c) continue;
    const norm = c.trim();
    if (tried.has(norm)) continue;
    tried.add(norm);
    try {
      const url = norm.startsWith("http") ? norm : `https://${norm}`;
      const ok = await tryInit(url);
      if (ok) return;
    } catch (e) {
      lastErr = e;
    }
  }

  throw (
    lastErr ?? new Error("Unable to initialize Firebase Realtime Database URL")
  );
}

export async function sendDeviceNotification(
  targetToken: string,
  title: string,
  body: string,
  data?: Record<string, string>,
) {
  if (!initialized) await initFirebase();

  const message: admin.messaging.Message = {
    token: targetToken,
    notification: { title, body },
    data: (data
      ? Object.fromEntries(Object.entries(data).map(([k, v]) => [k, String(v)]))
      : {}) as Record<string, string>,
  };

  try {
    const result = await admin.messaging().send(message);
    return { success: true, messageId: result };
  } catch (err: unknown) {
    const e = err as { code?: string; message?: string };
    if (
      e.code === "messaging/registration-token-not-registered" ||
      e.code === "messaging/invalid-registration-token"
    ) {
      return {
        success: false,
        error: "invalid_token",
        code: e.code,
        message: e.message,
      };
    }
    throw err;
  }
}

export async function sendTopicNotification(
  topicName: string,
  title: string,
  body: string,
  data?: Record<string, string>,
) {
  if (!initialized) await initFirebase();

  const message: admin.messaging.Message = {
    topic: topicName,
    notification: { title, body },
    data: (data
      ? Object.fromEntries(Object.entries(data).map(([k, v]) => [k, String(v)]))
      : {}) as Record<string, string>,
  };

  await admin.messaging().send(message);
  return { success: true };
}

export default { initFirebase, sendDeviceNotification, sendTopicNotification };
