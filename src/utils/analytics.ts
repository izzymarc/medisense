import ReactGA from 'react-ga4';

const trackingId = import.meta.env.VITE_GA_TRACKING_ID;

export const initializeAnalytics = () => {
  if (trackingId) {
    ReactGA.initialize(trackingId);
    console.log('Google Analytics initialized with tracking ID:', trackingId);
  } else {
    console.warn('Google Analytics tracking ID is not set.');
  }
};

export const trackPageView = (path: string) => {
  if (trackingId) {
    ReactGA.send({ hitType: "pageview", page: path });
    console.log('Google Analytics tracked page view:', path);
  }
};

export const trackEvent = (category: string, action: string, label?: string) => {
  if (trackingId) {
    ReactGA.event({
      category,
      action,
      label,
    });
    console.log('Google Analytics tracked event:', { category, action, label });
  }
};
