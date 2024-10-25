import { createContext, ReactNode, useEffect, useState } from 'react';

import { getLocalStorageItem, setLocalStorageItem } from '@/utils';
import { DEFAULT_STATE_VALUE, LOCAL_STORAGE_STATE_KEY } from '@/constants';

import { State } from '@/types';

type AuthContextType = {
    state: State;
    setState: (state: State) => void;
};

type AuthSessionProviderProps = {
    children: ReactNode;
};

export const AuthContext = createContext<AuthContextType>({
    state: DEFAULT_STATE_VALUE,
    setState: () => {},
});

const AuthSessionProvider = ({ children }: AuthSessionProviderProps) => {
    const [state, setState] = useState(() => {
        const savedState = getLocalStorageItem(LOCAL_STORAGE_STATE_KEY);
        return savedState ? JSON.parse(savedState) : DEFAULT_STATE_VALUE;
    });

    useEffect(() => {
        setLocalStorageItem(LOCAL_STORAGE_STATE_KEY, JSON.stringify(state));
    }, [state]);

    return <AuthContext.Provider value={{ state, setState }}>{children}</AuthContext.Provider>;
};

export default AuthSessionProvider;
