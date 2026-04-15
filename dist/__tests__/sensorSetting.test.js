"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
jest.mock("../utils/prisma", () => ({
    __esModule: true,
    default: {
        sensorSetting: {
            findUnique: jest.fn(),
            update: jest.fn(),
            findMany: jest.fn(),
        },
        alat: {
            findUnique: jest.fn(),
        },
    },
}));
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const prisma_1 = __importDefault(require("../utils/prisma"));
describe("SensorSetting routes", () => {
    const prisma = prisma_1.default;
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("updates a PH setting successfully", async () => {
        prisma.sensorSetting.findUnique.mockResolvedValue({
            id: 1,
            alatId: "a1",
            sensor_type: "PH",
            is_active: true,
            alert_interval: 5,
            last_notified_at: null,
        });
        prisma.sensorSetting.update.mockResolvedValue({
            id: 1,
            alatId: "a1",
            sensor_type: "PH",
            is_active: true,
            min_value: 6,
            max_value: 8,
            alert_interval: 5,
            last_notified_at: null,
        });
        const res = await (0, supertest_1.default)(app_1.default).patch("/api/settings/1").send({ min_value: 6, max_value: 8, alert_interval: 5 });
        expect(res.status).toBe(200);
        expect(res.body.data).toBeDefined();
        expect(res.body.data.min_value).toBe(6);
        expect(prisma.sensorSetting.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
        expect(prisma.sensorSetting.update).toHaveBeenCalled();
    });
    it("returns 400 when PH validation fails (value > 14)", async () => {
        prisma.sensorSetting.findUnique.mockResolvedValue({
            id: 2,
            alatId: "a1",
            sensor_type: "PH",
            is_active: true,
            alert_interval: 5,
            last_notified_at: null,
        });
        const res = await (0, supertest_1.default)(app_1.default).patch("/api/settings/2").send({ min_value: 15 });
        expect(res.status).toBe(400);
        expect(Array.isArray(res.body.errors) || typeof res.body.errors === "string").toBeTruthy();
    });
    it("returns 404 when alat not found for GET settings", async () => {
        prisma.alat.findUnique.mockResolvedValue(null);
        const res = await (0, supertest_1.default)(app_1.default).get("/api/settings/nonexistent");
        expect(res.status).toBe(404);
        expect(res.body.errors).toBe("Alat not found");
    });
});
//# sourceMappingURL=sensorSetting.test.js.map