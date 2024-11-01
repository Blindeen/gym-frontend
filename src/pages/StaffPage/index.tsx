import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';

import { routes } from '@/router';

const StaffPage = () => {
    const { t } = useTranslation();

    return (
        <div className="mx-auto w-full p-6 lg:w-10/12">
            <Breadcrumbs size="lg">
                <BreadcrumbItem href={routes.home}>{t('home')}</BreadcrumbItem>
                <BreadcrumbItem>{t('staff')}</BreadcrumbItem>
            </Breadcrumbs>
            <h2 className="mb-6 mt-2">{t('staff')}</h2>
        </div>
    );
};

export default StaffPage;
