import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://172.31.72.186:3001'
});
