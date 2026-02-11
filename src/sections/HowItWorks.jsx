import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const STEPS = [
  {
    id: "01",
    label: "Configure",
    title: "Connect your core assets",
    desc: "Seamlessly integrate your existing databases, APIs, and cloud infrastructure with our simple setup wizard."
  },
  {
    id: "02",
    label: "Develop",
    title: "Build without boundaries",
    desc: "Use our CLI or Dashboard to define your logic. We handle scaling, provisioning, and distribution."
  },
  {
    id: "03",
    label: "Launch",
    title: "Go global in seconds",
    desc: "One click to deploy to 50+ regions. Our intelligent edge network ensures lowest latency for every user."
  }
];

const Step = ({ id, label, title, desc, index }) => {
  return (
    <div className="flex flex-col md:flex-row gap-12 items-start mb-32 last:mb-0">
      <div className="shrink-0 relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-16 h-16 rounded-2xl bg-brand-600 flex items-center justify-center text-xl font-bold shadow-[0_0_30px_rgba(139,92,246,0.3)] z-10 relative"
        >
          {id}
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-brand-400 font-semibold tracking-widest uppercase text-xs mb-4 block">
          Step {label}
        </span>
        <h3 className="text-2xl md:text-4xl font-bold mb-6 tracking-tight">{title}</h3>
        <p className="text-white/40 text-lg md:text-xl leading-relaxed max-w-2xl">
          {desc}
        </p>
      </motion.div>
    </div>
  );
};

const HowItWorks = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="how-it-works" ref={containerRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto relative pt-8">
          {/* Vertical Progress Line */}
          <div className="absolute left-[31px] top-12 bottom-12 w-px bg-white/5 hidden md:block">
            <motion.div 
              style={{ scaleY: pathLength, originY: 0 }}
              className="w-full h-full bg-brand-600 shadow-[0_0_15px_rgba(139,92,246,0.5)]"
            />
          </div>

          {STEPS.map((step, i) => (
            <Step key={step.id} {...step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
