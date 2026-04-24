import { NextFunction, Request, Response } from "express";
import { UserService } from "../service/UserService";

export function requireRole(role: string) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;
    if (!user || !user.id) return res.status(401).json({ error: "Unauthorized" });

    // Fast path: check role from token if present
    if (user.role) {
      if (user.role === role) return next();
      return res.status(403).json({ error: "Forbidden" });
    }

    // Fallback: fetch latest user from DB
    try {
      const dbUser = await UserService.getById(user.id);
      const dbRole = dbUser?.role || (dbUser?.pekerjaan === "admin" ? "admin" : "user");
      if (dbRole !== role) return res.status(403).json({ error: "Forbidden" });
      return next();
    } catch (err) {
      return next(err);
    }
  };
}

export default { requireRole };
