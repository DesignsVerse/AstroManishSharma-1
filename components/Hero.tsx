"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { globalContent as enContent } from '@/data/globalContent/en';
import { globalContent as hiContent } from '@/data/globalContent/hi';
import { Button } from '@/components/ui/button';
import { Star, Phone, MessageCircle, Sparkles, ChevronRight, Award, ShieldCheck } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const { language } = useLanguage();
  const content = language === 'en' ? enContent : hiContent;
  const [isMounted, setIsMounted] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsMounted(true);
    controls.start("visible");
  }, [controls]);

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 0.77, 0.47, 0.97]
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#F0DF20]/10 blur-[80px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-[#8A4FFF]/10 blur-[80px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image on Left */}
          <motion.div 
            className="order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-4 bg-[#F0DF20]/10 rounded-3xl blur-xl z-0"
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Main Image */}
              <motion.div 
                className="relative z-10 overflow-hidden rounded-2xl shadow-lg border-4 border-white"
                whileHover={{ scale: 1.01 }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/manish.jpg"
                    alt="Pandit Manish Sharma"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                {/* Experience Badge */}
                <motion.div
                  className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm flex items-center border border-gray-100"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <Star className="w-5 h-5 text-[#F0DF20] fill-current mr-2" />
                  <span className="font-medium text-gray-800">25+ {content.common.years}</span>
                </motion.div>
                
                {/* Name Plate */}
                <motion.div 
                  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-md"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-bold text-gray-900">
                      Pandit Manish Sharma
                    </h3>
                    <p className="text-sm font-medium text-gray-600">
                      {content.common.astrologyExpert}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content on Right */}
          <motion.div 
            className="order-2 text-center lg:text-left space-y-8"
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div className="space-y-6" variants={containerVariants}>
              {/* Premium Badge */}
              <motion.div 
                className="inline-flex items-center bg-[#F0DF20]/10 px-5 py-2 rounded-full border border-[#F0DF20]/20"
                whileHover={{ y: -2 }}
              >
                <Sparkles className="w-5 h-5 text-[#F0DF20] mr-2" />
                <span className="text-gray-800 font-medium">
                  {content.hero.badgeText}
                </span>
              </motion.div>
              
              {/* Headline */}
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                <span className="block">{content.hero.title.split(' ').slice(0, 3).join(' ')}</span>
                <span className="text-[#F0DF20]">{content.hero.title.split(' ').slice(3).join(' ')}</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-600 max-w-2xl leading-relaxed"
              >
                {content.hero.description}
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              variants={containerVariants}
            >
              <motion.div 
                className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center"
                whileHover={{ y: -3 }}
              >
                <div className="bg-[#F0DF20]/10 p-3 rounded-full mb-2">
                  <Award className="w-6 h-6 text-[#F0DF20]" />
                </div>
                <p className="text-2xl font-bold text-gray-900">25+</p>
                <p className="text-sm text-gray-500">{content.common.years}</p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center"
                whileHover={{ y: -3 }}
              >
                <div className="bg-[#8A4FFF]/10 p-3 rounded-full mb-2">
                  <ShieldCheck className="w-6 h-6 text-[#8A4FFF]" />
                </div>
                <p className="text-2xl font-bold text-gray-900">10K+</p>
                <p className="text-sm text-gray-500">{content.common.clients}</p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center"
                whileHover={{ y: -3 }}
              >
                <div className="bg-[#FF4F6E]/10 p-3 rounded-full mb-2">
                  <Star className="w-6 h-6 text-[#FF4F6E] fill-current" />
                </div>
                <p className="text-2xl font-bold text-gray-900">5.0</p>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
              variants={containerVariants}
            >
              <motion.div  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="lg"
                  className="bg-[#F0DF20] hover:bg-[#F0DF20]/90 text-gray-900 font-bold px-8 py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  {content.hero.cta}
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
              </motion.div>
              
              <motion.div  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold px-8 py-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  {content.common.callNow}
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}