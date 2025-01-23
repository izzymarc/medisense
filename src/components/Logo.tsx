import React from 'react'

interface LogoProps {
className?: string;
variant?: 'light' | 'dark';
title?: string; 
}

export const Logo: React.FC<LogoProps> = ({
className = 'w-10 h-10',
variant = 'dark',
title = 'MediSense'
}) => {
// Colors based on variant
const textColor = variant === 'light' ? '#FFFFFF' : '#1F2937'
const accentColor = '#60A5FA' // Brand blue color

return (
    <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label={title}
    >
    {/* Heart Shape */}
    <path 
        d="M50 85C50 85 15 60 15 35C15 10 45 10 50 30C55 10 85 10 85 35C85 60 50 85 50 85Z"
        fill={accentColor}
        stroke={textColor}
        strokeWidth="3"
    />
    
    {/* Caduceus Staff*/}
    <path
        d="M50 25V75"
        stroke={textColor}
        strokeWidth="3"
        strokeLinecap="round"
    />
    
    {/* Snake 1 */}
    <path
        d="M40 30C40 30 35 35 35 40C35 45 40 50 45 50C50 50 55 45 55 40C55 35 50 30 50 30"
        stroke={textColor}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
    />
    
    {/* Snake 2 */}
    <path
        d="M60 30C60 30 65 35 65 40C65 45 60 50 55 50C50 50 45 45 45 40C45 35 50 30 50 30"
        stroke={textColor}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
    />
    
    {/* Wings */}
    <path
        d="M35 25L50 20L65 25"
        stroke={textColor}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
    />
    </svg>
)
}

Logo.displayName = 'Logo'
