"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { globalContent as enContent } from '@/data/globalContent/en';
import { globalContent as hiContent } from '@/data/globalContent/hi';
import { Menu, X, Phone, ChevronDown, ChevronUp } from 'lucide-react';
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

  return (
    <header className={`fixed top-0 left-0 right-0 z-[1000] bg-white/95 backdrop-blur-md transition-all duration-300 ${scrolled ? 'shadow-lg border-b border-gray-100' : ''}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
              whileHover={{ rotate: 15 }}
            >
              <span className="text-white font-bold text-2xl">🕉</span>
            </motion.div>
            <span className="font-bold text-2xl text-gray-800 font-serif bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
              AstroPandit
            </span>
          </Link>

          {/* Desktop Navigation - Right Side */}
          <div className="flex items-center space-x-6">
            {/* Call Now Button - Moved before navigation */}
            <a
              href="tel:+911234567890"
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-2.5 px-5 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              <Phone size={18} />
              <span>{content.navigation.callNow}</span>
            </a>

            {/* Desktop Navigation Items */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-gray-700 hover:text-amber-600 transition-colors font-medium text-lg py-2"
                  >
                    {item.label}
                    {item.subItems && <ChevronDown className="w-4 h-4 mt-0.5" />}
                  </Link>
                  
                  {item.subItems && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute left-0 top-full mt-2 w-56 bg-white shadow-xl rounded-lg py-2 hidden group-hover:block border border-gray-100"
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Language Switcher - Desktop */}
            <div className="hidden md:flex items-center relative">
              <button 
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <span className="text-sm font-medium text-gray-700">
                  {language === 'en' ? 'EN' : 'हिं'}
                </span>
                {isLanguageOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              
              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100"
                    onClick={() => setIsLanguageOpen(false)}
                  >
                    <button
                      onClick={() => setLanguage('en')}
                      className={`block w-full px-4 py-2 text-left text-sm ${language === 'en' ? 'bg-amber-100 text-amber-700' : 'hover:bg-gray-50'}`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => setLanguage('hi')}
                      className={`block w-full px-4 py-2 text-left text-sm ${language === 'hi' ? 'bg-amber-100 text-amber-700' : 'hover:bg-gray-50'}`}
                    >
                      हिंदी
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button - Fixed to be visible */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 ml-2 z-[1001]"
            >
              <Menu size={28} />
            </button>
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
              className="absolute inset-0 bg-black/30"
              onClick={() => setIsMenuOpen(false)}
            ></div>
            
            {/* Menu Panel - Now opens from left */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="absolute left-0 top-0 h-full w-4/5 max-w-md bg-white shadow-xl overflow-y-auto z-[1003]"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                  <Link href="/" className="flex items-center space-x-3" onClick={() => setIsMenuOpen(false)}>
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">🕉</span>
                    </div>
                    <span className="font-bold text-xl text-gray-800 font-serif">AstroPandit</span>
                  </Link>
                  <button 
                    onClick={() => setIsMenuOpen(false)} 
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <X size={24} className="text-gray-600" />
                  </button>
                </div>
                
                {/* Menu Items */}
                <div className="flex-1 flex flex-col p-4 space-y-1">
                  {navItems.map((item) => (
                    <div key={item.href} className="border-b border-gray-100 last:border-0">
                      <Link
                        href={item.href}
                        className="block text-gray-700 hover:bg-amber-50 transition-colors font-medium px-4 py-3 text-lg rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {item.subItems && (
                        <div className="pl-6 py-2 space-y-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block text-gray-600 hover:bg-amber-50 px-4 py-2 rounded-lg transition-colors"
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
                <div className="p-6 border-t border-gray-100">
                  <a
                    href="tel:+911234567890"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 px-6 rounded-full transition-all shadow-md w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Phone size={18} />
                    <span>{content.navigation.callNow}</span>
                  </a>
                </div>
                
                {/* Language Switcher - Mobile */}
                <div className="p-6 border-t border-gray-100">
                  <h3 className="text-sm font-medium text-gray-500 mb-3">
                    {language === 'en' ? 'Select Language' : 'भाषा चुनें'}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => {
                        setLanguage('en');
                        setIsMenuOpen(false);
                      }}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
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
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
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
    </header>
  );
}