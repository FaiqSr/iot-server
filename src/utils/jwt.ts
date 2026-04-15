import * as jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";

export function signJwt(payload: object, expiresIn: string = "1h"): string {
  return jwt.sign(payload as any, JWT_SECRET, { expiresIn });
}

export function verifyJwt(token: string): any {
  return jwt.verify(token, JWT_SECRET) as any;
}
