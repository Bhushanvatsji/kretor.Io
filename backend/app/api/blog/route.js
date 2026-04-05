import { NextResponse } from 'next/server';

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Enterprise Applications',
    slug: 'future-ai-enterprise',
    excerpt: 'Explore how artificial intelligence is transforming enterprise software and creating new opportunities for businesses.',
    category: 'AI/ML',
    date: '2024-03-15',
    author: 'Sarah Johnson',
    readTime: '5 min read',
    image: '[Blog Image 1]',
    content: 'Full blog content here...',
    featured: true,
  },
  {
    id: 2,
    title: 'Building Scalable Web Applications with Next.js',
    slug: 'scalable-nextjs-apps',
    excerpt: 'A comprehensive guide to building production-ready web applications using Next.js and modern best practices.',
    category: 'Web Development',
    date: '2024-03-10',
    author: 'Mike Chen',
    readTime: '8 min read',
    image: '[Blog Image 2]',
    content: 'Full blog content here...',
    featured: false,
  },
  {
    id: 3,
    title: 'Cloud Migration: Planning Your Domain Transfer',
    slug: 'cloud-migration-guide',
    excerpt: 'Step-by-step guide to successfully migrating your infrastructure to the cloud with minimal downtime.',
    category: 'Cloud Solutions',
    date: '2024-03-05',
    author: 'Emily Rodriguez',
    readTime: '6 min read',
    image: '[Blog Image 3]',
    content: 'Full blog content here...',
    featured: false,
  },
  {
    id: 4,
    title: 'Android Development Best Practices in 2024',
    slug: 'android-best-practices',
    excerpt: 'Latest trends and best practices for developing high-performance Android applications.',
    category: 'Mobile Development',
    date: '2024-02-28',
    author: 'David Park',
    readTime: '7 min read',
    image: '[Blog Image 4]',
    content: 'Full blog content here...',
    featured: false,
  },
  {
    id: 5,
    title: 'Data Security: Protection Strategies for Your Business',
    slug: 'data-security-strategies',
    excerpt: 'Essential data security practices and strategies to protect your business from cyber threats.',
    category: 'Security',
    date: '2024-02-20',
    author: 'Sarah Johnson',
    readTime: '6 min read',
    image: '[Blog Image 5]',
    content: 'Full blog content here...',
    featured: false,
  },
  {
    id: 6,
    title: 'DevOps: Streamlining Your Development Pipeline',
    slug: 'devops-pipeline',
    excerpt: 'How DevOps practices can accelerate your development cycle and improve team collaboration.',
    category: 'DevOps',
    date: '2024-02-15',
    author: 'Mike Chen',
    readTime: '5 min read',
    image: '[Blog Image 6]',
    content: 'Full blog content here...',
    featured: false,
  },
];

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const slug = searchParams.get('slug');
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');
    const limit = searchParams.get('limit');

    // Get specific post by ID
    if (id) {
      const post = blogPosts.find(p => p.id === parseInt(id));
      if (!post) {
        return NextResponse.json(
          { error: 'Blog post not found' },
          { status: 404 }
        );
      }
      return NextResponse.json({ success: true, data: post }, { status: 200 });
    }

    // Get specific post by slug
    if (slug) {
      const post = blogPosts.find(p => p.slug === slug);
      if (!post) {
        return NextResponse.json(
          { error: 'Blog post not found' },
          { status: 404 }
        );
      }
      return NextResponse.json({ success: true, data: post }, { status: 200 });
    }

    // Filter by category
    let filtered = blogPosts;
    if (category) {
      filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    // Filter featured posts
    if (featured === 'true') {
      filtered = filtered.filter(p => p.featured);
    }

    // Apply limit
    if (limit) {
      filtered = filtered.slice(0, parseInt(limit));
    }

    // Get all posts (sorted by date)
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    return NextResponse.json(
      { success: true, data: filtered, count: filtered.length },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}
