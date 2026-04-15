"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
jest.mock("../utils/prisma", () => ({
    __esModule: true,
    default: {
        sensorSetting: {
            findFirst: jest.fn(),
            update: jest.fn(),
        },
    },
}));
const SensorSettingService_1 = __importDefault(require("../service/SensorSettingService"));
const NotificationService_1 = __importDefault(require("../service/NotificationService"));
const prisma_1 = __importDefault(require("../utils/prisma"));
const prisma = prisma_1.default;
describe("SensorSettingService.handleSensorReading", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        delete process.env.FIREBASE_SERVER_KEY;
    });
    it("notifies when value out of range and interval elapsed", async () => {
        prisma.sensorSetting.findFirst.mockResolvedValue({
            id: 1,
            alatId: "a1",
            sensor_type: "PH",
            is_active: true,
            min_value: 6,
            max_value: 8,
            alert_interval: 1,
            last_notified_at: new Date(Date.now() - 1000 * 60 * 10),
        });
        prisma.sensorSetting.update.mockResolvedValue({});
        const sendSpy = jest.spyOn(NotificationService_1.default, "sendToTopic").mockResolvedValue({ mocked: true });
        const res = await SensorSettingService_1.default.handleSensorReading("a1", "PH", 9);
        expect(res).toEqual({ notified: true });
        expect(sendSpy).toHaveBeenCalledWith("alat-a1", expect.any(Object));
        expect(prisma.sensorSetting.update).toHaveBeenCalled();
    });
    it("does not notify when interval has not elapsed", async () => {
        prisma.sensorSetting.findFirst.mockResolvedValue({
            id: 2,
            alatId: "a1",
            sensor_type: "PH",
            is_active: true,
            min_value: 6,
            max_value: 8,
            alert_interval: 10,
            last_notified_at: new Date(),
        });
        const sendSpy = jest.spyOn(NotificationService_1.default, "sendToTopic").mockResolvedValue({ mocked: true });
        const res = await SensorSettingService_1.default.handleSensorReading("a1", "PH", 9);
        expect(res.notified).toBe(false);
        expect(sendSpy).not.toHaveBeenCalled();
    });
});
//# sourceMappingURL=sensorNotification.test.js.map