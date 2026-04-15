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
        const accessToken = (0, jwt_1.signJwt)({ userId: user.uuid, email: user.email });
        return {
            accessToken,
            user: {
                id: user.uuid,
                email: user.email,
                name: user.name,
            },
        };
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=AuthService.js.map