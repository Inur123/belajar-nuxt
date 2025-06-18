import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (email, password) => {
  try {
    const response = await apiClient.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data?.errors || { message: 'Login failed' };
  }
};

export const register = async (name, email, password) => {
  try {
    const response = await apiClient.post('/register', { name, email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data?.errors || { message: 'Registration failed' };
  }
};

export const logout = async (token) => {
  try {
    const response = await apiClient.post('/logout', {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Logout failed' };
  }
};

// Interceptor to add auth token to requests
apiClient.interceptors.request.use(
  config => {
    if (process.client) {
      const token = localStorage.getItem('auth_token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
);