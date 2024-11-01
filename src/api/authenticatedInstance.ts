import axios from 'axios';
import i18n from 'i18next';

import { getLocalStorageItem } from '@/utils';

const authenticatedInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

authenticatedInstance.interceptors.request.use((config) => {
    const authState = getLocalStorageItem('authState');
    if (authState) {
        const authStateJSON = JSON.parse(authState);
        const accessToken = authStateJSON.accessToken;
        accessToken && (config.headers.Authorization = `Bearer ${accessToken}`);
    }
    config.headers['Accept-Language'] = i18n.language;

    return config;
});

export default authenticatedInstance;
