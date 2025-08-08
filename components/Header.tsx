"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { globalContent as enContent } from '@/data/globalContent/en';
import { globalContent as hiContent } from '@/data/globalContent/hi';
import { Menu, X, Phone, ChevronDown, ChevronUp, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const content = language === 'en' ? enContent : hiContent;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: content.navigation.home },
    { href: '/about', label: content.navigation.about },
    { 
      href: '/services', 
      label: content.navigation.services,
    },
    { href: '/blog', label: content.navigation.blog },
    { href: '/gallery', label: content.navigation.gallery },
    { href: '/contact', label: content.navigation.contact },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[1000]">
      {/* Main Header */}
      <motion.header 
        className={`bg-[#F7CAC9]/95 backdrop-blur-sm transition-all duration-300 ${scrolled ? 'shadow-md border-b border-[#FFD700]/30' : ''}`}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div 
                className="w-10 h-10 bg-gradient-to-b from-[#E0116F] to-[#FFD700] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                whileHover={{ rotate: 20, scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <span className="text-white font-bold text-xl">🕉</span>
              </motion.div>
              <span className="font-bold text-2xl text-[#4B2E2E] font-serif tracking-tight">
                AstroPandit
              </span>
            </Link>

            {/* Desktop Navigation - Right Side */}
            <div className="flex items-center space-x-6">
              {/* Call Now Button */}
              <a
                href="tel:+911234567890"
                className="hidden sm:flex items-center gap-2 bg-[#E75480] hover:bg-[#FF00FF] text-white font-semibold text-sm py-2.5 px-5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Phone size={18} />
                <span>{content.navigation.callNow}</span>
              </a>

              {/* Desktop Navigation Items */}
              <div className="hidden lg:flex items-center space-x-6">
                {navItems.map((item) => (
                  <motion.div 
                    key={item.href} 
                    className="relative group"
                    variants={itemVariants}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 text-[#4B2E2E] hover:text-[#800000] font-medium text-sm py-2 transition-colors duration-200"
                    >
                      {item.label}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] group-hover:w-full transition-all duration-300"></div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Language Switcher - Desktop */}
              <div className="hidden sm:flex items-center relative">
                <motion.button 
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#FFD700]/10 hover:bg-[#FFD700]/20 transition-colors duration-200 text-sm font-medium text-[#4B2E2E] border border-[#FFD700]/40"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{language === 'en' ? 'EN' : 'हिं'}</span>
                  {isLanguageOpen ? <ChevronUp className="w-4 h-4 text-[#FFD700]" /> : <ChevronDown className="w-4 h-4 text-[#FFD700]" />}
                </motion.button>
                
                <AnimatePresence>
                  {isLanguageOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 mt-2 bg-[#F7CAC9]/95 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden border border-[#FFD700]/40"
                      onClick={() => setIsLanguageOpen(false)}
                    >
                      <button
                        onClick={() => setLanguage('en')}
                        className={`block w-full px-4 py-2 text-sm ${language === 'en' ? 'bg-[#FFD700]/20 text-[#4B2E2E]' : 'hover:bg-[#FFD700]/10 text-[#4B2E2E]'}`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => setLanguage('hi')}
                        className={`block w-full px-4 py-2 text-sm ${language === 'hi' ? 'bg-[#FFD700]/20 text-[#4B2E2E]' : 'hover:bg-[#FFD700]/10 text-[#4B2E2E]'}`}
                      >
                        हिंदी
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-[#FFD700]/10 transition-colors duration-200 text-[#4B2E2E]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Menu size={28} />
              </motion.button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1002]"
            >
              {/* Overlay */}
              <div
                className="absolute inset-0 bg-[#4B2E2E]/80"
                onClick={() => setIsMenuOpen(false)}
              ></div>
              
              {/* Menu Panel */}
              <motion.div
                initial={{ y: '-100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="absolute top-0 left-0 right-0 bg-[#F7CAC9] shadow-2xl overflow-y-auto z-[1003]"
              >
                <div className="flex flex-col min-h-screen">
                  {/* Menu Header */}
                  <div className="flex justify-between items-center p-5 border-b border-[#FFD700]/40">
                    <Link href="/" className="flex items-center space-x-3" onClick={() => setIsMenuOpen(false)}>
                      <div className="w-10 h-10 bg-gradient-to-b from-[#E0116F] to-[#FFD700] rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xl">🕉</span>
                      </div>
                      <span className="font-bold text-xl text-[#4B2E2E] font-serif">AstroPandit</span>
                    </Link>
                    <button 
                      onClick={() => setIsMenuOpen(false)} 
                      className="p-2 rounded-full hover:bg-[#FFD700]/10 transition-colors duration-200"
                    >
                      <X size={24} className="text-[#4B2E2E]" />
                    </button>
                  </div>
                  
                  {/* Menu Items */}
                  <div className="flex flex-col p-4 space-y-2">
                    {navItems.map((item) => (
                      <div key={item.href} className="border-b border-[#FFD700]/20 last:border-0">
                        <Link
                          href={item.href}
                          className="block text-[#4B2E2E] hover:bg-[#FFD700]/10 hover:text-[#800000] font-medium px-4 py-3 text-base rounded-lg transition-all duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                  
                  {/* Call Now Button - Mobile */}
                  <div className="p-5 border-t border-[#FFD700]/40">
                    <a
                      href="tel:+911234567890"
                      className="flex items-center justify-center gap-2 bg-[#E75480] hover:bg-[#FF00FF] text-white font-semibold text-base py-3 px-6 rounded-full transition-all duration-300 shadow-md w-full"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Phone size={18} />
                      <span>{content.navigation.callNow}</span>
                    </a>
                  </div>
                  
                  {/* Language Switcher - Mobile */}
                  <div className="p-5 border-t border-[#FFD700]/40">
                    <h3 className="text-sm font-medium text-[#4B2E2E]/80 mb-3">
                      {language === 'en' ? 'Select Language' : 'भाषा चुनें'}
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => {
                          setLanguage('en');
                          setIsMenuOpen(false);
                        }}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                          language === 'en'
                            ? 'bg-[#E75480] text-white'
                            : 'bg-[#FFD700]/10 text-[#4B2E2E] hover:bg-[#FFD700]/20'
                        }`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => {
                          setLanguage('hi');
                          setIsMenuOpen(false);
                        }}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                          language === 'hi'
                            ? 'bg-[#E75480] text-white'
                            : 'bg-[#FFD700]/10 text-[#4B2E2E] hover:bg-[#FFD700]/20'
                        }`}
                      >
                        हिंदी
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}