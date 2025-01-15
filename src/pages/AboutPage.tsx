<diff path="src/pages/AboutPage.tsx">
@@ -1,11 +1,13 @@
 import React, { useEffect } from 'react';
+import { Helmet } from 'react-helmet-async';
 import { Header } from '../components/Header';
 import { Activity, Heart, Shield, Users } from 'lucide-react';
 
 export function AboutPage() {
-  useEffect(() => {
-    document.title = "About MediSense AI";
-  }, []);
+
         return (
           <div className="min-h-screen bg-gray-50">
+            <Helmet><title>About Us - MediSense AI</title></Helmet>
             <Header />
             <main className="container mx-auto px-4 py-16">
               <div className="max-w-3xl mx-auto">
</diff>
