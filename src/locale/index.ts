import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import usTranslations from './us.json';
import plTranslations from './pl.json';

import { getLocalStorageItem } from '@/utils';
import { defaultLanguage, localStorageLanguageKey } from '@/values.ts';

const lng = getLocalStorageItem(localStorageLanguageKey) || defaultLanguage;

await i18n.use(initReactI18next).init(
    {
        resources: {
            en: { ...usTranslations },
            pl: { ...plTranslations },
        },
        lng,
    },
    (error) => {
        if (!error) {
            document.documentElement.lang = lng;
        }
    }
);
