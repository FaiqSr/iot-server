import { z } from "zod";

export const SENSOR_BASE = z.object({
  min_value: z.number().nullable().optional(),
  max_value: z.number().nullable().optional(),
  is_active: z.boolean().optional(),
  alert_interval: z.number().int().min(1).optional(),
});

export const PH_SCHEMA = SENSOR_BASE.extend({
  min_value: z.number().min(0).max(14).nullable().optional(),
  max_value: z.number().min(0).max(14).nullable().optional(),
});

export const TEMP_SCHEMA = SENSOR_BASE.extend({
  min_value: z.number().min(-10).max(100).nullable().optional(),
  max_value: z.number().min(-10).max(100).nullable().optional(),
});

export const DEFAULT_SCHEMA = SENSOR_BASE;
