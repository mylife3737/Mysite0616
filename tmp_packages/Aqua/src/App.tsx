import React from 'react';
import { motion } from 'motion/react';
import { Droplets, Waves, ShieldCheck, Sun, Star, Phone, MapPin } from 'lucide-react';
import { Project } from './types';

const project: Project = {
  id: 'pool-service',
  name: 'Aqua Glow',
  businessName: 'Aqua Glow Pool Service',
  description: 'Perfect water, zero effort.',
  logo: 'AquaGlow',
  heroImage: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2000',
  accentColor: '#0ea5e9',
  theme: 'light',
  fontFamily: 'font-pool',
  serviceSectionTitle: 'Pool Standards',
  serviceSectionSubtitle: 'Crystal clear results every single visit.',
  aboutText: 'Aqua Glow makes pool ownership a breeze. We handle the chemicals, the scrubbing, and the filtering so you can jump in anytime and find a crystal-clear oasis waiting.',
  services: [
    { title: 'Chemical Balance', description: 'Weekly testing and balancing for safe, stinging-free water.', icon: Droplets, image: 'https://placehold.co/800x600?text=Chemicals' },
    { title: 'Debris Removal', description: 'Skimming and vacuuming to keep your pool floor spotless.', icon: Waves, image: 'https://placehold.co/800x600?text=Debris' },
    { title: 'Filter Care', description: 'Full system inspections and regular filter cleanings.', icon: ShieldCheck, image: 'https://placehold.co/800x600?text=Filter' }
  ],
  testimonials: [
    { name: 'Sarah T.', role: 'Pool Owner', content: 'Our pool has never looked this clear. They are incredibly reliable.', avatar: 'https://i.pravatar.cc/150?u=sarah' }
  ]
};

export default function App() {
  return (
    <div className="min-h-screen bg-sky-50 text-sky-950 font-sans selection:bg-sky-200 selection:text-sky-900">
      {/* 1. Hero Section from PoolService.tsx */}
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

      {/* 2. Services Grid from PoolService.tsx */}
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

      {/* 3. Submerged Flow Services from ProjectDetail.tsx */}
      <section className="py-24 px-6 bg-sky-950 text-white">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="mb-12">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 opacity-50 text-sky-400">{project.serviceSectionTitle}</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">{project.serviceSectionSubtitle}</h3>
          </div>
          {project.services.map((service, idx) => (
             <motion.div 
               key={idx} 
               initial={{ x: -100, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               className="flex items-center gap-12 bg-sky-500/10 backdrop-blur-xl p-12 border-l-[16px] border-sky-400 group hover:bg-sky-600/20 transition-all cursor-default relative overflow-hidden"
             >
                <div className="w-32 h-32 bg-sky-900 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform shadow-2xl">
                   <service.icon className="w-16 h-16 text-sky-400 group-hover:text-white" />
                </div>
                <div className="flex-1">
                   <h4 className="text-4xl font-black text-white italic uppercase tracking-tighter mb-4">{service.title}</h4>
                   <p className="text-sky-200 group-hover:text-white leading-relaxed text-lg">{service.description}</p>
                </div>
                <div className="text-8xl font-black text-white/5 absolute right-12 group-hover:text-white/20 transition-all">0{idx + 1}</div>
             </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Infinity Visions from ProjectDetail.tsx */}
      <section className="bg-sky-950 p-12 md:p-20 relative overflow-hidden border-t border-sky-800">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10 text-white">
            <div className="order-2 lg:order-1">
               <img src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200" className="w-full aspect-square object-cover rounded-none shadow-2xl" alt="Pool" />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
               <h2 className="text-6xl md:text-7xl font-black text-white italic leading-none uppercase">Infinity <br/>Visions.</h2>
               <p className="text-2xl text-sky-100 font-light leading-relaxed tracking-tight">{project.aboutText}</p>
               <div className="flex gap-4">
                  <div className="px-6 py-2 bg-sky-400/20 rounded-none border border-sky-400/30 text-sky-400 text-xs font-bold uppercase tracking-widest leading-none">Saltwater Specialist</div>
                  <div className="px-6 py-2 bg-sky-400/20 rounded-none border border-sky-400/30 text-sky-400 text-xs font-bold uppercase tracking-widest leading-none">Weekly Care</div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. Reviews from ProjectDetail.tsx */}
      {project.testimonials.length > 0 && (
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-sky-600">Water Reviews</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Clear feedback from our happy owners.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {project.testimonials.map((t, idx) => (
              <div key={idx} className="p-10 rounded-[2.5rem] bg-white border border-sky-100 shadow-sm">
                <p className="text-xl font-serif italic opacity-80 mb-8 leading-relaxed">"{t.content}"</p>
                <div>
                  <h5 className="font-bold text-sky-950">{t.name}</h5>
                  <p className="text-xs text-sky-600 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. Stop Scrubbing Start Floating CTA from ProjectDetail.tsx */}
      <section className="py-20 max-w-7xl mx-auto px-6">
         <div className="bg-sky-500 p-16 md:p-20 flex flex-col md:flex-row items-center justify-between rounded-[4rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 text-white mb-8 md:mb-0">
               <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">STOP SCRUBBING.<br/>START FLOATING.</h2>
               <p className="text-sky-100 text-xl font-light uppercase tracking-widest opacity-80">Pure Water. Perfect Balance.</p>
            </div>
            <a href="tel:5555555555" className="relative z-10 px-16 py-8 bg-sky-950 text-white font-black text-2xl uppercase italic tracking-widest hover:bg-white hover:text-sky-950 transition-all shadow-2xl">Book Service</a>
         </div>
      </section>

      {/* 7. Footer from PoolService.tsx */}
      <footer className="py-20 px-6 bg-white border-t border-sky-100 text-sky-900/60 text-sm">
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
          </div>
          <div>
            <h5 className="font-bold text-sky-950 uppercase text-xs tracking-widest mb-4">Coverage</h5>
            <p>Port Charlotte, Punta Gorda, Englewood, Rotonda West.</p>
          </div>
          <div>
            <h5 className="font-bold text-sky-950 uppercase text-xs tracking-widest mb-4">Contact</h5>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-sky-600" /> (555) 555-5555</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
