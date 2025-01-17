<diff path="src/App.tsx">
      @@ -1,11 +1,7 @@
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
-            element={
-              <ProtectedRoute>
-                <DashboardPage />
-              </ProtectedRoute>
-            }
-          />
-          <Route
-            path="/history"
-            element={
-              <ProtectedRoute>
-                <HistoryPage />
-              </ProtectedRoute>
-            }
-          />
-          <Route
-            path="/profile"
-            element={
-              <ProtectedRoute>
-                <ProfilePage />
-              </ProtectedRoute>
-            }
-          />
-          <Route path="/404" element={<NotFoundPage />} />
-          <Route path="*" element={<NotFoundPage />} />
-        </Routes>
-      </BrowserRouter>
-    </AuthProvider>
+    <div>
+      <h1>Hello, World!</h1>
+    </div>
   );
 }
    </diff>
