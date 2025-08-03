"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { globalContent as enContent } from '@/data/globalContent/en';
import { globalContent as hiContent } from '@/data/globalContent/hi';
import { useEffect, useRef, useState } from 'react';
import { Sparkles, Star, Zap, Award, Users, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const achievements = {
  en: [
    { number: 15, label: "Years of Experience", suffix: "+", icon: <Award className="w-6 h-6" /> },
    { number: 5000, label: "Happy Clients", suffix: "+", icon: <Users className="w-6 h-6" /> },
    { number: 95, label: "Accuracy Rate", suffix: "%", icon: <CheckCircle className="w-6 h-6" /> },
    { number: 1000, label: "Success Stories", suffix: "+", icon: <Zap className="w-6 h-6" /> }
  ],
  hi: [
    { number: 15, label: "वर्षों का अनुभव", suffix: "+", icon: <Award className="w-6 h-6" /> },
    { number: 5000, label: "खुश ग्राहक", suffix: "+", icon: <Users className="w-6 h-6" /> },
    { number: 95, label: "सटीकता दर", suffix: "%", icon: <CheckCircle className="w-6 h-6" /> },
    { number: 1000, label: "सफलता की कहानियां", suffix: "+", icon: <Zap className="w-6 h-6" /> }
  ]
};

export default function AchievementsSection() {
  const { language } = useLanguage();
  const content = language === 'en' ? enContent : hiContent;
  const achievementData = achievements[language];
  const [counts, setCounts] = useState(achievementData.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      achievementData.forEach((achievement, index) => {
        const target = achievement.number;
        const increment = target / 50;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }, 20);
      });
    }
  }, [isVisible, achievementData]);

  return (
    <section ref={sectionRef} className="relative py-28 bg-gradient-to-b from-[#0F0F12] to-[#1A1A24] overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Stars */}
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          />
        ))}
        
        {/* Cosmic Energy Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#F0DF20]/10 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#8A4FFF]/10 blur-[80px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      {/* Sacred Symbols Floating */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['🕉', '☯', '♆', '☸', '✡'].map((symbol, i) => (
          <motion.div 
            key={i}
            className="absolute text-[#FFFFFF]/10 text-5xl"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${3 + Math.random() * 4}rem`,
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
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8 }
            }
          }}
        >
          <motion.div 
            className="inline-flex items-center bg-[#FFFFFF]/10 backdrop-blur-lg px-5 py-3 rounded-full border border-[#FFFFFF]/20 mb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-5 h-5 text-[#F0DF20] mr-2" />
            <span className="text-[#FFFFFF] font-medium tracking-wider">
              { "Our Cosmic Legacy"}
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif tracking-tight"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.8, delay: 0.2 }
              }
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] via-[#F0DF20] to-[#FFFFFF]">
              {content.achievements.title.split(' ').slice(0, -1).join(' ')}
            </span>{' '}
            <span className="text-[#F0DF20]">{content.achievements.title.split(' ').pop()}</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-[#FFFFFF]/80 max-w-3xl mx-auto leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.8, delay: 0.4 }
              }
            }}
          >
            {content.achievements.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-[#FFFFFF]/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-[#FFFFFF]/10 shadow-2xl hover:shadow-3xl hover:border-[#F0DF20]/30 transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievementData.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="text-center relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#F0DF20]/10 rounded-full flex items-center justify-center">
                    {achievement.icon}
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-[#F0DF20] mb-4 font-serif">
                    {counts[index]}
                    <span className="text-3xl">{achievement.suffix}</span>
                  </div>
                  <div className="text-[#FFFFFF] font-medium text-lg">
                    {achievement.label}
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-[#F0DF20] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.p 
          className="text-center mt-16 text-xl md:text-2xl text-[#F0DF20] font-serif italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {language === 'en' ? "Guiding your cosmic journey with divine wisdom" : "दिव्य ज्ञान के साथ आपकी कॉस्मिक यात्रा का मार्गदर्शन"}
        </motion.p>
      </div>
    </section>
  );
}