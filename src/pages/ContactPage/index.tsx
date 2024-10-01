import { useTranslation } from 'react-i18next';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';

import ContactContainer from '@containers/ContactContainer';

import routes from '@/router/routes';

const ContactPage = () => {
    const { t } = useTranslation();

    return (
        <div className="mx-auto w-full p-6 lg:w-10/12">
            <Breadcrumbs size="lg">
                <BreadcrumbItem href={routes.home}>{t('home')}</BreadcrumbItem>
                <BreadcrumbItem>{t('contact')}</BreadcrumbItem>
            </Breadcrumbs>
            <h2 className="mb-6 mt-2">{t('contact')}</h2>
            <ContactContainer />
        </div>
    );
};

export default ContactPage;
