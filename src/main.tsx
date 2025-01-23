import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App.tsx';
import './index.css';
import { startPerformanceMonitoring } from './utils/performance';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { AuthProvider } from './contexts/auth';
import { app, analytics } from './config/firebase';
import { getAnalytics } from 'firebase/analytics';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App.tsx';
import './index.css';
import { startPerformanceMonitoring } from './utils/performance';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { AuthProvider } from './contexts/AuthProvider';
import './config/firebase'; // This initializes Firebase
import { initializeAnalytics } from './utils/analytics';

if (analytics) {
getAnalytics(app);
}
startPerformanceMonitoring();
startPerformanceMonitoring();

function ErrorFallback({ error }: { error: Error }) {
return (
    <div role="alert" className="p-4 bg-red-50 border border-red-400 rounded">
    <h2 className="text-lg font-semibold text-red-800">Something went wrong</h2>
    <pre className="mt-2 text-sm text-red-600">{error.message}</pre>
    </div>
);
}

createRoot(document.getElementById('root')!).render(
<StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
    <HelmetProvider>
        <BrowserRouter>
        <AuthProvider>
            <App />
        </AuthProvider>
        </BrowserRouter>
    </HelmetProvider>
    </ErrorBoundary>
</StrictMode>
);

serviceWorkerRegistration.register();
