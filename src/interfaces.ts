import { User } from '@/AuthContext.tsx';
import { ReactNode } from 'react';

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

export interface ActivityForm {
    name: string;
    dayOfWeek: string;
    startTime: string;
    endTime: string;
    roomId: string;
}

export interface AuthResponse {
    user: User;
    token: string;
}

export interface ErrorResponse {
    error: string;
}

export interface Column {
    title: string;
    dataIndex: string;
    key: string;
    render?: (record: Record<string, never>) => ReactNode;
}

export interface Pagination {
    pageable: {
        pageNumber: number;
        pageSize: number;
    };
    totalPages: number;
    totalElements: number;
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
