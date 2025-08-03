import { blogs as enBlogs } from '@/data/blogs/en';
import { blogs as hiBlogs } from '@/data/blogs/hi';

export async function generateStaticParams() {
  // Get all blog slugs from both languages
  const enSlugs = enBlogs.map((blog) => ({
    slug: blog.slug,
  }));
  
  const hiSlugs = hiBlogs.map((blog) => ({
    slug: blog.slug,
  }));
  
  // Combine and deduplicate slugs
  const allSlugs = [...enSlugs, ...hiSlugs];
  const uniqueSlugs = allSlugs.filter((item, index, self) => 
    index === self.findIndex((t) => t.slug === item.slug)
  );
  
  return uniqueSlugs;
}

export default function BlogSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}