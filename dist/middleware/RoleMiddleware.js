"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireRole = requireRole;
const UserService_1 = require("../service/UserService");
function requireRole(role) {
    return async (req, res, next) => {
        const user = req.user;
        if (!user || !user.id)
            return res.status(401).json({ error: "Unauthorized" });
        // Fast path: check role from token if present
        if (user.role) {
            if (user.role === role)
                return next();
            return res.status(403).json({ error: "Forbidden" });
        }
        // Fallback: fetch latest user from DB
        try {
            const dbUser = await UserService_1.UserService.getById(user.id);
            const dbRole = dbUser?.role || (dbUser?.pekerjaan === "admin" ? "admin" : "user");
            if (dbRole !== role)
                return res.status(403).json({ error: "Forbidden" });
            return next();
        }
        catch (err) {
            return next(err);
        }
    };
}
exports.default = { requireRole };
//# sourceMappingURL=RoleMiddleware.js.map