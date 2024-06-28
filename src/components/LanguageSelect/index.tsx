import { useTranslation } from 'react-i18next';
import { Select, SelectItem } from '@nextui-org/react';
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
        <Select
            items={languages}
            aria-label="Select a language"
            defaultSelectedKeys={[language]}
            onChange={(e) => handleLanguageChange(e.target.value)}
            renderValue={(languages) => {
                return languages.map(({ data }) => (
                    <div key={data?.code} className="flex justify-center gap-3">
                        <span className={`fi fi-${data?.code} scale-110`} />
                        {data?.label}
                    </div>
                ));
            }}
            disallowEmptySelection
        >
            {({ label, code }) => (
                <SelectItem key={code} textValue={label} hideSelectedIcon>
                    <div className="flex justify-center gap-3">
                        <span className={`fi fi-${code} scale-110`} />
                        {label}
                    </div>
                </SelectItem>
            )}
        </Select>
    );
};

export default LanguageSelect;
