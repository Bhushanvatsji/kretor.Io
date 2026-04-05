import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    { name: 'kreator.io Dashboard', category: 'AI Ecosystem', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800' },
    { name: 'PredictFlow AI', category: 'Machine Learning', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800' },
    { name: 'NexGen Banking', category: 'Web App', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
    { name: 'SecureCloud Vault', category: 'Cloud Infrastructure', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800' },
    { name: 'FitPulse Android', category: 'Mobile App', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800' },
    { name: 'OmniChain Logistics', category: 'Blockchain', image: 'https://images.unsplash.com/photo-1586769852044-692d6e6924a0?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div className="pt-32 pb-40 bg-[#020617]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <span className="text-blue-500 font-bold tracking-[0.25em] uppercase text-sm mb-6 inline-block">Our Portfolio</span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8">
            Masterpieces Of <br />
            <span className="text-blue-500">Digital Craftsmanship</span>
          </h1>
          <p className="text-slate-400 text-2xl max-w-2xl mx-auto leading-relaxed">
            Take a look at some of our most innovative projects that have transformed industries.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
           {projects.map((p, i) => (
             <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[500px] rounded-[40px] overflow-hidden border border-white/5 cursor-pointer"
             >
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-10 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                   <div className="flex justify-between items-end">
                      <div>
                        <span className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-3 flex items-center gap-1">
                          <Star size={12} fill="currentColor" /> {p.category}
                        </span>
                        <h3 className="text-3xl font-bold text-white group-hover:text-blue-500 transition-colors uppercase tracking-tight">{p.name}</h3>
                      </div>
                      <div className="w-16 h-16 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-10 group-hover:translate-y-0 duration-700">
                        <ExternalLink className="text-white" size={24} />
                      </div>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-40 text-center p-20 glass rounded-[60px] border-blue-500/10"
        >
           <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to Add Your Vision?</h2>
           <p className="text-slate-400 text-xl max-w-xl mx-auto mb-12">
             We treat every project as a flagship. Let's make yours next.
           </p>
           <a 
            href="/contact" 
            className="px-16 py-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all text-xl shadow-2xl"
           >
             Start Your Journey
           </a>
        </motion.div>
      </div>
    </div>
  );
}
