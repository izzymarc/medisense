import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthCard } from '../components/auth/AuthCard';
import { FormInput } from '../components/auth/FormInput';
import { SubmitButton } from '../components/auth/SubmitButton';
import { NavLink } from '../components/NavLink';
import { signUpWithEmail, storeAuthToken } from '../services/auth';

export function RegisterPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (password !== confirmPassword) {
      setErrors({ confirmPassword: 'Passwords do not match' });
      setIsLoading(false);
      return;
    }

    try {
      const response = await signUpWithEmail(name, email, password);
      storeAuthToken(response.token);
      navigate('/dashboard');
    } catch (error: any) {
      setErrors(error.errors || { general: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthCard title="Create Account">
      <form onSubmit={handleSubmit} className="space-y-6">
        {errors.general && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
            {errors.general}
          </div>
        )}

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
            <NavLink href="/signin" variant="link">
              Sign in
            </NavLink>
          </p>
        </div>
      </form>
    </AuthCard>
  );
}
