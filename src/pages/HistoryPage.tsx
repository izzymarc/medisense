<diff path="src/pages/HistoryPage.tsx">
      @@ -1,11 +1,13 @@
 import React, { useEffect } from 'react';
+import { Helmet } from 'react-helmet-async';
 import { Header } from '../components/Header';
 import { SymptomHistory } from '../components/SymptomHistory';
 
 export function HistoryPage() {
-    useEffect(() => {
-      document.title = "History - MediSense AI";
-    }, []);
+
         return (
           <div className="min-h-screen bg-gray-50">
+            <Helmet><title>Symptom History - MediSense AI</title></Helmet>
             <Header />
             <main className="container mx-auto px-4 py-8">
               <h1 className="text-2xl font-bold mb-6">Your Health History</h1>
</diff>
