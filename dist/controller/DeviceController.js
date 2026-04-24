"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceController = void 0;
const DeviceService_1 = require("../service/DeviceService");
const validation_1 = require("../utils/validation");
const DeviceValidation_1 = require("../lib/validation/DeviceValidation");
class DeviceController {
    static async claimDevice(req, res, next) {
        try {
            const body = validation_1.ValidationService.validate(DeviceValidation_1.DeviceValidation.CLAIM, req.body);
            const idAlat = body.idAlat;
            const user = req.user;
            if (!user || !user.id) {
                return res.status(401).json({ error: "Unauthorized" });
            }
            const device = await DeviceService_1.DeviceService.claimDevice(user.id, idAlat);
            if (!device) {
                return res.status(404).json({ error: "Device not found" });
            }
            return res.status(200).json({ data: { id: device.id, nama: device.nama, type: device.type } });
        }
        catch (err) {
            return next(err);
        }
    }
    static async listDevices(req, res, next) {
        try {
            const devices = await DeviceService_1.DeviceService.getAllDevices();
            return res.status(200).json({ data: devices });
        }
        catch (err) {
            return next(err);
        }
    }
    static async myDevices(req, res, next) {
        try {
            const user = req.user;
            if (!user || !user.id)
                return res.status(401).json({ error: "Unauthorized" });
            const devices = await DeviceService_1.DeviceService.getUserDevices(user.id);
            return res.status(200).json({ data: devices });
        }
        catch (err) {
            return next(err);
        }
    }
    static async removeDevice(req, res, next) {
        try {
            const user = req.user;
            if (!user || !user.id)
                return res.status(401).json({ error: "Unauthorized" });
            const idAlat = req.params.alatId;
            const result = await DeviceService_1.DeviceService.removeDevice(user.id, idAlat);
            if (result === null) {
                return res.status(404).json({ error: "Device not found" });
            }
            if (result === false) {
                return res.status(404).json({ error: "Ownership not found" });
            }
            return res.status(200).json({ data: { id: result.id, nama: result.nama, type: result.type } });
        }
        catch (err) {
            return next(err);
        }
    }
}
exports.DeviceController = DeviceController;
//# sourceMappingURL=DeviceController.js.map