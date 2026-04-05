import Link from 'next/link';
import { Check } from 'lucide-react';

export const metadata = {
  title: 'Pricing - kretor.Io',
  description: 'Transparent pricing plans for all your technology needs.',
};

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$5,000',
      period: '/project',
      description: 'Perfect for small projects and MVPs',
      features: [
        '4-8 weeks project duration',
        'Up to 3 team members',
        'Basic design consultation',
        'Code documentation',
        '30 days free support',
        'Git repository included',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$15,000',
      period: '/project',
      description: 'Ideal for medium-sized applications',
      features: [
        '8-16 weeks project duration',
        'Up to 6 team members',
        'Advanced design & UX',
        'Full documentation',
        '3 months free support',
        'API integration included',
        'Performance optimization',
        'Quality assurance testing',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'quote',
      description: 'For complex, large-scale projects',
      features: [
        'Custom project duration',
        'Dedicated team (8+)',
        'White-label solutions',
        'Comprehensive documentation',
        '6+ months support included',
        'Priority support 24/7',
        'Custom integrations',
        'Ongoing maintenance & updates',
        'Performance guarantee SLA',
      ],
      popular: false,
    },
  ];

  const services = [
    { name: 'Web Development', price: '$100-200/hour' },
    { name: 'Mobile App Development', price: '$120-250/hour' },
    { name: 'AI/ML Solutions', price: '$150-300/hour' },
    { name: 'Cloud Architecture', price: '$130-220/hour' },
    { name: 'Consulting', price: '$100-150/hour' },
    { name: 'Support & Maintenance', price: '$60-100/hour' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold">Transparent Pricing</h1>
          <p className="text-xl text-blue-100 mt-4">
            Flexible packages designed for businesses of all sizes
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg ${
                plan.popular
                  ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-900 shadow-md'
              } p-8 transition hover:shadow-lg`}
            >
              {plan.popular && (
                <div className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'} mb-4`}>
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={plan.popular ? 'text-blue-100' : 'text-gray-600'}> {plan.period}</span>
              </div>
              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Started
              </button>
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 items-center">
                    <Check size={20} className={plan.popular ? 'text-yellow-300' : 'text-green-500'} />
                    <span className={plan.popular ? 'text-blue-50' : 'text-gray-700'}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Hourly Services */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <h2 className="section-title text-center">Hourly Services</h2>
          <p className="section-subtitle text-center">
            For ongoing projects and additional support needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-blue-600 font-semibold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-16 md:py-24">
        <h2 className="section-title text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: 'What is included in the project packages?',
              a: 'Each package includes design, development, testing, deployment, and documentation. Support period varies by plan.',
            },
            {
              q: 'Can I customize a plan to fit my needs?',
              a: 'Absolutely! We offer custom packages for enterprise clients. Contact our sales team for personalized pricing.',
            },
            {
              q: 'Do you offer maintenance and support after delivery?',
              a: 'Yes, all packages include free support for a specified period. We also offer ongoing maintenance plans.',
            },
            {
              q: 'What is your payment terms?',
              a: 'We typically work with 50% upfront and 50% on delivery. Custom terms are available for enterprise clients.',
            },
            {
              q: 'Can I scale up or down my plan?',
              a: 'Yes, we offer flexible scaling options. You can upgrade or downgrade your service level anytime.',
            },
            {
              q: 'Do you provide a money-back guarantee?',
              a: 'We offer a satisfaction guarantee. If you\'re not happy with our work, we can discuss adjustments or options.',
            },
          ].map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
              <p className="text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Let's discuss your project requirements and find the perfect plan for you.
          </p>
          <Link href="/contact" className="btn bg-white text-blue-600 hover:bg-gray-100">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
