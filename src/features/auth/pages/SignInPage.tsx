import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { PublicHeader } from '../../../components/PublicHeader';
    import { AuthCard } from '../components/AuthCard';
    import { FormInput } from '../components/FormInput';
    import { SubmitButton } from '../components/SubmitButton';
    import { NavLink } from '../../../components/NavLink';
    import { ErrorMessage } from '../../../components/ErrorMessage';
    import { useAuth } from '../../../contexts/AuthContext';

    export function SignInPage() {
      const navigate = useNavigate();
      const { login } = useAuth();
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState('');

      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        setIsLoading(true);
        try {
          await login(email, password);
          navigate('/dashboard');
        } catch (err: any) {
          setError(err.response?.data?.error || 'Invalid credentials');
        } finally {
          setIsLoading(false);
        }
      };

      return (
        <div>
          <PublicHeader />
          <AuthCard title="Welcome Back">
            {error ? (
              <ErrorMessage 
                title="Sign In Failed"
                message={error}
                showHomeLink={false}
              />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
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

                <SubmitButton isLoading={isLoading}>Sign in</SubmitButton>

                <p className="text-center text-sm text-gray-600">
                  Don't have an account?{' '}
                  <NavLink to="/register">Register now</NavLink>
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
