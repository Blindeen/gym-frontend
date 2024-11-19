import { ReactNode } from 'react';

import { MergeAndOverride, Page } from '@/types';

export type Key = string | number;

export type Column = {
    key: Key;
    label: string;
    render?: (value: any, row: any) => ReactNode;
};

export type ActionButton = {
    children: string;
    className?: string;
    startContent: ReactNode;
    color: 'primary' | 'success' | 'warning' | 'danger';
    onPress: () => void;
    alwaysEnabled: boolean;
};

export type Row<T> = MergeAndOverride<T, { id: Key }>;

export type CustomTableProps<T> = {
    columns: Column[];
    data?: Page<Row<T>>;
    actionButtons?: ActionButton[];
    selectedKey?: Key;
    onRowSelection?: (rowId?: Key) => void;
    onPageChange: (page: number) => void;
    onSearch?: (search: string) => void;
    isLoading: boolean;
};
