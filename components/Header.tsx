'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Star } from 'lucide-react';
import Link from 'next/link';

// Define the TranslationKey type to match the one in LanguageContext
type TranslationKey = 
  | 'nav.home' | 'nav.services' | 'nav.blog' | 'nav.about' | 'nav.contact' | 'nav.consultNow'
  | 'hero.title' | 'hero.subtitle' | 'hero.cta' | 'hero.experience' | 'hero.clients' | 'hero.accuracy'
  | 'about.title' | 'about.subtitle' | 'about.desc' | 'about.specializations' | 'about.spec1' | 'about.spec2' | 'about.spec3' | 'about.spec4'
  | 'about.achievements' | 'about.achievement1' | 'about.achievement2' | 'about.achievement3'
  | 'footer.tagline' | 'footer.quickLinks' | 'footer.services' | 'footer.contact' | 'footer.email' | 'footer.phone' | 'footer.address' | 'footer.followUs' | 'footer.rights' | 'footer.location';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { key: TranslationKey; href: string }[] = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.services', href: '/services' },
    { key: 'nav.blog', href: '/blog' },
    { key: 'nav.about', href: '/about' },
    { key: 'nav.contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center">
              <Star className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-dark-gray">
                {language === 'hi' ? 'पंडित राजेश शर्मा' : 'Pandit Rajesh Sharma'}
              </h1>
              <p className="text-xs text-gray-600">
                {language === 'hi' ? 'वैदिक ज्योतिषी एवं आध्यात्मिक गुरु' : 'Vedic Astrologer & Spiritual Guide'}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-dark-gray hover:text-primary-red transition-colors font-medium relative group"
              >
                {t(item.key)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-red group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Language Toggle & CTA */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-light-pink rounded-full p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-primary-red text-white shadow-md'
                    : 'text-dark-gray hover:text-primary-red'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  language === 'hi'
                    ? 'bg-primary-red text-white shadow-md'
                    : 'text-dark-gray hover:text-primary-red'
                }`}
              >
                हिंदी
              </button>
            </div>
            
            <Link href="/contact">
              <button className="hidden md:block bg-primary-red text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all transform hover:scale-105">
                {t('nav.consultNow')}
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-light-pink transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-dark-gray" />
              ) : (
                <Menu className="w-6 h-6 text-dark-gray" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-dark-gray hover:text-primary-red transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
              <Link href="/contact">
                <button className="bg-primary-red text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all mt-4 w-full">
                  {t('nav.consultNow')}
                </button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}