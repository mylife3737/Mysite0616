import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence, useTransform } from 'motion/react';
import { PROJECTS } from '../constants';
import { 
  ArrowLeft,
  ArrowRight,
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter,
  Tractor,
  Sprout,
  Zap,
  Pizza,
  Star,
  Wine,
  Beer,
  Wrench,
  Heart,
  PackageCheck,
  Globe
} from 'lucide-react';
import { cn } from '../utils';

// Project Components
import { PizzaShop } from '../components/projects/PizzaShop';
import { DogGrooming } from '../components/projects/DogGrooming';
import { Handyman } from '../components/projects/Handyman';
import { PoolService } from '../components/projects/PoolService';
import { HomeCleanup } from '../components/projects/HomeCleanup';
import { Bakery } from '../components/projects/Bakery';
import { DansCard } from '../components/projects/DansCard';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [hasHoveredPool, setHasHoveredPool] = useState(false);
  const project = PROJECTS.find(p => p.id === projectId);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const { scrollYProgress } = useScroll();
  const heroParallax = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderVisible(window.scrollY < 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!project) {
      navigate('/');
      return;
    }
    // Simple SEO update
    document.title = `${project.businessName} | Demo Site`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', project.description);
    
    window.scrollTo(0, 0);
  }, [project, navigate]);

  if (!project) return null;

  const isDark = project.theme === 'dark';

  return (
    <div className={cn(
      "min-h-screen transition-colors duration-500",
      project.fontFamily,
      isDark ? "bg-zinc-950 text-white" : "bg-white text-zinc-900"
    )}>
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
        style={{ scaleX, backgroundColor: project.accentColor }}
      />

      <main>
        {/* Hero Designs - Completely Different for Each */}
        <section className={cn(
          "relative min-h-screen flex items-center overflow-hidden",
          project.id === 'dans-lawn-care' && "bg-emerald-950",
          project.id === 'handyman' && "bg-zinc-950",
          project.id === 'bakery' && "bg-emerald-50",
          project.id === 'pet-grooming' && "bg-violet-50",
          project.id === 'pizza-shop' && "bg-zinc-900"
        )}>
            {project.id === 'dans-lawn-care' && (
              <div className="relative w-full h-[80vh] flex items-center justify-center text-center overflow-hidden bg-emerald-950">
                <div className="absolute inset-0 z-0">
                  <img 
                    src="https://placehold.co/1920x1080?text=Fresh+Cut+Grass"
                    className="w-full h-full object-cover opacity-60"
                    alt="Freshly cut grass"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-emerald-950/80 via-transparent to-emerald-950" />
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
            )}

          {/* Layout 2: Brutalist Industrial (Fixit Sam) */}
          {project.id === 'handyman' && (
             <div className="relative w-full min-h-screen flex items-center justify-center py-32 overflow-hidden">
                {/* Tools Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src="https://placehold.co/1920x1080?text=Handyman" 
                    alt="Workshop tools"
                    className="w-full h-full object-cover opacity-20"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-zinc-950 via-transparent to-zinc-950" />
                </div>

                <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center">
                   <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="mb-12 border-4 border-red-600 p-8 bg-zinc-950/80 backdrop-blur-sm">
                     <h1 className="text-[12vw] font-mono font-black text-white leading-none tracking-tighter uppercase whitespace-pre">FIXIT<br/>SAM.</h1>
                   </motion.div>
                   <p className="text-zinc-500 font-mono text-xl mb-12 max-w-xl">// SAM_REPAIRS_LOCAL | 555-555-5555</p>
                   <div className="grid grid-cols-2 gap-px bg-zinc-800 w-full max-w-2xl border border-zinc-800">
                      <a href="#contact" className="group bg-zinc-950 p-8 text-red-600 font-mono font-bold hover:bg-red-600 hover:text-white transition-colors flex flex-col items-center">
                        <span className="text-lg uppercase leading-none">INITIALIZE_REPAIR</span>
                        <span className="text-[10px] opacity-50 mt-1 uppercase tracking-widest font-normal group-hover:opacity-100">Contact Sam Now</span>
                      </a>
                      <a href="#services" className="group bg-zinc-950 p-8 text-zinc-500 font-mono font-bold hover:bg-zinc-900 transition-colors hover:text-white flex flex-col items-center">
                        <span className="text-xl uppercase leading-none">THE_GRID</span>
                        <span className="text-[10px] opacity-50 mt-1 uppercase tracking-widest font-normal group-hover:opacity-100">Service List</span>
                      </a>
                   </div>
                   
                   {/* Sam's Hero Socials */}
                   <div className="flex gap-6 mt-12">
                      <a href="#" className="text-zinc-500 hover:text-red-600 transition-colors flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest">
                         <Instagram className="w-4 h-4" /> [INSTAGRAM]
                      </a>
                      <a href="#" className="text-zinc-500 hover:text-red-600 transition-colors flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest">
                         <Facebook className="w-4 h-4" /> [FACEBOOK]
                      </a>
                   </div>
                </div>
                <div className="absolute top-1/2 left-0 w-32 h-[120%] bg-white/5 -translate-y-1/2 -skew-x-12 pointer-events-none" />
             </div>
          )}

          {/* Layout 3: Classic Hero (Bakery) */}
          {project.id === 'bakery' && (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-screen">
                <div className="bg-emerald-950 flex flex-col justify-center p-20 text-white">
                   <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}>
                      <h1 className="text-8xl font-bakery mb-8">Slowly <br/>Kneaded.</h1>
                      <p className="text-emerald-100/50 text-xl font-serif max-w-md mb-12 uppercase tracking-widest text-xs font-bold leading-relaxed">{project.aboutText}</p>
                      <div className="flex gap-4">
                         <a href="#contact" className="px-12 py-4 bg-emerald-100 text-emerald-950 font-bold hover:bg-white transition-all font-bakery text-2xl lowercase">Pre-order</a>
                         <a href="#services" className="px-12 py-4 border-2 border-emerald-100/20 text-emerald-100 font-bold hover:bg-emerald-100/10 transition-all font-bakery text-2xl lowercase">Menu</a>
                      </div>
                   </motion.div>
                </div>
                <div className="relative group overflow-hidden">
                   <img src="https://placehold.co/1920x1080?text=Bakery" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110" referrerPolicy="no-referrer" />
                </div>
             </div>
          )}

          {/* Layout 4: Playful Bubbles (Pet) */}
          {project.id === 'pet-grooming' && (
             <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12">
                <div className="relative mb-20 md:mb-0">
                   {[...Array(15)].map((_, i) => (
                     <motion.div 
                        key={i}
                        animate={{ 
                          y: [-20, -400], 
                          x: [0, Math.sin(i) * 30],
                          opacity: [0, 0.4, 0],
                        }}
                        transition={{ duration: 3 + i % 2, repeat: Infinity, delay: i * 0.3 }}
                        className="absolute w-6 h-6 rounded-full border-2 border-white/50 bg-white/20 backdrop-blur-xs"
                        style={{ left: `${Math.random() * 100}%`, bottom: 0 }}
                     />
                   ))}
                   <motion.div 
                     animate={{ 
                        y: [0, -20, 0],
                        rotate: [-4, -2, -4]
                     }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                     className="relative z-10 w-[400px] aspect-square rounded-full overflow-hidden shadow-2xl border-[16px] border-white"
                   >
                      <img src="https://placehold.co/800x800?text=Pet+Spa" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      {/* Bubbles Overlay */}
                      <div className="absolute inset-0 bg-white/20 backdrop-blur-xs opacity-40 pointer-events-none" />
                   </motion.div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-8xl md:text-9xl font-pet text-violet-600 tracking-tight leading-none mb-8">Paws <br/> <span className="text-zinc-300">&</span> Pamper</h1>
                  <p className="text-zinc-500 font-sans text-xl mb-12 max-w-sm italic leading-relaxed">Relaxed grooming for Charlotte County's favorite pets.</p>
                  <a href="#contact" className="px-12 py-5 bg-violet-600 text-white rounded-full text-xl font-bold hover:scale-110 transition-transform shadow-lg inline-block">Book Spa Day</a>
                </div>
             </div>
          )}

          {/* Layout 7: Clean & Fresh (Sparkle Fresh) */}
          {project.id === 'housecleaner' && (
            <div className="w-full h-full flex flex-col items-center justify-center bg-[#fffdf0] pt-48 px-6 relative overflow-hidden">
               <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10 pb-32">
                 <div className="text-left space-y-10">
                   <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                   >
                     <h1 className="text-8xl md:text-[10rem] font-serif font-black text-zinc-900 leading-[0.8] mb-4 tracking-tighter uppercase whitespace-pre">Sparkle<br/><span className="text-yellow-500 italic">Fresh.</span></h1>
                     <p className="text-xl text-yellow-600 font-serif lowercase italic tracking-widest mt-8">Professional Home Care | Charlotte County</p>
                   </motion.div>
                   
                   <p className="text-lg text-slate-700 font-sans leading-relaxed max-w-md">Our standard of residential clarity. We treat every corner as a priority, ensuring your home remains a peaceful, sun-drenched sanctuary.</p>
                   
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
                    <img src="https://placehold.co/800x800?text=Cleaning" className="w-full aspect-square object-cover shadow-2xl border-8 border-white" referrerPolicy="no-referrer" />
                    <div className="absolute -bottom-10 -right-10 bg-yellow-500 p-8 shadow-2xl border-l-4 border-zinc-950 max-w-[220px]">
                       <p className="text-[10px] uppercase font-black text-yellow-900 mb-2 tracking-[0.2em]">Our View</p>
                       <p className="text-sm font-serif italic text-zinc-950 leading-snug">"Bringing sunshine and professional care to every room."</p>
                    </div>
                 </motion.div>
               </div>
            </div>
          )}

          {/* Layout 6: Serene Split (Pool) */}
          {project.id === 'pool-service' && (
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
                     <a href="#contact" className="px-16 py-8 bg-sky-500 text-white font-black text-2xl uppercase tracking-widest hover:bg-white hover:text-sky-950 transition-all shadow-[0_20px_50px_rgba(14,165,233,0.3)] hover:shadow-none hover:translate-y-1">Dive In</a>
                  </div>
               </div>
            </div>
          )}

          {/* Layout 5: High Contrast (Pizza) */}
          {project.id === 'pizza-shop' && (
             <div className="w-full h-full flex flex-col pt-32 bg-zinc-950">
                <div className="flex-1 px-6">
                   <div className="max-w-7xl mx-auto">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                         <div className="text-left space-y-4">
                            <h2 className="text-yellow-500 font-pizza uppercase text-2xl italic tracking-widest leading-none">Italy in <br/><span className="text-rose-600 text-6xl">90 Seconds.</span></h2>
                            <p className="text-zinc-500 max-w-sm font-pizza italic text-xs leading-relaxed">The exact moment the dough reaches peak char while keeping the toppings fresh and vibrant. Blistering 900°F heat. Authentic wood fire.</p>
                         </div>
                         <div className="flex justify-center lg:justify-end">
                            <div className="w-80 h-80 rounded-none overflow-hidden border-8 border-rose-600 shadow-[0_0_80px_rgba(225,29,72,0.4)] relative group">
                               <img src="https://placehold.co/800x800?text=Pizza" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                               <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="bg-rose-600 text-white px-4 py-1 font-pizza uppercase italic text-sm skew-x-[-15deg] group-hover:scale-110 transition-transform">Cheese Stretch</div>
                               </div>
                            </div>
                         </div>
                      </div>
                      <div className="inline-block bg-yellow-500 text-zinc-950 px-4 py-2 text-2xl font-pizza italic skew-x-[-15deg] mb-8 mt-12 shadow-[8px_8px_0_0_#e11d48]">EST. 2012 / NEAPOLITAN TRADITION</div>
                      <h1 className="text-[20vw] leading-none font-pizza text-white italic uppercase tracking-tighter mb-4 overflow-hidden whitespace-nowrap">
                         <motion.div animate={{ x: [0, -1200] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>FIRE BORN DOUGH HEAT LIFE PURE NEAPOLITAN</motion.div>
                      </h1>
                   </div>
                </div>
                <div className="h-[45vh] relative overflow-hidden group border-t-8 border-yellow-500">
                   <img src="https://placehold.co/1920x1080?text=Pizza+Dough" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5s]" referrerPolicy="no-referrer" />
                   <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-zinc-950/60" />
                   <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-12">
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="absolute top-8 left-1/2 -translate-x-1/2 bg-yellow-500 text-zinc-950 px-6 py-2 font-pizza uppercase italic text-sm tracking-widest flex items-center gap-2 skew-x-[-10deg] shadow-[8px_8px_0_0_#f43f5e] z-20"
                      >
                         <Pizza className="w-4 h-4 text-rose-600" />
                         Dine-In • Take-Out • Delivery
                      </motion.div>
                      <a href="#contact" className="px-16 py-8 bg-rose-600 text-white text-4xl font-pizza italic uppercase skew-x-[-10deg] hover:bg-yellow-500 hover:text-zinc-950 transition-all shadow-[12px_12px_0_0_#fff]">Order Now</a>
                      <a href="https://google.com/search?q=pizza+prime+fire+pies" target="_blank" className="px-16 py-8 border-4 border-yellow-500 text-yellow-500 text-4xl font-pizza italic uppercase skew-x-[-10deg] hover:bg-rose-600 hover:border-rose-600 hover:text-white transition-all">Find Us</a>
                   </div>
                </div>
             </div>
          )}
        </section>

        {/* Global Tractor Animation for Dan's Lawn Care */}
        {project.id === 'dans-lawn-care' && (
          <>
          <div className="relative h-14 w-full bg-linear-to-r from-emerald-950 via-emerald-900 to-emerald-950 overflow-hidden flex items-center border-y border-amber-400/40 z-20 shadow-inner">
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
          </>
        )}




           {project.id === 'dans-lawn-care' && (
             <section id="about" className="pt-10 pb-0 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div 
                       initial={{ opacity: 0, x: -50 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       className="relative w-full"
                    >
                        <img src="https://placehold.co/1200x1500?text=Dan+and+Dog" className="w-full aspect-square lg:aspect-[4/5] object-cover rounded-none border-l-[24px] border-emerald-950 shadow-2xl hover:brightness-110 transition-all duration-500" alt="Dan and his dog" />
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
                                 alt="Tractor operation"
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
        )}

        {/* Layout 5: Eat-In Experience (Pizza) */}
        {project.id === 'pizza-shop' && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="w-full bg-yellow-500 py-32 relative overflow-hidden"
          >
             <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1 relative">
                   <div className="absolute -top-10 -left-10 w-40 h-40 bg-zinc-950/20 rounded-full blur-3xl" />
                   <img 
                     src="https://placehold.co/1200x800?text=Service+Photo" 
                     className="w-full aspect-video object-cover rounded-none shadow-[20px_20px_0_0_#e11d48] border-4 border-zinc-950"
                     alt="Busy Pizzeria"
                     referrerPolicy="no-referrer"
                   />
                   <div className="absolute -bottom-6 -right-6 bg-rose-600 text-white p-6 font-pizza uppercase italic shadow-2xl">
                      Authentic Vibe
                   </div>
                </div>
                <div className="order-1 lg:order-2 space-y-8 text-zinc-950">
                   <h2 className="text-8xl font-pizza italic leading-none uppercase tracking-tighter">Pure <br/> Passion.</h2>
                   <p className="text-2xl font-pizza italic text-rose-900 max-w-xl leading-relaxed">
                      "Dine-in for the full experience, or take the heat home. We offer localized delivery within 5 miles to ensure your pie arrives at peak temperature."
                   </p>
                   <div className="grid grid-cols-2 gap-8 pt-8 border-t border-rose-900/20">
                      <div>
                         <p className="text-[10px] uppercase font-black tracking-widest mb-2 text-rose-900/60">Service Options</p>
                         <p className="text-xl font-bold uppercase">Dine-In • Carry-Out • Delivery</p>
                      </div>
                      <div>
                         <p className="text-[10px] uppercase font-black tracking-widest mb-2 text-rose-900/60">Atmosphere</p>
                         <p className="text-xl font-bold uppercase">Wood Fire & Vinyl Records</p>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>
        )}

        {/* Services - Unique Layouts for Every Project */}
        <section id="services" className={cn(
          "py-24 max-w-7xl mx-auto px-6",
          project.id === 'pizza-shop' && "bg-zinc-950 text-white max-w-none",
          project.id === 'pool-service' && "bg-sky-950 text-white max-w-none",
          project.id === 'housecleaner' && "bg-white text-zinc-900"
        )}>
          <div className={cn(
            "mb-16",
            project.id === 'dans-lawn-care' ? "text-left border-l-8 border-amber-400 pl-8" : "text-center"
          )}>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 opacity-50">{project.serviceSectionTitle}</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">{project.serviceSectionSubtitle}</h3>
          </div>

          {/* Layout 1: The Mowed Path (Lawn Care) */}
          {project.id === 'dans-lawn-care' && (
             <div className="relative pt-10">
                <div className="absolute left-1/2 top-0 bottom-0 w-8 bg-zinc-100/50 -translate-x-1/2 hidden md:block" />
                <div className="space-y-24 relative">
                   {project.services.map((service, idx) => (
                      <div key={idx} className={cn(
                        "flex flex-col md:flex-row items-center gap-16",
                        idx % 2 === 1 ? "md:flex-row-reverse" : ""
                      )}>
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
                              src={service.image || "https://placehold.co/1200x800?text=Service+Photo"} 
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
          )}

          {/* Layout 2: Technical Grid (Handyman) */}
          {project.id === 'handyman' && (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.services.map((service, idx) => (
                   <motion.div 
                     key={idx} 
                     whileHover={{ y: -10, scale: 1.02 }}
                     className="bg-zinc-950 p-10 flex flex-col items-start gap-6 font-mono border-l-8 border-red-600 shadow-2xl relative overflow-hidden group"
                   >
                     <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 -mr-16 -mt-16 rounded-full group-hover:bg-red-600/10 transition-colors" />
                     <div className="w-12 h-12 bg-zinc-900 border border-red-600 flex items-center justify-center text-red-600 font-black text-xl z-10">
                        {idx + 1}
                     </div>
                     <div className="z-10">
                        <h4 className="text-2xl font-black text-white uppercase leading-none tracking-tight mb-4">{service.title}</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>
                     </div>
                     <div className="mt-auto pt-6 border-t border-zinc-900 w-full flex items-center justify-between z-10">
                        <span className="text-[10px] text-zinc-700 tracking-[0.2em] uppercase font-bold">SERVICE_STATUS_ACTIVE</span>
                        <Zap className="w-4 h-4 text-red-600/30 group-hover:text-red-600 transition-colors" />
                     </div>
                   </motion.div>
                ))}
                <motion.div 
                   whileHover={{ y: -10, scale: 1.02 }}
                   className="bg-red-600 p-10 flex flex-col items-center justify-center gap-6 font-mono shadow-2xl text-center group transition-all hover:bg-white"
                >
                   <div className="w-20 h-20 bg-white/20 border-2 border-white flex items-center justify-center text-white group-hover:text-red-600 group-hover:border-red-600 transition-colors">
                      <Zap className="w-10 h-10" />
                   </div>
                   <div className="group-hover:text-zinc-950">
                     <h4 className="text-3xl font-black text-white uppercase leading-none mb-3 group-hover:text-red-600">CUSTOM_FIX</h4>
                     <p className="text-red-100 text-sm italic group-hover:text-zinc-500 uppercase tracking-widest leading-tight">Missing a service? <br/>I likely handle it.</p>
                   </div>
                   <a href="#contact" className="mt-auto bg-zinc-950 text-white px-8 py-4 font-bold uppercase tracking-widest text-xs group-hover:bg-red-600 transition-colors">Contact Sam Now</a>
                </motion.div>
             </div>
          )}

          {/* Layout 3: Tabletop Spill (Bakery) */}
          {project.id === 'bakery' && (
             <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
                   <div className="space-y-12">
                      {project.services.map((service, idx) => (
                         <div key={idx} className="group border-b border-emerald-100 pb-12">
                            <h4 className="text-5xl font-bakery text-emerald-900 mb-4 group-hover:italic transition-all">{service.title}</h4>
                            <p className="text-emerald-800/60 text-lg leading-relaxed">{service.description}</p>
                         </div>
                      ))}
                   </div>
                   <div className="grid grid-cols-2 gap-6 sticky top-32">
                      <div className="space-y-6">
                         <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                             <img src="https://placehold.co/800x600?text=Work+Photo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                         </div>
                         <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                             <img src="https://placehold.co/800x600?text=Work+Photo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                         </div>
                      </div>
                      <div className="space-y-6 pt-12">
                         <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                             <img src="https://placehold.co/800x600?text=Work+Photo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                         </div>
                         <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                             <img src="https://placehold.co/800x600?text=Work+Photo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          )}

          {/* Layout 4: Bubble Grid (Pet) */}
          {project.id === 'pet-grooming' && (
             <div className="flex flex-wrap justify-center gap-12 pt-12">
                {project.services.map((service, idx) => (
                  <motion.div 
                    key={idx}
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, idx % 2 === 0 ? 2 : -2, 0]
                    }}
                    transition={{ 
                      duration: 3 + (idx % 3), 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    whileHover={{ scale: 1.1, zIndex: 20 }}
                    className="w-80 h-80 rounded-full bg-white shadow-2xl border-8 border-violet-100 p-12 flex flex-col items-center justify-center text-center relative group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-violet-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <div className="relative z-10 transition-colors group-hover:text-white">
                      <service.icon className="w-12 h-12 text-violet-500 mb-6 mx-auto group-hover:text-white" />
                      <h4 className="text-xl font-pet font-bold mb-3">{service.title}</h4>
                      <p className="text-xs opacity-60 px-4 group-hover:opacity-100">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
             </div>
          )}

          {/* Layout 5: High Contrast List (Pizza - No Numbers) */}
          {project.id === 'pizza-shop' && (
             <div className="max-w-7xl mx-auto space-y-4">
                {project.services.map((service, idx) => (
                   <div key={idx} className="group border-2 border-white/5 py-12 px-12 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:bg-white transition-all cursor-default relative overflow-hidden">
                      <div className="absolute left-0 top-0 w-2 h-full bg-rose-600 scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                      <div className="flex items-center gap-12">
                         <div className="w-20 h-20 bg-white/5 flex items-center justify-center group-hover:bg-rose-600 transition-colors">
                            <service.icon className="w-10 h-10 text-white group-hover:text-black" />
                         </div>
                         <div>
                            <h4 className="text-4xl font-pizza italic uppercase text-white group-hover:text-zinc-950 transition-colors mb-2">{service.title}</h4>
                            <p className="text-rose-200/50 group-hover:text-zinc-600 font-pizza text-xl">{service.description}</p>
                         </div>
                      </div>
                      <a href="#contact" className="opacity-0 group-hover:opacity-100 transition-opacity bg-rose-600 text-white px-8 py-3 font-pizza uppercase italic text-xl">Order Now</a>
                   </div>
                ))}
             </div>
          )}

          {/* Layout 7: Grid Burst (Housecleaner - Dynamic) */}
          {project.id === 'housecleaner' && (
             <div className="max-w-4xl mx-auto space-y-24 py-12">
                {project.services.map((service, idx) => (
                   <motion.div 
                     key={idx}
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     className={cn(
                       "flex flex-col md:flex-row items-center gap-12",
                       idx % 2 === 1 && "md:flex-row-reverse"
                     )}
                   >
                     <div className="flex-1 text-center md:text-left space-y-4">
                        <span className="text-yellow-600 font-mono text-xs tracking-tighter uppercase font-bold">Process 0{idx + 1}</span>
                        <h4 className="text-5xl font-black text-zinc-900 leading-none uppercase">{service.title}</h4>
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
             </div>
          )}

          {/* Layout 6: Submerged Flow (Pool) */}
          {project.id === 'pool-service' && (
             <div className="space-y-4 pt-12">
                {project.services.map((service, idx) => (
                   <motion.div 
                     key={idx} 
                     initial={{ x: -100, opacity: 0 }}
                     whileInView={{ x: 0, opacity: 1 }}
                     className="flex items-center gap-12 bg-sky-500/10 backdrop-blur-xl p-12 border-l-[16px] border-sky-400 group hover:bg-sky-600/20 transition-all cursor-default"
                   >
                      <div className="w-32 h-32 bg-sky-950 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform shadow-2xl">
                         <service.icon className="w-16 h-16 text-sky-400 group-hover:text-white" />
                      </div>
                      <div className="flex-1">
                         <h4 className="text-4xl font-pool font-black text-white italic uppercase tracking-tighter mb-4">{service.title}</h4>
                         <p className="text-sky-200 group-hover:text-white leading-relaxed text-lg">{service.description}</p>
                      </div>
                      <div className="text-8xl font-black text-white/5 absolute right-12 group-hover:text-white/20 transition-all">0{idx + 1}</div>
                   </motion.div>
                ))}
             </div>
          )}
        </section>

        {/* About Section Overhaul */}
        <section id="about" className={cn(
          "py-32 overflow-hidden",
          project.id === 'bakery' ? "bg-stone-50" : 
          project.id === 'pet-grooming' ? "bg-violet-50" : 
          project.id === 'housecleaner' ? "bg-slate-100" :
          isDark ? "bg-zinc-950/50" : "bg-white"
        )}>
          <div className="max-w-7xl mx-auto px-6">
            {/* Custom About Layouts per Project */}
            

            {/* Fixit Sam: Professional Video Style */}
            {project.id === 'handyman' && (
              <div className="flex flex-col items-center">
                 <div className="w-full max-w-5xl mb-20 text-center">
                    <h2 className="text-8xl font-mono font-black text-white leading-none mb-12 uppercase whitespace-pre">MEET<br/>SAM</h2>
                    <p className="text-zinc-500 font-mono text-xl max-w-2xl mx-auto leading-relaxed italic">{project.aboutText}</p>
                 </div>
                 
                 {/* Video Placeholder: Man walking job site */}
                 <div className="w-full max-w-5xl aspect-video relative group overflow-hidden border-2 border-red-600 bg-zinc-950">
                    <motion.img 
                      animate={{ scale: [1, 1.05, 1] }} 
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      src="https://placehold.co/2000x1200?text=Neighbors+Photo" 
                      className="w-full h-full object-cover opacity-50" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="flex flex-col items-center">
                           <div className="bg-red-600 text-white px-6 py-2 font-mono text-xs animate-pulse">AUTO_PLAY_SIMULATION_ACTIVE</div>
                       </div>
                    </div>
                    {/* Camera Overlay */}
                    <div className="absolute top-8 left-8 flex items-center gap-2 text-red-600 font-mono text-[10px] animate-pulse">
                       <div className="w-2 h-2 bg-red-600 rounded-full" /> REC 00:42:15
                    </div>
                 </div>
                 
                 <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl">
                    <div className="border-t border-zinc-800 pt-8">
                       <p className="text-red-600 font-mono font-black mb-2">01 // SINGLE_OPERATOR</p>
                       <p className="text-zinc-500 text-sm leading-relaxed">No middlemen. You search for Sam, you get Sam. Reliable communication from start to finish.</p>
                    </div>
                    <div className="border-t border-zinc-800 pt-8">
                       <p className="text-red-600 font-mono font-black mb-2">02 // PRECISION_REPAIR</p>
                       <p className="text-zinc-500 text-sm leading-relaxed">Focusing on technical excellence over volume. Small repairs treated with industrial-grade respect.</p>
                    </div>
                    <div className="border-t border-zinc-800 pt-8">
                       <p className="text-red-600 font-mono font-black mb-2">03 // LOCALIZED_SERVICE</p>
                       <p className="text-zinc-500 text-sm leading-relaxed">Deeply committed to the Charlotte County area. Serving my neighbors with pride since day one.</p>
                    </div>
                 </div>
              </div>
            )}

            {/* Bloom & Batch: Classic List */}
            {project.id === 'bakery' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                 <div className="space-y-12">
                   {project.services.map((service, idx) => (
                      <div key={idx} className="border-b border-emerald-100 pb-8">
                         <h4 className="text-4xl font-bakery text-emerald-950 mb-2 lowercase">{service.title}</h4>
                         <p className="text-emerald-900/60 font-serif leading-relaxed">{service.description}</p>
                      </div>
                   ))}
                 </div>
                 <div className="bg-emerald-900 p-12 text-white flex flex-col justify-between aspect-square">
                    <h3 className="text-6xl font-bakery leading-none">Handcrafted <br/>Daily.</h3>
                    <div className="space-y-4">
                       <p className="text-emerald-400 font-mono text-xs uppercase tracking-widest">Charlotte County Bakery</p>
                       <p className="font-serif italic text-emerald-100/60">"The best bread is the one eaten while it's still warm."</p>
                    </div>
                 </div>
              </div>
            )}

            {/* Sparkle Fresh: Boutique Team Focus */}
            {project.id === 'housecleaner' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                 <div className="order-2 lg:order-1 flex flex-col gap-8">
                    <h2 className="text-7xl font-serif text-slate-800 leading-tight">The Team of <span className="text-slate-400 italic">Three.</span></h2>
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
                    <img src="https://placehold.co/800x1000?text=Clean+Photo" className="w-full aspect-[4/5] object-cover rounded-3xl mt-20" referrerPolicy="no-referrer" />
                    <img src="https://placehold.co/800x1000?text=Clean+Photo" className="w-full aspect-[4/5] object-cover rounded-3xl" referrerPolicy="no-referrer" />
                 </div>
              </div>
            )}

            {/* Pet Grooming: Playful & Soft */}
            {project.id === 'pet-grooming' && (
              <div className="flex flex-col md:flex-row items-center gap-20">
                 <div className="flex-1 relative">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-100 rounded-full blur-3xl opacity-50" />
                    <img src="https://placehold.co/1200x1200?text=Pet+Photo" className="w-full aspect-square object-cover rounded-[5rem] shadow-2xl relative z-10" referrerPolicy="no-referrer" />
                    <div className="absolute -bottom-6 -right-6 bg-violet-600 text-white p-6 rounded-3xl shadow-xl rotate-3">
                       <p className="text-xl font-bold">"Every wag counts."</p>
                    </div>
                 </div>
                 <div className="flex-1 space-y-8">
                    <h2 className="text-7xl font-pet text-violet-600 leading-none">The <br/><span className="text-zinc-400 italic">Bubbles</span><br/>Section</h2>
                    <p className="text-xl text-zinc-600 italic leading-relaxed">{project.aboutText}</p>
                 </div>
              </div>
            )}

            {/* Pizza Shop: High Temp / High Energy */}
            {project.id === 'pizza-shop' && (
              <div className="bg-zinc-950 p-20 border-l-[32px] border-rose-600">
                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-center">
                    <div className="space-y-8 col-span-1">
                       <h2 className="text-[8vw] font-pizza text-white italic leading-none uppercase tracking-tighter">The <br/>Pizza<br/>Heat.</h2>
                       <p className="text-xl text-rose-200 opacity-60 font-pizza italic leading-relaxed">{project.aboutText}</p>
                    </div>
                    <div className="relative col-span-1 border-8 border-white/5">
                       <img src="https://placehold.co/1200x1600?text=Pizza+Photo" className="w-full aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <div className="border border-white/20 p-8 rotate-3 bg-zinc-950/60 backdrop-blur-md">
                             <p className="text-white font-pizza text-4xl">Since 2012</p>
                          </div>
                       </div>
                    </div>
                    <div className="space-y-6 col-span-1">
                      <div className="bg-zinc-900 p-8 border-r-4 border-rose-600">
                        <div className="flex items-center gap-4 text-rose-600 mb-4">
                           <Wine className="w-8 h-8" />
                           <span className="font-pizza text-2xl uppercase">Curated Wines</span>
                        </div>
                        <p className="text-zinc-500 text-sm italic">Poured to pair perfectly with our fermented dough.</p>
                      </div>
                      <div className="bg-zinc-900 p-8 border-r-4 border-amber-600">
                        <div className="flex items-center gap-4 text-amber-600 mb-4">
                           <Beer className="w-8 h-8" />
                           <span className="font-pizza text-2xl uppercase">Ice Cold Beer</span>
                        </div>
                        <p className="text-zinc-500 text-sm italic">Local crafts always on tap.</p>
                      </div>
                    </div>
                 </div>
              </div>
            )}

            {/* Pool Service: Submerged / Deep Blue */}
            {project.id === 'pool-service' && (
              <div className="bg-sky-950 rounded-none p-20 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,#38bdf8_0%,transparent_50%)] opacity-20" />
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                    <div className="order-2 lg:order-1">
                       <img src="https://placehold.co/1200x1200?text=Pizza+Photo" className="w-full aspect-square object-cover rounded-none shadow-2xl skew-x-1" referrerPolicy="no-referrer" />
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
            )}
          </div>
        </section>
        {project.testimonials.length > 0 && (
          <section id="testimonials" className="py-32 max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                <div className="max-w-xl">
                  <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 opacity-50" style={{ color: project.accentColor }}>
                    {project.id === 'handyman' && "Client Logs"}
                    {project.id === 'bakery' && "The Daily Word"}
                    {project.id === 'pet-grooming' && "Happy Tails"}
                    {project.id === 'pizza-shop' && "Pizza Praise"}
                    {project.id === 'pool-service' && "Water Reviews"}
                    {project.id === 'housecleaner' && "Sparkle Stories"}
                  </h2>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
                    {project.id === 'handyman' && "Success stories from the field."}
                    {project.id === 'bakery' && "Straight from the local community."}
                    {project.id === 'pet-grooming' && "Hear from our furry friends' owners."}
                    {project.id === 'pizza-shop' && "Why they keep coming back for more."}
                    {project.id === 'pool-service' && "Clear feedback from our happy owners."}
                    {project.id === 'housecleaner' && "Families who love their fresh homes."}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {project.testimonials.map((t) => (
                  <div 
                    key={t.name}
                    className={cn(
                      "p-10 rounded-[2.5rem] relative",
                      isDark ? "bg-zinc-900" : "bg-zinc-50"
                    )}
                  >
                    <p className="text-xl font-serif italic opacity-80 mb-8 leading-relaxed">
                      "{t.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full bg-zinc-200" referrerPolicy="no-referrer" />
                      <div>
                        <h5 className="font-bold">{t.name}</h5>
                        <p className="text-xs opacity-50 uppercase tracking-widest">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
        )}

        {/* Contact CTA - Unique for Each */}
        <section id="contact" className={cn("py-24", project.id === 'dans-lawn-care' && "pt-6")}>
          <div className="max-w-7xl mx-auto px-6">
            {project.id === 'dans-lawn-care' && (
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
            )}

            {project.id === 'handyman' && (
              <div className="bg-zinc-950 p-2 border-4 border-red-600 relative">
                 <div className="bg-zinc-950 border border-red-600/30 p-16 flex flex-col items-center text-center">
                    <div className="w-24 h-24 mb-8 bg-red-600 flex items-center justify-center animate-bounce">
                       <Wrench className="w-12 h-12 text-white" />
                    </div>
                    <h2 className="text-5xl font-mono font-black text-white mb-6 uppercase tracking-widest leading-none">INITIALIZE_REPAIR?</h2>
                    <p className="text-zinc-500 font-mono mb-12 max-w-xl uppercase text-xs tracking-widest italic line-clamp-2">Direct route to Sam. No middlemen, no delays.</p>
                    <div className="flex flex-wrap justify-center gap-6">
                       <a href="tel:5555555555" className="px-12 py-4 bg-red-600 text-white font-mono font-black hover:bg-white hover:text-black transition-all shadow-[8px_8px_0_0_#fff] flex flex-col items-center">
                           <span className="text-xl">EXECUTE_REPAIR</span>
                           <span className="text-[10px] opacity-70 mt-1 uppercase tracking-widest font-normal group-hover:opacity-100 italic">Direct voice link to Sam</span>
                        </a>
                       <a href="mailto:hello@fixitsam" className="px-12 py-4 border-2 border-zinc-800 text-zinc-500 font-mono font-black hover:border-white hover:text-white transition-all underline underline-offset-8 flex flex-col items-center">
                           <span className="text-lg">INITIALIZE_REPAIR</span>
                           <span className="text-[10px] opacity-50 mt-1 uppercase tracking-widest font-normal group-hover:opacity-100 italic">Transmit data via email</span>
                        </a>
                    </div>
                 </div>
              </div>
            )}

            {project.id === 'bakery' && (
               <div className="bg-emerald-950 p-24 rounded-[4rem] text-center relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('https://placehold.co/2000x1200?text=Bakery+Photo')] opacity-20 group-hover:opacity-40 transition-all duration-1000" />
                  <div className="relative z-10">
                     <h2 className="text-7xl font-serif italic text-emerald-100 mb-8 lowercase">the oven's calling.</h2>
                     <p className="text-emerald-200/50 text-xl font-serif max-w-lg mx-auto mb-12 uppercase tracking-widest text-xs font-bold font-bakery italic">Limited batches daily. Pre-order recommended for special occasions.</p>
                     <div className="flex gap-4 justify-center">
                        <a href="tel:5555555555" className="px-12 py-4 bg-emerald-100 text-emerald-950 rounded-full font-bold hover:bg-white transition-all shadow-xl font-bakery lowercase text-2xl">Place order</a>
                        <a href="#services" className="px-12 py-4 border-2 border-emerald-100/20 text-emerald-100 rounded-full font-bold hover:bg-emerald-100/10 transition-all font-bakery lowercase text-2xl">View Menu</a>
                     </div>
                  </div>
               </div>
            )}

            {project.id === 'pool-service' && (
               <div className="bg-sky-500 p-20 flex flex-col md:flex-row items-center justify-between rounded-[4rem] shadow-2xl relative overflow-hidden group">
                  <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-20 -left-20 w-96 h-96 bg-sky-400/50 blur-[100px] rounded-full" />
                  <div className="relative z-10">
                     <h2 className="text-6xl font-pool font-black text-white uppercase italic tracking-tighter mb-4">STOP SCRUBBING.<br/>START FLOATING.</h2>
                     <p className="text-sky-100 text-xl font-light uppercase tracking-widest opacity-60">Pure Water. Perfect Balance.</p>
                  </div>
                  <a href="tel:5555555555" className="relative z-10 px-16 py-8 bg-sky-950 text-white font-pool font-black text-2xl uppercase italic tracking-widest hover:bg-white hover:text-sky-950 transition-all shadow-2xl group-hover:scale-110">Book Service</a>
               </div>
            )}

            {project.id === 'housecleaner' && (
               <div className="bg-[#fefce8] border-2 border-yellow-100 p-8 md:p-20 shadow-2xl">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                   <div className="space-y-12 text-left">
                     <h2 className="text-6xl font-serif font-black text-slate-900 leading-[0.8] uppercase tracking-tighter">THE <br/><span className="text-yellow-600 italic uppercase">PROCESS</span> BEGINS.</h2>
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
            )}

            {project.id === 'pet-grooming' && (
               <div className="bg-violet-600 p-24 rounded-[8rem] text-center shadow-2xl relative group overflow-hidden">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity }} className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,_#7c3aed_0%,_transparent_70%)] opacity-30" />
                  <div className="relative z-10">
                     <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-xl">
                        <Heart className="w-12 h-12 text-white" />
                     </div>
                     <h2 className="text-6xl font-pet text-white mb-6">Wags. Bubbles. Bliss.</h2>
                     <p className="text-violet-100/60 text-xl font-bold mb-12 uppercase tracking-widest italic">Spa days fill up fast. Reserve yours today!</p>
                     <a href="tel:5555555555" className="px-16 py-6 bg-white text-violet-600 rounded-full text-2xl font-black hover:scale-110 transition-transform shadow-xl">Book Appointment</a>
                  </div>
               </div>
            )}

            {project.id === 'pizza-shop' && (
               <div className="space-y-12">
                  {/* Reviews Ticker */}
                  <div className="bg-zinc-900 border-y-2 border-yellow-500/20 py-8 overflow-hidden relative">
                    <motion.div 
                      animate={{ x: [0, -1000] }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className="flex gap-12 items-center whitespace-nowrap"
                    >
                      {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-12 items-center">
                          {[
                            { name: "Marco G.", text: "Best crust in Charlotte County. 90 seconds really is the magic number." },
                            { name: "Sarah L.", text: "Real wood fire flavor. The cheese stretch was incredible!" },
                            { name: "Don P.", text: "Authentic Neapolitan. Feels like being back in Italy." },
                            { name: "Elena R.", text: "Simple menu, perfect execution. Fire born indeed." },
                            { name: "Tony V.", text: "Finally a place that respects the wood-fired tradition." }
                          ].map((rev, idx) => (
                            <div key={idx} className="flex flex-col gap-1">
                              <div className="flex gap-1 text-yellow-500">
                                {[...Array(5)].map((_, s) => <Star key={s} className="w-3 h-3 fill-current" />)}
                              </div>
                              <p className="text-white font-pizza italic text-sm">"{rev.text}"</p>
                              <p className="text-zinc-500 text-[10px] uppercase font-bold">— {rev.name}</p>
                            </div>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Coupon Section */}
                  <div className="max-w-4xl mx-auto border-4 border-dashed border-rose-600 p-12 bg-zinc-900 shadow-2xl relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-4 bg-yellow-500 text-zinc-950 font-pizza text-xl italic skew-x-[-15deg]">VALUED GUEST</div>
                     <h4 className="text-6xl font-pizza italic text-white uppercase mb-4">First Pie <span className="text-rose-600">50% OFF</span></h4>
                     <p className="text-zinc-500 font-pizza text-xl mb-8">Valid for Dine-In only. Mention this digital coupon when ordering.</p>
                     <div className="flex items-center gap-4 text-xs font-mono text-zinc-700">
                        <span>CODE: FIRE-BORN-2026</span>
                        <span>|</span>
                        <span>LIMIT 1 PER TABLE</span>
                     </div>
                  </div>

                  <div className="bg-zinc-950 border-4 border-rose-600 p-24 text-center skew-x-[-2deg]">
                     <div className="skew-x-[2deg]">
                        <h2 className="text-[10vw] font-pizza text-white italic uppercase leading-[0.8] mb-12 tracking-tighter">HEAT IS LIFE.<br/><span className="text-rose-600">PIZZA IS TRUTH.</span></h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                           <a href="tel:5555555555" className="px-20 py-8 bg-rose-600 text-white font-pizza italic uppercase text-4xl hover:bg-yellow-500 hover:text-zinc-950 transition-all">ORDER PIZZA</a>
                           <div className="text-white/20 font-pizza text-2xl uppercase tracking-widest italic">// LOCALLY_SOURCED_OAK</div>
                        </div>
                     </div>
                  </div>
               </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={cn(
        "py-20 px-6 border-t font-medium",
        project.id === 'dans-lawn-care' ? "bg-amber-400 border-amber-400 text-emerald-950" : (isDark ? "bg-zinc-950 border-zinc-900" : "bg-white border-zinc-100")
      )}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  {project.id === 'dans-lawn-care' ? (
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full border-2 border-emerald-950 bg-amber-400 flex items-center justify-center p-1.5 shadow-lg">
                        <Tractor className="w-full h-full text-emerald-950" />
                      </div>
                      <span className="text-xl font-black tracking-tighter uppercase italic leading-[0.8]">DAN'S<br/>LAWN CARE</span>
                    </div>
                  ) : (
                    <>
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm"
                        style={{ backgroundColor: project.accentColor }}
                      >
                        {project.name[0]}
                      </div>
                      <span className="text-xl font-bold tracking-tight uppercase italic">{project.name}</span>
                    </>
                  )}
                </div>
                <p className={cn(
                  "max-w-sm mb-6 font-medium italic",
                  project.id === 'dans-lawn-care' ? "text-emerald-900/80" : "opacity-50"
                )}>
                  {project.id === 'dans-lawn-care' 
                    ? "Just a guy with a mower and a really sharp blade."
                    : `Premium ${project.id.replace('-', ' ')} services dedicated to quality, reliability, and community trust.`
                  }
                </p>
            <div className={cn(
              "mb-8 space-y-2 font-sans",
              project.id === 'dans-lawn-care' && "text-emerald-950 font-bold"
            )}>
               <p className="text-sm opacity-60 flex items-center gap-2">
                 <MapPin className="w-4 h-4" />
                 {project.serviceArea ? project.serviceArea.split('|')[0].trim() : "Serving Charlotte County"}
               </p>
               <p className="text-sm opacity-60 flex items-center gap-2">
                 <Phone className="w-4 h-4" />
                 {project.serviceArea && project.serviceArea.includes('|') ? project.serviceArea.split('|')[1].trim() : "(555) 555-5555"}
               </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className={cn(
                "p-3 rounded-full transition-all hover:scale-110",
                project.id === 'dans-lawn-care' ? "bg-emerald-950 text-amber-400" : (isDark ? "bg-zinc-900 border border-zinc-800 text-white hover:border-red-600" : "bg-zinc-100 text-zinc-600")
              )}><Instagram className="w-5 h-5" /></a>
              <a href="#" className={cn(
                "p-3 rounded-full transition-all hover:scale-110",
                project.id === 'dans-lawn-care' ? "bg-emerald-950 text-amber-400" : (isDark ? "bg-zinc-900 border border-zinc-800 text-white hover:border-red-600" : "bg-zinc-100 text-zinc-600")
              )}><Facebook className="w-5 h-5" /></a>
              <a href="#" className={cn(
                "p-3 rounded-full transition-all hover:scale-110",
                project.id === 'dans-lawn-care' ? "bg-emerald-950 text-amber-400" : (isDark ? "bg-zinc-900 border border-zinc-800 text-white hover:border-red-600" : "bg-zinc-100 text-zinc-600")
              )}><Twitter className="w-5 h-5" /></a>
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
        
        <div className={cn(
          "max-w-7xl mx-auto pt-16 mt-16 border-t opacity-40 text-xs flex flex-col md:flex-row justify-between gap-6",
          project.id === 'dans-lawn-care' ? "border-emerald-950/20 text-emerald-950" : (isDark ? "border-zinc-900" : "border-zinc-100")
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
}
