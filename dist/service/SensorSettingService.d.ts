export declare class SensorSettingService {
    static getSettingsByAlat(alatId: string): Promise<{
        id: number;
        alatId: string;
        sensor_type: import("../generated/prisma/enums").SensorType;
        is_active: boolean;
        min_value: number | null;
        max_value: number | null;
        alert_interval: number;
        last_notified_at: Date | null;
    }[]>;
    static updateSetting(settingId: number, data: {
        min_value?: number | null;
        max_value?: number | null;
        is_active?: boolean;
        alert_interval?: number;
        last_notified_at?: Date | null;
    }): Promise<{
        id: number;
        alatId: string;
        sensor_type: import("../generated/prisma/enums").SensorType;
        is_active: boolean;
        min_value: number | null;
        max_value: number | null;
        alert_interval: number;
        last_notified_at: Date | null;
    }>;
}
export default SensorSettingService;
//# sourceMappingURL=SensorSettingService.d.ts.map