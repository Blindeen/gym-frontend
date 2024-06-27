import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
    Link,
    Navbar,
    Button,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from '@nextui-org/react';

import AvatarDropdown from '@/components/AvatarDropdown';

import { AuthContext } from '@/AuthContext.tsx';
import routes from '@/routes.ts';

const menuItems = [
    {
        name: 'About club',
        path: routes.about,
    },
    {
        name: 'Dashboard',
        path: routes.dashboard,
    },
    {
        name: 'Activities',
        path: routes.activities,
    },
    {
        name: 'Staff',
        path: routes.stuff,
    },
    {
        name: 'Contact',
        path: routes.contact,
    },
];

const MenuBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { pathname } = location;

    const { state } = useContext(AuthContext);
    const { isLogged } = state;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                            <Button
                                as={Link}
                                href={routes.register}
                                color="danger"
                            >
                                Sign Up
                            </Button>
                        </NavbarItem>
                        <NavbarItem>
                            <Button
                                as={Link}
                                className="text-white"
                                href={routes.login}
                                color="primary"
                            >
                                Sign In
                            </Button>
                        </NavbarItem>
                    </>
                )}
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
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
