import { NextFunction, Request, Response } from "express";
import { verifyJwt } from "../utils/jwt";

export async function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = (req.headers.authorization || req.headers.Authorization) as string | undefined;

  if (!authHeader) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const parts = authHeader.split(" ");
  const token = parts.length === 2 ? parts[1] : null;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const payload = verifyJwt(token);
    (req as any).user = { id: payload.userId, email: payload.email };
    return next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
}
