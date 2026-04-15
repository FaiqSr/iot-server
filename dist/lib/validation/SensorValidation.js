"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_SCHEMA = exports.TEMP_SCHEMA = exports.PH_SCHEMA = exports.SENSOR_BASE = void 0;
const zod_1 = require("zod");
exports.SENSOR_BASE = zod_1.z.object({
    min_value: zod_1.z.number().nullable().optional(),
    max_value: zod_1.z.number().nullable().optional(),
    is_active: zod_1.z.boolean().optional(),
    alert_interval: zod_1.z.number().int().min(1).optional(),
});
exports.PH_SCHEMA = exports.SENSOR_BASE.extend({
    min_value: zod_1.z.number().min(0).max(14).nullable().optional(),
    max_value: zod_1.z.number().min(0).max(14).nullable().optional(),
});
exports.TEMP_SCHEMA = exports.SENSOR_BASE.extend({
    min_value: zod_1.z.number().min(-10).max(100).nullable().optional(),
    max_value: zod_1.z.number().min(-10).max(100).nullable().optional(),
});
exports.DEFAULT_SCHEMA = exports.SENSOR_BASE;
//# sourceMappingURL=SensorValidation.js.map