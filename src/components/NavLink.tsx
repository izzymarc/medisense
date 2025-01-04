import React from 'react';
    import { Link, useLocation } from 'react-router-dom';

    interface NavLinkProps {
      to: string;
      children: React.ReactNode;
      variant?: 'default' | 'button';
      className?: string;
    }

    export function NavLink({ to, children, variant = 'default', className = '' }: NavLinkProps) {
      const location = useLocation();
      const isActive = location.pathname === to;

      const baseStyles = "transition-colors";
      const variantStyles = {
        default: `hover:text-blue-100 ${isActive ? 'text-blue-100' : ''}`,
        button: "bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
      };

      return (
        <Link 
          to={to}
          className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
          {children}
        </Link>
      );
    }
