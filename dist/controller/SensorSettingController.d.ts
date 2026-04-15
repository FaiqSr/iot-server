import { NextFunction, Request, Response } from "express";
export declare class SensorSettingController {
    static getSettings(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    static updateSetting(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
}
export default SensorSettingController;
//# sourceMappingURL=SensorSettingController.d.ts.map