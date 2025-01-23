import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { ProfileInfo } from '../components/profile/ProfileInfo';
import { ProfileSettings } from '../components/profile/ProfileSettings';
import { useAuth } from '../contexts/AuthContext';

    export function ProfilePage() {
    const { user } = useAuth();
    useEffect(() => {
        document.title = "Profile - MediSense AI";
        return () => {};
    }, []);
        if (!user) return null;

        return (
          <div className="min-h-screen bg-gray-50">
            <Helmet><title>Profile Settings - MediSense AI</title></Helmet>
            <Header />
            <main className="container mx-auto px-4 py-8">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-6">Your Profile</h1>
                <div className="grid md:grid-cols-2 gap-8">
                  <ProfileInfo user={user} />
                  <ProfileSettings user={user} />
                </div>
              </div>
            </main>
          </div>
        );
    }
