import Link from 'next/link';
import { Calendar, User, ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Blog - kretor.Io',
  description: 'Read our latest articles on technology trends, best practices, and case studies.',
};

async function getBlogPosts() {
  try {
    const response = await fetch('http://localhost:3000/api/blog', {
      next: { revalidate: 3600 },
    });
    const data = await response.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [
      {
        id: 1,
        title: 'The Future of AI in Enterprise Applications',
        excerpt: 'Explore how artificial intelligence is transforming enterprise software and creating new opportunities.',
        category: 'AI/ML',
        date: '2024-03-15',
        author: 'Sarah Johnson',
        readTime: '5 min read',
        image: '[Blog Image 1]',
      },
      {
        id: 2,
        title: 'Building Scalable Web Applications with Next.js',
        excerpt: 'A comprehensive guide to building production-ready web applications using modern best practices.',
        category: 'Web Development',
        date: '2024-03-10',
        author: 'Mike Chen',
        readTime: '8 min read',
        image: '[Blog Image 2]',
      },
      {
        id: 3,
        title: 'Cloud Migration: Planning Your Transfer',
        excerpt: 'Step-by-step guide to successfully migrating infrastructure to the cloud with minimal downtime.',
        category: 'Cloud Solutions',
        date: '2024-03-05',
        author: 'Emily Rodriguez',
        readTime: '6 min read',
        image: '[Blog Image 3]',
      },
      {
        id: 4,
        title: 'Android Development Best Practices in 2024',
        excerpt: 'Latest trends and best practices for developing high-performance Android applications.',
        category: 'Mobile Development',
        date: '2024-02-28',
        author: 'David Park',
        readTime: '7 min read',
        image: '[Blog Image 4]',
      },
    ];
  }
}

export default async function Blog() {
  const posts = await getBlogPosts();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold">Blog & Resources</h1>
          <p className="text-xl text-blue-100 mt-4">
            Stay updated with the latest tech trends, best practices, and insights
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="container py-16 md:py-24">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No blog posts available at this time.</p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {posts[0] && (
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-200 p-8 mb-12 md:flex gap-8 items-center">
                <div className="bg-gradient-to-br from-blue-200 to-blue-100 w-full md:w-1/3 h-64 rounded-lg flex items-center justify-center mb-6 md:mb-0">
                  <p className="text-blue-600 font-semibold">{posts[0].image}</p>
                </div>
                <div className="md:w-2/3">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    <span className="text-xs font-semibold bg-blue-200 text-blue-800 px-3 py-1 rounded">
                      Featured
                    </span>
                    <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded">
                      {posts[0].category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {posts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {posts[0].excerpt}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                    <span className="flex items-center gap-2">
                      <Calendar size={16} />
                      {new Date(posts[0].date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-2">
                      <User size={16} />
                      {posts[0].author}
                    </span>
                    <span>{posts[0].readTime}</span>
                  </div>
                  <Link
                    href="#"
                    className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2 transition"
                  >
                    Read Full Article
                    <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            )}

            {/* Recent Articles Grid */}
            {posts.length > 1 && (
              <div>
                <h3 className="text-2xl font-bold mb-8 text-gray-900">Latest Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.slice(1).map((post) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition border border-gray-100"
                    >
                      <div className="bg-gradient-to-br from-blue-100 to-blue-50 h-48 flex items-center justify-center">
                        <p className="text-blue-600 font-semibold text-center px-4">{post.image}</p>
                      </div>
                      <div className="p-6">
                        <div className="mb-3">
                          <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="text-xs text-gray-500 space-y-1 mb-4">
                          <p className="flex items-center gap-2">
                            <Calendar size={14} />
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </p>
                          <p className="flex items-center gap-2">
                            <User size={14} />
                            {post.author}
                          </p>
                        </div>
                        <Link
                          href="#"
                          className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition"
                        >
                          Read More →
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24 mt-12">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Get the latest tech insights, best practices, and industry updates delivered to your inbox.
          </p>
          <form className="flex gap-2 sm:flex-row flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
