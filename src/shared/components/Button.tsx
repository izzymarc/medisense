import React, { memo } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
}

export const Button = memo(({ 
  children, 
  variant = 'primary', 
  loading = false,
  ...props 
}: ButtonProps) => (
  <button
    {...props}
    className={`px-4 py-2 rounded-lg transition-colors ${
      variant === 'primary' 
        ? 'bg-blue-600 text-white hover:bg-blue-700' 
        : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
    } ${props.className || ''}`}
    disabled={loading || props.disabled}
  >
    {loading ? 'Loading...' : children}
  </button>
));

Button.displayName = 'Button';
