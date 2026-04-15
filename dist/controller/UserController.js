"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserService_1 = require("../service/UserService");
const AuthService_1 = require("../service/AuthService");
class UserController {
    static async register(req, res, next) {
        try {
            const response = await UserService_1.UserService.register(req.body);
            return res.status(201).json({ data: response });
        }
        catch (err) {
            return next(err);
        }
    }
    static async login(req, res, next) {
        try {
            const response = await AuthService_1.AuthService.login(req.body);
            return res.status(200).json({ data: response });
        }
        catch (err) {
            return next(err);
        }
    }
    static async logout(req, res, next) {
        try {
            // Stateless JWT: client should discard token. If you implement refresh tokens,
            // you can revoke them here.
            return res.status(200).json({ data: { message: "Logged out" } });
        }
        catch (err) {
            return next(err);
        }
    }
    static async me(req, res, next) {
        try {
            const user = req.user;
            return res.status(200).json({ data: user });
        }
        catch (err) {
            return next(err);
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map