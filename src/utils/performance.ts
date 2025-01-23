import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals';
import { trackEvent } from './analytics';

interface WebVitalMetric {
id: string;
name: string;
value: number;
rating: 'good' | 'needs-improvement' | 'poor';
delta: number;
entries: PerformanceEntry[];
}

const isDev = process.env.NODE_ENV === 'development';

function logMetric(metric: WebVitalMetric) {
if (isDev) {
    console.log(`[Performance] ${metric.name}:`, metric);
    return;
}

trackEvent('web_vitals', {
    metric_name: metric.name,
    metric_value: Math.round(metric.value),
    metric_rating: metric.rating,
    metric_delta: Math.round(metric.delta)
});
}

export function startPerformanceMonitoring() {
try {
    if (!window.performance) {
    console.warn('Performance API not supported');
    return;
    }

    // Core Web Vitals
    onCLS(logMetric);
    onFID(logMetric);
    onLCP(logMetric);
    onFCP(logMetric);
    onTTFB(logMetric);

    // Additional Performance Metrics
    const { performance } = window;
    performance.mark('app-start');

    window.addEventListener('load', () => {
    performance.mark('app-loaded');
    performance.measure('app_load_time', 'app-start', 'app-loaded');
    
    const loadMetric = performance.getEntriesByName('app_load_time')[0];
    logMetric({
        id: 'app-load',
        name: 'app_load_time',
        value: loadMetric.duration,
        rating: loadMetric.duration < 1000 ? 'good' : loadMetric.duration < 2000 ? 'needs-improvement' : 'poor',
        delta: loadMetric.duration,
        entries: [loadMetric]
    });
    });

    // Track route changes in SPA
    let lastRouteChange = performance.now();
    window.addEventListener('popstate', () => {
    const now = performance.now();
    const duration = now - lastRouteChange;
    
    performance.measure('route_change', {
        start: lastRouteChange,
        end: now,
    });

    logMetric({
        id: 'route-change',
        name: 'route_change',
        value: duration,
        rating: duration < 100 ? 'good' : duration < 300 ? 'needs-improvement' : 'poor',
        delta: duration,
        entries: performance.getEntriesByName('route_change')
    });

    lastRouteChange = now;
    });

    // Developer logging for resource timing
    if (isDev) {
    const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach(entry => {
        const { name, entryType, startTime, duration } = entry;
        console.log(`[Performance] ${entryType}: ${name}`, {
            startTime: Math.round(startTime),
            duration: Math.round(duration)
        });
        });
    });

    observer.observe({ 
        entryTypes: ['resource', 'navigation', 'paint'] 
    });
    }
} catch (error) {
    console.error('[Performance] Error initializing monitoring:', error);
}
}
