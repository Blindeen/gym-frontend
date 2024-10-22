import { useContext, useState } from 'react';

import { useLocation } from 'react-router-dom';
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

import Logo from '@components/Logo';
import AvatarDropdown from '@components/AvatarDropdown';
import LanguageSelect from '@components/LanguageSelect';
import ThemeSwitcher from '@components/ThemeSwitcher';
import SettingsModal from '@components/SettingsModal';

import { AuthContext } from '@/contexts/AuthContext';
import routes from '@/router/routes.ts';

const MenuBar = () => {
    const { pathname } = useLocation();
    const { t } = useTranslation();

    const {
        state: { isLogged },
    } = useContext(AuthContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        {
            name: t('aboutClub'),
            path: routes.about,
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

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Navbar
            classNames={{ wrapper: 'lg:w-10/12' }}
            maxWidth="full"
            height="6rem"
            onMenuOpenChange={setIsMenuOpen}
            isBordered
            isMenuOpen={isMenuOpen}
        >
            <NavbarContent justify="start">
                <NavbarMenuToggle
                    className="lg:hidden"
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                />
                <NavbarBrand>
                    <Logo size="lg" onPress={closeMenu} />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden gap-7 lg:flex" justify="center">
                {menuItems.map(({ name, path }, idx) => (
                    <NavbarItem key={idx} isActive={path === pathname}>
                        <Link
                            className="font-medium"
                            href={path}
                            color="foreground"
                            underline="hover"
                        >
                            {name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                <div className="hidden items-center gap-4 lg:flex">
                    <NavbarItem>
                        <ThemeSwitcher />
                    </NavbarItem>
                    <NavbarItem>
                        <LanguageSelect />
                    </NavbarItem>
                </div>
                <NavbarItem className="lg:hidden">
                    <SettingsModal />
                </NavbarItem>
                {isLogged ? (
                    <AvatarDropdown />
                ) : (
                    <NavbarItem className="hidden lg:inline">
                        <Button
                            as={Link}
                            className="text-white"
                            href={routes.signIn}
                            color="primary"
                        >
                            {t('signIn')}
                        </Button>
                    </NavbarItem>
                )}
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map(({ name, path }, idx) => (
                    <NavbarMenuItem key={`${name}-${idx}`}>
                        <Link className="w-full" href={path} color="foreground" onPress={closeMenu}>
                            {name}
                        </Link>
                    </NavbarMenuItem>
                ))}
                {!isLogged && (
                    <NavbarMenuItem>
                        <Link className="w-full" href={routes.signIn} color="foreground">
                            {t('signIn')}
                        </Link>
                    </NavbarMenuItem>
                )}
            </NavbarMenu>
        </Navbar>
    );
};

export default MenuBar;
