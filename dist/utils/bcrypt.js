"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = hashPassword;
exports.comparePassword = comparePassword;
const bcrypt_1 = __importDefault(require("bcrypt"));
async function hashPassword(password, salt = 10) {
    const result = await bcrypt_1.default.hash(password, salt);
    return result;
}
async function comparePassword(password, hash) {
    const result = await bcrypt_1.default.compare(password, hash);
    return result;
}
//# sourceMappingURL=bcrypt.js.map