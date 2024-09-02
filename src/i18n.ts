import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import usTranslations from '@/locale/us.json';
import plTranslations from '@/locale/pl.json';

import { getLocalStorageItem } from '@/utils';
import { defaultLanguage, localStorageLanguageKey } from '@/values.ts';

await i18n.use(initReactI18next).init({
    resources: {
        en: { ...usTranslations },
        pl: { ...plTranslations },
    },
    lng: getLocalStorageItem(localStorageLanguageKey) || defaultLanguage,
});
