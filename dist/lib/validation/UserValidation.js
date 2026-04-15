"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = __importDefault(require("zod"));
class UserValidation {
    static REGISTER = zod_1.default.object({
        email: zod_1.default.string().email().min(1).max(150),
        name: zod_1.default.string().min(1).max(150),
        password: zod_1.default.string().min(8).max(150),
    });
}
exports.UserValidation = UserValidation;
//# sourceMappingURL=UserValidation.js.map