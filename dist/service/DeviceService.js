"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceService = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
class DeviceService {
    static async claimDevice(userId, idAlat) {
        if (!idAlat) {
            throw new Error("IDAlat is required");
        }
        const device = await prisma_1.default.alat.findUnique({ where: { id: idAlat } });
        if (!device) {
            return null;
        }
        // Check if relation already exists
        const existing = await prisma_1.default.userAlat.findFirst({ where: { userId, alatId: idAlat } });
        if (!existing) {
            await prisma_1.default.userAlat.create({ data: { userId, alatId: idAlat } });
        }
        return device;
    }
    static async getAllDevices() {
        return prisma_1.default.alat.findMany();
    }
    static async getUserDevices(userId) {
        const relations = await prisma_1.default.userAlat.findMany({ where: { userId }, include: { alat: true } });
        return relations.map((r) => r.alat);
    }
}
exports.DeviceService = DeviceService;
//# sourceMappingURL=DeviceService.js.map