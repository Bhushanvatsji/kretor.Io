'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'ML/AI & Cloud', href: '/services' },
    { label: 'Web & Android', href: '/services' },
    { label: 'About', href: '/about' },
  ];

  return (
    <header className="fixed w-full z-50 bg-slate-900/70 backdrop-blur-xl border-b border-slate-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2 text-white font-extrabold text-2xl tracking-wider">
          <span className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded">kartor.io</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-slate-100">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-cyan-400 transition-all font-medium">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 font-semibold shadow-lg hover:shadow-xl transition">
            Get Started
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900/95 border-t border-slate-800">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="py-2 px-3 rounded-md text-slate-100 hover:bg-slate-800 transition" onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="py-2 px-3 rounded-md bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 text-center font-semibold">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


