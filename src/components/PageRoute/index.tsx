import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { PageRouteProps } from './types';

const PageRoute = ({ children, tabTranslationCode }: PageRouteProps) => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = `FitSphere | ${t(`tabTitles.${tabTranslationCode}`)}`;
    }, [t, tabTranslationCode]);

    return children;
};

export default PageRoute;
