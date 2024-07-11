type Role = 'GUEST' | 'CUSTOMER' | 'TRAINER';

export type User = {
    email: string;
    role: Role;
};

export type AuthorizationResponse = {
    user: User;
    token: string;
};
