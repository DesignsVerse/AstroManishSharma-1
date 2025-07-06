'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Award, BookOpen, Users, Star, CheckCircle, Calendar, Trophy, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const { t, language } = useLanguage();

  const specializations = [
    { key: 'about.spec1', icon: Star },
    { key: 'about.spec2', icon: Users },
    { key: 'about.spec3', icon: BookOpen },
    { key: 'about.spec4', icon: Award }
  ];

  const achievements = [
    'about.achievement1',
    'about.achievement2',
    'about.achievement3'
  ];

  const timeline = [
    {
      year: '2008',
      title: language === 'hi' ? 'ज्योतिष की शुरुआत' : 'Started Astrology Journey',
      description: language === 'hi' 
        ? 'प्रसिद्ध गुरु से वैदिक ज्योतिष की शिक्षा प्राप्त की'
        : 'Learned Vedic astrology from renowned guru'
    },
    {
      year: '2012',
      title: language === 'hi' ? 'प्रमाणन प्राप्त' : 'Received Certification',
      description: language === 'hi' 
        ? 'भारतीय ज्योतिष विज्ञान परिषद से प्रमाणन'
        : 'Certification from Indian Council of Astrological Sciences'
    },
    {
      year: '2015',
      title: language === 'hi' ? 'पहली पुस्तक प्रकाशित' : 'Published First Book',
      description: language === 'hi' 
        ? 'वैदिक ज्योतिष पर पहली पुस्तक का प्रकाशन'
        : 'Published first book on Vedic astrology'
    },
    {
      year: '2020',
      title: language === 'hi' ? 'टेलीविजन पर आगमन' : 'Television Debut',
      description: language === 'hi' 
        ? 'राष्ट्रीय टेलीविजन पर नियमित कार्यक्रम'
        : 'Regular programs on national television'
    }
  ];

  const stats = [
    {
      number: '15+',
      label: language === 'hi' ? 'वर्षों का अनुभव' : 'Years Experience',
      icon: Calendar
    },
    {
      number: '5000+',
      label: language === 'hi' ? 'संतुष्ट ग्राहक' : 'Happy Clients',
      icon: Users
    },
    {
      number: '95%',
      label: language === 'hi' ? 'सटीकता दर' : 'Accuracy Rate',
      icon: Trophy
    },
    {
      number: '3',
      label: language === 'hi' ? 'प्रकाशित पुस्तकें' : 'Published Books',
      icon: BookOpen
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Image */}
              <div className="relative">
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/6724495/pexels-photo-6724495.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Pandit Rajesh Sharma"
                    className="w-full h-[600px] object-cover"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 blur-2xl"></div>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {language === 'hi' ? 'मेरी कहानी' : 'My Story'}
                  </h2>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {t('about.desc')}
                  </p>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {language === 'hi' 
                      ? 'मेरा मानना है कि ज्योतिष केवल भविष्य बताने का साधन नहीं है, बल्कि यह जीवन को समझने और बेहतर बनाने का एक गहरा विज्ञान है। मैं अपने ग्राहकों को न केवल सटीक भविष्यवाणियां प्रदान करता हूं, बल्कि उन्हें जीवन की चुनौतियों से निपटने के लिए व्यावहारिक समाधान भी देता हूं।'
                      : 'I believe that astrology is not just a means of predicting the future, but a profound science for understanding and improving life. I provide my clients not only with accurate predictions but also practical solutions to deal with life\'s challenges.'
                    }
                  </p>
                </div>

                {/* Specializations */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {t('about.specializations')}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {specializations.map((spec, index) => {
                      const Icon = spec.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center space-x-3 bg-gray-50 rounded-xl p-4 hover:bg-purple-50 transition-all duration-300 border border-gray-100"
                        >
                          <Icon className="w-6 h-6 text-purple-600" />
                          <span className="font-medium text-gray-900">
                            {t(spec.key)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-purple-100">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {language === 'hi' ? 'मेरी यात्रा' : 'My Journey'}
              </h2>
              <p className="text-xl text-gray-600">
                {language === 'hi' 
                  ? 'ज्योतिष के क्षेत्र में मेरी प्रगति की कहानी'
                  : 'The story of my progress in the field of astrology'
                }
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-200"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
                      <div className="text-purple-600 font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('about.achievements')}
              </h2>
            </div>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-6 bg-gray-50 rounded-2xl p-6 hover:bg-purple-50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 leading-relaxed">{t(achievement)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <Heart className="w-16 h-16 mx-auto mb-6 text-pink-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'hi' ? 'आपकी सेवा में' : 'At Your Service'}
            </h2>
            <p className="text-xl mb-8">
              {language === 'hi' 
                ? 'मैं यहां आपकी जीवन यात्रा में मार्गदर्शन करने के लिए हूं। आइए मिलकर आपके भविष्य को उज्जवल बनाते हैं।'
                : 'I am here to guide you on your life journey. Let us work together to brighten your future.'
              }
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105">
              {language === 'hi' ? 'अभी परामर्श लें' : 'Get Consultation Now'}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}