import { createContext, ReactNode, useEffect, useState } from 'react';

import { getLocalStorageItem, setLocalStorageItem } from '@/utils';
import { LOCAL_STORAGE_DARK_MODE_KEY, DEFAULT_DARK_MODE_VALUE } from '@/constants';

type ThemeContextType = {
    value: boolean;
    toggle: () => void;
};

type ThemeProviderProps = {
    children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({
    value: DEFAULT_DARK_MODE_VALUE,
    toggle: () => {},
});

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [value, setValue] = useState<boolean>(() => {
        const value = getLocalStorageItem(LOCAL_STORAGE_DARK_MODE_KEY);
        const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
        return value ? JSON.parse(value) : darkThemeMq.matches;
    });

    const toggle = () => {
        setValue(!value);
    };

    useEffect(() => {
        setLocalStorageItem(LOCAL_STORAGE_DARK_MODE_KEY, JSON.stringify(value));
    }, [value]);

    return (
        <ThemeContext.Provider value={{ value: value, toggle: toggle }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
