/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-require-imports */

jest.mock("firebase-admin", () => {
  const messagingMock = { send: jest.fn() };
  const core = {
    initializeApp: jest.fn(),
    credential: { cert: jest.fn() },
    messaging: () => messagingMock,
  };
  return { __esModule: true, default: core, ...core };
});

describe("NotificationService", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("sends device notification successfully", async () => {
    const admin = require("firebase-admin");
    admin.messaging().send.mockResolvedValue("msgid-1");

    const NotificationService = require("../service/notificationService");
    await NotificationService.initFirebase({ projectId: "p", client_email: "a", private_key: "b" });

    const res = await NotificationService.sendDeviceNotification("token1", "Title", "Body", {
      sensorType: "PH",
      currentValue: "9.5",
      alertId: "1",
    });

    expect(res).toEqual({ success: true, messageId: "msgid-1" });
    expect(admin.messaging().send).toHaveBeenCalledWith(
      expect.objectContaining({
        token: "token1",
        notification: { title: "Title", body: "Body" },
        data: expect.any(Object),
      }),
    );
  });

  it("returns invalid_token for unregistered token", async () => {
    const admin = require("firebase-admin");
    admin
      .messaging()
      .send.mockRejectedValue({ code: "messaging/registration-token-not-registered", message: "Not registered" });

    const NotificationService = require("../service/notificationService");
    await NotificationService.initFirebase({ projectId: "p", client_email: "a", private_key: "b" });

    const res = await NotificationService.sendDeviceNotification("token1", "Title", "Body");
    expect(res).toEqual({
      success: false,
      error: "invalid_token",
      code: "messaging/registration-token-not-registered",
      message: "Not registered",
    });
  });

  it("sends topic notification successfully", async () => {
    const admin = require("firebase-admin");
    admin.messaging().send.mockResolvedValue("topic-msg");

    const NotificationService = require("../service/notificationService");
    await NotificationService.initFirebase({ projectId: "p", client_email: "a", private_key: "b" });

    const res = await NotificationService.sendTopicNotification("topic1", "T", "B", { foo: "bar" });
    expect(res).toEqual({ success: true, messageId: "topic-msg" });
    expect(admin.messaging().send).toHaveBeenCalledWith(
      expect.objectContaining({ topic: "topic1", notification: { title: "T", body: "B" }, data: expect.any(Object) }),
    );
  });
});
