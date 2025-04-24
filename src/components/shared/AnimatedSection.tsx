'use client';

import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade-in' | 'slide-up' | 'scale-in' | 'slide-left' | 'slide-right';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export default function AnimatedSection({
  children,
  className = '',
  animationType = 'fade-in',
  delay = 0,
  duration = 500,
  threshold = 0.1,
  once = true,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: once,
  });

  // Animation styles
  const getAnimationStyles = () => {
    const baseStyles = {
      opacity: isVisible ? 1 : 0,
      transition: `all ${duration}ms ease-out ${delay}ms`,
    };

    switch (animationType) {
      case 'fade-in':
        return baseStyles;
      case 'slide-up':
        return {
          ...baseStyles,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        };
      case 'scale-in':
        return {
          ...baseStyles,
          transform: isVisible ? 'scale(1)' : 'scale(0.8)',
        };
      case 'slide-left':
        return {
          ...baseStyles,
          transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
        };
      case 'slide-right':
        return {
          ...baseStyles,
          transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
        };
      default:
        return baseStyles;
    }
  };

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else if (!once) {
      setIsVisible(false);
    }
  }, [inView, once]);

  return (
    <div
      ref={ref}
      className={className}
      style={getAnimationStyles()}
    >
      {children}
    </div>
  );
}