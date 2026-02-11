import React, { Suspense, lazy } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero';
import Footer from './components/layout/Footer';

// Lazy load sections for better initial performance (LCP)
const Features = lazy(() => import('./sections/Features'));
const HowItWorks = lazy(() => import('./sections/HowItWorks'));
const Testimonials = lazy(() => import('./sections/Testimonials'));
const Pricing = lazy(() => import('./sections/Pricing'));
const CTA = lazy(() => import('./sections/CTA'));
const LogoCloud = lazy(() => import('./sections/LogoCloud'));
const Stats = lazy(() => import('./sections/Stats'));
const FAQ = lazy(() => import('./sections/FAQ'));
const Team = lazy(() => import('./sections/Team'));

const LoadingFallback = () => <div className="h-96 w-full flex items-center justify-center bg-[#0a0b1e]" aria-hidden="true" />;

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-[#0a0b1e] text-white overflow-x-hidden selection:bg-brand-500/30">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-500 origin-[0%] z-[100]"
        style={{ scaleX }}
      />

      {/* Background Ambience - Low performance cost using radial gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand-600/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-indigo-600/5 rounded-full blur-[140px]" />
      </div>

      <Navbar />
      
      <main id="main-content" className="relative z-10">
        <Hero />
        
        <Suspense fallback={<LoadingFallback />}>
          <LogoCloud />
          <Features />
          <Stats />
          <HowItWorks />
          <Testimonials />
          <Pricing />
          <FAQ />
          <Team />
          <CTA />
        </Suspense>
      </main>

      <Footer />
      
      {/* Skip to Content for A11y */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-brand-600 focus:text-white focus:rounded-lg"
      >
        Skip to content
      </a>
    </div>
  );
}

export default App;
