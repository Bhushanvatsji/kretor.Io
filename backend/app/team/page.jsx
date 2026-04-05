import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const metadata = {
  title: 'Team - kretor.Io',
  description: 'Meet the talented team behind kretor.Io.',
};

export default function Team() {
  const teamMembers = [
    {
      name: 'Raj Kumar',
      role: 'Founder & CEO',
      bio: 'Visionary leader with 15+ years in tech industry. Expert in strategy and business development.',
      avatar: '[Avatar 1]',
      socials: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Priya Sharma',
      role: 'CTO & Co-Founder',
      bio: 'Full-stack architect with expertise in cloud infrastructure and distributed systems.',
      avatar: '[Avatar 2]',
      socials: { linkedin: '#', github: '#' },
    },
    {
      name: 'Arjun Patel',
      role: 'Lead AI/ML Engineer',
      bio: 'Machine learning specialist with Ph.D. in Computer Science. Published researcher in AI.',
      avatar: '[Avatar 3]',
      socials: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Sarah Chen',
      role: 'Senior Frontend Developer',
      bio: 'Expert in React and modern web technologies. UX enthusiast and design systems architect.',
      avatar: '[Avatar 4]',
      socials: { github: '#', linkedin: '#' },
    },
    {
      name: 'Mike Johnson',
      role: 'Mobile Lead',
      bio: 'Android specialist with 8+ years experience building apps used by millions.',
      avatar: '[Avatar 5]',
      socials: { linkedin: '#', github: '#' },
    },
    {
      name: 'Emily Rodriguez',
      role: 'DevOps & Infrastructure',
      bio: 'Cloud infrastructure specialist. AWS certified with expertise in CI/CD and monitoring.',
      avatar: '[Avatar 6]',
      socials: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'David Wong',
      role: 'QA Lead',
      bio: 'Quality assurance expert ensuring excellence in every deliverable. Test automation specialist.',
      avatar: '[Avatar 7]',
      socials: { linkedin: '#' },
    },
    {
      name: 'Lisa Martinez',
      role: 'Project Manager',
      bio: 'Expert in agile methodologies and client communication. Ensures on-time, on-budget delivery.',
      avatar: '[Avatar 8]',
      socials: { linkedin: '#' },
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold">Our Team</h1>
          <p className="text-xl text-blue-100 mt-4">
            Talented professionals dedicated to your success
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 h-48 flex items-center justify-center">
                <p className="text-gray-400">{member.avatar}</p>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex gap-3">
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} className="text-gray-400 hover:text-blue-600 transition">
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.socials.github && (
                    <a href={member.socials.github} className="text-gray-400 hover:text-gray-900 transition">
                      <Github size={18} />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} className="text-gray-400 hover:text-blue-400 transition">
                      <Twitter size={18} />
                    </a>
                  )}
                  <a href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@shivratech.com`} className="text-gray-400 hover:text-red-600 transition">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Culture */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <h2 className="section-title text-center">Our Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Innovation First</h3>
              <p className="text-gray-600">
                We encourage creative thinking and continuous learning to stay ahead of industry trends.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Collaboration</h3>
              <p className="text-gray-600">
                Teamwork and open communication are the foundation of our success and project delivery.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Work-Life Balance</h3>
              <p className="text-gray-600">
                We believe in maintaining a healthy balance between professional and personal life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            We're always looking for talented individuals to join kretor.Io and make an impact.
          </p>
          <Link href="mailto:careers@kretor.io" className="btn bg-white text-blue-600 hover:bg-gray-100">
            View Career Opportunities
          </Link>
        </div>
      </section>
    </div>
  );
}
