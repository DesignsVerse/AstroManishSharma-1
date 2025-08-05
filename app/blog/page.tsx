"use client";

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { globalContent as enContent } from '@/data/globalContent/en';
import { globalContent as hiContent } from '@/data/globalContent/hi';
import { blogs as enBlogs } from '@/data/blogs/en';
import { blogs as hiBlogs } from '@/data/blogs/hi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge, Sparkles, Calendar, Clock, User, Tag, Search } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/utils/motion';

export default function Blog() {
  const { language } = useLanguage();
  const content = language === 'en' ? enContent : hiContent;
  const blogs = language === 'en' ? enBlogs : hiBlogs;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const zodiacSymbols = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
  const planetSymbols = ['☉', '☽', '☿', '♀', '♂', '♃', '♄', '♅', '♆', '♇'];

  const categories = ['All', 'Astrology', 'Vastu', 'Numerology', 'Spirituality'];
  const filteredBlogs = blogs.filter(blog => 
    (selectedCategory === 'All' || blog.category === selectedCategory) &&
    (blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  const featuredBlog = filteredBlogs[0] || blogs[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9f9f9] to-[#f1f1f1] text-[#1a1a1a] relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="fixed inset-0 -z-50">
        <div className="absolute inset-0 bg-[url('/assets/cosmic-pattern.svg')] bg-repeat opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f9f9f9]/90 to-[#f1f1f1]/90" />
      </div>

      {/* Animated Cosmic Elements */}
      <div className="fixed inset-0 -z-40 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#F0DF20]/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${1 + Math.random() * 1.5}rem`
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.4, 0.2],
              scale: [0.5, 0.7, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          >
            {i < 12 ? zodiacSymbols[i] : planetSymbols[i - 12]}
          </motion.div>
        ))}
      </div>

      <Header />
      
      <main className="pt-24 sm:pt-28">
        {/* Hero Section with Search Bar */}
        <section className="relative py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,#F0DF20_0%,transparent_70%)] opacity-10 animate-pulse" 
              style={{ transform: 'translate(-50%, -50%)' }} />
          </div>
          
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            animate="show"
            className="container mx-auto px-3 sm:px-4 lg:px-6"
          >
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                variants={fadeIn('up', 'tween', 0.2, 0.8)}
                className="inline-flex items-center bg-[#F0DF20]/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-[#F0DF20]/20 shadow-sm mb-4 sm:mb-6"
              >
                <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-[#F0DF20] mr-2 sm:mr-3" />
                <span className="text-[#F0DF20] font-semibold text-base sm:text-lg">{content.blog.title}</span>
              </motion.div>
              
              <motion.h1 
                variants={fadeIn('up', 'tween', 0.4, 0.8)}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 font-serif bg-clip-text text-transparent bg-gradient-to-r from-[#1a1a1a] to-[#F0DF20]"
              >
                {content.blog.title}
              </motion.h1>
              
              <motion.p 
                variants={fadeIn('up', 'tween', 0.6, 0.8)}
                className="text-base sm:text-lg text-[#1a1a1a]/80 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10"
              >
                {content.blog.subtitle}
              </motion.p>

              {/* Search Bar */}
              <motion.div 
                variants={fadeIn('up', 'tween', 0.8, 0.8)}
                className="relative max-w-md mx-auto mb-8 sm:mb-10"
              >
                <input
                  type="text"
                  placeholder={language === 'en' ? 'Search blogs...' : 'ब्लॉग खोजें...'}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-2 sm:py-3 px-4 sm:px-5 text-sm sm:text-base bg-white/90 backdrop-blur-sm border border-[#F0DF20]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F0DF20] transition-all duration-300"
                />
                <Search className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 w-5 sm:w-6 h-5 sm:h-6 text-[#F0DF20]" />
              </motion.div>
              
              <motion.div 
                variants={fadeIn('up', 'tween', 1.0, 0.8)}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button 
                  className="bg-gradient-to-r from-[#F0DF20] to-[#F5C742] hover:from-[#F5C742] hover:to-[#F0DF20] text-[#1a1a1a] font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {content.common.getConsultation}
                </Button>
                
                <Link href="/blog">
                  <Button 
                    variant="outline"
                    className="border-2 border-[#F0DF20] text-[#F0DF20] hover:bg-[#F0DF20]/10 font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-xl backdrop-blur-sm"
                  >
                    {content.common.viewAll}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Category Filter */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-[#f1f1f1] to-[#f9f9f9]">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6">
            <motion.div
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              animate="show"
              className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  variants={fadeIn('up', 'tween', index * 0.1, 0.6)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-[#F0DF20] to-[#F5C742] text-[#1a1a1a]'
                      : 'bg-white/90 backdrop-blur-sm border border-[#F0DF20]/20 text-[#1a1a1a]/80 hover:bg-[#F0DF20]/10'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Blog Section */}
        {featuredBlog && (
          <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#f9f9f9] to-[#f1f1f1]">
            <div className="container mx-auto px-3 sm:px-4 lg:px-6">
              <motion.div
                variants={staggerContainer(0.1, 0.2)}
                initial="hidden"
                animate="show"
                className="max-w-5xl mx-auto"
              >
                <motion.div
                  variants={fadeIn('up', 'tween', 0.2, 0.8)}
                  className="text-center mb-12 sm:mb-16"
                >
                  <div className="inline-flex items-center bg-[#F0DF20]/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-[#F0DF20]/20 shadow-sm mb-4 sm:mb-6">
                    <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-[#F0DF20] mr-2 sm:mr-3" />
                    <span className="text-[#F0DF20] font-semibold text-base sm:text-lg">
                      {language === 'en' ? 'Featured Blog' : 'विशेष ब्लॉग'}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-serif bg-clip-text text-transparent bg-gradient-to-r from-[#1a1a1a] to-[#F0DF20]">
                    {language === 'en' ? 'Insight of the Month' : 'महीने की अंतर्दृष्टि'}
                  </h2>
                </motion.div>

                <motion.div
                  variants={fadeIn('up', 'tween', 0.4, 0.8)}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="relative overflow-hidden bg-white/90 backdrop-blur-sm border border-[#F0DF20]/20 hover:border-[#F0DF20]/40 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F0DF20]/10 to-[#F5C742]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 text-[#F0DF20]/30 text-3xl sm:text-4xl group-hover:text-[#F0DF20]/70">🕉</div>
                    
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                      <div className="relative overflow-hidden">
                        <img
                          src={featuredBlog.image}
                          alt={featuredBlog.title}
                          className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105 rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/30 to-transparent" />
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-gradient-to-r from-[#F0DF20] to-[#F5C742] px-3 py-1 rounded-xl text-[#1a1a1a] text-xs sm:text-sm font-medium">
                          {featuredBlog.category}
                        </div>
                      </div>
                      
                      <div className="p-6 sm:p-8">
                        <div className="flex items-center space-x-4 text-sm sm:text-base text-[#1a1a1a]/70 mb-4 sm:mb-6">
                          <div className="flex items-center">
                            <User className="w-4 sm:w-5 h-4 sm:h-5 mr-1 text-[#F0DF20]" />
                            {featuredBlog.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 sm:w-5 h-4 sm:h-5 mr-1 text-[#F0DF20]" />
                            {new Date(featuredBlog.publishedAt).toLocaleDateString(language === 'en' ? 'en-US' : 'hi-IN')}
                          </div>
                        </div>
                        
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#1a1a1a] group-hover:text-[#F0DF20] transition-colors duration-300 font-serif line-clamp-2">
                          {featuredBlog.title}
                        </h3>
                        <p className="text-sm sm:text-base text-[#1a1a1a]/80 mt-3 sm:mt-4 line-clamp-4">
                          {featuredBlog.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between mt-4 sm:mt-6">
                          <div className="flex items-center text-sm sm:text-base text-[#1a1a1a]/70">
                            <Clock className="w-4 sm:w-5 h-4 sm:h-5 mr-1 text-[#F0DF20]" />
                            {featuredBlog.readTime}
                          </div>
                          <Link href={`/blog/${featuredBlog.slug}`}>
                            <Button 
                              className="bg-gradient-to-r from-[#F0DF20] to-[#F5C742] hover:from-[#F5C742] hover:to-[#F0DF20] text-[#1a1a1a] font-semibold rounded-xl"
                            >
                              {content.common.readMore}
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#f1f1f1] to-[#f9f9f9]">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6">
            <motion.div
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              animate="show"
              className="max-w-5xl mx-auto"
            >
              <motion.div
                variants={fadeIn('up', 'tween', 0.2, 0.8)}
                className="text-center mb-12 sm:mb-16"
              >
                <div className="inline-flex items-center bg-[#F0DF20]/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-[#F0DF20]/20 shadow-sm mb-4 sm:mb-6">
                  <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-[#F0DF20] mr-2 sm:mr-3" />
                  <span className="text-[#F0DF20] font-semibold text-base sm:text-lg">
                    {language === 'en' ? 'All Blogs' : 'सभी ब्लॉग'}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-serif bg-clip-text text-transparent bg-gradient-to-r from-[#1a1a1a] to-[#F0DF20]">
                  {language === 'en' ? 'Explore Cosmic Insights' : 'ब्रह्मांडीय अंतर्दृष्टि का अन्वेषण करें'}
                </h2>
                <p className="text-base sm:text-lg text-[#1a1a1a]/80 max-w-3xl mx-auto leading-relaxed">
                  {language === 'en' ? 'Dive into our collection of spiritual wisdom' : 'हमारे आध्यात्मिक ज्ञान के संग्रह में गोता लगाएँ'}
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn('up', 'tween', 0.4, 0.8)}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              >
                {filteredBlogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    variants={fadeIn('up', 'tween', index * 0.1, 0.8)}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group"
                  >
                    <Card className="relative overflow-hidden h-full bg-white/90 backdrop-blur-sm border border-[#F0DF20]/20 hover:border-[#F0DF20]/40 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#F0DF20]/10 to-[#F5C742]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-[#F0DF20]/30 text-2xl sm:text-3xl group-hover:text-[#F0DF20]/70">🕉</div>
                      
                      <div className="relative overflow-hidden rounded-t-2xl">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/30 to-transparent" />
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-gradient-to-r from-[#F0DF20] to-[#F5C742] px-3 py-1 rounded-xl text-[#1a1a1a] text-xs sm:text-sm font-medium">
                          {blog.category}
                        </div>
                      </div>
                      
                      <CardHeader className="pb-2">
                        <div className="flex items-center space-x-4 text-sm sm:text-base text-[#1a1a1a]/70 mb-3 sm:mb-4">
                          <div className="flex items-center">
                            <User className="w-4 sm:w-5 h-4 sm:h-5 mr-1 text-[#F0DF20]" />
                            {blog.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 sm:w-5 h-4 sm:h-5 mr-1 text-[#F0DF20]" />
                            {new Date(blog.publishedAt).toLocaleDateString(language === 'en' ? 'en-US' : 'hi-IN')}
                          </div>
                        </div>
                        
                        <CardTitle className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#1a1a1a] group-hover:text-[#F0DF20] transition-colors duration-300 font-serif line-clamp-2">
                          {blog.title}
                        </CardTitle>
                        <CardDescription className="text-sm sm:text-base text-[#1a1a1a]/80 line-clamp-3">
                          {blog.excerpt}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm sm:text-base text-[#1a1a1a]/70">
                              <Clock className="w-4 sm:w-5 h-4 sm:h-5 mr-1 text-[#F0DF20]" />
                              {blog.readTime}
                            </div>
                            <div className="flex items-center space-x-1">
                              <Tag className="w-4 sm:w-5 h-4 sm:h-5 text-[#F0DF20]" />
                              <span className="text-sm sm:text-base text-[#1a1a1a]/70">{blog.tags.length} {language === 'en' ? 'tags' : 'टैग'}</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {blog.tags.slice(0, 3).map((tag, index) => (
                              <Badge key={index} className="text-xs sm:text-sm text-[#1a1a1a] bg-[#f9f9f9] border-[#F0DF20]/20">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <Link href={`/blog/${blog.slug}`}>
                            <Button 
                              className="w-full bg-gradient-to-r from-[#F0DF20] to-[#F5C742] hover:from-[#F5C742] hover:to-[#F0DF20] text-[#1a1a1a] font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                            >
                              {content.common.readMore}
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-[#F0DF20] to-[#F5C742]">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[url('/assets/cosmic-pattern.svg')] opacity-10" />
          </div>
          
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 text-center">
            <motion.div
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              animate="show"
              className="max-w-3xl mx-auto"
            >
              <motion.div
                variants={fadeIn('up', 'tween', 0.2, 0.8)}
                className="inline-flex items-center bg-white/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-[#F0DF20]/20 shadow-sm mb-4 sm:mb-6"
              >
                <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-[#1a1a1a] mr-2 sm:mr-3" />
                <span className="text-[#1a1a1a] font-semibold text-base sm:text-lg">
                  {language === 'en' ? 'Stay Updated' : 'अपडेट रहें'}
                </span>
              </motion.div>
              
              <motion.h2 
                variants={fadeIn('up', 'tween', 0.4, 0.8)}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 font-serif text-white"
              >
                {language === 'en' ? 'Stay Updated' : 'अपडेट रहें'}
              </motion.h2>
              
              <motion.p 
                variants={fadeIn('up', 'tween', 0.6, 0.8)}
                className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10"
              >
                {language === 'en' ? 
                  'Subscribe to our newsletter and get the latest insights on astrology, spiritual guidance, and life wisdom delivered to your inbox.' :
                  'हमारे न्यूज़लेटर की सदस्यता लें और ज्योतिष, आध्यात्मिक मार्गदर्शन और जीवन की बुद्धि पर नवीनतम अंतर्दृष्टि अपने इनबॉक्स में प्राप्त करें।'
                }
              </motion.p>
              
              <motion.div 
                variants={fadeIn('up', 'tween', 0.8, 0.8)}
                className="max-w-md mx-auto flex gap-2 sm:gap-3"
              >
                <input
                  type="email"
                  placeholder={language === 'en' ? 'Enter your email' : 'अपना ईमेल दर्ज करें'}
                  className="flex-1 px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-base bg-white/90 backdrop-blur-sm rounded-xl text-[#1a1a1a] placeholder-[#1a1a1a]/50 border border-[#F0DF20]/20 focus:outline-none focus:ring-2 focus:ring-[#F0DF20] transition-all duration-300"
                />
                <Button 
                  className="bg-white hover:bg-gray-100 text-[#1a1a1a] font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {language === 'en' ? 'Subscribe' : 'सदस्यता लें'}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}