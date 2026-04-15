import prisma from "../utils/prisma";

export class SensorSettingService {
  static async getSettingsByAlat(alatId: string) {
    const alat = await prisma.alat.findUnique({ where: { id: alatId } });
    if (!alat) {
      const err: any = new Error("Alat not found");
      err.status = 404;
      throw err;
    }

    return prisma.sensorSetting.findMany({ where: { alatId } });
  }

  static async updateSetting(
    settingId: number,
    data: {
      min_value?: number | null;
      max_value?: number | null;
      is_active?: boolean;
      alert_interval?: number;
      last_notified_at?: Date | null;
    },
  ) {
    const setting = await prisma.sensorSetting.findUnique({ where: { id: settingId } });
    if (!setting) {
      const err: any = new Error("SensorSetting not found");
      err.status = 404;
      throw err;
    }

    // Notification logic (boilerplate): when a sensor reading is processed elsewhere,
    // compute whether to send a notification by checking if enough time has passed since
    // the last notification. For example:
    //
    // const now = new Date();
    // const last = setting.last_notified_at; // nullable
    // const minutesSinceLast = last ? (now.getTime() - last.getTime()) / (1000 * 60) : Infinity;
    // if (minutesSinceLast > setting.alert_interval) {
    //   // Trigger Firebase notification here and then update last_notified_at
    // }
    //
    // The actual sending to Firebase should be done by a notification helper/service and
    // should not be executed synchronously in this update method unless intended.

    return prisma.sensorSetting.update({ where: { id: settingId }, data });
  }
}

export default SensorSettingService;
