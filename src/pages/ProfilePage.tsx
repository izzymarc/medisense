<diff path="src/pages/ProfilePage.tsx">
@@ -1,12 +1,14 @@
 import React, { useEffect } from 'react';
+import { Helmet } from 'react-helmet-async';
 import { Header } from '../components/Header';
 import { ProfileInfo } from '../components/profile/ProfileInfo';
 import { ProfileSettings } from '../components/profile/ProfileSettings';
 import { useAuth } from '../contexts/AuthContext';
 
 export function ProfilePage() {
-        const { user } = useAuth();
-        useEffect(() => {
-          document.title = "Profile - MediSense AI";
-        }, []);
+  const { user } = useAuth();
+
         if (!user) return null;
 
         return (
           <div className="min-h-screen bg-gray-50">
+            <Helmet><title>Profile Settings - MediSense AI</title></Helmet>
             <Header />
             <main className="container mx-auto px-4 py-8">
               <div className="max-w-4xl mx-auto">
</diff>
