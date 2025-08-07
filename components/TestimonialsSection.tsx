"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { globalContent as enContent } from '@/data/globalContent/en';
import { globalContent as hiContent } from '@/data/globalContent/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = {
  en: [
    {
      id: 1,
      name: "Rajesh K.",
      location: "Delhi",
      rating: 5,
      text: "Life-changing guidance. The astrological analysis was incredibly accurate and the remedies transformed my life completely.",
      image: "https://images.pexels.com/photos/8566445/pexels-photo-8566445.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      id: 2,
      name: "Priya S.",
      location: "Mumbai",
      rating: 5,
      text: "The recommended gemstones worked wonders. My relationships improved dramatically and my career took an upward turn.",
      image: "https://images.pexels.com/photos/8566451/pexels-photo-8566451.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      id: 3,
      name: "Amit P.",
      location: "Ahmedabad",
      rating: 5,
      text: "The Vastu consultation was exceptional. My home now radiates positive energy and we've never been happier.",
      image: "https://images.pexels.com/photos/8566453/pexels-photo-8566453.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      id: 4,
      name: "Neha G.",
      location: "Bangalore",
      rating: 5,
      text: "My anxiety reduced significantly after following the spiritual guidance. I feel deeply connected to the universe now.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      id: 5,
      name: "Vikram S.",
      location: "Chennai",
      rating: 5,
      text: "The personalized horoscope was spot on. It helped me make crucial life decisions with confidence.",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      id: 6,
      name: "Anjali R.",
      location: "Kolkata",
      rating: 5,
      text: "The spiritual rituals suggested brought peace to my family. I highly recommend their services.",
      image: "https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ],
  hi: [
    {
      id: 1,
      name: "राजेश कु.",
      location: "दिल्ली",
      rating: 5,
      text: "जीवन बदल देने वाला मार्गदर्शन। ज्योतिषीय विश्लेषण अविश्वसनीय रूप से सटीक था और उपायों ने मेरा जीवन पूरी तरह बदल दिया।",
      image: "https://images.pexels.com/photos/8566445/pexels-photo-8566445.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      id: 2,
      name: "प्रिया श.",
      location: "मुंबई",
      rating: 5,
      text: "सुझाए गए रत्नों ने चमत्कार कर दिया। मेरे रिश्तों में नाटकीय सुधार हुआ और मेरा करियर ऊपर की ओर बढ़ गया।",
      image: "https://images.pexels.com/photos/8566451/pexels-photo-8566451.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      id: 3,
      name: "अमित प.",
      location: "अहमदाबाद",
      rating: 5,
      text: "वास्तु परामर्श असाधारण था। मेरा घर अब सकारात्मक ऊर्जा से भरा है और हम पहले से कहीं अधिक खुश हैं।",
      image: "https://images.pexels.com/photos/8566453/pexels-photo-8566453.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      id: 4,
      name: "नेहा गु.",
      location: "बैंगलोर",
      rating: 5,
      text: "आध्यात्मिक मार्गदर्शन का पालन करने के बाद मेरी चिंता काफी कम हो गई। मैं अब ब्रह्मांड से गहराई से जुड़ा हुआ महसूस करती हूं।",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      id: 5,
      name: "विक्रम स.",
      location: "चेन्नई",
      rating: 5,
      text: "वैयक्तिकृत कुंडली बिल्कुल सटीक थी। इसने मुझे आत्मविश्वास के साथ महत्वपूर्ण जीवन निर्णय लेने में मदद की।",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      id: 6,
      name: "अंजलि र.",
      location: "कोलकाता",
      rating: 5,
      text: "सुझाए गए आध्यात्मिक अनुष्ठानों ने मेरे परिवार में शांति लाई। मैं उनकी सेवाओं की अत्यधिक अनुशंसा करता हूं।",
      image: "https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ]
};

export default function TestimonialsSection() {
  const { language } = useLanguage();
  const content = language === 'en' ? enContent : hiContent;
  const testimonialData = testimonials[language];
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, [testimonialData.length]);

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0F0F12] to-[#1A1A24] overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
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
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center bg-[#FFFFFF]/10 backdrop-blur-sm px-5 py-2 rounded-full border border-[#F0DF20]/30 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-[#F0DF20] mr-2" />
            <span className="text-sm  font-medium text-white tracking-wider">
              {content.testimonials.badgeText}
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-clip-text pt-4 text-transparent bg-gradient-to-r from-[#FFFFFF] via-[#F0DF20] to-[#FFFFFF]">
              {content.testimonials.title.split(' ').slice(0, -1).join(' ')}
            </span>{' '}
            <span className="text-[#F0DF20]">{content.testimonials.title.split(' ').pop()}</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-[#FFFFFF]/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {content.testimonials.subtitle}
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="wait">
              {testimonialData.slice(activeIndex, activeIndex + (window.innerWidth < 1024 ? 1 : 4)).map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6 }}
                  className={window.innerWidth < 1024 ? "block" : index < 4 ? "block" : "hidden"}
                >
                  <div className="relative h-full bg-[#FFFFFF]/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-[#FFFFFF]/10 hover:border-[#F0DF20]/30 transition-all duration-300 p-6">
                    <Quote className="absolute top-6 right-6 w-8 h-8 text-[#F0DF20]/20" />
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="flex-grow mb-6">
                        <p className="text-white/90 text-lg leading-relaxed mb-6">
                          "{testimonial.text}"
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-[#F0DF20]"
                          />
                          <div>
                            <h4 className="font-semibold text-white">{testimonial.name}</h4>
                            <p className="text-[#FFFFFF]/60 text-sm">{testimonial.location}</p>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-[#F0DF20] fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 border-2 border-[#F0DF20] rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}