import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Global Regions', value: '35+', description: 'Low-latency edge locations' },
  { label: 'Uptime SLA', value: '99.99%', description: 'Enterprise-grade reliability' },
  { label: 'Requests / Day', value: '2.5B', description: 'Scaling with your growth' },
  { label: 'Dev Satisfaction', value: '98%', description: 'Loved by engineering teams' },
];

const Stats = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center group"
            >
              <div className="text-4xl md:text-6xl font-black text-brand-500 mb-2 group-hover:scale-110 transition-transform duration-500">
                {stat.value}
              </div>
              <div className="text-lg font-bold text-white mb-1">{stat.label}</div>
              <div className="text-sm text-white/40">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
