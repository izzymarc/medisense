<diff path="src/pages/SignInPage.tsx">
      @@ -1,5 +1,6 @@
 import React, { useState, useEffect } from 'react';
+import { Helmet } from 'react-helmet-async';
 import { useNavigate } from 'react-router-dom';
 import { PublicHeader } from '../components/PublicHeader';
 import { AuthCard } from '../components/auth/AuthCard';
@@ -10,9 +11,7 @@
 import { useAuth } from '../contexts/AuthContext';
 
 export function SignInPage() {
-  const navigate = useNavigate();
-  const { login } = useAuth();
-  const [isLoading, setIsLoading] = useState(false);
+    const navigate = useNavigate();
+    const { login } = useAuth();
+    const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState('');
 
   useEffect(() => {
@@ -39,6 +38,7 @@
     return (
       <div>
         <PublicHeader />
+        <Helmet><title>Sign In - MediSense AI</title></Helmet>
         <AuthCard title="Welcome Back">
           {error ? (
             <ErrorMessage 
</diff>
