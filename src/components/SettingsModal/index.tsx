import { useTranslation } from 'react-i18next';
import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from '@nextui-org/react';
import { Divider } from '@nextui-org/divider';
import { IoSettingsSharp } from 'react-icons/io5';

import LanguageSelect from '@components/LanguageSelect';
import ThemeSwitcher from '@components/ThemeSwitcher';

const SettingsModal = () => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const { t } = useTranslation();

    return (
        <>
            <Button onPress={onOpen} isIconOnly>
                <IoSettingsSharp title="Settings icon" />
            </Button>

            <Modal size="sm" placement="center" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1 text-xl font-bold">
                        {t('settings')}
                    </ModalHeader>

                    <ModalBody>
                        <div className="flex items-center gap-x-3">
                            <p className="min-w-[67px]">{t('theme')}</p>
                            <ThemeSwitcher />
                        </div>
                        <Divider />
                        <div className="flex items-center gap-x-3">
                            <p className="min-w-[67px]">{t('language')}</p>
                            <LanguageSelect />
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="danger" onPress={onClose}>
                            {t('close')}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default SettingsModal;
