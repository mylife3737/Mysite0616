import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../../types';
import { cn } from '../../utils';
import { Instagram, Facebook, Twitter, MapPin, Phone, Star, Heart, Clock, Utensils } from 'lucide-react';

interface ProjectProps {
  project: Project;
}

export const Bakery: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="min-h-screen bg-stone-50 text-emerald-950 font-serif selection:bg-emerald-100 selection:text-emerald-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2000" 
            className="w-full h-full object-cover opacity-20" 
            alt="Bakery background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-b from-stone-50/80 via-transparent to-stone-50/80" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8 text-emerald-800/60">
              <div className="h-px w-12 bg-emerald-800/30" />
              <span className="text-xs uppercase tracking-[0.4em] font-bold">Est. 2012</span>
            </div>
            <h1 className="text-8xl md:text-[10rem] font-bakery leading-[0.8] mb-12 lowercase text-emerald-950">
              Slowly<br/>
              <span className="italic ml-8">Kneaded.</span>
            </h1>
            <p className="text-2xl text-emerald-900/60 font-serif italic mb-12 max-w-md leading-relaxed">
              Hand-rolled, stone-baked, and allowed to cool at its own pace. The way bread was meant to be.
            </p>
            <div className="flex gap-6">
              <button className="px-12 py-6 bg-emerald-900 text-white rounded-none font-bakery text-2xl hover:bg-emerald-800 transition-colors shadow-2xl lowercase">
                Pre-order
              </button>
              <button className="px-12 py-6 border-2 border-emerald-900 text-emerald-900 rounded-none font-bakery text-2xl hover:bg-emerald-50 transition-colors lowercase">
                The Menu
              </button>
            </div>
          </motion.div>
          <div className="relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-full overflow-hidden border-[20px] border-white shadow-2xl"
            >
              <img src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?q=80&w=1200" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-emerald-900/10" />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 bg-white p-10 shadow-2xl max-w-[250px] border-t-8 border-emerald-900">
              <p className="text-4xl font-bakery text-emerald-950 mb-2 lowercase italic">"Best in Town"</p>
              <p className="text-xs uppercase tracking-widest text-emerald-900/40 font-bold">— Local Food Review</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-40 bg-emerald-950 text-emerald-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-12">
            <h2 className="text-7xl font-bakery lowercase leading-[0.8]">The <br/><span className="italic ml-12">Process.</span></h2>
            <div className="space-y-8 text-emerald-100/60 font-serif italic text-xl leading-relaxed">
              <p>{project.aboutText}</p>
              <p>We work with regional farmers to source heirlooom grains, milling them fresh each morning to preserve every bit of flavor and nutrition.</p>
            </div>
            <div className="grid grid-cols-2 gap-12 pt-8 border-t border-white/10">
              <div>
                <p className="text-4xl font-bakery mb-2">96 hrs</p>
                <p className="text-xs uppercase tracking-widest opacity-40 font-bold">Fermentation</p>
              </div>
              <div>
                <p className="text-4xl font-bakery mb-2">100%</p>
                <p className="text-xs uppercase tracking-widest opacity-40 font-bold">Natural Leaven</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <img src="https://images.unsplash.com/photo-1517686469429-8bc8623f908f?q=80&w=1000" className="w-full aspect-[3/4] object-cover rounded-2xl" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000" className="w-full aspect-square object-cover rounded-2xl" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-6 pt-12">
              <img src="https://images.unsplash.com/photo-1589367920969-ab8e050bac3c?q=80&w=1000" className="w-full aspect-square object-cover rounded-2xl" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1534620808146-d33bb39128b2?q=80&w=1000" className="w-full aspect-[3/4] object-cover rounded-2xl" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-40 max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <h2 className="text-xl font-serif italic text-emerald-800/40 mb-4">{project.serviceSectionTitle}</h2>
          <h3 className="text-7xl font-bakery lowercase">{project.serviceSectionSubtitle}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {project.services.map((service, idx) => (
            <div key={idx} className="group text-center">
              <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-12 mx-auto group-hover:scale-110 transition-transform">
                <service.icon className="w-12 h-12 text-emerald-900" />
              </div>
              <h4 className="text-4xl font-bakery lowercase mb-6 italic">{service.title}</h4>
              <p className="text-emerald-900/50 font-serif italic leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-40 bg-stone-100 border-t border-emerald-900/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-5xl font-bakery lowercase mb-8">{project.name}</h4>
              <p className="text-emerald-950/40 font-serif italic text-xl max-w-sm mb-12 leading-relaxed">
                Hand-baked with love in the heart of the community. Join us for a warm slice.
              </p>
              <div className="flex gap-6">
                <Instagram className="w-6 h-6 opacity-30 hover:opacity-100 cursor-pointer transition-opacity" />
                <Facebook className="w-6 h-6 opacity-30 hover:opacity-100 cursor-pointer transition-opacity" />
                <Twitter className="w-6 h-6 opacity-30 hover:opacity-100 cursor-pointer transition-opacity" />
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] font-bold opacity-30 mb-8 whitespace-nowrap">The Bakery</p>
              <ul className="space-y-6 font-serif italic text-lg opacity-60">
                <li className="flex items-center gap-3"><MapPin className="w-4 h-4" /> Port Charlotte, FL</li>
                <li className="flex items-center gap-3"><Phone className="w-4 h-4" /> (555) BAKE-NOW</li>
                <li className="flex items-center gap-3"><Clock className="w-4 h-4" /> 6am — 2pm Daily</li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] font-bold opacity-30 mb-8 whitespace-nowrap">Daily Menu</p>
              <ul className="space-y-6 font-serif italic text-lg opacity-60">
                <li>Sourdough Rounds</li>
                <li>Heritage Baguettes</li>
                <li>Wild Honey Loaves</li>
                <li>Stone-Milled Pastries</li>
              </ul>
            </div>
          </div>
          <div className="mt-32 pt-12 border-t border-emerald-900/5 flex justify-between items-center opacity-30 text-xs font-bold uppercase tracking-widest">
            <p>&copy; 2026 {project.businessName}</p>
            <div className="flex gap-12">
              <span>Privacy</span>
              <span>Terms</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
