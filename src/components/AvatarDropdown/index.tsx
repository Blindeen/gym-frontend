import { useContext } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';
import {
    Avatar,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownSection,
    DropdownTrigger,
} from '@nextui-org/react';
import { BsPersonFill } from 'react-icons/bs';
import { PiSignOutBold } from 'react-icons/pi';

import routes from '@/routes.ts';
import { removeLocalStorageItem } from '@/utils';
import { AuthContext } from '@/AuthContext.tsx';

const AvatarDropdown = () => {
    const {
        state: { user },
        setState,
    } = useContext(AuthContext);
    const { email } = user;

    const { pathname } = useLocation();
    const navigate = useNavigate();

    const signOut = () => {
        setState({
            isLogged: false,
            user: {
                email: '',
                role: 'GUEST',
            },
            token: '',
        });
        removeLocalStorageItem('authState');
        toast.success('Signed out successfully');
        pathname !== routes.home &&
            navigate(routes.home, {
                replace: true,
            });
    };

    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <Avatar
                    as="button"
                    className="transition-transform"
                    classNames={{
                        name: 'font-bold text-medium',
                    }}
                    name={email[0]}
                    size="md"
                    isBordered
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions">
                <DropdownSection showDivider>
                    <DropdownItem
                        key="profile"
                        className="gap-x-3"
                        textValue="profile menu"
                        startContent={
                            <Avatar
                                as="button"
                                className="transition-transform"
                                classNames={{
                                    name: 'font-bold',
                                }}
                                name={email[0]}
                                size="sm"
                                isBordered
                            />
                        }
                    >
                        <p className="font-bold">{email}</p>
                    </DropdownItem>
                </DropdownSection>
                <DropdownItem
                    key="my-profile"
                    textValue="my profile"
                    startContent={<BsPersonFill size="20px" />}
                    onPress={() => navigate(routes.profile)}
                >
                    My profile
                </DropdownItem>
                <DropdownItem
                    key="logout"
                    textValue="logout"
                    color="danger"
                    startContent={<PiSignOutBold size="20px" />}
                    onPress={signOut}
                >
                    Sign out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default AvatarDropdown;
