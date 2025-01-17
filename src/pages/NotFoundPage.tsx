<diff path="src/pages/NotFoundPage.tsx">
      @@ -1,11 +1,13 @@
 import React, { useEffect } from 'react';
+import { Helmet } from 'react-helmet-async';
 import { Header } from '../components/Header';
 import { NavLink } from '../components/NavLink';
 
 export function NotFoundPage() {
-    useEffect(() => {
-      document.title = "Page Not Found - MediSense AI";
-    }, []);
+
         return (
           <div className="min-h-screen bg-gray-50">
+            <Helmet><title>Page Not Found - MediSense AI</title></Helmet>
             <Header />
             <main className="container mx-auto px-4 py-16 text-center">
               <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
</diff>
