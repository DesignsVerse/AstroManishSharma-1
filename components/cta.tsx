"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { CalendarDays, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ConsultationBanner() {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const content = {
    en: {
      title: "Book a Consultation with India's Top Astrologer!",
      description: "Experience the power of pure astrology with our expert services, including kundali analysis, palm reading, face reading, and personalized online consultations for your cosmic journey.",
      button: "Book Now"
    },
    hi: {
      title: "भारत के शीर्ष ज्योतिषी के साथ परामर्श बुक करें!",
      description: "हमारी विशेषज्ञ सेवाओं के साथ शुद्ध ज्योतिष की शक्ति का अनुभव करें, जिसमें कुंडली विश्लेषण, हस्तरेखा, चेहरा पढ़ना और आपकी आध्यात्मिक यात्रा के लिए व्यक्तिगत ऑनलाइन परामर्श शामिल हैं।",
      button: "अभी बुक करें"
    }
  }[language];

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
    <motion.div 
      className="relative bg-gradient-to-l from-[#F0DF20]/10 to-[#F5C742]/5 border border-[#F0DF20]/20 rounded-2xl overflow-hidden my-6 sm:my-8"
      initial="hidden"
      animate={isMounted ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image - Top (Mobile) or Left (Desktop) */}
          <motion.div 
            className="lg:w-2/5 h-full"
          >
            <div className="relative w-full min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]">
              <motion.img 
                src="/astrology-consultation.jpg" 
                alt="Astrologer consultation"
                className="h-full w-full object-cover object-center rounded-b-2xl lg:rounded-b-none lg:rounded-l-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
          
          {/* Text Content - Bottom (Mobile) or Right (Desktop) */}
          <motion.div 
            className="lg:w-3/5 p-4 sm:p-6 lg:p-8"
          >
            <motion.h3 
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 font-serif bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-[#F0DF20]"
            >
              {content.title}
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {content.description}
            </motion.p>
            <motion.div>
              <Button 
                className="w-full sm:w-auto bg-gradient-to-r from-[#F0DF20] to-[#F5C742] hover:from-[#F5C742] hover:to-[#F0DF20] text-gray-900 font-semibold text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                {content.button}
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-3 left-3 text-[#F0DF20]/30 text-2xl sm:text-3xl"
        animate={{
          y: [0, -5, 0],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        ☿
      </motion.div>
      <motion.div 
        className="absolute bottom-3 right-3 text-[#F0DF20]/30 text-2xl sm:text-3xl"
        animate={{
          y: [0, 5, 0],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        ♃
      </motion.div>
      <motion.div 
        className="absolute top-1/3 right-1/4 w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-[#F0DF20]/10 blur-lg sm:blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}