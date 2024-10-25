import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import PageRoute from '../PageRoute';
import routes from '../Router/routes';

import { MergeAndOverride } from '@/types';
import { PageRouteProps } from '../types';

type PrivatePageRouteProps = MergeAndOverride<
    PageRouteProps,
    { authorized: boolean; redirectTo?: string }
>;

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
