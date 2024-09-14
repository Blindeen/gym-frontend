import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import PageRoute from '../PageRoute';
import routes from '../routes';
import { PrivatePageRouteProps } from './types';

const PrivatePageRoute = ({
    children,
    tabTranslationCode,
    authorized,
    redirectTo = routes.home,
}: PrivatePageRouteProps) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!authorized) {
            navigate(redirectTo, { replace: true });
        }
    }, []);

    return <PageRoute tabTranslationCode={tabTranslationCode}>{children}</PageRoute>;
};

export default PrivatePageRoute;
