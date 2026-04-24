export declare class DeviceService {
    static claimDevice(userId: string, idAlat: string): Promise<{
        type: string;
        id: string;
        nama: string;
    } | null>;
    static getAllDevices(): Promise<{
        type: string;
        id: string;
        nama: string;
    }[]>;
    static getUserDevices(userId: string): Promise<{
        type: string;
        id: string;
        nama: string;
    }[]>;
    static removeDevice(userId: string, idAlat: string): Promise<false | {
        type: string;
        id: string;
        nama: string;
    } | null>;
}
//# sourceMappingURL=DeviceService.d.ts.map