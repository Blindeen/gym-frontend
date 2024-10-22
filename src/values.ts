import { State } from '@/types.ts';

export const defaultStateValue: State = {
    isLogged: false,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        role: 'GUEST',
        profilePicture: {
            name: '',
            type: '',
            data: '',
        },
    },
    accessToken: '',
    refreshToken: '',
};

export const localStorageStateKey = 'authState';

export const localStorageDarkModeKey = 'darkMode';

export const defaultDarkModeValue = false;

export const darkModeClassName = 'dark';

export const localStorageLanguageKey = 'language';

export const defaultLanguage = 'en';

export const fieldClassNames = {
    base: 'h-[75px]',
};

export const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const postalCodeRegex = /^(\d{5})|(\d{5}-\d{4})|(\d{2}-\d{3})$/;

export const phoneNumberRegex = /^(\+\d{1,4})((\(\d{3}\)\d{3}-\d{4})|(\d{9}))$/;
