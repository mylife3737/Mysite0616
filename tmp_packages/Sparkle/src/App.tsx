import React from 'react';
import { motion } from 'motion/react';
import { Brush, Sparkles, Droplets, CheckCircle2, Shield, Phone, MapPin, Globe } from 'lucide-react';
import { Project } from './types';

const project: Project = {
  id: 'housecleaner',
  name: 'Sparkle Fresh',
  businessName: 'Sparkle Fresh Home Cleaning',
  description: 'Breathe easy in a truly clean home.',
  logo: 'SparkleFresh',
  heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2000',
  accentColor: '#facc15',
  theme: 'light',
  fontFamily: 'font-sans', 
  serviceSectionTitle: 'Clean Standards',
  serviceSectionSubtitle: 'Dedicated care for your unique space.',
  aboutText: 'Sparkle Fresh provides professional cleaning that treats your home as a sanctuary. We make every surface shine, allowing you to focus on what matters most in a bright, sunny space.',
  services: [
    { 
      title: 'Total House Clean', 
      description: 'Our comprehensive refresh of all living areas, kitchens, and baths.', 
      icon: Brush,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800'
    },
    { 
      title: 'Deep Clean', 
      description: 'Thorough cleaning of appliances, baseboards, and hidden corners.', 
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6958?q=80&w=800'
    },
    { 
      title: 'Window Washing', 
      description: 'Interior and exterior glass clarity that brightens your day.', 
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=800'
    }
  ],
  testimonials: [
    { name: 'Emma G.', role: 'Busy Lawyer', content: 'Coming home to a Sparkle Fresh house is the best feeling in the world.', avatar: 'https://i.pravatar.cc/150?u=emma' }
  ]
};

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 font-sans selection:bg-yellow-100 selection:text-zinc-950">
      {/* 1. Hero Section from HomeCleanup.tsx */}
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
                 <a href="#quote" className="px-12 py-7 bg-zinc-950 text-white rounded-none font-bold text-lg hover:bg-yellow-500 hover:text-zinc-950 transition-all shadow-2xl relative group">
                    Book Your Clean
                    <div className="absolute top-0 right-0 w-8 h-8 bg-yellow-400 group-hover:bg-zinc-950 transition-colors transform translate-x-4 -translate-y-4" />
                 </a>
              </div>
           </motion.div>
           <div className="relative">
              <div className="space-y-6">
                 <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative"
                 >
                    <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6958?q=80&w=2000" className="w-full aspect-square object-cover shadow-2xl border-8 border-white" referrerPolicy="no-referrer" alt="Clean home" />
                    <div className="absolute -bottom-10 -right-10 bg-yellow-500 p-8 shadow-2xl border-l-4 border-zinc-950 max-w-[220px]">
                       <p className="text-[10px] uppercase font-black text-yellow-900 mb-2 tracking-[0.2em]">Our View</p>
                       <p className="text-sm font-serif italic text-zinc-950 leading-snug">"Bringing sunshine and professional care to every room."</p>
                    </div>
                 </motion.div>
              </div>
           </div>
        </div>
      </section>

      {/* 2. Services Grid from HomeCleanup.tsx */}
      <section className="py-32 bg-zinc-950 text-white relative">
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

      {/* 3. Original Grid Burst Services from ProjectDetail.tsx */}
      <section className="py-24 max-w-4xl mx-auto px-6 space-y-20">
         <div className="text-center mb-12">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 opacity-50">{project.serviceSectionTitle}</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">{project.serviceSectionSubtitle}</h3>
         </div>
         {project.services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 text-center md:text-left space-y-4">
                 <span className="text-yellow-600 font-mono text-xs tracking-tighter uppercase font-bold">Process 0{idx + 1}</span>
                 <h4 className="text-4xl md:text-5xl font-black text-zinc-900 leading-none uppercase">{service.title}</h4>
                 <p className="text-xl text-zinc-500 leading-relaxed font-sans">{service.description}</p>
              </div>
              <div className="w-full md:w-80 aspect-square overflow-hidden shadow-2xl border-4 border-white group">
                 <img 
                   src={service.image} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   alt={service.title}
                   referrerPolicy="no-referrer"
                 />
              </div>
            </motion.div>
         ))}
      </section>

      {/* 4. Original The Team of Three from ProjectDetail.tsx */}
      <section className="py-24 bg-slate-100 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="flex flex-col gap-8">
              <h2 className="text-6xl md:text-7xl font-serif text-slate-800 leading-tight">The Team of <span className="text-slate-400 italic">Three.</span></h2>
              <p className="text-xl text-slate-500 leading-relaxed font-sans">{project.aboutText}</p>
              <div className="space-y-6 pt-4">
                 <div className="flex items-center gap-6 p-6 bg-white shadow-sm border border-slate-200 rounded-2xl">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-800 font-bold italic font-serif">1</div>
                    <div>
                      <p className="font-bold text-slate-800">The Visual Lead</p>
                      <p className="text-sm text-slate-500">Focuses on resetting surfaces and organizing living areas.</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-6 p-6 bg-white shadow-sm border border-slate-200 rounded-2xl">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-800 font-bold italic font-serif">2</div>
                    <div>
                      <p className="font-bold text-slate-800">The Detail Specialist</p>
                      <p className="text-sm text-slate-500">Targets baseboards, corners, and hidden dust points.</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-6 p-6 bg-white shadow-sm border border-slate-200 rounded-2xl">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-800 font-bold italic font-serif">3</div>
                    <div>
                      <p className="font-bold text-slate-800">The Sanitary Pro</p>
                      <p className="text-sm text-slate-500">Deep scrubbing and hospital-grade disinfection for wet areas.</p>
                    </div>
                 </div>
              </div>
           </div>
           <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6958?q=80&w=800" className="w-full aspect-[4/5] object-cover rounded-3xl mt-12 shadow-xl" referrerPolicy="no-referrer" alt="Clean Home" />
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800" className="w-full aspect-[4/5] object-cover rounded-3xl shadow-xl" referrerPolicy="no-referrer" alt="Clean Living" />
           </div>
        </div>
      </section>

      {/* 5. Original The Process Begins Quote Request Form from ProjectDetail.tsx */}
      <section id="quote" className="py-24 max-w-7xl mx-auto px-6">
         <div className="bg-[#fefce8] border-2 border-yellow-100 p-8 md:p-16 shadow-2xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             <div className="space-y-8 text-left">
               <h2 className="text-5xl md:text-6xl font-serif font-black text-slate-900 leading-[0.85] uppercase tracking-tighter">THE <br/><span className="text-yellow-600 italic uppercase">PROCESS</span> BEGINS.</h2>
               <p className="text-xl text-slate-700 leading-relaxed font-sans">{project.aboutText}</p>
               
               <div className="space-y-4 pt-6">
                 <h4 className="text-2xl font-serif italic text-slate-800">Ready for your sanctuary?</h4>
                 <p className="text-slate-500 leading-relaxed font-sans italic">Sparkle Fresh Standards | Professional Care</p>
                 <p className="flex items-center gap-2 font-bold text-slate-900"><Phone className="w-5 h-5 text-yellow-600" /> (555) 555-5555</p>
               </div>
             </div>

             <div className="bg-white p-8 md:p-10 border border-yellow-200">
               <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 mb-2 tracking-[0.2em] uppercase">Your Name</label>
                    <input type="text" className="w-full bg-white border border-slate-200 p-3.5 focus:ring-2 ring-yellow-500 outline-none text-sm" placeholder="Full Name" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 mb-2 tracking-[0.2em] uppercase">Email Address</label>
                    <input type="email" className="w-full bg-white border border-slate-200 p-3.5 focus:ring-2 ring-yellow-500 outline-none text-sm" placeholder="name@email.com" />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-black text-slate-400 mb-3 tracking-[0.2em] uppercase">Service Frequency</label>
                    <div className="flex flex-wrap gap-3">
                       {['Weekly', 'Bi-Weekly', 'Custom Schedule'].map(freq => (
                         <label key={freq} className="flex-1 min-w-[130px] flex items-center gap-3 bg-white px-4 py-3 border border-slate-200 cursor-pointer hover:bg-yellow-50 transition-all text-xs font-bold uppercase text-slate-800">
                           <input type="radio" name="freq" defaultChecked={freq === 'Weekly'} className="w-4 h-4 accent-yellow-500" />
                           <span>{freq}</span>
                         </label>
                       ))}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-black text-slate-400 mb-3 tracking-[0.2em] uppercase">Select Services</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                       {['Total House Clean', 'Window Cleaning', 'Deep Clean', 'Move-In/Out'].map(srv => (
                         <label key={srv} className="flex items-center gap-3 bg-white px-4 py-3 border border-slate-200 cursor-pointer hover:bg-yellow-50 text-slate-800 font-bold uppercase">
                           <input type="checkbox" defaultChecked={srv === 'Total House Clean'} className="w-4 h-4 accent-yellow-500" />
                           <span>{srv}</span>
                         </label>
                       ))}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-black text-slate-400 mb-2 tracking-[0.2em] uppercase">Additional Details</label>
                    <textarea className="w-full bg-white border border-slate-200 p-3.5 h-28 focus:ring-2 ring-yellow-500 outline-none text-sm" placeholder="Any specific areas we should focus on?"></textarea>
                  </div>
                  
                  <button type="button" className="md:col-span-2 py-5 bg-yellow-500 text-slate-950 font-bold hover:bg-yellow-400 transition-all shadow-xl uppercase tracking-widest text-xs">Submit Quote Request</button>
               </form>
             </div>
           </div>
         </div>
      </section>

      {/* 6. Footer from HomeCleanup.tsx */}
      <footer className="py-20 px-6 bg-zinc-50 border-t border-zinc-200 text-sm">
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
            <p className="max-w-sm mb-6 text-sm text-zinc-500">{project.description}</p>
          </div>
          <div>
            <h5 className="font-bold text-zinc-950 uppercase text-xs tracking-widest mb-4">Location</h5>
            <p className="text-zinc-600">Charlotte County, FL & Surrounding Areas</p>
          </div>
          <div>
            <h5 className="font-bold text-zinc-950 uppercase text-xs tracking-widest mb-4">Phone</h5>
            <p className="text-zinc-600">(555) 555-5555</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
