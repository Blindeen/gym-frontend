import { createContext, ReactNode, useEffect, useState } from 'react';

import { getLocalStorageItem, setLocalStorageItem } from '@/utils';
import { localStorageDarkModeKey, defaultDarkModeValue } from '@/values.ts';

type ThemeContextType = {
    value: boolean;
    toggle: () => void;
};

type ThemeProviderProps = {
    children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({
    value: defaultDarkModeValue,
    toggle: () => {},
});

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [value, setValue] = useState<boolean>(() => {
        const value = getLocalStorageItem(localStorageDarkModeKey);
        const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
        return value ? JSON.parse(value) : darkThemeMq.matches;
    });

    const toggle = () => {
        setValue(!value);
    };

    useEffect(() => {
        setLocalStorageItem(localStorageDarkModeKey, JSON.stringify(value));
    }, [value]);

    return (
        <ThemeContext.Provider value={{ value: value, toggle: toggle }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
