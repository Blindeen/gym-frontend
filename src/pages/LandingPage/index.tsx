import { useContext } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Button, Image } from '@nextui-org/react';
import { PiBarbellFill } from "react-icons/pi";
import { IoNutritionSharp } from "react-icons/io5";
import { MdSportsGymnastics } from "react-icons/md";
import { GiBiceps } from "react-icons/gi";
import PersonalTraining from '/images/illustrations/personal-training.svg?url';
import DumbbellImage from '/images/dumbbell.png';

import InfoTabs from './components/InfoTabs';

import { AuthContext } from '@/contexts/AuthContext';
import { routes } from '@/router';

const LandingPage = () => {
    const {
        state: { isLogged },
    } = useContext(AuthContext);
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-12">
            <div className="rounded-b-[4rem] bg-radial-gradient">
                <div className="mx-auto w-full px-6 py-10 font-bold text-white lg:w-10/12">
                    <div className="flex flex-wrap items-center justify-center lg:justify-between">
                        <div className="flex flex-col gap-7">
                            <div className="flex flex-col gap-4 text-center text-4xl md:text-6xl lg:text-left">
                                <h1>
                                    {t('unleash')}
                                    <span className="bg-gradient-to-br from-secondary to-primary bg-clip-text text-transparent">
                                        {' ' + t('your')}
                                    </span>
                                </h1>
                                <h1>{t('innerStrengthToday')}</h1>
                            </div>
                            <p className="text-center text-xl lg:max-w-md lg:text-justify">
                                {t('landingPageDescription')}
                            </p>
                            <div className="flex flex-wrap gap-5">
                                {isLogged ? (
                                    <Button
                                        className="w-full lg:w-fit"
                                        radius="full"
                                        size="lg"
                                        color="primary"
                                    >
                                        {t('findOutMore')}
                                    </Button>
                                ) : (
                                    <>
                                        <Button
                                            className="w-full bg-white text-black lg:w-fit"
                                            radius="full"
                                            size="lg"
                                            onPress={() => navigate(routes.signIn)}
                                        >
                                            {t('signIn')}
                                        </Button>
                                        <Button
                                            className="w-full lg:w-fit"
                                            radius="full"
                                            size="lg"
                                            color="primary"
                                            onPress={() => navigate(routes.signUp)}
                                        >
                                            {t('signUp')}
                                        </Button>
                                    </>
                                )}
                            </div>
                        </div>
                        <motion.div
                            className="min-h-[327px] md:min-h-[400px]"
                            animate={{ y: [15, -15, 15] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                        >
                            <Image
                                src={DumbbellImage}
                                alt="Dumbbell image"
                                radius="none"
                                draggable={false}
                                removeWrapper
                            />
                        </motion.div>
                    </div>
                    <div>
                        <div className="my-6 text-center text-xl">{t('ourPartners')}</div>
                        <div className="flex flex-col items-center justify-between gap-5 md:flex-row md:gap-0">
                            <PiBarbellFill size="120px" />
                            <IoNutritionSharp size="120px" />
                            <MdSportsGymnastics size="120px" />
                            <GiBiceps size="120px" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-6 font-bold">
                <h1 className="w-full text-center text-2xl md:text-5xl">{t('infoTabsHeader')}</h1>
                <div className="flex w-full flex-wrap justify-evenly gap-y-5 lg:gap-y-0">
                    <Image
                        classNames={{
                            wrapper:
                                "bg-[url('/images/shapes/div-bg-shape.svg')] bg-cover bg-no-repeat bg-[center_25%]",
                        }}
                        src={PersonalTraining}
                        alt="Personal training image"
                        width="500px"
                        radius="none"
                        draggable={false}
                    />
                    <div className="flex w-full flex-col items-center lg:w-[35%]">
                        <InfoTabs />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
