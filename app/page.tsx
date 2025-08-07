"use client"
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import BlogSection from '@/components/BlogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AchievementsSection from '@/components/AchievementsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import CTABanner from '@/components/cta';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ServicesSection />
      <AchievementsSection />
      <CTABanner/>
      <BlogSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}