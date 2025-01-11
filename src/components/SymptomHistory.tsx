import React, { useState, useEffect } from 'react';
    import { Clock, MessageSquare, ChevronLeft, ChevronRight, Trash2 } from 'lucide-react';
    import { SymptomLog } from '../types';
    import axios from 'axios';
    import { useAuth } from '../contexts/AuthContext';

    export function SymptomHistory() {
      const [history, setHistory] = useState<SymptomLog[]>([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState('');
      const [page, setPage] = useState(1);
      const [totalPages, setTotalPages] = useState(1);
      const { isAuthenticated } = useAuth();
      const limit = 5;

      useEffect(() => {
        const fetchHistory = async () => {
          if (!isAuthenticated) {
            setLoading(false);
            return;
          }
          setLoading(true);
          setError('');
          try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`/api/symptoms/history?page=${page}&limit=${limit}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            setHistory(response.data.history);
            setTotalPages(response.data.totalPages);
          } catch (err: any) {
            setError(err.message || 'Failed to fetch symptom history');
            setHistory([]);
          } finally {
            setLoading(false);
          }
        };

        fetchHistory();
      }, [isAuthenticated, page]);

      const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
          setPage(newPage);
        }
      };

      const handleDelete = async (logId: string) => {
        try {
          const token = localStorage.getItem('token');
          await axios.delete(`/api/symptoms/history/${logId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setHistory(history.filter(log => log._id !== logId));
        } catch (err: any) {
          setError(err.message || 'Failed to delete symptom history');
        }
      };

      if (loading) {
        return <div>Loading symptom history...</div>;
      }

      if (error) {
        return <div className="text-red-500">Error: {error}</div>;
      }

      if (!isAuthenticated) {
        return <div className="text-gray-500 text-center">Please log in to view your symptom history.</div>;
      }

      return (
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent History</h2>

          <div className="space-y-4">
            {history.map((log) => (
              <div key={log._id} className="border border-gray-200 rounded-lg p-4 relative">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{new Date(log.createdAt).toLocaleDateString()}</span>
                  </div>
                  <button
                    onClick={() => handleDelete(log._id)}
                    className="text-red-500 hover:text-red-700 transition-colors absolute top-2 right-2"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Symptoms:</h4>
                    <div className="flex flex-wrap gap-2">
                      {log.symptoms.map((symptom) => (
                        <span
                          key={symptom._id}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {symptom.description}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      AI Advice:
                    </h4>
                    <p className="text-gray-600">{log.aiAdvice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-4 gap-4">
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span>{page} of {totalPages}</span>
              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
                className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      );
    }
