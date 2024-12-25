import React, { useState } from 'react';
import { AuthCard } from '../components/auth/AuthCard';
import { FormInput } from '../components/auth/FormInput';
import { SubmitButton } from '../components/auth/SubmitButton';
import { NavLink } from '../components/NavLink';

export function RegisterPage() {
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
    <AuthCard title="Create Account">
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          id="name"
          name="name"
          type="text"
          label="Full name"
          autoComplete="name"
          required
          error={errors.name}
        />

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
          autoComplete="new-password"
          required
          error={errors.password}
        />

        <FormInput
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          label="Confirm password"
          autoComplete="new-password"
          required
          error={errors.confirmPassword}
        />

        <SubmitButton isLoading={isLoading}>Create account</SubmitButton>

        <div className="text-center space-y-4">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <NavLink href="/signin">
              Sign in
            </NavLink>
          </p>
        </div>
      </form>
    </AuthCard>
  );
}
