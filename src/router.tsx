import { createBrowserRouter } from 'react-router-dom';

import LandingPage from '@/pages/LandingPage';
import RegisterPage from '@/pages/Register';

import routes from './routes.ts';

const router = createBrowserRouter([
    {
        path: routes.home,
        element: <LandingPage />,
    },
    {
        path: routes.login,
        element: null,
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
        path: routes.trainerDashboard,
        element: null,
    },
    {
        path: routes.clientDashboard,
        element: null,
    },
]);

export default router;
