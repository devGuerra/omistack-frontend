import axios from 'axios'

const api = axios.create({
    baseURL: 'https://omnistack-backend-prosaka.herokuapp.com'
});

export default api;