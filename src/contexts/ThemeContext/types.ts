import { ReactNode } from 'react';

export type ThemeContextType = {
    value: boolean;
    toggle: () => void;
};

export type ThemeProviderProps = {
    children: ReactNode;
};
