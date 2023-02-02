import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        "token": "TOKEN_ACESSO"
    }
});

export default api;