import axios from 'axios';

    const api = axios.create({
      baseURL: 'http://localhost:5000/api',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    api.interceptors.request.use(config => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    const handleResponse = (response: any) => {
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      }
      throw new Error(`Request failed with status ${response.status}`);
    };

    const handleError = (error: any) => {
      console.error('API Error:', error);
      throw error;
    };

    export const auth = {
      login: async (email: string, password: string) => {
        try {
          const response = await api.post('/auth/login', { email, password });
          const data = handleResponse(response);
          localStorage.setItem('token', data.token);
          return data;
        } catch (error) {
          handleError(error);
        }
      },
      
      register: async (name: string, email: string, password: string) => {
        try {
          const response = await api.post('/auth/register', { name, email, password });
          const data = handleResponse(response);
          localStorage.setItem('token', data.token);
          return data;
        } catch (error) {
          handleError(error);
        }
      },
      
      logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    };

    export const profile = {
      get: async () => {
        try {
          const response = await api.get('/profile');
          return handleResponse(response);
        } catch (error) {
          handleError(error);
        }
      },

      update: async (updates: {
        name?: string;
        email?: string;
        currentPassword?: string;
        newPassword?: string;
        profilePicture?: string;
      }) => {
        try {
          const response = await api.patch('/profile', updates, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          return handleResponse(response);
        } catch (error) {
          handleError(error);
        }
      }
    };

    export const gemini = {
      checkSymptoms: async (symptoms: { description: string, severity: string }[]) => {
        try {
          const response = await api.post('/symptoms/check', { symptoms });
          return handleResponse(response);
        } catch (error) {
          handleError(error);
        }
      }
    };
