import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    'W-custom-header': 'Service-Value goes here!',
  },
});
