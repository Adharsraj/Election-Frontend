import axios from 'axios';
import config from './config'; // Adjust the path according to your project structure

const axiosInstance = axios.create({
  baseURL: config.baseUrl,
});

export default axiosInstance;