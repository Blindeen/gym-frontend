import { createContext, ReactNode, useEffect, useState } from 'react';

import { getLocalStorageItem, setLocalStorageItem } from '@/utils';

import { State } from '@/types.ts';
import { defaultStateValue, localStorageStateKey } from '@/values.ts';

type AuthContextType = {
    state: State;
    setState: (state: State) => void;
};

type AuthSessionProviderProps = {
    children: ReactNode;
};

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

    return (
        <AuthContext.Provider value={{ state, setState }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthSessionProvider;
