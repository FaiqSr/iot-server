import { z } from "zod";
export declare const SENSOR_BASE: z.ZodObject<{
    min_value: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    max_value: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    is_active: z.ZodOptional<z.ZodBoolean>;
    alert_interval: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const PH_SCHEMA: z.ZodObject<{
    is_active: z.ZodOptional<z.ZodBoolean>;
    alert_interval: z.ZodOptional<z.ZodNumber>;
    min_value: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    max_value: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
export declare const TEMP_SCHEMA: z.ZodObject<{
    is_active: z.ZodOptional<z.ZodBoolean>;
    alert_interval: z.ZodOptional<z.ZodNumber>;
    min_value: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    max_value: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
export declare const DEFAULT_SCHEMA: z.ZodObject<{
    min_value: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    max_value: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    is_active: z.ZodOptional<z.ZodBoolean>;
    alert_interval: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
//# sourceMappingURL=SensorValidation.d.ts.map