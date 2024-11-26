import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://localhost:7214/api',
    headers: {
      'Content-Type': 'application/json',
    },
});

export default {
    getAll()
    {
        return apiClient.get('course')
            .then(response => {
                return response;
            })
            .catch(error => {
                console.error(error);
            });
    }
}
