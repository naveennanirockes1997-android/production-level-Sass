import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';

const team = [
  {
    name: "Naveen Vasamsetti",
    role: "Founding Engineer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Naveen",
    socials: { twitter: "#", github: "#", linkedin: "#" }
  },
  {
    name: "Sarah Chen",
    role: "Lead Designer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    socials: { twitter: "#", github: "#", linkedin: "#" }
  },
  {
    name: "Marcus Thorne",
    role: "Head of Infrastructure",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    socials: { twitter: "#", github: "#", linkedin: "#" }
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Built by <span className="text-brand-500 italic">Builders.</span></h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            We're a team of engineers and designers passionate about creating the next generation of cloud infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative mb-6 rounded-3xl overflow-hidden glass-card aspect-square">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8 gap-4">
                  <a href={member.socials.twitter} className="p-2 bg-white/10 rounded-full hover:bg-brand-500 transition-colors"><Twitter className="w-5 h-5" /></a>
                  <a href={member.socials.github} className="p-2 bg-white/10 rounded-full hover:bg-brand-500 transition-colors"><Github className="w-5 h-5" /></a>
                  <a href={member.socials.linkedin} className="p-2 bg-white/10 rounded-full hover:bg-brand-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-brand-400 font-medium text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
