import { motion } from 'framer-motion';
import { Target, Eye, Heart, ShieldCheck } from 'lucide-react';

export default function About() {
  const values = [
    { icon: Target, title: 'Mission', text: 'To empower organizations by building world-class technology solutions that solve real-world problems.' },
    { icon: Eye, title: 'Vision', text: 'To become the global leader in providing AI-driven products and software services.' },
    { icon: Heart, title: 'Passion', text: 'We love what we do, and we pour our passion into every line of code we write.' },
    { icon: ShieldCheck, title: 'Integrity', text: 'Honesty and transparency are the pillars of every client relationship we build.' },
  ];

  return (
    <div className="pt-32 bg-[#020617] pb-32">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 inline-block">Our Story</span>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-8">
            Pioneering Technology <br />
            <span className="text-blue-500">Since 2010</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Founded in a small room with a big dream, kretor.Io has grown into a powerhouse of digital innovation, 
            serving clients across the globe with cutting-edge software engineering.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[32px] glass hover:bg-white/10 transition-all border-white/5"
              >
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8">
                  <Icon className="text-blue-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{v.title}</h3>
                <p className="text-slate-400 leading-relaxed">{v.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* History / Team Section */}
        <div className="mt-32 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[40px] overflow-hidden aspect-video bg-gradient-to-br from-blue-500 to-indigo-800 p-8 flex items-end shadow-2xl"
          >
             <h4 className="text-white text-3xl font-bold">A Decade of Excellence</h4>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <h2 className="text-4xl font-bold text-white mb-6 leading-tight">World-Class Engineers Focused on One Goal: Your Success</h2>
             <p className="text-slate-400 mb-8 text-lg">
                At kretor.Io, we believe that the best products are built by people who care. 
                Our team consists of senior architects, talented designers, and strategic thinkers 
                who collaborate across time zones to bring your vision to life.
             </p>
             <div className="grid grid-cols-2 gap-8 text-white">
                <div>
                  <p className="text-4xl font-bold mb-2">15+</p>
                  <p className="text-slate-400 font-medium tracking-wide">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-2">500+</p>
                  <p className="text-slate-400 font-medium tracking-wide">Completed Projects</p>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
