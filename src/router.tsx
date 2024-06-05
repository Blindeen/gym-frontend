import { createBrowserRouter } from 'react-router-dom';

import LandingPage from '@/pages/LandingPage';
import RegisterPage from '@/pages/Register';
import LoginPage from '@/pages/LoginPage';

import routes from './routes.ts';

const router = createBrowserRouter([
    {
        path: routes.home,
        element: <LandingPage />,
    },
    {
        path: routes.login,
        element: <LoginPage />,
    },
    {
        path: routes.register,
        element: <RegisterPage />,
    },
    {
        path: routes.activities,
        element: null,
    },
    {
        path: routes.dashboard,
        element: null,
    },
]);

export default router;
