import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bgColor?: 'dark' | 'darker' | 'gradient' | 'transparent';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Section({
  children,
  className = '',
  id,
  bgColor = 'dark',
  spacing = 'lg',
}: SectionProps) {
  // Background color styles
  const bgStyles = {
    dark: 'bg-dark-800',
    darker: 'bg-dark-900',
    gradient: 'bg-gradient-to-br from-dark-800 to-dark-900',
    transparent: 'bg-transparent',
  };
  
  // Spacing styles
  const spacingStyles = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-24 md:py-32',
  };
  
  return (
    <section
      id={id}
      className={`${bgStyles[bgColor]} ${spacingStyles[spacing]} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}