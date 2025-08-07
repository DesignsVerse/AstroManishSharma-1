"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { globalContent as enContent } from '@/data/globalContent/en';
import { globalContent as hiContent } from '@/data/globalContent/hi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Star, Award, Users, BookOpen, MessageCircle, Quote, Globe, Home, Shield, CalendarDays, Cross } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
}

export default function About() {
  const { language } = useLanguage();
  const content = language === 'en' ? enContent : hiContent;

  // Temple strengths data
  const templeStrengths = language === 'en' ? [
    "One of only three Baglamukhi Siddhpeeths in the world",
    "Ancient temple with powerful spiritual energy",
    "Expert guidance from Pandit Manish Sharma",
    "Special rituals for victory over enemies",
    "Unique Navratri celebrations with rare traditions",
    "Situated on the banks of Lakshmana River"
  ] : [
    "दुनिया में केवल तीन बगलामुखी सिद्धपीठों में से एक",
    "शक्तिशाली आध्यात्मिक ऊर्जा वाला प्राचीन मंदिर",
    "पंडित मनीष शर्मा से विशेषज्ञ मार्गदर्शन",
    "शत्रुओं पर विजय के लिए विशेष अनुष्ठान",
    "अनोखी परंपराओं के साथ नवरात्रि उत्सव",
    "लक्ष्मणा नदी के तट पर स्थित"
  ];

  // Astrological services data
  const astroServices = language === 'en' ? [
    "Vedic Astrology Predictions",
    "Kundli Analysis & Remedies",
    "Vastu Shastra Consultations",
    "Numerology Guidance",
    "Palm Reading",
    "Gemstone Recommendations",
    "Muhurta Selection",
    "Horoscope Matching"
  ] : [
    "वैदिक ज्योतिष भविष्यवाणियाँ",
    "कुंडली विश्लेषण और उपाय",
    "वास्तु शास्त्र परामर्श",
    "अंक ज्योतिष मार्गदर्शन",
    "हस्तरेखा विज्ञान",
    "रत्न सुझाव",
    "मुहूर्त चयन",
    "कुंडली मिलान"
  ];

  const stats = [
    { value: "10+", label: language === 'en' ? "Years of Devotion" : "भक्ति के वर्ष", icon: CalendarDays },
    { value: "5000+", label: language === 'en' ? "Blessed Devotees" : "आशीर्वाद प्राप्त भक्त", icon: Users },
    { value: "4.9", label: language === 'en' ? "Devotee Rating" : "भक्त रेटिंग", icon: Star },
    { value: "15+", label: language === 'en' ? "Spiritual Awards" : "आध्यात्मिक पुरस्कार", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f5f5] to-[#e8e8e8] text-[#1a1a1a] relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#F0DF20]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${1 + Math.random() * 1}rem`
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [0.5, 0.7, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          >
            {['☉', '☽', '🕉', '卐', '⚡', '🌟'][i % 6]}
          </motion.div>
        ))}
      </div>

      <Header />
      
      <main className="pt-24 sm:pt-28">
        {/* Spiritual Introduction Section */}
        <section className="py-16 sm:py-20 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute -inset-6 bg-gradient-to-r from-[#F0DF20]/10 to-[#F5C742]/10 rounded-3xl blur-lg"></div>
                <img
                  src="/maa-baglamukhi-temple.jpg"
                  alt="Maa Baglamukhi Temple"
                  className="relative z-10 w-full rounded-2xl shadow-xl border-4 border-[#F0DF20]"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center bg-[#F0DF20]/10 px-6 py-3 rounded-xl border border-[#F0DF20]/20">
                  <Sparkles className="w-6 h-6 text-[#F0DF20] mr-3" />
                  <span className="text-[#F0DF20] font-semibold text-lg">
                    {language === 'en' ? 'Divine Connection' : 'दिव्य संबंध'}
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] font-serif leading-tight">
                  {language === 'en' ? 'Pandit Manish Sharma' : 'पंडित मनीष शर्मा'}
                </h1>
                
                <h2 className="text-2xl text-[#F0DF20] font-serif">
                  {language === 'en' 
                    ? 'Resident Priest, Maa Baglamukhi Temple, Nalkheda' 
                    : 'माँ बगलामुखी मंदिर, नलखेड़ा के पुजारी'}
                </h2>
                
                <p className="text-lg text-[#1a1a1a]/90 leading-relaxed">
                  {language === 'en' 
                    ? "From childhood, I have learned Vedic havan and tantra-mantra worship at the ashram in Maa Baglamukhi Temple. With deep devotion to Maa Baglamukhi, I have been performing havan, pujan and rituals for devotees' wishes for over 10 years. As the saying goes - 'No one leaves Baglamukhi's door empty-handed'." 
                    : "मैं पंडित मनीष शर्मा सर्व सिद्ध पीठ मां बगलामुखी मंदिर नलखेड़ा से मैं बचपन से ही माता रानी के प्रांगण में स्थित आश्रम से वैदिक हवन एवं तंत्र-मंत्र पूजा सीखी है एवं उनका गहन अध्ययन किया और शुरुआत से ही माता रानी के प्रति आस्था एवं अटूट विश्वास होने के साथ ही मैंने अपने कार्य कर्मकांड एवं हवन पूजन अनुष्ठान को माता रानी के दरबार में उन्हीं के आशीर्वाद से प्रारंभ किया है बगलामुखी पंडित के रूप में। ब्राह्मण कुल में जन्म लेने के नाते यह कार्य मुझे विरासत में भी मिला है मैं पिछले 10 वर्षों से यजमान की मनोकामना को पूर्ण करने हेतु हवन पूजन एवं अनुष्ठान का कार्य कर रहा हूं माँ बगलामुखी पूजा के साथ। माता रानी के आशीर्वाद से सभी यजमानो की मनोकामना भी माँ बगलामुखी मंदिर में पूर्ण हो रही है। एक कहावत प्रसिद्ध है की *बगला द्वारे जो भी आता खाली हाथ कोई नहीं जाता*। हम माता रानी मां बगलामुखी का आशीर्वाद प्राप्त हैं। जय मां बगलामुखी हमेशा सभी पर बनी रहे।"}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white/90 p-4 rounded-xl border border-[#F0DF20]/20 shadow-sm"
                    >
                      <div className="flex items-center">
                        <stat.icon className="w-6 h-6 text-[#F0DF20] mr-2" />
                        <div>
                          <p className="text-2xl font-bold text-[#1a1a1a]">{stat.value}</p>
                          <p className="text-sm text-[#1a1a1a]/80">{stat.label}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Temple Significance Section */}
        <section className="py-16 bg-gradient-to-b from-[#f1f1f1] to-[#f9f9f9]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <div className="inline-flex items-center bg-[#F0DF20]/10 px-6 py-3 rounded-xl border border-[#F0DF20]/20">
                <Home className="w-6 h-6 text-[#F0DF20] mr-3" />
                <span className="text-[#F0DF20] font-semibold text-lg">
                  {language === 'en' ? 'Sacred Siddhpeeth' : 'पवित्र सिद्धपीठ'}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mt-6 font-serif">
                {language === 'en' 
                  ? 'Maa Baglamukhi Temple, Nalkheda' 
                  : 'माँ बगलामुखी मंदिर, नलखेड़ा'}
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {templeStrengths.map((strength, i) => (
                <AnimatedCard key={i} delay={i * 0.1}>
                  <Card className="bg-white/90 border border-[#F0DF20]/20 hover:border-[#F0DF20]/40 h-full">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <Shield className="w-8 h-8 text-[#F0DF20] mt-1 flex-shrink-0" />
                      <p className="text-lg font-serif">{strength}</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-[#F0DF20] to-[#F5C742]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-serif">
              {language === 'en' 
                ? 'Seek Divine Guidance Today' 
                : 'आज ही दिव्य मार्गदर्शन प्राप्त करें'}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto font-serif">
              {language === 'en' 
                ? 'Connect with the divine energy of Maa Baglamukhi for solutions to your problems'
                : 'अपनी समस्याओं के समाधान के लिए माँ बगलामुखी की दिव्य ऊर्जा से जुड़ें'}
            </p>
            <Button className="bg-white hover:bg-gray-100 text-[#1a1a1a] font-semibold px-8 py-4 rounded-xl shadow-lg text-lg">
              <MessageCircle className="w-6 h-6 mr-3" />
              {language === 'en' ? 'Book Consultation' : 'परामर्श बुक करें'}
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

const AnimatedSection = ({ children, className = '' }: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const AnimatedCard = ({ children, delay = 0 }: AnimatedCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};