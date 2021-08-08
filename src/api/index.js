import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:5000',
  sponseType: 'json',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
    'Access-Control-Allow-Headers':
      'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
  },
});

export { api };
