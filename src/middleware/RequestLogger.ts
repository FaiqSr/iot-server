import { Request, Response, NextFunction } from "express";

const SENSITIVE_KEYS = [
  "password",
  "token",
  "fcmtoken",
  "fcm_token",
  "authorization",
  "auth",
  "accessToken",
  "refreshToken",
];

function maskSensitive(obj: any): any {
  if (obj == null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(maskSensitive);
  const out: any = {};
  for (const k of Object.keys(obj)) {
    const v = obj[k];
    if (SENSITIVE_KEYS.some((s) => k.toLowerCase().includes(s.toLowerCase()))) {
      out[k] = "[REDACTED]";
    } else if (typeof v === "object" && v !== null) {
      out[k] = maskSensitive(v);
    } else {
      out[k] = v;
    }
  }
  return out;
}

export default function requestLogger(req: Request, res: Response, next: NextFunction) {
  const start = process.hrtime();
  const { method, originalUrl } = req;
  const safeParams = maskSensitive(req.params);
  const safeQuery = maskSensitive(req.query);
  const safeBody = maskSensitive(req.body);

  console.log(
    `[${new Date().toISOString()}] → ${method} ${originalUrl} params=${JSON.stringify(
      safeParams
    )} query=${JSON.stringify(safeQuery)} body=${JSON.stringify(safeBody)}`
  );

  res.on("finish", () => {
    const diff = process.hrtime(start);
    const ms = Math.round(diff[0] * 1000 + diff[1] / 1e6);
    console.log(
      `[${new Date().toISOString()}] ← ${method} ${originalUrl} status=${res.statusCode} duration=${ms}ms`
    );
  });

  next();
}
