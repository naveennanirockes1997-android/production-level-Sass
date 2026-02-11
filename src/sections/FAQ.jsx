import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How does the pricing work for large teams?",
    answer: "We offer custom enterprise plans tailored to your specific needs. Contact our sales team for a quote that scales with your organization."
  },
  {
    question: "Can I migrate from my current provider?",
    answer: "Yes! We provide automated migration tools for most major platforms and 24/7 engineering support to ensure a smooth transition."
  },
  {
    question: "What security certifications do you have?",
    answer: "We are SOC2 Type II, ISO 27001, and HIPAA compliant. Security is baked into every layer of our infrastructure."
  },
  {
    question: "Is there a free trial available?",
    answer: "Absolutely. You can start with our Pro plan free for 14 days, no credit card required. Our Developer plan is free forever for personal projects."
  }
];

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="mb-4"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left p-6 rounded-2xl glass-card transition-all duration-300 ${
          isOpen ? ' ring-1 ring-brand-500/50 bg-white/5' : ''
        }`}
      >
        <div className="flex justify-between items-center gap-4">
          <span className="text-lg font-semibold text-white/90">{question}</span>
          <ChevronDown 
            className={`w-5 h-5 text-brand-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="pt-4 text-white/50 leading-relaxed">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-widest mb-4">
            <HelpCircle className="w-4 h-4" />
            Support
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 italic">Questions? <span className="text-brand-500">Answers.</span></h2>
          <p className="text-white/50 text-lg">Everything you need to know about our platform and how it helps you build better.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
