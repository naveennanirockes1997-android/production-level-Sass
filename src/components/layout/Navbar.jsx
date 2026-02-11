import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';

const NAV_LINKS = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Team', href: '#team' },
  { name: 'Pricing', href: '#pricing' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Transition navbar background based on scroll
  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ['rgba(10, 11, 30, 0)', 'rgba(10, 11, 30, 0.9)']
  );

  const borderOpacity = useTransform(
    scrollY,
    [0, 80],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.1)']
  );

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      <motion.nav
        style={{ backgroundColor, borderBottomColor: borderOpacity }}
        className="border-b transition-colors duration-200"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group" aria-label="Naveen Vasamsetti Home">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center font-bold text-lg group-hover:bg-brand-500 transition-colors">
              N
            </div>
            <span className="font-bold text-xl tracking-tight">Naveen Vasamsetti</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="btn-primary py-2 px-5 text-sm h-10 gap-2">
              Ship Faster
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        id="mobile-menu"
        initial={false}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 top-20 bg-[#0a0b1e] md:hidden z-50 p-6 flex flex-col gap-8"
      >
        <ul className="flex flex-col gap-6">
          {NAV_LINKS.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className="text-2xl font-bold"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
        <button className="btn-primary w-full py-4 text-lg">
          Get Started
        </button>
      </motion.div>
    </header>
  );
};

export default Navbar;
