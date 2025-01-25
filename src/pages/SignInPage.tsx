import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PublicHeader } from '../components/PublicHeader';
import { AuthCard } from '../components/auth/AuthCard';
import { FormInput } from '../components/auth/FormInput';
import { SubmitButton } from '../components/auth/SubmitButton';
import { NavLink } from '../components/NavLink';
import { Alert } from '../components/common/Alert';
import { useAuth } from '../contexts/AuthContext';

export function SignInPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [retryCount, setRetryCount] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password');
      return;
    }

    setIsLoading(true);
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message);
      setRetryCount(prev => prev + 1);
      
      // If we've had multiple network errors, provide additional guidance
      if (err.message.includes('network') && retryCount >= 2) {
        setError(`${err.message}\n\nTroubleshooting tips:\n1. Check your internet connection\n2. Try refreshing the page\n3. Clear your browser cache`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <PublicHeader />
      <AuthCard title="Welcome Back">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <Alert 
              type="error"
              message={error}
              className="mb-4"
            />
          )}

          <FormInput
            id="email"
            name="email"
            type="email"
            label="Email address"
            autoComplete="email"
            required
          />

          <FormInput
            id="password"
            name="password"
            type="password"
            label="Password"
            autoComplete="current-password"
            required
          />

          <SubmitButton isLoading={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign in'}
          </SubmitButton>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <NavLink href="/register">Register now</NavLink>
          </p>
        </form>
      </AuthCard>
    </div>
  );
}