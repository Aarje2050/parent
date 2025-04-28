'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion'; // Add framer-motion for smooth animations

// Navigation menu items - you can move this to a separate config file if needed
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
  {label: 'Tools', path: '/tools'}
];

// Animation variants for mobile menu
const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

// Animation variants for menu items
const itemVariants = {
  closed: { opacity: 0, y: -10 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3
    }
  })
};

interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on path change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Close mobile menu when screen size increases to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="flex items-center justify-between w-full">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-base font-medium transition-colors duration-300 relative group ${
                pathname === item.path ? 'text-primary-500' : 'text-gray-200'
              }`}
            >
              {item.label}
              {/* Animated underline effect */}
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full ${
                pathname === item.path ? 'w-full' : ''
              }`}></span>
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary ml-2"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden flex items-center text-gray-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <div className="w-6 h-6 relative">
            <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
            }`}></span>
            <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
            }`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation with animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden w-full overflow-hidden glass-effect"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
              {navItems.map((item, i) => (
                <motion.div 
                  key={item.path}
                  custom={i}
                  variants={itemVariants}
                >
                  <Link
                    href={item.path}
                    className={`block py-2 text-base font-medium ${
                      pathname === item.path ? 'text-primary-500' : 'text-gray-200 hover:text-primary-400'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                custom={navItems.length}
                variants={itemVariants}
              >
                <Link
                  href="/contact"
                  className="block w-full text-center py-2 mt-4 btn-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}