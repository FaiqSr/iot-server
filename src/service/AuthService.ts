import prismaClient from "../utils/prisma";
import { comparePassword } from "../utils/bcrypt";
import { signJwt } from "../utils/jwt";
import { LoginRequest, LoginResponse } from "../lib/types/user";

export class AuthService {
  public static async login(request: LoginRequest): Promise<LoginResponse> {
    const { email, password } = request;

    const user = await prismaClient.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isValid = await comparePassword(password, user.password);
    if (!isValid) {
      throw new Error("Invalid credentials");
    }

    const accessToken = signJwt({ userId: user.uuid, email: user.email });

    return {
      accessToken,
      user: {
        id: user.uuid,
        email: user.email,
        name: user.name,
      },
    };
  }
}
