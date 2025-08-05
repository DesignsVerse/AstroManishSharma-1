"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { globalContent as enContent } from '@/data/globalContent/en';
import { globalContent as hiContent } from '@/data/globalContent/hi';
import { services as enServices } from '@/data/services/en';
import { services as hiServices } from '@/data/services/hi';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Star, Clock } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  const { language } = useLanguage();
  const content = language === 'en' ? enContent : hiContent;
  const services = language === 'en' ? enServices : hiServices;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-16 bg-gradient-to-b from-[#f9f9f9] to-[#f1f1f1] overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {['☯', '🕉', '♆', '☸', '✡'].map((symbol, i) => (
          <motion.div 
            key={i}
            className="absolute text-[#F0DF20]/10 text-4xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${2 + Math.random() * 2}rem`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, 0],
              opacity: [0.05, 0.12, 0.05]
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {symbol}
          </motion.div>
        ))}
        
        <motion.div 
          className="absolute top-1/4 -left-16 w-80 h-80 rounded-full bg-[#F0DF20]/5 blur-[80px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#F0DF20]/30 shadow-sm mb-5"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-[#F0DF20] mr-2" />
            <span className="text-xs sm:text-sm font-medium text-gray-800 tracking-wider">
              {content.services?.badgeText || "Divine Services"}
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-[#F0DF20] to-gray-700">
              {content.services.title.split(' ').slice(0, -1).join(' ')}
            </span>{' '}
            <span className="text-[#F0DF20]">{content.services.title.split(' ').pop()}</span>
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            {content.services.subtitle}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {services.slice(0, 6).map((service) => (
            <motion.div 
              key={service.id}
              className="group relative w-full"
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glassmorphism Card */}
              <div className="relative h-full bg-white/90 backdrop-blur-md rounded-xl overflow-hidden shadow-md group-hover:shadow-xl group-hover:border-[#F0DF20]/20 border border-gray-100 transition-all duration-300">
                {/* Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#F0DF20]/10 rounded-full blur-xl transition-opacity duration-300 group-hover:opacity-50" />
                </div>
                
                {/* Card Content */}
                <div className="relative p-4 sm:p-5 h-full flex flex-col">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#F0DF20]/10 rounded-lg mb-3 shadow-inner group-hover:bg-[#F0DF20]/20 transition-colors">
                      <span className="text-xl sm:text-2xl text-[#F0DF20]">{service.icon}</span>
                    </div>
                    <span className="text-xs bg-[#F0DF20]/10 text-gray-800 px-2 py-1 rounded-full flex items-center group-hover:bg-[#F0DF20]/20 transition-colors">
                      <Clock className="w-3 h-3 mr-1" />
                      {service.duration}
                    </span>
                  </div>
                  
                  {/* Service Details */}
                  <div className="flex-grow">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 font-serif mb-2 line-clamp-2">
                      {service.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-bold text-base sm:text-lg text-gray-900">
                        {service.price}
                      </span>
                      <div className="flex items-center text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3 h-3 sm:w-4 sm:h-4 ${i < (5) ? 'fill-current' : ''}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-2 mt-auto">
                    <Link href={`/services/${service.slug}`} className="flex-1">
                      <Button 
                        variant="outline" 
                        className="w-full border-gray-300 bg-white/70 hover:bg-[#F0DF20]/10 hover:border-[#F0DF20] hover:text-[#F0DF20] transition-all duration-300 group text-[10px] sm:text-sm font-medium py-1 sm:py-2 text-ellipsis overflow-hidden whitespace-nowrap"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                    <Button 
                      className="flex-1 bg-gradient-to-r from-[#F0DF20] to-[#F5C742] hover:from-[#F5C742] hover:to-[#F0DF20] text-gray-900 font-medium shadow-md hover:shadow-lg transition-all text-[10px] sm:text-sm py-1 sm:py-2 text-ellipsis overflow-hidden whitespace-nowrap"
                    >
                      {content.common.bookNow}
                    </Button>
                  </div>
                </div>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-[#F0DF20] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-10 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/services">
            <Button 
              variant="outline"
              className="border-[#F0DF20] text-[#F0DF20] hover:bg-[#F0DF20]/10 hover:text-gray-900 font-semibold px-8 sm:px-10 py-5 sm:py-6 rounded-xl group transition-all duration-300 text-base sm:text-lg"
            >
              <span>{content.common.viewAll} Services</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}