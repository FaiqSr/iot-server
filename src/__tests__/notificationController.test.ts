/* eslint-env jest */
jest.mock("../service/SensorSettingService", () => ({
  __esModule: true,
  default: { getSettingsByAlat: jest.fn() },
}));

jest.mock("../service/notificationService", () => ({
  __esModule: true,
  default: { sendTopicNotification: jest.fn(), initFirebase: jest.fn(), sendDeviceNotification: jest.fn() },
}));

jest.mock("../utils/prisma", () => ({
  __esModule: true,
  default: { sensorSetting: { update: jest.fn() } },
}));

import request from "supertest";
import app from "../app";
import SensorSettingService from "../service/SensorSettingService";
import NotificationService from "../service/notificationService";
import prisma from "../utils/prisma";

describe("NotificationController.processReading", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns 404 when setting not found", async () => {
    (SensorSettingService.getSettingsByAlat as jest.Mock).mockResolvedValue([]);

    const res = await request(app).post("/api/sensor/readings").send({ alatId: "a1", sensorType: "PH", value: 9 });

    expect(res.status).toBe(404);
    expect(res.body.errors).toBe("Setting not found");
    expect((NotificationService as any).sendTopicNotification).not.toHaveBeenCalled();
  });

  it("does not notify when value within range", async () => {
    (SensorSettingService.getSettingsByAlat as jest.Mock).mockResolvedValue([
      {
        id: 1,
        alatId: "a1",
        sensor_type: "PH",
        is_active: true,
        min_value: 6,
        max_value: 8,
        alert_interval: 5,
        last_notified_at: null,
      },
    ]);

    const res = await request(app).post("/api/sensor/readings").send({ alatId: "a1", sensorType: "PH", value: 7 });

    expect(res.status).toBe(200);
    expect((NotificationService as any).sendTopicNotification).not.toHaveBeenCalled();
  });

  it("sends notification and updates last_notified_at when breached and throttling allows", async () => {
    const tenMinutesAgo = new Date(Date.now() - 1000 * 60 * 10);
    (SensorSettingService.getSettingsByAlat as jest.Mock).mockResolvedValue([
      {
        id: 2,
        alatId: "a1",
        sensor_type: "PH",
        is_active: true,
        min_value: null,
        max_value: 8,
        alert_interval: 5,
        last_notified_at: tenMinutesAgo,
      },
    ]);

    (NotificationService as any).sendTopicNotification = jest
      .fn()
      .mockResolvedValue({ success: true, messageId: "m1" });
    (prisma as any).sensorSetting.update = jest.fn().mockResolvedValue({});

    const res = await request(app).post("/api/sensor/readings").send({ alatId: "a1", sensorType: "PH", value: 9 });

    expect(res.status).toBe(200);
    expect((NotificationService as any).sendTopicNotification).toHaveBeenCalledWith(
      "alat_a1",
      expect.any(String),
      expect.any(String),
      expect.objectContaining({ sensorType: "PH", currentValue: "9", alertId: "2" }),
    );

    expect((prisma as any).sensorSetting.update).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { id: 2 },
        data: expect.objectContaining({ last_notified_at: expect.any(Date) }),
      }),
    );
  });

  it("does not notify when throttled", async () => {
    const oneMinuteAgo = new Date(Date.now() - 1000 * 60 * 1);
    (SensorSettingService.getSettingsByAlat as jest.Mock).mockResolvedValue([
      {
        id: 3,
        alatId: "a1",
        sensor_type: "PH",
        is_active: true,
        min_value: null,
        max_value: 8,
        alert_interval: 5,
        last_notified_at: oneMinuteAgo,
      },
    ]);

    const res = await request(app).post("/api/sensor/readings").send({ alatId: "a1", sensorType: "PH", value: 9 });

    expect(res.status).toBe(200);
    expect((NotificationService as any).sendTopicNotification).not.toHaveBeenCalled();
    expect((prisma as any).sensorSetting.update).not.toHaveBeenCalled();
  });
});
