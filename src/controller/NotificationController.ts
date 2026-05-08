import { NextFunction, Request, Response } from "express";
import SensorSettingService from "../service/SensorSettingService";
import prisma from "../utils/prisma";
import NotificationService from "../service/notificationService";

type SensorSettingEntry = {
  id: number;
  alatId: string;
  sensor_type: string;
  is_active: boolean;
  min_value: number | null;
  max_value: number | null;
  alert_interval: number | null | undefined;
  last_notified_at?: string | null | Date;
};

export class NotificationController {
  public static async processReading(req: Request, res: Response, next: NextFunction) {
    try {
      const { alatId, sensorType, value } = req.body as { alatId?: string; sensorType?: string; value?: number };
      if (!alatId || !sensorType || typeof value !== "number") {
        const e = new Error("Invalid payload") as Error & { status?: number };
        e.status = 400;
        throw e;
      }

      const settings = (await SensorSettingService.getSettingsByAlat(alatId)) as SensorSettingEntry[];
      const setting = settings.find((s) => s.sensor_type === sensorType);
      if (!setting) {
        return res.status(404).json({ errors: "Setting not found" });
      }

      const breached =
        (setting.min_value !== null && typeof setting.min_value === "number" && value < setting.min_value) ||
        (setting.max_value !== null && typeof setting.max_value === "number" && value > setting.max_value);

      if (breached && setting.is_active) {
        const now = new Date();
        const minutesSinceLast = setting.last_notified_at
          ? (now.getTime() - new Date(setting.last_notified_at).getTime()) / (1000 * 60)
          : Infinity;

        if (minutesSinceLast > (setting.alert_interval ?? 0)) {
          const topic = `alat_${alatId}`; // convention: devices can subscribe to this topic

          await NotificationService.sendTopicNotification(
            topic,
            `Alert: ${sensorType}`,
            `Value ${value} is out of range`,
            {
              sensorType,
              currentValue: String(value),
              alertId: String(setting.id),
            },
          );

          // update last_notified_at so throttling works
          await prisma.sensorSetting.update({ where: { id: setting.id }, data: { last_notified_at: now } });
        }
      }

      return res.status(200).json({ ok: true });
    } catch (err) {
      return next(err);
    }
  }
}

export default NotificationController;
