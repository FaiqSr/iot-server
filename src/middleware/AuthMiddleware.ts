import { NextFunction, Request, Response } from "express";
import { verifyJwt } from "../utils/jwt";

type AuthenticatedRequest = Request & { user?: { id?: string | undefined; email?: string | undefined; role?: string | undefined } };

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
    const payload = verifyJwt(token) as unknown as { userId?: string; email?: string; role?: string };
    (req as AuthenticatedRequest).user = { id: payload.userId, email: payload.email, role: payload.role };
    return next();
  } catch (_err) {
    return res.status(401).json({ error: "Invalid token" });
  }
}
