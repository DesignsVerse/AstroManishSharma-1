"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { globalContent as enContent } from '@/data/globalContent/en';
import { globalContent as hiContent } from '@/data/globalContent/hi';
import { services as enServices } from '@/data/services/en';
import { services as hiServices } from '@/data/services/hi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Star, Check, Phone, MessageCircle, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../../utils/motion';

export type ServiceDetailClientProps = { slug: string };

export default function ServiceDetailClient({ slug }: { slug: string }) {
  const { language } = useLanguage();
  const content = language === 'en' ? enContent : hiContent;
  const services = language === 'en' ? enServices : hiServices;

  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-purple-50">
        <Header />
        <main className="pt-16">
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Service Not Found' : 'सेवा नहीं मिली'}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {language === 'en' ? 'The service you are looking for does not exist.' : 'आप जो सेवा खोज रहे हैं वह मौजूद नहीं है।'}
            </p>
            <Link href="/services">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                {language === 'en' ? 'Back to Services' : 'सेवाओं पर वापस जाएं'}
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-purple-50">
      <Header />
      <main className="pt-16">
        {/* Hero Section - Enhanced */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-100/50 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-[url('/images/dot-pattern.svg')] opacity-10"></div>
          </div>
          
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            animate="show"
            className="container mx-auto px-4"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className="relative group"
              >
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border-8 border-white">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                    <span className="text-4xl text-orange-500">{service.icon}</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeIn('left', 'tween', 0.4, 1)}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-medium mb-4">
                    {content.common.popularService}
                    <Star className="w-4 h-4 ml-2 fill-orange-500 text-orange-500" />
                  </div>
                  
                  <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                    {service.title}
                  </h1>
                  
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium px-4 py-2 text-lg">
                    {service.price}
                  </Badge>
                  <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-600 font-medium">{service.duration}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    size="lg"
                    className="relative overflow-hidden group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      {content.common.bookNow}
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="lg"
                    className="relative overflow-hidden group border-2 border-orange-500 text-orange-500 hover:text-white font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center">
                      <Phone className="w-5 h-5 mr-2" />
                      {content.common.callNow}
                    </span>
                    <span className="absolute inset-0 bg-orange-500 w-0 group-hover:w-full transition-all duration-500"></span>
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Features Section - Enhanced */}
        <section className="relative py-24 bg-white overflow-hidden">
          <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-orange-200/30 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-purple-200/30 blur-3xl"></div>
          
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            animate="show"
            className="container mx-auto px-4"
          >
            <motion.div 
              variants={fadeIn('up', 'tween', 0.2, 1)}
              className="max-w-3xl mx-auto text-center mb-20"
            >
              <Badge variant="outline" className="mb-4 px-4 py-2 border-orange-300 text-orange-500">
                {language === 'en' ? 'Key Benefits' : 'मुख्य लाभ'}
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {language === 'en' ? 'What You\'ll Experience' : 'आपका अनुभव'}
              </h2>
              <p className="text-xl text-gray-600">
                {language === 'en' 
                  ? 'Comprehensive analysis and personalized guidance tailored just for you' 
                  : 'आपके लिए विशेष रूप से तैयार किया गया व्यापक विश्लेषण और व्यक्तिगत मार्गदर्शन'}
              </p>
            </motion.div>

            <motion.div 
              variants={fadeIn('up', 'tween', 0.4, 1)}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {service.features.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn('up', 'tween', index * 0.1, 1)}
                  whileHover={{ y: -10 }}
                  className="relative group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-6">
                      <Check className="w-6 h-6 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature}</h3>
                    <p className="text-gray-600">
                      {language === 'en' 
                        ? 'Expert analysis with actionable insights' 
                        : 'कार्रवाई योग्य अंतर्दृष्टि के साथ विशेषज्ञ विश्लेषण'}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Testimonials Section - New */}
        <section className="py-24 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <Badge variant="outline" className="mb-4 px-4 py-2 border-orange-300 text-orange-500">
                {language === 'en' ? 'Client Stories' : 'ग्राहक कहानियाँ'}
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {language === 'en' ? 'Transformative Experiences' : 'परिवर्तनकारी अनुभव'}
              </h2>
              <p className="text-xl text-gray-600">
                {language === 'en' 
                  ? 'See how this service has positively impacted our clients' 
                  : 'देखें कि यह सेवा हमारे ग्राहकों को कैसे प्रभावित करती है'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <motion.div 
                  key={item}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < 4 ? 'fill-orange-400 text-orange-400' : 'fill-gray-200 text-gray-200'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6">
                      {language === 'en' 
                        ? "This service completely transformed my perspective. The insights were incredibly accurate and the guidance was life-changing." 
                        : "इस सेवा ने मेरे दृष्टिकोण को पूरी तरह से बदल दिया। अंतर्दृष्टि अविश्वसनीय रूप से सटीक थी और मार्गदर्शन जीवन बदलने वाला था।"}
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center text-white font-bold mr-4">
                        {item === 1 ? 'R' : item === 2 ? 'S' : 'A'}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {item === 1 ? 'Rajesh K.' : item === 2 ? 'Sunita M.' : 'Amit P.'}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {language === 'en' ? 'Satisfied Client' : 'संतुष्ट ग्राहक'}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section - New */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <Badge variant="outline" className="mb-4 px-4 py-2 border-orange-300 text-orange-500">
                {language === 'en' ? 'How It Works' : 'यह कैसे काम करता है'}
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {language === 'en' ? 'Simple & Transparent Process' : 'सरल और पारदर्शी प्रक्रिया'}
              </h2>
              <p className="text-xl text-gray-600">
                {language === 'en' 
                  ? 'Get started in just a few easy steps' 
                  : 'बस कुछ आसान चरणों में शुरू करें'}
              </p>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-100 via-red-100 to-purple-100 -translate-y-1/2"></div>
              
              <div className="grid lg:grid-cols-4 gap-8">
                {[
                  language === 'en' ? 'Book Your Session' : 'अपना सत्र बुक करें',
                  language === 'en' ? 'Provide Details' : 'विवरण प्रदान करें',
                  language === 'en' ? 'Receive Analysis' : 'विश्लेषण प्राप्त करें',
                  language === 'en' ? 'Implement Guidance' : 'मार्गदर्शन लागू करें'
                ].map((step, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -10 }}
                    className="relative bg-white rounded-2xl shadow-lg p-6 text-center z-10 border border-gray-100"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-orange-100 to-red-100 flex items-center justify-center text-orange-500 font-bold text-xl mb-6">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step}</h3>
                    <p className="text-gray-600">
                      {language === 'en' 
                        ? 'Simple and straightforward process with our experts' 
                        : 'हमारे विशेषज्ञों के साथ सरल और सीधी प्रक्रिया'}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Services - Enhanced */}
        <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            <motion.div 
              variants={fadeIn('up', 'tween', 0.2, 1)}
              className="text-center mb-20"
            >
              <Badge variant="outline" className="mb-4 px-4 py-2 border-purple-300 text-purple-500">
                {language === 'en' ? 'More Services' : 'अधिक सेवाएं'}
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {language === 'en' ? 'Explore Our Offerings' : 'हमारी सेवाएं देखें'}
              </h2>
              <p className="text-xl text-gray-600">
                {language === 'en' 
                  ? 'Discover our complete range of specialized services' 
                  : 'हमारी विशेष सेवाओं की पूरी श्रृंखला देखें'}
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer(0.1, 0.2)}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.filter(s => s.slug !== slug).slice(0, 3).map((relatedService, index) => (
                <motion.div
                  key={relatedService.id}
                  variants={fadeIn('up', 'tween', index * 0.1 + 0.2, 1)}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden transition-all duration-300 border-0 shadow-lg hover:shadow-2xl">
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedService.image}
                        alt={relatedService.title}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                        <span className="text-2xl text-orange-500">{relatedService.icon}</span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium">
                          {relatedService.price}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                        {relatedService.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 text-sm line-clamp-2">
                        {relatedService.shortDescription}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Link href={`/services/${relatedService.slug}`}>
                        <Button 
                          variant="ghost"
                          className="group-hover:bg-orange-50 text-orange-500 px-0"
                        >
                          {content.common.learnMore}
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              variants={fadeIn('up', 'tween', 0.6, 1)}
              className="text-center mt-16"
            >
              <Link href="/services">
                <Button 
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-6 rounded-full"
                >
                  {language === 'en' ? 'View All Services' : 'सभी सेवाएं देखें'}
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section - New */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                {language === 'en' 
                  ? 'Ready to Transform Your Life?' 
                  : 'अपने जीवन को बदलने के लिए तैयार हैं?'}
              </h2>
              <p className="text-xl text-orange-100 mb-10">
                {language === 'en' 
                  ? 'Book your session today and begin your journey with our expert guidance' 
                  : 'आज ही अपना सत्र बुक करें और हमारे विशेषज्ञ मार्गदर्शन के साथ अपनी यात्रा शुरू करें'}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-6 rounded-full shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {content.common.bookNow}
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 rounded-full backdrop-blur-sm"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {content.common.callNow}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}