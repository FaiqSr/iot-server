import { ZodType } from "zod";

export class ValidationService {
  public static validate<T>(zodType: ZodType<T>, data: any): T {
    return zodType.parse(data);
  }
}
