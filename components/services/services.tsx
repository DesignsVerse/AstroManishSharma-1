"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { globalContent as enContent } from '@/data/globalContent/en';
import { globalContent as hiContent } from '@/data/globalContent/hi';
import { services as enServices } from '@/data/services/en';
import { services as hiServices } from '@/data/services/hi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Clock, Star, ChevronRight, Zap, Globe, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/utils/motion';

export default function Services() {
  const { language } = useLanguage();
  const content = language === 'en' ? enContent : hiContent;
  const services = language === 'en' ? enServices : hiServices;

  // Zodiac symbols for decoration
  const zodiacSymbols = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
  const planetSymbols = ['☉', '☽', '☿', '♀', '♂', '♃', '♄', '♅', '♆', '♇'];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] relative overflow-hidden">
      {/* Cosmic Background - Light Version */}
      <div className="fixed inset-0 -z-50">
        <div className="absolute inset-0 bg-[url('/assets/cosmic-texture-light.png')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F5FF] via-[#FFFFFF] to-[#F5F8FF] opacity-90" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/stars-light.png')] opacity-10" />
      </div>

      {/* Animated Cosmic Elements - Light Version */}
      <div className="fixed inset-0 -z-40 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#F0DF20]/20 text-4xl"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              rotate: Math.random() * 360,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, (Math.random() - 0.5) * 40, 0],
              rotate: 360,
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 15 + Math.random() * 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {i < 6 ? zodiacSymbols[i] : planetSymbols[i - 6]}
          </motion.div>
        ))}
      </div>

      <Header />
      
      <main className="pt-16">
        {/* Cosmic Hero Section - Light */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,#F0DF20_0%,transparent_70%)] opacity-5 animate-pulse" 
              style={{ transform: 'translate(-50%, -50%)' }} />
          </div>
          
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            animate="show"
            className="container mx-auto px-4"
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="inline-flex items-center bg-[#F0DF20]/10 px-6 py-3 rounded-full border border-[#F0DF20]/20 mb-6 backdrop-blur-sm"
              >
                <Sparkles className="w-5 h-5 text-[#F0DF20] mr-2" />
                <span className="text-[#F0DF20] font-medium tracking-wider">
                  {content.services.title}
                </span>
              </motion.div>
              
              <motion.h1 
                variants={fadeIn('up', 'tween', 0.4, 1)}
                className="text-5xl md:text-7xl font-bold mb-8 font-serif bg-clip-text text-transparent bg-gradient-to-r from-[#1A1A1A] via-[#F0DF20] to-[#1A1A1A]"
              >
                {content.services.headline}
              </motion.h1>
              
              <motion.p 
                variants={fadeIn('up', 'tween', 0.6, 1)}
                className="text-xl text-[#1A1A1A]/80 max-w-3xl mx-auto leading-relaxed mb-12"
              >
                {content.services.subtitle}
              </motion.p>
              
              <motion.div 
                variants={fadeIn('up', 'tween', 0.8, 1)}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button 
                  size="lg"
                  className="relative overflow-hidden group bg-gradient-to-r from-[#F0DF20] to-[#F0DF20]/80 hover:from-[#F0DF20]/90 hover:to-[#F0DF20] text-white font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    {content.common.getConsultation}
                  </span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </Button>
                
                <Link href="/contact">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#F0DF20] text-[#F0DF20] hover:bg-[#F0DF20]/10 font-semibold px-8 py-6 rounded-full backdrop-blur-sm"
                  >
                    {content.common.contactUs}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Celestial Services Grid - Light */}
        <section className="relative py-24 bg-white/50 backdrop-blur-sm">
          <div className="absolute -top-32 left-0 w-64 h-64 bg-[#F0DF20]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 right-0 w-64 h-64 bg-[#F0DF20]/5 rounded-full blur-3xl"></div>
          
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            animate="show"
            className="container mx-auto px-4"
          >
            <motion.div
              variants={fadeIn('up', 'tween', 0.2, 1)}
              className="max-w-4xl mx-auto text-center mb-20"
            >
              <div className="inline-flex items-center bg-[#F0DF20]/10 px-6 py-3 rounded-full border border-[#F0DF20]/20 mb-6 backdrop-blur-sm">
                <Globe className="w-5 h-5 text-[#F0DF20] mr-2" />
                <span className="text-[#F0DF20] font-medium tracking-wider">
                  {language === 'en' ? 'Divine Services' : 'दिव्य सेवाएं'}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                {language === 'en' 
                  ? 'Cosmic Guidance for Your Journey' 
                  : 'आपकी यात्रा के लिए ब्रह्मांडीय मार्गदर्शन'}
              </h2>
              <p className="text-xl text-[#1A1A1A]/80 max-w-3xl mx-auto leading-relaxed">
                {language === 'en' 
                  ? 'Discover the perfect celestial service to illuminate your path' 
                  : 'अपने मार्ग को प्रकाशित करने के लिए सही दिव्य सेवा खोजें'}
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 'tween', 0.4, 1)}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={fadeIn('up', 'tween', index * 0.1 + 0.4, 1)}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="relative overflow-hidden h-full bg-white border border-[#EAEAEA] hover:border-[#F0DF20]/30 transition-all duration-500 shadow-lg hover:shadow-xl">
                    {/* Cosmic Glow Effect - Light */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-[#F0DF20]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Service Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/20 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg">
                        <span className="text-2xl text-[#F0DF20]">{service.icon}</span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[#F0DF20] font-medium text-sm">
                          {service.price}
                        </div>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-3">
                      <CardTitle className="text-2xl font-bold font-serif group-hover:text-[#F0DF20] transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-[#1A1A1A]/80">
                        {service.shortDescription}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="space-y-6">
                        {/* Features */}
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <div 
                              key={index}
                              className="text-xs bg-[#F3F3F3] text-[#1A1A1A]/80 px-3 py-1 rounded-full border border-[#EAEAEA]"
                            >
                              {feature}
                            </div>
                          ))}
                        </div>
                        
                        {/* Duration */}
                        <div className="flex items-center space-x-2 text-[#1A1A1A]/70">
                          <Clock className="w-4 h-4 text-[#F0DF20]" />
                          <span className="text-sm">{service.duration}</span>
                        </div>
                        
                        {/* CTA */}
                        <div className="flex items-center justify-between pt-4">
                          <Link href={`/services/${service.slug}`}>
                            <Button 
                              variant="ghost"
                              className="text-[#F0DF20] hover:bg-[#F0DF20]/10 px-0 group"
                            >
                              {content.common.learnMore}
                              <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </Link>
                          
                          <Link href={`/services/${service.slug}`}>
                            <Button 
                              size="sm"
                              className="bg-[#F0DF20] hover:bg-[#F0DF20]/90 text-white font-medium"
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

        {/* Cosmic Testimonials - Light */}
        <section className="relative py-24 bg-gradient-to-b from-[#F8F5FF] to-[#FFFFFF]">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/cosmic-grid-light.png')] opacity-10" />
          </div>
          
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            animate="show"
            className="container mx-auto px-4"
          >
            <motion.div
              variants={fadeIn('up', 'tween', 0.2, 1)}
              className="max-w-4xl mx-auto text-center mb-20"
            >
              <div className="inline-flex items-center bg-[#F0DF20]/10 px-6 py-3 rounded-full border border-[#F0DF20]/20 mb-6 backdrop-blur-sm">
                <Star className="w-5 h-5 text-[#F0DF20] mr-2 fill-current" />
                <span className="text-[#F0DF20] font-medium tracking-wider">
                  {language === 'en' ? 'Celestial Experiences' : 'दिव्य अनुभव'}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                {language === 'en' 
                  ? 'Transformations Under the Cosmos' 
                  : 'ब्रह्मांड के तहत परिवर्तन'}
              </h2>
              <p className="text-xl text-[#1A1A1A]/80 max-w-3xl mx-auto leading-relaxed">
                {language === 'en' 
                  ? 'Discover how our guidance has illuminated paths for seekers worldwide' 
                  : 'जानिए कैसे हमारा मार्गदर्शन दुनिया भर के साधकों के मार्ग को प्रकाशित करता है'}
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 'tween', 0.4, 1)}
              className="grid md:grid-cols-3 gap-8"
            >
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -10 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#EAEAEA] hover:border-[#F0DF20]/30 transition-all duration-500 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < 4 ? 'fill-[#F0DF20] text-[#F0DF20]' : 'fill-[#EAEAEA] text-[#EAEAEA]'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-[#1A1A1A]/80 mb-6 italic">
                    {language === 'en' 
                      ? "The cosmic guidance I received was beyond anything I expected. It completely transformed my perspective and helped me align with my true purpose." 
                      : "मुझे जो ब्रह्मांडीय मार्गदर्शन मिला, वह मेरी अपेक्षा से कहीं अधिक था। इसने मेरे दृष्टिकोण को पूरी तरह से बदल दिया और मुझे मेरे वास्तविक उद्देश्य के साथ संरेखित करने में मदद की।"}
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F0DF20] to-[#F0DF20]/70 flex items-center justify-center text-white font-bold mr-4">
                      {item === 1 ? 'R' : item === 2 ? 'S' : 'A'}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A1A1A]">
                        {item === 1 ? 'Rajesh K.' : item === 2 ? 'Sunita M.' : 'Amit P.'}
                      </h4>
                      <p className="text-sm text-[#1A1A1A]/60">
                        {language === 'en' ? 'Spiritual Seeker' : 'आध्यात्मिक साधक'}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Final Cosmic CTA - Light */}
        <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#F8F5FF] to-[#FFFFFF]">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/cosmic-spiral-light.png')] opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#F8F5FF]/80 via-white to-[#F5F8FF]/80" />
          </div>
          
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            animate="show"
            className="container mx-auto px-4 text-center"
          >
            <motion.div
              variants={fadeIn('up', 'tween', 0.2, 1)}
              className="inline-flex items-center bg-[#F0DF20]/10 px-6 py-3 rounded-full border border-[#F0DF20]/20 mb-6 backdrop-blur-sm"
            >
              <Moon className="w-5 h-5 text-[#F0DF20] mr-2" />
              <Sun className="w-5 h-5 text-[#F0DF20]" />
            </motion.div>
            
            <motion.h2 
              variants={fadeIn('up', 'tween', 0.4, 1)}
              className="text-4xl md:text-6xl font-bold mb-8 font-serif bg-clip-text text-transparent bg-gradient-to-r from-[#1A1A1A] via-[#F0DF20] to-[#1A1A1A]"
            >
              {language === 'en' 
                ? 'Ready for Cosmic Transformation?' 
                : 'ब्रह्मांडीय परिवर्तन के लिए तैयार हैं?'}
            </motion.h2>
            
            <motion.p 
              variants={fadeIn('up', 'tween', 0.6, 1)}
              className="text-xl text-[#1A1A1A]/80 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              {language === 'en' 
                ? 'Begin your spiritual journey today and align with the cosmic energies that guide your destiny.' 
                : 'आज ही अपनी आध्यात्मिक यात्रा शुरू करें और उन ब्रह्मांडीय ऊर्जाओं के साथ संरेखित करें जो आपके भाग्य का मार्गदर्शन करती हैं।'}
            </motion.p>
            
            <motion.div 
              variants={fadeIn('up', 'tween', 0.8, 1)}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg"
                className="relative overflow-hidden group bg-gradient-to-r from-[#F0DF20] to-[#F0DF20]/80 hover:from-[#F0DF20]/90 hover:to-[#F0DF20] text-white font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  {content.common.getConsultation}
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Button>
              
              <Link href="/contact">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#F0DF20] text-[#F0DF20] hover:bg-[#F0DF20]/10 font-semibold px-8 py-6 rounded-full backdrop-blur-sm"
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