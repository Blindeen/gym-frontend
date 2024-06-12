import { createBrowserRouter } from 'react-router-dom';

import routes from './routes.ts';

const router = createBrowserRouter([
    {
        path: routes.home,
        element: null,
    },
    {
        path: routes.login,
        element: null,
    },
    {
        path: routes.register,
        element: null,
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
