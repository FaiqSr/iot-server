import type { ServiceAccount } from "firebase-admin";
export declare function initFirebase(serviceAccount?: string | ServiceAccount): void;
export declare function sendDeviceNotification(targetToken: string, title: string, body: string, data?: Record<string, string>): Promise<{
    success: boolean;
    messageId: string;
    error?: never;
    code?: never;
    message?: never;
} | {
    success: boolean;
    error: string;
    code: any;
    message: any;
    messageId?: never;
}>;
export declare function sendTopicNotification(topicName: string, title: string, body: string, data?: Record<string, string>): Promise<{
    success: boolean;
    messageId: string;
}>;
declare const _default: {
    initFirebase: typeof initFirebase;
    sendDeviceNotification: typeof sendDeviceNotification;
    sendTopicNotification: typeof sendTopicNotification;
};
export default _default;
//# sourceMappingURL=notificationService.d.ts.map