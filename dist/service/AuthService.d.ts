import { LoginRequest, LoginResponse } from "../lib/types/user";
export declare class AuthService {
    static login(request: LoginRequest): Promise<LoginResponse>;
    static refresh(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    static logout(refreshToken: string): Promise<void>;
}
//# sourceMappingURL=AuthService.d.ts.map