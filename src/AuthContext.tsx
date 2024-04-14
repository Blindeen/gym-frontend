import { createContext, FC, ReactNode, useState } from 'react';

interface User {
    id: number | null;
    email: string;
    token: string;
}

type AuthContextType = {
    userInfo: User;
    setUserInfo: (userInfo: User) => void;
};

const defaultUserValue: User = {
    id: null,
    email: '',
    token: '',
};

export const AuthContext = createContext<AuthContextType>({
    userInfo: defaultUserValue,
    setUserInfo: () => {},
});

const AuthSessionProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [userInfo, setUserInfo] = useState(defaultUserValue);

    return (
        <AuthContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthSessionProvider;
