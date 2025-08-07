"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { globalContent as enContent } from '@/data/globalContent/en';
import { globalContent as hiContent } from '@/data/globalContent/hi';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Star, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const faqs = {
  en: [
    {
      id: 1,
      question: "What is Vedic Astrology?",
      answer: "Vedic Astrology, also known as Jyotish, is an ancient system of astrology that originated in India thousands of years ago. It's based on the position of celestial bodies at the time of birth and provides insights into personality, relationships, career, and life events."
    },
    {
      id: 2,
      question: "How accurate are astrological predictions?",
      answer: "The accuracy of astrological predictions depends on various factors including the astrologer's expertise, the quality of birth data, and the specific area of life being analyzed. With proper analysis and experienced interpretation, Vedic astrology can provide highly accurate insights."
    },
    {
      id: 3,
      question: "What information do I need for a consultation?",
      answer: "For an accurate astrological consultation, you'll need your exact birth date, time, and place. The more precise this information is, the more accurate your birth chart and predictions will be."
    },
    {
      id: 4,
      question: "Do gemstones really work?",
      answer: "Gemstones have been used in Vedic astrology for thousands of years as remedial measures. When prescribed correctly based on your birth chart, they can help balance planetary energies and bring positive changes to your life."
    },
    {
      id: 5,
      question: "How often should I consult an astrologer?",
      answer: "The frequency of consultations depends on your personal needs and life circumstances. Some people prefer annual consultations, while others may seek guidance during major life transitions or challenging periods."
    }
  ],
  hi: [
    {
      id: 1,
      question: "वैदिक ज्योतिष क्या है?",
      answer: "वैदिक ज्योतिष, जिसे ज्योतिष भी कहते हैं, एक प्राचीन ज्योतिष प्रणाली है जो हजारों साल पहले भारत में उत्पन्न हुई थी। यह जन्म के समय खगोलीय पिंडों की स्थिति पर आधारित है और व्यक्तित्व, रिश्तों, करियर और जीवन की घटनाओं में अंतर्दृष्टि प्रदान करता है।"
    },
    {
      id: 2,
      question: "ज्योतिषीय भविष्यवाणियां कितनी सटीक होती हैं?",
      answer: "ज्योतिषीय भविष्यवाणियों की सटीकता विभिन्न कारकों पर निर्भर करती है जिसमें ज्योतिषी की विशेषज्ञता, जन्म डेटा की गुणवत्ता, और विश्लेषण किए जा रहे जीवन के विशिष्ट क्षेत्र शामिल हैं। उचित विश्लेषण और अनुभवी व्याख्या के साथ, वैदिक ज्योतिष अत्यधिक सटीक अंतर्दृष्टि प्रदान कर सकता है।"
    },
    {
      id: 3,
      question: "परामर्श के लिए मुझे किस जानकारी की आवश्यकता है?",
      answer: "एक सटीक ज्योतिषीय परामर्श के लिए, आपको अपनी सटीक जन्म तारीख, समय और स्थान की आवश्यकता होगी। यह जानकारी जितनी सटीक होगी, आपकी जन्म कुंडली और भविष्यवाणियां उतनी ही सटीक होंगी।"
    },
    {
      id: 4,
      question: "क्या रत्न वास्तव में काम करते हैं?",
      answer: "रत्नों का उपयोग वैदिक ज्योतिष में हजारों वर्षों से उपचारात्मक उपाय के रूप में किया जाता रहा है। जब आपकी जन्म कुंडली के आधार पर सही तरीके से निर्धारित किए जाएं, तो वे ग्रहीय ऊर्जा को संतुलित करने और आपके जीवन में सकारात्मक बदलाव लाने में मदद कर सकते हैं।"
    },
    {
      id: 5,
      question: "मुझे कितनी बार ज्योतिषी से परामर्श करना चाहिए?",
      answer: "परामर्श की आवृत्ति आपकी व्यक्तिगत आवश्यकताओं और जीवन परिस्थितियों पर निर्भर करती है। कुछ लोग वार्षिक परामर्श पसंद करते हैं, जबकि अन्य प्रमुख जीवन परिवर्तन या चुनौतीपूर्ण अवधि के दौरान मार्गदर्शन चाह सकते हैं।"
    }
  ]
};

export default function FAQSection() {
  const { language } = useLanguage();
  const content = language === 'en' ? enContent : hiContent;
  const faqData = faqs[language];
  const [hoveredId, setHoveredId] = useState(null);

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
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#f9f9f9] to-[#f1f1f1] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/cosmic-pattern.svg')] bg-repeat opacity-10" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#F0DF20]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${1.5 + Math.random() * 1.5}rem`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [0.5, 0.7, 0.5]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          >
            {['☉', '☽', '☿', '♀', '♂', '♃', '♄', '♅', '♆', '♇', '⚸', '⚹'][i % 12]}
          </motion.div>
        ))}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-[#F0DF20]/15 blur-lg sm:blur-xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        {/* Animated Section Header */}
        <motion.div 
          className="text-center mb-10 sm:mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="inline-flex items-center bg-[#F0DF20]/10 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-3 rounded-full border border-[#F0DF20]/20 mb-4 sm:mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#F0DF20] mr-2" />
            <span className="text-gray-900  font-medium text-sm sm:text-base">
              {content.faq.title}
            </span>
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-serif tracking-tight"
          >
            <span className="bg-clip-text pt-4 text-transparent bg-gradient-to-r from-gray-900 to-[#F0DF20]">
              {content.faq.title.split(' ').slice(0, -1).join(' ')}
            </span>{' '}
            <span className=" text-[#F0DF20]">{content.faq.title.split(' ').pop()}</span>
          </motion.h2>
          <motion.p 
            className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed"
          >
            {content.faq.subtitle}
          </motion.p>
        </motion.div>

        {/* FAQ Accordion with Animations */}
        <div className="max-w-3xl sm:max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            <AnimatePresence>
              {faqData.map((faq) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: faq.id * 0.1 }}
                >
                  <AccordionItem 
                    value={faq.id.toString()} 
                    className="bg-white/90 backdrop-blur-sm rounded-xl border border-[#F0DF20]/20 shadow-md hover:shadow-lg hover:border-[#F0DF20]/40 transition-all duration-300"
                  >
                    <AccordionTrigger 
                      className="px-4 sm:px-6 py-4 sm:py-5 text-left hover:bg-[#F0DF20]/10 transition-colors [&[data-state=open]]:bg-[#F0DF20]/10 [&[data-state=open]]:text-gray-900"
                    >
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <motion.div 
                          className="w-8 h-8 sm:w-10 sm:h-10 bg-[#F0DF20]/20 rounded-full flex items-center justify-center"
                          animate={{ 
                            scale: hoveredId === faq.id ? 1.1 : 1,
                            rotate: hoveredId === faq.id ? 360 : 0
                          }}
                          transition={{ type: 'spring', stiffness: 200 }}
                        >
                          <span className="text-[#F0DF20] font-bold text-sm sm:text-base">{faq.id}</span>
                        </motion.div>
                        <span className="font-semibold text-base sm:text-lg text-gray-900">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-600 leading-relaxed text-sm sm:text-base">
                      <motion.div 
                        className="pl-8 sm:pl-10 border-l-2 border-[#F0DF20]"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {faq.answer}
                      </motion.div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </AnimatePresence>
          </Accordion>
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-8 sm:mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="/contact">
            <Button 
              className="bg-gradient-to-r from-[#F0DF20] to-[#F5C742] hover:from-[#F5C742] hover:to-[#F0DF20] text-gray-900 font-semibold text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              Ask More
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}