import { useTranslation } from 'react-i18next';

import { Link, Image } from '@nextui-org/react';
import { Divider } from '@nextui-org/divider';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter, FaYoutube, FaThreads } from 'react-icons/fa6';

import Logo from '@components/Logo';

import { routes } from '@/router';

const Footer = () => {
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

    const socialIcons = [
        {
            Icon: FaInstagram,
            href: 'https://www.instagram.com/fitsphere/',
        },
        {
            Icon: FaFacebook,
            href: 'https://www.facebook.com/fitsphere/',
        },
        {
            Icon: FaXTwitter,
            href: 'https://x.com/fitsphere',
        },
        {
            Icon: FaYoutube,
            href: 'https://www.youtube.com/@fitsphere',
        },
        {
            Icon: FaThreads,
            href: 'https://www.threads.net/@fitsphere',
        },
    ];

    return (
        <footer className="flex justify-center">
            <div className="w-full p-6 text-sm lg:w-10/12">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 flex md:mb-0">
                        <Logo />
                    </div>
                    <div className="flex flex-wrap gap-8">
                        <div className="flex flex-col gap-6">
                            <p className="font-bold uppercase">{t('resources')}</p>
                            {resources.map(({ name, path }, idx) => (
                                <Link
                                    key={`${idx}-${name}`}
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
                            <p className="font-bold uppercase">{t('legal')}</p>
                            {legal.map((link, idx) => (
                                <Link
                                    key={`${idx}-${link}`}
                                    color="foreground"
                                    size="sm"
                                    underline="hover"
                                >
                                    {link}
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-col gap-6">
                            <p className="font-bold uppercase">{t('club')}</p>
                            {club.map(({ name, path }, idx) => (
                                <Link
                                    key={`${idx}-${name}`}
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
                                    src={`/images/badges/google-play-${language}.png`}
                                    alt="Google play badge"
                                    radius="none"
                                    loading="lazy"
                                />
                            </a>
                            <a href="https://apps.apple.com/us/app/fitsphere/id1530190137">
                                <Image
                                    className="max-w-[125px]"
                                    src={`/images/badges/app-store-${language}.png`}
                                    alt="App store badge"
                                    radius="none"
                                    loading="lazy"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <Divider className="my-6" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <p>{`Copyright © ${currentYear} FitSphere Inc.`}</p>
                    <div className="mt-4 flex gap-5 sm:mt-0">
                        {socialIcons.map(({ Icon, href }, idx) => (
                            <a key={idx} href={href} target="_blank" rel="noopener noreferrer">
                                <Icon size="1.5rem" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
