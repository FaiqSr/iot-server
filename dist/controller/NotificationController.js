"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationController = void 0;
const SensorSettingService_1 = __importDefault(require("../service/SensorSettingService"));
const prisma_1 = __importDefault(require("../utils/prisma"));
const notificationService_1 = __importDefault(require("../service/notificationService"));
class NotificationController {
    static async processReading(req, res, next) {
        try {
            const { alatId, sensorType, value } = req.body;
            if (!alatId || !sensorType || typeof value !== "number") {
                const e = new Error("Invalid payload");
                e.status = 400;
                throw e;
            }
            const settings = await SensorSettingService_1.default.getSettingsByAlat(alatId);
            const setting = settings.find((s) => s.sensor_type === sensorType);
            if (!setting) {
                return res.status(404).json({ errors: "Setting not found" });
            }
            const breached = (setting.min_value !== null && typeof setting.min_value === "number" && value < setting.min_value) ||
                (setting.max_value !== null && typeof setting.max_value === "number" && value > setting.max_value);
            if (breached && setting.is_active) {
                const now = new Date();
                const minutesSinceLast = setting.last_notified_at
                    ? (now.getTime() - new Date(setting.last_notified_at).getTime()) / (1000 * 60)
                    : Infinity;
                if (minutesSinceLast > (setting.alert_interval ?? 0)) {
                    const topic = `alat_${alatId}`; // convention: devices can subscribe to this topic
                    await notificationService_1.default.sendTopicNotification(topic, `Alert: ${sensorType}`, `Value ${value} is out of range`, {
                        sensorType,
                        currentValue: String(value),
                        alertId: String(setting.id),
                    });
                    // update last_notified_at so throttling works
                    await prisma_1.default.sensorSetting.update({ where: { id: setting.id }, data: { last_notified_at: now } });
                }
            }
            return res.status(200).json({ ok: true });
        }
        catch (err) {
            return next(err);
        }
    }
}
exports.NotificationController = NotificationController;
exports.default = NotificationController;
//# sourceMappingURL=NotificationController.js.map