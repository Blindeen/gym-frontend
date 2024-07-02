import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, Image } from '@nextui-org/react';

import routes from '@/routes.ts';

const LandingPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const brandLogoPaths = [
        'wk-dzik-logo',
        'wk-dzik-logo',
        'wk-dzik-logo',
        'wk-dzik-logo',
    ];

    return (
        <>
            <div className="bg-radial-gradient rounded-b-[4rem]">
                <div className="w-full max-w-[1280px] flex flex-col gap-11 px-6 py-10 mx-auto text-white font-bold">
                    <div className="flex flex-wrap justify-center items-center lg:justify-between">
                        <div className="flex flex-col gap-7">
                            <div className="flex flex-col gap-4 text-4xl text-center lg:text-left md:text-5xl">
                                <h1>{t('unleashYour')}</h1>
                                <h1>{t('innerStrengthToday')}</h1>
                            </div>
                            <p className="max-w-md text-xl text-center lg:text-left">
                                {t('landingPageDescription')}
                            </p>
                            <div className="flex flex-wrap gap-5">
                                <Button
                                    className="w-full bg-white lg:w-fit"
                                    radius="full"
                                    size="lg"
                                    onPress={() => navigate(routes.register)}
                                >
                                    {t('signUp')}
                                </Button>
                                <Button
                                    className="w-full bg-white lg:w-fit"
                                    radius="full"
                                    size="lg"
                                    onPress={() => navigate(routes.login)}
                                >
                                    {t('signIn')}
                                </Button>
                            </div>
                        </div>
                        <motion.div
                            animate={{ y: [15, -15, 15] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                        >
                            <Image src="/images/dumbell.png" radius="none" />
                        </motion.div>
                    </div>
                    <div className="text-center text-xl">
                        {t('ourPartners')}
                    </div>
                    <div className="flex flex-wrap justify-between items-center gap-5">
                        {brandLogoPaths.map((path, idx) => (
                            <Image
                                className="w-[150px] lg:w-full"
                                key={`${path}-${idx}`}
                                src={`/images/partners/${path}.png`}
                                radius="none"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
