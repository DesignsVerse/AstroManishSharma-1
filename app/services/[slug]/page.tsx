import ServiceDetailClient from './ServiceDetailClient';
import { generateStaticParams } from './generateStaticParams';
import { services as enServices } from '@/data/services/en';
import { services as hiServices } from '@/data/services/hi';

export { generateStaticParams };

export default function Page({ params }: { params: { slug: string } }) {
  // You can pass the slug as a prop to the client component
  return <ServiceDetailClient slug={params.slug} />;
}