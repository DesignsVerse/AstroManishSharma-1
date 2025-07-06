'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Heart, Calculator, Hand, Home, Briefcase, CheckCircle, Clock, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const iconMap: Record<string, React.ComponentType<any>> = {
  Star,
  Heart,
  Calculator,
  Hand,
  Home,
  Briefcase
};

// Define the type for services data
interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  features: string[];
}

interface ServicesData {
  title: string;
  subtitle: string;
  services: Service[];
}

export default function ServicesPage() {
  const { language, t } = useLanguage();
  const [servicesData, setServicesData] = useState<ServicesData | null>(null);

  useEffect(() => {
    const loadServicesData = async () => {
      try {
        const data = language === 'hi' 
          ? await import('@/data/services-hi')
          : await import('@/data/services-en');
        setServicesData(data.servicesData);
      } catch (error) {
        console.error('Error loading services data:', error);
      }
    };

    loadServicesData();
  }, [language]);

  if (!servicesData) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 pb-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {servicesData.title}
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8">
              {servicesData.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>{language === 'hi' ? '15+ वर्षों का अनुभव' : '15+ Years Experience'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span>{language === 'hi' ? '5000+ संतुष्ट ग्राहक' : '5000+ Happy Clients'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span>{language === 'hi' ? '24/7 उपलब्ध' : '24/7 Available'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-full font-medium hover:shadow-lg transition-all transform hover:scale-105">
                    {language === 'hi' ? 'अभी बुक करें' : 'Book Now'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {language === 'hi' ? 'हमें क्यों चुनें?' : 'Why Choose Us?'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'hi' 
                ? 'हमारी विशेषताएं जो हमें अलग बनाती हैं'
                : 'Our unique features that set us apart'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {language === 'hi' ? 'प्रमाणित ज्योतिषी' : 'Certified Astrologer'}
              </h3>
              <p className="text-gray-600">
                {language === 'hi' 
                  ? 'भारतीय ज्योतिष विज्ञान परिषद द्वारा प्रमाणित'
                  : 'Certified by Indian Council of Astrological Sciences'
                }
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {language === 'hi' ? '95% सटीकता' : '95% Accuracy'}
              </h3>
              <p className="text-gray-600">
                {language === 'hi' 
                  ? 'हमारी भविष्यवाणियों की उच्च सटीकता दर'
                  : 'High accuracy rate in our predictions'
                }
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {language === 'hi' ? '24/7 सहायता' : '24/7 Support'}
              </h3>
              <p className="text-gray-600">
                {language === 'hi' 
                  ? 'किसी भी समय परामर्श के लिए उपलब्ध'
                  : 'Available for consultation anytime'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'hi' ? 'अपना भविष्य जानें' : 'Know Your Future'}
            </h2>
            <p className="text-xl mb-8">
              {language === 'hi' 
                ? 'आज ही अपना व्यक्तिगत परामर्श बुक करें और अपने जीवन की दिशा पाएं'
                : 'Book your personal consultation today and get direction for your life'
              }
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105">
              {language === 'hi' ? 'अभी परामर्श लें' : 'Get Consultation Now'}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}