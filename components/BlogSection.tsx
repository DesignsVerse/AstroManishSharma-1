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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-12 sm:py-16 bg-white overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-[#F7CAC9]/10 rounded-full blur-lg sm:blur-xl"
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="inline-flex items-center bg-[#E0116F]/10 px-4 py-2 rounded-full border border-[#E0116F]/20 mb-6"
            whileHover={{ scale: 1.05 }}
                      >
            <Sparkles className="w-4 h-4 text-[#E75480] mr-2" />
            <span className="text-sm font-medium text-[#4B2E2E]">
              {content.blog.title}
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4B2E2E] mb-4 font-serif">
            <span className="bg-clip-text pt-4 text-transparent bg-gradient-to-r from-[#E0116F] to-[#E75480]">
              {content.blog.title.split(' ').slice(0, -1).join(' ')}
            </span>{' '}
            <span className="text-[#E75480]">{content.blog.title.split(' ').pop()}</span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#800000] max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
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
            <div className="flex space-x-6">
              {blogs.map((blog, index) => (
                <motion.div 
                  key={blog.id}
                  className="snap-center flex-shrink-0 w-[300px] sm:w-[280px] lg:w-[300px]"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  {/* Blog Card */}
                  <div className="group relative h-full bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E0116F]/20">
                    {/* Blog Image */}
                    <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-2xl">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#4B2E2E]/30 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="text-xs bg-[#E75480] text-white px-3 py-1 rounded-full font-medium">
                          {blog.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Blog Content */}
                    <div className="p-5">
                      <div className="flex items-center space-x-4 text-xs text-[#800000] mb-3">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1 text-[#E0116F]" />
                          {blog.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1 text-[#E0116F]" />
                          {new Date(blog.publishedAt).toLocaleDateString(language === 'en' ? 'en-US' : 'hi-IN')}
                        </div>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-bold text-[#4B2E2E] mb-2 font-serif line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-[#800000] mb-4 line-clamp-2">
                        {blog.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-[#800000]">
                          <Clock className="w-4 h-4 mr-1 text-[#E0116F]" />
                          {blog.readTime}
                        </div>
                        <Link href={`/blog/${blog.slug}`}>
                          <Button 
                            size="sm"
                            variant="ghost"
                            className="text-[#E75480] hover:bg-[#E0116F]/10 group text-sm py-2"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 border-2 border-[#E0116F] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-10 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
                  >
          <Link href="/blog">
            <Button 
              variant="outline"
              className="border-[#4B2E2E] text-[#E75480] hover:bg-[#E0116F]/10 hover:text-[#E0116F] px-8 py-3 rounded-full group text-lg font-semibold"
            >
              View All Articles
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}