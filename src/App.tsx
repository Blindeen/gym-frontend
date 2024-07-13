import { useNavigate } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { Toaster } from 'react-hot-toast';

import AuthSessionProvider from '@/AuthContext.tsx';
import Router from '@/router';

const App = () => {
    const navigate = useNavigate();

    return (
        <>
            <AuthSessionProvider>
                <NextUIProvider navigate={navigate}>
                    <Router />
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
