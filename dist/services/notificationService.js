"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initFirebase = initFirebase;
exports.sendDeviceNotification = sendDeviceNotification;
exports.sendTopicNotification = sendTopicNotification;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
let initialized = false;
function initFirebase(serviceAccount) {
    if (initialized)
        return;
    let cred;
    if (typeof serviceAccount === "string") {
        const p = path_1.default.isAbsolute(serviceAccount) ? serviceAccount : path_1.default.join(process.cwd(), serviceAccount);
        if (!fs_1.default.existsSync(p))
            throw new Error(`Firebase service account file not found at ${p}`);
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        cred = require(p);
    }
    else if (serviceAccount) {
        cred = serviceAccount;
    }
    else if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
        try {
            cred = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
        }
        catch (e) {
            throw new Error("Invalid FIREBASE_SERVICE_ACCOUNT_JSON");
        }
    }
    else if (process.env.FIREBASE_SERVICE_ACCOUNT_PATH) {
        const p = path_1.default.isAbsolute(process.env.FIREBASE_SERVICE_ACCOUNT_PATH)
            ? process.env.FIREBASE_SERVICE_ACCOUNT_PATH
            : path_1.default.join(process.cwd(), process.env.FIREBASE_SERVICE_ACCOUNT_PATH);
        if (!fs_1.default.existsSync(p))
            throw new Error(`Firebase service account file not found at ${p}`);
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        cred = require(p);
    }
    else {
        throw new Error("No Firebase service account provided. Set FIREBASE_SERVICE_ACCOUNT_PATH or FIREBASE_SERVICE_ACCOUNT_JSON.");
    }
    firebase_admin_1.default.initializeApp({ credential: firebase_admin_1.default.credential.cert(cred) });
    initialized = true;
}
async function sendDeviceNotification(targetToken, title, body, data) {
    if (!initialized)
        initFirebase();
    const message = {
        token: targetToken,
        notification: { title, body },
        data: data ? Object.fromEntries(Object.entries(data).map(([k, v]) => [k, String(v)])) : undefined,
    };
    try {
        const result = await firebase_admin_1.default.messaging().send(message);
        return { success: true, messageId: result };
    }
    catch (err) {
        if (err?.code === "messaging/registration-token-not-registered" ||
            err?.code === "messaging/invalid-registration-token") {
            return { success: false, error: "invalid_token", code: err.code, message: err.message };
        }
        throw err;
    }
}
async function sendTopicNotification(topicName, title, body, data) {
    if (!initialized)
        initFirebase();
    const message = {
        topic: topicName,
        notification: { title, body },
        data: data ? Object.fromEntries(Object.entries(data).map(([k, v]) => [k, String(v)])) : undefined,
    };
    try {
        const result = await firebase_admin_1.default.messaging().send(message);
        return { success: true, messageId: result };
    }
    catch (err) {
        throw err;
    }
}
exports.default = { initFirebase, sendDeviceNotification, sendTopicNotification };
//# sourceMappingURL=notificationService.js.map