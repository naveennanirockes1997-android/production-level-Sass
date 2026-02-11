import React from 'react';
import { Twitter, Github, Linkedin, Slack } from 'lucide-react';

const FOOTER_NAV = [
  {
    title: "Product",
    links: ["Features", "Security", "Infrastructure", "Changelog"]
  },
  {
    title: "Company",
    links: ["About", "Careers", "Customers", "Contact"]
  },
  {
    title: "Resources",
    links: ["Documentation", "API Reference", "Status", "Community"]
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"]
  }
];

const SOCIALS = [
  { icon: Twitter, label: "Twitter" },
  { icon: Github, label: "GitHub" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Slack, label: "Slack" }
];

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-[#010005]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center font-bold text-lg">
                N
              </div>
              <span className="font-bold text-xl tracking-tight uppercase">Naveen Vasamsetti</span>
            </div>
            <p className="text-white/40 max-w-sm mb-10 text-sm leading-relaxed">
              Empowering developers to build the next generation of web 
              applications with speed, security, and world-class infrastructure.
            </p>
            <div className="flex gap-6">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <a key={label} href="#" className="text-white/40 hover:text-white transition-colors" aria-label={label}>
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_NAV.map(({ title, links }) => (
            <div key={title} className="flex flex-col gap-6">
              <h4 className="font-bold text-sm tracking-[0.1em] uppercase text-white/90">{title}</h4>
              <ul className="flex flex-col gap-4 text-white/40 text-sm">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-8">
          <p className="text-white/20 text-xs font-medium">
            © {new Date().getFullYear()} Naveen Vasamsetti Inc. All rights reserved. Built on the edge.
          </p>
          <div className="flex gap-10 text-white/20 text-xs font-medium">
            <a href="#" className="hover:text-white transition-colors">System Status: All Green</a>
            <a href="#" className="hover:text-white transition-colors">GDPR Compliant</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
