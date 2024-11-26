import axios from 'axios';
import cookieUtil from '../utils/cookieUtil';

const apiClient = axios.create({
  baseURL: 'https://localhost:7214/api'//,
//   headers: {
//     'Content-Type': 'application/json',
//   },
});

export default {
    post(data) {
        return apiClient.post('/user', data, 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookieUtil.getToken()}`
                    //'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIzNDIzIiwidW5pcXVlX25hbWUiOiJvZ2FyY2lhIiwicHJlZmVycmVkX3VzZXJuYW1lIjoib2dhcmNpYSIsImdpdmVuX25hbWUiOiJPTUFSICIsImZhbWlseV9uYW1lIjoiR0FSQ0lBIFNBTkNIRVoiLCJlbWFpbCI6Im9tYXIuZ2FyY2lhQGl0LXN0cmF0ZWd5Lm14IiwibmFtZWlkIjoiMjM0MjMiLCJpZEFwbGljYWNpb24iOiI3MiIsImlkT3JpZ2VuIjoiMSIsImlkQW1iaWVudGUiOiI0IiwiaWRUaXBvT3BlcmFjaW9uIjoiOCIsInRpcG9PcGVyYWNpb24iOiJESVJFQ0NJT04gR0VORVJBTCIsImlkUGVyZmlsIjoiMiIsInBlcmZpbFVzdWFyaW8iOiJDbGllbnRlIiwibmJmIjoxNzMwODM5OTY0LCJleHAiOjE3NjIzNzU5NjQsImlhdCI6MTczMDgzOTk2NCwiaXNzIjoic3VpdC5jbGllbnQiLCJhdWQiOiJzdWl0In0.8w2XvtadT8bGju1c-fyH8-4J774LG54IZVYv8ioDzj4`
                }
            })
        .then(response => {
            return { isSuccess: true, message: '', data: response }
        })
        .catch(error => {
            return { isSuccess: false, message: error }; 
        });
    }
}