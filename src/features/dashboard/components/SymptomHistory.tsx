import React, { useState, useEffect } from 'react';
    import { Clock, MessageSquare, ChevronLeft, ChevronRight, Trash2 } from 'lucide-react';
    import { SymptomLog } from '../../../types';
    import { useAuth } from '../../../contexts/AuthContext';
    import { collection, query, where, getDocs, deleteDoc, doc, orderBy, limit, startAfter } from 'firebase/firestore';
    import { db } from '../../../firebase';
    
    export function SymptomHistory() {
      const [history, setHistory] = useState<SymptomLog[]>([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState('');
      const [page, setPage] = useState(1);
      const [totalPages, setTotalPages] = useState(1);
      const { isAuthenticated } = useAuth();
      const [lastVisible, setLastVisible] = useState<any>(null);
      const limitPerPage = 5;
    
      useEffect(() => {
        const fetchHistory = async () => {
          if (!isAuthenticated) {
            setLoading(false);
            return;
          }
          setLoading(true);
          setError('');
          try {
            // const user = localStorage.getItem('user');
            // if (!user) {
            //   throw new Error('User not found in local storage');
            // }
            // const userId = JSON.parse(user).id;
            // const symptomCollection = collection(db, 'symptoms');
            // let q = query(
            //   symptomCollection,
            //   where('userId', '==', userId),
            //   orderBy('timestamp', 'desc'),
            //   limit(limitPerPage)
            // );
            // if (lastVisible) {
            //   q = query(
            //     symptomCollection,
            //     where('userId', '==', userId),
            //     orderBy('timestamp', 'desc'),
            //     startAfter(lastVisible),
            //     limit(limitPerPage)
            //   );
            // }
            // const querySnapshot = await getDocs(q);
            // const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
            // setLastVisible(lastVisibleDoc);
            // const symptomHistory = querySnapshot.docs.map(doc => {
            //   const data = doc.data();
            //   return {
            //     _id: doc.id,
            //     symptoms: data.symptoms,
            //     aiAdvice: 'AI analysis is not available in this version',
            //     createdAt: data.timestamp.toDate().toLocaleDateString(),
            //     userId: data.userId
            //   } as SymptomLog;
            // });
            setHistory([{
              _id: 'mock-id',
              symptoms: [{description: 'mock-symptom', severity: 'mild', timestamp: 'mock-time'}],
              aiAdvice: 'AI analysis is not available in this version',
              createdAt: 'mock-time',
              userId: 'mock-id'
            }]);
            setTotalPages(1);
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
          // const symptomDoc = doc(db, 'symptoms', logId);
          // await deleteDoc(symptomDoc);
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
                    <span>{log.createdAt}</span>
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
                          key={symptom.description}
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
