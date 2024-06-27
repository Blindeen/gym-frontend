import { useContext, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    Link,
    Navbar,
    Button,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    NavbarBrand,
} from '@nextui-org/react';

import AvatarDropdown from '@/components/AvatarDropdown';
import LanguageSelect from '@/components/LanguageSelect';

import { AuthContext } from '@/AuthContext.tsx';
import routes from '@/routes.ts';

const MenuBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { pathname } = location;

    const { state } = useContext(AuthContext);
    const { isLogged } = state;

    const { t } = useTranslation();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        {
            name: t('aboutClub'),
            path: routes.about,
        },
        {
            name: t('dashboard'),
            path: routes.dashboard,
        },
        {
            name: t('activities'),
            path: routes.activities,
        },
        {
            name: t('staff'),
            path: routes.staff,
        },
        {
            name: t('contact'),
            path: routes.contact,
        },
    ];

    return (
        <Navbar
            maxWidth="xl"
            onMenuOpenChange={setIsMenuOpen}
            isBordered
            isMenuOpen={isMenuOpen}
        >
            <NavbarContent justify="start">
                <NavbarMenuToggle
                    className="md:hidden"
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                />
                <NavbarBrand>
                    <p
                        className="font-bold text-2xl cursor-pointer"
                        onClick={() => navigate(routes.home)}
                    >
                        FitSphere
                    </p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden md:flex gap-7" justify="center">
                {menuItems.map((item, idx) => (
                    <NavbarItem key={idx} isActive={item.path === pathname}>
                        <Link
                            href={item.path}
                            color="foreground"
                            underline="hover"
                        >
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                {isLogged ? (
                    <AvatarDropdown />
                ) : (
                    <>
                        <NavbarItem>
                            <LanguageSelect />
                        </NavbarItem>
                        <NavbarItem>
                            <Button
                                as={Link}
                                className="text-white"
                                href={routes.login}
                                color="primary"
                            >
                                {t('signIn')}
                            </Button>
                        </NavbarItem>
                    </>
                )}
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, idx) => (
                    <NavbarMenuItem key={`${item}-${idx}`}>
                        <Link
                            className="w-full"
                            href={item.path}
                            color="foreground"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default MenuBar;
