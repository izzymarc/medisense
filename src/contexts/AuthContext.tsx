import React, { createContext, useContext, useState, useEffect } from 'react';
    import { auth as authApi, profile as profileApi } from '../services/api';

    interface User {
      id: string;
      name: string;
      email: string;
    }

    interface AuthContextType {
      isAuthenticated: boolean;
      user: User | null;
      login: (email: string, password: string) => Promise<void>;
      logout: () => void;
      register: (name: string, email: string, password: string) => Promise<void>;
      updateProfile: (updates: {
        name?: string;
        email?: string;
        currentPassword?: string;
        newPassword?: string;
      }) => Promise<void>;
    }

    const AuthContext = createContext<AuthContextType | null>(null);

    export function AuthProvider({ children }: { children: React.ReactNode }) {
      const [isAuthenticated, setIsAuthenticated] = useState(false);
      const [user, setUser] = useState<User | null>(null);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        const token = localStorage.getItem('token');
        const savedUser = localStorage.getItem('user');
        if (token && savedUser) {
          try {
            setUser(JSON.parse(savedUser));
            setIsAuthenticated(true);
          } catch (error) {
            console.error('Error parsing user from localStorage:', error);
            localStorage.removeItem('user');
            localStorage.removeItem('token');
          }
        }
        setLoading(false);
      }, []);

      const login = async (email: string, password: string) => {
        try {
          const { user } = await authApi.login(email, password);
          setUser(user);
          setIsAuthenticated(true);
          localStorage.setItem('user', JSON.stringify(user));
          console.log('AuthContext: Login successful, user:', user);
        } catch (error) {
          console.error('Login failed:', error);
          throw error;
        }
      };

      const logout = () => {
        authApi.logout();
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('user');
        console.log('AuthContext: Logout successful');
      };

      const register = async (name: string, email: string, password: string) => {
        try {
          const { user } = await authApi.register(name, email, password);
          setUser(user);
          setIsAuthenticated(true);
          localStorage.setItem('user', JSON.stringify(user));
          console.log('AuthContext: Registration successful, user:', user);
        } catch (error) {
          console.error('Registration failed:', error);
          throw error;
        }
      };

      const updateProfile = async (updates: {
        name?: string;
        email?: string;
        currentPassword?: string;
        newPassword?: string;
      }) => {
        try {
          const updatedUser = await profileApi.update(updates);
          setUser(updatedUser);
          localStorage.setItem('user', JSON.stringify(updatedUser));
          console.log('AuthContext: Profile update successful, user:', updatedUser);
        } catch (error) {
          console.error('Profile update failed:', error);
          throw error;
        }
      };

      if (loading) {
        return <div>Loading...</div>;
      }

      return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout, register, updateProfile }}>
          {children}
        </AuthContext.Provider>
      );
    }

    export function useAuth() {
      const context = useContext(AuthContext);
      if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
      }
      return context;
    }
