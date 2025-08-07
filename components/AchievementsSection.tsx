"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { globalContent as enContent } from '@/data/globalContent/en';
import { globalContent as hiContent } from '@/data/globalContent/hi';
import { useEffect, useRef, useState } from 'react';
import { Sparkles, Star, Zap, Award, Users, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const achievements = {
  en: [
    { number: 10, label: "Years of Experience", suffix: "+", icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: 5000, label: "Happy Clients", suffix: "+", icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: 5, label: "Accuracy Rate", suffix: "%", icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: 1000, label: "Success Stories", suffix: "+", icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" /> }
  ],
  hi: [
    { number: 15, label: "वर्षों का अनुभव", suffix: "+", icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: 5000, label: "खुश ग्राहक", suffix: "+", icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: 95, label: "सटीकता दर", suffix: "%", icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: 1000, label: "सफलता की कहानियां", suffix: "+", icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" /> }
  ]
};

export default function AchievementsSection() {
  const { language } = useLanguage();
  const content = language === 'en' ? enContent : hiContent;
  const achievementData = achievements[language];
  const [counts, setCounts] = useState(achievementData.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Smooth counting animation
  useEffect(() => {
    if (isVisible) {
      achievementData.forEach((achievement, index) => {
        const target = achievement.number;
        const duration = 2000; // 2 seconds
        const steps = 60; // 60 frames for smooth animation
        const increment = target / steps;
        let current = 0;
        let frame = 0;

        const animate = () => {
          if (frame >= steps) return;
          current += increment;
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.min(Math.floor(current), target);
            return newCounts;
          });
          frame++;
          requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
      });
    }
  }, [isVisible, achievementData]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 bg-gradient-to-b from-[#0F0F12] to-[#1A1A24] overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Stars */}
        {[...Array(40)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
        
        {/* Cosmic Energy Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[#F0DF20]/15 blur-lg sm:blur-xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-[#8A4FFF]/15 blur-lg sm:blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Sacred Symbols Floating */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['🕉', '☯', '♆', '☸', '✡'].map((symbol, i) => (
          <motion.div 
            key={i}
            className="absolute text-[#F0DF20]/10 text-3xl sm:text-4xl"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, 0],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      <div className="container  mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        <motion.div 
          className="text-center mb-10 sm:mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="inline-flex items-center bg-[#F0DF20]/10 backdrop-blur-lg px-4 sm:px-5 py-2 sm:py-3 rounded-full border border-[#F0DF20]/20 mb-4 sm:mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#F0DF20] mr-2" />
            <span className="text-white font-medium text-sm sm:text-base tracking-wider">
              {"Our Cosmic Legacy"}
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white  mb-4 sm:mb-6 font-serif tracking-tight"
          >
            <span className="bg-clip-text pt-4 text-transparent bg-gradient-to-r from-[#FFFFFF] via-[#F0DF20] to-[#F5C742]">
              {content.achievements.title.split(' ').slice(0, -1).join(' ')}
            </span>{' '}
            <span className="text-[#F0DF20]">{content.achievements.title.split(' ').pop()}</span>
          </motion.h2>
          
          <motion.p 
            className="text-sm sm:text-base lg:text-lg text-[#FFFFFF]/80 max-w-xl sm:max-w-2xl mx-auto leading-relaxed"
          >
            {content.achievements.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-[#FFFFFF]/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#F0DF20]/10 shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {achievementData.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="text-center relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="absolute -top-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 bg-[#F0DF20]/10 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {achievement.icon}
                  </motion.div>
                  <div className="text-4xl sm:text-5xl font-bold text-[#F0DF20] mb-3 font-serif">
                    {counts[index]}
                    <span className="text-2xl sm:text-3xl">{achievement.suffix}</span>
                  </div>
                  <div className="text-white font-medium text-sm sm:text-base">
                    {achievement.label}
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 bg-gradient-to-r from-transparent via-[#F0DF20] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="text-center mt-8 sm:mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.p 
            className="text-sm sm:text-base text-[#F0DF20] font-serif italic mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            {language === 'en' ? "Guiding your cosmic journey with divine wisdom" : "दिव्य ज्ञान के साथ आपकी कॉस्मिक यात्रा का मार्गदर्शन"}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}