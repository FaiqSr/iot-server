import { NextFunction, Request, Response } from "express";
export declare class DeviceController {
    static claimDevice(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    static listDevices(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    static myDevices(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
}
//# sourceMappingURL=DeviceController.d.ts.map