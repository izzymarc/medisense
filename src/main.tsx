import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { FirebaseAuthRepository } from './infrastructure/repositories/FirebaseAuthRepository';
import { AuthService } from './application/auth/AuthService';
import { AuthProvider } from './presentation/contexts/AuthContext';
import App from './App.tsx';
import './index.css';

const authRepository = new FirebaseAuthRepository();
const authService = new AuthService(authRepository);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider authService={authService}>
      <App />
    </AuthProvider>
  </StrictMode>
);
