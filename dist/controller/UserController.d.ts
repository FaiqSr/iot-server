import { NextFunction, Request, Response } from "express";
export declare class UserController {
    static register(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    static login(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    static refresh(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    static logout(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    static me(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
}
//# sourceMappingURL=UserController.d.ts.map