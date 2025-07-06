'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Blog() {
  const { language } = useLanguage();
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const loadBlogData = async () => {
      try {
        const data = language === 'hi' 
          ? await import('@/data/blog-hi')
          : await import('@/data/blog-en');
        setBlogData(data.blogData);
      } catch (error) {
        console.error('Error loading blog data:', error);
      }
    };

    loadBlogData();
  }, [language]);

  if (!blogData) {
    return (
      <section id="blog" className="py-20 bg-light-pink">
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
    <section id="blog" className="py-20 bg-light-pink">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-6">
            {blogData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {blogData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.posts.slice(0, 3).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary-red text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-dark-gray mb-3 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  
                  <button className="flex items-center text-primary-red hover:text-red-700 font-medium transition-colors group">
                    {blogData.readMore}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {blogData.posts.length > 3 && (
          <div className="text-center mt-12">
            <button className="bg-primary-red text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all transform hover:scale-105">
              {language === 'hi' ? 'सभी लेख देखें' : 'View All Articles'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}