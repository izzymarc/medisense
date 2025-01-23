import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/auth';

// Layouts 
import { MainLayout } from './layouts/MainLayout';
import { AuthLayout } from './layouts/AuthLayout';

// Page imports with lazy loading
const LandingPage = React.lazy(() => import('./pages/LandingPage'));
const SignInPage = React.lazy(() => import('./pages/SignInPage'));
const RegisterPage = React.lazy(() => import('./pages/RegisterPage')); 
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const DashboardPage = React.lazy(() => import('./presentation/components/Dashboard/DashboardPage'));
const HistoryPage = React.lazy(() => import('./pages/HistoryPage'));
const ProfilePage = React.lazy(() => import('./pages/ProfilePage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

export default function App() {
const { user, loading } = useAuth();

if (loading) {
    return (
    <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500" />
    </div>
    );
}

return (
<Suspense 
    fallback={
    <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500" />
    </div>
    }
>
    <Routes>
        {/* Public routes */}
        <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        </Route>

        {/* Auth routes */}
        <Route element={<AuthLayout />}>
        <Route path="/signin" element={!user ? <SignInPage /> : <Navigate to="/dashboard" />} />
        <Route path="/register" element={!user ? <RegisterPage /> : <Navigate to="/dashboard" />} />
        </Route>

        {/* Protected routes */}
        <Route element={<MainLayout requireAuth />}>
        <Route path="/dashboard" element={user ? <DashboardPage /> : <Navigate to="/signin" />} />
        <Route path="/history" element={user ? <HistoryPage /> : <Navigate to="/signin" />} />
        <Route path="/profile" element={user ? <ProfilePage /> : <Navigate to="/signin" />} />
        </Route>

        {/* 404 route */}
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </Suspense>
);
}
