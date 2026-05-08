import * as jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";

export function signJwt<T extends Record<string, unknown>>(payload: T, expiresIn = "1h"): string {
  return jwt.sign(payload as unknown as string | Buffer | object, JWT_SECRET, { expiresIn });
}

export function verifyJwt(token: string): unknown {
  return jwt.verify(token, JWT_SECRET) as unknown;
}
