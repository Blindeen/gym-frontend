import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Link, Image } from '@nextui-org/react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter, FaYoutube, FaThreads } from 'react-icons/fa6';

import routes from '@/routes.ts';

const Footer = () => {
    const navigate = useNavigate();
    const {
        t,
        i18n: { language },
    } = useTranslation();

    const currentYear = new Date().getFullYear();

    const resources = [
        {
            name: t('dashboard'),
            path: routes.dashboard,
        },
        {
            name: t('activities'),
            path: routes.activities,
        },
    ];

    const legal = [t('privacyPolicy'), t('cookiesPolicy')];

    const club = [
        {
            name: t('aboutClub'),
            path: routes.about,
        },
        {
            name: t('staff'),
            path: routes.staff,
        },
    ];

    return (
        <footer className="flex justify-center">
            <div className="w-full max-w-[1280px] p-6">
                <div className="md:flex md:justify-between">
                    <div className="flex mb-6 md:mb-0">
                        <span
                            className="font-bold text-2xl cursor-pointer"
                            onClick={() => navigate(routes.home)}
                        >
                            FitSphere
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-8">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-sm font-bold uppercase">
                                {t('resources')}
                            </h2>
                            {resources.map(({ name, path }, idx) => (
                                <Link
                                    key={idx}
                                    className="text-center"
                                    href={path}
                                    color="foreground"
                                    size="sm"
                                    underline="hover"
                                >
                                    {name}
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-col gap-6">
                            <h2 className="text-sm font-bold uppercase">
                                {t('legal')}
                            </h2>
                            {legal.map((link, idx) => (
                                <Link
                                    key={idx}
                                    className="text-center"
                                    color="foreground"
                                    size="sm"
                                    underline="hover"
                                >
                                    {link}
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-col gap-6">
                            <h2 className="text-sm font-bold uppercase">
                                {t('club')}
                            </h2>
                            {club.map(({ name, path }, idx) => (
                                <Link
                                    key={idx}
                                    className="text-center"
                                    href={path}
                                    color="foreground"
                                    size="sm"
                                    underline="hover"
                                >
                                    {name}
                                </Link>
                            ))}
                        </div>
                        <div className="flex items-center gap-8 sm:gap-6">
                            <a href="https://play.google.com/store/apps/details?id=com.fitsphere.app">
                                <Image
                                    className="max-w-[125px]"
                                    src={`/images/badges/google_play_${language}.png`}
                                    alt="Google play badge"
                                    radius="none"
                                />
                            </a>
                            <a href="https://apps.apple.com/us/app/fitsphere/id1530190137">
                                <Image
                                    className="max-w-[125px] cursor-pointer"
                                    src={`/images/badges/app_store_${language}.png`}
                                    alt="App store badge"
                                    radius="none"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="w-full h-divider my-6 shrink-0 bg-divider border-none" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <p className="text-sm">{`Copyright © ${currentYear} FitSphere Inc.`}</p>
                    <div className="flex gap-5 mt-4 sm:mt-0">
                        <FaInstagram size="1.5rem" />
                        <FaFacebook size="1.5rem" />
                        <FaXTwitter size="1.5rem" />
                        <FaYoutube size="1.5rem" />
                        <FaThreads size="1.5rem" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
