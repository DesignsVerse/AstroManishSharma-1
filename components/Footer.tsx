"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { globalContent as enContent } from '@/data/globalContent/en';
import { globalContent as hiContent } from '@/data/globalContent/hi';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

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
    <footer className="bg-[#000000] text-[#EEEEEE] relative overflow-hidden">
      {/* Sacred Symbols Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute text-[#F0DF20]/20 text-4xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${3 + Math.random() * 4}rem`,
            }}
          >
            {['☉','☽','☿','♀','♂','♃','♄','♅','♆','♇','⚸','⚹','🕉','ॐ','卐'][i % 15]}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Spiritual Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#F0DF20] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-[#000000] font-bold text-2xl">🕉</span>
              </div>
              <span className="font-bold text-2xl font-serif text-[#FFFFFF]">AstroPandit</span>
            </div>
            <p className="text-[#EEEEEE] leading-relaxed">
              {content.footer.description}
            </p>
            <div className="flex space-x-5">
              <Facebook className="w-6 h-6 text-[#EEEEEE] hover:text-[#F0DF20] cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-[#EEEEEE] hover:text-[#F0DF20] cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-[#EEEEEE] hover:text-[#F0DF20] cursor-pointer transition-colors" />
              <Youtube className="w-6 h-6 text-[#EEEEEE] hover:text-[#F0DF20] cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#F0DF20] border-b border-[#F0DF20]/30 pb-2">
              {content.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-[#EEEEEE] hover:text-[#F0DF20] transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-[#F0DF20] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#F0DF20] border-b border-[#F0DF20]/30 pb-2">
              {content.footer.services}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-[#EEEEEE] hover:text-[#F0DF20] transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-[#F0DF20] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#F0DF20] border-b border-[#F0DF20]/30 pb-2">
              {content.footer.contact}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#F0DF20] mt-1 flex-shrink-0" />
                <p className="text-[#EEEEEE]">{content.footer.address}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#F0DF20] flex-shrink-0" />
                <p className="text-[#EEEEEE]">{content.footer.phone}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#F0DF20] flex-shrink-0" />
                <p className="text-[#EEEEEE]">{content.footer.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with Sacred Symbol */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#F0DF20]/20"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#000000] px-4 text-[#F0DF20] text-2xl">🕉</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[#EEEEEE]/80">
            © {new Date().getFullYear()} AstroPandit. {content.footer.rights}
          </p>
          <p className="text-[#EEEEEE]/60 text-sm mt-2">
            {language === 'en' ? 'Vedic Astrology & Spiritual Guidance' : 'ज्योतिष परामर्श एवं आध्यात्मिक मार्गदर्शन'}
          </p>
        </div>
      </div>
    </footer>
  );
}