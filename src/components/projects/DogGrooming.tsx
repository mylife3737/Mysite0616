import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../../types';
import { cn } from '../../utils';
import { Instagram, Facebook, Twitter, MapPin, Phone, Star, Scissors, Heart, Sparkles } from 'lucide-react';

interface ProjectProps {
  project: Project;
}

export const DogGrooming: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-rose-100 selection:text-rose-600">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-sky-50 z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <motion.div
             initial={{ x: -100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ duration: 0.8 }}
           >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                 <Sparkles className="w-3 h-3" />
                 Most Loved In Town
              </div>
              <h1 className="text-8xl md:text-[10rem] leading-[0.85] font-black tracking-tighter uppercase mb-8 text-sky-950">
                 PAWS <span className="text-rose-500">&</span><br/>CLAWS
              </h1>
              <p className="text-2xl text-sky-950/60 font-medium mb-12 max-w-lg leading-snug">The spa treatment your best friend deserve. Professional grooming with a gentle touch.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <button className="px-10 py-5 bg-sky-600 text-white rounded-full font-bold text-lg hover:bg-sky-700 transition-all shadow-xl shadow-sky-600/20 hover:scale-105 active:scale-95">Book Appointment</button>
                 <button className="px-10 py-5 bg-white text-sky-600 border-2 border-sky-100 rounded-full font-bold text-lg hover:border-sky-600 transition-all">View Services</button>
              </div>
           </motion.div>
           <div className="relative">
              <motion.div 
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-rose-200/20 rounded-[5rem] blur-3xl" 
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative z-10 w-full max-w-[500px] aspect-square mx-auto"
              >
                 <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 border-4 border-dashed border-sky-200 rounded-full"
                 />
                 <motion.div 
                   animate={{ y: [0, -20, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="relative z-10 w-full h-full rounded-full overflow-hidden shadow-2xl border-[16px] border-white"
                 >
                    <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1200" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-xs opacity-40 pointer-events-none" />
                 </motion.div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-white relative">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <div className="text-center p-12 bg-sky-50 rounded-[4rem] group hover:bg-sky-600 transition-all duration-500">
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-sky-600 mx-auto mb-8 shadow-xl group-hover:bg-sky-700 group-hover:text-white transition-colors">
                     <Scissors className="w-10 h-10" />
                  </div>
                  <h3 className="text-4xl font-black text-sky-950 mb-4 group-hover:text-white">Precision Grooming</h3>
                  <p className="text-sky-950/60 font-medium group-hover:text-sky-100">Every clip and trim is done with the utmost care and professional skill.</p>
               </div>
               <div className="text-center p-12 bg-rose-50 rounded-[4rem] group hover:bg-rose-500 transition-all duration-500">
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-rose-500 mx-auto mb-8 shadow-xl group-hover:bg-rose-600 group-hover:text-white transition-colors">
                     <Heart className="w-10 h-10" />
                  </div>
                  <h3 className="text-4xl font-black text-rose-950 mb-4 group-hover:text-white">Gentle Care</h3>
                  <p className="text-rose-950/60 font-medium group-hover:text-rose-100">Your pet's comfort is our priority. We treat every visitor like family.</p>
               </div>
               <div className="text-center p-12 bg-emerald-50 rounded-[4rem] group hover:bg-emerald-600 transition-all duration-500">
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-emerald-600 mx-auto mb-8 shadow-xl group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                     <Sparkles className="w-10 h-10" />
                  </div>
                  <h3 className="text-4xl font-black text-emerald-950 mb-4 group-hover:text-white">Tidy Finish</h3>
                  <p className="text-emerald-950/60 font-medium group-hover:text-emerald-100">Premium shampoos and post-bath care leave your pet smelling amazing.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-sky-950 text-white border-t border-sky-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white italic"
                style={{ backgroundColor: project.accentColor }}
              >
                {project.name[0]}
              </div>
              <span className="text-3xl font-black tracking-tighter uppercase">{project.name}</span>
            </div>
            <p className="opacity-50 max-w-sm mb-6 text-lg font-medium leading-tight">
              Premium grooming services for the world's most pampered pets since 2012.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-4 bg-sky-900/50 rounded-2xl text-white hover:bg-rose-500 transition-all"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="p-4 bg-sky-900/50 rounded-2xl text-white hover:bg-rose-500 transition-all"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="p-4 bg-sky-900/50 rounded-2xl text-white hover:bg-rose-500 transition-all"><Twitter className="w-6 h-6" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-sky-400">The Salon</h4>
            <ul className="space-y-4 opacity-70 text-sm font-medium">
               <li>Full Bath & Dry</li>
               <li>Breed Cuts</li>
               <li>Nail Trimming</li>
               <li>Teeth Cleaning</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-sky-400">Visit Us</h4>
            <ul className="space-y-4 opacity-70 text-sm font-medium">
               <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 123 Puppy Lane</li>
               <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> (555) 729-2529</li>
               <li>Open Tue-Sat</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
