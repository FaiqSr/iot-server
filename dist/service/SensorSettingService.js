"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensorSettingService = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
class SensorSettingService {
    static async getSettingsByAlat(alatId) {
        const alat = await prisma_1.default.alat.findUnique({ where: { id: alatId } });
        if (!alat) {
            const err = new Error("Alat not found");
            err.status = 404;
            throw err;
        }
        return prisma_1.default.sensorSetting.findMany({ where: { alatId } });
    }
    static async updateSetting(settingId, data) {
        const setting = await prisma_1.default.sensorSetting.findUnique({ where: { id: settingId } });
        if (!setting) {
            const err = new Error("SensorSetting not found");
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
        return prisma_1.default.sensorSetting.update({ where: { id: settingId }, data });
    }
}
exports.SensorSettingService = SensorSettingService;
exports.default = SensorSettingService;
//# sourceMappingURL=SensorSettingService.js.map