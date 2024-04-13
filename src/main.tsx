import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import LandingPage from './pages/LandingPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
    },
    {
        path: '/login',
        element: null,
    },
    {
        path: '/register',
        element: null,
    },
    {
        path: '/activities',
        element: null,
    },
    {
        path: '/trainer-dashboard',
        element: null,
    },
    {
        path: '/client-dashboard',
        element: null,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
