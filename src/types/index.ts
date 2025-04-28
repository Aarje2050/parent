import React from 'react';

// Basic component props
export interface ComponentBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface TestimonialItem {
  id?:number;
  rating?:number;
  content?:string;
  author?:string;
  position?:string;
  company?:string;


}

// Button props
export interface ButtonProps extends ComponentBaseProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

// Card props
export interface CardProps extends ComponentBaseProps {
  href?: string;
  onClick?: () => void;
  variant?: 'default' | 'hover' | 'gradient' | 'bordered';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

// Section props
export interface SectionProps extends ComponentBaseProps {
  id?: string;
  bgColor?: 'dark' | 'darker' | 'gradient' | 'transparent';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
}

// Animated section props
export interface AnimatedSectionProps extends ComponentBaseProps {
  animationType?: 'fade-in' | 'slide-up' | 'scale-in' | 'slide-left' | 'slide-right';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

// Domain availibility checker tool types STARTS
export interface DomainResult {
  domain: string;
  available: boolean;
  method: 'dns' | 'domainr';
  keyword: string;
  modifier: string;
  tld: string;
  checked: boolean;
  loading: boolean;
  error?: string;
  prices?: {
    godaddy?: number;
    namecheap?: number;
    google?: number;
  };
  suggestions?: string[];
}

export interface CheckMethod {
  id: 'dns' | 'domainr';
  name: string;
  description: string;
  icon: string;
}

export type TLD = {
  id: string;
  name: string;
  popular?: boolean;
};

export interface PriceData {
  registrar: string;
  price: number;
  currency: string;
}

// Domain availibility checker tool types ENDS//
