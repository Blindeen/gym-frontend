import { useNavigate } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { Toaster } from 'react-hot-toast';

import AuthSessionProvider from '@/AuthContext.tsx';
import AppRouter from '@/AppRouter.tsx';

const App = () => {
    const navigate = useNavigate();

    return (
        <>
            <AuthSessionProvider>
                <NextUIProvider navigate={navigate}>
                    <AppRouter />
                </NextUIProvider>
            </AuthSessionProvider>
            <Toaster
                position="bottom-right"
                toastOptions={{
                    style: {
                        padding: '18px',
                    },
                }}
            />
        </>
    );
};

export default App;
