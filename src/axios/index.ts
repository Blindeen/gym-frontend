import axios from 'axios';

const instance = axios.create({
    baseURL: `http://localhost:8082/api/v1`,
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.request.use((config) => {
    const token = JSON.parse(localStorage.getItem('authState') ?? '').token;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default instance;
