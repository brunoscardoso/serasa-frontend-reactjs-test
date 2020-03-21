import axios from 'axios';

const api = axios.create({
  baseURL: 'https://serasa-backend-test.herokuapp.com/',
});

export default api;
