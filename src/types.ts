type Role = 'GUEST' | 'CUSTOMER' | 'TRAINER';

type User = {
    firstName: string;
    lastName: string;
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

type Sort = {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
};

type Pageable = {
    pageNumber: number;
    pageSize: number;
    sort: Sort;
    offset: number;
    unpaged: boolean;
    paged: boolean;
};

export type Page<T> = {
    content: T[];
    pageable: Pageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: Sort;
    numberOfElements: 5;
    first: boolean;
    empty: boolean;
};
