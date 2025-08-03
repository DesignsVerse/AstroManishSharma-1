"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { globalContent as enContent } from '@/data/globalContent/en';
import { globalContent as hiContent } from '@/data/globalContent/hi';
import { blogs as enBlogs } from '@/data/blogs/en';
import { blogs as hiBlogs } from '@/data/blogs/hi';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, Tag, Share2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface BlogContentClientProps {
  slug: string;
}

export default function BlogContentClient({ slug }: BlogContentClientProps) {
  const { language } = useLanguage();
  const content = language === 'en' ? enContent : hiContent;
  const blogs = language === 'en' ? enBlogs : hiBlogs;

  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {language === 'en' ? 'Blog Post Not Found' : 'ब्लॉग पोस्ट नहीं मिली'}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {language === 'en' ? 'The blog post you are looking for does not exist.' : 'आप जो ब्लॉग पोस्ट खोज रहे हैं वह मौजूद नहीं है।'}
        </p>
        <Link href="/blog">
          <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
            {language === 'en' ? 'Back to Blog' : 'ब्लॉग पर वापस जाएं'}
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/blog">
                <Button variant="ghost" className="text-orange-500 hover:text-orange-600">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'Back to Blog' : 'ब्लॉग पर वापस'}
                </Button>
              </Link>
            </div>
            
            <div className="text-center space-y-6">
              <Badge className="bg-orange-500 text-white text-lg px-4 py-2">
                {blog.category}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {blog.title}
              </h1>
              
              <div className="flex items-center justify-center space-x-6 text-gray-600">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  {blog.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {new Date(blog.publishedAt).toLocaleDateString(language === 'en' ? 'en-US' : 'hi-IN')}
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  {blog.readTime}
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {blog.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              <div className="lg:col-span-3">
                <div className="prose prose-lg max-w-none">
                  <div className="text-gray-700 leading-relaxed space-y-6">
                    {blog.content.split('\n').map((paragraph, index) => {
                      if (paragraph.startsWith('# ')) {
                        return <h1 key={index} className="text-4xl font-bold text-gray-900 mb-6">{paragraph.substring(2)}</h1>;
                      } else if (paragraph.startsWith('## ')) {
                        return <h2 key={index} className="text-3xl font-bold text-gray-900 mb-4 mt-8">{paragraph.substring(3)}</h2>;
                      } else if (paragraph.startsWith('### ')) {
                        return <h3 key={index} className="text-2xl font-bold text-gray-900 mb-3 mt-6">{paragraph.substring(4)}</h3>;
                      } else if (paragraph.startsWith('- ')) {
                        return <li key={index} className="text-gray-700 mb-2">{paragraph.substring(2)}</li>;
                      } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                        return <p key={index} className="font-bold text-gray-900 mb-4">{paragraph.substring(2, paragraph.length - 2)}</p>;
                      } else if (paragraph.trim()) {
                        return <p key={index} className="text-gray-700 mb-4">{paragraph}</p>;
                      }
                      return null;
                    })}
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <Button 
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    {language === 'en' ? 'Share this article' : 'इस लेख को साझा करें'}
                  </Button>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-0">
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900">
                        {language === 'en' ? 'Quick Info' : 'त्वरित जानकारी'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">{language === 'en' ? 'Reading Time' : 'पढ़ने का समय'}</span>
                        <span className="font-medium">{blog.readTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">{language === 'en' ? 'Category' : 'श्रेणी'}</span>
                        <span className="font-medium">{blog.category}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">{language === 'en' ? 'Tags' : 'टैग'}</span>
                        <span className="font-medium">{blog.tags.length}</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0">
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900">
                        {language === 'en' ? 'Get Consultation' : 'परामर्श लें'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        {language === 'en' ? 
                          'Ready to discover what the stars have in store for you?' :
                          'जानने के लिए तैयार हैं कि आपके लिए तारे क्या संग्रहीत करके रखे हैं?'
                        }
                      </p>
                      <Button 
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                      >
                        {content.common.bookNow}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {language === 'en' ? 'Related Articles' : 'संबंधित लेख'}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.filter(b => b.slug !== slug).slice(0, 3).map((relatedBlog) => (
                <Card key={relatedBlog.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-500 text-white">
                        {relatedBlog.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors line-clamp-2">
                      {relatedBlog.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-sm line-clamp-2">
                      {relatedBlog.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <Link href={`/blog/${relatedBlog.slug}`}>
                      <Button 
                        variant="outline"
                        className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
                      >
                        {content.common.readMore}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}