import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../../types';
import { cn } from '../../utils';
import { Instagram, Facebook, Twitter, MapPin, Phone, Star, Sparkles, Home, Shield, CheckCircle2 } from 'lucide-react';

interface ProjectProps {
  project: Project;
}

export const HomeCleanup: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 font-sans selection:bg-yellow-100 selection:text-zinc-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <motion.div
             initial={{ x: -100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
           >
              <div className="flex items-center gap-3 mb-8">
                 <div className="h-px w-12 bg-zinc-950/20" />
                 <span className="text-xs uppercase tracking-[0.3em] font-black opacity-40">Residential Cleaning</span>
              </div>
              <h1 className="text-8xl md:text-[9rem] font-black tracking-tighter leading-[0.8] mb-12">
                 FRESH<br/>
                 <span className="text-transparent stroke-zinc-950 stroke-1" style={{ WebkitTextStroke: '2px #09090b' }}>SPACES.</span>
              </h1>
              <p className="text-2xl text-zinc-500 font-medium mb-12 max-w-lg leading-snug italic font-serif">A clean home is a happy home. We take the stress out of chores so you can focus on what matters.</p>
              <div className="flex flex-col sm:flex-row gap-6">
                 <button className="px-12 py- 7 bg-zinc-950 text-white rounded-none font-bold text-lg hover:bg-yellow-500 hover:text-zinc-950 transition-all shadow-2xl relative group">
                    Book Your Clean
                    <div className="absolute top-0 right-0 w-8 h-8 bg-yellow-400 group-hover:bg-zinc-950 transition-colors transform translate-x-4 -translate-y-4" />
                 </button>
              </div>
           </motion.div>
           <div className="relative">
              <div className="space-y-6">
                 <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative"
                 >
                    <img src="https://images.unsplash.com/photo-1581578731548-c64695ce6958?q=80&w=2000" className="w-full aspect-square object-cover shadow-2xl border-8 border-white" referrerPolicy="no-referrer" />
                    <div className="absolute -bottom-10 -right-10 bg-yellow-500 p-8 shadow-2xl border-l-4 border-zinc-950 max-w-[220px]">
                       <p className="text-[10px] uppercase font-black text-yellow-900 mb-2 tracking-[0.2em]">Our View</p>
                       <p className="text-sm font-serif italic text-zinc-950 leading-snug italic">"Bringing sunshine and professional care to every room."</p>
                    </div>
                 </motion.div>
              </div>
           </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-40 bg-zinc-950 text-white relative">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-center lg:text-left">
               <div className="lg:col-span-4">
                  <h2 className="text-6xl font-black uppercase mb-6 tracking-tighter leading-none italic">Quality <span className="text-yellow-500">First.</span></h2>
                  <p className="text-zinc-500 font-medium leading-relaxed mb-12">We believe in a standard that goes beyond just 'tidy'. Every surface, every corner, every detail matters to us.</p>
                  <div className="flex flex-col gap-6">
                     <div className="flex items-center gap-4 group">
                        <CheckCircle2 className="w-6 h-6 text-yellow-500 group-hover:scale-110 transition-transform" />
                        <span className="font-bold uppercase tracking-widest text-sm">Full Background Checks</span>
                     </div>
                     <div className="flex items-center gap-4 group">
                        <CheckCircle2 className="w-6 h-6 text-yellow-500 group-hover:scale-110 transition-transform" />
                        <span className="font-bold uppercase tracking-widest text-sm">Eco-Friendly Products</span>
                     </div>
                  </div>
               </div>
               <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-12 bg-zinc-900 border-l border-white/5 hover:border-yellow-500 transition-colors">
                     <Sparkles className="w-12 h-12 text-yellow-500 mb-8" />
                     <h3 className="text-3xl font-black mb-4 uppercase italic">Regular Maintenance</h3>
                     <p className="text-zinc-500 text-sm leading-relaxed">Weekly, bi-weekly, or monthly visits to keep your home consistently fresh and inviting.</p>
                  </div>
                  <div className="p-12 bg-zinc-900 border-l border-white/5 hover:border-yellow-500 transition-colors">
                     <Shield className="w-12 h-12 text-yellow-500 mb-8" />
                     <h3 className="text-3xl font-black mb-4 uppercase italic">Deep Cleaning</h3>
                     <p className="text-zinc-500 text-sm leading-relaxed">Top-to-bottom detail work including behind appliances, inside cabinets, and baseboards.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-10 h-10 rounded-none flex items-center justify-center font-black text-white"
                style={{ backgroundColor: project.accentColor }}
              >
                {project.name[0]}
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">{project.name}</span>
            </div>
            <p className="opacity-50 max-w-sm mb-6 text-sm font-medium leading-tight italic font-serif">
               Punctual, professional, and precise. We've been cleaning the neighborhood since 2012.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-4 bg-white border border-zinc-200 text-zinc-950 hover:bg-yellow-500 hover:border-yellow-500 transition-all"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="p-4 bg-white border border-zinc-200 text-zinc-950 hover:bg-yellow-500 hover:border-yellow-500 transition-all"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="p-4 bg-white border border-zinc-200 text-zinc-950 hover:bg-yellow-500 hover:border-yellow-500 transition-all"><Twitter className="w-6 h-6" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-black mb-8 opacity-40">Checklist</h4>
            <ul className="space-y-4 text-sm font-bold opacity-70">
               <li>Kitchen Sanitizing</li>
               <li>Window Cleaning</li>
               <li>Floor Care</li>
               <li>Dusting & Vacuum</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-black mb-8 opacity-40">Call Us</h4>
            <ul className="space-y-4 text-sm font-bold">
               <li className="flex items-center gap-2 opacity-70"><MapPin className="w-4 h-4" /> Charlotte County</li>
               <li className="flex items-center gap-2 text-zinc-950 font-black"><Phone className="w-4 h-4" /> (555) 012-CLEAN</li>
               <li className="opacity-70">Mon-Fri: 8am - 6pm</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
