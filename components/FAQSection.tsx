"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { globalContent as enContent } from '@/data/globalContent/en';
import { globalContent as hiContent } from '@/data/globalContent/hi';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

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

  return (
    <section className="py-24 bg-[#ffffff] relative overflow-hidden">
      {/* Animated Background Symbols */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#F0DF20]"
            initial={{ 
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              scale: 0.5
            }}
            animate={{ 
              y: [0, -15, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut'
            }}
            style={{
              fontSize: `${2 + Math.random() * 2}rem`,
            }}
          >
            {['☉','☽','☿','♀','♂','♃','♄','♅','♆','♇','⚸','⚹'][i % 12]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Animated Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center bg-[#F0DF20]/20 px-6 py-3 rounded-full border border-[#F0DF20]/30 mb-6"
            whileHover={{ scale: 1.05, backgroundColor: '#F0DF20/30' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Star className="w-5 h-5 text-[#F0DF20] mr-2" />
            <span className="text-[#000000] font-medium">{content.faq.title}</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6 font-serif tracking-tight">
            {content.faq.title}
          </h2>
          <p className="text-lg text-[#000000]/80 max-w-3xl mx-auto">
            {content.faq.subtitle}
          </p>
        </motion.div>

        {/* FAQ Accordion with Animations */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
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
                    className="bg-white rounded-xl border border-[#F0DF20]/20 shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#F0DF20]/40"
                  >
                    <AccordionTrigger className="px-8 py-6 text-left hover:bg-[#F0DF20]/10 transition-colors [&[data-state=open]]:bg-[#F0DF20]/10 [&[data-state=open]]:text-[#000000]">
                      <div className="flex items-center space-x-4">
                        <motion.div 
                          className="w-10 h-10 bg-[#F0DF20]/20 rounded-full flex items-center justify-center"
                          animate={{ 
                            scale: hoveredId === faq.id ? 1.1 : 1,
                            rotate: hoveredId === faq.id ? 360 : 0
                          }}
                          transition={{ type: 'spring', stiffness: 200 }}
                        >
                          <span className="text-[#F0DF20] font-bold">{faq.id}</span>
                        </motion.div>
                        <span className="font-semibold text-lg text-[#000000]">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-6 text-[#000000]/80 leading-relaxed">
                      <motion.div 
                        className="pl-12 border-l-2 border-[#F0DF20]"
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
      </div>
    </section>
  );
}