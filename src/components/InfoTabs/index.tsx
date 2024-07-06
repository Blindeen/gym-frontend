import { useTranslation } from 'react-i18next';

import { Tab, Tabs } from '@nextui-org/react';
import { CgGym } from 'react-icons/cg';
import { IoIosBody } from 'react-icons/io';
import { FaPersonRunning } from 'react-icons/fa6';

const InfoTabs = () => {
    const { t } = useTranslation();

    const tabs = [
        {
            key: 'Strength',
            label: (
                <>
                    <CgGym size="25px" />
                    {t('strength')}
                </>
            ),
            content: t('strengthDescription'),
        },
        {
            key: 'Body shape',
            label: (
                <>
                    <IoIosBody size="25px" />
                    {t('bodyShape')}
                </>
            ),
            content: t('bodyShapeDescription'),
        },
        {
            key: 'Condition',
            label: (
                <>
                    <FaPersonRunning size="25px" />
                    {t('condition')}
                </>
            ),
            content: t('conditionDescription'),
        },
    ];

    return (
        <Tabs aria-label="Info tabs" size="lg" radius="full" items={tabs}>
            {({ key, label, content }) => (
                <Tab
                    key={key}
                    title={
                        <div className="flex items-center gap-2">{label}</div>
                    }
                >
                    <p className="text-justify">{content}</p>
                </Tab>
            )}
        </Tabs>
    );
};

export default InfoTabs;
