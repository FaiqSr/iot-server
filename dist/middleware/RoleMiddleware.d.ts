import { NextFunction, Request, Response } from "express";
export declare function requireRole(role: string): (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
declare const _default: {
    requireRole: typeof requireRole;
};
export default _default;
//# sourceMappingURL=RoleMiddleware.d.ts.map