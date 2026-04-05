import Link from 'next/link';
import { Calendar, User, ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Blog - kretor.Io',
  description: 'Read our latest articles on technology trends, best practices, and case studies.',
};

async function getBlogPosts() {
  try {
    // Try to fetch from API
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/blog`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
      cache: 'force-cache',
    });
    
    if (!response.ok) throw new Error('API error');
    const data = await response.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error('Error fetching blog posts from API:', error);
    // Return fallback data if API fails
    return [
      {
        id: 1,
        title: 'The Future of AI in Enterprise Applications',
        excerpt: 'Explore how artificial intelligence is transforming enterprise software and creating new opportunities for businesses.',
        category: 'AI/ML',
        date: '2024-03-15',
        author: 'Sarah Johnson',
        readTime: '5 min read',
        image: '[Blog Image 1]',
      },
      {
        id: 2,
        title: 'Building Scalable Web Applications with Next.js',
        excerpt: 'A comprehensive guide to building production-ready web applications using Next.js and modern best practices.',
        category: 'Web Development',
        date: '2024-03-10',
        author: 'Mike Chen',
        readTime: '8 min read',
        image: '[Blog Image 2]',
      },
      {
        id: 3,
        title: 'Cloud Migration: Planning Your Domain Transfer',
        excerpt: 'Step-by-step guide to successfully migrating your infrastructure to the cloud with minimal downtime.',
        category: 'Cloud Solutions',
        date: '2024-03-05',
        author: 'Emily Rodriguez',
        readTime: '6 min read',
        image: '[Blog Image 3]',
      },
    ];
  }
}

export default async function Blog() {
  const posts = await getBlogPosts();

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold">Blog & Resources</h1>
          <p className="text-xl text-blue-100 mt-4">
            Stay updated with the latest tech trends, best practices, and insights
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="container py-16 md:py-24">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No blog posts available.</p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-200 p-8 mb-12 md:flex gap-8 items-center">
              <div className="bg-gray-200 w-full md:w-1/3 h-64 rounded-lg flex items-center justify-center mb-6 md:mb-0">
                <p className="text-gray-400">{posts[0].image}</p>
              </div>
              <div className="md:w-2/3">
                <div className="flex gap-2 mb-3">
                  <span className="text-xs font-semibold bg-blue-200 text-blue-800 px-3 py-1 rounded">Featured</span>
                  <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded">
                    {posts[0].category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  {posts[0].title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {posts[0].excerpt}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} /> {new Date(posts[0].date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={16} /> {posts[0].author}
                  </span>
                  <span>{posts[0].readTime}</span>
                </div>
                <Link href="#" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
                  Read Full Article <ChevronRight size={18} />
                </Link>
              </div>
            </div>

            {/* Blog Grid */}
            {posts.length > 1 && (
              <>
                <h3 className="text-2xl font-bold mb-8 text-gray-900">Latest Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {posts.slice(1).map((post) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                    >
                      <div className="bg-gradient-to-br from-blue-100 to-blue-50 h-48 flex items-center justify-center">
                        <p className="text-gray-400">{post.image}</p>
                      </div>
                      <div className="p-6">
                        <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded">
                          {post.category}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">{post.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                        <div className="text-xs text-gray-500 space-y-1 mb-4">
                          <p className="flex items-center gap-1">
                            <Calendar size={14} /> {new Date(post.date).toLocaleDateString()}
                          </p>
                          <p className="flex items-center gap-1">
                            <User size={14} /> {post.author}
                          </p>
                        </div>
                        <Link href="#" className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                          Read More →
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 md:py-24 mt-12">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Get the latest tech insights and articles delivered to your inbox
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="btn bg-white text-blue-600 hover:bg-gray-100">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
