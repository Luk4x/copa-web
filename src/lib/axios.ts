import axios from 'axios';

export const copaApi = axios.create({
    baseURL: 'http://localhost:3333'
});
