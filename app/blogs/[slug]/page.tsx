import { getBlogPost, getAllBlogPosts, formatDate } from '@/lib/blogs';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const post = await getBlogPost(slug);
    return {
      title: `${post.title} | Your Name`,
      description: post.description,
    };
  } catch {
    return {
      title: 'Blog Post Not Found',
    };
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;
  
  try {
    post = await getBlogPost(slug);
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen pt-4 pb-10 px-6">
      <article className="max-w-6xl mx-0 lg:mx-12 lg:px-5 xl:mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link 
            href="/blogs" 
            className="text-(--color-primary-red) hover:underline"
          >
            ← Back to Blogs
          </Link>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-(--color-text-black)">
            {post.title}
          </h1>
          
          <time className="text-sm text-(--color-text-primary) mb-4 block">
            {formatDate(post.date)}
          </time>
          
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-gray-100 text-(--color-text-primary) rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none 
            prose-a:text-(--color-primary-blue) prose-a:no-underline hover:prose-a:underline prose-a:cursor-pointer
            prose-code:text-[#0ea5e9] prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-semibold prose-code:before:content-[''] prose-code:after:content-['']
            prose-pre:p-0 prose-pre:bg-transparent
            [&_pre]:p-4! [&_pre]:m-0! [&_pre]:rounded-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}
