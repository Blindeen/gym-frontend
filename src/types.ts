export type Role = 'GUEST' | 'CUSTOMER' | 'TRAINER';

export type AuthorizationResponse = {
    user: {
        email: string;
        role: Role;
    };
    token: string;
};
