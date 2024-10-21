import { ReactNode } from 'react';

import { MergeAndOverride, Pagination } from '@/types';

type Column = {
    key: string;
    label: string;
};

type Row<T> = MergeAndOverride<T, { id: number }>;

export type ActionButton = {
    children: string;
    startContent: ReactNode;
    color: 'primary' | 'success' | 'warning' | 'danger';
    onPress: () => void;
    alwaysEnabled: boolean;
};

export type CustomTableProps<T> = {
    columns: Column[];
    rows: Row<T>[];
    actionButtons?: ActionButton[];
    pagination?: Pagination;
};
