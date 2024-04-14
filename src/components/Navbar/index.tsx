import { useState } from 'react';

import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

import { MenuItem } from '../../interfaces.ts';
import routes from '../../routes.ts';

const menuItems: MenuItem[] = [
    {
        name: 'Home',
        path: routes.home,
        authorizedRoles: ['GUEST', 'TRAINER', 'CLIENT'],
    },
    {
        name: 'Activities',
        path: routes.activities,
        authorizedRoles: ['GUEST', 'TRAINER', 'CLIENT'],
    },
    {
        name: 'Trainers',
        path: routes.home,
        authorizedRoles: ['GUEST', 'TRAINER', 'CLIENT'],
    },
    {
        name: 'Contact',
        path: routes.home,
        authorizedRoles: ['GUEST', 'TRAINER', 'CLIENT'],
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

const Navbar = () => {
    const [isOpened, setIsOpened] = useState(false);

    const itemElements = menuItems.map((item, idx) => (
        <Link className="font-bold" key={idx} to={item.path}>
            {item.name}
        </Link>
    ));

    return (
        <>
            <header className="justify-center items-center gap-[5vw] pt-[35px] text-lg text-white sm:hidden lg:flex">
                <img
                    className="w-[100px] h-[100px] pointer-events-none select-none"
                    src="/src/assets/img/logo.png"
                    alt="logo"
                />
                {itemElements}
            </header>
            <header className="justify-between items-center pt-[35px] w-[75%] sm:flex lg:hidden">
                <h2 className="h2-primary">FitSphere</h2>
                <AiOutlineMenu
                    className="cursor-pointer text-white"
                    size="24px"
                    onClick={() => setIsOpened(true)}
                />
            </header>
            {isOpened && (
                <>
                    <div className="fixed flex-col justify-center items-center gap-[50px] w-[100vw] h-[100vh] z-1000 bg-white text-lg text-black sm:flex lg:hidden">
                        {itemElements}
                    </div>
                    <div className="absolute top-[35px] right-[35px] sm:block lg:hidden">
                        <IoMdClose
                            className="cursor-pointer text-black text-2xl"
                            onClick={() => setIsOpened(false)}
                        />
                    </div>
                </>
            )}
        </>
    );
};

export default Navbar;
