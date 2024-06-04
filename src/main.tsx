import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import router from './router.tsx';
import './index.css';
import AuthSessionProvider from './AuthContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthSessionProvider>
            <RouterProvider router={router} />
        </AuthSessionProvider>
    </React.StrictMode>
);
