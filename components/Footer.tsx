'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter, Star } from 'lucide-react';

export default function Footer() {
  const { t, language } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  const quickLinks = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.blog', href: '#blog' },
    { key: 'nav.about', href: '#about' }
  ];

  const servicesList = [
    language === 'hi' ? 'राशिफल पठन' : 'Horoscope Reading',
    language === 'hi' ? 'विवाह अनुकूलता' : 'Marriage Compatibility',
    language === 'hi' ? 'अंक शास्त्र' : 'Numerology',
    language === 'hi' ? 'हस्तरेखा पठन' : 'Palm Reading',
    language === 'hi' ? 'वास्तु शास्त्र' : 'Vastu Shastra',
    language === 'hi' ? 'करियर मार्गदर्शन' : 'Career Guidance'
  ];

  return (
    <footer id="contact" className="bg-dark-gray text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center">
                <Star className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  {language === 'hi' ? 'पंडित राजेश शर्मा' : 'Pandit Rajesh Sharma'}
                </h3>
                <p className="text-gray-400 text-sm">
                  {language === 'hi' ? 'वैदिक ज्योतिषी' : 'Vedic Astrologer'}
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              {t('footer.tagline')}
            </p>
            
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.followUs')}</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-primary-red transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {servicesList.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.contact')}</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-red mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">{t('footer.email')}</p>
                  <p className="text-white">panditrajesh@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-red mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">{t('footer.phone')}</p>
                  <p className="text-white">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-red mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">{t('footer.address')}</p>
                  <p className="text-white">{t('footer.location')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 {language === 'hi' ? 'पंडित राजेश शर्मा' : 'Pandit Rajesh Sharma'}. {t('footer.rights')}
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                {language === 'hi' ? 'गोपनीयता नीति' : 'Privacy Policy'}
              </a>
              <a href="#" className="hover:text-white transition-colors">
                {language === 'hi' ? 'सेवा की शर्तें' : 'Terms of Service'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}