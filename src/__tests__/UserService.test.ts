/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-require-imports */

jest.mock("../utils/prisma", () => ({
  __esModule: true,
  default: {
    user: {
      findFirst: jest.fn(),
      create: jest.fn(),
      findUnique: jest.fn(),
    },
    refreshToken: {
      create: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
    },
  },
}));

jest.mock("../utils/bcrypt", () => ({
  __esModule: true,
  hashPassword: jest.fn().mockResolvedValue("hashed-password"),
  comparePassword: jest.fn().mockResolvedValue(true),
}));

jest.mock("../utils/jwt", () => ({
  __esModule: true,
  signJwt: jest.fn().mockReturnValue("token"),
  verifyJwt: jest.fn(),
}));

import prismaClient from "../utils/prisma";
import { UserService } from "../service/UserService";
import { AuthService } from "../service/AuthService";
import { hashPassword, comparePassword } from "../utils/bcrypt";
import { signJwt } from "../utils/jwt";

describe("UserService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("register", () => {
    it("creates a user when email not in use", async () => {
      const prisma: any = prismaClient;
      prisma.user.findFirst.mockResolvedValue(null);
      prisma.user.create.mockResolvedValue({
        uuid: "u1",
        email: "alice@example.com",
        name: "Alice",
        password: "hashed-password",
      });

      (hashPassword as jest.Mock).mockResolvedValue("hashed-password");

      const result = await UserService.register({
        email: "alice@example.com",
        name: "Alice",
        password: "password123",
      });

      expect(prisma.user.findFirst).toHaveBeenCalledWith({ where: { email: "alice@example.com" } });
      expect(prisma.user.create).toHaveBeenCalled();
      expect(result).toEqual({ id: "u1", email: "alice@example.com", name: "Alice" });
    });

    it("throws when email already exists", async () => {
      const prisma: any = prismaClient;
      prisma.user.findFirst.mockResolvedValue({ uuid: "u1", email: "alice@example.com" });

      await expect(
        UserService.register({ email: "alice@example.com", name: "Alice", password: "password123" }),
      ).rejects.toThrow("Email already in use");
    });
  });

  describe("AuthService.login", () => {
    it("returns token and user on successful login", async () => {
      const prisma: any = prismaClient;
      prisma.user.findUnique.mockResolvedValue({
        uuid: "u1",
        email: "alice@example.com",
        name: "Alice",
        password: "hashed-password",
      });

      (comparePassword as jest.Mock).mockResolvedValue(true);
      (signJwt as jest.Mock).mockReturnValue("token");

      const res = await AuthService.login({ email: "alice@example.com", password: "password123" });

      expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { email: "alice@example.com" } });
      expect(res.accessToken).toBe("token");
      expect(res.user).toEqual({ id: "u1", email: "alice@example.com", name: "Alice", role: "user" });
    });

    it("throws on invalid credentials", async () => {
      const prisma: any = prismaClient;
      prisma.user.findUnique.mockResolvedValue(null);

      await expect(AuthService.login({ email: "unknown@example.com", password: "pass" })).rejects.toThrow(
        "Invalid credentials",
      );
    });
  });
});
