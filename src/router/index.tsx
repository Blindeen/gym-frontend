import { Routes, Route } from 'react-router-dom';

import SignInPage from '@/pages/SignInPage';
import LandingPage from '@/pages/LandingPage';
import NotFoundPage from '@/pages/NotFoundPage';

import Layout from '@/components/Layout';

import routes from '@/router/routes.ts';
import ActivitiesPage from '@/pages/ActivitiesPage';

const Router = () => {
    return (
        <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path={routes.home} element={<Layout />}>
                <Route index element={<LandingPage />} />
                <Route path={routes.activities} element={<ActivitiesPage />} />
            </Route>
            <Route path={routes.signIn} element={<SignInPage />} />
        </Routes>
    );
};

export default Router;
