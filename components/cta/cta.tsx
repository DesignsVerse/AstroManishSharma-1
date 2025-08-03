"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { CalendarDays } from 'lucide-react';

export default function ConsultationBanner() {
  const { language } = useLanguage();
  
  const content = {
    en: {
      title: "Book Consultation Call From The Best Astrologer In India!",
      description: "We believe astrology is pure science, and we aim to create such a social impact through our astrological services including kundali analysis, palm reading, face reading, and all other online astrology services.",
      button: "Book Now"
    },
    hi: {
      title: "भारत के सर्वश्रेष्ठ ज्योतिषी से परामर्श कॉल बुक करें!",
      description: "हम मानते हैं कि ज्योतिष शुद्ध विज्ञान है, और हमारा उद्देश्य कुंडली विश्लेषण, हस्तरेखा, मुख पढ़ने और अन्य ऑनलाइन ज्योतिष सेवाओं के माध्यम से सामाजिक प्रभाव पैदा करना है।",
      button: "अभी बुक करें"
    }
  }[language];

  return (
    <div className="relative bg-gradient-to-l from-[#F0DF20]/10 to-[#F0DF20]/5 border border-[#F0DF20]/20 rounded-lg overflow-hidden my-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image - Left Side */}
          <div className="md:w-2/5 h-full">
            <div className="relative h-full min-h-[200px]">
              <img 
                src="https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Astrologer consultation"
                className="h-full w-full object-cover object-center"
              />
              {/* Overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent md:hidden"></div>
            </div>
          </div>
          
          {/* Text Content - Right Side */}
          <div className="md:w-3/5 p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#000000] mb-4 font-serif">
              {content.title}
            </h3>
            <p className="text-[#000000]/80 mb-6 text-base md:text-lg leading-relaxed">
              {content.description}
            </p>
            <Button className="bg-[#F0DF20] hover:bg-[#F0DF20]/90 text-[#000000] font-medium text-lg px-6 py-3">
              <CalendarDays className="w-5 h-5 mr-2" />
              {content.button}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-4 left-4 text-[#F0DF20]/30 text-3xl">☿</div>
      <div className="absolute bottom-4 right-4 text-[#F0DF20]/30 text-3xl">♃</div>
    </div>
  );
}