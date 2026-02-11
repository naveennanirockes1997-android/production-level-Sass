import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-32 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-brand-700 to-indigo-900 p-12 md:p-24 relative overflow-hidden text-center"
      >
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[1]">
            Ready to ship<br />the next <span className="italic underline underline-offset-8 decoration-brand-400">big thing?</span>
          </h2>
          
          <p className="text-white/60 text-lg md:text-2xl mb-12 font-medium leading-relaxed">
            Join 10,000+ developers building on the edge. 
            Free to start, built to scale.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="btn-primary px-12 h-16 text-lg tracking-wide group gap-3">
              Start Building Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary px-12 h-16 text-lg border-white/20 hover:border-white/40">
              Talk to Founders
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
