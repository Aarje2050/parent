'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/shared/AnimatedSection';

// Tech words to be displayed in rotating fashion
const techWords = [
  'AI-Powered Solutions',
  'White-hat SEO Services',
  'Digital Marketing',
  'Web Development',
];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(1);

  // Effect to rotate through tech words
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % techWords.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-dark-900 z-0"></div>
      
      {/* Animated particles/grid background (placeholder) */}
      <div 
        className="absolute inset-0 opacity-20 z-0" 
        style={{ 
          backgroundImage: `url('/images/hero-bg.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column with text content */}
          <AnimatedSection 
            animationType="slide-up" 
            className="text-center lg:text-left"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4">
              Next-Gen Growth Partner
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Empowering Brands with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 relative">
                {techWords[currentWordIndex]}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400"></span>
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
            Zobli Innovations helps businesses scale with future-ready websites, AI-powered SEO, and digital marketing since 2008.            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="primary" 
                size="lg" 
                href="/contact"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
              >
                Get Started
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                href="/services"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                }
                iconPosition="right"
              >
                Explore Services
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="flex items-center">
                <span className="text-gray-400 mr-2">Trusted by</span>
                <span className="text-white font-semibold">500+</span>
                <span className="text-gray-400 ml-2">clients</span>
              </div>
              
              <div className="flex items-center">
                <span className="text-gray-400 mr-2">Completed</span>
                <span className="text-white font-semibold">1000+</span>
                <span className="text-gray-400 ml-2">projects</span>
              </div>
              
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-2">
                  {/* Placeholder for client logos */}
                  {[...Array(4)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600"
                    ></div>
                  ))}
                </div>
                <span className="text-gray-400">and many more</span>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Right column with image */}
          <AnimatedSection
            animationType="fade-in"
            delay={300}
            className="relative"
          >
            <div className="relative w-full h-[400px] lg:h-[500px]">
              {/* Replace with your actual hero image */}
              <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4/5 h-4/5 rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 backdrop-blur-sm border border-primary-500/30 shadow-glow animate-pulse-slow">
    <Image
      src="/images/zobli-hero.png"
      alt="Zobli Hero"
      layout="fill" // Make it cover the div
      objectFit="cover"
      className="rounded-xl"
      priority // Add priority for the LCP image
    />
</div>
</div>

              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary-500/20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-secondary-500/20 blur-xl"></div>
              
              {/* Floating badges/cards */}
              <div className="absolute top-1/4 -left-8 bg-dark-800/90 p-3 rounded-lg border border-primary-500/30 shadow-glow animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary-400">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-white">AI-Powered SEO Services</span>
                </div>
              </div>
              
              <div className="absolute bottom-1/3 -right-8 bg-dark-800/90 p-3 rounded-lg border border-secondary-500/30 shadow-glow animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-secondary-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-secondary-400">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-white">Custom Web Development</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}