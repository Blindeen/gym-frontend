import { useTranslation } from 'react-i18next';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';

import routes from '@/router/routes';

const ProfilePage = () => {
    const { t } = useTranslation();

    return (
        <div className="mx-auto w-full max-w-[1280px] p-6">
            <Breadcrumbs size="lg">
                <BreadcrumbItem href={routes.home}>{t('home')}</BreadcrumbItem>
                <BreadcrumbItem>{t('profile')}</BreadcrumbItem>
            </Breadcrumbs>
            <h2 className="mb-6 mt-2">{t('profile')}</h2>
        </div>
    );
};

export default ProfilePage;
