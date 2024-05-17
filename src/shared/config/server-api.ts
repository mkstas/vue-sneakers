import axios from 'axios';
import { SERVER_API } from './constants';

export const $api = axios.create({
  baseURL: SERVER_API,
});
