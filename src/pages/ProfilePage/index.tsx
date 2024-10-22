import { useTranslation } from 'react-i18next';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';

import { EditProfileForm } from '@/features/profile';

import { routes } from '@/router';

const ProfilePage = () => {
    const { t } = useTranslation();

    return (
        <div className="mx-auto w-full p-6 lg:w-10/12">
            <Breadcrumbs size="lg">
                <BreadcrumbItem href={routes.home}>{t('home')}</BreadcrumbItem>
                <BreadcrumbItem>{t('profile')}</BreadcrumbItem>
            </Breadcrumbs>
            <h2 className="mb-6 mt-2">{t('profile')}</h2>
            <EditProfileForm />
        </div>
    );
};

export default ProfilePage;
