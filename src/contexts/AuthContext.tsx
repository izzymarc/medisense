import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthResponse, ApiError } from '../types';
import { auth as authApi } from '../services/api';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
  updateProfile: (updates: ProfileUpdate) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    if (token && savedUser) {
      try {
        const parsedUser: User = JSON.parse(savedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const { user: apiUser } = await authApi.login(email, password);
      setUser(apiUser);
      setIsAuthenticated(true);
    } catch (error) {
      throw error as ApiError;
    }
  };

  const logout = (): void => {
    authApi.logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  const register = async (name: string, email: string, password: string): Promise<void> => {
    try {
      const { user: apiUser } = await authApi.register(name, email, password);
      setUser(apiUser);
      setIsAuthenticated(true);
    } catch (error) {
      throw error as ApiError;
    }
  };

  const updateProfile = async (updates: ProfileUpdate): Promise<void> => {
    try {
      if (!user) throw new Error('User not authenticated');
      const updatedUser = await authApi.updateProfile(updates);
      setUser(updatedUser);
    } catch (error) {
      throw error as ApiError;
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      user, 
      login, 
      logout, 
      register, 
      updateProfile 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
