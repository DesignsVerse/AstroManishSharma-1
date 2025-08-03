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
import { useRef, useState } from 'react';

export default function BlogSection() {
  const { language } = useLanguage();
  const content = language === 'en' ? enContent : hiContent;
  const blogs = language === 'en' ? enBlogs : hiBlogs;
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      (scrollContainerRef.current as HTMLElement).scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScrollPosition, 300);
    }
  };

  return (
    <section className="relative py-16 bg-gradient-to-b from-[#f9f9f9] to-[#f1f1f1]">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/cosmic-pattern.svg')] bg-repeat opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#F0DF20]/10 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center bg-[#F0DF20]/10 px-4 py-2 rounded-full border border-[#F0DF20]/20 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-[#F0DF20] mr-2" />
            <span className="text-sm font-medium text-gray-800">
              { "Cosmic Insights"}
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
            <span className="text-gray-900">{content.blog.title.split(' ').slice(0, -1).join(' ')}</span>{' '}
            <span className="text-[#F0DF20]">{content.blog.title.split(' ').pop()}</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            {content.blog.subtitle}
          </p>
        </motion.div>

        {/* Blog Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <AnimatePresence>
            {showLeftArrow && (
              <motion.button
                onClick={() => scroll('left')}
                className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#F0DF20] hover:bg-[#F0DF20]/10 transition-all"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                whileHover={{ scale: 1.1 }}
              >
                <ArrowRight className="w-5 h-5 rotate-180" />
              </motion.button>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showRightArrow && (
              <motion.button
                onClick={() => scroll('right')}
                className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#F0DF20] hover:bg-[#F0DF20]/10 transition-all"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                whileHover={{ scale: 1.1 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Cards Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory px-2 pb-6 scrollbar-hide"
            onScroll={checkScrollPosition}
          >
            <div className="flex space-x-6">
              {blogs.map((blog) => (
                <motion.div 
                  key={blog.id}
                  className="snap-start flex-shrink-0 w-[300px]"
                  whileHover={{ y: -5 }}
                >
                  {/* Blog Card */}
                  <div className="group relative h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                    {/* Blog Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-xs bg-[#F0DF20] text-gray-900 px-3 py-1 rounded-full font-medium">
                          {blog.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Blog Content */}
                    <div className="p-5">
                      <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1 text-[#F0DF20]" />
                          {blog.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1 text-[#F0DF20]" />
                          {new Date(blog.publishedAt).toLocaleDateString(language === 'en' ? 'en-US' : 'hi-IN')}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-2 font-serif line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {blog.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-4 h-4 mr-1 text-[#F0DF20]" />
                          {blog.readTime}
                        </div>
                        <Link href={`/blog/${blog.slug}`}>
                          <Button 
                            size="sm"
                            variant="ghost"
                            className="text-[#F0DF20] hover:bg-[#F0DF20]/10 group"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/blog">
            <Button 
              variant="outline"
              className="border-[#F0DF20] text-[#F0DF20] hover:bg-[#F0DF20]/10 px-8 py-3 rounded-lg group"
            >
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}