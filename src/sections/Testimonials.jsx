import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const REVIEWS = [
  { name: "John Doe", role: "CTO @ Pulse", content: "Naveen Vasamsetti has significantly reduced our infrastructure costs while improving deployment speed." },
  { name: "Jane Smith", role: "Founder @ Bloom", content: "The level of control and visibility we get is unmatched. Perfect for teams that scale fast." },
  { name: "Alex Rivera", role: "Ops Lead @ Vector", content: "Reliable, fast, and secure. Everything a modern SaaS team needs." },
  { name: "Sarah Chen", role: "Engineering @ Flow", content: "The best developer experience I've had in years. Setup was a breeze." },
  { name: "Marcus Thorne", role: "Product @ Peak", content: "Infrastructure that just works. We can finally focus on building features." },
];

const Testimonials = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate horizontal shift (roughly based on number of items)
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-60%"]);

  return (
    <section id="testimonials" ref={targetRef} className="relative h-[300vh] bg-white/[0.01]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-6 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-center"
          >
            What builders are <span className="text-brand-500 italic">deploying.</span>
          </motion.h2>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-[20%]">
          {REVIEWS.map((review, i) => (
            <div 
              key={i} 
              className="glass-card p-10 min-w-[320px] md:min-w-[500px] shrink-0 flex flex-col justify-between h-[300px]"
            >
              <blockquote className="text-xl md:text-2xl font-medium text-white/80 leading-relaxed">
                "{review.content}"
              </blockquote>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-10 h-10 rounded-full bg-brand-600/20 flex items-center justify-center font-bold text-brand-400">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <cite className="not-italic font-bold text-sm block">{review.name}</cite>
                  <span className="text-xs text-white/30 uppercase tracking-widest">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
