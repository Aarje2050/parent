'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Navigation menu items with submenu support
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Careers', path: '/careers' },
  { 
    label: 'Tools', 
    path: '/tools',
    submenu: [
      { label: 'Domain Availability Checker', path: '/tools/domainchecker' },
      // Add more tools as needed
      { label: 'SEO Analyzer', path: '/tools/seoanalyzer' },
      { label: 'Code Generator', path: '/tools/codegenerator' },
    ]
  },
  { label: 'Contact', path: '/contact' },
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

// Animation variants for dropdown menu
const dropdownVariants = {
  closed: { 
    opacity: 0,
    y: -5,
    transition: {
      duration: 0.2
    }
  },
  open: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2
    }
  }
};

interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const submenuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const pathname = usePathname(); // Get the current path directly in the component

  // Function to check if current path is in a submenu
  const isInSubmenu = (item: any): boolean => {
    if (!item.submenu) return false;
    return item.submenu.some((subItem: any) => subItem.path === pathname);
  };

  // Function to check if current path matches item path or is in its submenu
  const isActive = (item: any): boolean => {
    return pathname === item.path || isInSubmenu(item);
  };

  // Close mobile menu on path change
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
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

  // Handle clicks outside submenu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openSubmenu && submenuRefs.current[openSubmenu] && 
          !submenuRefs.current[openSubmenu]?.contains(event.target as Node)) {
        setOpenSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openSubmenu]);

  // Toggle submenu function
  const toggleSubmenu = (label: string) => {
    if (openSubmenu === label) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(label);
    }
  };

  return (
    <>
      <div className="flex items-center justify-end w-full">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div 
              key={item.path} 
              className="relative group"
              ref={el => {
                if (item.submenu) {
                  submenuRefs.current[item.label] = el;
                }
              }}
            >
              {item.submenu ? (
                // Menu item with submenu
                <div className="flex flex-col">
                  <button
                    className={`flex items-center text-base font-medium transition-colors duration-300 relative group ${
                      isActive(item) ? 'text-brand-blue' : 'text-gray-200 hover:text-white'
                    }`}
                    onClick={() => toggleSubmenu(item.label)}
                  >
                    {item.label}
                    <ChevronDown 
                      size={16} 
                      className={`ml-1 transition-transform duration-200 ${
                        openSubmenu === item.label ? 'rotate-180' : ''
                      }`} 
                    />
                    {/* Animated underline effect */}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full ${
                      isActive(item) ? 'w-full' : ''
                    }`}></span>
                  </button>
                  
                  {/* Submenu dropdown */}
                  <AnimatePresence>
                    {openSubmenu === item.label && (
                      <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={dropdownVariants}
                        className="absolute top-full left-0 mt-1 w-60 bg-dark-800 border border-gray-700 rounded-md shadow-lg z-50 overflow-hidden"
                      >
                        <div className="py-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.path}
                              href={subItem.path}
                              className={`block px-4 py-2 text-sm transition-colors ${
                                pathname === subItem.path 
                                  ? 'bg-dark-700 text-brand-blue' 
                                  : 'text-gray-200 hover:bg-dark-700'
                              }`}
                              onClick={() => setOpenSubmenu(null)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                // Regular menu item without submenu
                <Link
                  href={item.path}
                  className={`text-base font-medium transition-colors duration-300 relative group ${
                    pathname === item.path ? 'text-brand-blue' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {item.label}
                  {/* Animated underline effect */}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full ${
                    pathname === item.path ? 'w-full' : ''
                  }`}></span>
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="py-2 px-5 bg-gradient-to-r from-brand-blue to-brand-purple rounded-md text-white font-medium hover:from-brand-blue-light hover:to-brand-purple-light transition-colors duration-300"
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
            className="md:hidden w-full overflow-hidden bg-dark-800/95 backdrop-blur-md absolute top-full left-0 right-0 border-t border-gray-800"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item, i) => (
                <motion.div 
                  key={item.path}
                  custom={i}
                  variants={itemVariants}
                >
                  {item.submenu ? (
                    // Mobile submenu item
                    <div className="py-2">
                      <button
                        className={`flex items-center justify-between w-full text-left text-base font-medium ${
                          isActive(item) ? 'text-brand-blue' : 'text-gray-200'
                        }`}
                        onClick={() => toggleSubmenu(item.label)}
                      >
                        {item.label}
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-200 ${
                            openSubmenu === item.label ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {/* Mobile submenu dropdown */}
                      <AnimatePresence>
                        {openSubmenu === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-1 ml-4 border-l border-gray-700"
                          >
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.path}
                                href={subItem.path}
                                className={`block py-2 pl-4 text-sm ${
                                  pathname === subItem.path 
                                    ? 'text-brand-blue' 
                                    : 'text-gray-300 hover:text-white'
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    // Regular mobile menu item
                    <Link
                      href={item.path}
                      className={`block py-2 text-base font-medium ${
                        pathname === item.path ? 'text-brand-blue' : 'text-gray-200 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                custom={navItems.length}
                variants={itemVariants}
                className="pt-2"
              >
                <Link
                  href="/contact"
                  className="block w-full text-center py-2 mt-4 bg-gradient-to-r from-brand-blue to-brand-purple rounded-md text-white font-medium"
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