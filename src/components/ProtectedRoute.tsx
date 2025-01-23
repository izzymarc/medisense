import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import React from 'react';

interface ProtectedRouteProps {
children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
const { isAuthenticated, isLoading } = useAuth();
const location = useLocation();

// Show loading spinner while checking auth state
if (isLoading) {
    return (
    <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary" />
    </div>
    );
}

// Redirect to sign in page if not authenticated
if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
}

// Render children if authenticated
return <>{children}</>;
}
