"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-env jest */
jest.mock("../service/SensorSettingService", () => ({
    __esModule: true,
    default: { getSettingsByAlat: jest.fn() },
}));
jest.mock("../service/notificationService", () => ({
    __esModule: true,
    default: { sendTopicNotification: jest.fn(), initFirebase: jest.fn(), sendDeviceNotification: jest.fn() },
}));
jest.mock("../utils/prisma", () => ({
    __esModule: true,
    default: { sensorSetting: { update: jest.fn() } },
}));
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const SensorSettingService_1 = __importDefault(require("../service/SensorSettingService"));
const notificationService_1 = __importDefault(require("../service/notificationService"));
const prisma_1 = __importDefault(require("../utils/prisma"));
describe("NotificationController.processReading", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("returns 404 when setting not found", async () => {
        SensorSettingService_1.default.getSettingsByAlat.mockResolvedValue([]);
        const res = await (0, supertest_1.default)(app_1.default).post("/api/sensor/readings").send({ alatId: "a1", sensorType: "PH", value: 9 });
        expect(res.status).toBe(404);
        expect(res.body.errors).toBe("Setting not found");
        expect(notificationService_1.default.sendTopicNotification).not.toHaveBeenCalled();
    });
    it("does not notify when value within range", async () => {
        SensorSettingService_1.default.getSettingsByAlat.mockResolvedValue([
            {
                id: 1,
                alatId: "a1",
                sensor_type: "PH",
                is_active: true,
                min_value: 6,
                max_value: 8,
                alert_interval: 5,
                last_notified_at: null,
            },
        ]);
        const res = await (0, supertest_1.default)(app_1.default).post("/api/sensor/readings").send({ alatId: "a1", sensorType: "PH", value: 7 });
        expect(res.status).toBe(200);
        expect(notificationService_1.default.sendTopicNotification).not.toHaveBeenCalled();
    });
    it("sends notification and updates last_notified_at when breached and throttling allows", async () => {
        const tenMinutesAgo = new Date(Date.now() - 1000 * 60 * 10);
        SensorSettingService_1.default.getSettingsByAlat.mockResolvedValue([
            {
                id: 2,
                alatId: "a1",
                sensor_type: "PH",
                is_active: true,
                min_value: null,
                max_value: 8,
                alert_interval: 5,
                last_notified_at: tenMinutesAgo,
            },
        ]);
        notificationService_1.default.sendTopicNotification = jest
            .fn()
            .mockResolvedValue({ success: true, messageId: "m1" });
        prisma_1.default.sensorSetting.update = jest.fn().mockResolvedValue({});
        const res = await (0, supertest_1.default)(app_1.default).post("/api/sensor/readings").send({ alatId: "a1", sensorType: "PH", value: 9 });
        expect(res.status).toBe(200);
        expect(notificationService_1.default.sendTopicNotification).toHaveBeenCalledWith("alat_a1", expect.any(String), expect.any(String), expect.objectContaining({ sensorType: "PH", currentValue: "9", alertId: "2" }));
        expect(prisma_1.default.sensorSetting.update).toHaveBeenCalledWith(expect.objectContaining({
            where: { id: 2 },
            data: expect.objectContaining({ last_notified_at: expect.any(Date) }),
        }));
    });
    it("does not notify when throttled", async () => {
        const oneMinuteAgo = new Date(Date.now() - 1000 * 60 * 1);
        SensorSettingService_1.default.getSettingsByAlat.mockResolvedValue([
            {
                id: 3,
                alatId: "a1",
                sensor_type: "PH",
                is_active: true,
                min_value: null,
                max_value: 8,
                alert_interval: 5,
                last_notified_at: oneMinuteAgo,
            },
        ]);
        const res = await (0, supertest_1.default)(app_1.default).post("/api/sensor/readings").send({ alatId: "a1", sensorType: "PH", value: 9 });
        expect(res.status).toBe(200);
        expect(notificationService_1.default.sendTopicNotification).not.toHaveBeenCalled();
        expect(prisma_1.default.sensorSetting.update).not.toHaveBeenCalled();
    });
});
//# sourceMappingURL=notificationController.test.js.map