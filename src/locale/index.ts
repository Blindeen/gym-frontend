import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import usTranslations from './us.json';
import plTranslations from './pl.json';

import { getLocalStorageItem } from '@/utils';
import { DEFAULT_LANGUAGE, localStorageLanguageKey } from '@/constants';

const lng = getLocalStorageItem(localStorageLanguageKey) || DEFAULT_LANGUAGE;

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
