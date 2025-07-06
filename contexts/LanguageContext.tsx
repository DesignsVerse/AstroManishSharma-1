'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.consultNow': 'Consult Now',
    
    // Hero
    'hero.title': 'Unlock Your Cosmic Destiny',
    'hero.subtitle': 'Discover the ancient wisdom of Vedic astrology and find guidance for your life\'s journey through the celestial movements and planetary influences that shape your destiny.',
    'hero.cta': 'Book Consultation',
    'hero.experience': 'Years Experience',
    'hero.clients': 'Happy Clients',
    'hero.accuracy': 'Accuracy Rate',
    
    // About
    'about.title': 'About Pandit Rajesh Sharma',
    'about.subtitle': 'Master of Vedic Astrology & Spiritual Guide',
    'about.desc': 'With over 15 years of dedicated experience in Vedic astrology, Pandit Rajesh Sharma has guided thousands of individuals towards their true path in life. His profound understanding of ancient Sanskrit texts, combined with modern interpretations, makes him one of the most sought-after astrologers in the region. He specializes in providing accurate predictions and practical solutions for life\'s challenges.',
    'about.specializations': 'Areas of Expertise',
    'about.spec1': 'Vedic Astrology',
    'about.spec2': 'Marriage Compatibility',
    'about.spec3': 'Career Guidance',
    'about.spec4': 'Spiritual Counseling',
    'about.achievements': 'Notable Achievements',
    'about.achievement1': 'Featured astrologer on National Television shows',
    'about.achievement2': 'Author of 3 bestselling books on Vedic astrology',
    'about.achievement3': 'Certified by the Indian Council of Astrological Sciences',
    
    // Footer
    'footer.tagline': 'Guiding souls through the cosmic journey of life with ancient wisdom and modern understanding',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Our Services',
    'footer.contact': 'Contact Information',
    'footer.email': 'Email Address',
    'footer.phone': 'Phone Number',
    'footer.address': 'Office Address',
    'footer.followUs': 'Follow Us',
    'footer.rights': 'All rights reserved.',
    'footer.location': 'Connaught Place, New Delhi, India',
  },
  hi: {
    // Header
    'nav.home': 'मुख्य पृष्ठ',
    'nav.services': 'सेवाएं',
    'nav.blog': 'ब्लॉग',
    'nav.about': 'हमारे बारे में',
    'nav.contact': 'संपर्क',
    'nav.consultNow': 'अभी परामर्श लें',
    
    // Hero
    'hero.title': 'अपनी कॉस्मिक नियति को खोलें',
    'hero.subtitle': 'वैदिक ज्योतिष की प्राचीन बुद्धिमत्ता की खोज करें और अपनी जीवन यात्रा के लिए मार्गदर्शन प्राप्त करें। आकाशीय गतिविधियों और ग्रहों के प्रभावों के माध्यम से जो आपकी नियति को आकार देते हैं।',
    'hero.cta': 'परामर्श बुक करें',
    'hero.experience': 'वर्षों का अनुभव',
    'hero.clients': 'संतुष्ट ग्राहक',
    'hero.accuracy': 'सटीकता दर',
    
    // About
    'about.title': 'पंडित राजेश शर्मा के बारे में',
    'about.subtitle': 'वैदिक ज्योतिष के गुरु एवं आध्यात्मिक मार्गदर्शक',
    'about.desc': 'वैदिक ज्योतिष में 15 से अधिक वर्षों के समर्पित अनुभव के साथ, पंडित राजेश शर्मा ने हजारों व्यक्तियों को उनके जीवन के सच्चे मार्ग की ओर मार्गदर्शन किया है। प्राचीन संस्कृत ग्रंथों की उनकी गहरी समझ, आधुनिक व्याख्याओं के साथ मिलकर, उन्हें इस क्षेत्र के सबसे प्रतिष्ठित ज्योतिषियों में से एक बनाती है। वे जीवन की चुनौतियों के लिए सटीक भविष्यवाणियां और व्यावहारिक समाधान प्रदान करने में विशेषज्ञ हैं।',
    'about.specializations': 'विशेषज्ञता के क्षेत्र',
    'about.spec1': 'वैदिक ज्योतिष',
    'about.spec2': 'विवाह अनुकूलता',
    'about.spec3': 'करियर मार्गदर्शन',
    'about.spec4': 'आध्यात्मिक परामर्श',
    'about.achievements': 'उल्लेखनीय उपलब्धियां',
    'about.achievement1': 'राष्ट्रीय टेलीविजन कार्यक्रमों में प्रदर्शित ज्योतिषी',
    'about.achievement2': 'वैदिक ज्योतिष पर 3 बेस्टसेलर पुस्तकों के लेखक',
    'about.achievement3': 'भारतीय ज्योतिष विज्ञान परिषद द्वारा प्रमाणित',
    
    // Footer
    'footer.tagline': 'प्राचीन ज्ञान और आधुनिक समझ के साथ जीवन की कॉस्मिक यात्रा में आत्माओं का मार्गदर्शन',
    'footer.quickLinks': 'त्वरित लिंक',
    'footer.services': 'हमारी सेवाएं',
    'footer.contact': 'संपर्क जानकारी',
    'footer.email': 'ईमेल पता',
    'footer.phone': 'फोन नंबर',
    'footer.address': 'कार्यालय का पता',
    'footer.followUs': 'हमें फॉलो करें',
    'footer.rights': 'सभी अधिकार सुरक्षित।',
    'footer.location': 'कनॉट प्लेस, नई दिल्ली, भारत',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'hi')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, t }}>
      {children}
    </LanguageContext.Provider>
  );
};