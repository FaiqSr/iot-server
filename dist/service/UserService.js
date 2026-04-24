"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const validation_1 = require("../utils/validation");
const UserValidation_1 = require("../lib/validation/UserValidation");
const prisma_1 = __importDefault(require("../utils/prisma"));
const bcrypt_1 = require("../utils/bcrypt");
class UserService {
    static async register(request) {
        const validatedBody = validation_1.ValidationService.validate(UserValidation_1.UserValidation.REGISTER, request);
        const userWithSameEmail = await prisma_1.default.user.findFirst({
            where: {
                email: validatedBody.email,
            },
        });
        if (userWithSameEmail) {
            throw new Error("Email already in use");
        }
        const hashedPassword = await (0, bcrypt_1.hashPassword)(validatedBody.password);
        const user = await prisma_1.default.user.create({
            data: {
                email: validatedBody.email,
                name: validatedBody.name,
                password: hashedPassword,
            },
        });
        return {
            id: user.uuid,
            email: user.email,
            name: user.name,
        };
    }
    static async getById(userId) {
        const user = await prisma_1.default.user.findUnique({ where: { uuid: userId } });
        if (!user)
            return null;
        const role = user.pekerjaan === "admin" ? "admin" : "user";
        return {
            id: user.uuid,
            email: user.email,
            name: user.name,
            role,
            ...(user.pekerjaan != null ? { pekerjaan: user.pekerjaan } : {}),
        };
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map