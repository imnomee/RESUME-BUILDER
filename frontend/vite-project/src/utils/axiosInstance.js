import axios from 'axios';

import { BASE_URL } from './apiPaths';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('token');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
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
    async (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                // Handle token expiration or unauthorized access
                localStorage.removeItem('token');
                window.location.href = '/';
            } else if (error.response.status === 403) {
                // Handle forbidden access
                alert('You do not have permission to access this resource.');
            } else if (error.response.status === 404) {
                // Handle not found
                alert('Resource not found.');
            } else if (error.response.status === 500) {
                // Handle server error
                alert('Internal server error. Please try again later.');
                console.error('Server error:', error.response.data);
            } else {
                // Handle other errors
                alert(error.response.data.message || 'An error occurred.');
                console.error('Error response:', error.response.data);
            }
        } else if (error.code === 'ECONNABORTED') {
            // Handle timeout error
            alert('Request timed out. Please try again.');
            console.error('Timeout error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
