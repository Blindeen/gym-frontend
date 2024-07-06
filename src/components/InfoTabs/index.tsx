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
            content: {
                description: t('strengthDescription'),
                bulletPoints: t('strengthBulletPoints', {
                    returnObjects: true,
                }),
            },
        },
        {
            key: 'Body shape',
            label: (
                <>
                    <IoIosBody size="25px" />
                    {t('bodyShape')}
                </>
            ),
            content: {
                description: t('bodyShapeDescription'),
                bulletPoints: t('bodyShapeBulletPoints', {
                    returnObjects: true,
                }),
            },
        },
        {
            key: 'Condition',
            label: (
                <>
                    <FaPersonRunning size="25px" />
                    {t('condition')}
                </>
            ),
            content: {
                description: t('conditionDescription'),
                bulletPoints: t('conditionBulletPoints', {
                    returnObjects: true,
                }),
            },
        },
    ];

    return (
        <Tabs aria-label="Info tabs" size="lg" radius="full" items={tabs}>
            {({ key, label, content: { description, bulletPoints } }) => (
                <Tab
                    key={key}
                    title={
                        <div className="flex items-center gap-2">{label}</div>
                    }
                >
                    <div className="flex flex-col gap-y-2">
                        <p className="text-justify">{description}</p>
                        <ul className="list-inside list-disc">
                            {Object.entries(bulletPoints).map(
                                ([key, value], idx) => (
                                    <li key={`${key}-${idx}`}>{value}</li>
                                )
                            )}
                        </ul>
                    </div>
                </Tab>
            )}
        </Tabs>
    );
};

export default InfoTabs;
