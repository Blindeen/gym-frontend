import { ReactNode } from 'react';

import { MergeAndOverride, Page } from '@/types';

type Column = {
    key: string;
    label: string;
};

export type ActionButton = {
    children: string;
    startContent: ReactNode;
    color: 'primary' | 'success' | 'warning' | 'danger';
    onPress: () => void;
    alwaysEnabled: boolean;
};

export type Key = string | number;

type Row<T> = MergeAndOverride<T, { id: Key }>;

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
