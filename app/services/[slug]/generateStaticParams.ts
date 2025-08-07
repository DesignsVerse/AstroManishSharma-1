// app/services/[slug]/page.js
import { services as enServices } from '@/data/services/en';
import { services as hiServices } from '@/data/services/hi';

export async function generateStaticParams() {
  const ids = [
    ...enServices.map(s => s.id),
    ...hiServices.map(s => s.id),
  ];
  const uniqueIds = Array.from(new Set(ids));
  return uniqueIds.map(id => ({ slug: id }));
}