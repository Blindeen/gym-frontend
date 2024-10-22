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
import { BsPersonFill, BsPassFill } from 'react-icons/bs';
import { PiSignOutBold } from 'react-icons/pi';
import { MdSpaceDashboard } from 'react-icons/md';

import routes from '@/router/routes.ts';
import { AuthContext } from '@/contexts/AuthContext';
import { defaultStateValue } from '@/values.ts';
import { base64ToSrc } from '@/utils';

const AvatarDropdown = () => {
    const {
        state: { user },
        setState,
    } = useContext(AuthContext);
    const { firstName, lastName, email, profilePicture } = user;

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

    const profilePictureSrc = profilePicture
        ? base64ToSrc(profilePicture.data, profilePicture.type)
        : undefined;

    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <Avatar
                    as="button"
                    className="transition-transform"
                    classNames={{
                        name: 'font-bold',
                    }}
                    src={profilePictureSrc}
                    name={`${firstName[0]}${lastName[0]}`}
                    size="md"
                    isBordered
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions">
                <DropdownSection showDivider>
                    <DropdownItem
                        key="profile"
                        classNames={{
                            base: 'gap-x-3',
                            title: 'font-bold',
                        }}
                        textValue="profile menu"
                        startContent={
                            <Avatar
                                as="button"
                                className="transition-transform"
                                classNames={{
                                    name: 'font-bold',
                                }}
                                src={profilePictureSrc}
                                name={`${firstName[0]}${lastName[0]}`}
                                size="sm"
                                isBordered
                                disableAnimation
                            />
                        }
                    >
                        <p>
                            {firstName} {lastName}
                        </p>
                        <p>{email}</p>
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
                    key="dashboard"
                    textValue="dashboard"
                    startContent={<MdSpaceDashboard size="20px" />}
                    onPress={() => navigate(routes.dashboard)}
                >
                    {t('dashboard')}
                </DropdownItem>
                <DropdownItem
                    key="pass"
                    textValue="pass"
                    startContent={<BsPassFill size="20px" />}
                    onPress={() => navigate(routes.pass)}
                >
                    {t('pass')}
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
