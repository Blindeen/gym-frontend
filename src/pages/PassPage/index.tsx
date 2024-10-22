import { useTranslation } from 'react-i18next';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';

import PassContainer from '@/features/pass/components/PassContainer';

import routes from '@/router/routes';

const PassPage = () => {
    const { t } = useTranslation();

    return (
        <div className="mx-auto w-full p-6 lg:w-10/12">
            <Breadcrumbs size="lg">
                <BreadcrumbItem href={routes.home}>{t('home')}</BreadcrumbItem>
                <BreadcrumbItem>{t('pass')}</BreadcrumbItem>
            </Breadcrumbs>
            <h2 className="mb-6 mt-2">{t('pass')}</h2>
            <PassContainer />
        </div>
    );
};

export default PassPage;
