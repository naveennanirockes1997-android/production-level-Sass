import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { Shield, Rocket, Cpu, Globe, Zap, BarChart } from 'lucide-react';

const FEATURES = [
  { icon: Shield, title: "Edge Security", desc: "Automated DDoS protection and WAF by default." },
  { icon: Rocket, title: "Fast Deploy", desc: "Push to main and we handle the heavy lifting." },
  { icon: Cpu, title: "AI Workflows", desc: "Intelligent automation for repetitive tasks." },
  { icon: Globe, title: "Global CDN", desc: "Your assets served from 200+ edge locations." },
  { icon: Zap, title: "Instant Sync", desc: "Real-time data synchronization at scale." },
  { icon: BarChart, title: "Analytics", desc: "Deep insights into your system performance." },
];

const FeatureCard = ({ icon: Icon, title, desc, index }) => {
  const cardRef = useRef(null);
  const x = useSpring(0, { stiffness: 300, damping: 30 });
  const y = useSpring(0, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / 15);
    y.set((e.clientY - centerY) / 15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ rotateY: x, rotateX: y }}
      className="glass-card p-8 group cursor-default h-full flex flex-col items-start gap-6 preserve-3d"
    >
      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-brand-600 transition-colors duration-300">
        <Icon className="w-6 h-6 text-brand-400 group-hover:text-white transition-colors" />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-white/40 leading-relaxed text-sm">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Built for the modern web.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 text-lg max-w-xl"
          >
            A comprehensive suite of tools designed to help you build, 
            scale, and manage your applications with ease.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
