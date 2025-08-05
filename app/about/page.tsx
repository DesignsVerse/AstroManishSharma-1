"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { globalContent as enContent } from '@/data/globalContent/en';
import { globalContent as hiContent } from '@/data/globalContent/hi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge, Sparkles, Star, Award, Users, BookOpen, MessageCircle, Quote, Globe, Newspaper, Calendar } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';


export default function About() {
  const { language } = useLanguage();
  const content = language === 'en' ? enContent : hiContent;

  const expertiseAreas = content.about.expertise;

  const qualifications = language === 'en' ? [
    "Master's in Vedic Astrology",
    "Certified Palmist",
    "Vastu Consultant",
    "Numerology Expert",
    "Gemstone Therapist",
    "Spiritual Healer"
  ] : [
    "वैदिक ज्योतिष में स्नातकोत्तर",
    "प्रमाणित हस्तरेखा विशेषज्ञ",
    "वास्तु सलाहकार",
    "अंक विज्ञान विशेषज्ञ",
    "रत्न चिकित्सक",
    "आध्यात्मिक उपचारक"
  ];

  const testimonials = language === 'en' ? [
    {
      quote: "Pandit Ji's insights changed my life. His predictions were spot on!",
      author: "Priya S., Mumbai",
      rating: 5
    },
    {
      quote: "The Vastu consultation transformed my home and brought positive energy.",
      author: "Raj K., Delhi",
      rating: 5
    },
    {
      quote: "Accurate numerology reading helped me make better career decisions.",
      author: "Anita M., Bangalore",
      rating: 4.5
    }
  ] : [
    {
      quote: "पंडित जी की अंतर्दृष्टि ने मेरी जिंदगी बदल दी। उनकी भविष्यवाणियां बिल्कुल सटीक थीं!",
      author: "प्रिया एस., मुंबई",
      rating: 5
    },
    {
      quote: "वास्तु परामर्श ने मेरे घर को बदल दिया और सकारात्मक ऊर्जा लाई।",
      author: "राज के., दिल्ली",
      rating: 5
    },
    {
      quote: "सटीक अंक ज्योतिष पढ़ाई ने मुझे बेहतर करियर निर्णय लेने में मदद की।",
      author: "अनिता एम., बैंगलोर",
      rating: 4.5
    }
  ];

  const mediaMentions = language === 'en' ? [
    "Featured in Times of India - 'Top Astrologers in India'",
    "Interview on Zee News - Vedic Astrology Special",
    "Article in Hindustan Times - Modern Vastu Tips",
    "Guest Speaker at International Astrology Conference 2024"
  ] : [
    "टाइम्स ऑफ इंडिया में विशेष रुप से प्रदर्शित - 'भारत के शीर्ष ज्योतिषी'",
    "ज़ी न्यूज़ पर साक्षात्कार - वैदिक ज्योतिष विशेष",
    "हिंदुस्तान टाइम्स में लेख - आधुनिक वास्तु टिप्स",
    "अंतर्राष्ट्रीय ज्योतिष सम्मेलन 2024 में अतिथि वक्ता"
  ];

  const philosophyPoints = language === 'en' ? [
    "Blending ancient Vedic wisdom with contemporary insights",
    "Empowering clients through self-awareness and cosmic understanding",
    "Ethical practices focused on positive transformation",
    "Holistic approach integrating mind, body, and spirit"
  ] : [
    "प्राचीन वैदिक ज्ञान को समकालीन अंतर्दृष्टि के साथ मिश्रित करना",
    "स्व-जागरूकता और ब्रह्मांडीय समझ के माध्यम से ग्राहकों को सशक्त बनाना",
    "सकारात्मक परिवर्तन पर केंद्रित नैतिक अभ्यास",
    "मन, शरीर और आत्मा को एकीकृत करने वाला समग्र दृष्टिकोण"
  ];

  const timelineEvents = language === 'en' ? [
    { year: 2005, event: "Began study of Vedic Astrology" },
    { year: 2010, event: "Master's Degree in Vedic Sciences" },
    { year: 2015, event: "Opened first consultation center" },
    { year: 2018, event: "International recognition at Global Astrology Summit" },
    { year: 2020, event: "Launched online consultation platform" },
    { year: 2024, event: "Published book on Modern Vedic Practices" }
  ] : [
    { year: 2005, event: "वैदिक ज्योतिष का अध्ययन शुरू किया" },
    { year: 2010, event: "वैदिक विज्ञान में मास्टर डिग्री" },
    { year: 2015, event: "पहला परामर्श केंद्र खोला" },
    { year: 2018, event: "ग्लोबल ज्योतिष सम्मिट में अंतर्राष्ट्रीय मान्यता" },
    { year: 2020, event: "ऑनलाइन परामर्श प्लेटफॉर्म लॉन्च किया" },
    { year: 2024, event: "आधुनिक वैदिक प्रथाओं पर पुस्तक प्रकाशित की" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9f9f9] to-[#f1f1f1] text-[#1a1a1a] relative overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/cosmic-pattern.svg')] bg-repeat opacity-10" />
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#F0DF20]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${1 + Math.random() * 1}rem`
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [0.5, 0.7, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          >
            {['☉', '☽', '☿', '♀', '♂', '♃', '♄', '♅', '♆', '♇', '⚸', '⚹'][i % 12]}
          </motion.div>
        ))}
      </div>

      <Header />
      
      <main className="pt-24 sm:pt-28">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 relative z-10">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <motion.div 
                className="relative mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-[#F0DF20]/10 to-[#F5C742]/10 rounded-full blur-lg"></div>
                <img
                  src="https://images.pexels.com/photos/8566443/pexels-photo-8566443.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Pandit Ji"
                  className="relative z-10 w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] mx-auto rounded-full shadow-xl border-4 sm:border-6 border-[#F0DF20]"
                />
                <motion.div 
                  className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-gradient-to-r from-[#F0DF20] to-[#F5C742] p-2 sm:p-3 rounded-full shadow-lg"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-2xl sm:text-3xl text-white">🕉</span>
                </motion.div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6 sm:space-y-8 text-center lg:text-left"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center bg-[#F0DF20]/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-[#F0DF20]/20 shadow-sm"
                >
                  <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-[#F0DF20] mr-2 sm:mr-3" />
                  <span className="text-[#F0DF20] font-semibold text-base sm:text-lg">{content.about.title}</span>
                </motion.div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1a1a1a] to-[#F0DF20] font-serif leading-tight">
                  {content.about.title}
                </h1>
                <h2 className="text-2xl sm:text-3xl text-[#1a1a1a] font-semibold font-serif">
                  {content.about.subtitle}
                </h2>
                <p className="text-base sm:text-lg text-[#1a1a1a]/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  {content.about.description}
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
                  {[
                    { icon: Star, text: `15+ ${content.common.years} ${content.common.experience}`, fill: true },
                    { icon: Users, text: `5000+ ${content.common.clients}` },
                    { icon: Award, text: `95% ${content.common.accuracy}` }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.2, duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-3 bg-[#F0DF20]/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-[#F0DF20]/20 shadow-sm"
                    >
                      <stat.icon className={`w-5 sm:w-6 h-5 sm:h-6 text-[#F0DF20] ${stat.fill ? 'fill-current' : ''}`} />
                      <span className="text-sm sm:text-base font-medium text-[#1a1a1a]">{stat.text}</span>
                    </motion.div>
                  ))}
                </div>

                <Button 
                  className="bg-gradient-to-r from-[#F0DF20] to-[#F5C742] hover:from-[#F5C742] hover:to-[#F0DF20] text-[#1a1a1a] font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3" />
                  {content.common.getConsultation}
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#f1f1f1] to-[#f9f9f9] relative z-10">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6">
            <AnimatedSection className="text-center mb-12 sm:mb-16">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center bg-[#F0DF20]/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-[#F0DF20]/20 shadow-sm"
              >
                <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-[#F0DF20] mr-2 sm:mr-3" />
                <span className="text-[#F0DF20] font-semibold text-base sm:text-lg">{language === 'en' ? 'Areas of Expertise' : 'विशेषज्ञता के क्षेत्र'}</span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1a1a1a] to-[#F0DF20] mt-4 sm:mt-6 font-serif">
                {language === 'en' ? 'Areas of Expertise' : 'विशेषज्ञता के क्षेत्र'}
              </h2>
              <p className="text-base sm:text-lg text-[#1a1a1a]/80 max-w-3xl sm:max-w-4xl mx-auto mt-3 sm:mt-4 leading-relaxed">
                {language === 'en' ? 
                  'Comprehensive astrological services backed by years of study and practice' : 
                  'वर्षों के अध्ययन और अभ्यास द्वारा समर्थित व्यापक ज्योतिषीय सेवाएं'
                }
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {expertiseAreas.map((area, index) => (
                <AnimatedCard key={index} delay={index * 0.1}>
                  <Card className="relative bg-white/90 backdrop-blur-sm border border-[#F0DF20]/20 hover:border-[#F0DF20]/40 shadow-md hover:shadow-lg transition-all duration-300 group rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F0DF20]/5 to-[#F5C742]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 text-[#F0DF20]/30 text-2xl sm:text-3xl group-hover:text-[#F0DF20]/70 transition-colors duration-300">🕉</div>
                    <CardContent className="p-6 sm:p-8 text-center relative z-10">
                      <motion.div 
                        className="w-16 h-16 sm:w-20 sm:h-20 bg-[#F0DF20]/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 border border-[#F0DF20]/30 group-hover:scale-105 transition-transform duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <BookOpen className="w-8 sm:w-10 h-8 sm:h-10 text-[#F0DF20]" />
                      </motion.div>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#1a1a1a] font-serif group-hover:text-[#F0DF20] transition-colors duration-300">{area}</h3>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section className="py-16 sm:py-20 relative z-10">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6">
            <AnimatedSection className="text-center mb-12 sm:mb-16">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center bg-[#F0DF20]/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-[#F0DF20]/20 shadow-sm"
              >
                <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-[#F0DF20] mr-2 sm:mr-3" />
                <span className="text-[#F0DF20] font-semibold text-base sm:text-lg">{language === 'en' ? 'Qualifications & Certifications' : 'योग्यताएं और प्रमाणन'}</span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1a1a1a] to-[#F0DF20] mt-4 sm:mt-6 font-serif">
                {language === 'en' ? 'Qualifications & Certifications' : 'योग्यताएं और प्रमाणन'}
              </h2>
              <p className="text-base sm:text-lg text-[#1a1a1a]/80 max-w-3xl sm:max-w-4xl mx-auto mt-3 sm:mt-4 leading-relaxed">
                {language === 'en' ? 
                  'Professional credentials and continuous learning in various astrological disciplines' : 
                  'विभिन्न ज्योतिषीय विषयों में पेशेवर प्रमाण पत्र और निरंतर शिक्षा'
                }
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {qualifications.map((qualification, index) => (
                <AnimatedCard key={index} delay={index * 0.1}>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center border border-[#F0DF20]/20 hover:border-[#F0DF20]/40 shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F0DF20]/5 to-[#F5C742]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 text-[#F0DF20]/30 text-2xl sm:text-3xl group-hover:text-[#F0DF20]/70 transition-colors duration-300">🕉</div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Award className="w-12 sm:w-16 h-12 sm:h-16 text-[#F0DF20] mx-auto mb-4 sm:mb-6" />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#1a1a1a] font-serif group-hover:text-[#F0DF20] transition-colors duration-300">{qualification}</h3>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#f1f1f1] to-[#f9f9f9] relative z-10">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection className="text-center mb-12 sm:mb-16">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center bg-[#F0DF20]/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-[#F0DF20]/20 shadow-sm"
                >
                  <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-[#F0DF20] mr-2 sm:mr-3" />
                  <span className="text-[#F0DF20] font-semibold text-base sm:text-lg">{language === 'en' ? 'Our Philosophy' : 'हमारा दर्शन'}</span>
                </motion.div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1a1a1a] to-[#F0DF20] mt-4 sm:mt-6 font-serif">
                  {language === 'en' ? 'Our Philosophy' : 'हमारा दर्शन'}
                </h2>
              </AnimatedSection>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {philosophyPoints.map((point, index) => (
                  <AnimatedCard key={index} delay={index * 0.1}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#F0DF20]/20 hover:border-[#F0DF20]/40 transition-all duration-300 shadow-md hover:shadow-lg">
                      <p className="text-base sm:text-lg text-[#1a1a1a]/80 font-serif leading-relaxed">{point}</p>
                    </div>
                  </AnimatedCard>
                ))}
              </div>

              <AnimatedSection className="text-center mt-10 sm:mt-12">
                <p className="text-base sm:text-lg text-[#1a1a1a]/80 max-w-3xl mx-auto font-serif leading-relaxed">
                  {language === 'en' ? 
                    "Our approach combines ancient wisdom with modern understanding, providing practical solutions that can be easily integrated into contemporary life." :
                    "हमारा दृष्टिकोण प्राचीन ज्ञान को आधुनिक समझ के साथ जोड़ता है, व्यावहारिक समाधान प्रदान करता है जो समकालीन जीवन में आसानी से एकीकृत किए जा सकते हैं।"
                  }
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20 relative z-10">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6">
            <AnimatedSection className="text-center mb-12 sm:mb-16">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center bg-[#F0DF20]/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-[#F0DF20]/20 shadow-sm"
              >
                <Quote className="w-5 sm:w-6 h-5 sm:h-6 text-[#F0DF20] mr-2 sm:mr-3" />
                <span className="text-[#F0DF20] font-semibold text-base sm:text-lg">{language === 'en' ? 'Client Testimonials' : 'ग्राहक प्रशंसापत्र'}</span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1a1a1a] to-[#F0DF20] mt-4 sm:mt-6 font-serif">
                {language === 'en' ? 'What Our Clients Say' : 'हमारे ग्राहक क्या कहते हैं'}
              </h2>
              <p className="text-base sm:text-lg text-[#1a1a1a]/80 max-w-3xl sm:max-w-4xl mx-auto mt-3 sm:mt-4 leading-relaxed">
                {language === 'en' ? 'Real stories from satisfied clients' : 'संतुष्ट ग्राहकों से वास्तविक कहानियां'}
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <AnimatedCard key={index} delay={index * 0.15}>
                  <Card className="bg-white/90 backdrop-blur-sm border border-[#F0DF20]/20 hover:border-[#F0DF20]/40 transition-all duration-300 shadow-md hover:shadow-lg rounded-2xl overflow-hidden">
                    <CardContent className="p-6 sm:p-8">
                      <Quote className="w-6 sm:w-8 h-6 sm:h-8 text-[#F0DF20]/50 mb-4 sm:mb-6" />
                      <p className="text-base sm:text-lg text-[#1a1a1a]/80 mb-6 sm:mb-8 italic font-serif">"{testimonial.quote}"</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm sm:text-base font-semibold text-[#1a1a1a]">{testimonial.author}</span>
                        <div className="flex">
                          {Array.from({length: Math.floor(testimonial.rating)}).map((_, i) => (
                            <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-[#F0DF20] fill-current" />
                          ))}
                          {testimonial.rating % 1 !== 0 && <Star className="w-4 sm:w-5 h-4 sm:h-5 text-[#F0DF20] fill-current opacity-50" />}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Media Mentions Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#f1f1f1] to-[#f9f9f9] relative z-10">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6">
            <AnimatedSection className="text-center mb-12 sm:mb-16">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center bg-[#F0DF20]/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-[#F0DF20]/20 shadow-sm"
              >
                <Newspaper className="w-5 sm:w-6 h-5 sm:h-6 text-[#F0DF20] mr-2 sm:mr-3" />
                <span className="text-[#F0DF20] font-semibold text-base sm:text-lg">{language === 'en' ? 'Media Mentions' : 'मीडिया उल्लेख'}</span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1a1a1a] to-[#F0DF20] mt-4 sm:mt-6 font-serif">
                {language === 'en' ? 'Featured In' : 'में विशेष रुप से प्रदर्शित'}
              </h2>
              <p className="text-base sm:text-lg text-[#1a1a1a]/80 max-w-3xl sm:max-w-4xl mx-auto mt-3 sm:mt-4 leading-relaxed">
                {language === 'en' ? 'Recognized by leading publications and platforms' : 'अग्रणी प्रकाशनों और प्लेटफार्मों द्वारा मान्यता प्राप्त'}
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {mediaMentions.map((mention, index) => (
                <AnimatedCard key={index} delay={index * 0.1}>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#F0DF20]/20 hover:border-[#F0DF20]/40 transition-all duration-300 shadow-md hover:shadow-lg flex items-center space-x-4 sm:space-x-6">
                    <Globe className="w-8 sm:w-10 h-8 sm:h-10 text-[#F0DF20] flex-shrink-0" />
                    <p className="text-base sm:text-lg text-[#1a1a1a]/80 font-serif">{mention}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 sm:py-20 relative z-10">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6">
            <AnimatedSection className="text-center mb-12 sm:mb-16">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center bg-[#F0DF20]/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-[#F0DF20]/20 shadow-sm"
              >
                <Calendar className="w-5 sm:w-6 h-5 sm:h-6 text-[#F0DF20] mr-2 sm:mr-3" />
                <span className="text-[#F0DF20] font-semibold text-base sm:text-lg">{language === 'en' ? 'Journey Timeline' : 'यात्रा समयरेखा'}</span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1a1a1a] to-[#F0DF20] mt-4 sm:mt-6 font-serif">
                {language === 'en' ? 'My Astrological Journey' : 'मेरी ज्योतिषीय यात्रा'}
              </h2>
              <p className="text-base sm:text-lg text-[#1a1a1a]/80 max-w-3xl sm:max-w-4xl mx-auto mt-3 sm:mt-4 leading-relaxed">
                {language === 'en' ? 'Key milestones in a lifetime dedicated to cosmic wisdom' : 'ब्रह्मांडीय ज्ञान के लिए समर्पित जीवन की प्रमुख मील के पत्थर'}
              </p>
            </AnimatedSection>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#F0DF20] to-[#F5C742]"></div>
              {timelineEvents.map((event, index) => (
                <AnimatedCard key={index} delay={index * 0.1}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-8 sm:mb-12`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-4 sm:pr-6 text-right' : 'pl-4 sm:pl-6 text-left'}`}>
                      <motion.div 
                        className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-[#F0DF20]/20 shadow-md hover:shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-xl sm:text-2xl font-semibold text-[#F0DF20] mb-2">{event.year}</h3>
                        <p className="text-base sm:text-lg text-[#1a1a1a]/80">{event.event}</p>
                      </motion.div>
                    </div>
                    <div className="w-1/2"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#F0DF20] to-[#F5C742] w-6 sm:w-8 h-6 sm:h-8 rounded-full flex items-center justify-center z-10 shadow-md">
                      <span className="text-white font-semibold text-sm sm:text-base">{index + 1}</span>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-[#F0DF20] to-[#F5C742] relative z-10">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 text-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 font-serif">
                {language === 'en' ? 'Ready to Discover Your Destiny?' : 'क्या आप अपना भाग्य जानने के लिए तैयार हैं?'}
              </h2>
              <p className="text-base sm:text-lg text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto font-serif leading-relaxed">
                {language === 'en' ? 
                  'Book a consultation today and embark on a journey of self-discovery and cosmic wisdom.' : 
                  'आज ही परामर्श बुक करें और आत्म-खोज तथा ब्रह्मांडीय ज्ञान की यात्रा पर निकलें।'
                }
              </p>
              <Button 
                className="bg-white hover:bg-gray-100 text-[#1a1a1a] font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3" />
                {language === 'en' ? 'Schedule Consultation' : 'परामर्श शेड्यूल करें'}
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

const AnimatedSection = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const AnimatedCard = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};