import React from 'react';
import { motion } from 'motion/react';
import { Cake, Star, Heart, MapPin, Phone, Clock, Utensils, Globe } from 'lucide-react';
import { Project } from './types';

const project: Project = {
  id: 'bakery',
  name: 'Bloom & Batch',
  businessName: 'Bloom & Batch Artisanal Bakery',
  description: 'Hand-rolled, stone-baked, slow-cooled.',
  logo: 'Bloom&Batch',
  heroImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2000',
  accentColor: '#10b981',
  theme: 'light',
  fontFamily: 'font-bakery',
  serviceSectionTitle: 'The Daily Bake',
  serviceSectionSubtitle: 'Hand-crafted every morning.',
  aboutText: "We are curators of the sourdough tradition. Every loaf at Bloom & Batch is the result of a slow, patient process. We mill our own flour and let the bread decide when it is ready.",
  services: [
    { title: 'Stone-Milled Flour', description: 'Grains crushed between stone for maximum nutrients and depth of flavor.', icon: Cake },
    { title: 'Natural Leaven', description: 'Our living heirloom starter defines the character of every batch.', icon: Star },
    { title: 'Hand-Baked Quality', description: 'Small batches, big flavor. baked daily at sunrise.', icon: Heart }
  ],
  testimonials: [
    { name: 'Maya R.', role: 'Food Critic', content: 'The sourdough here sets a new standard for the entire region.', avatar: 'https://i.pravatar.cc/150?u=maya' }
  ]
};

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-emerald-950 font-serif selection:bg-emerald-100 selection:text-emerald-950">
      {/* 1. Hero Section from Bakery.tsx */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2000" 
            className="w-full h-full object-cover opacity-20" 
            alt="Bakery background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-50/80 via-transparent to-stone-50/80" />
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
            <h1 className="text-7xl md:text-[9rem] leading-[0.85] mb-12 lowercase text-emerald-950 font-bold">
              Slowly<br/>
              <span className="italic ml-8">Kneaded.</span>
            </h1>
            <p className="text-2xl text-emerald-900/60 font-serif italic mb-12 max-w-md leading-relaxed">
              Hand-rolled, stone-baked, and allowed to cool at its own pace. The way bread was meant to be.
            </p>
            <div className="flex gap-6">
              <a href="#contact" className="px-12 py-6 bg-emerald-900 text-white font-bold text-2xl hover:bg-emerald-800 transition-colors shadow-2xl lowercase">
                Pre-order
              </a>
              <a href="#services" className="px-12 py-6 border-2 border-emerald-900 text-emerald-900 font-bold text-2xl hover:bg-emerald-50 transition-colors lowercase">
                The Menu
              </a>
            </div>
          </motion.div>
          <div className="relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-full overflow-hidden border-[20px] border-white shadow-2xl"
            >
              <img src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?q=80&w=1200" className="w-full h-full object-cover" referrerPolicy="no-referrer" alt="Loaf" />
              <div className="absolute inset-0 bg-emerald-900/10" />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 bg-white p-10 shadow-2xl max-w-[250px] border-t-8 border-emerald-900">
              <p className="text-4xl text-emerald-950 mb-2 lowercase italic font-bold">"Best in Town"</p>
              <p className="text-xs uppercase tracking-widest text-emerald-900/40 font-bold">— Local Food Review</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About / Process Section from Bakery.tsx */}
      <section className="py-32 bg-emerald-950 text-emerald-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h2 className="text-6xl md:text-7xl lowercase leading-[0.85] font-bold">The <br/><span className="italic ml-12">Process.</span></h2>
            <div className="space-y-6 text-emerald-100/60 font-serif italic text-xl leading-relaxed">
              <p>{project.aboutText}</p>
              <p>We work with regional farmers to source heirloom grains, milling them fresh each morning to preserve every bit of flavor and nutrition.</p>
            </div>
            <div className="grid grid-cols-2 gap-12 pt-8 border-t border-white/10">
              <div>
                <p className="text-4xl font-bold mb-2">96 hrs</p>
                <p className="text-xs uppercase tracking-widest opacity-40 font-bold">Fermentation</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="text-xs uppercase tracking-widest opacity-40 font-bold">Natural Leaven</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <img src="https://images.unsplash.com/photo-1517686469429-8bc8623f908f?q=80&w=1000" className="w-full aspect-[3/4] object-cover rounded-2xl" referrerPolicy="no-referrer" alt="Flour dough" />
              <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000" className="w-full aspect-square object-cover rounded-2xl" referrerPolicy="no-referrer" alt="Sourdough" />
            </div>
            <div className="space-y-6 pt-12">
              <img src="https://images.unsplash.com/photo-1589367920969-ab8e050bac3c?q=80&w=1000" className="w-full aspect-square object-cover rounded-2xl" referrerPolicy="no-referrer" alt="Baking bread" />
              <img src="https://images.unsplash.com/photo-1534620808146-d33bb39128b2?q=80&w=1000" className="w-full aspect-[3/4] object-cover rounded-2xl" referrerPolicy="no-referrer" alt="Loaves" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section from Bakery.tsx */}
      <section id="services" className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-xl font-serif italic text-emerald-800/40 mb-4">{project.serviceSectionTitle}</h2>
          <h3 className="text-6xl md:text-7xl lowercase font-bold">{project.serviceSectionSubtitle}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {project.services.map((service, idx) => (
            <div key={idx} className="group text-center">
              <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
                <service.icon className="w-12 h-12 text-emerald-900" />
              </div>
              <h4 className="text-3xl font-bold lowercase mb-4 italic">{service.title}</h4>
              <p className="text-emerald-900/50 font-serif italic leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Original Testimonials & Handcrafted Daily Section from ProjectDetail.tsx */}
      <section className="py-24 bg-stone-100 border-t border-emerald-900/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div className="space-y-8">
             <span className="text-xs uppercase tracking-[0.3em] font-bold text-emerald-800">The Daily Word</span>
             <h3 className="text-4xl font-bold">Straight from the local community.</h3>
             {project.testimonials.map((t, i) => (
               <div key={i} className="p-8 bg-white rounded-3xl shadow-sm border border-emerald-900/10">
                 <p className="text-xl font-serif italic text-emerald-950 mb-4">"{t.content}"</p>
                 <p className="font-bold text-sm text-emerald-900">— {t.name}, {t.role}</p>
               </div>
             ))}
           </div>
           <div className="bg-emerald-900 p-12 text-white flex flex-col justify-between aspect-square rounded-3xl">
              <h3 className="text-5xl md:text-6xl font-bold leading-none">Handcrafted <br/>Daily.</h3>
              <div className="space-y-4">
                 <p className="text-emerald-400 font-mono text-xs uppercase tracking-widest">Charlotte County Bakery</p>
                 <p className="font-serif italic text-emerald-100/60 text-lg">"The best bread is the one eaten while it's still warm."</p>
              </div>
           </div>
        </div>
      </section>

      {/* 5. Original CTA from ProjectDetail.tsx */}
      <section id="contact" className="py-24 max-w-5xl mx-auto px-6">
         <div className="bg-emerald-950 p-16 md:p-24 rounded-[4rem] text-center relative overflow-hidden group">
            <div className="relative z-10">
               <h2 className="text-6xl md:text-7xl font-serif italic text-emerald-100 mb-8 lowercase">the oven's calling.</h2>
               <p className="text-emerald-200/50 text-xl font-serif max-w-lg mx-auto mb-12 uppercase tracking-widest text-xs font-bold italic">Limited batches daily. Pre-order recommended for special occasions.</p>
               <div className="flex gap-4 justify-center">
                  <a href="tel:5555555555" className="px-12 py-4 bg-emerald-100 text-emerald-950 rounded-full font-bold hover:bg-white transition-all shadow-xl text-2xl lowercase">Place order</a>
                  <a href="#services" className="px-12 py-4 border-2 border-emerald-100/20 text-emerald-100 rounded-full font-bold hover:bg-emerald-100/10 transition-all text-2xl lowercase">View Menu</a>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Original Footer from Bakery.tsx */}
      <footer className="py-20 bg-stone-100 border-t border-emerald-900/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-4xl font-bold lowercase mb-6">{project.name}</h4>
              <p className="text-emerald-950/40 font-serif italic text-xl max-w-sm mb-8 leading-relaxed">
                Hand-baked with love in the heart of the community. Join us for a warm slice.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] font-bold opacity-40 mb-6">The Bakery</p>
              <ul className="space-y-4 font-serif italic text-base opacity-70">
                <li className="flex items-center gap-3"><MapPin className="w-4 h-4" /> Port Charlotte, FL</li>
                <li className="flex items-center gap-3"><Phone className="w-4 h-4" /> (555) BAKE-NOW</li>
                <li className="flex items-center gap-3"><Clock className="w-4 h-4" /> 6am — 2pm Daily</li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] font-bold opacity-40 mb-6">Daily Menu</p>
              <ul className="space-y-4 font-serif italic text-base opacity-70">
                <li>Sourdough Rounds</li>
                <li>Heritage Baguettes</li>
                <li>Wild Honey Loaves</li>
                <li>Stone-Milled Pastries</li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-emerald-900/5 flex justify-between items-center opacity-40 text-xs font-bold uppercase tracking-widest">
            <p>&copy; 2026 {project.businessName}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
