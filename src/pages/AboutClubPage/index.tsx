import { useTranslation } from "react-i18next";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

import { routes } from "@/router";

const AboutClubPage = () => {
    const { t } = useTranslation();

    return (
        <div className="mx-auto w-full p-6 lg:w-10/12">
            <Breadcrumbs size="lg">
                <BreadcrumbItem href={routes.home}>{t('home')}</BreadcrumbItem>
                <BreadcrumbItem>{t('aboutClub')}</BreadcrumbItem>
            </Breadcrumbs>
            <h2 className="mb-6 mt-2">{t('aboutClub')}</h2>
        </div>
    );
};

export default AboutClubPage;
