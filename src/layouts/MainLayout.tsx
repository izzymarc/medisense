import { ReactNode, Suspense } from 'react';
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Spinner } from '../components/Spinner';
import { useAuth } from '../contexts/auth/AuthProvider';

interface MainLayoutProps {
requireAuth?: boolean;
children?: ReactNode;
}

export const MainLayout = ({ requireAuth = false }: MainLayoutProps) => {
const { isAuthenticated, isLoading } = useAuth();
const location = useLocation();

if (isLoading) {
    return (
    <div className="flex h-screen items-center justify-center">
        <Spinner size="lg" />
    </div>
    );
}

if (requireAuth && !isAuthenticated) {
    return (
    <Navigate
        to="/signin"
        state={{ from: location }}
        replace
    />
    );
}

return (
    <>
    <Helmet>
        <title>MediSense - Your AI Health Assistant</title>
    </Helmet>
    <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 bg-gray-50">
        <Suspense
            fallback={
            <div className="flex h-[50vh] items-center justify-center">
                <Spinner />
            </div>
            }
        >
            <Outlet />
        </Suspense>
        </main>
        <Footer />
    </div>
    </>
);
};
