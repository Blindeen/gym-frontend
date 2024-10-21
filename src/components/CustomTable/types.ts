import { Key, ReactNode } from 'react';

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
export type IdentifiedItem<T> = MergeAndOverride<T, { id: Key }>;
export type CustomTableProps = {
    columns: Column[];
    url: string;
    actionButtons?: ActionButton[];
};
