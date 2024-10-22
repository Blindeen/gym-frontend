import { State } from '@/types.ts';

export const DEFAULT_STATE_VALUE: State = {
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

export const LOCAL_STORAGE_STATE_KEY = 'authState';

export const LOCAL_STORAGE_DARK_MODE_KEY = 'darkMode';

export const DEFAULT_DARK_MODE_VALUE = false;

export const DARK_MODE_CLASS_NAME = 'dark';

export const localStorageLanguageKey = 'language';

export const DEFAULT_LANGUAGE = 'en';

export const FIELD_CLASS_NAMES = {
    base: 'h-[75px]',
};

export const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const POSTAL_CODE_REGEX = /^(\d{5})|(\d{5}-\d{4})|(\d{2}-\d{3})$/;

export const PHONE_NUMBER_REGEX = /^(\+\d{1,4})((\(\d{3}\)\d{3}-\d{4})|(\d{9}))$/;
