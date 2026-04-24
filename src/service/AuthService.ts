import prismaClient from "../utils/prisma";
import { comparePassword } from "../utils/bcrypt";
import { signJwt, verifyJwt } from "../utils/jwt";
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

    const role = user.pekerjaan === "admin" ? "admin" : "user";

    const accessToken = signJwt({ userId: user.uuid, email: user.email, role }, "15m");
    const refreshToken = signJwt({ userId: user.uuid, email: user.email, role }, "7d");

      const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
      try {
        await prismaClient.refreshToken.create({
          data: {
            token: refreshToken,
            userId: user.uuid,
            expiresAt,
          },
        });
      } catch (e) {
        // ignore DB errors for now
      }

      return {
        accessToken,
        refreshToken,
        user: {
          id: user.uuid,
          email: user.email,
          name: user.name,
          role,
          ...(user.pekerjaan != null ? { pekerjaan: user.pekerjaan } : {}),
        },
      };
  }

  public static async refresh(refreshToken: string): Promise<{ accessToken: string; refreshToken: string }> {
    try {
      const payload = verifyJwt(refreshToken);

      if (!payload || !payload.userId) throw new Error("Invalid refresh token");
        const tokenRecord: any = await prismaClient.refreshToken.findUnique({ where: { token: refreshToken } });
        if (!tokenRecord || tokenRecord.revoked) throw new Error("Invalid refresh token");
        if (tokenRecord.expiresAt && new Date(tokenRecord.expiresAt) < new Date()) throw new Error("Invalid refresh token");

        const user = await prismaClient.user.findUnique({ where: { uuid: payload.userId } });
        if (!user) throw new Error("Invalid refresh token");

        const role = user.pekerjaan === "admin" ? "admin" : "user";

        const accessToken = signJwt({ userId: user.uuid, email: user.email, role }, "15m");
        return { accessToken, refreshToken };
    } catch (err) {
      throw new Error("Invalid refresh token");
    }
  }

    public static async logout(refreshToken: string): Promise<void> {
      if (!refreshToken) return;
      try {
        const tokenRecord: any = await prismaClient.refreshToken.findUnique({ where: { token: refreshToken } });
        if (!tokenRecord) return;
        await prismaClient.refreshToken.update({ where: { token: refreshToken }, data: { revoked: true } });
      } catch (err) {
        // ignore errors during logout
      }
    }
}
