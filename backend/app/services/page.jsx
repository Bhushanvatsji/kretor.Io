import { Code2, Brain, Smartphone, Cloud, Zap, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Services - kretor.Io',
  description: 'Explore our comprehensive tech services including AI/ML, web development, Android apps, and cloud solutions.',
};

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: 'AI/ML Solutions',
      description: 'Advanced machine learning models and AI-powered systems for data analysis, predictive modeling, and intelligent automation.',
      features: [
        'Machine Learning Model Development',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'Data Mining & Analysis',
      ],
    },
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Modern, responsive, and scalable web applications using cutting-edge technologies and best practices.',
      features: [
        'React & Next.js Applications',
        'Full Stack Development',
        'Progressive Web Apps',
        'E-commerce Solutions',
        'API Development & Integration',
      ],
    },
    {
      icon: Smartphone,
      title: 'Android Development',
      description: 'Native Android applications with intuitive UI/UX and seamless performance across all devices.',
      features: [
        'Native Android Apps',
        'Kotlin Development',
        'Android SDK Implementation',
        'App Store Optimization',
        'Maintenance & Support',
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud Database Solutions',
      description: 'Secure, scalable cloud infrastructure and database solutions for enterprise-level applications.',
      features: [
        'Cloud Architecture Design',
        'Database Optimization',
        'AWS/Azure Solutions',
        'Database Migration',
        'Cloud Security',
      ],
    },
    {
      icon: Zap,
      title: 'System Optimization',
      description: 'Performance optimization and infrastructure improvements to maximize efficiency and reduce costs.',
      features: [
        'Performance Auditing',
        'Code Optimization',
        'Infrastructure Scaling',
        'Load Balancing',
        'Monitoring & Analytics',
      ],
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Data visualization, analytics, and reporting solutions to drive informed business decisions.',
      features: [
        'Dashboard Development',
        'Data Visualization',
        'BI Tool Implementation',
        'Custom Reports',
        'Real-time Analytics',
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
          <p className="text-xl text-blue-100 mt-4">
            Comprehensive technology solutions designed for your success
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
                <Icon className="text-blue-600 mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-600">
                      <span className="text-blue-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="text-blue-600 font-semibold hover:text-blue-700">
                  Get Started →
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <h2 className="section-title text-center">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'React/Next.js',
              'Python',
              'TensorFlow',
              'Kotlin',
              'AWS',
              'Docker',
              'PostgreSQL',
              'MongoDB',
              'Redux',
              'Firebase',
              'Node.js',
              'Angular',
            ].map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center shadow">
                <p className="font-semibold text-gray-900">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Which service is right for you?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Let's discuss your requirements and propose the best solution.
          </p>
          <Link href="/contact" className="btn bg-white text-blue-600 hover:bg-gray-100">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
