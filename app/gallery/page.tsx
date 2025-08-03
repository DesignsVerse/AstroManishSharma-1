"use client";

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { globalContent as enContent } from '@/data/globalContent/en';
import { globalContent as hiContent } from '@/data/globalContent/hi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegShareSquare, FaDownload, FaRegWindowClose, FaExpand, FaCompress } from 'react-icons/fa';
import { FiHeart, FiBookmark, FiShare2 } from 'react-icons/fi';
import Masonry from 'react-masonry-css';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
  category: 'Services' | 'Gemstones' | 'Testimonials' | 'सेवाएं' | 'रत्न' | 'प्रशंसापत्र';
  likes: number;
  featured?: boolean;
}

export default function Gallery() {
  const { language } = useLanguage();
  const content = language === 'en' ? enContent : hiContent;
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const galleryItems: GalleryItem[] = [
    { 
      id: 1, 
      image: '/assets/gallery/services-1.jpg', 
      title: language === 'en' ? 'Kundli Analysis' : 'कुंडली विश्लेषण',
      description: language === 'en' ? 'Detailed astrological birth chart analysis' : 'विस्तृत ज्योतिषीय जन्म कुंडली विश्लेषण',
      category: language === 'en' ? 'Services' : 'सेवाएं',
      likes: 124,
      featured: true
    },
    { 
      id: 2, 
      image: '/assets/gallery/testimonials-1.jpg', 
      title: language === 'en' ? 'Client Feedback' : 'ग्राहक प्रतिक्रिया',
      description: language === 'en' ? 'Satisfied clients sharing their experiences' : 'संतुष्ट ग्राहक अपने अनुभव साझा करते हुए',
      category: language === 'en' ? 'Testimonials' : 'प्रशंसापत्र',
      likes: 89
    },
    { 
      id: 3, 
      image: '/assets/gallery/gemstones-1.jpg', 
      title: language === 'en' ? 'Certified Gemstones' : 'प्रमाणित रत्न',
      description: language === 'en' ? 'Authentic planetary gemstones for healing' : 'उपचार के लिए प्रामाणिक ग्रह रत्न',
      category: language === 'en' ? 'Gemstones' : 'रत्न',
      likes: 156,
      featured: true
    },
    { 
      id: 4, 
      image: '/assets/gallery/services-2.jpg', 
      title: language === 'en' ? 'Vastu Consultation' : 'वास्तु परामर्श',
      description: language === 'en' ? 'Harmonizing living spaces with cosmic energy' : 'ब्रह्मांडीय ऊर्जा के साथ रहने की जगह को सामंजस्य बनाना',
      category: language === 'en' ? 'Services' : 'सेवाएं',
      likes: 72
    },
    { 
      id: 5, 
      image: '/assets/gallery/testimonials-2.jpg', 
      title: language === 'en' ? 'Success Story' : 'सफलता की कहानी',
      description: language === 'en' ? 'Client transformation through astrology' : 'ज्योतिष के माध्यम से ग्राहक परिवर्तन',
      category: language === 'en' ? 'Testimonials' : 'प्रशंसापत्र',
      likes: 203
    },
    { 
      id: 6, 
      image: '/assets/gallery/gemstones-2.jpg', 
      title: language === 'en' ? 'Healing Crystals' : 'उपचार क्रिस्टल',
      description: language === 'en' ? 'Powerful energy crystals for wellbeing' : 'कल्याण के लिए शक्तिशाली ऊर्जा क्रिस्टल',
      category: language === 'en' ? 'Gemstones' : 'रत्न',
      likes: 181
    },
    { 
      id: 7, 
      image: '/assets/gallery/services-3.jpg', 
      title: language === 'en' ? 'Numerology Session' : 'अंक ज्योतिष सत्र',
      description: language === 'en' ? 'Life path number analysis' : 'जीवन पथ संख्या विश्लेषण',
      category: language === 'en' ? 'Services' : 'सेवाएं',
      likes: 95
    },
    { 
      id: 8, 
      image: '/assets/gallery/events-1.jpg', 
      title: language === 'en' ? 'Spiritual Event' : 'आध्यात्मिक कार्यक्रम',
      description: language === 'en' ? 'Group meditation and healing session' : 'समूह ध्यान और उपचार सत्र',
      category: language === 'en' ? 'Testimonials' : 'प्रशंसापत्र',
      likes: 142,
      featured: true
    },
  ];

  const filters = [
    { id: 'all', label: language === 'en' ? 'All' : 'सभी' },
    { id: 'services', label: language === 'en' ? 'Services' : 'सेवाएं' },
    { id: 'gemstones', label: language === 'en' ? 'Gemstones' : 'रत्न' },
    { id: 'testimonials', label: language === 'en' ? 'Testimonials' : 'प्रशंसापत्र' },
    { id: 'featured', label: language === 'en' ? 'Featured' : 'विशेष' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : activeFilter === 'featured'
      ? galleryItems.filter(item => item.featured)
      : galleryItems.filter(item => item.category.toLowerCase().includes(activeFilter));

  const badgeColors: { [key in GalleryItem['category']]: string } = {
    Services: "bg-gradient-to-r from-amber-100 to-amber-300 text-amber-800",
    Gemstones: "bg-gradient-to-r from-purple-100 to-purple-300 text-purple-800",
    Testimonials: "bg-gradient-to-r from-rose-100 to-rose-300 text-rose-800",
    "सेवाएं": "bg-gradient-to-r from-amber-100 to-amber-300 text-amber-800",
    "रत्न": "bg-gradient-to-r from-purple-100 to-purple-300 text-purple-800",
    "प्रशंसापत्र": "bg-gradient-to-r from-rose-100 to-rose-300 text-rose-800",
  };

  const handleImageClick = (item: GalleryItem) => {
    setSelectedImage(item);
    setFullscreen(false);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setFullscreen(false);
  };

  const handleShare = () => alert(language === 'en' ? "Share feature coming soon!" : "साझा करने की सुविधा जल्द ही आ रही है!");
  const handleDownload = () => alert(language === 'en' ? "Download feature coming soon!" : "डाउनलोड सुविधा जल्द ही आ रही है!");
  const handleLike = () => alert(language === 'en' ? "Like feature coming soon!" : "लाइक सुविधा जल्द ही आ रही है!");

  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-sans antialiased">
      <Header />

      {/* Luxury Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/luxury-pattern.png')] bg-repeat opacity-5" />
        <motion.div 
          className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-to-r from-amber-50 to-transparent rounded-full blur-xl"
          animate={{ rotate: 360 }} 
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-1/3 -right-40 w-96 h-96 bg-gradient-to-r from-purple-50 to-transparent rounded-full blur-xl"
          animate={{ rotate: -360 }} 
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center bg-white px-6 py-3 rounded-full border border-amber-200 shadow-sm mb-6"
            >
              <span className="text-amber-500 text-sm font-medium uppercase tracking-widest">
                {language === 'en' ? 'Premium Gallery' : 'प्रीमियम गैलरी'}
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6 font-serif"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-600 to-amber-800">
                {language === 'en' ? 'Divine Moments' : 'दिव्य क्षण'}
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              {language === 'en' 
                ? "Capturing the essence of spiritual transformations and celestial wisdom" 
                : "आध्यात्मिक परिवर्तन और दिव्य ज्ञान का सार कैप्चर करना"}
            </motion.p>
          </div>
        </section>

        {/* Gallery Filters */}
        <section className="pb-12">
          <div className="container mx-auto px-6">
            <motion.div 
              className="flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {filters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter.id 
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-amber-300'}`}
                >
                  {filter.label}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Masonry Gallery */}
        <section className="pb-24">
          <div className="container mx-auto px-6">
            <Masonry
              breakpointCols={{ default: 3, 1024: 2, 640: 1 }}
              className="flex -ml-6"
              columnClassName="pl-6"
            >
              {filteredItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="mb-8"
                >
                  <Card 
                    className={`
                      bg-white border border-gray-100 rounded-xl overflow-hidden
                      shadow-lg hover:shadow-xl transition-shadow duration-300
                      ${item.featured ? 'ring-2 ring-amber-400' : ''}
                    `}
                  >
                    <div 
                      className="relative group cursor-pointer overflow-hidden"
                      onClick={() => handleImageClick(item)}
                    >
                      {/* Image with hover effect */}
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                        whileHover={{ scale: 1.02 }}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${badgeColors[item.category as keyof typeof badgeColors]} mb-2`}>
                            {item.category}
                          </span>
                          <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                          <p className="text-gray-200 text-sm">{item.description}</p>
                        </div>
                      </div>
                      
                      {/* Like button */}
                      <button 
                        className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-rose-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLike();
                        }}
                      >
                        <FiHeart className="text-rose-500" />
                      </button>
                      
                      {/* Featured badge */}
                      {item.featured && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                          {language === 'en' ? 'Featured' : 'विशेष'}
                        </div>
                      )}
                    </div>
                    
                    {/* Footer */}
                    <div className="p-4 flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <FiHeart className="text-rose-400" />
                        <span className="text-sm text-gray-600">{item.likes}</span>
                      </div>
                      <div className="flex space-x-2">
                        <button 
                          className="p-2 text-gray-500 hover:text-amber-600 transition"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleShare();
                          }}
                        >
                          <FiShare2 size={16} />
                        </button>
                        <button 
                          className="p-2 text-gray-500 hover:text-amber-600 transition"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleImageClick(item);
                          }}
                        >
                          <FiBookmark size={16} />
                        </button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </Masonry>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '15+', label: language === 'en' ? 'Years Experience' : 'वर्षों का अनुभव' },
                { value: '5K+', label: language === 'en' ? 'Happy Clients' : 'खुश ग्राहक' },
                { value: '98%', label: language === 'en' ? 'Satisfaction' : 'संतुष्टि' },
                { value: '24/7', label: language === 'en' ? 'Support' : 'सहायता' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl border border-amber-100 shadow-sm text-center"
                >
                  <h3 className="text-4xl font-bold text-amber-600 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className={`relative bg-white rounded-2xl max-w-6xl w-full overflow-hidden ${fullscreen ? 'h-screen max-h-screen' : 'max-h-[90vh]'}`}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-50 bg-white/90 p-2 rounded-full shadow-md hover:bg-gray-100 transition"
                onClick={handleCloseModal}
                aria-label="Close"
              >
                <FaRegWindowClose className="text-gray-600" />
              </button>
              
              {/* Fullscreen Toggle */}
              <button
                className="absolute top-4 right-16 z-50 bg-white/90 p-2 rounded-full shadow-md hover:bg-gray-100 transition"
                onClick={() => setFullscreen(!fullscreen)}
                aria-label={fullscreen ? 'Minimize' : 'Expand'}
              >
                {fullscreen ? (
                  <FaCompress className="text-gray-600" />
                ) : (
                  <FaExpand className="text-gray-600" />
                )}
              </button>
              
              {/* Image */}
              <div className="h-full flex items-center justify-center p-4">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className={`max-w-full max-h-full object-contain ${fullscreen ? 'h-[90vh]' : ''}`}
                  onClick={() => setFullscreen(!fullscreen)}
                  style={{ cursor: fullscreen ? 'zoom-out' : 'zoom-in' }}
                />
              </div>
              
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}