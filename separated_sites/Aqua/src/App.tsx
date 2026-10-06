import React from 'react';
import { motion } from 'motion/react';
import { 
  Droplets, 
  Waves, 
  ShieldCheck, 
  Star, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter 
} from 'lucide-react';

const project = {
  id: 'pool-service',
  name: 'Aqua Glow',
  businessName: 'Aqua Glow Pool Service',
  description: 'Perfect water, zero effort.',
  logo: 'AquaGlow',
  heroImage: 'https://placehold.co/1920x1080?text=Pool+Hero',
  accentColor: '#0ea5e9', // sky-500
  theme: 'light',
  fontFamily: 'font-pool',
  serviceSectionTitle: 'Pool Standards',
  serviceSectionSubtitle: 'Crystal clear results every single visit.',
  aboutText: 'Aqua Glow makes pool ownership a breeze. We handle the chemicals, the scrubbing, and the filtering so you can jump in anytime and find a crystal-clear oasis waiting.',
  services: [
    { 
      title: 'Chemical Balance', 
      description: 'Weekly testing and balancing for safe, stinging-free water.', 
      icon: Droplets, 
      image: 'https://placehold.co/800x600?text=Chemicals' 
    },
    { 
      title: 'Debris Removal', 
      description: 'Skimming and vacuuming to keep your pool floor spotless.', 
      icon: Waves, 
      image: 'https://placehold.co/800x600?text=Debris' 
    },
    { 
      title: 'Filter Care', 
      description: 'Full system inspections and regular filter cleanings.', 
      icon: ShieldCheck, 
      image: 'https://placehold.co/800x600?text=Filter' 
    }
  ],
  testimonials: [
    { 
      name: 'Sarah T.', 
      role: 'Pool Owner', 
      content: 'Our pool has never looked this clear. They are incredibly reliable.', 
      avatar: 'https://i.pravatar.cc/150?u=sarah' 
    }
  ]
};

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-pool transition-colors duration-500">
      {/* Scroll Progress Accent Line */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
        style={{ backgroundColor: project.accentColor }}
      />

      {/* Shared Navigation Header from Live Preview */}
      <nav className="sticky top-0 z-40 border-b backdrop-blur-md bg-white/80 border-zinc-200 text-zinc-900 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-sm font-bold tracking-tight uppercase flex items-center gap-2">
            <span 
              className="text-white w-6 h-6 rounded flex items-center justify-center text-xs font-mono italic"
              style={{ backgroundColor: project.accentColor }}
            >
              V
            </span>
            VibeCode Studio
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors">About</a>
            <a href="#services" className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Services</a>
            <a href="#testimonials" className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Reviews</a>
            <a href="#contact" className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Layout 6: Serene Split (Pool) Hero */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-sky-950">
          <div className="w-full h-full bg-sky-950 text-white flex flex-col pt-20 overflow-hidden relative">
            <motion.div 
              animate={{ y: [-1000, 1000] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />
            <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col items-center justify-center relative z-10 text-center pb-32">
              <motion.div initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} className="mb-12">
                <h1 className="text-[15vw] font-pool font-black text-sky-400 leading-none mb-4 italic tracking-tighter mix-blend-screen">AQUA GLOW.</h1>
                <p className="text-2xl font-light uppercase tracking-[0.5em] text-white opacity-40">Submerged Excellence / Systematic Care</p>
              </motion.div>
              
              <div className="w-full max-w-5xl h-[60vh] relative group border-[20px] border-white/5 shadow-2xl overflow-hidden">
                <img 
                  src="https://placehold.co/1920x1080?text=Pool" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" 
                  referrerPolicy="no-referrer" 
                  alt="Swimming pool"
                />
                <div className="absolute inset-0 bg-sky-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
              </div>
              
              <div className="relative mt-8 mb-20">
                <a 
                  href="#contact" 
                  className="px-16 py-8 bg-sky-500 text-white font-black text-2xl uppercase tracking-widest hover:bg-white hover:text-sky-950 transition-all shadow-[0_20px_50px_rgba(14,165,233,0.3)] hover:shadow-none hover:translate-y-1 inline-block"
                >
                  Dive In
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services - Submerged Flow (Pool) */}
        <section id="services" className="py-24 max-w-none px-6 bg-sky-950 text-white">
          <div className="mb-16 text-center max-w-7xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 opacity-50">{project.serviceSectionTitle}</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">{project.serviceSectionSubtitle}</h3>
          </div>

          <div className="max-w-7xl mx-auto space-y-4 pt-12">
            {project.services.map((service, idx) => (
              <motion.div 
                key={idx} 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-12 bg-sky-500/10 backdrop-blur-xl p-12 border-l-[16px] border-sky-400 group hover:bg-sky-600/20 transition-all cursor-default relative overflow-hidden"
              >
                <div className="w-32 h-32 bg-sky-950 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform shadow-2xl shrink-0">
                  <service.icon className="w-16 h-16 text-sky-400 group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-4xl font-pool font-black text-white italic uppercase tracking-tighter mb-4">{service.title}</h4>
                  <p className="text-sky-200 group-hover:text-white leading-relaxed text-lg">{service.description}</p>
                </div>
                <div className="text-8xl font-black text-white/5 absolute right-12 group-hover:text-white/20 transition-all select-none">0{idx + 1}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Section - Submerged / Deep Blue */}
        <section id="about" className="py-32 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-sky-950 rounded-none p-20 relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,#38bdf8_0%,transparent_50%)] opacity-20" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                <div className="order-2 lg:order-1">
                  <img 
                    src="https://placehold.co/1200x1200?text=Pool+Photo" 
                    className="w-full aspect-square object-cover rounded-none shadow-2xl skew-x-1" 
                    referrerPolicy="no-referrer" 
                    alt="Pool"
                  />
                </div>
                <div className="order-1 lg:order-2 space-y-8">
                  <h2 className="text-7xl font-pool font-black text-white italic leading-none uppercase">Infinity <br/>Visions.</h2>
                  <p className="text-2xl text-sky-100 font-light leading-relaxed tracking-tight">{project.aboutText}</p>
                  <div className="flex gap-4">
                    <div className="px-6 py-2 bg-sky-400/20 rounded-none border border-sky-400/30 text-sky-400 text-xs font-bold uppercase tracking-widest leading-none">Saltwater Specialist</div>
                    <div className="px-6 py-2 bg-sky-400/20 rounded-none border border-sky-400/30 text-sky-400 text-xs font-bold uppercase tracking-widest leading-none">Weekly Care</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials - Water Reviews */}
        {project.testimonials.length > 0 && (
          <section id="testimonials" className="py-32 max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
              <div className="max-w-xl">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 opacity-50" style={{ color: project.accentColor }}>
                  Water Reviews
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Clear feedback from our happy owners.
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {project.testimonials.map((t) => (
                <div 
                  key={t.name}
                  className="p-10 rounded-[2.5rem] relative bg-zinc-50 border border-zinc-100 shadow-sm"
                >
                  <p className="text-xl font-serif italic opacity-80 mb-8 leading-relaxed">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full bg-zinc-200" referrerPolicy="no-referrer" />
                    <div>
                      <h5 className="font-bold">{t.name}</h5>
                      {t.role && <p className="text-xs opacity-50 uppercase tracking-widest">{t.role}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact CTA - STOP SCRUBBING. START FLOATING. */}
        <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
          <div className="bg-sky-500 p-20 flex flex-col md:flex-row items-center justify-between rounded-[4rem] shadow-2xl relative overflow-hidden group">
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }} 
              transition={{ duration: 5, repeat: Infinity }} 
              className="absolute -bottom-20 -left-20 w-96 h-96 bg-sky-400/50 blur-[100px] rounded-full" 
            />
            <div className="relative z-10">
              <h2 className="text-6xl font-pool font-black text-white uppercase italic tracking-tighter mb-4">STOP SCRUBBING.<br/>START FLOATING.</h2>
              <p className="text-sky-100 text-xl font-light uppercase tracking-widest opacity-60">Pure Water. Perfect Balance.</p>
            </div>
            <a 
              href="tel:5555555555" 
              className="relative z-10 px-16 py-8 bg-sky-950 text-white font-pool font-black text-2xl uppercase italic tracking-widest hover:bg-white hover:text-sky-950 transition-all shadow-2xl group-hover:scale-110 inline-block text-center"
            >
              Book Service
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-24 border-t border-zinc-100 font-sans bg-white text-zinc-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-center gap-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl text-white shadow-lg"
                style={{ backgroundColor: project.accentColor }}
              >
                {project.name[0]}
              </div>
              <div>
                <h4 className="font-black text-xl tracking-tight leading-none uppercase">{project.name}</h4>
                <p className="text-xs opacity-50 mt-1 uppercase tracking-widest">{project.businessName}</p>
              </div>
            </div>
            <p className="max-w-sm text-sm opacity-60 leading-relaxed font-sans">{project.description}</p>
            <div className="space-y-3 pt-2">
               <p className="text-sm opacity-60 flex items-center gap-2">
                 <MapPin className="w-4 h-4" />
                 Serving Charlotte County
               </p>
               <p className="text-sm opacity-60 flex items-center gap-2">
                 <Phone className="w-4 h-4" />
                 (555) 555-5555
               </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-full transition-all hover:scale-110 bg-zinc-100 text-zinc-600"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-3 rounded-full transition-all hover:scale-110 bg-zinc-100 text-zinc-600"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-3 rounded-full transition-all hover:scale-110 bg-zinc-100 text-zinc-600"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h5 className="text-xs uppercase tracking-widest font-bold mb-6 opacity-40">Navigate</h5>
            <ul className="space-y-4 opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Services</a></li>
              <li><a href="#about" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#testimonials" className="hover:opacity-100 transition-opacity">Reviews</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-xs uppercase tracking-widest font-bold mb-6 opacity-40">Scan to Book</h5>
            <div className="w-24 h-24 bg-white p-2 rounded-lg shadow-lg border border-zinc-200">
               <img src="https://placehold.co/100x100?text=QR+Code" alt="QR Code" className="w-full h-full" />
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-16 mt-16 border-t opacity-40 text-xs flex flex-col md:flex-row justify-between gap-6 border-zinc-100">
          <p>&copy; 2026 {project.businessName}. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
