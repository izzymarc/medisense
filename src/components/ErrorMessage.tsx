import React from 'react';
import { AlertCircle } from 'lucide-react';
import { NavLink } from './NavLink';

interface ErrorMessageProps {
  title: string;
  message: string;
  showHomeLink?: boolean;
}

export function ErrorMessage({ title, message, showHomeLink = true }: ErrorMessageProps) {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{message}</p>
        {showHomeLink && (
          <NavLink href="/" variant="button">
            Return to Home
          </NavLink>
        )}
      </div>
    </div>
  );
}