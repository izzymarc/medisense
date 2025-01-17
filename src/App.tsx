<diff path="src/App.tsx">
      @@ -9,39 +9,41 @@
 
     export default function App() {
       return (
-        <>
+        <div>
           <AuthProvider>
             <BrowserRouter>
               <Routes>
-                <Route path="/" element={<LandingPage />} />
-                <Route path="/signin" element={<SignInPage />} />
-                <Route path="/register" element={<RegisterPage />} />
-                <Route path="/about" element={<AboutPage />} />
-                <Route
-                  path="/dashboard"
-                  element={
-                    <ProtectedRoute>
-                      <DashboardPage />
-                    </ProtectedRoute>
-                  }
-                />
-                <Route
-                  path="/history"
-                  element={
-                    <ProtectedRoute>
-                      <HistoryPage />
-                    </ProtectedRoute>
-                  }
-                />
-                <Route
-                  path="/profile"
-                  element={
-                    <ProtectedRoute>
-                      <ProfilePage />
-                    </ProtectedRoute>
-                  }
-                />
-                <Route path="/404" element={<NotFoundPage />} />
-                <Route path="*" element={<NotFoundPage />} />
+              <Route path="/" element={<LandingPage />} />
+              <Route path="/signin" element={<SignInPage />} />
+              <Route path="/register" element={<RegisterPage />} />
+              <Route path="/about" element={<AboutPage />} />
+              <Route
+                path="/dashboard"
+                element={
+                  <ProtectedRoute>
+                    <DashboardPage />
+                  </ProtectedRoute>
+                }
+              />
+              <Route
+                path="/history"
+                element={
+                  <ProtectedRoute>
+                    <HistoryPage />
+                  </ProtectedRoute>
+                }
+              />
+              <Route
+                path="/profile"
+                element={
+                  <ProtectedRoute>
+                    <ProfilePage />
+                  </ProtectedRoute>
+                }
+              />
+              <Route path="/404" element={<NotFoundPage />} />
+              <Route path="*" element={<NotFoundPage />} />
               </Routes>
             </BrowserRouter>
           </AuthProvider>
-        </>
+        </div>
       );
     }
    </diff>
