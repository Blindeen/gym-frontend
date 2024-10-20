export type Role = 'GUEST' | 'CUSTOMER' | 'TRAINER';

export type Image = {
    name: string;
    type: string;
    data: string;
};

type User = {
    firstName: string;
    lastName: string;
    email: string;
    role: Role;
    profilePicture: Image | null;
};

export type State = {
    isLogged: boolean;
    user: User;
    accessToken: string;
    refreshToken: string;
};

export type AuthorizationResponse = {
    user: User;
    accessToken: string;
    refreshToken: string;
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
    numberOfElements: number;
    first: boolean;
    empty: boolean;
};

export type DayOfWeek =
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday';

export type Pass = {
    id: number;
    name: string;
    monthlyPrice: number;
    length: number;
};

export type PaymentMethod = {
    id: number;
    name: string;
};

export type MergeAndOverride<T, K> = Omit<T, keyof K> & K;
