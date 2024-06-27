import React from 'react';
import ReactDOM from 'react-dom/client';

import { NextUIProvider } from '@nextui-org/react';

import '@/index.css';
import AuthSessionProvider from '@/AuthContext.tsx';
import AppRouter from '@/AppRouter.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthSessionProvider>
            <NextUIProvider>
                <AppRouter />
            </NextUIProvider>
        </AuthSessionProvider>
    </React.StrictMode>
);
