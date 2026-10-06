import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../../types';
import { cn } from '../../utils';
import { Instagram, Facebook, Twitter, MapPin, Phone, Star, Droplets, Waves, Sun, ShieldCheck } from 'lucide-react';

interface ProjectProps {
  project: Project;
}

export const PoolService: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="min-h-screen bg-sky-50 text-sky-950 font-sans selection:bg-sky-200 selection:text-sky-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
             <motion.div
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               className="mb-8 p-3 bg-sky-200/50 rounded-full text-sky-600 font-bold uppercase tracking-widest text-xs"
             >
                Crystal Clear Every Time
             </motion.div>
             <motion.h1 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 1 }}
               className="text-[8rem] md:text-[12rem] font-black tracking-tighter text-sky-950/20 absolute -top-12 z-0 whitespace-nowrap select-none"
             >
               REFLECTIONS
             </motion.h1>
             <motion.h1
               initial={{ y: 40, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase relative z-10 leading-none mb-8"
             >
               {project.name.split(' ')[0]} <span className="text-white drop-shadow-[0_4px_10px_rgba(3,105,161,0.2)] stroke-sky-900 stroke-2" style={{ WebkitTextStroke: '2px #0369a1' }}>Pools</span>
             </motion.h1>
             <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="text-xl md:text-2xl text-sky-900/60 font-medium max-w-2xl mb-12"
             >
                Professional maintenance, balancing, and cleaning for premium residential pools. Your personal oasis, perfectly maintained.
             </motion.p>
             
             <div className="w-full max-w-5xl h-[60vh] relative group border-[20px] border-white/5 shadow-2xl overflow-hidden">
                <img 
                 src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2000" 
                 className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" 
                 referrerPolicy="no-referrer" 
                 alt="Swimming pool"
                />
                <div className="absolute inset-0 bg-sky-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
             </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-white shrink">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: Droplets, title: "Chemical Balance", desc: "Precise water testing and balancing for safe, healthy swimming." },
              { icon: Waves, title: "Filter Cleaning", desc: "Full backwashing and filter maintenance to ensure perfect flow." },
              { icon: Sun, title: "Algae Treatment", desc: "Professional shocking and preventative care for crystal blue water." },
              { icon: ShieldCheck, title: "Equipment Check", desc: "Weekly inspection of pumps, heaters, and automation systems." }
            ].map((s, idx) => (
              <div key={idx} className="group">
                <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                  <s.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-sky-950 mb-3">{s.title}</h3>
                <p className="text-sky-900/50 font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-white border-t border-sky-100 font-sans font-medium text-sky-900/60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-10 h-10 rounded-2xl flex items-center justify-center font-black text-white"
                style={{ backgroundColor: project.accentColor }}
              >
                {project.name[0]}
              </div>
              <span className="text-2xl font-black tracking-tighter text-sky-950 uppercase">{project.name}</span>
            </div>
            <p className="max-w-sm mb-6 text-sm">
               Serving premium properties since 2012. Dedicated to the art of the perfect pool.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-sky-50 rounded-full text-sky-600 hover:bg-sky-600 hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-3 bg-sky-50 rounded-full text-sky-600 hover:bg-sky-600 hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-3 bg-sky-50 rounded-full text-sky-600 hover:bg-sky-600 hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sky-950 font-black uppercase text-xs tracking-widest mb-8">Services</h4>
            <ul className="space-y-4 text-sm">
               <li>Weekly Cleaning</li>
               <li>Green to Blue</li>
               <li>Storm Cleanup</li>
               <li>Equipment Repair</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sky-950 font-black uppercase text-xs tracking-widest mb-8">Service Area</h4>
            <ul className="space-y-4 text-sm">
               <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Charlotte County</li>
               <li className="flex items-center gap-2 font-bold text-sky-600"><Phone className="w-4 h-4" /> (555) 012-POOL</li>
               <li>Daily: 7am - 5pm</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
