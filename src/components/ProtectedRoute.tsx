import { Navigate, useLocation } from 'react-router-dom';
    import { useAuth } from '../contexts/AuthContext';
    import React from 'react';

    export function ProtectedRoute({ children }: { children: React.ReactNode }) {
      const { isAuthenticated } = useAuth();
      const location = useLocation();

      if (!isAuthenticated) {
        console.log('ProtectedRoute: Not authenticated, redirecting to /signin');
        return <Navigate to="/signin" state={{ from: location }} replace />;
      }

      console.log('ProtectedRoute: Authenticated, rendering children');
      return <>{children}</>;
    }
