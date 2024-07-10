export type Role = 'GUEST' | 'CUSTOMER' | 'TRAINER';

export type ResponseError = Record<string, string[]>;

export type AuthorizationResponse = {
    user: {
        email: string;
        role: Role;
    };
    token: string;
};
