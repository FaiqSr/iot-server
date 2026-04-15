"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensorSettingController = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const SensorSettingService_1 = __importDefault(require("../service/SensorSettingService"));
const validation_1 = require("../utils/validation");
const SensorValidation_1 = require("../lib/validation/SensorValidation");
class SensorSettingController {
    static async getSettings(req, res, next) {
        try {
            const alatIdRaw = req.params.alatId;
            if (!alatIdRaw || Array.isArray(alatIdRaw)) {
                const e = new Error("Invalid alat id");
                e.status = 400;
                throw e;
            }
            const alatId = alatIdRaw;
            const settings = await SensorSettingService_1.default.getSettingsByAlat(alatId);
            return res.status(200).json({ data: settings });
        }
        catch (err) {
            return next(err);
        }
    }
    static async updateSetting(req, res, next) {
        try {
            const settingId = Number(req.params.settingId);
            if (!Number.isFinite(settingId)) {
                const e = new Error("Invalid setting id");
                e.status = 400;
                throw e;
            }
            const setting = await prisma_1.default.sensorSetting.findUnique({ where: { id: settingId } });
            if (!setting) {
                const e = new Error("SensorSetting not found");
                e.status = 404;
                throw e;
            }
            // Choose schema based on sensor type
            let schema = SensorValidation_1.DEFAULT_SCHEMA;
            if (setting.sensor_type === "PH")
                schema = SensorValidation_1.PH_SCHEMA;
            else if (setting.sensor_type === "TEMPERATURE")
                schema = SensorValidation_1.TEMP_SCHEMA;
            const data = validation_1.ValidationService.validate(schema, req.body);
            const updated = await SensorSettingService_1.default.updateSetting(settingId, data);
            return res.status(200).json({ data: updated });
        }
        catch (err) {
            return next(err);
        }
    }
}
exports.SensorSettingController = SensorSettingController;
exports.default = SensorSettingController;
//# sourceMappingURL=SensorSettingController.js.map