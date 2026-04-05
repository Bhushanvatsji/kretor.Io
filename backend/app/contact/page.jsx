'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
        });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-xl text-blue-100 mt-4">
            Get in touch with our team to discuss your project and requirements
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email Info Card */}
          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-lg p-8 text-center hover:shadow-lg transition">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-blue-600" size={32} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 mb-2">vanshvats0624@gmail.com</p>
            <p className="text-gray-600">support@kretor.io</p>
          </div>

          {/* Phone Info Card */}
          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-lg p-8 text-center hover:shadow-lg transition">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-blue-600" size={32} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600 mb-2">+91 7535977315</p>
            <p className="text-gray-600">+91 7535977315</p>
          </div>

          {/* Address Info Card */}
          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-lg p-8 text-center hover:shadow-lg transition">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-blue-600" size={32} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Address</h3>
            <p className="text-gray-600">mohali ,Punjab</p>
            <p className="text-gray-600">India</p>
          </div>
        </div>

        {/* Social Links Row */}
        <div className="flex justify-center gap-8 mb-16">
          <a href="https://www.linkedin.com/in/kreator-io-a97621400/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 hover:scale-110 transition duration-300">
            <Linkedin size={24} />
          </a>
          <a href="https://x.com/IoKreator26102" target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white p-4 rounded-full hover:bg-black hover:scale-110 transition duration-300">
            <Twitter size={24} />
          </a>
          <a href="https://github.com/Bhushanvatsji" target="_blank" rel="noopener noreferrer" className="bg-slate-800 text-white p-4 rounded-full hover:bg-slate-950 hover:scale-110 transition duration-300">
            <Github size={24} />
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg border border-gray-100 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
          <p className="text-gray-600 mb-6">
            We'll get back to you as soon as possible. Please fill in all required fields.
          </p>

          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6 flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-semibold">Success!</p>
                <p>Thank you for your message. We'll contact you soon.</p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg mb-6 flex items-start gap-3">
              <span className="text-2xl">✕</span>
              <div>
                <p className="font-semibold">Error</p>
                <p>Something went wrong. Please try again or contact us directly.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Phone and Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Your Company"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="How can we help you?"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                placeholder="Tell us about your project, requirements, and timeline..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400 flex items-center justify-center gap-2 font-semibold py-3 px-6 rounded-lg transition"
            >
              <Send size={18} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            <p className="text-xs text-gray-500 text-center">
              * Required fields. We respect your privacy and will only use your information to respond to your inquiry.
            </p>
          </form>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Visit Our Office</h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-screen md:h-96 bg-gray-300 flex items-center justify-center">
            <p className="text-gray-600 text-lg font-semibold">[Google Maps Integration Coming Soon]</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prefer to Call Us?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Our team is available Monday to Friday, 9 AM to 6 PM EST. We look forward to hearing from you!
          </p>
          <a
            href="tel:+917535977315"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Call Us Now
          </a>
        </div>
      </section>
    </div>
  );
}
