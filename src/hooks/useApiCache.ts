import { useState, useEffect, useCallback } from 'react';

interface CacheItem<T> {
  data: T;
  timestamp: number;
}

const CACHE_EXPIRY = 5 * 60 * 1000; // 5 minutes

export function useApiCache<T>(key: string, fetchFn: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const cachedData = localStorage.getItem(key);
      const now = Date.now();

      if (cachedData) {
        const { data: cachedValue, timestamp }: CacheItem<T> = JSON.parse(cachedData);
        if (now - timestamp < CACHE_EXPIRY) {
          setData(cachedValue);
          setLoading(false);
          return;
        }
      }

      const freshData = await fetchFn();
      setData(freshData);
      localStorage.setItem(key, JSON.stringify({
        data: freshData,
        timestamp: now
      }));
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [key, fetchFn]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const invalidateCache = () => {
    localStorage.removeItem(key);
    fetchData();
  };

  return { data, loading, error, invalidateCache };
}
