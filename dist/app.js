"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const ErrorMiddleware_1 = require("./middleware/ErrorMiddleware");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.default);
// error handler
app.use(ErrorMiddleware_1.errorMiddleware);
exports.default = app;
//# sourceMappingURL=app.js.map