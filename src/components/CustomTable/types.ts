import { ReactNode } from 'react';

import { MergeAndOverride } from '@/types';

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

export type IdentifiedItem<T> = MergeAndOverride<T, { id: Key }>;

export type CustomTableProps = {
    columns: Column[];
    url: string;
    searchParams: Record<string, string | number>;
    actionButtons?: ActionButton[];
    selectedKey?: number | string;
    onRowSelection?: (rowId?: Key) => void;
    onPageChange: (page: number) => void;
    onSearch: (search: string) => void;
};
