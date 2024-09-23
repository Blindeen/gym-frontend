export type Role = 'GUEST' | 'CUSTOMER' | 'TRAINER';

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

export type TrainerInfo = {
    firstName: string;
    lastName: string;
};

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

export type UserData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    birthdate: string;
    addressLine: string;
    city: string;
    postalCode: string;
    phoneNumber: string;
    paymentMethod: number;
    passType: number;
};
