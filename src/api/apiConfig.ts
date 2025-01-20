import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  headers: {
    Authorization:
      'Bearer NA.nn91aw8NJnUonIMWB71llSFCole7tOG17wy7L70B8OHNceGbW0fazVBG-pRG',
  },
});
