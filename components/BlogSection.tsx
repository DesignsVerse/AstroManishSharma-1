"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { globalContent as enContent } from '@/data/globalContent/en';
import { globalContent as hiContent } from '@/data/globalContent/hi';
import { blogs as enBlogs } from '@/data/blogs/en';
import { blogs as hiBlogs } from '@/data/blogs/hi';
import { Button } from '@/components/ui/button';
import { Sparkles, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function BlogSection() {
  const { language } = useLanguage();
  const content = language === 'en' ? enContent : hiContent;
  const blogs = language === 'en' ? enBlogs : hiBlogs;
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const maxIndex = window.innerWidth < 768 ? blogs.length - 1 : blogs.length - 4;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, [blogs.length]);

  // Scroll to active card
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const cardWidth = window.innerWidth < 768 ? (scrollContainer as HTMLElement).offsetWidth : 312; // 300px card + 12px gap
      (scrollContainer as HTMLElement).scrollTo({
        left: activeIndex * cardWidth,
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-b from-[#f9f9f9] to-[#f1f1f1] overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/cosmic-pattern.svg')] bg-repeat opacity-10" />
        <motion.div 
          className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-[#F0DF20]/10 rounded-full blur-lg sm:blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center bg-[#F0DF20]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#F0DF20]/20 mb-3 sm:mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#F0DF20] mr-1 sm:mr-2" />
            <span className="text-xs sm:text-sm font-medium text-gray-800">
              {content.blog.title}
            </span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 font-serif">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-[#F0DF20]">
              {content.blog.title.split(' ').slice(0, -1).join(' ')}
            </span>{' '}
            <span className="text-[#F0DF20]">{content.blog.title.split(' ').pop()}</span>
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            {content.blog.subtitle}
          </p>
        </motion.div>

        {/* Blog Carousel */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div className="flex justify-center space-x-4 sm:space-x-6">
              {blogs.map((blog, index) => (
                <motion.div 
                  key={blog.id}
                  className="snap-center flex-shrink-0 w-[calc(100vw-2rem)] sm:w-[280px] lg:w-[300px]"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  {/* Blog Card */}
                  <div className="group relative h-full bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                    {/* Blog Image */}
                    <div className="relative h-40 sm:h-48 overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                        <span className="text-xs bg-[#F0DF20] text-gray-900 px-2 sm:px-3 py-1 rounded-full font-medium">
                          {blog.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Blog Content */}
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center space-x-3 sm:space-x-4 text-xs text-gray-500 mb-2 sm:mb-3">
                        <div className="flex items-center">
                          <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-[#F0DF20]" />
                          {blog.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-[#F0DF20]" />
                          {new Date(blog.publishedAt).toLocaleDateString(language === 'en' ? 'en-US' : 'hi-IN')}
                        </div>
                      </div>
                      
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 font-serif line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">
                        {blog.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-[#F0DF20]" />
                          {blog.readTime}
                        </div>
                        <Link href={`/blog/${blog.slug}`}>
                          <Button 
                            size="sm"
                            variant="ghost"
                            className="text-[#F0DF20] hover:bg-[#F0DF20]/10 group text-xs sm:text-sm py-1 sm:py-2"
                          >
                            Read More
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 border-2 border-[#F0DF20] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-8 sm:mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/blog">
            <Button 
              variant="outline"
              className="border-[#F0DF20] text-[#F0DF20] hover:bg-[#F0DF20]/10 hover:text-gray-900 px-6 sm:px-8 py-2 sm:py-3 rounded-lg group text-base sm:text-lg font-semibold"
            >
              View All Articles
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}