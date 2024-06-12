import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';

import '@/index.css';
import router from '@/router.tsx';
import AuthSessionProvider from '@/AuthContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthSessionProvider>
            <NextUIProvider>
                <RouterProvider router={router} />
            </NextUIProvider>
        </AuthSessionProvider>
    </React.StrictMode>
);
