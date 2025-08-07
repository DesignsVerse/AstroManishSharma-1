"use client";

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { globalContent as enContent } from '@/data/globalContent/en';
import { globalContent as hiContent } from '@/data/globalContent/hi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegShareSquare, FaDownload, FaRegWindowClose, FaExpand, FaCompress, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FiHeart, FiBookmark, FiShare2 } from 'react-icons/fi';
import { Search, Sparkles } from 'lucide-react';
import Masonry from 'react-masonry-css';
import { staggerContainer } from '@/utils/motion';
import { fadeIn } from '@/utils/motion';

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
  const [searchTerm, setSearchTerm] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const filteredItems = galleryItems.filter(item => 
    (activeFilter === 'all' || 
     activeFilter === 'featured' && item.featured || 
     item.category.toLowerCase().includes(activeFilter)) &&
    (item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const badgeColors: { [key in GalleryItem['category']]: string } = {
    Services: "bg-gradient-to-r from-[#F0DF20] to-[#F5C742] text-[#1a1a1a]",
    Gemstones: "bg-gradient-to-r from-purple-200 to-purple-400 text-purple-900",
    Testimonials: "bg-gradient-to-r from-rose-200 to-rose-400 text-rose-900",
    "सेवाएं": "bg-gradient-to-r from-[#F0DF20] to-[#F5C742] text-[#1a1a1a]",
    "रत्न": "bg-gradient-to-r from-purple-200 to-purple-400 text-purple-900",
    "प्रशंसापत्र": "bg-gradient-to-r from-rose-200 to-rose-400 text-rose-900",
  };

  const handleImageClick = (item: GalleryItem) => {
    setSelectedImage(item);
    setFullscreen(false);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setFullscreen(false);
  };

  const handleNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  const handlePrevImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  const handleShare = () => alert(language === 'en' ? "Share feature coming soon!" : "साझा करने की सुविधा जल्द ही आ रही है!");
  const handleDownload = () => alert(language === 'en' ? "Download feature coming soon!" : "डाउनलोड सुविधा जल्द ही आ रही है!");
  const handleLike = () => alert(language === 'en' ? "Like feature coming soon!" : "लाइक्ड सुविधा जल्द ही आ रही है!");

  // Parallax effect for background orbs
  useEffect(() => {
    const handleScroll = () => {
      const orbs = document.querySelectorAll('[data-parallax]');
      orbs.forEach(orb => {
        const scrollPosition = window.scrollY;
        // orb.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9f9f9] to-[#f1f1f1] text-[#1a1a1a] relative overflow-hidden font-sans antialiased" style={{ scrollBehavior: 'smooth', overscrollBehavior: 'contain' }} ref={scrollContainerRef}>
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
            data-parallax
          >
            {['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '☉', '☽', '☿'][i]}
          </motion.div>
        ))}
      </div>

      <Header />

      <main className="relative z-10">
        {/* Hero Section with Search Bar */}
        <section className="pt-20 sm:pt-28 pb-12 sm:pb-16 relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,#F0DF20_0%,transparent_70%)] opacity-10 animate-pulse" 
              style={{ transform: 'translate(-50%, -50%)' }} />
          </div>

          <div className="container mx-auto px-3 sm:px-4 lg:px-6">
            <motion.div
              initial="hidden"
              animate="show"
              className="max-w-5xl mx-auto text-center"
            >
              <motion.div
                variants={fadeIn('up', 'tween', 0.2, 0.8)}
                className="inline-flex items-center bg-[#F0DF20]/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-[#F0DF20]/20 shadow-sm mb-4 sm:mb-6"
              >
                <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-[#F0DF20] mr-2 sm:mr-3" />
                <span className="text-[#F0DF20] font-semibold text-base sm:text-lg">
                  {language === 'en' ? 'Premium Gallery' : 'प्रीमियम गैलरी'}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeIn('up', 'tween', 0.4, 0.8)}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 font-serif bg-clip-text text-transparent bg-gradient-to-r from-[#1a1a1a] to-[#F0DF20]"
              >
                {language === 'en' ? 'Divine Moments' : 'दिव्य क्षण'}
              </motion.h1>

              <motion.p
                variants={fadeIn('up', 'tween', 0.6, 0.8)}
                className="text-base sm:text-lg text-[#1a1a1a]/80 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10"
              >
                {language === 'en' 
                  ? "Capturing the essence of spiritual transformations and celestial wisdom" 
                  : "आध्यात्मिक परिवर्तन और दिव्य ज्ञान का सार कैप्चर करना"}
              </motion.p>

              {/* Search Bar */}
              <motion.div 
                variants={fadeIn('up', 'tween', 0.8, 0.8)}
                className="relative max-w-md mx-auto mb-8 sm:mb-10"
              >
                <input
                  type="text"
                  placeholder={language === 'en' ? 'Search gallery...' : 'गैलरी खोजें...'}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-2 sm:py-3 px-4 sm:px-5 text-sm sm:text-base bg-white/90 backdrop-blur-sm border border-[#F0DF20]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F0DF20] transition-all duration-300"
                />
                <Search className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 w-5 sm:w-6 h-5 sm:h-6 text-[#F0DF20]" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Gallery Filters */}
        <section className="pb-12 sm:pb-16">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6">
            <motion.div 
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              animate="show"
              className="flex flex-wrap justify-center gap-2 sm:gap-3 overflow-x-auto flex-nowrap sm:flex-wrap scrollbar-hide"
            >
              {filters.map((filter, index) => (
                <motion.button
                  key={filter.id}
                  variants={fadeIn('up', 'tween', index * 0.1, 0.6)}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 min-w-24 sm:min-w-0 ${
                    activeFilter === filter.id 
                      ? 'bg-gradient-to-r from-[#F0DF20] to-[#F5C742] text-[#1a1a1a] shadow-md' 
                      : 'bg-white/90 backdrop-blur-sm border border-[#F0DF20]/20 text-[#1a1a1a]/80 hover:bg-[#F0DF20]/10'
                  }`}
                >
                  {filter.label}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Masonry Gallery */}
        <section className="pb-20 sm:pb-24">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6">
            <Masonry
              breakpointCols={{ default: 3, 1024: 2, 640: 1 }}
              className="flex -ml-6 sm:-ml-8"
              columnClassName="pl-6 sm:pl-8"
            >
              {filteredItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-6 sm:mb-8"
                >
                  <Card 
                    className={`
                      bg-white/90 backdrop-blur-sm border border-[#F0DF20]/20 rounded-2xl overflow-hidden
                      shadow-md hover:shadow-lg transition-all duration-300
                      ${item.featured ? 'ring-2 ring-[#F0DF20]/40' : ''}
                    `}
                  >
                    <div 
                      className="relative group cursor-pointer overflow-hidden"
                      onClick={() => handleImageClick(item)}
                    >
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                        whileHover={{ scale: 1.02 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-[#000000]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 sm:p-6">
                        <motion.div
                          className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500"
                          initial={{ y: 20 }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <span className={`inline-block px-3 py-1 rounded-xl text-xs sm:text-sm font-semibold ${badgeColors[item.category as keyof typeof badgeColors]} mb-2 sm:mb-3`}>
                            {item.category}
                          </span>
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-1 sm:mb-2">{item.title}</h3>
                          <p className="text-sm sm:text-base text-white/80 line-clamp-2">{item.description}</p>
                        </motion.div>
                      </div>
                      <button 
                        className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 p-2 sm:p-2.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-rose-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLike();
                        }}
                      >
                        <FiHeart className="text-rose-500 w-4 sm:w-5 h-4 sm:h-5" />
                      </button>
                      {item.featured && (
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-gradient-to-r from-[#F0DF20] to-[#F5C742] px-3 py-1 rounded-xl text-[#1a1a1a] text-xs sm:text-sm font-semibold shadow-md">
                          {language === 'en' ? 'Featured' : 'विशेष'}
                        </div>
                      )}
                    </div>
                    <div className="p-4 sm:p-6 flex justify-between items-center">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <FiHeart className="text-rose-400 w-4 sm:w-5 h-4 sm:h-5" />
                        <span className="text-sm sm:text-base text-[#1a1a1a]/80">{item.likes}</span>
                      </div>
                      <div className="flex space-x-2 sm:space-x-3">
                        <button 
                          className="p-2 text-[#1a1a1a]/60 hover:text-[#F0DF20] transition"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleShare();
                          }}
                        >
                          <FiShare2 className="w-4 sm:w-5 h-4 sm:h-5" />
                        </button>
                        <button 
                          className="p-2 text-[#1a1a1a]/60 hover:text-[#F0DF20] transition"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleImageClick(item);
                          }}
                        >
                          <FiBookmark className="w-4 sm:w-5 h-4 sm:h-5" />
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
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#f1f1f1] to-[#f9f9f9]">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6">
            <motion.div
                    variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto"
            >
              {[
                { value: '15+', label: language === 'en' ? 'Years Experience' : 'वर्षों का अनुभव' },
                { value: '5K+', label: language === 'en' ? 'Happy Clients' : 'खुश ग्राहक' },
                { value: '98%', label: language === 'en' ? 'Satisfaction' : 'संतुष्टि' },
                { value: '24/7', label: language === 'en' ? 'Support' : 'सहायता' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn('up', 'tween', i * 0.1, 0.6)}
                  className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-[#F0DF20]/20 shadow-md hover:shadow-lg transition-all duration-300 text-center"
                >
                  <h3 className="text-3xl sm:text-4xl font-bold text-[#F0DF20] mb-2 sm:mb-3">{stat.value}</h3>
                  <p className="text-sm sm:text-base text-[#1a1a1a]/80">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-[#000000]/90 backdrop-blur-md z-50 flex items-center justify-center px-3 sm:px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className={`relative bg-white/90 backdrop-blur-sm rounded-2xl w-full max-w-5xl overflow-hidden border border-[#F0DF20]/20 ${fullscreen ? 'h-screen max-h-screen' : 'max-h-[80vh] sm:max-h-[90vh]'}`}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex space-x-2 sm:space-x-3 z-50">
                <Button
                  variant="ghost"
                  className="p-1.5 sm:p-2 bg-white/90 rounded-full shadow-md hover:bg-gray-100 transition"
                  onClick={handleCloseModal}
                  aria-label="Close"
                >
                  <FaRegWindowClose className="w-5 sm:w-6 h-5 sm:h-6 text-[#1a1a1a]" />
                </Button>
                <Button
                  variant="ghost"
                  className="p-1.5 sm:p-2 bg-white/90 rounded-full shadow-md hover:bg-gray-100 transition"
                  onClick={() => setFullscreen(!fullscreen)}
                  aria-label={fullscreen ? 'Minimize' : 'Expand'}
                >
                  {fullscreen ? (
                    <FaCompress className="w-5 sm:w-6 h-5 sm:h-6 text-[#1a1a1a]" />
                  ) : (
                    <FaExpand className="w-5 sm:w-6 h-5 sm:h-6 text-[#1a1a1a]" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  className="p-1.5 sm:p-2 bg-white/90 rounded-full shadow-md hover:bg-gray-100 transition"
                  onClick={handleShare}
                  aria-label="Share"
                >
                  <FaRegShareSquare className="w-5 sm:w-6 h-5 sm:h-6 text-[#1a1a1a]" />
                </Button>
                <Button
                  variant="ghost"
                  className="p-1.5 sm:p-2 bg-white/90 rounded-full shadow-md hover:bg-gray-100 transition"
                  onClick={handleDownload}
                  aria-label="Download"
                >
                  <FaDownload className="w-5 sm:w-6 h-5 sm:h-6 text-[#1a1a1a]" />
                </Button>
              </div>
              <div className="flex items-center justify-between absolute inset-y-0 left-0 right-0 px-3 sm:px-4 pointer-events-none">
                <Button
                  variant="ghost"
                  className="p-1.5 sm:p-2 bg-white/90 rounded-full shadow-md hover:bg-gray-100 transition pointer-events-auto"
                  onClick={handlePrevImage}
                  aria-label="Previous"
                >
                  <FaArrowLeft className="w-5 sm:w-6 h-5 sm:h-6 text-[#1a1a1a]" />
                </Button>
                <Button
                  variant="ghost"
                  className="p-1.5 sm:p-2 bg-white/90 rounded-full shadow-md hover:bg-gray-100 transition pointer-events-auto"
                  onClick={handleNextImage}
                  aria-label="Next"
                >
                  <FaArrowRight className="w-5 sm:w-6 h-5 sm:h-6 text-[#1a1a1a]" />
                </Button>
              </div>
              <div className="h-full flex items-center justify-center p-4 sm:p-6">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className={`max-w-full max-h-full object-contain ${fullscreen ? 'h-[80vh] sm:h-[90vh]' : 'h-auto'}`}
                  onClick={() => setFullscreen(!fullscreen)}
                  style={{ cursor: fullscreen ? 'zoom-out' : 'zoom-in' }}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#000000]/60 to-transparent p-4 sm:p-6">
                <span className={`inline-block px-3 py-1 rounded-xl text-xs sm:text-sm font-semibold ${badgeColors[selectedImage.category as keyof typeof badgeColors]} mb-2 sm:mb-3`}>
                  {selectedImage.category}
                </span>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-1 sm:mb-2">{selectedImage.title}</h3>
                <p className="text-sm sm:text-base text-white/80">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}