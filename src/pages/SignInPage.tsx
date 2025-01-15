<diff path="src/pages/SignInPage.tsx">
@@ -1,13 +1,14 @@
 import React, { useState, useEffect } from 'react';
 import { useNavigate } from 'react-router-dom';
+import { Helmet } from 'react-helmet-async';
 import { PublicHeader } from '../components/PublicHeader';
 import { AuthCard } from '../components/auth/AuthCard';
 import { FormInput } from '../components/auth/FormInput';
 import { SubmitButton } from '../components/auth/SubmitButton';
 import { NavLink } from '../components/NavLink';
 import { ErrorMessage } from '../components/ErrorMessage';
-import { useAuth } from '../contexts/AuthContext';
-
+import { useAuth } from '../presentation/contexts/AuthContext';
+    
 export function SignInPage() {
   const navigate = useNavigate();
   const { login } = useAuth();
@@ -15,9 +16,7 @@
   const [error, setError] = useState('');
 
   useEffect(() => {
-    document.title = "Sign In - MediSense AI";
   }, []);
-
         const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
           e.preventDefault();
           setError('');
@@ -41,6 +40,7 @@
         return (
           <div>
             <PublicHeader />
+            <Helmet><title>Sign In - MediSense AI</title></Helmet>
             <AuthCard title="Welcome Back">
               {error ? (
                 <ErrorMessage 
</diff>
