import React, { useState } from 'react';
import { AuthCard } from '../components/auth/AuthCard';
import { FormInput } from '../components/auth/FormInput';
import { SubmitButton } from '../components/auth/SubmitButton';
import { NavLink } from '../components/NavLink';

export function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <AuthCard title="Welcome Back">
      <form onSubmit={handleSubmit} className="space-y-6">
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
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <NavLink href="/forgot-password" variant="default">
            Forgot password?
          </NavLink>
        </div>

        <SubmitButton isLoading={isLoading}>Sign in</SubmitButton>

        <div className="text-center space-y-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <NavLink href="/register">
              Register now
            </NavLink>
          </p>
        </div>
      </form>
    </AuthCard>
  );
}
