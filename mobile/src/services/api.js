import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bethehero-ngo-api.herokuapp.com'
});

export default api;