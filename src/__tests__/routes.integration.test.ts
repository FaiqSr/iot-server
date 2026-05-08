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

jest.mock("../utils/jwt", () => ({
  __esModule: true,
  verifyJwt: jest.fn(),
  signJwt: jest.fn(),
}));

import request from "supertest";
import app from "../app";
import prismaClient from "../utils/prisma";
import { verifyJwt } from "../utils/jwt";

const validUuid = "123e4567-e89b-12d3-a456-426614174000";

describe("Routes integration", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/claim-device returns 401 without token", async () => {
    const res = await request(app).post("/api/claim-device").send({ idAlat: validUuid });
    expect(res.status).toBe(401);
  });

  it("POST /api/claim-device returns 400 for invalid body", async () => {
    (verifyJwt as jest.Mock).mockReturnValue({ userId: "u1", email: "a@b" });

    const res = await request(app)
      .post("/api/claim-device")
      .set("Authorization", "Bearer token")
      .send({ idAlat: "not-a-uuid" });

    expect(res.status).toBe(400);
    expect(res.body.errors).toBeDefined();
    expect(res.body.errors[0].message).toMatch(/uuid/i);
  });

  it("POST /api/claim-device returns 404 when device not found", async () => {
    (verifyJwt as jest.Mock).mockReturnValue({ userId: "u1", email: "a@b" });
    const prisma: any = prismaClient;
    prisma.alat.findUnique.mockResolvedValue(null);

    const res = await request(app)
      .post("/api/claim-device")
      .set("Authorization", "Bearer token")
      .send({ idAlat: validUuid });

    expect(res.status).toBe(404);
    expect(res.body.error).toBe("Device not found");
  });

  it("POST /api/claim-device succeeds and returns device", async () => {
    (verifyJwt as jest.Mock).mockReturnValue({ userId: "u1", email: "a@b" });
    const prisma: any = prismaClient;
    const device = { id: validUuid, nama: "Device1", type: "T1" };
    prisma.alat.findUnique.mockResolvedValue(device);
    prisma.userAlat.findFirst.mockResolvedValue(null);
    prisma.userAlat.create.mockResolvedValue({ userId: "u1", alatId: validUuid });

    const res = await request(app)
      .post("/api/claim-device")
      .set("Authorization", "Bearer token")
      .send({ idAlat: validUuid });

    expect(res.status).toBe(200);
    expect(res.body.data.id).toBe(validUuid);
  });

  it("GET /api/devices returns list", async () => {
    const prisma: any = prismaClient;
    const list = [{ id: "a1" }, { id: "a2" }];
    prisma.alat.findMany.mockResolvedValue(list);

    const res = await request(app).get("/api/devices");
    expect(res.status).toBe(200);
    expect(res.body.data).toEqual(list);
  });

  it("GET /api/user/devices returns user's devices", async () => {
    (verifyJwt as jest.Mock).mockReturnValue({ userId: "u1", email: "a@b" });
    const prisma: any = prismaClient;
    prisma.userAlat.findMany.mockResolvedValue([{ alat: { id: "a1" } }, { alat: { id: "a2" } }]);

    const res = await request(app).get("/api/user/devices").set("Authorization", "Bearer token");
    expect(res.status).toBe(200);
    expect(res.body.data).toEqual([{ id: "a1" }, { id: "a2" }]);
  });
});
