import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';

import routes from '@/router/routes.ts';
import Activities from '@containers/Activities';

const ActivitiesPage = () => {
    const { t } = useTranslation();

    return (
        <div className="mx-auto w-full max-w-[1280px] p-6">
            <Breadcrumbs size="lg">
                <BreadcrumbItem href={routes.home}>{t('home')}</BreadcrumbItem>
                <BreadcrumbItem>{t('activities')}</BreadcrumbItem>
            </Breadcrumbs>
            <h2 className="mb-6 mt-2 text-2xl font-bold">{t('activities')}</h2>
            <Activities url="/activity/list" />
        </div>
    );
};

export default ActivitiesPage;
