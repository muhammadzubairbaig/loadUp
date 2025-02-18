import axios from 'axios';

// Base URL for API requests, fetched from environment variables
const BASE_URL = process.env.REACT_APP_API_URL || ''; // Ensure this is set in your .env file

/**
 * Create an Axios instance with default configuration
 * Benefits:
 * - Centralized API configuration
 * - Default headers applied globally
 * - Automatic timeout handling
 * - Easier to maintain and scale
 */
const apiClient = axios.create({
  baseURL: BASE_URL, // Base API URL
  timeout: 15000, // Increased timeout to 15 seconds to handle slow networks
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json', // Ensures proper API response format
  },
});

/**
 * Request Interceptor
 * Purpose:
 * - Attach authentication tokens dynamically before sending requests
 * - Log outgoing requests for debugging
 */
apiClient.interceptors.request.use(
  (config) => {
    // Example: Attach Authorization token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log(`Outgoing request: ${config.method?.toUpperCase()} ${config.url}`, config);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

/**
 * Response Interceptor
 * Purpose:
 * - Handle global response errors
 * - Automatically refresh token if expired (optional)
 */
apiClient.interceptors.response.use(
  (response) => response, // Simply return response if successful
  async (error) => {
    if (error.response) {
      console.error('API Response Error:', error.response);

      // Handle 401 Unauthorized (e.g., Token expired)
      if (error.response.status === 401) {
        console.warn('Unauthorized! Redirecting to login...');
        // Example: Redirect to login page or refresh token logic
        window.location.href = '/login';
      }
    } else if (error.request) {
      console.error('No response received from server:', error.request);
    } else {
      console.error('Request setup error:', error.message);
    }

    return Promise.reject(error); // Forward the error to the caller
  }
);

/**
 * Example API Call Methods
 * Purpose:
 * - Provide reusable methods for GET, POST, PUT, DELETE requests
 * - Reduce redundant Axios calls in components
 */
export const api = {
  get: (url, config) => apiClient.get(url, config),
  post: (url, data, config) => apiClient.post(url, data, config),
  put: (url, data, config) => apiClient.put(url, data, config),
  delete: (url, config) => apiClient.delete(url, config),
};

export default apiClient; // Export the Axios instance for flexibility
