import React from 'react';

    interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
      label: string;
      error?: string;
    }

    export function FormInput({ label, error, ...props }: FormInputProps) {
      return (
        <div className="space-y-1">
          <label htmlFor={props.id} className="block text-sm font-medium text-gray-700">
            {label}
          </label>
          <input
            {...props}
            className={`
              w-full px-3 py-2 border rounded-lg shadow-sm
              focus:ring-2 focus:ring-blue-500 focus:border-transparent
              ${error ? 'border-red-500' : 'border-gray-300'}
            `}
          />
          {error && <p className="text-sm text-red-600">{error}</p>}
        </div>
      );
    }
