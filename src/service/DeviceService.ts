import prismaClient from "../utils/prisma";

export class DeviceService {
  public static async claimDevice(userId: string, idAlat: string) {
    if (!idAlat) {
      throw new Error("IDAlat is required");
    }

    const device = await prismaClient.alat.findUnique({ where: { id: idAlat } });

    if (!device) {
      return null;
    }

    const existing = await prismaClient.userAlat.findFirst({ where: { userId, alatId: idAlat } });

    if (!existing) {
      await prismaClient.userAlat.create({ data: { userId, alatId: idAlat } });
    }

    return device;
  }

  public static async getAllDevices() {
    return prismaClient.alat.findMany();
  }

  public static async getUserDevices(userId: string) {
    const relations = await prismaClient.userAlat.findMany({ where: { userId }, include: { alat: true } });
    return relations.map((r) => r.alat);
  }

  public static async removeDevice(userId: string, idAlat: string) {
    if (!idAlat) {
      throw new Error("IDAlat is required");
    }

    const device = await prismaClient.alat.findUnique({ where: { id: idAlat } });

    if (!device) {
      return null;
    }

    const deleted = await prismaClient.userAlat.deleteMany({ where: { userId, alatId: idAlat } });

    if (deleted.count === 0) {
      return false;
    }

    return device;
  }

  public static async registerFcm(userId: string, fcmToken: string) {
    if (!fcmToken) throw new Error("FCM token is required");

    try {
      // if token already exists, associate it with the user (or return existing)
      const existing = await (prismaClient as any).fcmToken.findUnique({ where: { token: fcmToken } as any });
      if (existing) {
        if (existing.userId !== userId) {
          const updated = await (prismaClient as any).fcmToken.update({ where: { id: existing.id }, data: { userId } as any });
          return updated;
        }
        return existing;
      }

      const created = await (prismaClient as any).fcmToken.create({ data: { token: fcmToken, userId } as any });
      return created;
    } catch (err) {
      const created = await (prismaClient as any).fcmToken.create({ data: { token: fcmToken, userId } as any });
      return created;
    }
  }
}
