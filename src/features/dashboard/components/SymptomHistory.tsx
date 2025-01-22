<file path="src/features/dashboard/components/SymptomHistory.tsx">
      import React, { useState, useEffect } from 'react';
      import { Clock, MessageSquare, ChevronLeft, ChevronRight, Trash2 } from 'lucide-react';
      import { SymptomLog } from '../../../domain/models/SymptomLog';
      import { useAuth } from '../../../contexts/AuthContext';
      import { useGraphQL } from '../../../shared/hooks/useGraphQL';
      import { useFeatureFlag } from '../../../shared/hooks/useFeatureFlag';
      import { useTranslation } from '../../../shared/hooks/useTranslation';

      export function SymptomHistory() {
        const { user } = useAuth();
        const { t } = useTranslation();
        const enableSymptomHistory = useFeatureFlag('enableSymptomHistory');

        const { data, loading, error, refetch } = useGraphQL<{ symptomHistory: SymptomLog[] }>(
          `
            query GetSymptomHistory($userId: ID!, $page: Int, $limit: Int) {
              symptomHistory(userId: $userId, page: $page, limit: $limit) {
                id
                symptoms {
                  description
                  severity
                }
                aiAdvice
                createdAt
                userId
              }
            }
          `,
          { userId: user?.id, page: 1, limit: 5 },
          { enabled: enableSymptomHistory }
        );

        if (!enableSymptomHistory) {
          return <div className="text-gray-500 text-center">Symptom history is disabled.</div>;
        }

        if (loading) {
          return <div>{t('loading_symptom_history')}</div>;
        }

        if (error) {
          return <div className="text-red-500">Error: {error.message}</div>;
        }

        if (!user) {
          return <div className="text-gray-500 text-center">{t('please_login_to_view_history')}</div>;
        }

        return (
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">{t('recentHistory')}</h2>

            <div className="space-y-4">
              {data?.symptomHistory?.map((log) => (
                <div key={log.id} className="border border-gray-200 rounded-lg p-4 relative">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{log.createdAt}</span>
                    </div>
                    <button
                      onClick={() => {}}
                      className="text-red-500 hover:text-red-700 transition-colors absolute top-2 right-2"
                      aria-label={`Delete symptom history log ${log.id}`}
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
                        {t('aiAdvice')}
                      </h4>
                      <p className="text-gray-600">{log.aiAdvice}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center mt-4 gap-4">
              <button
                onClick={() => {}}
                disabled={true}
                className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span>1 of 1</span>
              <button
                onClick={() => {}}
                disabled={true}
                className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next page"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        );
      }
    </file>
