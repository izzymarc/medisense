import { User } from '../types';

interface AuthResponse {
  user: User;
  token: string;
}

interface AuthError {
  message: string;
  errors?: Record<string, string>;
}

export async function signInWithEmail(email: string, password: string): Promise<AuthResponse> {
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Validate email and password
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    // Mock successful response
    return {
      user: {
        id: '1',
        name: email.split('@')[0],
        email: email
      },
      token: 'mock-jwt-token'
    };
  } catch (error) {
    throw {
      message: 'Invalid email or password',
      errors: {
        email: 'Invalid credentials'
      }
    } as AuthError;
  }
}

export async function signUpWithEmail(
  name: string,
  email: string,
  password: string
): Promise<AuthResponse> {
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Validate inputs
    if (!name || !email || !password) {
      throw new Error('All fields are required');
    }

    // Mock successful response
    return {
      user: {
        id: '1',
        name,
        email
      },
      token: 'mock-jwt-token'
    };
  } catch (error) {
    throw {
      message: 'Registration failed',
      errors: {
        email: 'Email already exists'
      }
    } as AuthError;
  }
}

export function storeAuthToken(token: string): void {
  localStorage.setItem('auth_token', token);
}

export function getAuthToken(): string | null {
  return localStorage.getItem('auth_token');
}

export function removeAuthToken(): void {
  localStorage.removeItem('auth_token');
}
