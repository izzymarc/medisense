import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { startPerformanceMonitoring } from './utils/performance';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

startPerformanceMonitoring();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

serviceWorkerRegistration.register();
