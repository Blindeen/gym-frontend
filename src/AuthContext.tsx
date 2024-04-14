import { createContext, FC, ReactNode, useState } from 'react';

export type Role = 'GUEST' | 'CLIENT' | 'TRAINER';

interface User {
    id: number | null;
    email: string;
    token: string;
}

interface State {
    isLogged: boolean;
    role: Role;
    user: User;
}

type AuthContextType = {
    state: State;
    setState: (state: State) => void;
};

const defaultStateValue: State = {
    isLogged: false,
    role: 'GUEST',
    user: {
        id: null,
        email: '',
        token: '',
    },
};

export const AuthContext = createContext<AuthContextType>({
    state: defaultStateValue,
    setState: () => {},
});

const AuthSessionProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [state, setState] = useState(defaultStateValue);

    return (
        <AuthContext.Provider value={{ state, setState }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthSessionProvider;
