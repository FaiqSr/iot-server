import { RegisterUserResponse, RegisterUserRequest, LoginUser } from "../lib/types/user";
export declare class UserService {
    static register(request: RegisterUserRequest): Promise<RegisterUserResponse>;
    static getById(userId: string): Promise<LoginUser | null>;
}
//# sourceMappingURL=UserService.d.ts.map