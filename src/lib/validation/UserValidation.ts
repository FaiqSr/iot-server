import z, { ZodType } from "zod";
import { RegisterUserRequest } from "../types/user";

export class UserValidation {
  static readonly REGISTER: ZodType<RegisterUserRequest> = z.object({
    email: z.string().email().min(1).max(150),
    name: z.string().min(1).max(150),
    password: z.string().min(8).max(150),
  });
}
