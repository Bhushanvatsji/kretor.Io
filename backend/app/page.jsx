import Link from 'next/link';
import { Code2, Brain, Smartphone, Cloud, ArrowRight, CheckCircle, Zap, Users, TrendingUp, Award } from 'lucide-react';
import ServiceCard from './components/ServiceCard';

export default function Home() {
  const stats = [
    { number: '100+', label: 'Projects Delivered', icon: Award },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '15+', label: 'Years Experience', icon: TrendingUp },
    { number: '98%', label: 'Client Satisfaction', icon: Zap },
  ];

  const testimonials = [
    {
      name: 'Rahul Singh',
      company: 'TechStart India',
      text: 'kretor.Io transformed our vision into a world-class platform. Highly professional and results-driven!',
      role: 'CEO',
    },
    {
      name: 'Priya Desai',
      company: 'CloudFlow Solutions',
      text: 'Outstanding team with exceptional technical expertise. They delivered our project ahead of schedule.',
      role: 'Product Manager',
    },
    {
      name: 'Amit Kumar',
      company: 'FinTech Plus',
      text: 'Best investment in technology partners we made. Responsive, innovative, and committed to excellence.',
      role: 'Founder',
    },
  ];

  return (
    <div>
      {/* Hero Section - Premium */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 opacity-50">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container py-24 md:py-40">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 rounded-full px-6 py-2 mb-8 animate-fade-in">
              <Zap size={16} className="text-blue-300" />
              <span className="text-sm font-semibold text-blue-200">🚀 Welcome to Innovation</span>
            </div>

            {/* Headlines */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Transform Your Business with
              <span className="block mt-3 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Cutting-Edge Tech Solutions
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-2xl text-blue-100 mb-4 leading-relaxed max-w-2xl mx-auto animate-fade-in">
              kretor.Io delivers world-class AI/ML, Web, Android, and Cloud solutions that drive real business growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center flex-wrap mt-12 animate-fade-in">
              <Link href="/services" className="group relative px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center gap-2">
                Explore Services
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="px-8 py-4 rounded-xl font-semibold text-blue-600 bg-white hover:bg-slate-100 transition-all duration-300 shadow-lg">
                Get Your Free Quote
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 animate-bounce">
              <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
                <div className="w-1 h-2 bg-blue-400 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 py-16 md:py-20 relative z-0">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-lg mb-4">
                    <Icon className="text-blue-300" size={32} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <p className="text-blue-200 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section - Premium */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR EXPERTISE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              World-Class Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Leveraging the latest technologies to solve complex business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Brain,
                title: 'AI/ML Solutions',
                description: 'Intelligent systems powered by machine learning for data analysis and automation.',
                color: 'from-purple-500/20 to-purple-500/0',
              },
              {
                icon: Code2,
                title: 'Web Development',
                description: 'Modern, responsive web applications built with latest technologies.',
                color: 'from-blue-500/20 to-blue-500/0',
              },
              {
                icon: Smartphone,
                title: 'Android Development',
                description: 'Native Android apps with seamless performance and user experience.',
                color: 'from-green-500/20 to-green-500/0',
              },
              {
                icon: Cloud,
                title: 'Cloud Database',
                description: 'Scalable cloud infrastructure and database solutions for your data needs.',
                color: 'from-cyan-500/20 to-cyan-500/0',
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div>
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                WHY CHOOSE US
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                Excellence Delivered Every Time
              </h2>

              <div className="space-y-5">
                {[
                  { title: 'Expert Team', desc: '15+ years of combined experience in cutting-edge technologies' },
                  { title: '100+ Projects', desc: 'Successfully delivered across diverse industries and verticals' },
                  { title: '24/7 Support', desc: 'Round-the-clock dedicated support for all your needs' },
                  { title: 'Agile Process', desc: 'Fast iterations and continuous improvements for best results' },
                  { title: 'Cost Optimized', desc: 'Maximum value for your investment without compromising quality' },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                        <CheckCircle className="text-white" size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/about" className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-xl transition-all">
                Learn More About Us
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-12 border border-blue-100 h-96 md:h-full flex items-center justify-center">
                <div className="text-center">
                  <Users className="mx-auto text-blue-500/30 mb-4" size={64} />
                  <p className="text-slate-500 font-medium">Dedicated Expert Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              TESTIMONIALS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-slate-600">
              Join hundreds of satisfied clients who trust kretor.Io
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          </div>
        </div>

        <div className="relative z-10 container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Let our expert team help you leverage the power of cutting-edge technology. Schedule your free consultation today.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="px-10 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-2xl transition-all flex items-center gap-2">
              Get Started Now
              <ArrowRight size={20} />
            </Link>
            <Link href="/services" className="px-10 py-4 rounded-xl font-semibold text-white border-2 border-white hover:bg-white/10 transition-all">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
