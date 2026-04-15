export type RegisterUserRequest = {
    email: string;
    name: string;
    password: string;
};
export type RegisterUserResponse = {
    id: string;
    email: string;
    name: string;
};
export type LoginRequest = {
    email: string;
    password: string;
};
export type LoginUser = {
    id: string;
    email: string;
    name: string;
};
export type LoginResponse = {
    accessToken: string;
    user: LoginUser;
};
//# sourceMappingURL=user.d.ts.map