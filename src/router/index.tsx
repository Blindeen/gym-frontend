import { Routes, Route } from 'react-router-dom';

import SignInPage from '@/pages/SignInPage';
import LandingPage from '@/pages/LandingPage';

import Layout from '@/components/Layout';

import routes from '@/router/routes.ts';

const Router = () => {
    return (
        <Routes>
            <Route path={routes.home} element={<Layout />}>
                <Route index element={<LandingPage />} />
            </Route>
            <Route path={routes.login} element={<SignInPage />} />
        </Routes>
    );
};

export default Router;
