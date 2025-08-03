"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { globalContent as enContent } from '@/data/globalContent/en';
import { globalContent as hiContent } from '@/data/globalContent/hi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Calendar, User, Star, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const { language } = useLanguage();
  const content = language === 'en' ? enContent : hiContent;

  const contactInfo = {
    en: {
      title: "Divine Connection",
      subtitle: "Align your stars with our guidance. Reach out for celestial wisdom.",
      phone: "+91 9876543210",
      email: "info@panditji.com",
      address: "123 Temple Street, New Delhi, India",
      hours: "Monday - Saturday: 9:00 AM - 6:00 PM",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        service: "Service Interest",
        message: "Your Spiritual Inquiry",
        send: "Send Cosmic Message"
      },
      services: [
        "Vedic Astrology Reading",
        "Kundali Analysis",
        "Numerology Report",
        "Vastu Consultation",
        "Gemstone Recommendation",
        "Spiritual Counseling"
      ],
      sections: {
        contact: "Sacred Connection",
        location: "Temple of Wisdom",
        quick: "Instant Divine Link",
        testimonials: "Celestial Testimonials"
      },
      testimonials: [
        {
          quote: "The astrological guidance transformed my life path completely.",
          author: "Rahul Sharma"
        },
        {
          quote: "Accurate predictions and compassionate counseling. Truly divine!",
          author: "Priya Patel"
        }
      ]
    },
    hi: {
      title: "दिव्य संपर्क",
      subtitle: "हमारे मार्गदर्शन से अपने तारों को संरेखित करें। आकाशीय ज्ञान के लिए संपर्क करें।",
      phone: "+91 9876543210",
      email: "info@panditji.com",
      address: "123 मंदिर स्ट्रीट, नई दिल्ली, भारत",
      hours: "सोमवार - शनिवार: सुबह 9:00 बजे - शाम 6:00 बजे",
      form: {
        name: "पूरा नाम",
        email: "ईमेल पता",
        phone: "फोन नंबर",
        service: "सेवा में रुचि",
        message: "आपकी आध्यात्मिक जिज्ञासा",
        send: "दिव्य संदेश भेजें"
      },
      services: [
        "वैदिक ज्योतिष पठन",
        "कुंडली विश्लेषण",
        "अंक ज्योतिष रिपोर्ट",
        "वास्तु परामर्श",
        "रत्न सिफारिश",
        "आध्यात्मिक परामर्श"
      ],
      sections: {
        contact: "पवित्र संबंध",
        location: "ज्ञान का मंदिर",
        quick: "तत्काल दिव्य लिंक",
        testimonials: "दिव्य प्रशंसापत्र"
      },
      testimonials: [
        {
          quote: "ज्योतिषीय मार्गदर्शन ने मेरे जीवन पथ को पूरी तरह से बदल दिया।",
          author: "राहुल शर्मा"
        },
        {
          quote: "सटीक भविष्यवाणियाँ और दयालु परामर्श। वास्तव में दिव्य!",
          author: "प्रिया पटेल"
        }
      ]
    }
  };

  const info = contactInfo[language];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Header />
      
      <main className="pt-16">
        {/* Cosmic Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/cosmic-pattern-light.png')] bg-cover opacity-10" />
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-[#F0DF20]/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${1 + Math.random() * 5}px`,
                height: `${1 + Math.random() * 5}px`,
                animation: `twinkle ${3 + Math.random() * 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Hero Section */}
        <section className="py-32 relative z-10">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-[#F0DF20]/20 px-6 py-3 rounded-full border border-[#F0DF20]/30 mb-6">
                <Star className="w-5 h-5 text-[#F0DF20] mr-2" />
                <span className="text-[#000000] font-medium tracking-wider">{info.sections.contact}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#000000] mb-6 font-serif tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F0DF20] to-[#000000]">
                  {info.title}
                </span>
              </h1>
              <p className="text-xl text-[#000000]/80 max-w-3xl mx-auto leading-relaxed">
                {info.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <div className="relative z-10 pb-32">
          <div className="container mx-auto px-4">
            {/* Grid Layout */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Side - Contact Info */}
              <div className="space-y-8">
                {/* Contact Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="bg-white border-[#F0DF20]/30 shadow-lg">
                    <CardHeader className="border-b border-[#F0DF20]/30">
                      <CardTitle className="text-2xl font-serif text-[#000000] flex items-center">
                        <User className="w-6 h-6 text-[#F0DF20] mr-2" />
                        {language === 'en' ? 'Sacred Contact' : 'पवित्र संपर्क'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#F0DF20]/20 rounded-full flex items-center justify-center border border-[#F0DF20]/30">
                          <Phone className="w-5 h-5 text-[#F0DF20]" />
                        </div>
                        <div>
                          <h3 className="font-medium text-[#000000] mb-1 font-serif">
                            {language === 'en' ? 'Divine Line' : 'दिव्य रेखा'}
                          </h3>
                          <p className="text-[#000000]/80">{info.phone}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#F0DF20]/20 rounded-full flex items-center justify-center border border-[#F0DF20]/30">
                          <Mail className="w-5 h-5 text-[#F0DF20]" />
                        </div>
                        <div>
                          <h3 className="font-medium text-[#000000] mb-1 font-serif">
                            {language === 'en' ? 'Celestial Mail' : 'आकाशीय डाक'}
                          </h3>
                          <p className="text-[#000000]/80">{info.email}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#F0DF20]/20 rounded-full flex items-center justify-center border border-[#F0DF20]/30">
                          <MapPin className="w-5 h-5 text-[#F0DF20]" />
                        </div>
                        <div>
                          <h3 className="font-medium text-[#000000] mb-1 font-serif">
                            {language === 'en' ? 'Temple of Wisdom' : 'ज्ञान का मंदिर'}
                          </h3>
                          <p className="text-[#000000]/80">{info.address}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#F0DF20]/20 rounded-full flex items-center justify-center border border-[#F0DF20]/30">
                          <Clock className="w-5 h-5 text-[#F0DF20]" />
                        </div>
                        <div>
                          <h3 className="font-medium text-[#000000] mb-1 font-serif">
                            {language === 'en' ? 'Cosmic Hours' : 'ब्रह्मांडीय समय'}
                          </h3>
                          <p className="text-[#000000]/80">{info.hours}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Quick Contact */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card className="bg-white border-[#F0DF20]/30 shadow-lg">
                    <CardHeader className="border-b border-[#F0DF20]/30">
                      <CardTitle className="text-2xl font-serif text-[#000000] flex items-center">
                        <MessageCircle className="w-6 h-6 text-[#F0DF20] mr-2" />
                        {info.sections.quick}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <Button 
                        className="w-full bg-gradient-to-r from-[#F0DF20] to-[#F0DF20]/80 hover:from-[#F0DF20]/90 hover:to-[#F0DF20] text-[#000000] font-semibold py-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                      >
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center">
                            <MessageCircle className="w-5 h-5 mr-3" />
                            <span>{language === 'en' ? 'WhatsApp Divination' : 'व्हाट्सएप ज्योतिष'}</span>
                          </div>
                          <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Button>
                      
                      <Button 
                        className="w-full bg-gradient-to-r from-[#FFFFFF] to-[#F8F8F8] hover:from-[#F8F8F8] hover:to-[#F0F0F0] text-[#000000] font-semibold py-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group border border-[#F0DF20]/30"
                      >
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center">
                            <Phone className="w-5 h-5 mr-3 text-[#F0DF20]" />
                            <span>{language === 'en' ? 'Instant Cosmic Call' : 'तत्काल दिव्य कॉल'}</span>
                          </div>
                          <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Button>

                      <Button 
                        className="w-full bg-gradient-to-r from-[#FFFFFF] to-[#F8F8F8] hover:from-[#F8F8F8] hover:to-[#F0F0F0] text-[#000000] font-semibold py-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group border border-[#F0DF20]/30"
                      >
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center">
                            <Calendar className="w-5 h-5 mr-3 text-[#F0DF20]" />
                            <span>{language === 'en' ? 'Book Sacred Session' : 'पवित्र सत्र बुक करें'}</span>
                          </div>
                          <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Testimonials */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Card className="bg-white border-[#F0DF20]/30 shadow-lg">
                    <CardHeader className="border-b border-[#F0DF20]/30">
                      <CardTitle className="text-2xl font-serif text-[#000000] flex items-center">
                        <Star className="w-6 h-6 text-[#F0DF20] mr-2" />
                        {info.sections.testimonials}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                      {info.testimonials.map((testimonial, index) => (
                        <div key={index} className="relative">
                          <div className="absolute -top-3 -left-3 text-[#F0DF20]/30 text-4xl">❝</div>
                          <div className="bg-[#F8F8F8] p-5 rounded-lg border border-[#F0DF20]/30">
                            <p className="text-[#000000]/90 italic mb-3">"{testimonial.quote}"</p>
                            <p className="text-[#F0DF20] font-medium">— {testimonial.author}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Middle - Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-2"
              >
                <Card className="bg-white border-[#F0DF20]/30 shadow-xl">
                  <CardHeader className="border-b border-[#F0DF20]/30">
                    <CardTitle className="text-3xl font-serif text-[#000000]">
                      {language === 'en' ? 'Cosmic Inquiry Form' : 'ब्रह्मांडीय जिज्ञासा फॉर्म'}
                    </CardTitle>
                    <CardDescription className="text-[#000000]/70">
                      {language === 'en' ? 
                        'Complete this sacred form to receive divine guidance within 24 hours.' :
                        '24 घंटों के भीतर दिव्य मार्गदर्शन प्राप्त करने के लिए इस पवित्र फॉर्म को पूरा करें।'
                      }
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <form className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-[#000000] mb-2 font-serif">
                            {info.form.name}
                          </label>
                          <Input 
                            placeholder={info.form.name} 
                            className="w-full bg-white border-[#F0DF20]/50 focus:ring-[#F0DF20] focus:border-[#F0DF20] text-[#000000] placeholder-[#888888]" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-[#000000] mb-2 font-serif">
                            {info.form.email}
                          </label>
                          <Input 
                            type="email" 
                            placeholder={info.form.email} 
                            className="w-full bg-white border-[#F0DF20]/50 focus:ring-[#F0DF20] focus:border-[#F0DF20] text-[#000000] placeholder-[#888888]" 
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-[#000000] mb-2 font-serif">
                            {info.form.phone}
                          </label>
                          <Input 
                            type="tel" 
                            placeholder={info.form.phone} 
                            className="w-full bg-white border-[#F0DF20]/50 focus:ring-[#F0DF20] focus:border-[#F0DF20] text-[#000000] placeholder-[#888888]" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-[#000000] mb-2 font-serif">
                            {info.form.service}
                          </label>
                          <select className="w-full p-3 bg-white border border-[#F0DF20]/50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F0DF20] text-[#000000]">
                            <option value="">{language === 'en' ? 'Select celestial service' : 'दिव्य सेवा चुनें'}</option>
                            {info.services.map((service, index) => (
                              <option key={index} value={service}>{service}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-[#000000] mb-2 font-serif">
                          {info.form.message}
                        </label>
                        <Textarea 
                          placeholder={language === 'en' ? 
                            "Describe your spiritual needs and cosmic questions..." : 
                            "अपनी आध्यात्मिक आवश्यकताओं और ब्रह्मांडीय प्रश्नों का वर्णन करें..."
                          } 
                          className="w-full h-40 bg-white border-[#F0DF20]/50 focus:ring-[#F0DF20] focus:border-[#F0DF20] text-[#000000] placeholder-[#888888] resize-none" 
                        />
                      </div>
                      
                      <div className="pt-4">
                        <Button 
                          type="submit"
                          className="w-full bg-gradient-to-r from-[#F0DF20] to-[#F0DF20]/80 hover:from-[#F0DF20]/90 hover:to-[#F0DF20] text-[#000000] font-semibold py-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                        >
                          <div className="flex items-center justify-center">
                            <Send className="w-5 h-5 mr-3 transform group-hover:translate-x-1 transition-transform" />
                            <span className="text-lg">{info.form.send}</span>
                          </div>
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className="py-20 relative z-10 bg-[#F8F8F8]">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-[#F0DF20]/20 px-6 py-3 rounded-full border border-[#F0DF20]/30 mb-6">
                <MapPin className="w-5 h-5 text-[#F0DF20] mr-2" />
                <span className="text-[#000000] font-medium tracking-wider">{info.sections.location}</span>
              </div>
              <h2 className="text-4xl font-bold text-[#000000] mb-6 font-serif tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F0DF20] to-[#000000]">
                  {language === 'en' ? 'Temple of Cosmic Wisdom' : 'ब्रह्मांडीय ज्ञान का मंदिर'}
                </span>
              </h2>
              <p className="text-xl text-[#000000]/80 max-w-3xl mx-auto leading-relaxed">
                {language === 'en' ? 
                  'Our sacred space is designed for spiritual transformation and cosmic alignment. Visit us for profound consultations.' :
                  'हमारा पवित्र स्थान आध्यात्मिक परिवर्तन और ब्रह्मांडीय संरेखण के लिए डिज़ाइन किया गया है। गहन परामर्श के लिए हमसे मिलें।'
                }
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-2xl shadow-xl p-1 max-w-6xl mx-auto border border-[#F0DF20]/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('/assets/cosmic-grid-light.png')] bg-cover opacity-10" />
              <div className="relative bg-white rounded-xl h-96 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-[#F0DF20]/20 rounded-full flex items-center justify-center border border-[#F0DF20]/30 mx-auto mb-6">
                    <MapPin className="w-10 h-10 text-[#F0DF20]" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#000000] mb-3">
                    {language === 'en' ? 'Sacred Location' : 'पवित्र स्थान'}
                  </h3>
                  <p className="text-[#000000]/80 mb-6 max-w-md mx-auto">
                    {info.address}
                  </p>
                  <Button 
                    className="bg-gradient-to-r from-[#F0DF20] to-[#F0DF20]/80 hover:from-[#F0DF20]/90 hover:to-[#F0DF20] text-[#000000] font-semibold px-8"
                  >
                    {language === 'en' ? 'Get Directions' : 'दिशा-निर्देश प्राप्त करें'}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.2; }
          50% { opacity: 1; }
          100% { opacity: 0.2; }
        }
      `}</style>
    </div>
  );
}