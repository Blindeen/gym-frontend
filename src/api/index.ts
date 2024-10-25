import axios from 'axios';
import i18n from 'i18next';

import { getLocalStorageItem } from '@/utils';

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.request.use((config) => {
    const accessToken = JSON.parse(getLocalStorageItem('authState')).accessToken;
    config.headers.Authorization = `Bearer ${accessToken}`;
    config.headers['Accept-Language'] = i18n.language;
    return config;
});

export default instance;
