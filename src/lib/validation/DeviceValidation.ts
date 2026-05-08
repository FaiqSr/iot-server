import z, { ZodType } from "zod";

export class DeviceValidation {
  static readonly CLAIM: ZodType<{ idAlat: string }> = z.object({
    idAlat: z.string()
  });

  static readonly REGISTER_FCM: ZodType<{ FCM: string }> = z.object({
    FCM: z.string(),
  });
}
