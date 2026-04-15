import { NextFunction, Request, Response } from "express";
import { UserService } from "../service/UserService";
import { AuthService } from "../service/AuthService";

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

  public static async logout(req: Request, res: Response, next: NextFunction) {
    try {
      // Stateless JWT: client should discard token. If you implement refresh tokens,
      // you can revoke them here.
      return res.status(200).json({ data: { message: "Logged out" } });
    } catch (err) {
      return next(err);
    }
  }

  public static async me(req: Request, res: Response, next: NextFunction) {
    try {
      const user = (req as any).user;
      return res.status(200).json({ data: user });
    } catch (err) {
      return next(err);
    }
  }
}
