'use client';

import { useState, useEffect } from 'react';

interface EnvDebugResponse {
  success: boolean;
  environment: string;
  timestamp: string;
  variables: Record<string, string>;
  missingVariables: string[];
  note: string;
}

export default function EnvDebugPage() {
  const [envData, setEnvData] = useState<EnvDebugResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchEnvData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/debug/env');
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch environment data');
      }

      setEnvData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Auto-fetch on component mount
    fetchEnvData();
  }, []);

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 py-8'>
      <div className='max-w-4xl mx-auto px-4'>
        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6'>
          <div className='flex items-center justify-between mb-6'>
            <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>
              Environment Variables Debug
            </h1>
            <button
              onClick={fetchEnvData}
              disabled={loading}
              className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {loading ? 'Refreshing...' : 'Refresh'}
            </button>
          </div>

          <div className='mb-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-md'>
            <p className='text-yellow-800 dark:text-yellow-200 text-sm'>
              <strong>⚠️ Development Only:</strong> This page is only available
              in development mode and should never be accessible in production.
            </p>
          </div>

          {error && (
            <div className='mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md'>
              <p className='text-red-800 dark:text-red-200 text-sm'>
                <strong>Error:</strong> {error}
              </p>
            </div>
          )}

          {envData && (
            <div className='space-y-6'>
              {/* Summary */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='bg-gray-50 dark:bg-gray-700 p-4 rounded-md'>
                  <h3 className='font-semibold text-gray-900 dark:text-white mb-2'>
                    Environment
                  </h3>
                  <p className='text-sm text-gray-600 dark:text-gray-300'>
                    {envData.environment}
                  </p>
                </div>
                <div className='bg-gray-50 dark:bg-gray-700 p-4 rounded-md'>
                  <h3 className='font-semibold text-gray-900 dark:text-white mb-2'>
                    Variables Set
                  </h3>
                  <p className='text-sm text-gray-600 dark:text-gray-300'>
                    {Object.keys(envData.variables).length}
                  </p>
                </div>
                <div className='bg-gray-50 dark:bg-gray-700 p-4 rounded-md'>
                  <h3 className='font-semibold text-gray-900 dark:text-white mb-2'>
                    Missing Variables
                  </h3>
                  <p className='text-sm text-gray-600 dark:text-gray-300'>
                    {envData.missingVariables.length}
                  </p>
                </div>
              </div>

              {/* Environment Variables */}
              <div>
                <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>
                  Current Environment Variables
                </h2>
                <div className='bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto'>
                  <pre className='text-sm'>
                    {JSON.stringify(envData.variables, null, 2)}
                  </pre>
                </div>
              </div>

              {/* Missing Variables */}
              {envData.missingVariables.length > 0 && (
                <div>
                  <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>
                    Missing Variables (from .env.example)
                  </h2>
                  <div className='bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-md p-4'>
                    <ul className='space-y-1'>
                      {envData.missingVariables.map(variable => (
                        <li
                          key={variable}
                          className='text-orange-800 dark:text-orange-200 text-sm'
                        >
                          • {variable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Note */}
              <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md p-4'>
                <p className='text-blue-800 dark:text-blue-200 text-sm'>
                  <strong>Note:</strong> {envData.note}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
