import ReactGA from 'react-ga4';

// Environment variables
const isProduction = import.meta.env.PROD;
const trackingId = import.meta.env.VITE_GA_TRACKING_ID;

// TypeScript interfaces for analytics events
interface AnalyticsEvent {
category: string;
action: string;
label?: string;
value?: number;
nonInteraction?: boolean;
}

interface PageViewParams {
path: string;
title?: string;
location?: string;
}

/**
* Initialize Google Analytics
* Only initializes in production and when tracking ID is available
*/
export const initializeAnalytics = (): void => {
if (!trackingId) {
    console.warn('Google Analytics tracking ID is not set.');
    return;
}

if (!isProduction) {
    console.log('[DEV] Google Analytics would initialize with:', trackingId);
    return;
}

try {
    ReactGA.initialize(trackingId);
    console.log('Google Analytics initialized successfully.');
} catch (error) {
    console.error('Failed to initialize Google Analytics:', error);
}
};

/**
* Track page views
* @param params Page view parameters
*/
export const trackPageView = (params: PageViewParams): void => {
if (!trackingId) return;

if (!isProduction) {
    console.log('[DEV] Would track page view:', params);
    return;
}

try {
    ReactGA.send({
    hitType: "pageview",
    page: params.path,
    title: params.title,
    location: params.location
    });
} catch (error) {
    console.error('Failed to track page view:', error);
}
};

/**
* Track custom events
* @param event Analytics event parameters
*/
export const trackEvent = (event: AnalyticsEvent): void => {
if (!trackingId) return;

if (!isProduction) {
    console.log('[DEV] Would track event:', event);
    return;
}

try {
    ReactGA.event(event);
} catch (error) {
    console.error('Failed to track event:', error);
}
};

/**
* Track user timing
* @param category Timing category
* @param variable Timing variable
* @param value Timing value
* @param label Optional timing label
*/
export const trackTiming = (
category: string,
variable: string,
value: number,
label?: string
): void => {
if (!trackingId) return;

if (!isProduction) {
    console.log('[DEV] Would track timing:', { category, variable, value, label });
    return;
}

try {
    ReactGA.send({
    hitType: "timing",
    timingCategory: category,
    timingVar: variable,
    timingValue: value,
    timingLabel: label
    });
} catch (error) {
    console.error('Failed to track timing:', error);
}
};
