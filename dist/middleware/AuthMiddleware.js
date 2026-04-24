"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = AuthMiddleware;
const jwt_1 = require("../utils/jwt");
async function AuthMiddleware(req, res, next) {
    const authHeader = (req.headers.authorization || req.headers.Authorization);
    if (!authHeader) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    const parts = authHeader.split(" ");
    const token = parts.length === 2 ? parts[1] : null;
    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    try {
        const payload = (0, jwt_1.verifyJwt)(token);
        req.user = { id: payload.userId, email: payload.email, role: payload.role };
        return next();
    }
    catch (err) {
        return res.status(401).json({ error: "Invalid token" });
    }
}
//# sourceMappingURL=AuthMiddleware.js.map