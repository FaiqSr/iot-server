import { RegisterUserResponse, RegisterUserRequest, LoginUser } from "../lib/types/user";
import { ValidationService } from "../utils/validation";
import { UserValidation } from "../lib/validation/UserValidation";
import prismaClient from "../utils/prisma";
import { hashPassword } from "../utils/bcrypt";

export class UserService {
  public static async register(request: RegisterUserRequest): Promise<RegisterUserResponse> {
    const validatedBody = ValidationService.validate(UserValidation.REGISTER, request);

    const userWithSameEmail = await prismaClient.user.findFirst({
      where: {
        email: validatedBody.email,
      },
    });

    if (userWithSameEmail) {
      throw new Error("Email already in use");
    }

    const hashedPassword = await hashPassword(validatedBody.password);

    const user = await prismaClient.user.create({
      data: {
        email: validatedBody.email,
        name: validatedBody.name,
        password: hashedPassword,
      },
    });

    return {
      id: user.uuid,
      email: user.email,
      name: user.name,
    };
  }

  public static async getById(userId: string): Promise<LoginUser | null> {
    const user = await prismaClient.user.findUnique({ where: { uuid: userId } });
    if (!user) return null;
    const role = user.pekerjaan === "admin" ? "admin" : "user";
    return {
      id: user.uuid,
      email: user.email,
      name: user.name,
      role,
      ...(user.pekerjaan != null ? { pekerjaan: user.pekerjaan } : {}),
    };
  }
}
