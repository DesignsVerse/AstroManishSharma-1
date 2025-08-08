"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { globalContent as enContent } from '@/data/globalContent/en';
import { globalContent as hiContent } from '@/data/globalContent/hi';
import { services as enServices } from '@/data/services/en';
import { services as hiServices } from '@/data/services/hi';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {['☯', '🕉', '♆', '☸', '✡'].map((symbol, i) => (
          <motion.div 
            key={i}
            className="absolute text-[#E0116F]/5 text-3xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${1.5 + Math.random() * 1.5}rem`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
              opacity: [0.03, 0.08, 0.03]
            }}
            transition={{
              duration: 12 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {symbol}
          </motion.div>
        ))}
        <motion.div 
          className="absolute top-1/4 -left-16 w-80 h-80 rounded-full bg-[#F7CAC9]/10 blur-[80px]"
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="inline-flex items-center bg-[#E0116F]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E0116F]/30 shadow-sm mb-5"
            whileHover={{ scale: 1.05 }}
                      >
            <Sparkles className="w-4 h-4 text-[#E75480] mr-2" />
            <span className="text-xs sm:text-sm font-medium text-[#4B2E2E] tracking-wider">
              {content.services?.badgeText || "Divine Services"}
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4B2E2E] mb-4 font-serif"
                      >
            <span className="bg-clip-text pt-4 text-transparent bg-gradient-to-r from-[#E0116F] to-[#E75480]">
              {content.services.title.split(' ').slice(0, -1).join(' ')}
            </span>{' '}
            <span className="text-[#E75480]">{content.services.title.split(' ').pop()}</span>
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg text-[#800000] max-w-3xl mx-auto leading-relaxed"
                      >
            {content.services.subtitle}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 gap-6 sm:gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {services.slice(0, 3).map((service) => (
            <motion.div 
              key={service.id}
              className="group relative w-full"
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
                          >
              {/* Glassmorphism Card */}
              <div className="relative h-full bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl group-hover:border-[#E0116F]/30 border border-[#E0116F]/20 transition-all duration-300">
                {/* Image */}
                <div className="relative h-56 overflow-hidden rounded-t-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4B2E2E]/30 to-transparent" />
                  <div className="absolute top-3 right-3 text-[#E75480]/50 text-2xl group-hover:text-[#E75480]/80">🕉</div>
                </div>
                
                {/* Card Content */}
                <div className="relative p-5 flex flex-col">
                  {/* Service Details */}
                  <div className="flex-grow">
                    <h3 className="text-lg sm:text-xl font-bold text-[#4B2E2E] font-serif mb-2 line-clamp-2">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-[#800000] mb-3 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-[#E75480]">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 sm:w-5 sm:h-5 ${i < 5 ? 'fill-current' : ''}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-3 mt-auto">
                    <Link href={`/services/${service.id}`} className="flex-1">
                      <Button 
                        variant="outline" 
                        className="w-full border-[#4B2E2E] bg-white/70 hover:bg-[#E0116F]/10 hover:border-[#E0116F] hover:text-[#E75480] transition-all duration-300 group text-sm sm:text-base font-medium py-2 rounded-full"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                    <Button 
                      className="flex-1 bg-[#E75480] hover:bg-[#FF00FF] text-white font-medium shadow-md hover:shadow-lg transition-all text-sm sm:text-base py-2 rounded-full"
                    >
                      {content.common.bookNow}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/services">
            <Button 
              variant="outline"
              className="border-[#4B2E2E] text-[#E75480] hover:bg-[#E0116F]/10 hover:text-[#E0116F] font-semibold px-8 sm:px-10 py-5 sm:py-6 rounded-full group transition-all duration-300 text-base sm:text-lg"
            >
              <span>{content.common.viewAll}</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}