import { useNavigate } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';

import AuthSessionProvider from '@/AuthContext.tsx';
import AppRouter from '@/AppRouter.tsx';

const App = () => {
    const navigate = useNavigate();

    return (
        <AuthSessionProvider>
            <NextUIProvider navigate={navigate}>
                <AppRouter />
            </NextUIProvider>
        </AuthSessionProvider>
    );
};

export default App;
