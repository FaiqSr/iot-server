"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const prisma_1 = __importDefault(require("../utils/prisma"));
const UserService_1 = require("../service/UserService");
const AuthService_1 = require("../service/AuthService");
const bcrypt_1 = require("../utils/bcrypt");
const jwt_1 = require("../utils/jwt");
describe("UserService", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    describe("register", () => {
        it("creates a user when email not in use", async () => {
            const prisma = prisma_1.default;
            prisma.user.findFirst.mockResolvedValue(null);
            prisma.user.create.mockResolvedValue({
                uuid: "u1",
                email: "alice@example.com",
                name: "Alice",
                password: "hashed-password",
            });
            bcrypt_1.hashPassword.mockResolvedValue("hashed-password");
            const result = await UserService_1.UserService.register({
                email: "alice@example.com",
                name: "Alice",
                password: "password123",
            });
            expect(prisma.user.findFirst).toHaveBeenCalledWith({ where: { email: "alice@example.com" } });
            expect(prisma.user.create).toHaveBeenCalled();
            expect(result).toEqual({ id: "u1", email: "alice@example.com", name: "Alice" });
        });
        it("throws when email already exists", async () => {
            const prisma = prisma_1.default;
            prisma.user.findFirst.mockResolvedValue({ uuid: "u1", email: "alice@example.com" });
            await expect(UserService_1.UserService.register({ email: "alice@example.com", name: "Alice", password: "password123" })).rejects.toThrow("Email already in use");
        });
    });
    describe("AuthService.login", () => {
        it("returns token and user on successful login", async () => {
            const prisma = prisma_1.default;
            prisma.user.findUnique.mockResolvedValue({
                uuid: "u1",
                email: "alice@example.com",
                name: "Alice",
                password: "hashed-password",
            });
            bcrypt_1.comparePassword.mockResolvedValue(true);
            jwt_1.signJwt.mockReturnValue("token");
            const res = await AuthService_1.AuthService.login({ email: "alice@example.com", password: "password123" });
            expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { email: "alice@example.com" } });
            expect(res.accessToken).toBe("token");
            expect(res.user).toEqual({ id: "u1", email: "alice@example.com", name: "Alice", role: "user" });
        });
        it("throws on invalid credentials", async () => {
            const prisma = prisma_1.default;
            prisma.user.findUnique.mockResolvedValue(null);
            await expect(AuthService_1.AuthService.login({ email: "unknown@example.com", password: "pass" })).rejects.toThrow("Invalid credentials");
        });
    });
});
//# sourceMappingURL=UserService.test.js.map