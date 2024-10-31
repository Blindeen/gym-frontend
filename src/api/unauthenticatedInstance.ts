import axios from 'axios';
import i18n from 'i18next';

const unauthenticatedInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

unauthenticatedInstance.interceptors.request.use((config) => {
    config.headers['Accept-Language'] = i18n.language;
    return config;
});

export default unauthenticatedInstance;
