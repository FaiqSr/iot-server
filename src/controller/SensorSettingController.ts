import { NextFunction, Request, Response } from "express";
import prisma from "../utils/prisma";
import SensorSettingService from "../service/SensorSettingService";
import { ValidationService } from "../utils/validation";
import { PH_SCHEMA, TEMP_SCHEMA, DEFAULT_SCHEMA } from "../lib/validation/SensorValidation";

export class SensorSettingController {
  public static async getSettings(req: Request, res: Response, next: NextFunction) {
    try {
      const alatIdRaw = req.params.alatId;
      if (!alatIdRaw || Array.isArray(alatIdRaw)) {
        const e = new Error("Invalid alat id") as Error & { status?: number };
        e.status = 400;
        throw e;
      }
      const alatId = alatIdRaw;
      const settings = await SensorSettingService.getSettingsByAlat(alatId);
      return res.status(200).json({ data: settings });
    } catch (err) {
      return next(err);
    }
  }

  public static async updateSetting(req: Request, res: Response, next: NextFunction) {
    try {
      const settingId = Number(req.params.settingId);
      if (!Number.isFinite(settingId)) {
        const e = new Error("Invalid setting id") as Error & { status?: number };
        e.status = 400;
        throw e;
      }

      const setting = await prisma.sensorSetting.findUnique({ where: { id: settingId } });
      if (!setting) {
        const e = new Error("SensorSetting not found") as Error & { status?: number };
        e.status = 404;
        throw e;
      }

      // Choose schema based on sensor type
      let schema = DEFAULT_SCHEMA;
      if (setting.sensor_type === "PH") schema = PH_SCHEMA;
      else if (setting.sensor_type === "TEMPERATURE") schema = TEMP_SCHEMA;

      const data = ValidationService.validate(schema, req.body) as unknown;

      const updated = await SensorSettingService.updateSetting(settingId, data as unknown as {
        min_value?: number | null;
        max_value?: number | null;
        is_active?: boolean;
        alert_interval?: number;
      });
      return res.status(200).json({ data: updated });
    } catch (err) {
      return next(err);
    }
  }
}

export default SensorSettingController;
