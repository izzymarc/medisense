<diff path="src/App.tsx">
@@ -1,5 +1,6 @@
 import React from 'react';
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
+import { HelmetProvider } from 'react-helmet-async';
 import { AuthProvider } from './contexts/AuthContext';
 import { ProtectedRoute } from './components/ProtectedRoute';
 import { LandingPage } from './pages/LandingPage';
@@ -11,39 +12,41 @@
 
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
+    <HelmetProvider>
+      <AuthProvider>
+        <BrowserRouter>
+          <Routes>
+            <Route path="/" element={<LandingPage />} />
+            <Route path="/signin" element={<SignInPage />} />
+            <Route path="/register" element={<RegisterPage />} />
+            <Route path="/about" element={<AboutPage />} />
+            <Route
+              path="/dashboard"
+              element={
+                <ProtectedRoute>
+                  <DashboardPage />
+                </ProtectedRoute>
+              }
+            />
+            <Route
+              path="/history"
+              element={
+                <ProtectedRoute>
+                  <HistoryPage />
+                </ProtectedRoute>
+              }
+            />
+            <Route
+              path="/profile"
+              element={
+                <ProtectedRoute>
+                  <ProfilePage />
+                </ProtectedRoute>
+              }
+            />
+            <Route path="/404" element={<NotFoundPage />} />
+            <Route path="*" element={<NotFoundPage />} />
+          </Routes>
+        </BrowserRouter>
+      </AuthProvider>
+    </HelmetProvider>
   );
 }
</diff>
