import { User } from '@/AuthContext.tsx';

export interface MenuItem {
    name: string;
    path: string;
    authorizedRoles: string[];
}

export interface RegisterForm {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    birthdate: string;
    addressLine: string;
    city: string;
    postalCode: string;
    phoneNumber: string;
    paymentMethod: string;
    passType: string;
}

export interface LoginForm {
    email: string;
    password: string;
}

export interface AuthResponse {
    user: User;
    token: string;
}

export interface ErrorResponse {
    error: string;
}

export interface ActivitiesResponse {
    content: Record<string, never>[];
    pageable: {
        pageNumber: number;
        pageSize: number;
    };
    totalPages: number;
    totalElements: number;
}
