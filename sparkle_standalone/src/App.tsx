import React from 'react';
import { motion } from 'motion/react';
import { 
  Brush, 
  Sparkles, 
  Droplets, 
  Star, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter 
} from 'lucide-react';

const project = {
  id: 'housecleaner',
  name: 'Sparkle Fresh',
  businessName: 'Sparkle Fresh Home Cleaning',
  description: 'Breathe easy in a truly clean home.',
  logo: 'SparkleFresh',
  heroImage: 'https://placehold.co/2000x800?text=Hero+Photo',
  accentColor: '#facc15', // lemon-400
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
      image: 'https://placehold.co/800x600?text=Service+Photo' 
    },
    { 
      title: 'Deep Clean', 
      description: 'Thorough cleaning of appliances, baseboards, and hidden corners.', 
      icon: Sparkles, 
      image: 'https://placehold.co/800x600?text=Service+Photo' 
    },
    { 
      title: 'Window Washing', 
      description: 'Interior and exterior glass clarity that brightens your day.', 
      icon: Droplets, 
      image: 'https://placehold.co/800x600?text=Service+Photo' 
    }
  ],
  testimonials: [
    { 
      name: 'Emma G.', 
      role: 'Busy Lawyer', 
      content: 'Coming home to a Sparkle Fresh house is the best feeling in the world.', 
      avatar: 'https://i.pravatar.cc/150?u=emma' 
    }
  ]
};

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans transition-colors duration-500">
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
        {/* Layout 7: Clean & Fresh (Sparkle Fresh Hero) */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#fffdf0] pt-48 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10 pb-32">
              <div className="text-left space-y-10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h1 className="text-8xl md:text-[10rem] font-serif font-black text-zinc-900 leading-[0.8] mb-4 tracking-tighter uppercase whitespace-pre">
                    Sparkle<br/><span className="text-yellow-500 italic">Fresh.</span>
                  </h1>
                  <p className="text-xl text-yellow-600 font-serif lowercase italic tracking-widest mt-8">
                    Professional Home Care | Charlotte County
                  </p>
                </motion.div>
                
                <p className="text-lg text-slate-700 font-sans leading-relaxed max-w-md">
                  Our standard of residential clarity. We treat every corner as a priority, ensuring your home remains a peaceful, sun-drenched sanctuary.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="#contact" className="px-10 py-5 bg-yellow-500 text-slate-950 font-bold hover:bg-yellow-400 transition-all shadow-xl">Get Quote</a>
                  <a href="#services" className="px-10 py-5 border-2 border-yellow-500 text-yellow-600 font-bold hover:bg-white transition-all">Standards</a>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative"
              >
                <img 
                  src="https://placehold.co/800x800?text=Cleaning" 
                  className="w-full aspect-square object-cover shadow-2xl border-8 border-white" 
                  referrerPolicy="no-referrer" 
                  alt="Sparkle Fresh Cleaning"
                />
                <div className="absolute -bottom-10 -right-10 bg-yellow-500 p-8 shadow-2xl border-l-4 border-zinc-950 max-w-[220px]">
                  <p className="text-[10px] uppercase font-black text-yellow-900 mb-2 tracking-[0.2em]">Our View</p>
                  <p className="text-sm font-serif italic text-zinc-950 leading-snug">"Bringing sunshine and professional care to every room."</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services - Grid Burst (Housecleaner - Dynamic) */}
        <section id="services" className="py-24 max-w-7xl mx-auto px-6 bg-white text-zinc-900">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 opacity-50">{project.serviceSectionTitle}</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">{project.serviceSectionSubtitle}</h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-24 py-12">
            {project.services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 text-center md:text-left space-y-4">
                  <span className="text-yellow-600 font-mono text-xs tracking-tighter uppercase font-bold">Process 0{idx + 1}</span>
                  <h4 className="text-5xl font-black text-zinc-900 leading-none uppercase">{service.title}</h4>
                  <p className="text-xl text-zinc-500 leading-relaxed font-sans">{service.description}</p>
                </div>
                <div className="w-full md:w-80 aspect-square overflow-hidden shadow-2xl border-4 border-white group shrink-0">
                  <img 
                    src={service.image} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={service.title}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Section - Sparkle Fresh: Boutique Team Focus */}
        <section id="about" className="py-32 overflow-hidden bg-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="order-2 lg:order-1 flex flex-col gap-8">
                <h2 className="text-7xl font-serif text-slate-800 leading-tight">
                  The Team of <span className="text-slate-400 italic">Three.</span>
                </h2>
                <p className="text-xl text-slate-500 leading-relaxed font-sans">{project.aboutText}</p>
                <div className="space-y-6 pt-8">
                  <div className="flex items-center gap-6 p-6 bg-white shadow-sm border border-slate-100 rounded-2xl">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-800 font-bold italic font-serif">1</div>
                    <div>
                      <p className="font-bold text-slate-800">The Visual Lead</p>
                      <p className="text-sm text-slate-500">Focuses on resetting surfaces and organizing living areas.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 p-6 bg-white shadow-sm border border-slate-100 rounded-2xl">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-800 font-bold italic font-serif">2</div>
                    <div>
                      <p className="font-bold text-slate-800">The Detail Specialist</p>
                      <p className="text-sm text-slate-500">Targets baseboards, corners, and hidden dust points.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 p-6 bg-white shadow-sm border border-slate-100 rounded-2xl">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-800 font-bold italic font-serif">3</div>
                    <div>
                      <p className="font-bold text-slate-800">The Sanitary Pro</p>
                      <p className="text-sm text-slate-500">Deep scrubbing and hospital-grade disinfection for wet areas.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                <img src="https://placehold.co/800x1000?text=Clean+Photo" className="w-full aspect-[4/5] object-cover rounded-3xl mt-20" referrerPolicy="no-referrer" alt="Clean Interior" />
                <img src="https://placehold.co/800x1000?text=Clean+Photo" className="w-full aspect-[4/5] object-cover rounded-3xl" referrerPolicy="no-referrer" alt="Clean Room" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials - Sparkle Stories */}
        {project.testimonials.length > 0 && (
          <section id="testimonials" className="py-32 max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
              <div className="max-w-xl">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 opacity-50" style={{ color: project.accentColor }}>
                  Sparkle Stories
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Families who love their fresh homes.
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

        {/* Contact CTA & Quote Form - THE PROCESS BEGINS */}
        <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
          <div className="bg-[#fefce8] border-2 border-yellow-100 p-8 md:p-20 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="space-y-12 text-left">
                <h2 className="text-6xl font-serif font-black text-slate-900 leading-[0.8] uppercase tracking-tighter">
                  THE <br/><span className="text-yellow-600 italic uppercase">PROCESS</span> BEGINS.
                </h2>
                <p className="text-xl text-slate-700 leading-relaxed font-sans">{project.aboutText}</p>
                
                <div className="flex flex-col gap-8 h-full justify-between">
                  <div className="space-y-4">
                    <h4 className="text-3xl font-serif italic text-slate-800">Ready for your sanctuary?</h4>
                    <p className="text-slate-500 leading-relaxed font-sans mt-4 italic">Sparkle Fresh Standards | Professional Care</p>
                  </div>
                  <div className="flex gap-4">
                    <a href="tel:5555555555" className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-slate-950 hover:bg-yellow-400 transition-colors"><Phone className="w-5 h-5" /></a>
                    <a href="#" className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-slate-950 hover:bg-yellow-400 transition-colors"><Instagram className="w-5 h-5" /></a>
                    <a href="#" className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-slate-950 hover:bg-yellow-400 transition-colors"><Facebook className="w-5 h-5" /></a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 md:p-12 border border-yellow-100">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 mb-2 tracking-[0.2em] uppercase">Your Name</label>
                    <input type="text" className="w-full bg-white border border-slate-100 p-4 focus:ring-2 ring-yellow-500 outline-hidden transition-all" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 mb-2 tracking-[0.2em] uppercase">Email Address</label>
                    <input type="email" className="w-full bg-white border border-slate-100 p-4 focus:ring-2 ring-yellow-500 outline-hidden transition-all" />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-black text-slate-400 mb-4 tracking-[0.2em] uppercase">Service Frequency</label>
                    <div className="flex flex-wrap gap-3">
                      {['Weekly', 'Bi-Weekly', 'Custom Schedule'].map(freq => (
                        <label key={freq} className="flex-1 min-w-[140px] flex items-center gap-3 bg-white px-5 py-4 border border-slate-100 cursor-pointer hover:bg-yellow-50 transition-all has-[:checked]:border-yellow-500 has-[:checked]:bg-yellow-50">
                          <input type="radio" name="freq" className="w-4 h-4 accent-yellow-500" />
                          <span className="font-bold text-slate-800 text-sm uppercase">{freq}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-black text-slate-400 mb-4 tracking-[0.2em] uppercase">Select Services</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['Total House Clean', 'Window Cleaning', 'Deep Clean', 'Move-In/Out'].map(srv => (
                        <label key={srv} className="flex items-center gap-3 bg-white px-5 py-4 border border-slate-100 cursor-pointer hover:bg-yellow-50 transition-all has-[:checked]:border-yellow-500">
                          <input type="checkbox" className="w-4 h-4 accent-yellow-500" />
                          <span className="font-bold text-slate-800 text-sm uppercase">{srv}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-black text-slate-400 mb-2 tracking-[0.2em] uppercase">Additional Details</label>
                    <textarea className="w-full bg-white border border-slate-100 p-4 h-32 focus:ring-2 ring-yellow-500 outline-hidden transition-all" placeholder="Any specific areas we should focus on?"></textarea>
                  </div>
                  
                  <button type="button" className="md:col-span-2 py-6 bg-yellow-500 text-slate-950 font-bold hover:bg-yellow-400 transition-all shadow-xl uppercase tracking-widest text-sm">Submit Quote Request</button>
                </form>
              </div>
            </div>
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
