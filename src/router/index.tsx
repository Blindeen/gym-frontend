import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import SignInPage from '@pages/SignInPage';
import LandingPage from '@pages/LandingPage';
import NotFoundPage from '@pages/NotFoundPage';
import ActivitiesPage from '@pages/ActivitiesPage';
import SignUpPage from '@pages/SignUpPage';
import ConfirmAccountPage from '@pages/ConfirmAccountPage';
import ResetPasswordPage from '@pages/ResetPasswordPage';
import ChangePasswordPage from '@pages/ChangePasswordPage';
import PassPage from '@pages/PassPage';

import Layout from '@containers/Layout';

import PageRoute from './PageRoute';
import PrivatePageRoute from './PrivatePageRoute';
import routes from './routes';
import { equals, notEquals } from './functions';
import { AuthContext } from '@/context/Auth';
import ContactPage from '@pages/ContactPage';
import ProfilePage from '@pages/ProfilePage';

const Router = () => {
    const {
        state: {
            user: { role },
        },
    } = useContext(AuthContext);

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
                    element={
                        <PageRoute tabTranslationCode="homePage">
                            <LandingPage />
                        </PageRoute>
                    }
                    index
                />
                <Route
                    path={routes.activities}
                    element={
                        <PageRoute tabTranslationCode="activities">
                            <ActivitiesPage />
                        </PageRoute>
                    }
                />
                <Route
                    path={routes.contact}
                    element={
                        <PageRoute tabTranslationCode="contact">
                            <ContactPage />
                        </PageRoute>
                    }
                />
                <Route
                    path={routes.profile}
                    element={
                        <PrivatePageRoute
                            tabTranslationCode="profile"
                            authorized={notEquals(role, 'GUEST')}
                        >
                            <ProfilePage />
                        </PrivatePageRoute>
                    }
                />
                <Route
                    path={routes.pass}
                    element={
                        <PrivatePageRoute
                            tabTranslationCode="pass"
                            authorized={notEquals(role, 'GUEST')}
                        >
                            <PassPage />
                        </PrivatePageRoute>
                    }
                />
            </Route>

            <Route
                path={routes.signIn}
                element={
                    <PrivatePageRoute
                        tabTranslationCode="signingIn"
                        authorized={equals(role, 'GUEST')}
                    >
                        <SignInPage />
                    </PrivatePageRoute>
                }
            />

            <Route
                path={routes.signUp}
                element={
                    <PrivatePageRoute
                        tabTranslationCode="signingUp"
                        authorized={equals(role, 'GUEST')}
                    >
                        <SignUpPage />
                    </PrivatePageRoute>
                }
            />

            <Route
                path={routes.confirmAccount}
                element={
                    <PageRoute tabTranslationCode="accountConfirmation">
                        <ConfirmAccountPage />
                    </PageRoute>
                }
            />

            <Route
                path={routes.resetPassword}
                element={
                    <PrivatePageRoute
                        tabTranslationCode="passwordReset"
                        authorized={equals(role, 'GUEST')}
                    >
                        <ResetPasswordPage />
                    </PrivatePageRoute>
                }
            />

            <Route
                path={routes.changePassword}
                element={
                    <PrivatePageRoute
                        tabTranslationCode="passwordChange"
                        authorized={equals(role, 'GUEST')}
                    >
                        <ChangePasswordPage />
                    </PrivatePageRoute>
                }
            />
        </Routes>
    );
};

export default Router;
