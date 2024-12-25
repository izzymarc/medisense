import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthCard } from '../components/auth/AuthCard';
import { FormInput } from '../components/auth/FormInput';
import { SubmitButton } from '../components/auth/SubmitButton';
import { NavLink } from '../components/NavLink';
import { signInWithEmail, storeAuthToken } from '../services/auth';

export function SignInPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const response = await signInWithEmail(email, password);
      storeAuthToken(response.token);
      navigate('/dashboard');
    } catch (error: any) {
      setErrors(error.errors || { general: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthCard title="Welcome Back">
      <form onSubmit={handleSubmit} className="space-y-6">
        {errors.general && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
            {errors.general}
          </div>
        )}

        <FormInput
          id="email"
          name="email"
          type="email"
          label="Email address"
          autoComplete="email"
          required
          error={errors.email}
        />

        <FormInput
          id="password"
          name="password"
          type="password"
          label="Password"
          autoComplete="current-password"
          required
          error={errors.password}
        />

        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input 
              type="checkbox" 
              name="remember"
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <NavLink href="/forgot-password" variant="link">
            Forgot password?
          </NavLink>
        </div>

        <SubmitButton isLoading={isLoading}>Sign in</SubmitButton>

        <div className="text-center space-y-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <NavLink href="/register" variant="link">
              Register now
            </NavLink>
          </p>
        </div>
      </form>
    </AuthCard>
  );
}
