import { useTranslation } from 'react-i18next';
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';

import { MdOutlineEmail, MdCall, MdMap } from 'react-icons/md';

import { workingHours } from './values';

const ContactContainer = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center gap-5 md:flex-row md:items-start md:justify-between">
            <Card className="h-[300px] w-[300px] p-4">
                <CardHeader>
                    <h4 className="text-xl font-bold">{t('workingHours')}</h4>
                </CardHeader>
                <Divider />
                <CardBody className="py-2">
                    <div className="flex h-full flex-col justify-between">
                        {workingHours.map(({ dayOfWeek, startTime, endTime }, idx) => (
                            <div key={idx} className="flex w-full justify-between">
                                <div>{t(`dayOfWeek.${dayOfWeek}`)}</div>
                                <div>
                                    {startTime} - {endTime}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>

            <Card className="h-[300px] w-[300px] p-4 md:mt-10">
                <CardHeader>
                    <h4 className="text-xl font-bold">{t('contactDetails')}</h4>
                </CardHeader>
                <Divider />
                <CardBody className="py-2">
                    <div className="flex h-full flex-col justify-around">
                        <div className="flex w-full items-center gap-3">
                            <MdOutlineEmail size={25} />
                            fitsphere.info@gmail.com
                        </div>
                        <div className="flex w-full items-center gap-3">
                            <MdCall size={25} />
                            +48 123 456 789
                        </div>
                        <div className="flex w-full items-center gap-3">
                            <MdMap size={25} />
                            <div>
                                <div>{t('gymAddress')}</div>
                                <div>00-695 {t('warsaw')}</div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>

            <Card className="h-[300px] w-[300px] p-4">
                <CardHeader>
                    <h4 className="text-xl font-bold">{t('location')}</h4>
                </CardHeader>
                <Divider />
                <CardBody className="py-2"></CardBody>
            </Card>
        </div>
    );
};

export default ContactContainer;
