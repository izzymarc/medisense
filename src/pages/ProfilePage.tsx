import React from 'react';
import { Header } from '../components/Header';
import { ProfileInfo } from '../components/profile/ProfileInfo';
import { ProfileSettings } from '../components/profile/ProfileSettings';
import { useAuth } from '../contexts/AuthContext';

export function ProfilePage() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <ProfileInfo user={user} />
            </div>
            <div className="md:col-span-2">
              <ProfileSettings user={user} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}