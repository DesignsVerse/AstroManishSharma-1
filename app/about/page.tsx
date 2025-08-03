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
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-32 relative z-10">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute -inset-8 bg-[#F0DF20]/10 rounded-full blur-xl"></div>
                <img
                  src="https://images.pexels.com/photos/8566443/pexels-photo-8566443.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Pandit Ji"
                  className="relative z-10 w-full max-w-2xl mx-auto rounded-full shadow-2xl border-8 border-[#F0DF20]"
                />
                <motion.div 
                  className="absolute -bottom-4 -right-4 bg-[#F0DF20] p-4 rounded-full shadow-2xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-4xl text-white">🕉</span>
                </motion.div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="space-y-10 text-center lg:text-left"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex items-center bg-[#F0DF20]/20 px-8 py-4 rounded-2xl border border-[#F0DF20]/30 mb-8 shadow-md"
                >
                  <Sparkles className="w-8 h-8 text-[#F0DF20] mr-4" />
                  <span className="text-[#F0DF20] font-bold text-xl">{content.about.title}</span>
                </motion.div>
                <h1 className="text-6xl md:text-7xl font-extrabold text-[#F0DF20] font-serif leading-tight">
                  {content.about.title}
                </h1>
                <h2 className="text-3xl md:text-4xl text-gray-800 font-semibold font-serif">
                  {content.about.subtitle}
                </h2>
                <p className="text-2xl text-gray-700 leading-relaxed max-w-3xl">
                  {content.about.description}
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                  {[
                    { icon: Star, text: `15+ ${content.common.years} ${content.common.experience}`, fill: true },
                    { icon: Users, text: `5000+ ${content.common.clients}` },
                    { icon: Award, text: `95% ${content.common.accuracy}` }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.3, duration: 0.5 }}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center space-x-4 bg-[#F0DF20]/10 p-5 rounded-2xl border border-[#F0DF20]/20 shadow-lg"
                    >
                      <stat.icon className={`w-8 h-8 text-[#F0DF20] ${stat.fill ? 'fill-current' : ''}`} />
                      <span className="text-lg font-semibold text-gray-800">{stat.text}</span>
                    </motion.div>
                  ))}
                </div>

                <Button 
                  size="lg"
                  className="bg-[#F0DF20] hover:bg-[#F0DF20]/90 text-gray-900 font-bold px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6 mr-4" />
                  {content.common.getConsultation}
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-32 bg-gray-50 relative z-10">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-24">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center bg-[#F0DF20]/20 px-8 py-4 rounded-2xl border border-[#F0DF20]/30 mb-8 shadow-md"
              >
                <Sparkles className="w-8 h-8 text-[#F0DF20] mr-4" />
                <span className="text-[#F0DF20] font-bold text-xl">{language === 'en' ? 'Areas of Expertise' : 'विशेषज्ञता के क्षेत्र'}</span>
              </motion.div>
              <h2 className="text-6xl font-extrabold text-[#F0DF20] mb-10 font-serif">
                {language === 'en' ? 'Areas of Expertise' : 'विशेषज्ञता के क्षेत्र'}
              </h2>
              <p className="text-3xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
                {language === 'en' ? 
                  'Comprehensive astrological services backed by years of study and practice' : 
                  'वर्षों के अध्ययन और अभ्यास द्वारा समर्थित व्यापक ज्योतिषीय सेवाएं'
                }
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {expertiseAreas.map((area, index) => (
                <AnimatedCard key={index} delay={index * 0.15}>
                  <Card className="relative bg-white border border-[#F0DF20]/30 hover:border-[#F0DF20]/60 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group rounded-3xl">
                    <div className="absolute inset-0 bg-[#F0DF20]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-8 right-8 text-[#F0DF20]/30 text-4xl group-hover:text-[#F0DF20]/70 transition-colors duration-500">🕉</div>
                    <CardContent className="p-10 text-center relative z-10">
                      <motion.div 
                        className="w-24 h-24 bg-[#F0DF20]/30 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-[#F0DF20]/50 group-hover:scale-110 transition-transform duration-500"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 1 }}
                      >
                        <BookOpen className="w-12 h-12 text-[#F0DF20]" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900 font-serif group-hover:text-[#F0DF20] transition-colors duration-500">{area}</h3>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section className="py-32 relative z-10">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-24">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center bg-[#F0DF20]/20 px-8 py-4 rounded-2xl border border-[#F0DF20]/30 mb-8 shadow-md"
              >
                <Sparkles className="w-8 h-8 text-[#F0DF20] mr-4" />
                <span className="text-[#F0DF20] font-bold text-xl">{language === 'en' ? 'Qualifications & Certifications' : 'योग्यताएं और प्रमाणन'}</span>
              </motion.div>
              <h2 className="text-6xl font-extrabold text-[#F0DF20] mb-10 font-serif">
                {language === 'en' ? 'Qualifications & Certifications' : 'योग्यताएं और प्रमाणन'}
              </h2>
              <p className="text-3xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
                {language === 'en' ? 
                  'Professional credentials and continuous learning in various astrological disciplines' : 
                  'विभिन्न ज्योतिषीय विषयों में पेशेवर प्रमाण पत्र और निरंतर शिक्षा'
                }
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {qualifications.map((qualification, index) => (
                <AnimatedCard key={index} delay={index * 0.15}>
                  <div className="relative bg-white rounded-3xl p-10 text-center border border-[#F0DF20]/30 hover:border-[#F0DF20]/60 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                    <div className="absolute inset-0 bg-[#F0DF20]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-8 right-8 text-[#F0DF20]/30 text-4xl group-hover:text-[#F0DF20]/70 transition-colors duration-500">🕉</div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Award className="w-20 h-20 text-[#F0DF20] mx-auto mb-8" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 font-serif group-hover:text-[#F0DF20] transition-colors duration-500">{qualification}</h3>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-32 bg-gray-50 relative z-10">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection className="text-center mb-24">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex items-center bg-[#F0DF20]/20 px-8 py-4 rounded-2xl border border-[#F0DF20]/30 mb-8 shadow-md"
                >
                  <Sparkles className="w-8 h-8 text-[#F0DF20] mr-4" />
                  <span className="text-[#F0DF20] font-bold text-xl">{language === 'en' ? 'Our Philosophy' : 'हमारा दर्शन'}</span>
                </motion.div>
                <h2 className="text-6xl font-extrabold text-[#F0DF20] mb-12 font-serif">
                  {language === 'en' ? 'Our Philosophy' : 'हमारा दर्शन'}
                </h2>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-12">
                {philosophyPoints.map((point, index) => (
                  <AnimatedCard key={index} delay={index * 0.2}>
                    <div className="bg-white rounded-3xl p-10 border border-[#F0DF20]/30 hover:border-[#F0DF20]/60 transition-all duration-500 shadow-xl hover:shadow-2xl">
                      <p className="text-xl text-gray-700 leading-relaxed font-serif">{point}</p>
                    </div>
                  </AnimatedCard>
                ))}
              </div>

              <AnimatedSection className="text-center mt-20">
                <p className="text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-serif">
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
        <section className="py-32 relative z-10">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-24">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center bg-[#F0DF20]/20 px-8 py-4 rounded-2xl border border-[#F0DF20]/30 mb-8 shadow-md"
              >
                <Quote className="w-8 h-8 text-[#F0DF20] mr-4" />
                <span className="text-[#F0DF20] font-bold text-xl">{language === 'en' ? 'Client Testimonials' : 'ग्राहक प्रशंसापत्र'}</span>
              </motion.div>
              <h2 className="text-6xl font-extrabold text-[#F0DF20] mb-10 font-serif">
                {language === 'en' ? 'What Our Clients Say' : 'हमारे ग्राहक क्या कहते हैं'}
              </h2>
              <p className="text-3xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
                {language === 'en' ? 'Real stories from satisfied clients' : 'संतुष्ट ग्राहकों से वास्तविक कहानियां'}
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-12">
              {testimonials.map((testimonial, index) => (
                <AnimatedCard key={index} delay={index * 0.25}>
                  <Card className="bg-white border border-[#F0DF20]/30 hover:border-[#F0DF20]/60 transition-all duration-500 shadow-xl hover:shadow-2xl rounded-3xl overflow-hidden">
                    <CardContent className="p-10">
                      <Quote className="w-10 h-10 text-[#F0DF20]/50 mb-6" />
                      <p className="text-xl text-gray-700 mb-8 italic font-serif">"{testimonial.quote}"</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-gray-900">{testimonial.author}</span>
                        <div className="flex">
                          {Array.from({length: Math.floor(testimonial.rating)}).map((_, i) => (
                            <Star key={i} className="w-6 h-6 text-[#F0DF20] fill-current" />
                          ))}
                          {testimonial.rating % 1 !== 0 && <Star className="w-6 h-6 text-[#F0DF20] fill-current opacity-50" />}
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
        <section className="py-32 bg-gray-50 relative z-10">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-24">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center bg-[#F0DF20]/20 px-8 py-4 rounded-2xl border border-[#F0DF20]/30 mb-8 shadow-md"
              >
                <Newspaper className="w-8 h-8 text-[#F0DF20] mr-4" />
                <span className="text-[#F0DF20] font-bold text-xl">{language === 'en' ? 'Media Mentions' : 'मीडिया उल्लेख'}</span>
              </motion.div>
              <h2 className="text-6xl font-extrabold text-[#F0DF20] mb-10 font-serif">
                {language === 'en' ? 'Featured In' : 'में विशेष रुप से प्रदर्शित'}
              </h2>
              <p className="text-3xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
                {language === 'en' ? 'Recognized by leading publications and platforms' : 'अग्रणी प्रकाशनों और प्लेटफार्मों द्वारा मान्यता प्राप्त'}
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-12">
              {mediaMentions.map((mention, index) => (
                <AnimatedCard key={index} delay={index * 0.2}>
                  <div className="bg-white rounded-3xl p-10 border border-[#F0DF20]/30 hover:border-[#F0DF20]/60 transition-all duration-500 shadow-xl hover:shadow-2xl flex items-center space-x-8">
                    <Globe className="w-16 h-16 text-[#F0DF20] flex-shrink-0" />
                    <p className="text-xl text-gray-700 font-serif">{mention}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-32 relative z-10">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-24">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center bg-[#F0DF20]/20 px-8 py-4 rounded-2xl border border-[#F0DF20]/30 mb-8 shadow-md"
              >
                <Calendar className="w-8 h-8 text-[#F0DF20] mr-4" />
                <span className="text-[#F0DF20] font-bold text-xl">{language === 'en' ? 'Journey Timeline' : 'यात्रा समयरेखा'}</span>
              </motion.div>
              <h2 className="text-6xl font-extrabold text-[#F0DF20] mb-10 font-serif">
                {language === 'en' ? 'My Astrological Journey' : 'मेरी ज्योतिषीय यात्रा'}
              </h2>
              <p className="text-3xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
                {language === 'en' ? 'Key milestones in a lifetime dedicated to cosmic wisdom' : 'ब्रह्मांडीय ज्ञान के लिए समर्पित जीवन की प्रमुख मील के पत्थर'}
              </p>
            </AnimatedSection>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#F0DF20]"></div>
              {timelineEvents.map((event, index) => (
                <AnimatedCard key={index} delay={index * 0.2}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-16`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <motion.div 
                        className="bg-white rounded-3xl p-8 border border-[#F0DF20]/30 inline-block shadow-xl"
                        whileHover={{ scale: 1.05 }}
                      >
                        <h3 className="text-3xl font-bold text-[#F0DF20] mb-2">{event.year}</h3>
                        <p className="text-xl text-gray-700">{event.event}</p>
                      </motion.div>
                    </div>
                    <div className="w-1/2"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#F0DF20] w-8 h-8 rounded-full flex items-center justify-center z-10">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-32 bg-[#F0DF20] relative z-10">
          <div className="container mx-auto px-6 text-center">
            <AnimatedSection className="text-center">
              <h2 className="text-6xl font-extrabold text-white mb-10 font-serif">
                {language === 'en' ? 'Ready to Discover Your Destiny?' : 'क्या आप अपना भाग्य जानने के लिए तैयार हैं?'}
              </h2>
              <p className="text-3xl text-white/90 mb-16 max-w-4xl mx-auto font-serif">
                {language === 'en' ? 
                  'Book a consultation today and embark on a journey of self-discovery and cosmic wisdom.' : 
                  'आज ही परामर्श बुक करें और आत्म-खोज तथा ब्रह्मांडीय ज्ञान की यात्रा पर निकलें।'
                }
              </p>
              <Button 
                size="lg"
                className="bg-white hover:bg-gray-100 text-[#F0DF20] font-bold px-16 py-8 rounded-2xl shadow-3xl hover:shadow-4xl transition-all duration-500 transform hover:scale-110"
              >
                <MessageCircle className="w-8 h-8 mr-4" />
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

const AnimatedSection = ({ children, className }: { children: React.ReactNode, className: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 1, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const AnimatedCard = ({ children, delay = 0 }: { children: React.ReactNode, delay: number }) => {
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
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};