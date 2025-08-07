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
import { Badge, Sparkles, Calendar, Clock, User, Tag, Search, ArrowRight } from 'lucide-react';
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
      
      <main className="pt-10 sm:pt-16">
        {/* Hero Section with Search Bar */}
        <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden bg-gradient-to-b from-white to-[#FFFDF0]">
  {/* Background elements */}
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,#F0DF20_0%,transparent_60%)] opacity-15 animate-pulse-slow" 
      style={{ transform: 'translate(-50%, -50%)' }} />
    <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-10 mix-blend-overlay" />
  </div>
  
  {/* Floating decorative elements */}
  <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-[#F0DF20]/20 blur-xl animate-float" />
  <div className="absolute bottom-1/4 right-16 w-24 h-24 rounded-full bg-[#F0DF20]/15 blur-xl animate-float-delay" />
  
  <motion.div
    variants={staggerContainer(0.1, 0.3)}
    initial="hidden"
    animate="show"
    className="container mx-auto px-4 sm:px-6 lg:px-8"
  >
    <div className="max-w-4xl lg:max-w-6xl mx-auto text-center">
      {/* Badge with improved animation */}
        
      
      {/* Main heading with refined gradient */}
      <motion.h1 
        variants={fadeIn('up', 'tween', 0.4, 0.8)}
        className="text-5xl pt-5 sm:text-6xl lg:text-7xl font-bold mb-7 sm:mb-10 font-serif bg-clip-text text-transparent bg-gradient-to-br from-[#2a2a2a] via-[#1a1a1a] to-[#F0DF20] leading-tight"
      >
        {content.blog.title}
      </motion.h1>
      
      {/* Subtitle with better typography */}
      <motion.p 
        variants={fadeIn('up', 'tween', 0.6, 0.8)}
        className="text-lg sm:text-xl text-[#333]/90 max-w-3xl mx-auto leading-relaxed sm:leading-loose mb-10 sm:mb-12 px-4 sm:px-0"
      >
        {content.blog.subtitle}
      </motion.p>

      {/* Enhanced search bar */}
      <motion.div 
        variants={fadeIn('up', 'tween', 0.8, 0.8)}
        className="relative max-w-xl mx-auto mb-12 sm:mb-14"
      >
        <input
          type="text"
          placeholder={language === 'en' ? 'Search articles, topics...' : 'लेख, विषय खोजें...'}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-3 px-5 text-base sm:text-lg bg-white/95 backdrop-blur-sm border-2 border-[#F0DF20]/30 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#F0DF20]/30 shadow-sm hover:shadow-md transition-all duration-300 placeholder-[#666]/60"
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center">
          <kbd className="hidden sm:inline-flex items-center px-2 py-1 mr-2 border border-[#F0DF20]/30 rounded-md text-sm text-[#F0DF20] font-mono">
            ⌘K
          </kbd>
          <Search className="w-6 h-6 text-[#F0DF20] hover:text-[#d4c41c] transition-colors" />
        </div>
      </motion.div>
      
      {/* Buttons with improved interaction */}
      <motion.div 
        variants={fadeIn('up', 'tween', 1.0, 0.8)}
        className="flex flex-col sm:flex-row gap-5 justify-center"
      >
        <Button 
          className="relative overflow-hidden group bg-gradient-to-br from-[#F0DF20] via-[#F0DF20] to-[#F5C742] hover:from-[#F5C742] hover:to-[#F0DF20] text-[#1a1a1a] font-semibold px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
        >
          <span className="relative z-10">{content.common.getConsultation}</span>
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        </Button>
        
        <Link href="/blog">
          <Button 
            variant="outline"
            className="group border-2 border-[#F0DF20] text-[#F0DF20] hover:bg-[#F0DF20]/10 font-semibold px-8 py-3.5 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(240,223,32,0.3)] hover:border-[#F0DF20]/80"
          >
            <span className="flex items-center">
              {content.common.viewAll}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </Link>
      </motion.div>
    </div>
  </motion.div>
</section>
       

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