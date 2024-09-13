import { Routes, Route } from 'react-router-dom';

import SignInPage from '@pages/SignInPage';
import LandingPage from '@pages/LandingPage';
import NotFoundPage from '@pages/NotFoundPage';
import ActivitiesPage from '@pages/ActivitiesPage';
import SignUpPage from '@pages/SignUpPage';
import ConfirmAccountPage from '@pages/ConfirmAccountPage';
import ResetPasswordPage from '@pages/ResetPasswordPage';
import ChangePasswordPage from '@pages/ChangePasswordPage';

import Layout from '@containers/Layout';
import PageRoute from '@components/PageRoute';

import routes from '@/router/routes.ts';

const Router = () => {
    return (
        <Routes>
            <Route
                path="*"
                element={
                    <PageRoute tabTranslationCode="pageNotFound">
                        <NotFoundPage />
                    </PageRoute>
                }
            />
            <Route path={routes.home} element={<Layout />}>
                <Route
                    index
                    element={
                        <PageRoute tabTranslationCode="homePage">
                            <LandingPage />
                        </PageRoute>
                    }
                />
                <Route
                    path={routes.activities}
                    element={
                        <PageRoute tabTranslationCode="activities">
                            <ActivitiesPage />
                        </PageRoute>
                    }
                />
            </Route>
            <Route
                path={routes.signIn}
                element={
                    <PageRoute tabTranslationCode="signIn">
                        <SignInPage />
                    </PageRoute>
                }
            />
            <Route
                path={routes.signUp}
                element={
                    <PageRoute tabTranslationCode="signUp">
                        <SignUpPage />
                    </PageRoute>
                }
            />
            <Route
                path={routes.confirmAccount}
                element={
                    <PageRoute tabTranslationCode="confirmAccount">
                        <ConfirmAccountPage />
                    </PageRoute>
                }
            />
            <Route
                path={routes.resetPassword}
                element={
                    <PageRoute tabTranslationCode="resetPassword">
                        <ResetPasswordPage />
                    </PageRoute>
                }
            />
            <Route
                path={routes.changePassword}
                element={
                    <PageRoute tabTranslationCode="passwordChange">
                        <ChangePasswordPage />
                    </PageRoute>
                }
            />
        </Routes>
    );
};

export default Router;
