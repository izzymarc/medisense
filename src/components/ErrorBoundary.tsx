import React from 'react';
import { Spinner } from './Spinner';
import { Button } from './Button';
import { trackEvent } from '../utils/analytics';

interface Props {
children: React.ReactNode;
fallback?: React.ReactNode;
}

interface State {
hasError: boolean;
error: Error | null;
errorInfo: React.ErrorInfo | null;
isReloading: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
    isReloading: false
};

public static getDerivedStateFromError(error: Error): State {
    return {
    hasError: true,
    error,
    errorInfo: null,
    isReloading: false
    };
}

public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
    error,
    errorInfo
    });

    // Track error in analytics
    trackEvent('error_boundary', {
    error: error.toString(),
    componentStack: errorInfo.componentStack
    });

    // Here you could also send to other error tracking services
    // like Sentry, LogRocket, etc.
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
}

private handleRetry = () => {
    this.setState({
    isReloading: true
    });

    // Track retry attempt
    trackEvent('error_boundary_retry', {
    error: this.state.error?.toString()
    });

    // Simulate a reload delay for better UX
    setTimeout(() => {
    window.location.reload();
    }, 1000);
};

public render() {
    const { hasError, error, isReloading } = this.state;
    const { children, fallback } = this.props;

    if (isReloading) {
    return (
        <div className="min-h-screen flex items-center justify-center">
        <Spinner size="lg" label="Reloading..." />
        </div>
    );
    }

    if (hasError) {
    if (fallback) {
        return fallback;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8 text-center">
            <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                Oops! Something went wrong
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
                {error?.message || 'An unexpected error occurred'}
            </p>
            </div>

            <div className="space-y-4">
            <Button
                onClick={this.handleRetry}
                variant="primary"
                className="w-full"
            >
                Try Again
            </Button>
            <Button
                as="a"
                href="/"
                variant="secondary"
                className="w-full"
            >
                Return Home
            </Button>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400">
            If this problem persists, please contact support.
            </p>
        </div>
        </div>
    );
    }

    return children;
}
}
