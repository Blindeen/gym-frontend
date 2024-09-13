import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Button, Image } from '@nextui-org/react';
import { FaArrowRight } from 'react-icons/fa6';

import routes from '@/router/routes.ts';
import WorkoutImage from '/images/illustrations/workout.svg';

const NotFoundPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="flex h-dvh w-full flex-col items-center justify-center gap-y-7">
            <div className="flex flex-col items-center gap-y-3">
                <h1 className="text-8xl font-bold">404</h1>
                <div className="flex flex-col gap-y-1 text-xl">
                    <p className="text-center">{t('somethingWentWrong')}</p>
                    <p className="text-balance text-center md:text-wrap md:text-left">
                        {t('pageNotFoundDesc')}
                    </p>
                </div>
            </div>
            <Image
                className="w-2/3 md:w-1/3 lg:w-1/5"
                src={WorkoutImage}
                alt="Workout image"
                radius="none"
                draggable={false}
                removeWrapper
            />
            <Button
                className="text-white"
                size="lg"
                color="primary"
                radius="lg"
                endContent={<FaArrowRight title="Arrow right icon" size="20px" />}
                onPress={() => navigate(routes.home, { replace: true })}
            >
                {t('backToHome')}
            </Button>
        </div>
    );
};

export default NotFoundPage;
