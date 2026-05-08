import { NextFunction, Request, Response } from "express";
import { UserService } from "../service/UserService";
import { AuthService } from "../service/AuthService";

type AuthenticatedRequest = Request & { user?: { id?: string; role?: string } };

export class UserController {
  public static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await UserService.register(req.body);

      return res.status(201).json({ data: response });
    } catch (err) {
      return next(err);
    }
  }

  public static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await AuthService.login(req.body);
      return res.status(200).json({ data: response });
    } catch (err) {
      return next(err);
    }
  }

  public static async refresh(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.body;
      const tokens = await AuthService.refresh(refreshToken);
      return res.status(200).json({ data: tokens });
    } catch (err) {
      return next(err);
    }
  }

  public static async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.body;
      if (refreshToken) await AuthService.logout(refreshToken);
      return res.status(200).json({ data: { message: "Logged out" } });
    } catch (err) {
      return next(err);
    }
  }

  public static async me(req: Request, res: Response, next: NextFunction) {
    try {
      const user = (req as AuthenticatedRequest).user;
      if (!user || !user.id) return res.status(401).json({ error: "Unauthorized" });

      const dbUser = await UserService.getById(user.id);
      if (!dbUser) return res.status(404).json({ error: "User not found" });

      return res.status(200).json({ data: dbUser });
    } catch (err) {
      return next(err);
    }
  }
}
