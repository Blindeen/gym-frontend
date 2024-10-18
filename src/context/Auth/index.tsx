import { createContext, useEffect, useState } from 'react';

import { getLocalStorageItem, setLocalStorageItem } from '@/utils';
import { defaultStateValue, localStorageStateKey } from '@/values.ts';

import { AuthContextType, AuthSessionProviderProps } from '@/context/Auth/types';

export const AuthContext = createContext<AuthContextType>({
    state: defaultStateValue,
    setState: () => {},
});

const AuthSessionProvider = ({ children }: AuthSessionProviderProps) => {
    const [state, setState] = useState(() => {
        const savedState = getLocalStorageItem(localStorageStateKey);
        return savedState ? JSON.parse(savedState) : defaultStateValue;
    });

    useEffect(() => {
        setLocalStorageItem(localStorageStateKey, JSON.stringify(state));
    }, [state]);

    return <AuthContext.Provider value={{ state, setState }}>{children}</AuthContext.Provider>;
};

export default AuthSessionProvider;
