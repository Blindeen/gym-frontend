import { useTranslation } from 'react-i18next';

import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from '@nextui-org/react';
import '/node_modules/flag-icons/css/flag-icons.min.css';

import { setLocalStorageItem } from '@/utils';

const languages = [
    {
        name: 'English',
        label: 'US',
        code: 'us',
    },
    {
        name: 'Polish',
        label: 'PL',
        code: 'pl',
    },
];

const LanguageSelect = () => {
    const {
        i18n: { changeLanguage, language },
    } = useTranslation();

    const handleLanguageChange = async (lang: string) => {
        setLocalStorageItem('language', lang);
        await changeLanguage(lang);
    };

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="bordered"
                    className="capitalize"
                    startContent={<span className={`fi fi-${language}`} />}
                >
                    {language.toUpperCase()}
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Language selection"
                disallowEmptySelection
                selectedKeys={[language]}
            >
                {languages.map(({ label, code }) => (
                    <DropdownItem
                        key={code}
                        startContent={<span className={`fi fi-${code}`} />}
                        onClick={() => handleLanguageChange(code)}
                    >
                        {label}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};

export default LanguageSelect;
