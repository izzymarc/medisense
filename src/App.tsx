
    <diff path="src/App.tsx">
      @@ -1,39 +1,41 @@
-import React from 'react';
-import { BrowserRouter, Routes, Route } from 'react-router-dom';
-import { AuthProvider } from './contexts/AuthContext';
-import { ProtectedRoute } from './components/ProtectedRoute';
-import { LandingPage } from './pages/LandingPage';
-import { SignInPage } from './pages/SignInPage';
-import { RegisterPage } from './pages/RegisterPage';
-import { AboutPage } from './pages/AboutPage';
-import { DashboardPage } from './pages/DashboardPage';
-import { HistoryPage } from './pages/HistoryPage';
-import { ProfilePage } from './pages/ProfilePage';
-import { NotFoundPage } from './pages/NotFoundPage';
+import React from 'react';
+import { BrowserRouter, Routes, Route } from 'react-router-dom';
+import { AuthProvider } from './presentation/contexts/AuthContext';
+import { ProtectedRoute } from './components/ProtectedRoute';
+import { LandingPage } from './pages/LandingPage';
+import { SignInPage } from './pages/SignInPage';
+import { RegisterPage } from './pages/RegisterPage';
+import { AboutPage } from './pages/AboutPage';
+import { DashboardPage } from './presentation/components/Dashboard/DashboardPage';
+import { HistoryPage } from './pages/HistoryPage';
+import { ProfilePage } from './pages/ProfilePage';
+import { NotFoundPage } from './pages/NotFoundPage';
 
 export default function App() {
   return (
-    <AuthProvider>
-      <BrowserRouter>
-        <Routes>
-          <Route path="/" element={<LandingPage />} />
-          <Route path="/signin" element={<SignInPage />} />
-          <Route path="/register" element={<RegisterPage />} />
-          <Route path="/about" element={<AboutPage />} />
-          <Route
-            path="/dashboard"
-            