import { State } from '@/types.ts';

export const defaultStateValue: State = {
    isLogged: false,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        role: 'GUEST',
    },
    token: '',
};

export const localStorageStateKey = 'authState';

export const localStorageDarkModeKey = 'darkMode';

export const defaultDarkModeValue = false;

export const darkModeClassName = 'dark';

export const localStorageLanguageKey = 'language';

export const defaultLanguage = 'us';
