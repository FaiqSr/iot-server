"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
jest.mock("../utils/prisma", () => ({
    __esModule: true,
    default: {
        alat: {
            findUnique: jest.fn(),
            findMany: jest.fn(),
        },
        userAlat: {
            findFirst: jest.fn(),
            create: jest.fn(),
            findMany: jest.fn(),
        },
    },
}));
jest.mock("../utils/jwt", () => ({
    __esModule: true,
    verifyJwt: jest.fn(),
    signJwt: jest.fn(),
}));
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const prisma_1 = __importDefault(require("../utils/prisma"));
const jwt_1 = require("../utils/jwt");
const validUuid = "123e4567-e89b-12d3-a456-426614174000";
describe("Routes integration", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("POST /api/claim-device returns 401 without token", async () => {
        const res = await (0, supertest_1.default)(app_1.default).post("/api/claim-device").send({ idAlat: validUuid });
        expect(res.status).toBe(401);
    });
    it("POST /api/claim-device returns 400 for invalid body", async () => {
        jwt_1.verifyJwt.mockReturnValue({ userId: "u1", email: "a@b" });
        const res = await (0, supertest_1.default)(app_1.default)
            .post("/api/claim-device")
            .set("Authorization", "Bearer token")
            .send({ idAlat: "not-a-uuid" });
        expect(res.status).toBe(400);
        expect(res.body.errors).toBeDefined();
        expect(res.body.errors[0].message).toMatch(/uuid/i);
    });
    it("POST /api/claim-device returns 404 when device not found", async () => {
        jwt_1.verifyJwt.mockReturnValue({ userId: "u1", email: "a@b" });
        const prisma = prisma_1.default;
        prisma.alat.findUnique.mockResolvedValue(null);
        const res = await (0, supertest_1.default)(app_1.default)
            .post("/api/claim-device")
            .set("Authorization", "Bearer token")
            .send({ idAlat: validUuid });
        expect(res.status).toBe(404);
        expect(res.body.error).toBe("Device not found");
    });
    it("POST /api/claim-device succeeds and returns device", async () => {
        jwt_1.verifyJwt.mockReturnValue({ userId: "u1", email: "a@b" });
        const prisma = prisma_1.default;
        const device = { id: validUuid, nama: "Device1", type: "T1" };
        prisma.alat.findUnique.mockResolvedValue(device);
        prisma.userAlat.findFirst.mockResolvedValue(null);
        prisma.userAlat.create.mockResolvedValue({ userId: "u1", alatId: validUuid });
        const res = await (0, supertest_1.default)(app_1.default)
            .post("/api/claim-device")
            .set("Authorization", "Bearer token")
            .send({ idAlat: validUuid });
        expect(res.status).toBe(200);
        expect(res.body.data.id).toBe(validUuid);
    });
    it("GET /api/devices returns list", async () => {
        const prisma = prisma_1.default;
        const list = [{ id: "a1" }, { id: "a2" }];
        prisma.alat.findMany.mockResolvedValue(list);
        const res = await (0, supertest_1.default)(app_1.default).get("/api/devices");
        expect(res.status).toBe(200);
        expect(res.body.data).toEqual(list);
    });
    it("GET /api/user/devices returns user's devices", async () => {
        jwt_1.verifyJwt.mockReturnValue({ userId: "u1", email: "a@b" });
        const prisma = prisma_1.default;
        prisma.userAlat.findMany.mockResolvedValue([{ alat: { id: "a1" } }, { alat: { id: "a2" } }]);
        const res = await (0, supertest_1.default)(app_1.default).get("/api/user/devices").set("Authorization", "Bearer token");
        expect(res.status).toBe(200);
        expect(res.body.data).toEqual([{ id: "a1" }, { id: "a2" }]);
    });
});
//# sourceMappingURL=routes.integration.test.js.map