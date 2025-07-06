'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Users, TrendingUp } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-primary-red via-red-700 to-red-900 flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            {t('hero.title')}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-red-100 mb-12 leading-relaxed max-w-4xl mx-auto">
            {t('hero.subtitle')}
          </p>

          {/* CTA Button */}
          <div className="mb-16">
            <button className="bg-white text-primary-red px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 transform">
              {t('hero.cta')}
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-primary-red" />
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-3">15+</div>
              <div className="text-red-200">{t('hero.experience')}</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary-red" />
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-3">5000+</div>
              <div className="text-red-200">{t('hero.clients')}</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-primary-red" />
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-3">95%</div>
              <div className="text-red-200">{t('hero.accuracy')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-twinkle"></div>
        <div className="absolute top-32 right-20 w-2 h-2 bg-white rounded-full animate-twinkle delay-300"></div>
        <div className="absolute bottom-40 left-32 w-2 h-2 bg-white rounded-full animate-twinkle delay-700"></div>
        <div className="absolute bottom-20 right-40 w-2 h-2 bg-white rounded-full animate-twinkle delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-2 h-2 bg-white rounded-full animate-twinkle delay-1500"></div>
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full animate-twinkle delay-2000"></div>
      </div>
    </section>
  );
}