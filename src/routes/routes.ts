import { Router } from "express";
import { UserController } from "../controller/UserController";
import { AuthMiddleware } from "../middleware/AuthMiddleware";
import { DeviceController } from "../controller/DeviceController";
import { SensorSettingController } from "../controller/SensorSettingController";
import { NotificationController } from "../controller/NotificationController";

const router = Router();

router.post("/user/register", async (req, res, next) => UserController.register(req, res, next));
router.post("/user/login", async (req, res, next) => UserController.login(req, res, next));
router.post("/user/logout", async (req, res, next) => UserController.logout(req, res, next));
router.get("/user/me", AuthMiddleware, async (req, res, next) => UserController.me(req, res, next));

router.post("/api/claim-device", AuthMiddleware, async (req, res, next) =>
  DeviceController.claimDevice(req, res, next),
);

router.get("/api/devices", async (req, res, next) => DeviceController.listDevices(req, res, next));
router.get("/api/user/devices", AuthMiddleware, async (req, res, next) => DeviceController.myDevices(req, res, next));

router.get("/api/settings/:alatId", async (req, res, next) => SensorSettingController.getSettings(req, res, next));

router.patch("/api/settings/:settingId", async (req, res, next) =>
  SensorSettingController.updateSetting(req, res, next),
);

router.post("/api/sensor/readings", async (req, res, next) => NotificationController.processReading(req, res, next));

export default router;
