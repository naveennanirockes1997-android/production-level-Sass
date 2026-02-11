import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { useReducedMotion } from '../hooks/use-reduced-motion';

const Hero = () => {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Perspective and depth transforms
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 8]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[110vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden perspective-1000"
    >
      <motion.div 
        style={{ 
          opacity, 
          scale: shouldReduceMotion ? 1 : scale, 
          rotateX: shouldReduceMotion ? 0 : rotateX,
          y: shouldReduceMotion ? 0 : y 
        }}
        className="container mx-auto px-6 relative z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-400" />
          <span className="text-white/70">Series A funded by Top Tier VCs</span>
        </motion.div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[1]">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="block"
          >
            Deploy once.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block text-brand-500 italic"
          >
            Scale globally.
          </motion.span>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 mb-12 leading-relaxed"
        >
          Infrastructure for the next generation of digital builders. 
          Performance, security, and developer experience in one package.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="btn-primary px-8 h-14 text-lg gap-2 group">
            Start Free Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="btn-secondary px-8 h-14 text-lg gap-2 group">
            <Play className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
            Watch Product Demo
          </button>
        </motion.div>
      </motion.div>

      {/* Subtle Parallax Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
          className="absolute top-1/4 -left-24 w-96 h-96 bg-brand-600/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
          className="absolute bottom-1/4 -right-24 w-[30rem] h-[30rem] bg-indigo-600/5 rounded-full blur-[150px]" 
        />
      </div>
    </section>
  );
};

export default Hero;
