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
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Calendar, User, Star, ChevronRight, Sparkles } from 'lucide-react';

export default function Contact() {
  const { language } = useLanguage();
  const content = language === 'en' ? enContent : hiContent;

  const contactInfo = {
    en: {
      title: "Contact Information",
      subtitle: "Connect with us for spiritual guidance and divine wisdom.",
      phone: "+917733994827",
      email: "manishhsharma786@gmail.com",
      address: "Maa Baglamukhi Temple, Nalkheda, Agar District, Madhya Pradesh",
      hours: "Monday - Saturday: 9:00 AM - 6:00 PM",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        service: "Service Interest",
        message: "Your Inquiry",
        send: "Send Message"
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
        testimonials: "Testimonials"
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
      title: "संपर्क जानकारी",
      subtitle: "आध्यात्मिक मार्गदर्शन और दिव्य ज्ञान के लिए हमसे संपर्क करें।",
      phone: "+917733994827",
      email: "manishhsharma786@gmail.com",
      address: "माँ बगलामुखी मंदिर, नलखेड़ा, आगर जिला, मध्य प्रदेश",
      hours: "सोमवार - शनिवार: सुबह 9:00 बजे - शाम 6:00 बजे",
      form: {
        name: "पूरा नाम",
        email: "ईमेल पता",
        phone: "फोन नंबर",
        service: "सेवा में रुचि",
        message: "आपकी जिज्ञासा",
        send: "संदेश भेजें"
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
        testimonials: "प्रशंसापत्र"
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
    <div className="min-h-screen bg-gradient-to-b from-[#f9f9f9] to-[#f1f1f1] text-[#1a1a1a] relative overflow-hidden">
      <Header />
      
      <main className="pt-16">
        {/* Cosmic Background Elements */}
        <div className="fixed inset-0 -z-50 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/cosmic-pattern.svg')] bg-repeat opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f9f9f9]/90 to-[#f1f1f1]/90" />
        </div>

        {/* Hero Section */}
        <section className="py-16 sm:py-20 lg:py-24 relative z-10">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,#F0DF20_0%,transparent_70%)] opacity-10 animate-pulse" 
              style={{ transform: 'translate(-50%, -50%)' }} />
          </div>

          <div className="container mx-auto px-3 sm:px-4 lg:px-6">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-[#F0DF20]/20 shadow-sm mb-4 sm:mb-6">
                <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-[#F0DF20] mr-2 sm:mr-3" />
                <span className="text-[#F0DF20] font-semibold text-base sm:text-lg">
                  {info.sections.contact}
                </span>
              </div>

              <h1 className="text-4xl pt-4 sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 font-serif bg-clip-text text-transparent bg-gradient-to-r from-[#1a1a1a] to-[#F0DF20]">
                {info.title}
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-[#1a1a1a]/80 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10">
                {info.subtitle}
              </p>

              <Button 
                className="bg-gradient-to-r from-[#F0DF20] to-[#F5C742] hover:from-[#F5C742] hover:to-[#F0DF20] text-[#1a1a1a] font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center">
                  <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3 transform group-hover:translate-x-1 transition-transform" />
                  <span>{language === 'en' ? 'Connect with Us' : 'हमसे संपर्क करें'}</span>
                </div>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="relative z-10 pb-20 sm:pb-24">
          <div className="container mx-auto px- sm:px-4 lg:px-6">
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Left Side - Contact Info */}
              <div className="space-y-6 sm:space-y-8">
                <Card className="bg-white/90 backdrop-blur-sm border-[#F0DF20]/20 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl">
                  <CardHeader className="border-b border-[#F0DF20]/20">
                    <CardTitle className="text-xl sm:text-2xl font-serif text-[#1a1a1a] flex items-center">
                      <User className="w-5 sm:w-6 h-5 sm:h-6 text-[#F0DF20] mr-2 sm:mr-3" />
                      {language === 'en' ? 'Sacred Contact' : 'पवित्र संपर्क'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#F0DF20]/10 rounded-full flex items-center justify-center border border-[#F0DF20]/20">
                        <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-[#F0DF20]" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#1a1a1a] mb-1 font-serif text-sm sm:text-base">
                          {language === 'en' ? 'Divine Line' : 'दिव्य रेखा'}
                        </h3>
                        <p className="text-[#1a1a1a]/80 text-sm sm:text-base">{info.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#F0DF20]/10 rounded-full flex items-center justify-center border border-[#F0DF20]/20">
                        <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-[#F0DF20]" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#1a1a1a] mb-1 font-serif text-sm sm:text-base">
                          {language === 'en' ? 'Celestial Mail' : 'आकाशीय डाक'}
                        </h3>
                        <p className="text-[#1a1a1a]/80 text-sm sm:text-base">{info.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#F0DF20]/10 rounded-full flex items-center justify-center border border-[#F0DF20]/20">
                        <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-[#F0DF20]" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#1a1a1a] mb-1 font-serif text-sm sm:text-base">
                          {language === 'en' ? 'Temple of Wisdom' : 'ज्ञान का मंदिर'}
                        </h3>
                        <p className="text-[#1a1a1a]/80 text-sm sm:text-base">{info.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#F0DF20]/10 rounded-full flex items-center justify-center border border-[#F0DF20]/20">
                        <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-[#F0DF20]" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#1a1a1a] mb-1 font-serif text-sm sm:text-base">
                          {language === 'en' ? 'Cosmic Hours' : 'ब्रह्मांडीय समय'}
                        </h3>
                        <p className="text-[#1a1a1a]/80 text-sm sm:text-base">{info.hours}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-sm border-[#F0DF20]/20 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl">
                  <CardHeader className="border-b border-[#F0DF20]/20">
                    <CardTitle className="text-xl sm:text-2xl font-serif text-[#1a1a1a] flex items-center">
                      <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6 text-[#F0DF20] mr-2 sm:mr-3" />
                      {info.sections.quick}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 space-y-4">
                    <Button 
                      className="w-full bg-gradient-to-r from-[#F0DF20] to-[#F5C742] hover:from-[#F5C742] hover:to-[#F0DF20] text-[#1a1a1a] font-semibold py-4 sm:py-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3" />
                          <span className="text-sm sm:text-base">{language === 'en' ? 'WhatsApp Divination' : 'व्हाट्सएप ज्योतिष'}</span>
                        </div>
                        <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Button>
                    <Button 
                      className="w-full bg-white/90 backdrop-blur-sm border border-[#F0DF20]/20 hover:bg-[#F0DF20]/10 text-[#1a1a1a] font-semibold py-4 sm:py-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <Phone className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3 text-[#F0DF20]" />
                          <span className="text-sm sm:text-base">{language === 'en' ? 'Instant Cosmic Call' : 'तत्काल दिव्य कॉल'}</span>
                        </div>
                        <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Button>
                    <Button 
                      className="w-full bg-white/90 backdrop-blur-sm border border-[#F0DF20]/20 hover:bg-[#F0DF20]/10 text-[#1a1a1a] font-semibold py-4 sm:py-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <Calendar className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3 text-[#F0DF20]" />
                          <span className="text-sm sm:text-base">{language === 'en' ? 'Book Sacred Session' : 'पवित्र सत्र बुक करें'}</span>
                        </div>
                        <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-sm border-[#F0DF20]/20 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl">
                  <CardHeader className="border-b border-[#F0DF20]/20">
                    <CardTitle className="text-xl sm:text-2xl font-serif text-[#1a1a1a] flex items-center">
                      <Star className="w-5 sm:w-6 h-5 sm:h-6 text-[#F0DF20] mr-2 sm:mr-3" />
                      {info.sections.testimonials}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                    {info.testimonials.map((testimonial, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -top-3 -left-3 text-[#F0DF20]/30 text-3xl sm:text-4xl">❝</div>
                        <div className="bg-[#f9f9f9] p-4 sm:p-5 rounded-xl border border-[#F0DF20]/20">
                          <p className="text-[#1a1a1a]/90 italic text-sm sm:text-base mb-2 sm:mb-3">"{testimonial.quote}"</p>
                          <p className="text-[#F0DF20] font-medium text-sm sm:text-base">— {testimonial.author}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Middle - Form */}
              <div className="lg:col-span-2">
                <Card className="bg-white/90 backdrop-blur-sm border-[#F0DF20]/20 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl">
                  <CardHeader className="border-b border-[#F0DF20]/20">
                    <CardTitle className="text-2xl sm:text-3xl font-serif text-[#1a1a1a]">
                      {language === 'en' ? 'Inquiry Form' : 'जिज्ञासा फॉर्म'}
                    </CardTitle>
                    <CardDescription className="text-[#1a1a1a]/70 text-sm sm:text-base">
                      {language === 'en' ? 
                        'Complete this form to receive guidance within 24 hours.' :
                        '24 घंटों के भीतर मार्गदर्शन प्राप्त करने के लिए इस फॉर्म को पूरा करें।'
                      }
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-8">
                    <form className="space-y-6 sm:space-y-8">
                      <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-[#1a1a1a] font-serif">
                            {info.form.name}
                          </label>
                          <Input 
                            placeholder={info.form.name} 
                            className="w-full bg-white/90 border-[#F0DF20]/20 focus:ring-[#F0DF20] focus:border-[#F0DF20] text-[#1a1a1a] placeholder-[#1a1a1a]/50 rounded-xl" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-[#1a1a1a] font-serif">
                            {info.form.email}
                          </label>
                          <Input 
                            type="email" 
                            placeholder={info.form.email} 
                            className="w-full bg-white/90 border-[#F0DF20]/20 focus:ring-[#F0DF20] focus:border-[#F0DF20] text-[#1a1a1a] placeholder-[#1a1a1a]/50 rounded-xl" 
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-[#1a1a1a] font-serif">
                            {info.form.phone}
                          </label>
                          <Input 
                            type="tel" 
                            placeholder={info.form.phone} 
                            className="w-full bg-white/90 border-[#F0DF20]/20 focus:ring-[#F0DF20] focus:border-[#F0DF20] text-[#1a1a1a] placeholder-[#1a1a1a]/50 rounded-xl" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-[#1a1a1a] font-serif">
                            {info.form.service}
                          </label>
                          <select className="w-full p-3 bg-white/90 border border-[#F0DF20]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F0DF20] text-[#1a1a1a] text-sm sm:text-base">
                            <option value="">{language === 'en' ? 'Select service' : 'सेवा चुनें'}</option>
                            {info.services.map((service, index) => (
                              <option key={index} value={service}>{service}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-[#1a1a1a] font-serif">
                          {info.form.message}
                        </label>
                        <Textarea 
                          placeholder={language === 'en' ? 
                            "Describe your needs and questions..." : 
                            "अपनी आवश्यकताओं और प्रश्नों का वर्णन करें..."
                          } 
                          className="w-full h-32 sm:h-40 bg-white/90 border-[#F0DF20]/20 focus:ring-[#F0DF20] focus:border-[#F0DF20] text-[#1a1a1a] placeholder-[#1a1a1a]/50 rounded-xl resize-none" 
                        />
                      </div>
                      <div className="pt-2 sm:pt-4">
                        <Button 
                          type="submit"
                          className="w-full bg-gradient-to-r from-[#F0DF20] to-[#F5C742] hover:from-[#F5C742] hover:to-[#F0DF20] text-[#1a1a1a] font-semibold py-4 sm:py-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                        >
                          <div className="flex items-center justify-center">
                            <Send className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3 transform group-hover:translate-x-1 transition-transform" />
                            <span className="text-sm sm:text-lg">{info.form.send}</span>
                          </div>
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className=" sm:py-20 bg-gradient-to-b from-[#f1f1f1] to-[#f9f9f9]">
  <div className="container mx-auto px-3 sm:px-4 lg:px-6">
    <div className="text-center mb-12 sm:mb-16">
      <div className="inline-flex items-center bg-[#F0DF20]/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-[#F0DF20]/20 shadow-sm mb-4 sm:mb-6">
        <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-[#F0DF20] mr-2 sm:mr-3" />
        <span className="text-[#F0DF20] font-semibold text-base sm:text-lg">{info.sections.location}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-serif bg-clip-text text-transparent bg-gradient-to-r from-[#1a1a1a] to-[#F0DF20]">
        {language === 'en' ? 'Temple of Wisdom' : 'ज्ञान का मंदिर'}
      </h2>
      <p className="text-base sm:text-lg text-[#1a1a1a]/80 max-w-3xl mx-auto leading-relaxed">
        {language === 'en' ? 
          'Visit our sacred space for spiritual guidance and consultations.' :
          'आध्यात्मिक मार्गदर्शन और परामर्श के लिए हमारे पवित्र स्थान पर आएं।'
        }
      </p>
    </div>
    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-1 max-w-5xl mx-auto border border-[#F0DF20]/20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/cosmic-pattern.svg')] bg-repeat opacity-10" />
      <div className="relative rounded-xl overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7137.157231461238!2d76.22609229385894!3d23.841389699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3964b97a0576ae97%3A0x45323f30be84261c!2sBaglamukhi%20Mandir%20Nalkheda!5e1!3m2!1sen!2sin!4v1754543638834!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</section>
      </main>

      <Footer />
    </div>
  );
}