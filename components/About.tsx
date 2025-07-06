'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Award, BookOpen, Users, Star } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const specializations: { key: 'about.spec1' | 'about.spec2' | 'about.spec3' | 'about.spec4'; icon: any }[] = [
    { key: 'about.spec1', icon: Star },
    { key: 'about.spec2', icon: Users },
    { key: 'about.spec3', icon: BookOpen },
    { key: 'about.spec4', icon: Award }
  ];

  const achievements: ('about.achievement1' | 'about.achievement2' | 'about.achievement3')[] = [
    'about.achievement1',
    'about.achievement2',
    'about.achievement3'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/6724495/pexels-photo-6724495.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Pandit Rajesh Sharma"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-light-pink rounded-full opacity-60 blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-light-pink rounded-full opacity-60 blur-2xl"></div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-dark-gray">15+</div>
                    <div className="text-sm text-gray-600">{t('hero.experience')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-4">
                  {t('about.title')}
                </h2>
                
                <div className="text-2xl text-primary-red font-semibold mb-6">
                  {t('about.subtitle')}
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t('about.desc')}
                </p>
              </div>

              {/* Specializations */}
              <div>
                <h3 className="text-2xl font-bold text-dark-gray mb-6">
                  {t('about.specializations')}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {specializations.map((spec, index) => {
                    const Icon = spec.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center space-x-3 bg-light-pink rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                      >
                        <Icon className="w-6 h-6 text-primary-red" />
                        <span className="font-medium text-dark-gray">
                          {t(spec.key)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-2xl font-bold text-dark-gray mb-6">
                  {t('about.achievements')}
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 text-gray-700"
                    >
                      <div className="w-6 h-6 bg-primary-red rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="leading-relaxed">{t(achievement)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="bg-primary-red text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all transform hover:scale-105">
                  {t('nav.consultNow')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}