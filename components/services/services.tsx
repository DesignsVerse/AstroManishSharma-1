"use client";

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { globalContent as enContent } from '@/data/globalContent/en';
import { globalContent as hiContent } from '@/data/globalContent/hi';
import { services as enServices } from '@/data/services/en';
import { services as hiServices } from '@/data/services/hi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Clock, Star, ChevronRight, Zap, Globe, Moon, Sun, Search, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/utils/motion';

export default function Services() {
  const { language } = useLanguage();
  const content = language === 'en' ? enContent : hiContent;
  const services = language === 'en' ? enServices : hiServices;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openFAQ, setOpenFAQ] = useState(null);

  const zodiacSymbols = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
  const planetSymbols = ['☉', '☽', '☿', '♀', '♂', '♃', '♄', '♅', '♆', '♇'];

  const categories = ['All', 'Astrology', 'Vastu', 'Numerology', 'Palmistry', 'Gemstone Therapy'];
  const faqs = language === 'en' ? [
    { question: 'What is included in a consultation?', answer: 'Each consultation includes a personalized reading, detailed analysis, and actionable recommendations.' },
    { question: 'How long does a session last?', answer: 'Sessions typically last 30–60 minutes, depending on the service.' },
    { question: 'Can I book online?', answer: 'Yes, all services can be booked online through our secure platform.' }
  ] : [
    { question: 'परामर्श में क्या शामिल है?', answer: 'प्रत्येक परामर्श में व्यक्तिगत रीडिंग, विस्तृत विश्लेषण और कार्यान्वयन योग्य सिफारिशें शामिल हैं।' },
    { question: 'एक सत्र कितने समय तक चलता है?', answer: 'सत्र आमतौर पर 30–60 मिनट तक चलते हैं, सेवा के आधार पर।' },
    { question: 'क्या मैं ऑनलाइन बुक कर सकता हूँ?', answer: 'हाँ, सभी सेवाएँ हमारे सुरक्षित प्लेटफॉर्म के माध्यम से ऑनलाइन बुक की जा सकती हैं।' }
  ];

  const filteredServices = services.filter(service => 
    (selectedCategory === 'All' || service.category === selectedCategory) &&
    (service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9f9f9] to-[#f1f1f1] text-[#1a1a1a] relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="fixed inset-0 -z-50">
        <div className="absolute inset-0 bg-[url('/assets/cosmic-pattern.svg')] bg-repeat opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f9f9f9]/90 to-[#f1f1f1]/90" />
      </div>

      {/* Animated Cosmic Elements */}
      <div className="fixed inset-0 -z-40 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#F0DF20]/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${1 + Math.random() * 1.5}rem`
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.4, 0.2],
              scale: [0.5, 0.7, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          >
            {i < 12 ? zodiacSymbols[i] : planetSymbols[i - 12]}
          </motion.div>
        ))}
      </div>

      <Header />
      
      <main className="pt-24 sm:pt-28">
        {/* Hero Section with Search Bar */}
        <section className="relative py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,#F0DF20_0%,transparent_70%)] opacity-10 animate-pulse" 
              style={{ transform: 'translate(-50%, -50%)' }} />
          </div>
          
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            animate="show"
            className="container mx-auto px-3 sm:px-4 lg:px-6"
          >
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                variants={fadeIn('up', 'tween', 0.2, 0.8)}
                className="inline-flex items-center bg-[#F0DF20]/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-[#F0DF20]/20 mb-4 sm:mb-6 shadow-sm"
              >
                <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-[#F0DF20] mr-2 sm:mr-3" />
                <span className="text-[#F0DF20] font-semibold text-base sm:text-lg">{content.services.title}</span>
              </motion.div>
              
              <motion.h1 
                variants={fadeIn('up', 'tween', 0.4, 0.8)}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 font-serif bg-clip-text text-transparent bg-gradient-to-r from-[#1a1a1a] to-[#F0DF20]"
              >
                {content.services.headline}
              </motion.h1>
              
              <motion.p 
                variants={fadeIn('up', 'tween', 0.6, 0.8)}
                className="text-base sm:text-lg text-[#1a1a1a]/80 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10"
              >
                {content.services.subtitle}
              </motion.p>

              {/* Search Bar */}
              <motion.div 
                variants={fadeIn('up', 'tween', 0.8, 0.8)}
                className="relative max-w-md mx-auto mb-8 sm:mb-10"
              >
                <input
                  type="text"
                  placeholder={language === 'en' ? 'Search services...' : 'सेवाएँ खोजें...'}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-2 sm:py-3 px-4 sm:px-5 text-sm sm:text-base bg-white/90 backdrop-blur-sm border border-[#F0DF20]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F0DF20] transition-all duration-300"
                />
                <Search className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 w-5 sm:w-6 h-5 sm:h-6 text-[#F0DF20]" />
              </motion.div>
              
              <motion.div 
                variants={fadeIn('up', 'tween', 1.0, 0.8)}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button 
                  className="bg-gradient-to-r from-[#F0DF20] to-[#F5C742] hover:from-[#F5C742] hover:to-[#F0DF20] text-[#1a1a1a] font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Zap className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3" />
                  {content.common.getConsultation}
                </Button>
                
                <Link href="/contact">
                  <Button 
                    variant="outline"
                    className="border-2 border-[#F0DF20] text-[#F0DF20] hover:bg-[#F0DF20]/10 font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-xl backdrop-blur-sm"
                  >
                    {content.common.contactUs}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Service Categories */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-[#f1f1f1] to-[#f9f9f9]">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6">
            <motion.div
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              animate="show"
              className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  variants={fadeIn('up', 'tween', index * 0.1, 0.6)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-[#F0DF20] to-[#F5C742] text-[#1a1a1a]'
                      : 'bg-white/90 backdrop-blur-sm border border-[#F0DF20]/20 text-[#1a1a1a]/80 hover:bg-[#F0DF20]/10'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#f9f9f9] to-[#f1f1f1]">
          <div className="absolute -top-16 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#F0DF20]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-16 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#F5C742]/5 rounded-full blur-3xl"></div>
          
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            animate="show"
            className="container mx-auto px-3 sm:px-4 lg:px-6"
          >
            <motion.div
              variants={fadeIn('up', 'tween', 0.2, 0.8)}
              className="max-w-5xl mx-auto text-center mb-12 sm:mb-16"
            >
              <div className="inline-flex items-center bg-[#F0DF20]/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-[#F0DF20]/20 shadow-sm mb-4 sm:mb-6">
                <Globe className="w-5 sm:w-6 h-5 sm:h-6 text-[#F0DF20] mr-2 sm:mr-3" />
                <span className="text-[#F0DF20] font-semibold text-base sm:text-lg">
                  {language === 'en' ? 'Divine Services' : 'दिव्य सेवाएं'}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-serif bg-clip-text text-transparent bg-gradient-to-r from-[#1a1a1a] to-[#F0DF20]">
                {language === 'en' ? 'Cosmic Guidance for Your Journey' : 'आपकी यात्रा के लिए ब्रह्मांडीय मार्गदर्शन'}
              </h2>
              <p className="text-base sm:text-lg text-[#1a1a1a]/80 max-w-3xl mx-auto leading-relaxed">
                {language === 'en' ? 'Discover the perfect celestial service to illuminate your path' : 'अपने मार्ग को प्रकाशित करने के लिए सही दिव्य सेवा खोजें'}
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 'tween', 0.4, 0.8)}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={fadeIn('up', 'tween', index * 0.1, 0.8)}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <Card className="relative overflow-hidden h-full bg-white/90 backdrop-blur-sm border border-[#F0DF20]/20 hover:border-[#F0DF20]/40 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F0DF20]/10 to-[#F5C742]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Service Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/30 to-transparent" />
                      
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-xl text-[#F0DF20] text-xs sm:text-sm font-medium">
                        {service.price}
                      </div>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg sm:text-xl lg:text-2xl font-semibold font-serif group-hover:text-[#F0DF20] transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-sm sm:text-base text-[#1a1a1a]/80">
                        {service.shortDescription}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="space-y-4 sm:space-y-6">
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <div 
                              key={index}
                              className="text-xs sm:text-sm bg-[#f9f9f9] text-[#1a1a1a]/80 px-2 sm:px-3 py-1 rounded-xl border border-[#F0DF20]/10"
                            >
                              {feature}
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center space-x-2 text-[#1a1a1a]/70">
                          <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-[#F0DF20]" />
                          <span className="text-sm sm:text-base">{service.duration}</span>
                        </div>
                        
                        <div className="flex items-center justify-between pt-3 sm:pt-4">
                          <Link href={`/services/${service.slug}`}>
                            <Button 
                              variant="ghost"
                              className="text-[#F0DF20] hover:bg-[#F0DF20]/10 px-0 group"
                            >
                              {content.common.learnMore}
                              <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </Link>
                          
                          <Link href={`/services/${service.slug}`}>
                            <Button 
                              size="sm"
                              className="bg-gradient-to-r from-[#F0DF20] to-[#F5C742] hover:from-[#F5C742] hover:to-[#F0DF20] text-[#1a1a1a] font-medium"
                            >
                              {content.common.bookNow}
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Testimonials Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#f1f1f1] to-[#f9f9f9]">
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            animate="show"
            className="container mx-auto px-3 sm:px-4 lg:px-6"
          >
            <motion.div
              variants={fadeIn('up', 'tween', 0.2, 0.8)}
              className="max-w-5xl mx-auto text-center mb-12 sm:mb-16"
            >
              <div className="inline-flex items-center bg-[#F0DF20]/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-[#F0DF20]/20 shadow-sm mb-4 sm:mb-6">
                <Star className="w-5 sm:w-6 h-5 sm:h-6 text-[#F0DF20] mr-2 sm:mr-3 fill-current" />
                <span className="text-[#F0DF20] font-semibold text-base sm:text-lg">
                  {language === 'en' ? 'Celestial Experiences' : 'दिव्य अनुभव'}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-serif bg-clip-text text-transparent bg-gradient-to-r from-[#1a1a1a] to-[#F0DF20]">
                {language === 'en' ? 'Transformations Under the Cosmos' : 'ब्रह्मांड के तहत परिवर्तन'}
              </h2>
              <p className="text-base sm:text-lg text-[#1a1a1a]/80 max-w-3xl mx-auto leading-relaxed">
                {language === 'en' ? 'Discover how our guidance has illuminated paths for seekers worldwide' : 'जानिए कैसे हमारा मार्गदर्शन दुनिया भर के साधकों के मार्ग को प्रकाशित करता है'}
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 'tween', 0.4, 0.8)}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
            >
              {[
                { name: 'Rajesh K.', role: language === 'en' ? 'Spiritual Seeker' : 'आध्यात्मिक साधक', quote: language === 'en' ? 'The cosmic guidance was transformative, aligning me with my true purpose.' : 'ब्रह्मांडीय मार्गदर्शन परिवर्तनकारी था, मुझे मेरे वास्तविक उद्देश्य के साथ संरेखित किया।', rating: 5 },
                { name: 'Sunita M.', role: language === 'en' ? 'Career Professional' : 'कैरियर प्रोफेशनल', quote: language === 'en' ? 'Vastu consultation brought harmony to my workspace.' : 'वास्तु परामर्श ने मेरे कार्यस्थल में सामंजस्य लाया।', rating: 5 },
                { name: 'Amit P.', role: language === 'en' ? 'Entrepreneur' : 'उद्यमी', quote: language === 'en' ? 'Numerology insights guided my business decisions.' : 'अंक ज्योतिष की अंतर्दृष्टि ने मेरे व्यावसायिक निर्णयों का मार्गदर्शन किया।', rating: 4.5 }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn('up', 'tween', index * 0.15, 0.8)}
                  whileHover={{ y: -8 }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#F0DF20]/20 hover:border-[#F0DF20]/40 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-4 sm:mb-6">
                    {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                      <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-[#F0DF20] fill-current" />
                    ))}
                    {testimonial.rating % 1 !== 0 && <Star className="w-4 sm:w-5 h-4 sm:h-5 text-[#F0DF20] fill-current opacity-50" />}
                  </div>
                  <p className="text-sm sm:text-base text-[#1a1a1a]/80 mb-4 sm:mb-6 italic font-serif">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-br from-[#F0DF20] to-[#F5C742] flex items-center justify-center text-[#1a1a1a] font-semibold text-sm sm:text-base mr-3 sm:mr-4">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-[#1a1a1a]">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-[#1a1a1a]/60">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* FAQ Teaser Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#f9f9f9] to-[#f1f1f1]">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6">
            <motion.div
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              animate="show"
              className="max-w-5xl mx-auto"
            >
              <motion.div
                variants={fadeIn('up', 'tween', 0.2, 0.8)}
                className="text-center mb-12 sm:mb-16"
              >
                <div className="inline-flex items-center bg-[#F0DF20]/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-[#F0DF20]/20 shadow-sm mb-4 sm:mb-6">
                  <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-[#F0DF20] mr-2 sm:mr-3" />
                  <span className="text-[#F0DF20] font-semibold text-base sm:text-lg">
                    {language === 'en' ? 'Frequently Asked Questions' : 'अक्सर पूछे जाने वाले प्रश्न'}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-serif bg-clip-text text-transparent bg-gradient-to-r from-[#1a1a1a] to-[#F0DF20]">
                  {language === 'en' ? 'Your Questions, Answered' : 'आपके प्रश्न, उत्तरित'}
                </h2>
                <p className="text-base sm:text-lg text-[#1a1a1a]/80 max-w-3xl mx-auto leading-relaxed">
                  {language === 'en' ? 'Explore common queries about our services' : 'हमारी सेवाओं के बारे में सामान्य प्रश्नों का अन्वेषण करें'}
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn('up', 'tween', 0.4, 0.8)}
                className="space-y-4 sm:space-y-6"
              >
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn('up', 'tween', index * 0.15, 0.8)}
                    className="bg-white/90 backdrop-blur-sm rounded-2xl border border-[#F0DF20]/20 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <button
                      className="w-full flex items-center justify-between p-4 sm:p-6 text-left"
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    >
                      <span className="text-sm sm:text-base font-semibold text-[#1a1a1a]">{faq.question}</span>
                      <ChevronDown className={`w-5 sm:w-6 h-5 sm:h-6 text-[#F0DF20] transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFAQ === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 sm:px-6 pb-4 sm:pb-6"
                        >
                          <p className="text-sm sm:text-base text-[#1a1a1a]/80">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeIn('up', 'tween', 0.6, 0.8)}
                className="text-center mt-8 sm:mt-10"
              >
                <Link href="/faq">
                  <Button 
                    className="bg-gradient-to-r from-[#F0DF20] to-[#F5C742] hover:from-[#F5C742] hover:to-[#F0DF20] text-[#1a1a1a] font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    {language === 'en' ? 'View All FAQs' : 'सभी प्रश्न देखें'}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-[#F0DF20] to-[#F5C742]">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[url('/assets/cosmic-pattern.svg')] opacity-10" />
          </div>
          
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            animate="show"
            className="container mx-auto px-3 sm:px-4 lg:px-6 text-center"
          >
            <motion.div
              variants={fadeIn('up', 'tween', 0.2, 0.8)}
              className="inline-flex items-center bg-white/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-[#F0DF20]/20 shadow-sm mb-4 sm:mb-6"
            >
              <Moon className="w-5 sm:w-6 h-5 sm:h-6 text-[#1a1a1a] mr-2 sm:mr-3" />
              <Sun className="w-5 sm:w-6 h-5 sm:h-6 text-[#1a1a1a]" />
            </motion.div>
            
            <motion.h2 
              variants={fadeIn('up', 'tween', 0.4, 0.8)}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 font-serif text-white"
            >
              {language === 'en' ? 'Ready for Cosmic Transformation?' : 'ब्रह्मांडीय परिवर्तन के लिए तैयार हैं?'}
            </motion.h2>
            
            <motion.p 
              variants={fadeIn('up', 'tween', 0.6, 0.8)}
              className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10"
            >
              {language === 'en' ? 'Begin your spiritual journey today and align with the cosmic energies that guide your destiny.' : 'आज ही अपनी आध्यात्मिक यात्रा शुरू करें और उन ब्रह्मांडीय ऊर्जाओं के साथ संरेखित करें जो आपके भाग्य का मार्गदर्शन करती हैं।'}
            </motion.p>
            
            <motion.div 
              variants={fadeIn('up', 'tween', 0.8, 0.8)}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                className="bg-white hover:bg-gray-100 text-[#1a1a1a] font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Zap className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3" />
                {content.common.getConsultation}
              </Button>
              
              <Link href="/contact">
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-xl"
                >
                  {content.common.contactUs}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}