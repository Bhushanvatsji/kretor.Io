export const metadata = {
  title: 'About Us - kretor.Io',
  description: 'Learn about kretor.Io and our mission to deliver innovative tech solutions.',
};

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold">About kretor.Io</h1>
          <p className="text-xl text-blue-100 mt-4">
            Pioneering Tech Solutions for Enterprise Growth
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="section-title">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, kretor.Io emerged with a vision to deliver innovative technology solutions that transform businesses. What started as a small team of passionate developers has grown into a full-service tech company.
            </p>
            <p className="text-gray-600 mb-4">
              Today, we're proud to serve 100+ clients across various industries, from startups to Fortune 500 companies. Our commitment to excellence and innovation drives everything we do.
            </p>
            <p className="text-gray-600">
              We believe in building long-term partnerships with our clients, understanding their unique challenges, and delivering tailored solutions that create real business value.
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-8 h-96 flex items-center justify-center">
            <p className="text-gray-500">[Company history image/timeline]</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100+</div>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">50+</div>
            <p className="text-gray-600">Team Members</p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">15+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">98%</div>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </div>

        {/* Our Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower businesses through innovative, scalable, and reliable technology solutions that drive growth, efficiency, and digital transformation.
            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be recognized as the leading technology partner for businesses seeking innovative solutions in AI/ML, web development, mobile applications, and cloud infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <h2 className="section-title text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Innovation</h3>
              <p className="text-gray-600">
                We continuously explore new technologies and methodologies to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Excellence</h3>
              <p className="text-gray-600">
                Quality is never compromised. We strive for excellence in every project we undertake.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Partnership</h3>
              <p className="text-gray-600">
                We view our clients as partners and invest in long-term relationships built on trust.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Integrity</h3>
              <p className="text-gray-600">
                Transparency and honesty are the foundation of all our business relationships.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Agility</h3>
              <p className="text-gray-600">
                We adapt quickly to changing market demands and client requirements.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Growth</h3>
              <p className="text-gray-600">
                We invest in continuous learning and professional development for our team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
