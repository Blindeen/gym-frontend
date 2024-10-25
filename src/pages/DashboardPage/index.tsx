import { useContext } from 'react';

import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';

import TrainerDashboard from './components/TrainerDashboard';

import { routes } from '@/router';
import { AuthContext } from '@/contexts/AuthContext';

const DashboardPage = () => {
    const {
        state: {
            user: { role },
        },
    } = useContext(AuthContext);
    const { t } = useTranslation();

    let dashboardContainer: JSX.Element | null = null;
    if (role === 'CUSTOMER') {
        dashboardContainer = null;
    } else if (role === 'TRAINER') {
        dashboardContainer = <TrainerDashboard />;
    }

    return (
        <div className="mx-auto w-full p-6 lg:w-10/12">
            <Breadcrumbs size="lg">
                <BreadcrumbItem href={routes.home}>{t('home')}</BreadcrumbItem>
                <BreadcrumbItem>{t('dashboard')}</BreadcrumbItem>
            </Breadcrumbs>
            <h2 className="mb-6 mt-2">{t('dashboard')}</h2>
            {dashboardContainer}
        </div>
    );
};

export default DashboardPage;
