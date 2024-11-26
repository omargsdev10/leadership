import axios from 'axios';
import cookieUtil from '../utils/cookieUtil';

const apiClient = axios.create({
  baseURL: 'https://localhost:7214/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  get(resource) {
    return apiClient.get(resource);
  },
  post(resource, data) {
    return apiClient.post(resource, data);
  },
  // More methods can be added (put, delete, etc.)
  login(username, password) {
    return apiClient.post('auth/login', { username, password })
    .then(response => {
        cookieUtil.createUserSession(response.data.token, response.data.user);
        return { isSuccess: true, message: '' };
    })
    .catch(error => {
        console.error('login()', error);
        return { isSuccess: false, message: error };
    });
  }
};
