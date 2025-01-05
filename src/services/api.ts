import { getAccessToken } from '@/lib/get-token';
import axios from 'axios';

export const baseURL = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;

export const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 30000,
});


axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken()
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 403) {
      localStorage.clear();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
