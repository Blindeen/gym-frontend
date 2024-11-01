import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';

import { ActivitiesGrid } from '@/features/activities';

import { routes } from '@/router';

const ActivitiesPage = () => {
    const { t } = useTranslation();

    return (
        <div className="mx-auto w-full p-6 lg:w-10/12">
            <Breadcrumbs size="lg">
                <BreadcrumbItem href={routes.home}>{t('home')}</BreadcrumbItem>
                <BreadcrumbItem>{t('activities')}</BreadcrumbItem>
            </Breadcrumbs>
            <h2 className="mb-6 mt-2">{t('activities')}</h2>
            <ActivitiesGrid url="/activities" />
        </div>
    );
};

export default ActivitiesPage;
