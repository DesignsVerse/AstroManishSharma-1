'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Testimonials() {
  const { language } = useLanguage();
  const [testimonialsData, setTestimonialsData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const loadTestimonialsData = async () => {
      try {
        const data = language === 'hi' 
          ? await import('@/data/testimonials-hi')
          : await import('@/data/testimonials-en');
        setTestimonialsData(data.testimonialsData);
      } catch (error) {
        console.error('Error loading testimonials data:', error);
      }
    };

    loadTestimonialsData();
  }, [language]);

  useEffect(() => {
    if (!isAutoPlaying || !testimonialsData) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonialsData.testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonialsData]);

  const nextTestimonial = () => {
    if (!testimonialsData) return;
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialsData.testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    if (!testimonialsData) return;
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!testimonialsData) {
    return (
      <section className="py-20 bg-white">
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

  const currentTestimonial = testimonialsData.testimonials[currentIndex];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-light-pink rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-light-pink rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-6">
            {testimonialsData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {testimonialsData.subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Testimonial Display */}
          <div 
            className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 min-h-[400px] flex items-center border border-gray-100"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-primary-red rounded-full flex items-center justify-center">
              <Quote className="w-8 h-8 text-white" />
            </div>

            <div className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Client Photo */}
                <div className="lg:col-span-1 text-center">
                  <div className="relative inline-block">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto shadow-xl border-4 border-white"
                    />
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary-red rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-dark-gray mb-2">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-primary-red font-medium mb-2">
                      {currentTestimonial.location}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {currentTestimonial.service}
                    </p>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < currentTestimonial.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-3 text-gray-600 font-medium">
                      {currentTestimonial.rating}/5
                    </span>
                  </div>

                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                    "{currentTestimonial.testimonial}"
                  </blockquote>

                  <div className="text-sm text-gray-500">
                    {testimonialsData.consultedOn}: {currentTestimonial.date}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-light-pink"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-primary-red" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-light-pink"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-primary-red" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mb-12">
            {testimonialsData.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-red w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {testimonialsData.testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative group transition-all duration-300 ${
                  index === currentIndex
                    ? 'scale-110 z-10'
                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full aspect-square rounded-2xl object-cover shadow-lg"
                  />
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-primary-red/20 rounded-2xl"></div>
                  )}
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                      <p className="text-xs font-semibold text-dark-gray truncate">
                        {testimonial.name}
                      </p>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < testimonial.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {testimonialsData.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary-red mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}