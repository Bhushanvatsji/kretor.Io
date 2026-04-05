'use client';

import { Code2, Brain, Smartphone, Cloud } from 'lucide-react';

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
      <Icon className="text-blue-600 mb-4" size={40} />
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
