import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../../types';
import { cn } from '../../utils';
import { Instagram, Facebook, Twitter, MapPin, Phone, Star, Hammer, Shield, Clock, Wrench } from 'lucide-react';

interface ProjectProps {
  project: Project;
}

export const Handyman: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-mono selection:bg-red-600 selection:text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b-8 border-red-600">
        <div className="absolute inset-0 z-0 bg-linear-to-b from-zinc-900 to-zinc-950" />
        
        {/* Tools Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581244276891-6bc618f3a697?q=80&w=2000" 
            alt="Workshop tools"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
           <motion.div
             initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.8 }}
           >
              <div className="inline-block border-2 border-red-600 text-red-600 px-6 py-2 text-sm uppercase tracking-[0.4em] font-black mb-12 animate-pulse">
                 Ready For Action
              </div>
              <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase mb-6 leading-none border-b-4 border-red-600 inline-block pb-4">
                 {project.name.split(' ')[0]} <span className="text-red-600">Fixes</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 mb-16 max-w-2xl mx-auto leading-relaxed border-l-4 border-red-600 pl-8 text-left italic font-serif">"No job too small, no problem too tough. Honest work, fair price, every single time."</p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                 <a href="tel:5551234567" className="group flex items-center gap-6 px-12 py-6 bg-red-600 text-white font-black uppercase tracking-widest text-xl hover:bg-white hover:text-zinc-950 transition-all shadow-[20px_20px_0_rgba(255,255,255,0.05)] hover:shadow-[20px_20px_0_rgba(220,38,38,1)] active:scale-95">
                    <Phone className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                    Get Estimate
                 </a>
                 <div className="flex items-center gap-8 text-lg font-black uppercase text-zinc-500">
                    <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-red-600" /> Fully Insured</span>
                    <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-red-600" /> Same Day Service</span>
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Grid Services Section */}
      <section className="py-40 bg-zinc-950 relative overflow-hidden">
         <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #dc2626 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
         </div>
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 border-4 border-zinc-800">
               <div className="lg:col-span-2 p-16 border-zinc-800 border-b-4 lg:border-b-0 lg:border-r-4 hover:bg-zinc-900 transition-colors">
                  <div className="text-red-600 mb-8"><Hammer className="w-16 h-16" /></div>
                  <h3 className="text-5xl font-black uppercase mb-6 leading-none">The Master <span className="text-red-600 font-serif italic text-4xl block">Handyman</span></h3>
                  <p className="text-xl text-zinc-500 leading-relaxed font-sans font-medium">From leaky faucets to full deck restorations. I bring the tools, the expertise, and the focus required to get it right the first time.</p>
               </div>
               <div className="lg:col-span-1 p-12 border-zinc-800 border-b-4 lg:border-b-0 lg:border-r-4 hover:bg-zinc-900 transition-colors group">
                  <div className="w-12 h-12 bg-red-600 flex items-center justify-center mb-12 group-hover:scale-110 transition-transform">
                     <span className="font-black text-2xl italic">01</span>
                  </div>
                  <h4 className="text-2xl font-black uppercase mb-4 tracking-tighter">Kitchen & Bath</h4>
                  <p className="text-zinc-500 text-sm font-sans">Plumbing, tile repair, grout whitening, and fixture upgrades.</p>
               </div>
               <div className="lg:col-span-1 p-12 hover:bg-zinc-900 transition-colors group">
                  <div className="w-12 h-12 bg-white flex items-center justify-center mb-12 group-hover:scale-110 transition-transform text-zinc-950">
                     <span className="font-black text-2xl italic">02</span>
                  </div>
                  <h4 className="text-2xl font-black uppercase mb-4 tracking-tighter">Exterior Work</h4>
                  <p className="text-zinc-500 text-sm font-sans">Power washing, fence repair, gutter cleaning, and deck staining.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-40 bg-zinc-900 border-t-8 border-red-600">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-20 items-center">
               <div className="flex-1">
                  <h2 className="text-6xl font-black uppercase mb-4 leading-none">Straight Talk <span className="text-red-600 block text-4xl font-serif italic mt-2">from the clients.</span></h2>
                  <div className="flex gap-2 text-red-600 mt-12 mb-12">
                     <Star className="w-6 h-6 fill-current" />
                     <Star className="w-6 h-6 fill-current" />
                     <Star className="w-6 h-6 fill-current" />
                     <Star className="w-6 h-6 fill-current" />
                     <Star className="w-6 h-6 fill-current" />
                  </div>
                  <p className="text-2xl italic font-serif text-zinc-400 mb-12 leading-relaxed">"Absolute professional. Showed up on time, fixed a problem three other guys couldn't, and left the workspace cleaner than he found it. Mike is my go-to forever."</p>
                  <p className="text-red-600 font-black uppercase tracking-[0.3em]">-- Robert Harrison, West End</p>
               </div>
               <div className="w-full lg:w-[400px]">
                  <div className="p-8 border-4 border-red-600 shadow-[20px_20px_0_rgba(220,38,38,0.2)]">
                     <h4 className="text-xl font-black uppercase mb-6 border-b border-zinc-800 pb-4">Recent Fixes</h4>
                     <ul className="space-y-4 text-sm font-sans uppercase font-bold text-zinc-500">
                        <li className="flex justify-between"><span>Drywall Repair</span> <span className="text-red-600">COMPLETED</span></li>
                        <li className="flex justify-between"><span>Tile Flooring</span> <span className="text-red-600">COMPLETED</span></li>
                        <li className="flex justify-between"><span>Patio Door</span> <span className="text-red-600">COMPLETED</span></li>
                        <li className="flex justify-between"><span>Custom Shelving</span> <span className="text-red-600">IN PROGRESS</span></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-zinc-950 border-t-8 border-red-600">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-10 h-10 flex items-center justify-center font-black text-white"
                style={{ backgroundColor: project.accentColor }}
              >
                {project.name[0]}
              </div>
              <span className="text-3xl font-black tracking-tighter uppercase">{project.name}</span>
            </div>
            <p className="opacity-50 max-w-sm mb-6 text-lg font-bold leading-tight uppercase font-sans">
               Building trust one fix at a time. Residential maintenance and major repairs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-4 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="p-4 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="p-4 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all"><Twitter className="w-6 h-6" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-black uppercase mb-8 border-b-2 border-red-600 inline-block">The Toolkit</h4>
            <ul className="space-y-4 opacity-70 text-sm font-bold uppercase tracking-widest">
               <li>Plumbing</li>
               <li>Electrical</li>
               <li>Painting</li>
               <li>Carpentry</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-black uppercase mb-8 border-b-2 border-red-600 inline-block">Contact</h4>
            <ul className="space-y-4 opacity-70 text-sm font-bold uppercase tracking-widest">
               <li className="flex items-center gap-2 font-black text-red-600"><Phone className="w-4 h-4" /> (555) 394-Fixit</li>
               <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Service Area: Central</li>
               <li>Mon-Sat: 7am-6pm</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
