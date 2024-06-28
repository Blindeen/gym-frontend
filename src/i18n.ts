import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import usTranslations from '@/locale/us.json';
import plTranslations from '@/locale/pl.json';

import { getLocalStorageItem } from '@/utils';

await i18n.use(initReactI18next).init({
    resources: {
        us: { ...usTranslations },
        pl: { ...plTranslations },
    },
    lng: getLocalStorageItem('language') || 'en',
});
