import { RouteObject } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';
import { SignInPage } from '../pages/SignInPage';
import { RegisterPage } from '../pages/RegisterPage';
import { DashboardPage } from '../pages/DashboardPage';
import { HistoryPage } from '../pages/HistoryPage';
import { AboutPage } from '../pages/AboutPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ProtectedRoute } from '../components/ProtectedRoute';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/signin',
    element: <SignInPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/dashboard',
    element: <ProtectedRoute><DashboardPage /></ProtectedRoute>
  },
  {
    path: '/history',
    element: <ProtectedRoute><HistoryPage /></ProtectedRoute>
  },
  {
    path: '/404',
    element: <NotFoundPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
];