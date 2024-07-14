import { State } from '@/types.ts';

export const defaultStateValue: State = {
    isLogged: false,
    user: {
        email: '',
        role: 'GUEST',
    },
    token: '',
};

export const localStorageStateKey = 'authState';

export const localStorageDarkModeKey = 'darkMode';

export const defaultDarkModeValue = false;

export const darkModeClassName = 'dark';
