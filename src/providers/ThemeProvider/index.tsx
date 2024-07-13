import { createContext, useEffect, useState } from 'react';

import { getLocalStorageItem, setLocalStorageItem } from '@/utils';
import { localStorageDarkModeKey, defaultDarkModeValue } from '@/values.ts';

import {
    ThemeContextType,
    ThemeProviderProps,
} from '@/providers/ThemeProvider/types.ts';

export const ThemeContext = createContext<ThemeContextType>({
    value: defaultDarkModeValue,
    toggle: () => {},
});

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [value, setValue] = useState<boolean>(() => {
        const value = getLocalStorageItem(localStorageDarkModeKey);
        return value ? JSON.parse(value) : defaultDarkModeValue;
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
