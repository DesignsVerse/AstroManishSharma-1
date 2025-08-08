"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { globalContent as enContent } from '@/data/globalContent/en';
import { globalContent as hiContent } from '@/data/globalContent/hi';
import { Button } from '@/components/ui/button';
import { Star, Phone, MessageCircle, Sparkles, ChevronRight, Award, ShieldCheck, Heart } from 'lucide-react';
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 0.77, 0.47, 0.97]
      }
    }
  };

  return (
    <section className="relative min-h-[90vh] pt-20 flex items-center justify-center  bg-white">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-[#FFD700]/10 blur-[60px] sm:blur-[80px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-[#F7CAC9]/10 blur-[60px] sm:blur-[80px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Image on Top (Mobile) or Left (Desktop) */}
          <motion.div
            className="order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[460px] lg:max-w-md mx-auto">
              <motion.div
                className="absolute -inset-3 bg-gradient-to-br from-[#E0116F]/10 to-[#FFD700]/10 rounded-3xl blur-lg sm:blur-xl z-0"
                animate={{
                  opacity: [0.1, 0.15, 0.1],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="relative z-10 overflow-hidden rounded-2xl shadow-xl border-4 border-[#FFD700]/30"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4B2E2E]/20 to-transparent" />
                </div>
                <motion.div
                  className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm flex items-center border border-[#FFD700]/30"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFD700] fill-current mr-1 sm:mr-2" />
                  <span className="font-medium text-[#4B2E2E] text-xs sm:text-sm">25+ {content.common.years}</span>
                </motion.div>
                <motion.div
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 rounded-xl shadow-md"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex flex-col items-center w-full">
                    <h3 className="text-base sm:text-lg font-bold text-[#4B2E2E]">
                      Pandit Manish Sharma
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#800000]">
                      {content.common.astrologyExpert}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content on Bottom (Mobile) or Right (Desktop) */}
          <motion.div
            className="order-2 text-center lg:text-left space-y-6 sm:space-y-8"
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div className="space-y-4" variants={containerVariants}>
              <motion.div
                className="inline-flex items-center bg-[#E0116F]/10 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border border-[#FFD700]/30"
                whileHover={{ y: -2 }}
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFD700] mr-2" />
                <span className="text-[#4B2E2E] font-medium text-xs sm:text-sm">
                  {content.hero.badgeText}
                </span>
              </motion.div>
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#4B2E2E] leading-tight max-w-full sm:max-w-lg lg:max-w-xl mx-auto lg:mx-0 overflow-wrap break-words"
              >
                <span className="block pt-4 bg-clip-text text-transparent bg-gradient-to-r from-[#E0116F] to-[#FFD700]">
                  {content.hero.title.split(' ').slice(0, 3).join(' ')}
                </span>
                <span className="text-[#E75480]">{content.hero.title.split(' ').slice(3).join(' ')}</span>
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg text-[#800000] max-w-full sm:max-w-md lg:max-w-lg leading-relaxed mx-auto lg:mx-0"
              >
                {content.hero.description}
              </motion.p>
            </motion.div>
            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={containerVariants}
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#E75480] hover:bg-[#FF00FF] text-white font-bold px-6 sm:px-8 py-4 sm:py-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group"
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  {content.hero.cta}
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-[#FFD700] text-[#4B2E2E] hover:bg-[#FFD700]/10 font-bold px-6 sm:px-8 py-4 sm:py-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
                >
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  {content.common.callNow}
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
              variants={containerVariants}
            >
              <motion.div
                className="bg-white p-3 sm:p-4 rounded-xl border border-[#FFD700]/20 flex flex-col items-center"
                whileHover={{ y: -3 }}
              >
                <div className="bg-[#E0116F]/10 p-2 rounded-full mb-2">
                  <Award className="w-5 h-5 text-[#FFD700]" />
                </div>
                <p className="text-xl font-bold text-[#4B2E2E]">25+</p>
                <p className="text-xs text-[#800000]">{content.common.years}</p>
              </motion.div>
              <motion.div
                className="bg-white p-3 sm:p-4 rounded-xl border border-[#FFD700]/20 flex flex-col items-center"
                whileHover={{ y: -3 }}
              >
                <div className="bg-[#E0116F]/10 p-2 rounded-full mb-2">
                  <ShieldCheck className="w-5 h-5 text-[#FFD700]" />
                </div>
                <p className="text-xl font-bold text-[#4B2E2E]">10K+</p>
                
              </motion.div>
              <motion.div
                className="bg-white p-3 sm:p-4 rounded-xl border border-[#FFD700]/20 flex flex-col items-center"
                whileHover={{ y: -3 }}
              >
                <div className="bg-[#E0116F]/10 p-2 rounded-full mb-2">
                  <Star className="w-5 h-5 text-[#FFD700] fill-current" />
                </div>
                <p className="text-xl font-bold text-[#4B2E2E]">5.0</p>
                {/* <p className="text-xs text-[#800000]">{content.common.rating}</p> */}
              </motion.div>
              <motion.div
                className="bg-white p-3 sm:p-4 rounded-xl border border-[#FFD700]/20 flex flex-col items-center lg:hidden"
                whileHover={{ y: -3 }}
              >
                <div className="bg-[#E0116F]/10 p-2 rounded-full mb-2">
                  <Heart className="w-5 h-5 text-[#FFD700] fill-current" />
                </div>
                <p className="text-xl font-bold text-[#4B2E2E]">100%</p>
                <p className="text-xs text-[#800000]">Satisfaction</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}