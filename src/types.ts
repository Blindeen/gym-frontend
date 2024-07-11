type Role = 'GUEST' | 'CUSTOMER' | 'TRAINER';

type User = {
    email: string;
    role: Role;
};

export type State = {
    isLogged: boolean;
    user: User;
    token: string;
};

export type AuthorizationResponse = {
    user: User;
    token: string;
};
