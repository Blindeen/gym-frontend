import { Routes, Route } from 'react-router-dom';

import SignInPage from '@/pages/SignInPage';
import LandingPage from '@/pages/LandingPage';
import NotFoundPage from '@/pages/NotFoundPage';
import ActivitiesPage from '@/pages/ActivitiesPage';
import SignUpPage from '@/pages/SignUpPage';
import ConfirmAccountPage from '@/pages/ConfirmAccountPage';
import ResetPasswordPage from '@/pages/ResetPasswordPage';

import Layout from '@/components/Layout';

import routes from '@/router/routes.ts';

const Router = () => {
    return (
        <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path={routes.home} element={<Layout />}>
                <Route index element={<LandingPage />} />
                <Route path={routes.activities} element={<ActivitiesPage />} />
            </Route>
            <Route path={routes.signIn} element={<SignInPage />} />
            <Route path={routes.signUp} element={<SignUpPage />} />
            <Route path={routes.confirmAccount} element={<ConfirmAccountPage />} />
            <Route path={routes.resetPassword} element={<ResetPasswordPage />} />
        </Routes>
    );
};

export default Router;
