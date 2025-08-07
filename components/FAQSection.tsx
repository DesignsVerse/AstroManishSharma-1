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
      question: "What is the significance of Maa Baglamukhi Nalkheda Mandir?",
      answer: "Maa Baglamukhi Nalkheda Mandir is one of the three major Baglamukhi Siddhapeeths in India, renowned for its divine energy and blessings. Devotees visit to seek protection, victory over obstacles, and fulfillment of desires through Maa Baglamukhi’s powerful grace."
    },
    {
      id: 2,
      question: "Who is Deepak Ji, and what is his role at the temple?",
      answer: "Deepak Ji is a revered spiritual guide at Maa Baglamukhi Nalkheda Mandir, known for his expertise in Vedic Havan and Tantra-Mantra rituals. He assists devotees in performing authentic pujas and provides spiritual guidance to overcome life’s challenges."
    },
    {
      id: 3,
      question: "What types of rituals are performed at Maa Baglamukhi Mandir?",
      answer: "The temple offers a variety of rituals, including Maa Baglamukhi Havan, Shatru Vinash Puja, and Lakshmi Prapti Puja, all conducted with traditional Vedic methods to invoke Maa Baglamukhi’s blessings for prosperity, protection, and success."
    },
    {
      id: 4,
      question: "How can I participate in pujas at the temple?",
      answer: "Devotees can participate in pujas by visiting the temple or booking online consultations with Deepak Ji. You’ll need to provide your name and specific intentions for the ritual, which will be performed on your behalf with utmost devotion."
    },
    {
      id: 5,
      question: "What are the benefits of Maa Baglamukhi’s blessings?",
      answer: "Maa Baglamukhi’s blessings offer protection from enemies, resolution of legal disputes, financial stability, and spiritual growth. Devotees experience peace, strength, and success through the divine energy of the Siddhapeeth."
    }
  ],
  hi: [
    {
      id: 1,
      question: "माँ बगलामुखी नलखेड़ा मंदिर का महत्व क्या है?",
      answer: "माँ बगलामुखी नलखेड़ा मंदिर भारत के तीन प्रमुख बगलामुखी सिद्धपीठों में से एक है, जो अपनी दिव्य ऊर्जा और आशीर्वाद के लिए प्रसिद्ध है। भक्त यहाँ सुरक्षा, बाधाओं पर विजय, और इच्छाओं की पूर्ति के लिए माँ बगलामुखी की कृपा प्राप्त करने आते हैं।"
    },
    {
      id: 2,
      question: "दीपक जी कौन हैं, और मंदिर में उनकी क्या भूमिका है?",
      answer: "दीपक जी माँ बगलामुखी नलखेड़ा मंदिर में एक सम्मानित आध्यात्मिक मार्गदर्शक हैं, जो वैदिक हवन और तंत्र-मंत्र अनुष्ठानों में अपनी विशेषज्ञता के लिए जाने जाते हैं। वे भक्तों को प्रामाणिक पूजा करने में सहायता करते हैं और जीवन की चुनौतियों को पार करने के लिए आध्यात्मिक मार्गदर्शन प्रदान करते हैं।"
    },
    {
      id: 3,
      question: "माँ बगलामुखी मंदिर में किस प्रकार के अनुष्ठान किए जाते हैं?",
      answer: "मंदिर में विभिन्न अनुष्ठान किए जाते हैं, जिनमें माँ बगलामुखी हवन, शत्रु विनाश पूजा, और लक्ष्मी प्राप्ति पूजा शामिल हैं। ये सभी पारंपरिक वैदिक विधियों से किए जाते हैं ताकि समृद्धि, सुरक्षा, और सफलता के लिए माँ बगलामुखी का आशीर्वाद प्राप्त हो।"
    },
    {
      id: 4,
      question: "मैं मंदिर में पूजा में कैसे भाग ले सकता हूँ?",
      answer: "भक्त मंदिर में आकर या दीपक जी के साथ ऑनलाइन परामर्श बुक करके पूजा में भाग ले सकते हैं। आपको अपना नाम और अनुष्ठान के लिए विशिष्ट उद्देश्य प्रदान करना होगा, जिसे आपके लिए पूरी श्रद्धा के साथ किया जाएगा।"
    },
    {
      id: 5,
      question: "माँ बगलामुखी के आशीर्वाद के क्या लाभ हैं?",
      answer: "माँ बगलामुखी का आशीर्वाद शत्रुओं से सुरक्षा, कानूनी विवादों का समाधान, वित्तीय स्थिरता, और आध्यात्मिक विकास प्रदान करता है। भक्त सिद्धपीठ की दिव्य ऊर्जा के माध्यम से शांति, शक्ति, और सफलता का अनुभव करते हैं।"
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