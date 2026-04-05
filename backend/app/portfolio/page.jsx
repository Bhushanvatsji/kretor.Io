import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'Portfolio - kreator.io',
  description: 'View our portfolio of successful projects and case studies.',
};

export default function Portfolio() {
  const projects = [
    {
      title: 'kreator.io Agency Ecosystem',
      category: 'AI & Web Engineering',
      description: 'A high-performance dual-framework agency platform featuring automated branding and real-time backend synchronization.',
      image: 'kreator.io Dashboard',
      technologies: ['Next.js 14', 'React 18', 'Tailwind CSS', 'Framer Motion'],
      results: ['Unified Branding', '0.5s Page Loads', 'SEO Optimized'],
    },
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Full-stack e-commerce platform with payment integration, inventory management, and analytics dashboard.',
      image: '[E-Commerce Image]',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      results: ['300% revenue increase', '50K+ monthly users', '99.9% uptime'],
    },
    {
      title: 'AI Chatbot Solution',
      category: 'AI/ML',
      description: 'Intelligent chatbot powered by NLP for customer support, reducing response time by 80%.',
      image: '[Chatbot Image]',
      technologies: ['Python', 'TensorFlow', 'React', 'AWS'],
      results: ['80% faster response', '95% accuracy', '40K+ conversations/month'],
    },
    {
      title: 'Mobile Banking App',
      category: 'Android Development',
      description: 'Secure native Android banking application with biometric authentication and real-time transactions.',
      image: '[Banking App Image]',
      technologies: ['Kotlin', 'Firebase', 'Room Database'],
      results: ['1M+ downloads', '4.8★ rating', 'Zero security breaches'],
    },
    {
      title: 'Cloud Data Platform',
      category: 'Cloud Solutions',
      description: 'Scalable cloud platform for data processing and real-time analytics with multi-tenant architecture.',
      image: '[Cloud Platform Image]',
      technologies: ['AWS', 'Python', 'Spark', 'PostgreSQL'],
      results: ['99.99% uptime', 'Petabytes of data', 'Daily 1B+ queries'],
    },
    {
      title: 'IoT Monitoring System',
      category: 'Web Development',
      description: 'Real-time monitoring dashboard for IoT devices with predictive maintenance alerts.',
      image: '[IoT Image]',
      technologies: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
      results: ['5K devices monitored', '30% maintenance reduction', 'Live alerts'],
    },
    {
      title: 'Healthcare Analytics Portal',
      category: 'Business Intelligence',
      description: 'Data analytics portal for healthcare providers with patient insights and performance metrics.',
      image: '[Healthcare Image]',
      technologies: ['React', 'Python', 'Tableau', 'BigQuery'],
      results: ['100+ hospitals', '50% cost reduction', 'Better patient outcomes'],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold">Our Portfolio</h1>
          <p className="text-xl text-blue-100 mt-4">
            Showcasing our successful projects and client transformations
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 h-48 flex items-center justify-center">
                <p className="text-gray-400">{project.image}</p>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Results:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.results.map((result, idx) => (
                      <li key={idx}>• {result}</li>
                    ))}
                  </ul>
                </div>

                <Link href="#" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
                  View Case Study <ExternalLink size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to see what we can do for you?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Let's discuss your project and explore how we can create similar success stories.
          </p>
          <Link href="/contact" className="btn bg-white text-blue-600 hover:bg-gray-100">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
