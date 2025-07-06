'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Heart, Calculator, Hand, Home, Briefcase } from 'lucide-react';
import { useEffect, useState } from 'react';

const iconMap = {
  Star,
  Heart,
  Calculator,
  Hand,
  Home,
  Briefcase
};

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

export default function Services() {
  const { language } = useLanguage();
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
      <section id="services" className="py-20 bg-light-pink">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 bg-light-pink">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-6">
            {servicesData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {servicesData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.services.map((service: Service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
              >
                <div className="w-16 h-16 bg-primary-red rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-dark-gray mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-primary-red rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}