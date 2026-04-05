import { NextResponse } from 'next/server';

// Mock portfolio projects data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-stack e-commerce platform with payment integration, inventory management, and analytics dashboard.',
    image: '[E-Commerce Image]',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    results: ['300% revenue increase', '50K+ monthly users', '99.9% uptime'],
    caseStudyUrl: '/portfolio/1',
  },
  {
    id: 2,
    title: 'AI Chatbot Solution',
    category: 'AI/ML',
    description: 'Intelligent chatbot powered by NLP for customer support, reducing response time by 80%.',
    image: '[Chatbot Image]',
    technologies: ['Python', 'TensorFlow', 'React', 'AWS'],
    results: ['80% faster response', '95% accuracy', '40K+ conversations/month'],
    caseStudyUrl: '/portfolio/2',
  },
  {
    id: 3,
    title: 'Mobile Banking App',
    category: 'Android Development',
    description: 'Secure native Android banking application with biometric authentication and real-time transactions.',
    image: '[Banking App Image]',
    technologies: ['Kotlin', 'Firebase', 'Room Database'],
    results: ['1M+ downloads', '4.8★ rating', 'Zero security breaches'],
    caseStudyUrl: '/portfolio/3',
  },
  {
    id: 4,
    title: 'Cloud Data Platform',
    category: 'Cloud Solutions',
    description: 'Scalable cloud platform for data processing and real-time analytics with multi-tenant architecture.',
    image: '[Cloud Platform Image]',
    technologies: ['AWS', 'Python', 'Spark', 'PostgreSQL'],
    results: ['99.99% uptime', 'Petabytes of data', 'Daily 1B+ queries'],
    caseStudyUrl: '/portfolio/4',
  },
  {
    id: 5,
    title: 'IoT Monitoring System',
    category: 'Web Development',
    description: 'Real-time monitoring dashboard for IoT devices with predictive maintenance alerts.',
    image: '[IoT Image]',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
    results: ['5K devices monitored', '30% maintenance reduction', 'Live alerts'],
    caseStudyUrl: '/portfolio/5',
  },
  {
    id: 6,
    title: 'Healthcare Analytics Portal',
    category: 'Business Intelligence',
    description: 'Data analytics portal for healthcare providers with patient insights and performance metrics.',
    image: '[Healthcare Image]',
    technologies: ['React', 'Python', 'Tableau', 'BigQuery'],
    results: ['100+ hospitals', '50% cost reduction', 'Better patient outcomes'],
    caseStudyUrl: '/portfolio/6',
  },
];

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const category = searchParams.get('category');

    // Get specific project
    if (id) {
      const project = projects.find(p => p.id === parseInt(id));
      if (!project) {
        return NextResponse.json(
          { error: 'Project not found' },
          { status: 404 }
        );
      }
      return NextResponse.json({ success: true, data: project }, { status: 200 });
    }

    // Filter by category
    if (category) {
      const filtered = projects.filter(p => p.category.toLowerCase() === category.toLowerCase());
      return NextResponse.json(
        { success: true, data: filtered, count: filtered.length },
        { status: 200 }
      );
    }

    // Get all projects
    return NextResponse.json(
      { success: true, data: projects, count: projects.length },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    return NextResponse.json(
      { error: 'Failed to fetch portfolio' },
      { status: 500 }
    );
  }
}
