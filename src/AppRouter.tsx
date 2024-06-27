import { Routes, Route } from 'react-router-dom';

import Layout from '@/components/Layout';
import LandingPage from '@/pages/LandingPage';

import routes from './routes.ts';

const AppRouter = () => {
    return (
        <Routes>
            <Route path={routes.home} element={<Layout />}>
                <Route index element={<LandingPage />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
