'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, Star } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: language === 'hi' ? 'फोन नंबर' : 'Phone Number',
      value: '+91 98765 43210',
      description: language === 'hi' ? 'सुबह 9 बजे से रात 9 बजे तक' : '9 AM to 9 PM'
    },
    {
      icon: Mail,
      title: language === 'hi' ? 'ईमेल पता' : 'Email Address',
      value: 'panditrajesh@example.com',
      description: language === 'hi' ? '24 घंटे के भीतर जवाब' : 'Response within 24 hours'
    },
    {
      icon: MapPin,
      title: language === 'hi' ? 'कार्यालय का पता' : 'Office Address',
      value: language === 'hi' ? 'कनॉट प्लेस, नई दिल्ली' : 'Connaught Place, New Delhi',
      description: language === 'hi' ? 'व्यक्तिगत मुलाकात के लिए' : 'For personal consultations'
    },
    {
      icon: Clock,
      title: language === 'hi' ? 'कार्य समय' : 'Working Hours',
      value: language === 'hi' ? 'सोमवार - शनिवार' : 'Monday - Saturday',
      description: '9:00 AM - 9:00 PM'
    }
  ];

  const services = [
    language === 'hi' ? 'राशिफल पठन' : 'Horoscope Reading',
    language === 'hi' ? 'विवाह अनुकूलता' : 'Marriage Compatibility',
    language === 'hi' ? 'अंक शास्त्र' : 'Numerology',
    language === 'hi' ? 'हस्तरेखा पठन' : 'Palm Reading',
    language === 'hi' ? 'वास्तु शास्त्र' : 'Vastu Shastra',
    language === 'hi' ? 'करियर मार्गदर्शन' : 'Career Guidance'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {language === 'hi' ? 'संपर्क करें' : 'Contact Us'}
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8">
              {language === 'hi' 
                ? 'आपके जीवन के सवालों के जवाब पाने के लिए आज ही संपर्क करें'
                : 'Get in touch today to find answers to your life\'s questions'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-purple-600 font-semibold mb-1">{info.value}</p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    {language === 'hi' ? 'परामर्श बुक करें' : 'Book Consultation'}
                  </h2>
                  <p className="text-gray-600 text-lg">
                    {language === 'hi' 
                      ? 'नीचे दिए गए फॉर्म को भरें और हम जल्द ही आपसे संपर्क करेंगे'
                      : 'Fill out the form below and we will contact you soon'
                    }
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'hi' ? 'पूरा नाम' : 'Full Name'}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder={language === 'hi' ? 'आपका नाम' : 'Your name'}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'hi' ? 'ईमेल पता' : 'Email Address'}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder={language === 'hi' ? 'आपका ईमेल' : 'Your email'}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'hi' ? 'फोन नंबर' : 'Phone Number'}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder={language === 'hi' ? 'आपका फोन नंबर' : 'Your phone number'}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'hi' ? 'सेवा चुनें' : 'Select Service'}
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      >
                        <option value="">
                          {language === 'hi' ? 'सेवा चुनें' : 'Choose a service'}
                        </option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'hi' ? 'संदेश' : 'Message'}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder={language === 'hi' ? 'अपना संदेश लिखें...' : 'Write your message...'}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>{language === 'hi' ? 'संदेश भेजें' : 'Send Message'}</span>
                  </button>
                </form>
              </div>

              {/* Additional Information */}
              <div className="space-y-8">
                {/* Quick Contact */}
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {language === 'hi' ? 'तुरंत संपर्क' : 'Quick Contact'}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">WhatsApp</p>
                        <p className="text-gray-600">+91 98765 43210</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {language === 'hi' ? 'ऑनलाइन बुकिंग' : 'Online Booking'}
                        </p>
                        <p className="text-gray-600">
                          {language === 'hi' ? '24/7 उपलब्ध' : '24/7 Available'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Consultation Types */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {language === 'hi' ? 'परामर्श के प्रकार' : 'Consultation Types'}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Star className="w-6 h-6 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {language === 'hi' ? 'व्यक्तिगत मुलाकात' : 'Personal Meeting'}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {language === 'hi' ? 'कार्यालय में आमने-सामने परामर्श' : 'Face-to-face consultation at office'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Star className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {language === 'hi' ? 'वीडियो कॉल' : 'Video Call'}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {language === 'hi' ? 'ऑनलाइन वीडियो परामर्श' : 'Online video consultation'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Star className="w-6 h-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {language === 'hi' ? 'फोन कॉल' : 'Phone Call'}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {language === 'hi' ? 'टेलीफोन पर परामर्श' : 'Consultation over phone'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>{language === 'hi' ? 'कार्यालय का स्थान' : 'Office Location'}</p>
                    <p className="text-sm">
                      {language === 'hi' ? 'कनॉट प्लेस, नई दिल्ली' : 'Connaught Place, New Delhi'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {language === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: language === 'hi' ? 'परामर्श की फीस क्या है?' : 'What is the consultation fee?',
                  answer: language === 'hi' 
                    ? 'परामर्श की फीस सेवा के प्रकार पर निर्भर करती है। कृपया विस्तृत जानकारी के लिए संपर्क करें।'
                    : 'Consultation fees depend on the type of service. Please contact for detailed information.'
                },
                {
                  question: language === 'hi' ? 'क्या ऑनलाइन परामर्श उपलब्ध है?' : 'Is online consultation available?',
                  answer: language === 'hi' 
                    ? 'हां, हम वीडियो कॉल और फोन कॉल के माध्यम से ऑनलाइन परामर्श प्रदान करते हैं।'
                    : 'Yes, we provide online consultation through video calls and phone calls.'
                },
                {
                  question: language === 'hi' ? 'परामर्श के लिए कितना समय लगता है?' : 'How long does a consultation take?',
                  answer: language === 'hi' 
                    ? 'सामान्यतः एक परामर्श सत्र 45-60 मिनट का होता है, जो सेवा के प्रकार पर निर्भर करता है।'
                    : 'Generally, a consultation session lasts 45-60 minutes, depending on the type of service.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}