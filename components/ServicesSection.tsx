"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { globalContent as enContent } from '@/data/globalContent/en';
import { globalContent as hiContent } from '@/data/globalContent/hi';
import { services as enServices } from '@/data/services/en';
import { services as hiServices } from '@/data/services/hi';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Star, Clock, Gem, Zap } from 'lucide-react';
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
    <section className="relative py-20 bg-gradient-to-b from-[#f9f9f9] to-[#f1f1f1] overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Sacred Symbols */}
        {['☯', '🕉', '♆', '☸', '✡'].map((symbol, i) => (
          <motion.div 
            key={i}
            className="absolute text-[#F0DF20]/10 text-5xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${3 + Math.random() * 3}rem`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 15, 0],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {symbol}
          </motion.div>
        ))}
        
        {/* Energy Orbs */}
        <motion.div 
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#F0DF20]/5 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="inline-flex items-center bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full border border-[#F0DF20]/30 shadow-sm mb-6"
          >
            <Sparkles className="w-5 h-5 text-[#F0DF20] mr-2" />
            <span className="text-sm font-medium text-gray-800 tracking-wider">
              {content.services?.badgeText || "Divine Services"}
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 font-serif"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
              {content.services.title.split(' ').slice(0, -1).join(' ')}
            </span>{' '}
            <span className="text-[#F0DF20]">{content.services.title.split(' ').pop()}</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            {content.services.subtitle}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {services.slice(0, 6).map((service) => (
            <motion.div 
              key={service.id}
              className="group relative"
              whileHover={{ y: -5 }}
            >
              {/* Glassmorphism Card */}
              <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 group-hover:shadow-xl">
                {/* Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#F0DF20]/10 rounded-full blur-xl" />
                </div>
                
                {/* Card Content */}
                <div className="relative p-7 h-full flex flex-col">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 flex items-center justify-center bg-[#F0DF20]/10 rounded-xl mb-4 shadow-inner">
                      <span className="text-3xl text-[#F0DF20]">{service.icon}</span>
                    </div>
                    <span className="text-xs font-medium bg-[#F0DF20]/10 text-gray-800 px-3 py-1.5 rounded-full flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {service.duration}
                    </span>
                  </div>
                  
                  {/* Service Details */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 font-serif mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                      {service.shortDescription}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-bold text-gray-900 text-lg">
                        {service.price}
                      </span>
                      <div className="flex items-center text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < 1 ? 'fill-current' : ''}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-3 mt-auto">
                    <Link href={`/services/${service.slug}`} className="flex-1">
                      <Button 
                        variant="outline" 
                        className="w-full border-gray-300 bg-white/70 hover:bg-white text-gray-800 hover:border-[#F0DF20] hover:text-[#F0DF20] transition-all duration-300 group"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                    <Button 
                      className="flex-1 bg-gradient-to-r from-[#F0DF20] to-[#F5C742] hover:from-[#F5C742] hover:to-[#F0DF20] text-gray-900 font-medium shadow-md hover:shadow-lg transition-all"
                    >
                      {content.common.bookNow}
                    </Button>
                  </div>
                </div>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-[#F0DF20] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              
            
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/services">
            <Button 
              variant="outline"
              className="border-[#F0DF20] text-[#F0DF20] hover:bg-[#F0DF20]/10 hover:text-gray-900 font-medium px-8 py-6 rounded-xl group transition-all duration-300"
            >
              <span>{content.common.viewAll} Services</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}