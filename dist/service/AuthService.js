"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const bcrypt_1 = require("../utils/bcrypt");
const jwt_1 = require("../utils/jwt");
class AuthService {
    static async login(request) {
        const { email, password } = request;
        const user = await prisma_1.default.user.findUnique({
            where: { email },
        });
        if (!user) {
            throw new Error("Invalid credentials");
        }
        const isValid = await (0, bcrypt_1.comparePassword)(password, user.password);
        if (!isValid) {
            throw new Error("Invalid credentials");
        }
        const role = user.pekerjaan === "admin" ? "admin" : "user";
        const accessToken = (0, jwt_1.signJwt)({ userId: user.uuid, email: user.email, role }, "15m");
        const refreshToken = (0, jwt_1.signJwt)({ userId: user.uuid, email: user.email, role }, "7d");
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        try {
            await prisma_1.default.refreshToken.create({
                data: {
                    token: refreshToken,
                    userId: user.uuid,
                    expiresAt,
                },
            });
        }
        catch (e) {
            // ignore DB errors for now
        }
        return {
            accessToken,
            refreshToken,
            user: {
                id: user.uuid,
                email: user.email,
                name: user.name,
                role,
                ...(user.pekerjaan != null ? { pekerjaan: user.pekerjaan } : {}),
            },
        };
    }
    static async refresh(refreshToken) {
        try {
            const payload = (0, jwt_1.verifyJwt)(refreshToken);
            if (!payload || !payload.userId)
                throw new Error("Invalid refresh token");
            const tokenRecord = await prisma_1.default.refreshToken.findUnique({ where: { token: refreshToken } });
            if (!tokenRecord || tokenRecord.revoked)
                throw new Error("Invalid refresh token");
            if (tokenRecord.expiresAt && new Date(tokenRecord.expiresAt) < new Date())
                throw new Error("Invalid refresh token");
            const user = await prisma_1.default.user.findUnique({ where: { uuid: payload.userId } });
            if (!user)
                throw new Error("Invalid refresh token");
            const role = user.pekerjaan === "admin" ? "admin" : "user";
            const accessToken = (0, jwt_1.signJwt)({ userId: user.uuid, email: user.email, role }, "15m");
            return { accessToken, refreshToken };
        }
        catch (err) {
            throw new Error("Invalid refresh token");
        }
    }
    static async logout(refreshToken) {
        if (!refreshToken)
            return;
        try {
            const tokenRecord = await prisma_1.default.refreshToken.findUnique({ where: { token: refreshToken } });
            if (!tokenRecord)
                return;
            await prisma_1.default.refreshToken.update({ where: { token: refreshToken }, data: { revoked: true } });
        }
        catch (err) {
            // ignore errors during logout
        }
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=AuthService.js.map