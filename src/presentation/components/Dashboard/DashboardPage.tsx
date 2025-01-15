import React, { useEffect } from 'react';
import { Header } from '../../../shared/components/Header/Header';
import { SymptomChecker } from '../SymptomChecker/SymptomChecker';
import { SymptomHistory } from '../SymptomHistory/SymptomHistory';
import { useAuth } from '../../contexts/AuthContext';
import { useWebSocket } from '../../../shared/hooks/useWebSocket';
import { useGraphQL } from '../../../shared/hooks/useGraphQL';

export function DashboardPage() {
  const { user } = useAuth();
  const { isConnected, sendMessage } = useWebSocket('ws://localhost:5000', {
    onMessage: (message) => {
      console.log('Received WebSocket message:', message);
    },
    onOpen: () => {
      console.log('WebSocket connection opened');
      sendMessage('Hello from client!');
    },
    onClose: () => {
      console.log('WebSocket connection closed');
    }
  });

  const { data, loading, error } = useGraphQL(
    `
      query GetUser($id: ID!) {
        user(id: $id) {
          id
          name
          email
        }
      }
    `,
    { id: user?.id }
  );

  useEffect(() => {
    document.title = "Dashboard - MediSense AI";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {user && (
          <h1 className="text-2xl font-bold mb-6">
            Welcome, {data?.user?.name || user.name}!
          </h1>
        )}
        <div className="grid md:grid-cols-2 gap-8">
          <SymptomChecker />
          <SymptomHistory />
        </div>
        {isConnected ? (
          <p>WebSocket connected</p>
        ) : (
          <p>WebSocket disconnected</p>
        )}
        {loading && <p>Loading user data...</p>}
        {error && <p>Error loading user data: {error.message}</p>}
      </main>
    </div>
  );
}
