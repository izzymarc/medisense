<diff path="src/pages/DashboardPage.tsx">
      @@ -1,11 +1,13 @@
 import React, { useEffect } from 'react';
+import { Helmet } from 'react-helmet-async';
 import { Header } from '../components/Header';
 import { SymptomChecker } from '../components/SymptomChecker';
 import { SymptomHistory } from '../components/SymptomHistory';
 import { useAuth } from '../contexts/AuthContext';
 
 export function DashboardPage() {
-    const { user } = useAuth();
+  const { user } = useAuth();
+
         useEffect(() => {
           document.title = "Dashboard - MediSense AI";
         }, []);
@@ -13,6 +15,7 @@
         return (
           <div className="min-h-screen bg-gray-50">
             <Header />
+            <Helmet><title>Dashboard - MediSense AI</title></Helmet>
             <main className="container mx-auto px-4 py-8">
               {user && (
                 <h1 className="text-2xl font-bold mb-6">
</diff>
