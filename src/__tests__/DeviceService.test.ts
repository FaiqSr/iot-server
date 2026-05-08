/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-require-imports */

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
    refreshToken: {
      create: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
    },
  },
}));

import prismaClient from "../utils/prisma";
import { DeviceService } from "../service/DeviceService";

describe("DeviceService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("claimDevice", () => {
    it("returns null when device not found", async () => {
      const prisma: any = prismaClient;
      prisma.alat.findUnique.mockResolvedValue(null);

      const res = await DeviceService.claimDevice("u1", "a1");
      expect(res).toBeNull();
    });

    it("creates relation when not exists and returns device", async () => {
      const prisma: any = prismaClient;
      const device = { id: "a1", nama: "D1", type: "T1" };
      prisma.alat.findUnique.mockResolvedValue(device);
      prisma.userAlat.findFirst.mockResolvedValue(null);
      prisma.userAlat.create.mockResolvedValue({ userId: "u1", alatId: "a1" });

      const res = await DeviceService.claimDevice("u1", "a1");

      expect(prisma.userAlat.create).toHaveBeenCalledWith({ data: { userId: "u1", alatId: "a1" } });
      expect(res).toEqual(device);
    });

    it("does not create relation if already exists", async () => {
      const prisma: any = prismaClient;
      const device = { id: "a1", nama: "D1", type: "T1" };
      prisma.alat.findUnique.mockResolvedValue(device);
      prisma.userAlat.findFirst.mockResolvedValue({ userId: "u1", alatId: "a1" });

      const res = await DeviceService.claimDevice("u1", "a1");

      expect(prisma.userAlat.create).not.toHaveBeenCalled();
      expect(res).toEqual(device);
    });
  });

  describe("getAllDevices", () => {
    it("returns all devices", async () => {
      const prisma: any = prismaClient;
      const list = [{ id: "a1" }, { id: "a2" }];
      prisma.alat.findMany.mockResolvedValue(list);

      const res = await DeviceService.getAllDevices();
      expect(res).toEqual(list);
    });
  });

  describe("getUserDevices", () => {
    it("returns user's devices", async () => {
      const prisma: any = prismaClient;
      prisma.userAlat.findMany.mockResolvedValue([{ alat: { id: "a1" } }, { alat: { id: "a2" } }]);

      const res = await DeviceService.getUserDevices("u1");
      expect(res).toEqual([{ id: "a1" }, { id: "a2" }]);
    });
  });
});
