import axios from 'axios';
import i18n from 'i18next';

const instance = axios.create({
    baseURL: `http://localhost:8082/api/v1`,
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.request.use((config) => {
    const token = JSON.parse(localStorage.getItem('authState') ?? '').token;
    config.headers.Authorization = `Bearer ${token}`;
    config.headers['Accept-Language'] = i18n.language;
    return config;
});

export default instance;
