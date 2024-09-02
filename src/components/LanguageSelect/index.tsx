import { useTranslation } from 'react-i18next';
import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Selection,
} from '@nextui-org/react';
import '/node_modules/flag-icons/css/flag-icons.min.css';

import { setLocalStorageItem } from '@/utils';

const languages = [
    {
        name: 'English',
        label: 'EN',
        code: 'en',
        icon: 'us',
    },
    {
        name: 'Polish',
        label: 'PL',
        code: 'pl',
        icon: 'pl',
    },
];

const LanguageSelect = () => {
    const {
        i18n: { changeLanguage, language },
    } = useTranslation();

    const handleLanguageChange = async (selectedKeys: Selection) => {
        const keys = Array.from(selectedKeys);
        if (keys.length > 0) {
            const [key] = keys;
            const lang = key as string;

            setLocalStorageItem('language', lang);
            await changeLanguage(lang);
        }
    };

    return (
        <Dropdown
            classNames={{
                content: 'min-w-fit',
            }}
        >
            <DropdownTrigger>
                <Button className="data-[hover]:opacity-100" variant="bordered">
                    <span
                        className={`fi fi-${language === 'en' ? 'us' : language} scale-110 outline outline-1 outline-default`}
                    />
                    {language.toUpperCase()}
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Language Select"
                selectionMode="single"
                selectedKeys={[language]}
                onSelectionChange={handleLanguageChange}
            >
                {languages.map(({ label, code, icon }) => (
                    <DropdownItem
                        className="px-5"
                        key={code}
                        textValue={code}
                        startContent={
                            <span
                                className={`fi fi-${icon} scale-110 outline outline-1 outline-default`}
                            />
                        }
                        hideSelectedIcon
                    >
                        {label}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};

export default LanguageSelect;
