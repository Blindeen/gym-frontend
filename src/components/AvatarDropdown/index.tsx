import { useContext } from 'react';

import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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

import routes from '@/router/routes.ts';
import { AuthContext } from '@/context';
import { defaultStateValue } from '@/values.ts';

const AvatarDropdown = () => {
    const {
        state: { user },
        setState,
    } = useContext(AuthContext);
    const { firstName, lastName, email } = user;

    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const signOut = () => {
        setState(defaultStateValue);
        toast.success(t('signedOutSuccessfully'));
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
                        name: 'font-bold',
                    }}
                    name={`${firstName[0]}${lastName[0]}`}
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
                                name={`${firstName[0]}${lastName[0]}`}
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
                    {t('myProfile')}
                </DropdownItem>
                <DropdownItem
                    key="logout"
                    textValue="logout"
                    color="danger"
                    startContent={<PiSignOutBold size="20px" />}
                    onPress={signOut}
                >
                    {t('signOut')}
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default AvatarDropdown;
