import { NextResponse } from 'next/server';

// Mock services data
const services = [
  {
    id: 1,
    icon: 'Brain',
    title: 'AI/ML Solutions',
    description: 'Intelligent systems powered by machine learning for data analysis and automation.',
    features: [
      'Machine Learning Model Development',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Predictive Analytics',
      'Data Mining & Analysis',
    ],
  },
  {
    id: 2,
    icon: 'Code2',
    title: 'Web Development',
    description: 'Modern, responsive web applications built with latest technologies.',
    features: [
      'React & Next.js Applications',
      'Full Stack Development',
      'Progressive Web Apps',
      'E-commerce Solutions',
      'API Development & Integration',
    ],
  },
  {
    id: 3,
    icon: 'Smartphone',
    title: 'Android Development',
    description: 'Native Android apps with seamless performance and user experience.',
    features: [
      'Native Android Apps',
      'Kotlin Development',
      'Android SDK Implementation',
      'App Store Optimization',
      'Maintenance & Support',
    ],
  },
  {
    id: 4,
    icon: 'Cloud',
    title: 'Cloud Database',
    description: 'Scalable cloud infrastructure and database solutions for your data needs.',
    features: [
      'Cloud Architecture Design',
      'Database Optimization',
      'AWS/Azure Solutions',
      'Database Migration',
      'Cloud Security',
    ],
  },
];

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Get specific service
    if (id) {
      const service = services.find(s => s.id === parseInt(id));
      if (!service) {
        return NextResponse.json(
          { error: 'Service not found' },
          { status: 404 }
        );
      }
      return NextResponse.json({ success: true, data: service }, { status: 200 });
    }

    // Get all services
    return NextResponse.json(
      { success: true, data: services, count: services.length },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}
