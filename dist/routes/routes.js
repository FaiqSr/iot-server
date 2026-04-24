"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controller/UserController");
const AuthMiddleware_1 = require("../middleware/AuthMiddleware");
const DeviceController_1 = require("../controller/DeviceController");
const SensorSettingController_1 = require("../controller/SensorSettingController");
const NotificationController_1 = require("../controller/NotificationController");
const router = (0, express_1.Router)();
router.post("/api/user/register", async (req, res, next) => UserController_1.UserController.register(req, res, next));
router.post("/api/user/login", async (req, res, next) => UserController_1.UserController.login(req, res, next));
router.post("/api/user/refresh", async (req, res, next) => UserController_1.UserController.refresh(req, res, next));
router.post("/api/user/logout", async (req, res, next) => UserController_1.UserController.logout(req, res, next));
router.get("/api/user/me", AuthMiddleware_1.AuthMiddleware, async (req, res, next) => UserController_1.UserController.me(req, res, next));
router.post("/api/device/claim", AuthMiddleware_1.AuthMiddleware, async (req, res, next) => DeviceController_1.DeviceController.claimDevice(req, res, next));
// legacy / alternate route used in integration tests
router.post("/api/claim-device", AuthMiddleware_1.AuthMiddleware, async (req, res, next) => DeviceController_1.DeviceController.claimDevice(req, res, next));
router.get("/api/devices", async (req, res, next) => DeviceController_1.DeviceController.listDevices(req, res, next));
router.get("/api/user/devices", AuthMiddleware_1.AuthMiddleware, async (req, res, next) => DeviceController_1.DeviceController.myDevices(req, res, next));
router.delete("/api/user/devices/:alatId", AuthMiddleware_1.AuthMiddleware, async (req, res, next) => DeviceController_1.DeviceController.removeDevice(req, res, next));
router.get("/api/settings/:alatId", async (req, res, next) => SensorSettingController_1.SensorSettingController.getSettings(req, res, next));
router.patch("/api/settings/:settingId", async (req, res, next) => SensorSettingController_1.SensorSettingController.updateSetting(req, res, next));
router.post("/api/sensor/readings", async (req, res, next) => NotificationController_1.NotificationController.processReading(req, res, next));
exports.default = router;
//# sourceMappingURL=routes.js.map