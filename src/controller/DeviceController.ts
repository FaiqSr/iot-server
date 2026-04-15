import { NextFunction, Request, Response } from "express";
import { DeviceService } from "../service/DeviceService";
import { ValidationService } from "../utils/validation";
import { DeviceValidation } from "../lib/validation/DeviceValidation";

export class DeviceController {
  public static async claimDevice(req: Request, res: Response, next: NextFunction) {
    try {
      const body = ValidationService.validate(DeviceValidation.CLAIM, req.body);
      const idAlat = body.idAlat;
      const user = (req as any).user;

      if (!user || !user.id) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const device = await DeviceService.claimDevice(user.id, idAlat);

      if (!device) {
        return res.status(404).json({ error: "Device not found" });
      }

      return res.status(200).json({ data: { id: device.id, nama: device.nama, type: device.type } });
    } catch (err) {
      return next(err);
    }
  }

  public static async listDevices(req: Request, res: Response, next: NextFunction) {
    try {
      const devices = await DeviceService.getAllDevices();
      return res.status(200).json({ data: devices });
    } catch (err) {
      return next(err);
    }
  }

  public static async myDevices(req: Request, res: Response, next: NextFunction) {
    try {
      const user = (req as any).user;
      if (!user || !user.id) return res.status(401).json({ error: "Unauthorized" });

      const devices = await DeviceService.getUserDevices(user.id);
      return res.status(200).json({ data: devices });
    } catch (err) {
      return next(err);
    }
  }
}
