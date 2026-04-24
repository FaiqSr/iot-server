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
    static async refresh(req, res, next) {
        try {
            const { refreshToken } = req.body;
            const tokens = await AuthService_1.AuthService.refresh(refreshToken);
            return res.status(200).json({ data: tokens });
        }
        catch (err) {
            return next(err);
        }
    }
    static async logout(req, res, next) {
        try {
            const { refreshToken } = req.body;
            if (refreshToken)
                await AuthService_1.AuthService.logout(refreshToken);
            return res.status(200).json({ data: { message: "Logged out" } });
        }
        catch (err) {
            return next(err);
        }
    }
    static async me(req, res, next) {
        try {
            const user = req.user;
            if (!user || !user.id)
                return res.status(401).json({ error: "Unauthorized" });
            const dbUser = await UserService_1.UserService.getById(user.id);
            if (!dbUser)
                return res.status(404).json({ error: "User not found" });
            return res.status(200).json({ data: dbUser });
        }
        catch (err) {
            return next(err);
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map