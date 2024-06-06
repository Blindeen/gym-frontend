import { createContext, FC, ReactNode, useEffect, useState } from 'react';

export type Role = 'GUEST' | 'CUSTOMER' | 'TRAINER';

export interface User {
    email: string;
    role: Role;
}

interface State {
    isLogged: boolean;
    user: User;
    token: string;
}

type AuthContextType = {
    state: State;
    setState: (state: State) => void;
};

const defaultStateValue: State = {
    isLogged: false,
    user: {
        email: '',
        role: 'GUEST',
    },
    token: '',
};

export const AuthContext = createContext<AuthContextType>({
    state: defaultStateValue,
    setState: () => {},
});

const AuthSessionProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [state, setState] = useState(() => {
        const savedState = localStorage.getItem('authState');
        return savedState ? JSON.parse(savedState) : defaultStateValue;
    });

    useEffect(() => {
        localStorage.setItem('authState', JSON.stringify(state));
    }, [state]);

    return (
        <AuthContext.Provider value={{ state, setState }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthSessionProvider;
