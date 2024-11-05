import { Image } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';

import PersonalTraining from '/images/illustrations/personal-training.svg';
import Jogging from '/images/illustrations/jogging.svg';
import Strength from '/images/illustrations/strength.svg';
import Workout from '/images/illustrations/workout.svg';

import InfoCard from '../InfoCard';

const AboutClubContent = () => {
    const { t } = useTranslation();

    return (
        <div className="grid w-full grid-cols-1 gap-y-10 md:w-11/12 md:grid-cols-2">
            <InfoCard
                header={t('aboutClubContent.personalTraining.header')}
                description={t('aboutClubContent.personalTraining.description')}
            />
            <div className="flex justify-center md:justify-end">
                <Image width={250} src={PersonalTraining} draggable={false} />
            </div>

            <div className="flex justify-center md:justify-start">
                <Image width={250} src={Jogging} draggable={false} />
            </div>
            <div className="flex justify-end">
                <InfoCard
                    header={t('aboutClubContent.running.header')}
                    description={t('aboutClubContent.running.description')}
                    isReversed
                />
            </div>

            <InfoCard
                header={t('aboutClubContent.exercisesForWomen.header')}
                description={t('aboutClubContent.exercisesForWomen.description')}
            />
            <div className="flex justify-center md:justify-end">
                <Image width={160} src={Workout} draggable={false} />
            </div>

            <div className="flex justify-center md:justify-start">
                <Image width={200} src={Strength} draggable={false} />
            </div>
            <div className="flex justify-end">
                <InfoCard
                    header={t('aboutClubContent.exercisesForMen.header')}
                    description={t('aboutClubContent.exercisesForMen.description')}
                    isReversed
                />
            </div>
        </div>
    );
};

export default AboutClubContent;
