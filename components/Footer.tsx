"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { globalContent as enContent } from '@/data/globalContent/en';
import { globalContent as hiContent } from '@/data/globalContent/hi';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const { language } = useLanguage();
  const content = language === 'en' ? enContent : hiContent;

  const quickLinks = [
    { href: '/', label: content.navigation.home },
    { href: '/about', label: content.navigation.about },
    { href: '/services', label: content.navigation.services },
    { href: '/blog', label: content.navigation.blog },
    { href: '/contact', label: content.navigation.contact },
  ];

  const serviceLinks = [
    { href: '/services/birth-chart-analysis', label: language === 'en' ? 'Birth Chart Analysis' : 'जन्म कुंडली विश्लेषण' },
    { href: '/services/palmistry-reading', label: language === 'en' ? 'Palmistry Reading' : 'हस्तरेखा पठन' },
    { href: '/services/numerology-consultation', label: language === 'en' ? 'Numerology' : 'अंक विज्ञान' },
    { href: '/services/vastu-consultation', label: language === 'en' ? 'Vastu Consultation' : 'वास्तु परामर्श' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#F7CAC9] to-[#FFD1DC] text-[#4B2E2E] relative overflow-hidden">
      {/* Sacred Symbols Background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute text-[#FFD700]/20 text-3xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${2 + Math.random() * 3}rem`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            {['☉','☽','☿','♀','♂','♃','♄','♅','♆','♇','⚸','⚹','🕉','ॐ','卐'][i % 15]}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Spiritual Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <motion.div 
                className="w-12 h-12 bg-gradient-to-b from-[#E0116F] to-[#FFD700] rounded-full flex items-center justify-center shadow-xl"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <span className="text-white font-bold text-2xl">🕉</span>
              </motion.div>
              <span className="font-bold text-2xl font-serif text-[#4B2E2E]">AstroPandit</span>
            </div>
            <p className="text-[#800000] leading-relaxed text-base">
              {content.footer.description}
            </p>
            <div className="flex space-x-5">
              <motion.a
                href="https://facebook.com"
                whileHover={{ scale: 1.2, color: '#FFD700' }}
                className="text-[#4B2E2E] hover:text-[#FFD700] cursor-pointer transition-colors duration-200"
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                whileHover={{ scale: 1.2, color: '#FFD700' }}
                className="text-[#4B2E2E] hover:text-[#FFD700] cursor-pointer transition-colors duration-200"
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                whileHover={{ scale: 1.2, color: '#FFD700' }}
                className="text-[#4B2E2E] hover:text-[#FFD700] cursor-pointer transition-colors duration-200"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://youtube.com"
                whileHover={{ scale: 1.2, color: '#FFD700' }}
                className="text-[#4B2E2E] hover:text-[#FFD700] cursor-pointer transition-colors duration-200"
              >
                <Youtube className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-[#4B2E2E] border-b border-[#FFD700]/40 pb-2">
              {content.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-[#4B2E2E] hover:text-[#800000] transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-[#4B2E2E] border-b border-[#FFD700]/40 pb-2">
              {content.footer.services}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-[#4B2E2E] hover:text-[#800000] transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-[#4B2E2E] border-b border-[#FFD700]/40 pb-2">
              {content.footer.contact}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#FFD700] mt-1 flex-shrink-0" />
                <p className="text-[#800000]">{content.footer.address}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                <p className="text-[#800000]">{content.footer.phone}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                <p className="text-[#800000]">{content.footer.email}</p>
              </div>
            </div>
            <Link href="/contact">
              <button
                className="bg-[#E75480] hover:bg-[#FF00FF] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 w-full text-center"
              >
                {content.common.contactUs}
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Divider with Sacred Symbol */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#FFD700]/30"></div>
          </div>
          <div className="relative flex justify-center">
            <motion.span
              className="bg-gradient-to-b from-[#F7CAC9] to-[#FFD1DC] px-4 text-[#FFD700] text-2xl"
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              🕉
            </motion.span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[#800000] text-base">
            © {new Date().getFullYear()} AstroPandit. {content.footer.rights}
          </p>
          <p className="text-[#800000]/60 text-sm mt-2">
            {language === 'en' ? 'Vedic Astrology & Spiritual Guidance' : 'ज्योतिष परामर्श एवं आध्यात्मिक मार्गदर्शन'}
          </p>
        </div>
      </div>
    </footer>
  );
}