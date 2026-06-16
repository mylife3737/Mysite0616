import React from 'react';
import { motion } from 'motion/react';
import { Tractor, Phone, MapPin, Scissors, Leaf, Instagram, Facebook, Twitter, Star } from 'lucide-react';
import { Project } from '../../types';
import { cn } from '../../utils';
import { DansCard } from './DansCard';
import headerImg from '../../assets/Header.jpg';
import danPhoto from '../../assets/dananddog.jpeg';
import mowingVideo from '../../assets/GIF.mp4';

interface ProjectProps {
  project: Project;
}

export const DansLawnCare: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="min-h-screen bg-emerald-950/5 selection:bg-amber-400 selection:text-emerald-950">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <img 
              src={headerImg} 
              className="w-full h-full object-cover opacity-80" 
              alt="Freshly cut grass and lawn mower" 
            />
          </motion.div>
        </div>
        
        <div className="absolute inset-0 bg-linear-to-b from-emerald-900/60 via-emerald-800/40 to-amber-400/20 mix-blend-multiply z-1" />
        
        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 px-6"
          >
            <div className="flex flex-col items-center gap-6 mb-8 group">
              <div className="w-24 h-24 rounded-full border-4 border-emerald-950 bg-amber-400 flex items-center justify-center p-4 shadow-2xl transform -rotate-3 group-hover:rotate-0 transition-transform">
                <Tractor className="w-full h-full text-emerald-950" />
              </div>
              <div className="bg-amber-400 px-12 py-6 shadow-2xl transform -rotate-1 relative overflow-hidden cursor-default">
                <h1 className="text-6xl md:text-8xl font-black text-emerald-950 uppercase tracking-tighter transition-transform group-hover:scale-105 relative z-10">DAN'S<br/>LAWN CARE</h1>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-white drop-shadow-lg mb-8 max-w-2xl mx-auto font-sans font-medium leading-tight tracking-wide bg-emerald-950/20 backdrop-blur-sm px-4 py-2 rounded-lg">Just a guy with a mower and a really sharp blade.</p>
            <p className="text-lg text-amber-400 font-bold mb-8 italic tracking-widest uppercase">Fast, fair, and I won't trample your petunias.</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a href="#contact" className="inline-block px-12 py-6 bg-amber-400 text-emerald-950 font-black uppercase tracking-tighter text-xl hover:bg-white transition-all hover:scale-105 shadow-2xl active:scale-95">Call Dan Now</a>
              <a href="#contact" className="inline-block px-12 py-6 bg-white text-emerald-950 font-black uppercase tracking-tighter text-xl hover:bg-amber-400 transition-all hover:scale-105 shadow-2xl active:scale-95">Request a Quote</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 bg-amber-50">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                 initial={{ x: -50, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 viewport={{ once: true }}
                 className="relative max-w-sm mx-auto lg:ml-0"
              >
                  <img src={danPhoto} className="w-full aspect-[4/5] object-cover rounded-none border-l-8 border-emerald-950 shadow-2xl hover:brightness-110 transition-all duration-500" alt="Dan - Local Lawn Professional" />
                 <div className="absolute -bottom-10 -right-10 bg-amber-400 p-8 text-emerald-950 shadow-2xl transform hover:rotate-0 transition-transform -rotate-2">
                    <p className="text-4xl font-black italic">TRUST DAN.</p>
                    <p className="text-xs uppercase tracking-tighter opacity-70">Charlotte County Native</p>
                 </div>
              </motion.div>

              <div className="space-y-12">
                 <div className="space-y-6">
                    <motion.h2 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="text-7xl font-black text-emerald-950 uppercase tracking-tighter leading-none"
                    >
                      I'm Dan.<br/><span className="text-amber-400 italic">I mow grass.</span>
                    </motion.h2>
                    <div className="text-xl text-emerald-900/70 leading-relaxed font-serif italic">
                       {project.aboutText}
                    </div>
                    
                    <div className="pt-8 border-t border-emerald-900/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                        <div className="p-4 bg-emerald-100/50 border border-emerald-200">
                           <p className="text-2xl font-black text-emerald-950">14</p>
                           <p className="text-[10px] uppercase tracking-widest font-bold text-emerald-800/60">Years Local</p>
                        </div>
                        <div className="p-4 bg-emerald-100/50 border border-emerald-200">
                           <p className="text-2xl font-black text-emerald-950">10k+</p>
                           <p className="text-[10px] uppercase tracking-widest font-bold text-emerald-800/60">Lawns Mowed</p>
                        </div>
                        <div className="p-4 bg-emerald-100/50 border border-emerald-200">
                           <p className="text-2xl font-black text-emerald-950">0</p>
                           <p className="text-[10px] uppercase tracking-widest font-bold text-emerald-800/60">Fancy Apps</p>
                        </div>
                        <div className="p-4 bg-emerald-100/50 border border-emerald-200">
                           <p className="text-2xl font-black text-emerald-950">100%</p>
                           <p className="text-[10px] uppercase tracking-widest font-bold text-emerald-800/60">Reliability</p>
                        </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pt-24 pb-0 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-6xl font-black text-emerald-950 uppercase tracking-tighter mb-4">{project.serviceSectionTitle}</h2>
              <p className="text-2xl text-emerald-800/60 font-serif italic">{project.serviceSectionSubtitle}</p>
            </div>
            <div className="bg-amber-400 p-6 shadow-xl hidden md:block">
              <p className="text-emerald-950 font-black uppercase tracking-widest text-xs italic">Dan's Promise: No bull, just mowed grass.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-emerald-950">
            {project.services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={cn(
                  "p-8 transition-all group relative overflow-hidden",
                  index < 2 ? "border-b-4 md:border-b-0 md:border-r-4 border-emerald-950" : "",
                  "hover:bg-amber-400"
                )}
              >
                {service.image && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                    {index === 0 ? (
                      <video 
                        src={`${mowingVideo}#t=3`} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <img src={service.image} className="w-full h-full object-cover" alt="" />
                    )}
                  </div>
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-emerald-950 text-amber-400 p-4 mb-8 transform group-hover:rotate-12 transition-transform">
                    <service.icon className="w-full h-full" />
                  </div>
                  <h3 className="text-3xl font-black text-emerald-950 uppercase tracking-tighter mb-4">{service.title}</h3>
                  <p className="text-lg text-emerald-800/70 font-medium">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pt-0 pb-40 bg-white overflow-hidden">
         <div className="max-w-7xl mx-auto px-6">
            <div className="relative">
               <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 className="absolute -top-24 -left-12 text-[15rem] font-black text-emerald-950/5 leading-none select-none"
               >
                 VOICES
               </motion.div>
               
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
                  <div className="lg:col-span-1">
                     <h2 className="text-6xl font-black text-emerald-950 uppercase tracking-tighter leading-none mb-4">What Neighbors Say</h2>
                     <p className="text-xl text-emerald-800/50 font-serif italic">Real talk from local neighbors.</p>
                  </div>
                  
                  <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                     {[
                       { name: "Mark R.", location: "Port Charlotte", content: "Dan is a lifesaver. He shows up when he says he will, and my yard has never looked better. Highly recommend!" },
                       { name: "Linda P.", location: "Punta Gorda", content: "Been using Dan for 2 years now. He's fast, fair, and actually cares about the details. Great guy!" },
                       { name: "Steve W.", location: "North Port", content: "Finally found a lawn guy who doesn't flake out. Professional, reliable, and reasonably priced." }
                     ].map((review, i) => (
                       <div key={i} className="bg-emerald-950 p-10 shadow-2xl relative overflow-hidden group border-t-8 border-amber-400">
                          <div className="relative z-10 space-y-6">
                              <div className="flex gap-1 text-amber-400">
                                 {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                              </div>
                              <p className="text-xl font-serif italic text-emerald-100 leading-tight">"{review.content}"</p>
                              <p className="text-[10px] uppercase tracking-widest font-black text-amber-400">— {review.name}, {review.location}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-amber-400">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block p-4 border-4 border-emerald-950 mb-8 transform -rotate-2">
            <Tractor className="w-12 h-12 text-emerald-950" />
          </div>
          <h2 className="text-7xl md:text-9xl font-black text-emerald-950 uppercase tracking-tighter mb-8 italic">Let's Cut Grass.</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="tel:5551234567" className="flex items-center gap-4 px-12 py-6 bg-emerald-950 text-amber-400 text-2xl font-black uppercase tracking-tighter shadow-2xl hover:scale-105 transition-all">
              <Phone className="w-8 h-8" />
              (555) 123-4567
            </a>
            <div className="hidden md:block w-px h-12 bg-emerald-950/20" />
            <p className="text-xl font-black text-emerald-950 uppercase tracking-widest italic">Open Mon-Sat | Dawn till Dusk</p>
          </div>
        </div>
      </section>

      {/* Business Card Section */}
      <DansCard project={project} />

      {/* Footer */}
      <footer className={cn(
        "py-20 px-6 border-t font-medium",
        "bg-amber-400 border-amber-400 text-emerald-950"
      )}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border-2 border-emerald-950 bg-amber-400 flex items-center justify-center p-1.5 shadow-lg">
                  <Tractor className="w-full h-full text-emerald-950" />
                </div>
                <span className="text-xl font-black tracking-tighter uppercase italic leading-[0.8]">DAN'S<br/>LAWN CARE</span>
              </div>
            </div>
            <p className={cn(
              "text-emerald-900/80 mb-6 font-medium italic"
            )}>
              Just a guy with a mower and a really sharp blade.
            </p>
            <div className={cn(
              "mb-8 space-y-2 font-sans",
              "text-emerald-950 font-bold"
            )}>
               <p className="text-sm opacity-60 flex items-center gap-2">
                 <MapPin className="w-4 h-4" />
                 {project.serviceArea ? project.serviceArea.split('|')[0].trim() : "Serving Charlotte County"}
               </p>
               <p className="text-sm opacity-60 flex items-center gap-2">
                 <Phone className="w-4 h-4" />
                 (555) 123-4567
               </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:5551234567" className="px-8 py-4 bg-emerald-950 text-amber-400 rounded-none font-black uppercase tracking-widest text-sm hover:bg-emerald-900 transition-colors text-center">
                Call Now
              </a>
              <a href="#contact" className="px-8 py-4 bg-white text-emerald-950 border-4 border-emerald-950 rounded-none font-black uppercase tracking-widest text-sm hover:bg-zinc-100 transition-colors text-center">
                Get a Quote
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-widest font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 opacity-60 text-sm">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Services</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">About</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-widest font-bold mb-6">Scan to Book</h4>
            <div className="w-24 h-24 bg-white p-2 rounded-lg shadow-lg border border-emerald-950/10">
               <img src="https://placehold.co/100x100?text=QR+Code" alt="QR Code" className="w-full h-full" />
            </div>
          </div>
        </div>
        
        <div className={cn(
          "max-w-7xl mx-auto pt-16 mt-16 border-t opacity-40 text-xs flex flex-col md:flex-row justify-between gap-6",
          "border-emerald-950/20 text-emerald-950"
        )}>
          <p>&copy; 2026 {project.businessName}. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
