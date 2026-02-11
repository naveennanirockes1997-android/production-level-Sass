import React from 'react';
import { motion } from 'framer-motion';

const LogoCloud = () => {
  const logos = [
    { name: 'Acme Corp', path: 'M4 8h16v8H4z' }, // Placeholder paths or just text
    { name: 'Global Tech', path: 'M4 8h16v8H4z' },
    { name: 'Future Systems', path: 'M4 8h16v8H4z' },
    { name: 'Nexus AI', path: 'M4 8h16v8H4z' },
    { name: 'Vortex', path: 'M4 8h16v8H4z' },
    { name: 'Stellar', path: 'M4 8h16v8H4z' },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-medium text-white/40 uppercase tracking-[0.2em] mb-10">
          Trusted by the world's most innovative teams
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-500/20 flex items-center justify-center">
                <div className="w-4 h-4 bg-brand-400 rounded-sm" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white/80">{logo.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
