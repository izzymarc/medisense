export function startPerformanceMonitoring() {
  if (process.env.NODE_ENV === 'production') {
    const { PerformanceObserver, performance } = window;
    
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log(`[Performance] ${entry.name}:`, entry);
      }
    });

    observer.observe({ entryTypes: ['measure', 'resource', 'navigation', 'paint'] });

    // Track initial load performance
    performance.mark('app-start');
    window.addEventListener('load', () => {
      performance.mark('app-loaded');
      performance.measure('AppLoadTime', 'app-start', 'app-loaded');
    });

    // Track route changes
    let lastRouteChange = performance.now();
    window.addEventListener('popstate', () => {
      const now = performance.now();
      performance.measure('RouteChange', {
        start: lastRouteChange,
        end: now,
      });
      lastRouteChange = now;
    });
  }
}
