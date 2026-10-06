import React from 'react';
import { motion } from 'motion/react';
import { 
  Tractor, 
  Sprout, 
  Scissors, 
  Leaf, 
  Star, 
  MapPin, 
  Phone, 
  Globe, 
  Share2, 
  MessageCircle 
} from 'lucide-react';

const project = {
  id: 'dans-lawn-care',
  name: "Dan's Lawn Care",
  businessName: "Dan's Lawn Care",
  description: 'Just a guy, a mower, and a perfect yard.',
  logo: 'DansLawn',
  heroImage: 'https://placehold.co/1920x1080?text=Hero+Image',
  accentColor: '#fbbf24',
  theme: 'light',
  fontFamily: 'font-lawn',
  serviceSectionTitle: 'Fair & Fast',
  serviceSectionSubtitle: 'Simple service for busy neighbors.',
  aboutText: "Hey, I'm Dan. I'm just a guy with a mower who loves making yards look great. I've been mowing neighborhood lawns in Charlotte County for years—I just show up, do a good job, and let you get back to your weekend.",
  services: [
    { 
      title: 'Weekly Mowing', 
      description: "I'll show up every week and keep it looking short and tidy. No fuss.", 
      icon: Tractor, 
      image: 'https://placehold.co/1200x800?text=Mowing' 
    },
    { 
      title: 'String Trimming', 
      description: 'Clean, crisp edges around the fence and flower beds.', 
      icon: Scissors, 
      image: 'https://placehold.co/1200x800?text=Trimming' 
    },
    { 
      title: 'Landscaping', 
      description: 'Mulching and bed maintenance to keep things looking clean.', 
      icon: Leaf, 
      image: 'https://placehold.co/1200x800?text=Landscaping' 
    }
  ],
  testimonials: []
};

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      {/* 1. Shared Navigation Header from Live Preview */}
      <nav className="sticky top-0 z-40 border-b backdrop-blur-md bg-white/80 border-zinc-200 text-zinc-900">
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
            <a href="#contact" className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        {/* 2. Hero Design from ProjectDetail.tsx */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-emerald-950">
          <div className="relative w-full h-[80vh] flex items-center justify-center text-center overflow-hidden bg-emerald-950">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://placehold.co/1920x1080?text=Fresh+Cut+Grass"
                className="w-full h-full object-cover opacity-60"
                alt="Freshly cut grass"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-transparent to-emerald-950" />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative z-10 px-6"
            >
              <div className="flex flex-col items-center gap-10 mb-12 group">
                <motion.div 
                  animate={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-32 h-32 rounded-full border-4 border-white bg-amber-400 flex items-center justify-center p-4 shadow-[0_0_50px_rgba(251,191,36,0.3)] transform -rotate-3"
                >
                  <Tractor className="w-full h-full text-emerald-950" />
                </motion.div>
                <div className="bg-amber-400 px-16 py-10 shadow-[20px_20px_0_0_rgba(6,78,59,1)] transform -rotate-1 relative overflow-hidden cursor-default transition-all hover:rotate-0">
                  <h1 className="text-6xl md:text-8xl font-black text-emerald-950 uppercase tracking-tighter leading-[0.8] mb-1">DAN'S<br/>LAWN CARE</h1>
                </div>
              </div>
              <p className="text-2xl md:text-3xl text-white drop-shadow-2xl mb-12 w-full mx-auto font-sans font-medium leading-tight tracking-wide bg-emerald-950/20 backdrop-blur-sm px-4 py-2 rounded-lg whitespace-normal md:whitespace-nowrap">
                Just a guy with a mower and a really sharp blade.
              </p>
              <p className="text-xl text-amber-400 font-bold mb-12 italic tracking-widest uppercase">Fast, fair, and I won't trample your petunias.</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <a href="#contact" className="inline-block px-14 py-8 bg-white text-emerald-950 font-black uppercase tracking-tighter text-2xl hover:bg-amber-400 transition-all hover:scale-110 shadow-2xl active:scale-95 border-b-8 border-emerald-900/20">Call Dan Now</a>
                <a href="#about" className="inline-block px-14 py-8 border-4 border-white text-white font-black uppercase tracking-tighter text-2xl hover:bg-white hover:text-emerald-950 transition-all shadow-2xl">See My Work</a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. Global Tractor Animation Banner from ProjectDetail.tsx */}
        <div className="relative h-14 w-full bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 overflow-hidden flex items-center border-y border-amber-400/40 z-20 shadow-inner">
          <motion.div 
            animate={{ 
              x: ["-50%", 0]
            }}
            transition={{ 
              x: { duration: 15, repeat: Infinity, ease: "linear" }
            }}
            className="flex items-center w-max"
          >
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center gap-16 px-8">
                <div className="flex items-center gap-4">
                  <Tractor className="w-7 h-7 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]" />
                  <span className="text-[14px] font-black uppercase tracking-[0.4em] text-white drop-shadow-md whitespace-nowrap">
                    Your grass is growing while you're reading this
                  </span>
                </div>
                <Sprout className="w-6 h-6 text-emerald-400 animate-pulse" />
                <div className="flex items-center gap-4">
                  <span className="text-[14px] font-black uppercase tracking-[0.4em] text-amber-400 drop-shadow-md whitespace-nowrap italic">
                    Call Dan Now!
                  </span>
                </div>
                <Tractor className="w-7 h-7 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]" />
                <span className="text-[14px] font-black uppercase tracking-[0.4em] text-white drop-shadow-md whitespace-nowrap">
                  Your grass is growing while you're reading this
                </span>
                <Sprout className="w-6 h-6 text-emerald-400 animate-pulse" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* 4. About Dan Section from ProjectDetail.tsx */}
        <section id="about" className="pt-10 pb-0 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative w-full"
              >
                <img 
                  src="https://placehold.co/1200x1500?text=Dan+and+Dog" 
                  className="w-full aspect-square lg:aspect-[4/5] object-cover rounded-none border-l-[24px] border-emerald-950 shadow-2xl hover:brightness-110 transition-all duration-500" 
                  alt="Dan and his dog" 
                />
                <div className="absolute -bottom-10 -right-8 bg-amber-400 p-12 text-emerald-950 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform hover:rotate-0 transition-transform -rotate-2 min-w-[320px]">
                  <p className="text-7xl font-black italic mb-1">TRUST DAN.</p>
                  <p className="text-sm font-black uppercase tracking-widest opacity-80">Charlotte County Native</p>
                </div>
              </motion.div>

              <div className="space-y-12 pt-20 lg:pt-0">
                <h2 className="text-7xl md:text-8xl font-black text-emerald-950 uppercase tracking-tighter mb-8">
                  I'M DAN.<br/>
                  <span className="text-amber-400 italic">I MOW GRASS.</span>
                </h2>
                <div className="text-2xl text-emerald-950 font-serif italic leading-relaxed py-12 px-12 bg-emerald-50/80 border-l-[8px] border-amber-400 shadow-xl relative">
                  <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Tractor className="w-32 h-32" />
                  </div>
                  <p className="relative z-10">
                    Hey, I'm Dan Murphy. I'm just a guy with a mower who loves making yards look great. I've been mowing neighborhood lawns in Charlotte County for years—I just show up, do a good job, and let you get back to your weekend.
                  </p>
                </div>
                
                <div className="pt-10 flex flex-col md:flex-row gap-10 items-start">
                  <div className="space-y-6 flex-1">
                    <div>
                      <p className="text-amber-400 font-bold uppercase tracking-widest text-[10px] font-mono mb-2">Core Philosophy</p>
                      <div className="w-12 h-1 bg-amber-400 mb-4" />
                      <p className="text-3xl text-emerald-950 italic font-serif leading-tight">"If I wouldn't let my kids play on it, it's not done yet."</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-[1px] bg-emerald-900/30" />
                      <p className="text-emerald-900/60 text-xs uppercase tracking-[0.3em] font-black">Dan Murphy, Owner</p>
                    </div>
                  </div>
                  
                  <div className="flex-[3] flex gap-6 items-center">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 aspect-square bg-emerald-50 overflow-hidden border-2 border-amber-400 shadow-2xl group relative"
                    >
                      <img 
                        src="https://placehold.co/800x800?text=Kids+on+Grass" 
                        className="w-full h-full object-cover transition-all duration-500" 
                        alt="Kids on grass"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>

                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 aspect-square bg-emerald-50 overflow-hidden border border-emerald-100 shadow-lg group relative"
                    >
                      <img 
                        src="https://placehold.co/800x800?text=Drone+Lawn" 
                        className="w-full h-full object-cover transition-all duration-500 opacity-80 hover:opacity-100" 
                        alt="Drone view of lawn"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>

                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 aspect-square bg-emerald-50 overflow-hidden border border-emerald-100 shadow-lg group relative"
                    >
                      <img 
                        src="https://placehold.co/800x800?text=Mulch" 
                        className="w-full h-full object-cover transition-all duration-500 opacity-80 hover:opacity-100" 
                        alt="Professional stripes"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Services Section from ProjectDetail.tsx */}
        <section id="services" className="py-24 max-w-7xl mx-auto px-6">
          <div className="mb-16 text-left border-l-8 border-amber-400 pl-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 opacity-50">{project.serviceSectionTitle}</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">{project.serviceSectionSubtitle}</h3>
          </div>

          <div className="relative pt-10">
            <div className="absolute left-1/2 top-0 bottom-0 w-8 bg-zinc-100/50 -translate-x-1/2 hidden md:block" />
            <div className="space-y-24 relative">
              {project.services.map((service, idx) => (
                <div key={idx} className={`flex flex-col md:flex-row items-center gap-16 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex-1 text-center px-12"
                  >
                    <div className="w-24 h-24 bg-amber-400 rounded-none flex items-center justify-center mb-10 mx-auto shadow-2xl border-4 border-emerald-950 transform rotate-3 group-hover:rotate-0 transition-transform">
                      <service.icon className="w-12 h-12 text-emerald-950" />
                    </div>
                    <h4 className="text-5xl font-black uppercase text-emerald-950 mb-6 tracking-tighter leading-none">{service.title}</h4>
                    <p className="text-2xl text-emerald-900/60 leading-relaxed font-serif italic max-w-xl mx-auto">{service.description}</p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="flex-1 w-full aspect-square md:aspect-[4/3] overflow-hidden shadow-[30px_30px_0_rgba(16,185,129,0.1)] border-8 border-emerald-950 group relative"
                  >
                    <img 
                      src={service.image} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" 
                      referrerPolicy="no-referrer" 
                      alt={service.title} 
                    />
                    <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-transparent transition-all border-4 border-white/20 m-4" />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. What Neighbors Say (Reviews) from ProjectDetail.tsx */}
        <section id="contact" className="py-24 pt-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-24">
              <h2 className="text-5xl font-black text-emerald-950 uppercase tracking-tighter mb-12 border-l-8 border-amber-400 pl-8">What Neighbors Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: "Mark R.", location: "Port Charlotte", content: "Dan is a lifesaver. He shows up when he says he will, and my yard has never looked better. Highly recommend!" },
                  { name: "Linda P.", location: "Punta Gorda", content: "Been using Dan for 2 years now. He's fast, fair, and actually cares about the details. Great guy!" },
                  { name: "Steve W.", location: "North Port", content: "Finally found a lawn guy who doesn't flake out. Professional, reliable, and reasonably priced." }
                ].map((review, i) => (
                  <div key={i} className="bg-white p-8 border-4 border-emerald-950 shadow-[12px_12px_0_0_rgba(6,78,59,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                    <div className="flex gap-1 text-amber-400 mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-emerald-900 font-serif italic mb-6 leading-relaxed">"{review.content}"</p>
                    <p className="text-xs font-black uppercase tracking-widest text-emerald-950">— {review.name}, {review.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 7. Footer from ProjectDetail.tsx */}
      <footer className="py-20 px-6 border-t font-medium bg-amber-400 border-amber-400 text-emerald-950">
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
            <p className="max-w-sm mb-6 font-medium italic text-emerald-900/80">
              Just a guy with a mower and a really sharp blade.
            </p>
            <div className="mb-8 space-y-2 font-sans text-emerald-950 font-bold">
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
              <a href="#" className="p-3 rounded-full transition-all hover:scale-110 bg-emerald-950 text-amber-400"><Globe className="w-5 h-5" /></a>
              <a href="#" className="p-3 rounded-full transition-all hover:scale-110 bg-emerald-950 text-amber-400"><Share2 className="w-5 h-5" /></a>
              <a href="#" className="p-3 rounded-full transition-all hover:scale-110 bg-emerald-950 text-amber-400"><MessageCircle className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h5 className="text-xs uppercase tracking-widest font-bold mb-6 opacity-40">Navigate</h5>
            <ul className="space-y-4 opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Services</a></li>
              <li><a href="#about" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#contact" className="hover:opacity-100 transition-opacity">Reviews</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-xs uppercase tracking-widest font-bold mb-6 opacity-40">Scan to Book</h5>
            <div className="w-24 h-24 bg-white p-2 rounded-lg shadow-lg border border-zinc-200">
               <img src="https://placehold.co/100x100?text=QR+Code" alt="QR Code" className="w-full h-full" />
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-16 mt-16 border-t opacity-40 text-xs flex flex-col md:flex-row justify-between gap-6 border-emerald-950/20 text-emerald-950">
          <p>&copy; 2026 Dan's Lawn Care. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
