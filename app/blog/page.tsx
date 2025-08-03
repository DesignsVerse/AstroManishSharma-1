"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { globalContent as enContent } from '@/data/globalContent/en';
import { globalContent as hiContent } from '@/data/globalContent/hi';
import { blogs as enBlogs } from '@/data/blogs/en';
import { blogs as hiBlogs } from '@/data/blogs/hi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge, Sparkles, Calendar, Clock, User, Tag } from 'lucide-react';
import Link from 'next/link';

export default function Blog() {
  const { language } = useLanguage();
  const content = language === 'en' ? enContent : hiContent;
  const blogs = language === 'en' ? enBlogs : hiBlogs;

  return (
    <div className="min-h-screen bg-[#EEEEEE] relative overflow-hidden">
      <Header />
      
      <main className="pt-16">
        {/* Spiritual Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/mandala-pattern.svg')] bg-repeat" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#F0DF20] rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#F0DF20] rounded-full blur-3xl opacity-20" />
        </div>

        {/* Floating Horoscope Symbols */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute text-[#F0DF20]/20 text-3xl"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${8 + Math.random() * 15}s linear infinite`,
                fontSize: `${1.5 + Math.random() * 2}rem`,
              }}
            >
              {['☉','☽','☿','♀','♂','♃','♄','♅'][i]}
            </div>
          ))}
        </div>

        {/* Hero Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="relative text-center mb-16">
              <div className="absolute -inset-4 bg-[#F0DF20]/20 rounded-3xl -rotate-6"></div>
              <div className="absolute -inset-2 bg-[#F0DF20]/10 rounded-3xl rotate-3"></div>
              <div className="relative inline-flex items-center bg-[#F0DF20]/20 px-4 py-2 rounded-full border border-[#F0DF20]/30 mb-4">
                <Sparkles className="w-5 h-5 text-[#F0DF20] mr-2" />
                <span className="text-[#000000] font-medium">{content.blog.title}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6 font-serif">
                {content.blog.title.split(' ').map((word, i) => (
                  <span 
                    key={i} 
                    className={i % 2 === 0 ? "text-[#000000]" : "text-[#F0DF20]"}
                  >
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <p className="text-xl text-[#000000]/70 max-w-3xl mx-auto leading-relaxed">
                {content.blog.subtitle}
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Link href="/contact">
                  <Button 
                    size="lg"
                    className="bg-[#F0DF20] hover:bg-[#F0DF20]/90 text-[#000000] font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    {content.common.getConsultation}
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-[#F0DF20] text-[#F0DF20] hover:bg-[#F0DF20] hover:text-[#000000] font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {content.common.viewAll}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative mt-12 max-w-4xl mx-auto">
              <img
                src="https://images.pexels.com/photos/8566443/pexels-photo-8566443.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Blog Insights"
                className="w-full h-64 object-cover rounded-2xl shadow-2xl border-4 border-[#FFFFFF]"
              />
              <div className="absolute bottom-4 right-4 bg-[#F0DF20] p-2 rounded-full shadow-lg">
                <span className="text-2xl text-[#000000]">🕉</span>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-[#FFFFFF]/50 backdrop-blur-sm relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <Card 
                  key={blog.id} 
                  className="group relative hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/50 backdrop-blur-sm border border-[#F0DF20]/20"
                >
                  <div className="absolute top-4 right-4 text-[#F0DF20]/30 text-3xl">🕉</div>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#F0DF20] text-[#000000] border-[#F0DF20]/50">
                        {blog.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-4 text-sm text-[#000000]/70 mb-3">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1 text-[#F0DF20]" />
                        {blog.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1 text-[#F0DF20]" />
                        {new Date(blog.publishedAt).toLocaleDateString(language === 'en' ? 'en-US' : 'hi-IN')}
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-[#000000] group-hover:text-[#F0DF20] transition-colors line-clamp-2 font-serif">
                      {blog.title}
                    </CardTitle>
                    <CardDescription className="text-[#000000]/70 text-sm line-clamp-3">
                      {blog.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-[#000000]/70">
                          <Clock className="w-4 h-4 mr-1 text-[#F0DF20]" />
                          {blog.readTime}
                        </div>
                        <div className="flex items-center space-x-1">
                          <Tag className="w-4 h-4 text-[#F0DF20]" />
                          <span className="text-sm text-[#000000]/70">{blog.tags.length} {language === 'en' ? 'tags' : 'टैग'}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {blog.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} className="text-xs text-[#000000] border-[#F0DF20]/50">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Link href={`/blog/${blog.slug}`}>
                        <Button 
                          className="w-full bg-[#F0DF20] hover:bg-[#F0DF20]/90 text-[#000000] font-semibold transition-colors rounded-full shadow-lg hover:shadow-xl"
                        >
                          {content.common.readMore}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-[#EEEEEE] relative z-10">
          <div className="container mx-auto px-4 text-center">
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -inset-4 bg-[#F0DF20]/20 rounded-3xl -rotate-6"></div>
              <div className="absolute -inset-2 bg-[#F0DF20]/10 rounded-3xl rotate-3"></div>
              <Card className="relative bg-white/50 backdrop-blur-sm border border-[#F0DF20]/20 shadow-lg">
                <div className="absolute top-4 right-4 text-[#F0DF20]/30 text-3xl">🕉</div>
                <CardHeader>
                  <div className="inline-flex items-center bg-[#F0DF20]/20 px-4 py-2 rounded-full border border-[#F0DF20]/30 mb-4">
                    <Sparkles className="w-5 h-5 text-[#F0DF20] mr-2" />
                    <span className="text-[#000000] font-medium">{language === 'en' ? 'Stay Updated' : 'अपडेट रहें'}</span>
                  </div>
                  <CardTitle className="text-3xl font-bold text-[#000000] font-serif">
                    {(language === 'en' ? 'Stay Updated' : 'अपडेट रहें').split(' ').map((word, i) => (
                      <span 
                        key={i} 
                        className={i % 2 === 0 ? "text-[#000000]" : "text-[#F0DF20]"}
                      >
                        {word}{' '}
                      </span>
                    ))}
                  </CardTitle>
                  <CardDescription className="text-[#000000]/70 text-lg max-w-2xl mx-auto">
                    {language === 'en' ? 
                      'Subscribe to our newsletter and get the latest insights on astrology, spiritual guidance, and life wisdom delivered to your inbox.' :
                      'हमारे न्यूज़लेटर की सदस्यता लें और ज्योतिष, आध्यात्मिक मार्गदर्शन और जीवन की बुद्धि पर नवीनतम अंतर्दृष्टि अपने इनबॉक्स में प्राप्त करें।'
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="max-w-md mx-auto flex gap-2">
                    <input
                      type="email"
                      placeholder={language === 'en' ? 'Enter your email' : 'अपना ईमेल दर्ज करें'}
                      className="flex-1 px-4 py-3 rounded-full text-[#000000] placeholder-[#000000]/50 border border-[#F0DF20]/50 focus:outline-none focus:ring-2 focus:ring-[#F0DF20]"
                    />
                    <Button 
                      className="bg-[#F0DF20] hover:bg-[#F0DF20]/90 text-[#000000] font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      {language === 'en' ? 'Subscribe' : 'सदस्यता लें'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
      `}</style>
    </div>
  );
}