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
      subItems: [
        { href: '/services/astrology', label: language === 'en' ? 'Astrology' : 'ज्योतिष' },
        { href: '/services/palmistry', label: language === 'en' ? 'Palmistry' : 'हस्तरेखा' },
        { href: '/services/numerology', label: language === 'en' ? 'Numerology' : 'अंक ज्योतिष' }
      ]
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
      {/* Top Announcement Bar */}
      <motion.div 
        className="bg-[#000000] text-white h-10 sm:h-12 flex items-center justify-center px-3 sm:px-4 lg:px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between w-full max-w-5xl mx-auto">
          <a
            href="tel:+911234567890"
            className="flex items-center gap-1.5 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600 text-sm sm:text-base font-medium"
          >
            <Phone size={16} className="text-amber-400" />
            <span>+91 123 456 7890</span>
          </a>
          <div className="hidden sm:flex items-center gap-3">
            <motion.a 
              href="https://facebook.com" 
              className="text-amber-400 hover:text-amber-500 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Facebook size={16} />
            </motion.a>
            <motion.a 
              href="https://twitter.com" 
              className="text-amber-400 hover:text-amber-500 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Twitter size={16} />
            </motion.a>
            <motion.a 
              href="https://instagram.com" 
              className="text-amber-400 hover:text-amber-500 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram size={16} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com" 
              className="text-amber-400 hover:text-amber-500 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={16} />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header 
        className={`bg-white/90 backdrop-blur-sm transition-all duration-300 ${scrolled ? 'shadow-md border-b border-gray-100' : ''}`}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <nav className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div 
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow"
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <span className="text-white font-bold text-lg sm:text-xl">🕉</span>
              </motion.div>
              <span className="font-bold text-xl sm:text-2xl text-gray-800 font-serif bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
                AstroPandit
              </span>
            </Link>

            {/* Desktop Navigation - Right Side */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              {/* Call Now Button */}
              <a
                href="tel:+911234567890"
                className="hidden sm:flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium text-sm py-2 px-4 sm:px-5 rounded-full transition-all shadow-md hover:shadow-lg"
              >
                <Phone size={16} />
                <span>{content.navigation.callNow}</span>
              </a>

              {/* Desktop Navigation Items */}
              <div className="hidden lg:flex items-center space-x-4">
                {navItems.map((item) => (
                  <motion.div 
                    key={item.href} 
                    className="relative group"
                    variants={itemVariants}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 text-gray-700 hover:text-amber-600 transition-colors font-medium text-sm py-2"
                    >
                      {item.label}
                      {item.subItems && <ChevronDown className="w-3 h-3 mt-0.5" />}
                    </Link>
                    
                    {item.subItems && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute left-0 top-full mt-1 w-48 bg-white/95 backdrop-blur-sm shadow-lg rounded-lg py-2 hidden group-hover:block border border-amber-100"
                      >
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-1.5 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Language Switcher - Desktop */}
              <div className="hidden sm:flex items-center relative">
                <motion.button 
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-medium text-gray-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{language === 'en' ? 'EN' : 'हिं'}</span>
                  {isLanguageOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                </motion.button>
                
                <AnimatePresence>
                  {isLanguageOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 mt-1 bg-white/95 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden border border-amber-100"
                      onClick={() => setIsLanguageOpen(false)}
                    >
                      <button
                        onClick={() => setLanguage('en')}
                        className={`block w-full px-3 py-1.5 text-sm ${language === 'en' ? 'bg-amber-100 text-amber-700' : 'hover:bg-gray-50'}`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => setLanguage('hi')}
                        className={`block w-full px-3 py-1.5 text-sm ${language === 'hi' ? 'bg-amber-100 text-amber-700' : 'hover:bg-gray-50'}`}
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
                className="lg:hidden p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Menu size={24} />
              </motion.button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu - Opens from Left Side */}
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
                className="absolute inset-0 bg-black/50"
                onClick={() => setIsMenuOpen(false)}
              ></div>
              
              {/* Menu Panel */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25 }}
                className="absolute left-0 top-0 h-full w-3/4 max-w-xs bg-white/95 backdrop-blur-sm shadow-xl overflow-y-auto z-[1003]"
              >
                <div className="flex flex-col h-full">
                  {/* Menu Header */}
                  <div className="flex justify-between items-center p-4 sm:p-5 border-b border-gray-100">
                    <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                      <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white font-bold text-lg">🕉</span>
                      </div>
                      <span className="font-bold text-lg text-gray-800 font-serif">AstroPandit</span>
                    </Link>
                    <button 
                      onClick={() => setIsMenuOpen(false)} 
                      className="p-1.5 rounded-full hover:bg-gray-100"
                    >
                      <X size={20} className="text-gray-600" />
                    </button>
                  </div>
                  
                  {/* Menu Items */}
                  <div className="flex-1 flex flex-col p-3 sm:p-4 space-y-1">
                    {navItems.map((item) => (
                      <div key={item.href} className="border-b border-gray-100 last:border-0">
                        <Link
                          href={item.href}
                          className="block text-gray-700 hover:bg-amber-50 transition-colors font-medium px-3 py-2 text-base rounded-lg"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                        {item.subItems && (
                          <div className="pl-4 py-1 space-y-1">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block text-gray-600 hover:bg-amber-50 px-3 py-1.5 text-sm rounded-lg transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Call Now Button - Mobile */}
                  <div className="p-4 sm:p-5 border-t border-gray-100">
                    <a
                      href="tel:+911234567890"
                      className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium text-sm py-2.5 px-4 rounded-full transition-all shadow-md w-full"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Phone size={16} />
                      <span>{content.navigation.callNow}</span>
                    </a>
                  </div>
                  
                  {/* Language Switcher - Mobile */}
                  <div className="p-4 sm:p-5 border-t border-gray-100">
                    <h3 className="text-xs font-medium text-gray-500 mb-2">
                      {language === 'en' ? 'Select Language' : 'भाषा चुनें'}
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => {
                          setLanguage('en');
                          setIsMenuOpen(false);
                        }}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          language === 'en'
                            ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => {
                          setLanguage('hi');
                          setIsMenuOpen(false);
                        }}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          language === 'hi'
                            ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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