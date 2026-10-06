import React from 'react';
import { motion } from 'motion/react';
import { Tractor, Phone, MapPin, Globe, PackageCheck } from 'lucide-react';
import { Project } from '../../types';
import { cn } from '../../utils';

interface ProjectProps {
  project: Project;
}

export const DansCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <section className="py-32 bg-white overflow-hidden border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest mb-6">
             <PackageCheck className="w-3 h-3" />
             Physical Brand Assets
          </div>
          <h2 className="text-6xl font-black text-emerald-950 uppercase tracking-tighter leading-none mb-4">The Official <span className="text-amber-400 italic">Business Card</span></h2>
          <p className="text-emerald-900/40 text-xl font-serif italic">One-sided professional print ready design.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-12">
             <div className="space-y-6">
               <h3 className="text-3xl font-black uppercase text-emerald-950 tracking-tighter">Print Specifications</h3>
               <ul className="space-y-4">
                  {[
                    { label: "Dimensions", value: "3.5\" x 2.0\" Standard" },
                    { label: "Digital File", value: "Vector SVG Included Free" }
                  ].map((spec, i) => (
                    <li key={i} className="flex items-center justify-between py-4 border-b border-emerald-900/10">
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-900/60">{spec.label}</span>
                      <span className="text-sm font-black uppercase text-emerald-950">{spec.value}</span>
                    </li>
                  ))}
               </ul>
             </div>
             <div className="flex justify-center pt-8 border-t border-emerald-900/5">
                <p className="text-sm font-black uppercase tracking-widest text-emerald-900/40">
                  Bonus SVG included <span className="text-emerald-600 ml-2 font-black">Free</span>
                </p>
             </div>
          </div>

          {/* Business Card Mockup */}
          <div className="flex-1 relative perspective-1000 w-full max-w-[550px] group">
            <motion.div 
              initial={{ rotateY: 15, rotateX: 5 }}
              whileHover={{ rotateY: 0, rotateX: 0 }}
              onContextMenu={(e) => e.preventDefault()}
              className="relative w-full aspect-[1.75/1] bg-white p-10 text-emerald-950 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-emerald-100 overflow-hidden flex flex-col justify-between select-none"
            >
              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
                 <span className="text-emerald-900/5 text-8xl font-black uppercase tracking-[0.5em] -rotate-45 whitespace-nowrap">SAMPLE</span>
              </div>

              {/* Subtle Texture */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-20 pointer-events-none" />
              
              {/* Header: Logo and Title */}
              <div className="flex justify-between items-start relative z-10">
                <div className="space-y-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border-2 border-emerald-950 bg-amber-400 flex items-center justify-center p-1.5 shadow-xl">
                       <Tractor className="w-full h-full text-emerald-950" />
                    </div>
                    <div>
                      <h4 className="text-4xl font-black uppercase tracking-tighter leading-[0.8] transition-transform group-hover:scale-105">DAN'S<br/>LAWN CARE</h4>
                      <div className="mt-3 space-y-0.5">
                        <p className="text-[9px] font-black uppercase tracking-[0.05em] text-emerald-950 leading-tight">Just a guy with a mower and a sharp blade.</p>
                        <p className="text-[9px] font-bold italic tracking-tight text-amber-400 leading-tight">Fast, fair, and I won't trample your petunias.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* QR Code Container */}
                <div 
                  className="bg-emerald-950 p-2 rounded-sm shadow-xl"
                >
                   <div className="w-16 h-16 grid grid-cols-4 grid-rows-4 gap-0.5 bg-white p-0.5 opacity-90">
                      {[...Array(16)].map((_, i) => (
                        <div key={i} className={cn("rounded-[1px]", Math.random() > 0.5 ? "bg-emerald-950" : "bg-transparent")} />
                      ))}
                   </div>
                   <p className="text-[7px] font-black uppercase text-white mt-1.5 text-center tracking-tighter">Scan to Quote</p>
                </div>
              </div>

              {/* Bottom: Contact Details */}
              <div className="flex justify-between items-end relative z-10">
                <div className="space-y-4">
                   <a href="tel:9415555555" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
                      <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center shadow-lg">
                        <Phone className="w-3.5 h-3.5 text-emerald-950 fill-current" />
                      </div>
                      <span className="text-base font-black uppercase tracking-[0.15em] leading-none text-emerald-950">941-555-5555</span>
                   </a>
                   <a href="https://www.danslawn.com" target="_blank" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
                      <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center shadow-lg">
                        <Globe className="w-3.5 h-3.5 text-emerald-950" />
                      </div>
                      <span className="text-base font-black uppercase tracking-[0.1em] leading-none lowercase text-emerald-950">www.danslawn.com</span>
                   </a>
                   <a href="https://maps.google.com/?q=Port+Charlotte,FL" target="_blank" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
                      <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center shadow-lg">
                        <MapPin className="w-3.5 h-3.5 text-emerald-950 fill-current" />
                      </div>
                      <span className="text-base font-black uppercase tracking-[0.1em] leading-none text-emerald-950">Port Charlotte, FL</span>
                   </a>
                </div>

                <div className="text-right">
                   <p className="text-emerald-950 font-serif italic text-4xl font-black leading-none pb-3 border-b-2 border-amber-400">Dan Murphy</p>
                </div>
              </div>

              {/* Decorative Bottom Line */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-emerald-950" />
              <div className="absolute bottom-2 left-0 w-full h-1 bg-amber-400" />
            </motion.div>
            
            {/* Floating Elements for depth */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-12 -right-12 w-24 h-24 bg-amber-400/20 blur-3xl rounded-full" 
            />
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-20 -left-20 w-40 h-40 bg-emerald-400/10 blur-3xl rounded-full" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
