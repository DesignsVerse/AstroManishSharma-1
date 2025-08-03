// This file exports generateStaticParams for Next.js dynamic route static generation.
import { services as enServices } from '@/data/services/en';
import { services as hiServices } from '@/data/services/hi';

export async function generateStaticParams() {
  // Combine all unique slugs from both languages
  const slugs = [
    ...enServices.map(s => s.slug),
    ...hiServices.map(s => s.slug),
  ];
  const uniqueSlugs = Array.from(new Set(slugs));
  return uniqueSlugs.map(slug => ({ slug }));
} 