import React from 'react';
import Link from 'next/link';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'default' | 'hover' | 'gradient' | 'bordered';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export default function Card({
  children,
  className = '',
  href,
  onClick,
  variant = 'default',
  padding = 'md',
}: CardProps) {
  // Base styles
  const baseStyles = 'rounded-2xl overflow-hidden transition-all duration-300';
  
  // Variant styles
  const variantStyles = {
    default: 'bg-dark-700',
    hover: 'bg-dark-700 hover:shadow-glow hover:-translate-y-1',
    gradient: 'card-gradient',
    bordered: 'bg-dark-700/90 backdrop-blur-sm border border-primary-500/30 hover:border-primary-500/60',
  };
  
  // Padding styles
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  // Combine all styles
  const cardStyles = `${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`;
  
  // If href is provided, render a link
  if (href) {
    return (
      <Link href={href} className={cardStyles}>
        {children}
      </Link>
    );
  }
  
  // If onClick is provided, render a button
  if (onClick) {
    return (
      <button className={cardStyles} onClick={onClick}>
        {children}
      </button>
    );
  }
  
  // Otherwise, render a div
  return <div className={cardStyles}>{children}</div>;
}