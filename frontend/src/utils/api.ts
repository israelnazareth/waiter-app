import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://172.23.235.228:3001'
});
