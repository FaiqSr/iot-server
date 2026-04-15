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

    // Check if relation already exists
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
}
