import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogContentClient from './BlogContentClient';
import { blogs as enBlogs } from '@/data/blogs/en';
import { blogs as hiBlogs } from '@/data/blogs/hi';

interface BlogPostProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = [
    ...enBlogs.map(b => b.slug),
    ...hiBlogs.map(b => b.slug),
  ];
  const uniqueSlugs = Array.from(new Set(slugs));
  return uniqueSlugs.map(slug => ({ slug }));
}

export default function BlogPost({ params }: BlogPostProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <BlogContentClient slug={params.slug} />
      </main>
      <Footer />
    </div>
  );
}