'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-slate-950 via-blue-950 to-slate-950 text-slate-200 py-12 border-t border-slate-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">kreator.io</h3>
            <p className="text-blue-100">
              Leading provider of AI/ML, Web, Android, and Cloud Database solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link href="/services" className="hover:text-white transition">
                  AI/ML Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Android Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Cloud Database
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a href="https://www.linkedin.com/in/kreator-io-a97621400/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Bhushanvatsji" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition">
                <Github size={24} />
              </a>
              <a href="https://x.com/IoKreator26102" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition">
                <Twitter size={24} />
              </a>
              <a href="mailto:vanshvats0624@gmail.com" className="hover:text-blue-200 transition">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-blue-100">vanshvats0624@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-blue-100">
            <p>&copy; 2024 kreator.io. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
