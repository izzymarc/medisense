import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: 'default' | 'button';
}

export function NavLink({ href, children, variant = 'default' }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === href;

  const baseStyles = "transition-colors";
  const variantStyles = {
    default: `hover:text-blue-100 ${isActive ? 'text-blue-100' : ''}`,
    button: "bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50"
  };

  return (
    <Link 
      to={href}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {children}
    </Link>
  );
}