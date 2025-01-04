import { RouteObject } from 'react-router-dom';
    import { LandingPage } from '../pages/LandingPage';
    import { SignInPage } from '../pages/SignInPage';
    import { RegisterPage } from '../pages/RegisterPage';
    import { DashboardPage } from '../pages/DashboardPage';
    import { HistoryPage } from '../pages/HistoryPage';
    import { AboutPage } from '../pages/AboutPage';
    import { NotFoundPage } from '../pages/NotFoundPage';
    import { ProfilePage } from '../pages/ProfilePage';
    import { ProtectedRoute } from '../components/ProtectedRoute';
    import { FeaturesPage } from '../pages/FeaturesPage';
    import { PricingPage } from '../pages/PricingPage';
    import { SecurityPage } from '../pages/SecurityPage';
    import { UpdatesPage } from '../pages/UpdatesPage';
    import { CareersPage } from '../pages/CareersPage';
    import { ContactPage } from '../pages/ContactPage';
    import { PartnersPage } from '../pages/PartnersPage';
    import { DocumentationPage } from '../pages/DocumentationPage';
    import { SupportPage } from '../pages/SupportPage';
    import { ApiPage } from '../pages/ApiPage';
    import { CommunityPage } from '../pages/CommunityPage';

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
        path: '/profile',
        element: <ProtectedRoute><ProfilePage /></ProtectedRoute>
      },
      {
        path: '/features',
        element: <FeaturesPage />
      },
      {
        path: '/pricing',
        element: <PricingPage />
      },
      {
        path: '/security',
        element: <SecurityPage />
      },
      {
        path: '/updates',
        element: <UpdatesPage />
      },
      {
        path: '/careers',
        element: <CareersPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/partners',
        element: <PartnersPage />
      },
      {
        path: '/documentation',
        element: <DocumentationPage />
      },
      {
        path: '/support',
        element: <SupportPage />
      },
      {
        path: '/api',
        element: <ApiPage />
      },
      {
        path: '/community',
        element: <CommunityPage />
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
