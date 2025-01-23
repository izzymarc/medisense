import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
      import { PublicHeader } from '../components/PublicHeader';
      import { AuthCard } from '../components/auth/AuthCard';
      import { FormInput } from '../components/auth/FormInput';
      import { SubmitButton } from '../components/auth/SubmitButton';
      import { NavLink } from '../components/NavLink';
      import { ErrorMessage } from '../components/ErrorMessage';
      import { useAuth } from '../contexts/AuthContext';
      import { Helmet } from 'react-helmet-async';

    export function RegisterPage() {
    const navigate = useNavigate();
    const { register } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

        useEffect(() => {
          document.title = "Register - MediSense AI";
        }, []);

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setError('');
          const formData = new FormData(e.currentTarget);
          const name = formData.get('name') as string;
          const email = formData.get('email') as string;
          const password = formData.get('password') as string;
          const confirmPassword = formData.get('confirmPassword') as string;

          if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
          }

          setIsLoading(true);
          try {
            await register(name, email, password);
            navigate('/dashboard');
          } catch (err: any) {
            setError(err.response?.data?.error || 'Registration failed');
          } finally {
            setIsLoading(false);
          }
        };

        return (
          <div>
            <PublicHeader />
            <Helmet><title>Register - MediSense AI</title></Helmet>
            <AuthCard title="Create Account">
              {error ? (
                <ErrorMessage 
                  title="Registration Failed"
                  message={error}
                  showHomeLink={false}
                />
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <FormInput
                    id="name"
                    name="name"
                    type="text"
                    label="Full name"
                    autoComplete="name"
                    required
                  />

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
                    autoComplete="new-password"
                    required
                  />

                  <FormInput
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    label="Confirm password"
                    autoComplete="new-password"
                    required
                  />

                  <SubmitButton isLoading={isLoading}>Create account</SubmitButton>

                  <p className="text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <NavLink to="/signin">Sign in</NavLink>
                  </p>
                  <p className="text-center text-sm text-gray-600">
                    <NavLink to="/">Back to main page</NavLink>
                  </p>
                </form>
              )}
            </AuthCard>
          </div>
        );
    }
