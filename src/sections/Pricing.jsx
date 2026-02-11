import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { cn } from '../utils/cn';

const PLANS = [
  {
    name: "Starter",
    price: "0",
    desc: "For solo developers and side projects.",
    features: ["3 Projects", "Community Support", "Basic Edge Analytics", "10GB Bandwidth"]
  },
  {
    name: "Pro",
    price: "49",
    desc: "Everything you need to scale your startup.",
    popular: true,
    features: ["Unlimited Projects", "24/7 Priority Support", "Advanced Edge Intelligence", "1TB Bandwidth", "Custom Domains", "Team Collaboration"]
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Advanced security and dedicated support.",
    features: ["White-label Support", "SSO & SAML", "Custom Security Audits", "Infinite Bandwidth", "Dedicated Account Manager", "Custom SLA"]
  }
];

const PricingCard = ({ name, price, desc, features, popular, index }) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 3D tilt springs
  const rotateX = useSpring(0, { stiffness: 100, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 100, damping: 30 });

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    
    mouseX.set(x);
    mouseY.set(y);

    const rotateXVal = ((y - height / 2) / height) * -10;
    const rotateYVal = ((x - width / 2) / width) * 10;
    
    rotateX.set(rotateXVal);
    rotateY.set(rotateYVal);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "glass-card p-10 flex flex-col relative overflow-hidden transition-all duration-300 group cursor-default",
        popular ? "ring-2 ring-brand-500 bg-white/[0.05] z-10" : "hover:bg-white/[0.05]"
      )}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(139, 92, 246, 0.15), transparent 80%)`
          ),
        }}
      />

      {popular && (
        <div className="absolute top-0 right-0 py-2 px-5 bg-brand-500 text-[10px] font-black uppercase tracking-[0.2em] rounded-bl-xl flex items-center gap-1.5 shadow-lg z-10">
          <Zap className="w-3 h-3 fill-white" />
          Most Popular
        </div>
      )}

      <div className="relative z-10">
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-brand-400 transition-colors">{name}</h3>
          <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
        </div>

        <div className="flex items-baseline gap-1 mb-10 translate-z-20">
          <span className="text-4xl md:text-5xl font-black tracking-tight">{price === "Custom" ? "" : "$"}{price}</span>
          {price !== "Custom" && <span className="text-white/30 text-sm font-medium">/mo</span>}
        </div>

        <ul className="space-y-4 mb-12 flex-grow translate-z-10" aria-label={`Features for ${name} plan`}>
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-white/60 group-hover:text-white/80 transition-colors">
              <div className="w-5 h-5 rounded-full bg-brand-500/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-500/20 transition-colors">
                <Check className="w-3.5 h-3.5 text-brand-500" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button 
          className={cn(
            "w-full py-4 rounded-xl font-bold transition-all duration-300 translate-z-30 relative overflow-hidden group/btn",
            popular 
              ? "bg-brand-500 hover:bg-brand-400 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]" 
              : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
          )}
          aria-label={`Get started with the ${name} plan`}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {name === "Enterprise" ? "Contact Founders" : "Get Started"}
          </span>
          {popular && (
             <motion.div 
               className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite]"
             />
          )}
        </button>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            Pricing
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black mb-8 tracking-tighter"
          >
            Scale at your <span className="text-brand-500 italic">pace.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Transparent pricing with no hidden fees. Start for free and grow as you scale.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto perspective-1000">
          {PLANS.map((plan, i) => (
            <PricingCard key={plan.name} {...plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
