import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

interface NavLinkProps {
to: string;
children: React.ReactNode;
variant?: 'default' | 'primary';
className?: string;
'aria-label'?: string;
}

export function NavLink({ 
to, 
children, 
variant = 'default',
className = '',
'aria-label': ariaLabel 
}: NavLinkProps) {
const baseClass = 'hover:text-blue-100 transition';
const variantClass = variant === 'primary' ? 'text-blue-500' : 'text-white';
const classes = `${baseClass} ${variantClass} ${className}`.trim();

return (
    <RouterNavLink
    to={to}
    className={classes}
    aria-label={ariaLabel}
    >
    {children}
    </RouterNavLink>
);
}
