'use client';

import { useState, useEffect, useCallback } from 'react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { TestimonialItem } from '@/types';

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    content: "Zobli Innovations helped us rank for key terms and increase visibility. Their SEO expertise made a big difference in our growth.",
    author: "Narendra Kumar",
    position: "Founder, Maxgrade",
    rating: 5,
    company: "Maxgrade",
  },
  {
    id: 2,
    content: "Thanks to Zobli’s SEO, our CBD site saw a massive organic traffic boost. Their strategies are smart, safe, and scalable.",
    author: "Jimmy N.",
    position: "CTO, CBD Brand",
    rating: 5,
    company: "CBD Brand",
  },
  {
    id: 3,
    content: "Our SEO results with Zobli were outstanding. The team at Zobli is fast, focused, and absolutely ROI-driven in execution.",
    author: "Archie Sharma",
    position: "COO, Zencoder.ai",
    rating: 5,
    company: "Zencoder.ai",
  },
  {
    id: 4,
    content: "Zobli delivered a high-converting website and improved our SEO performance. Excellent support and a solid team behind it.",
    author: "Krishan Kumar",
    position: "Founder, Million Cases",
    rating: 5,
    company: "Million Cases",
  },
  {
    id: 5,
    content: "We worked with Zobli for our platform's dev and AI roadmap. Their input was visionary, timely, and results-focused.",
    author: "Pawan Bunkar",
    position: "Founder, CTA9",
    rating: 5,
    company: "CTA9",
  },
];


export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  
  // Function to navigate to next testimonial
  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);
  
  // Function to navigate to previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };
  
  // Autoplay effect
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (isAutoplay) {
      intervalId = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }
    
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoplay, nextTestimonial]);
  
  // Pause autoplay on hover
  const handleMouseEnter = () => setIsAutoplay(false);
  const handleMouseLeave = () => setIsAutoplay(true);
  
  return (
    <Section bgColor="darker" className="overflow-hidden">
     <div className="text-center mb-16">
            <span className="text-xl font-medium text-primary-400 mb-2 block">Testimonials</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from organizations that have experienced the Zobli difference.
            </p>
          </div>
      
      <div 
        className="relative max-w-4xl mx-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Current testimonial */}
        <AnimatedSection 
          key={currentIndex}
          animationType="fade-in"
          className="transition-all duration-500"
        >
          <Card variant="gradient" padding="lg" className="text-center">
            {/* Quote icon */}
            <div className="flex justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              ))}
            </div>
            
            {/* Testimonial content */}
            <p className="text-xl text-gray-200 italic mb-8">
              "{testimonials[currentIndex].content}"
            </p>
            
            {/* Author info */}
            <div className="flex flex-col items-center">
              <h4 className="text-lg font-semibold text-white mb-1">
                {testimonials[currentIndex].author}
              </h4>
              <p className="text-sm text-gray-400">
                {testimonials[currentIndex].position}
              </p>
            </div>
          </Card>
        </AnimatedSection>
        
        {/* Navigation controls */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary-500 scale-110'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
        
        {/* Arrow controls */}
        <button
          onClick={prevTestimonial}
          className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 p-2 rounded-full bg-dark-700/80 text-white hover:bg-primary-500/80 transition-colors"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextTestimonial}
          className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 p-2 rounded-full bg-dark-700/80 text-white hover:bg-primary-500/80 transition-colors"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </Section>
  );
}