import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Logo } from '../components/Logo';
import { Spinner } from '../components/Spinner';

export const AuthLayout = () => {
return (
    <>
    <Helmet>
        <title>Sign In - MediSense</title>
    </Helmet>
    <div className="flex min-h-screen flex-col bg-gray-50">
        <div className="flex flex-1 flex-col items-center justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="flex justify-center">
            <Logo className="h-12 w-auto" />
            </div>
            <Suspense
            fallback={
                <div className="mt-8 flex justify-center">
                <Spinner />
                </div>
            }
            >
            <Outlet />
            </Suspense>
        </div>
        </div>
        <div className="hidden flex-1 items-center justify-center bg-white lg:flex">
        <img
            src="/auth-illustration.svg"
            alt="Medical illustration"
            className="max-h-full w-auto"
        />
        </div>
    </div>
    </>
);
};
