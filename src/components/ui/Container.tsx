import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  centered?: boolean;
}

export default function Container({
  children,
  className = '',
  size = 'lg',
  centered = false,
}: ContainerProps) {
  // Size styles
  const sizeStyles = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };
  
  // Centered styles
  const centeredStyles = centered ? 'mx-auto' : '';
  
  // Combine all styles
  const containerStyles = `${sizeStyles[size]} ${centeredStyles} ${className}`;
  
  return (
    <div className={containerStyles}>
      {children}
    </div>
  );
}