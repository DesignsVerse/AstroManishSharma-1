import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pandit Ji - Vedic Astrology & Spiritual Guidance',
  description: 'Professional Vedic astrology services including birth chart analysis, palmistry, numerology, Vastu consultation, and spiritual healing. Get personalized guidance from experienced astrologer.',
  keywords: 'astrology, vedic astrology, horoscope, palmistry, numerology, vastu, gemstones, spiritual healing, pandit ji',
  authors: [{ name: 'Pandit Ji' }],
  openGraph: {
    title: 'Pandit Ji - Vedic Astrology & Spiritual Guidance',
    description: 'Professional Vedic astrology services with 15+ years of experience. Get accurate predictions and effective remedies.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}