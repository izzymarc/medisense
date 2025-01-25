import React from 'react';

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export function SubmitButton({ children, isLoading, ...props }: SubmitButtonProps) {
  return (
    <button
      {...props}
      type="submit"
      disabled={isLoading}
      className={`
        w-full py-3 px-4 rounded-lg text-white font-medium
        bg-gradient-to-r from-blue-600 to-cyan-500
        hover:opacity-90 transition-opacity
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      {isLoading ? 'Please wait...' : children}
    </button>
  );
}