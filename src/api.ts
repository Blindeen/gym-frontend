import axios from 'axios';

export default axios.create({
    baseURL: `http://localhost:8082/api/v1`,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('authState') ?? '').token}`,
    },
});
