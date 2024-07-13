import { useContext } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Button, Image } from '@nextui-org/react';
import { SiNike, SiPuma, SiReebok } from 'react-icons/si';
import { CgAdidas } from 'react-icons/cg';
import PersonalTraining from '/images/illustrations/personal_training.svg?url';
import DumbbellImage from '/images/dumbbell.png';

import InfoTabs from '@/components/InfoTabs';

import { AuthContext } from '@/context';
import routes from '@/router/routes.ts';

const LandingPage = () => {
    const {
        state: { isLogged },
    } = useContext(AuthContext);
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-12">
            <div className="min-h-dvh bg-radial-gradient rounded-b-[4rem]">
                <div className="w-full max-w-[1280px] px-6 py-10 mx-auto text-white font-bold">
                    <div className="flex flex-wrap justify-center items-center lg:justify-between">
                        <div className="flex flex-col gap-7">
                            <div className="flex flex-col gap-4 text-4xl text-center lg:text-left md:text-6xl">
                                <h1>
                                    {t('unleash')}
                                    <span className="bg-gradient-to-br from-secondary to-primary bg-clip-text text-transparent">
                                        {' ' + t('your')}
                                    </span>
                                </h1>
                                <h1>{t('innerStrengthToday')}</h1>
                            </div>
                            <p className="text-xl text-center lg:max-w-md lg:text-justify">
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
                                            className="w-full text-black bg-white lg:w-fit"
                                            radius="full"
                                            size="lg"
                                            onPress={() =>
                                                navigate(routes.login)
                                            }
                                        >
                                            {t('signIn')}
                                        </Button>
                                        <Button
                                            className="w-full lg:w-fit"
                                            radius="full"
                                            size="lg"
                                            color="primary"
                                            onPress={() =>
                                                navigate(routes.register)
                                            }
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
                                radius="none"
                                draggable={false}
                                removeWrapper
                            />
                        </motion.div>
                    </div>
                    <div className="text-center text-xl my-6">
                        {t('ourPartners')}
                    </div>
                    <div className="flex flex-col justify-between items-center gap-5 md:flex-row md:gap-0">
                        <SiNike size="120px" />
                        <SiReebok size="120px" />
                        <CgAdidas size="120px" />
                        <SiPuma size="120px" />
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[1280px] flex flex-col gap-12 px-6 mx-auto font-bold">
                <h1 className="w-full text-2xl text-center md:text-5xl">
                    {t('infoTabsHeader')}
                </h1>
                <div className="w-full flex flex-wrap justify-evenly gap-y-5 lg:gap-y-0">
                    <Image
                        classNames={{
                            wrapper:
                                "bg-[url('/images/shapes/div-bg-shape.svg')] bg-cover bg-no-repeat bg-[center_25%]",
                        }}
                        src={PersonalTraining}
                        width="500px"
                        radius="none"
                        draggable={false}
                    />
                    <div className="w-full flex flex-col items-center lg:w-[35%]">
                        <InfoTabs />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
