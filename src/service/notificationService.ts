import admin from "firebase-admin";
import fs from "fs";
import path from "path";
import type { ServiceAccount } from "firebase-admin";

let initialized = false;

export function initFirebase(serviceAccount?: string | ServiceAccount) {
  if (initialized) return;
  let cred: ServiceAccount | undefined;

  if (typeof serviceAccount === "string") {
    const p = path.isAbsolute(serviceAccount) ? serviceAccount : path.join(process.cwd(), serviceAccount);
    if (!fs.existsSync(p)) throw new Error(`Firebase service account file not found at ${p}`);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    cred = require(p) as ServiceAccount;
  } else if (serviceAccount) {
    cred = serviceAccount as ServiceAccount;
  } else if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    try {
      cred = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON) as ServiceAccount;
    } catch (e) {
      throw new Error("Invalid FIREBASE_SERVICE_ACCOUNT_JSON");
    }
  } else if (process.env.FIREBASE_SERVICE_ACCOUNT_PATH) {
    const p = path.isAbsolute(process.env.FIREBASE_SERVICE_ACCOUNT_PATH)
      ? process.env.FIREBASE_SERVICE_ACCOUNT_PATH
      : path.join(process.cwd(), process.env.FIREBASE_SERVICE_ACCOUNT_PATH as string);
    if (!fs.existsSync(p)) throw new Error(`Firebase service account file not found at ${p}`);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    cred = require(p) as ServiceAccount;
  } else {
    throw new Error(
      "No Firebase service account provided. Set FIREBASE_SERVICE_ACCOUNT_PATH or FIREBASE_SERVICE_ACCOUNT_JSON.",
    );
  }

  admin.initializeApp({ credential: admin.credential.cert(cred) });
  initialized = true;
}

export async function sendDeviceNotification(
  targetToken: string,
  title: string,
  body: string,
  data?: Record<string, string>,
) {
  if (!initialized) initFirebase();

  const message: admin.messaging.Message = {
    token: targetToken,
    notification: { title, body },
    data: data ? Object.fromEntries(Object.entries(data).map(([k, v]) => [k, String(v)])) : undefined,
  };

  try {
    const result = await admin.messaging().send(message);
    return { success: true, messageId: result };
  } catch (err: any) {
    if (
      err?.code === "messaging/registration-token-not-registered" ||
      err?.code === "messaging/invalid-registration-token"
    ) {
      return { success: false, error: "invalid_token", code: err.code, message: err.message };
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
  if (!initialized) initFirebase();

  const message: admin.messaging.Message = {
    topic: topicName,
    notification: { title, body },
    data: data ? Object.fromEntries(Object.entries(data).map(([k, v]) => [k, String(v)])) : undefined,
  };

  try {
    const result = await admin.messaging().send(message);
    return { success: true, messageId: result };
  } catch (err: any) {
    throw err;
  }
}

export default { initFirebase, sendDeviceNotification, sendTopicNotification };
