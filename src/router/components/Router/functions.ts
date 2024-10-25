import { Role } from '@/types';

export const equals = (currentRole: Role, expectedRole: Role): boolean =>
    currentRole === expectedRole;

export const notEquals = (currentRole: Role, unexpectedRole: Role) =>
    currentRole !== unexpectedRole;
