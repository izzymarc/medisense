import { useState, useEffect, useCallback } from 'react';

interface CacheItem<T> {
data: T;
timestamp: number;
}

const CACHE_EXPIRY = 5 * 60 * 1000; // 5 minutes

export function useApiCache<T>(key: string, fetchFn: () => Promise<T>, options = { enabled: true }) {
const [data, setData] = useState<T | null>(null);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState<Error | null>(null);

const fetchData = useCallback(async () => {
    if (!options.enabled) {
    return;
    }

    try {
    setIsLoading(true);
    setError(null);
    
    const cachedData = localStorage.getItem(key);
    const now = Date.now();

    if (cachedData) {
        const { data: cachedValue, timestamp }: CacheItem<T> = JSON.parse(cachedData);
        if (now - timestamp < CACHE_EXPIRY) {
        setData(cachedValue);
        setIsLoading(false);
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
    setError(err instanceof Error ? err : new Error('An error occurred'));
    setData(null);
    } finally {
    setIsLoading(false);
    }
}, [key, fetchFn, options.enabled]);

useEffect(() => {
    fetchData();
}, [fetchData]);

const invalidateCache = useCallback(() => {
    localStorage.removeItem(key);
    fetchData();
}, [key, fetchData]);

const refetch = useCallback(() => {
    return fetchData();
}, [fetchData]);

return {
    data,
    isLoading,
    error,
    invalidateCache,
    refetch
};
}
