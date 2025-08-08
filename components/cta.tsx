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
      title: "Seek Maa Baglamukhi’s Blessings with Pandit Manish Sharma Ji!",
      description: "Experience divine guidance with Pandit Manish Sharma Ji at Maa Baglamukhi Nalkheda Mandir. Book your puja, including Maa Baglamukhi Havan or Shatru Vinash Puja, for protection, prosperity, and spiritual growth.",
      button: "Book Puja Now"
    },
    hi: {
      title: "पंडित मनीष शर्मा जी के साथ माँ बगलामुखी का आशीर्वाद प्राप्त करें!",
      description: "माँ बगलामुखी नलखेड़ा मंदिर में पंडित मनीष शर्मा जी के साथ दिव्य मार्गदर्शन का अनुभव करें। सुरक्षा, समृद्धि और आध्यात्मिक विकास के लिए माँ बगलामुखी हवन या शत्रु विनाश पूजा बुक करें।",
      button: "पूजा अभी बुक करें"
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
      className="relative bg-gradient-to-l from-[#4B2E2E] to-[#800000] border border-[#E0116F]/20  overflow-hidden my- sm:my-8"
      initial="hidden"
      animate={isMounted ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image - Top (Mobile) or Left (Desktop) */}
          <motion.div 
            className="lg:w-2/5 h-full"
                      >
            <div className="relative w-full min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]">
              <motion.img 
                src="/home/cta.jpg" 
                alt="Astrologer consultation"
                className="h-full w-full object-cover object-center rounded-b-2xl lg:rounded-b-none lg:rounded-l-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4B2E2E]/30 to-transparent" />
              <div className="absolute top-3 right-3 text-[#E75480]/50 text-2xl group-hover:text-[#E75480]/80">🕉</div>
            </div>
          </motion.div>
          
          {/* Text Content - Bottom (Mobile) or Right (Desktop) */}
          <motion.div 
            className="lg:w-3/5 p-6 sm:p-8 lg:p-10"
                      >
            <motion.h3 
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#F7CAC9] mb-4 font-serif bg-clip-text text-transparent bg-gradient-to-r from-[#F7CAC9] to-[#E0116F]"
                          >
              {content.title}
            </motion.h3>
            <motion.p 
              className="text-[#FFD1DC] mb-6 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
                          >
              {content.description}
            </motion.p>
            <motion.div >
              <Button 
                className="w-full sm:w-auto bg-[#E75480] hover:bg-[#FF00FF] text-white font-semibold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <CalendarDays className="w-5 h-5 mr-2" />
                {content.button}
                <Sparkles className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-3 left-3 text-[#E0116F]/20 text-2xl sm:text-3xl"
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
        className="absolute bottom-3 right-3 text-[#E0116F]/20 text-2xl sm:text-3xl"
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
        className="absolute top-1/3 right-1/4 w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-[#E0116F]/10 blur-lg sm:blur-xl"
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