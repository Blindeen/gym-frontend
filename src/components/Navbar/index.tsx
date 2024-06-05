import { useContext, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { toast } from 'react-toastify';

import routes from '@/routes.ts';
import { MenuItem } from '@/interfaces.ts';
import { AuthContext } from '@/AuthContext.tsx';

const menuItems: MenuItem[] = [
    {
        name: 'Home',
        path: routes.home,
        authorizedRoles: ['GUEST', 'TRAINER', 'CUSTOMER'],
    },
    {
        name: 'Activities',
        path: routes.activities,
        authorizedRoles: ['GUEST', 'TRAINER', 'CUSTOMER'],
    },
    {
        name: 'Trainers',
        path: routes.home,
        authorizedRoles: ['GUEST', 'TRAINER', 'CUSTOMER'],
    },
    {
        name: 'Dashboard',
        path: routes.dashboard,
        authorizedRoles: ['TRAINER', 'CUSTOMER'],
    },
    {
        name: 'Contact',
        path: routes.home,
        authorizedRoles: ['GUEST', 'TRAINER', 'CUSTOMER'],
    },
    {
        name: 'Sign up',
        path: routes.register,
        authorizedRoles: ['GUEST'],
    },
    {
        name: 'Sign in',
        path: routes.login,
        authorizedRoles: ['GUEST'],
    },
];

const Navbar = ({
    bgColor = 'transparent',
}: {
    bgColor?: 'blue-500' | 'transparent';
}) => {
    const { state, setState } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isOpened, setIsOpened] = useState(false);

    const { user } = state;

    const signOut = () => {
        setState({
            isLogged: false,
            user: {
                email: '',
                role: 'GUEST',
            },
            token: '',
        });
        navigate(routes.home);
        toast('Signed out successfully', {
            type: 'success',
        });
    };

    const menuElements = menuItems.map((item, idx) => {
        return (
            item.authorizedRoles.includes(user.role) && (
                <Link className="font-bold" key={idx} to={item.path}>
                    {item.name}
                </Link>
            )
        );
    });

    const menuNavigationElements = (
        <>
            {menuElements}
            {user.role !== 'GUEST' && (
                <div
                    className="font-bold cursor-pointer"
                    onClick={() => signOut()}
                >
                    Sign out
                </div>
            )}
        </>
    );

    return (
        <>
            <header
                className={`bg-${bgColor} justify-center items-center gap-[5vw] py-4 rounded-b-large text-lg text-white sm:hidden lg:flex`}
            >
                <img
                    className="w-[100px] h-[100px] pointer-events-none select-none"
                    src="/src/assets/img/logo.png"
                    alt="logo"
                />
                {menuNavigationElements}
            </header>
            <header
                className={`bg-${bgColor} justify-between items-center px-8 rounded-b-large w-full sm:flex lg:hidden`}
            >
                <h2 className="h2-primary">FitSphere</h2>
                <AiOutlineMenu
                    className="cursor-pointer text-white"
                    size="24px"
                    onClick={() => setIsOpened(true)}
                />
            </header>
            {isOpened && (
                <>
                    <div className="fixed top-0 left-0 flex-col justify-center items-center gap-[50px] w-[100vw] h-[100vh] z-1000 bg-white text-lg text-black sm:flex lg:hidden">
                        {menuNavigationElements}
                        <div className="absolute top-[35px] right-[35px] sm:block lg:hidden">
                            <IoMdClose
                                className="cursor-pointer text-black text-2xl"
                                onClick={() => setIsOpened(false)}
                            />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Navbar;
