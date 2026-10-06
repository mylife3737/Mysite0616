import os
import shutil
import zipfile
import json

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
BUILD_TMP = os.path.join(BASE_DIR, 'tmp_packages')
PUBLIC_DIR = os.path.join(BASE_DIR, 'public')
os.makedirs(BUILD_TMP, exist_ok=True)
os.makedirs(PUBLIC_DIR, exist_ok=True)

def get_pkg_json(name):
    return json.dumps({
        "name": name.lower(),
        "private": True,
        "version": "1.0.0",
        "type": "module",
        "scripts": {
            "dev": "vite",
            "build": "vite build",
            "preview": "vite preview"
        },
        "dependencies": {
            "clsx": "^2.1.1",
            "lucide-react": "^1.16.0",
            "motion": "^12.23.24",
            "react": "^19.0.0",
            "react-dom": "^19.0.0",
            "tailwind-merge": "^3.5.0"
        },
        "devDependencies": {
            "@vitejs/plugin-react": "^5.0.0",
            "typescript": "^5.8.0",
            "vite": "^6.2.0"
        }
    }, indent=2)

def get_vite_config():
    return """import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
});
"""

def get_html(title):
    return f"""<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800;900&family=Playfair+Display:ital,wght@0,600;0,700;0,900;1,600&family=Space+Grotesk:wght@500;700;900&display=swap" rel="stylesheet">
  </head>
  <body class="min-h-screen bg-slate-950 text-slate-100">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
"""

def get_main_tsx():
    return """import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
"""

# 1. FIXIT (Copy exact original fixitfirst folder)
fixit_dst = os.path.join(BUILD_TMP, 'FixIt')
if os.path.exists(fixit_dst):
    shutil.rmtree(fixit_dst)
shutil.copytree(os.path.join(BASE_DIR, 'fixitfirst'), fixit_dst, ignore=shutil.ignore_patterns('node_modules', '.git', 'dist', '.vite'))

# 2. DANS LAWN CARE (Exact original Dans code and assets)
dans_dst = os.path.join(BUILD_TMP, 'Dans')
if os.path.exists(dans_dst):
    shutil.rmtree(dans_dst)
os.makedirs(os.path.join(dans_dst, 'src', 'assets'), exist_ok=True)
with open(os.path.join(dans_dst, 'package.json'), 'w') as f:
    f.write(get_pkg_json('dans-lawn-care'))
with open(os.path.join(dans_dst, 'vite.config.ts'), 'w') as f:
    f.write(get_vite_config())
with open(os.path.join(dans_dst, 'index.html'), 'w') as f:
    f.write(get_html("Dan's Lawn Care"))
with open(os.path.join(dans_dst, 'src', 'main.tsx'), 'w') as f:
    f.write(get_main_tsx())

# Copy original assets
src_assets = os.path.join(BASE_DIR, 'src', 'assets')
dst_assets = os.path.join(dans_dst, 'src', 'assets')
for asset_file in ['Header.jpg', 'dananddog.jpeg', 'kidsongrass.jpg', 'trim.jpg', 'mulch.jpeg', 'drone.avif', 'GIF.mp4']:
    s = os.path.join(src_assets, asset_file)
    if os.path.exists(s):
        shutil.copy2(s, os.path.join(dst_assets, asset_file))

shutil.copy2(os.path.join(BASE_DIR, 'src', 'types.ts'), os.path.join(dans_dst, 'src', 'types.ts'))
shutil.copy2(os.path.join(BASE_DIR, 'src', 'utils.ts'), os.path.join(dans_dst, 'src', 'utils.ts'))
shutil.copy2(os.path.join(BASE_DIR, 'src', 'components', 'projects', 'DansCard.tsx'), os.path.join(dans_dst, 'src', 'DansCard.tsx'))

with open(os.path.join(dans_dst, 'src', 'DansCard.tsx'), 'r') as f:
    card_content = f.read().replace('../../types', './types').replace('../../utils', './utils')
with open(os.path.join(dans_dst, 'src', 'DansCard.tsx'), 'w') as f:
    f.write(card_content)

with open(os.path.join(BASE_DIR, 'src', 'components', 'projects', 'DansLawnCare.tsx'), 'r') as f:
    dans_code = f.read()
dans_code = dans_code.replace('../../types', './types').replace('../../utils', './utils').replace('./DansCard', './DansCard').replace('../../assets/', './assets/')
# Lucide social icon compatibility
dans_code = dans_code.replace('Instagram', 'Globe').replace('Facebook', 'Share2').replace('Twitter', 'MessageCircle')
with open(os.path.join(dans_dst, 'src', 'DansComponent.tsx'), 'w') as f:
    f.write(dans_code)

dans_app = """import React from 'react';
import { Tractor, Scissors, Leaf } from 'lucide-react';
import { DansLawnCare } from './DansComponent';
import { Project } from './types';

const project: Project = {
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
    { title: 'Weekly Mowing', description: "I'll show up every week and keep it looking short and tidy. No fuss.", icon: Tractor },
    { title: 'String Trimming', description: 'Clean, crisp edges around the fence and flower beds.', icon: Scissors },
    { title: 'Landscaping', description: 'Mulching and bed maintenance to keep things looking clean.', icon: Leaf }
  ],
  testimonials: [
    { name: "Mark R.", role: "Port Charlotte", content: "Dan is a lifesaver. He shows up when he says he will, and my yard has never looked better. Highly recommend!" },
    { name: "Linda P.", role: "Punta Gorda", content: "Been using Dan for 2 years now. He's fast, fair, and actually cares about the details. Great guy!" },
    { name: "Steve W.", role: "North Port", content: "Finally found a lawn guy who doesn't flake out. Professional, reliable, and reasonably priced." }
  ]
};

export default function App() {
  return <DansLawnCare project={project} />;
}
"""
with open(os.path.join(dans_dst, 'src', 'App.tsx'), 'w') as f:
    f.write(dans_app)


# 3. PIZZA PRIME (Original components and exact original sections from ProjectDetail & PizzaShop)
pizza_dst = os.path.join(BUILD_TMP, 'Pizza')
if os.path.exists(pizza_dst):
    shutil.rmtree(pizza_dst)
os.makedirs(os.path.join(pizza_dst, 'src'), exist_ok=True)
with open(os.path.join(pizza_dst, 'package.json'), 'w') as f:
    f.write(get_pkg_json('pizza-prime'))
with open(os.path.join(pizza_dst, 'vite.config.ts'), 'w') as f:
    f.write(get_vite_config())
with open(os.path.join(pizza_dst, 'index.html'), 'w') as f:
    f.write(get_html("Pizza Prime Fire-Pies"))
with open(os.path.join(pizza_dst, 'src', 'main.tsx'), 'w') as f:
    f.write(get_main_tsx())
shutil.copy2(os.path.join(BASE_DIR, 'src', 'types.ts'), os.path.join(pizza_dst, 'src', 'types.ts'))
shutil.copy2(os.path.join(BASE_DIR, 'src', 'utils.ts'), os.path.join(pizza_dst, 'src', 'utils.ts'))

# Exact Pizza App with all original content from constants.ts, PizzaShop.tsx and ProjectDetail.tsx
pizza_app = """import React from 'react';
import { motion } from 'motion/react';
import { Flame, Pizza, Utensils, Star, Wine, Beer, MapPin, Phone, Globe, Share2, MessageCircle } from 'lucide-react';
import { Project } from './types';

const project: Project = {
  id: 'pizza-shop',
  name: 'Pizza Prime',
  businessName: 'Pizza Prime Fire-Pies',
  description: 'Blistering heat. Authentic dough.',
  logo: 'PizzaPrime',
  heroImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2000',
  accentColor: '#facc15',
  theme: 'dark',
  fontFamily: 'font-pizza',
  serviceArea: '123 Fire Lane, Pizzaville, FL 33950 | (555) 012-3456',
  serviceSectionTitle: 'The Pies',
  serviceSectionSubtitle: 'Cooked in 90 Seconds. Pure Perfection.',
  aboutText: "Family owned and operated. Our pizza is born from a 48-hour fermentation process and the blistering 900-degree heat of our custom volcanic stone oven. Why 90 seconds? Because that is the exact moment the dough reaches peak char while keeping the toppings fresh and vibrant. Dine-In, Take-Out, or Delivery—we bring the heat.",
  services: [
    { title: 'The Oven', description: 'Our volcanic stone oven reaches 900°F, charring dough in exactly 90 seconds.', icon: Flame },
    { title: 'Authentic Dough', description: 'Double-zero Italian flour, 48-hour fermentation, and hand-stretched to order.', icon: Pizza },
    { title: 'Full Service', description: 'Dine-In, Take-Out, and Local Delivery. We bring the heat up to your door.', icon: Utensils }
  ],
  testimonials: [
    { name: 'Antonio M.', role: 'Pizza Lover', content: 'Finally, a real Neapolitan crust in this city. Just like home.', avatar: 'https://i.pravatar.cc/150?u=antonio' }
  ]
};

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans overflow-hidden selection:bg-rose-600 selection:text-white">
      {/* 1. Hero Section from PizzaShop */}
      <section className="relative h-screen flex flex-col justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 group">
          <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2000" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5s]" referrerPolicy="no-referrer" alt="Pizza" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/60" />
          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-12">
             <motion.div 
               initial={{ x: -100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               className="text-center lg:text-left"
             >
                <div className="bg-rose-600 inline-block px-4 py-1 mb-6 text-sm uppercase italic skew-x-[-15deg] shadow-[10px_10px_0_rgba(255,255,255,1)]">Fresh Out The Oven</div>
                <h1 className="text-8xl md:text-[14rem] leading-[0.8] font-black italic tracking-tighter uppercase mb-4 relative">
                   <span className="block">{project.name.split(' ')[0]}</span>
                   <span className="block text-rose-600 stroke-2 text-transparent" style={{ WebkitTextStroke: '4px #e11d48' }}>Pizzas</span>
                </h1>
                <div className="flex flex-col md:flex-row gap-8 items-center mt-12">
                   <a href="#order" className="px-12 py-6 bg-rose-600 text-white font-black uppercase italic text-2xl skew-x-[-15deg] hover:bg-white hover:text-rose-600 transition-all shadow-[15px_15px_0_rgba(255,255,255,0.1)] hover:shadow-[15px_15px_0_rgba(225,29,72,1)]">Order Now</a>
                   <div className="text-left font-sans">
                      <p className="text-rose-600 font-black italic text-lg uppercase">Hot Ready in 15min</p>
                      <p className="opacity-50 text-sm">Open till 4AM Daily</p>
                   </div>
                </div>
             </motion.div>
             <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
               className="hidden xl:block w-[500px] h-[500px] rounded-full border-[30px] border-white/5 relative"
             >
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-[400px] h-[400px] rounded-full bg-rose-600/10 blur-[100px]" />
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Featured Section from PizzaShop */}
      <section className="py-32 bg-zinc-950 relative border-y-8 border-rose-600">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
               <div className="relative">
                  <h2 className="text-7xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mix-blend-difference">Our Signature <span className="text-rose-600">Slices</span></h2>
                  <div className="absolute -top-12 -left-12 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
               </div>
               <p className="text-2xl font-serif italic text-white/50 leading-relaxed max-w-xl">No rules, just heat. We don't follow recipes, we follow instincts. San Marzano tomatoes, fresh pulled mozz, and a crust charred by the fire of a thousand suns.</p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 border-2 border-white/10 hover:border-rose-600 transition-colors group">
                     <div className="text-rose-600 text-4xl font-black italic mb-4">#01</div>
                     <h3 className="text-4xl font-black uppercase italic mb-2">The Burner</h3>
                     <p className="text-sm opacity-50">Jalapeños, Spicy Salami, Hot Honey, Red Pepper.</p>
                  </div>
                  <div className="p-8 border-2 border-white/10 hover:border-rose-600 transition-colors group">
                     <div className="text-rose-600 text-4xl font-black italic mb-4">#02</div>
                     <h3 className="text-4xl font-black uppercase italic mb-2">The OG</h3>
                     <p className="text-sm opacity-50">Classic Margherita, Basil, Olive Oil, Sea Salt.</p>
                  </div>
               </div>
            </div>
            <div className="relative">
               <div className="flex justify-center lg:justify-end">
                  <div className="w-80 h-80 rounded-none overflow-hidden border-8 border-rose-600 shadow-[0_0_80px_rgba(225,29,72,0.4)] relative group">
                     <img src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1200" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" alt="Pizza cheese stretch" />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-rose-600 text-white px-4 py-1 uppercase italic text-sm skew-x-[-15deg] group-hover:scale-110 transition-transform">Cheese Stretch</div>
                     </div>
                  </div>
               </div>
               <div className="absolute top-20 -left-20 w-80 h-80 rounded-none overflow-hidden border-8 border-white shadow-2xl z-10 hidden xl:block">
                  <img src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=1200" className="w-full h-full object-cover" referrerPolicy="no-referrer" alt="Pizza" />
               </div>
            </div>
         </div>
      </section>

      {/* 3. Original Grid Menu Preview from PizzaShop */}
      <section className="py-20 bg-zinc-900 overflow-hidden">
         <div className="flex animate-marquee whitespace-nowrap gap-12 py-8">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="text-7xl font-black italic uppercase text-transparent stroke-white/10 stroke-2" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}>
                THE MENU • DOUGH • SAUCE • CRAFT • FIRE • 
              </span>
            ))}
         </div>
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
            <div className="bg-white p-12 text-zinc-950 transform rotate-1 hover:rotate-0 transition-transform duration-500 shadow-2xl">
               <div className="mb-12">
                  <h4 className="text-5xl font-black uppercase italic leading-none border-b-4 border-rose-600 pb-4">The Red Label</h4>
                  <p className="text-xs font-black uppercase tracking-widest mt-2">Tomato Base / $18</p>
               </div>
               <ul className="space-y-4 font-black uppercase italic text-sm">
                  <li className="flex justify-between"><span>Double Pep</span> <span>$18</span></li>
                  <li className="flex justify-between"><span>Sausage & Shroom</span> <span>$20</span></li>
                  <li className="flex justify-between"><span>Buffalo Cluck</span> <span>$22</span></li>
               </ul>
            </div>
            <div className="bg-rose-600 p-12 text-white transform -rotate-1 hover:rotate-0 transition-transform duration-500 shadow-2xl">
               <div className="mb-12">
                  <h4 className="text-5xl font-black uppercase italic leading-none border-b-4 border-white pb-4">The White Out</h4>
                  <p className="text-xs font-black uppercase tracking-widest mt-2">Cream & Cheese / $20</p>
               </div>
               <ul className="space-y-4 font-black uppercase italic text-sm">
                  <li className="flex justify-between"><span>Garlic Knotty</span> <span>$20</span></li>
                  <li className="flex justify-between"><span>Truffle Shuff</span> <span>$24</span></li>
                  <li className="flex justify-between"><span>Veg Heavy</span> <span>$21</span></li>
               </ul>
            </div>
            <div className="bg-white p-12 text-zinc-950 transform rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
               <div className="mb-12">
                  <h4 className="text-5xl font-black uppercase italic leading-none border-b-4 border-zinc-950 pb-4">The Sweets</h4>
                  <p className="text-xs font-black uppercase tracking-widest mt-2">Dessert / $12</p>
               </div>
               <ul className="space-y-4 font-black uppercase italic text-sm">
                  <li className="flex justify-between"><span>Cinnasquares</span> <span>$12</span></li>
                  <li className="flex justify-between"><span>Fudge Brownie</span> <span>$10</span></li>
                  <li className="flex justify-between"><span>Cookie Monst</span> <span>$12</span></li>
               </ul>
            </div>
         </div>
      </section>

      {/* 4. Original Eat-In Experience from ProjectDetail.tsx */}
      <section className="w-full bg-yellow-500 py-32 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-zinc-950/20 rounded-full blur-3xl" />
               <img 
                 src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200" 
                 className="w-full aspect-video object-cover rounded-none shadow-[20px_20px_0_0_#e11d48] border-4 border-zinc-950"
                 alt="Busy Pizzeria"
               />
               <div className="absolute -bottom-6 -right-6 bg-rose-600 text-white p-6 uppercase italic shadow-2xl font-black">
                  Authentic Vibe
               </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8 text-zinc-950">
               <h2 className="text-8xl font-black italic leading-none uppercase tracking-tighter">Pure <br/> Passion.</h2>
               <p className="text-2xl italic text-rose-900 max-w-xl leading-relaxed font-bold">
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
      </section>

      {/* 5. Original Services Section from ProjectDetail.tsx */}
      <section className="py-24 max-w-7xl mx-auto px-6 bg-zinc-950">
         <div className="mb-16 text-center">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 opacity-50 text-rose-500">{project.serviceSectionTitle}</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">{project.serviceSectionSubtitle}</h3>
         </div>
         <div className="space-y-4">
            {project.services.map((service, idx) => (
               <div key={idx} className="group border-2 border-white/5 py-12 px-12 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:bg-white transition-all cursor-default relative overflow-hidden">
                  <div className="absolute left-0 top-0 w-2 h-full bg-rose-600 scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                  <div className="flex items-center gap-12">
                     <div className="w-20 h-20 bg-white/5 flex items-center justify-center group-hover:bg-rose-600 transition-colors">
                        <service.icon className="w-10 h-10 text-white group-hover:text-black" />
                     </div>
                     <div>
                        <h4 className="text-4xl italic uppercase text-white group-hover:text-zinc-950 transition-colors mb-2 font-black">{service.title}</h4>
                        <p className="text-rose-200/50 group-hover:text-zinc-600 text-xl font-medium">{service.description}</p>
                     </div>
                  </div>
                  <a href="#order" className="opacity-0 group-hover:opacity-100 transition-opacity bg-rose-600 text-white px-8 py-3 uppercase italic text-xl font-bold">Order Now</a>
               </div>
            ))}
         </div>
      </section>

      {/* 6. Original The Pizza Heat & Drinks Section from ProjectDetail.tsx */}
      <section className="bg-zinc-950 p-12 md:p-20 border-l-[32px] border-rose-600 border-y border-white/10">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20 items-center">
            <div className="space-y-8 col-span-1">
               <h2 className="text-6xl md:text-8xl text-white italic leading-none uppercase tracking-tighter font-black">The <br/>Pizza<br/>Heat.</h2>
               <p className="text-xl text-rose-200 opacity-60 italic leading-relaxed">{project.aboutText}</p>
            </div>
            <div className="relative col-span-1 border-8 border-white/5">
               <img src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=1200" className="w-full aspect-[3/4] object-cover" referrerPolicy="no-referrer" alt="Pizza Craft" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="border border-white/20 p-8 rotate-3 bg-zinc-950/60 backdrop-blur-md">
                     <p className="text-white text-4xl font-black uppercase">Since 2012</p>
                  </div>
               </div>
            </div>
            <div className="space-y-6 col-span-1">
              <div className="bg-zinc-900 p-8 border-r-4 border-rose-600">
                <div className="flex items-center gap-4 text-rose-600 mb-4">
                   <Wine className="w-8 h-8" />
                   <span className="text-2xl uppercase font-black">Curated Wines</span>
                </div>
                <p className="text-zinc-500 text-sm italic">Poured to pair perfectly with our fermented dough.</p>
              </div>
              <div className="bg-zinc-900 p-8 border-r-4 border-amber-600">
                <div className="flex items-center gap-4 text-amber-600 mb-4">
                   <Beer className="w-8 h-8" />
                   <span className="text-2xl uppercase font-black">Ice Cold Beer</span>
                </div>
                <p className="text-zinc-500 text-sm italic">Local crafts always on tap.</p>
              </div>
            </div>
         </div>
      </section>

      {/* 7. Original Reviews Ticker from ProjectDetail.tsx */}
      <section className="bg-zinc-900 border-y-2 border-yellow-500/20 py-8 overflow-hidden relative">
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
                  <p className="text-white italic text-sm">"{rev.text}"</p>
                  <p className="text-zinc-500 text-[10px] uppercase font-bold">— {rev.name}</p>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      {/* 8. Original Coupon Section from ProjectDetail.tsx */}
      <section className="py-20 max-w-4xl mx-auto px-6">
         <div className="border-4 border-dashed border-rose-600 p-12 bg-zinc-900 shadow-2xl relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 p-4 bg-yellow-500 text-zinc-950 text-xl italic font-black skew-x-[-15deg]">VALUED GUEST</div>
            <h4 className="text-5xl md:text-6xl font-black italic text-white uppercase mb-4">First Pie <span className="text-rose-600">50% OFF</span></h4>
            <p className="text-zinc-500 text-xl mb-8">Valid for Dine-In only. Mention this digital coupon when ordering.</p>
            <div className="flex items-center justify-center gap-4 text-xs font-mono text-zinc-400">
               <span>CODE: FIRE-BORN-2026</span>
               <span>|</span>
               <span>LIMIT 1 PER TABLE</span>
            </div>
         </div>
      </section>

      {/* 9. Original CTA from ProjectDetail.tsx */}
      <section id="order" className="bg-zinc-950 border-4 border-rose-600 p-16 md:p-24 text-center my-12 max-w-6xl mx-auto">
         <h2 className="text-6xl md:text-8xl text-white italic uppercase leading-[0.85] mb-12 tracking-tighter font-black">HEAT IS LIFE.<br/><span className="text-rose-600">PIZZA IS TRUTH.</span></h2>
         <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a href="tel:5550123456" className="px-20 py-8 bg-rose-600 text-white italic uppercase text-4xl hover:bg-yellow-500 hover:text-zinc-950 transition-all font-black">ORDER PIZZA</a>
            <div className="text-white/40 text-2xl uppercase tracking-widest italic">// LOCALLY_SOURCED_OAK</div>
         </div>
      </section>

      {/* 10. Original Footer from PizzaShop.tsx */}
      <footer className="py-20 px-6 bg-zinc-950 border-t-8 border-rose-600">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white italic rotate-12"
                style={{ backgroundColor: project.accentColor }}
              >
                {project.name[0]}
              </div>
              <span className="text-4xl font-black italic tracking-tighter uppercase">{project.name}</span>
            </div>
            <p className="opacity-50 max-w-sm mb-6 text-xl italic font-serif leading-tight">
               Crafting the city's boldest slices since 2012. Join the fire.
            </p>
            <p className="text-sm text-zinc-400 mb-6">{project.serviceArea}</p>
          </div>
          <div>
            <h4 className="text-xl font-black italic uppercase mb-8 border-b-2 border-rose-600 inline-block">The Joints</h4>
            <ul className="space-y-4 opacity-70 text-sm font-black uppercase tracking-widest">
               <li>Downtown Hub</li>
               <li>West End Kitchen</li>
               <li>The Pop Up</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-black italic uppercase mb-8 border-b-2 border-rose-600 inline-block">Get Fed</h4>
            <ul className="space-y-4 opacity-70 text-sm font-black uppercase tracking-widest">
               <li>Order Pickup</li>
               <li>Order Delivery</li>
               <li>Private Events</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
"""
with open(os.path.join(pizza_dst, 'src', 'App.tsx'), 'w') as f:
    f.write(pizza_app)


# 4. BLOOM & BATCH BAKERY (Exact original content from constants.ts, Bakery.tsx and ProjectDetail.tsx)
bloom_dst = os.path.join(BUILD_TMP, 'Bloom')
if os.path.exists(bloom_dst):
    shutil.rmtree(bloom_dst)
os.makedirs(os.path.join(bloom_dst, 'src'), exist_ok=True)
with open(os.path.join(bloom_dst, 'package.json'), 'w') as f:
    f.write(get_pkg_json('bloom-batch'))
with open(os.path.join(bloom_dst, 'vite.config.ts'), 'w') as f:
    f.write(get_vite_config())
with open(os.path.join(bloom_dst, 'index.html'), 'w') as f:
    f.write(get_html("Bloom & Batch Artisanal Bakery"))
with open(os.path.join(bloom_dst, 'src', 'main.tsx'), 'w') as f:
    f.write(get_main_tsx())
shutil.copy2(os.path.join(BASE_DIR, 'src', 'types.ts'), os.path.join(bloom_dst, 'src', 'types.ts'))
shutil.copy2(os.path.join(BASE_DIR, 'src', 'utils.ts'), os.path.join(bloom_dst, 'src', 'utils.ts'))

bloom_app = """import React from 'react';
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
"""
with open(os.path.join(bloom_dst, 'src', 'App.tsx'), 'w') as f:
    f.write(bloom_app)


# 5. AQUA GLOW POOL SERVICE (Exact original content from constants.ts, PoolService.tsx and ProjectDetail.tsx)
aqua_dst = os.path.join(BUILD_TMP, 'Aqua')
if os.path.exists(aqua_dst):
    shutil.rmtree(aqua_dst)
os.makedirs(os.path.join(aqua_dst, 'src'), exist_ok=True)
with open(os.path.join(aqua_dst, 'package.json'), 'w') as f:
    f.write(get_pkg_json('aqua-glow'))
with open(os.path.join(aqua_dst, 'vite.config.ts'), 'w') as f:
    f.write(get_vite_config())
with open(os.path.join(aqua_dst, 'index.html'), 'w') as f:
    f.write(get_html("Aqua Glow Pool Service"))
with open(os.path.join(aqua_dst, 'src', 'main.tsx'), 'w') as f:
    f.write(get_main_tsx())
shutil.copy2(os.path.join(BASE_DIR, 'src', 'types.ts'), os.path.join(aqua_dst, 'src', 'types.ts'))
shutil.copy2(os.path.join(BASE_DIR, 'src', 'utils.ts'), os.path.join(aqua_dst, 'src', 'utils.ts'))

aqua_app = """import React from 'react';
import { motion } from 'motion/react';
import { Droplets, Waves, ShieldCheck, Sun, Star, Phone, MapPin } from 'lucide-react';
import { Project } from './types';

const project: Project = {
  id: 'pool-service',
  name: 'Aqua Glow',
  businessName: 'Aqua Glow Pool Service',
  description: 'Perfect water, zero effort.',
  logo: 'AquaGlow',
  heroImage: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2000',
  accentColor: '#0ea5e9',
  theme: 'light',
  fontFamily: 'font-pool',
  serviceSectionTitle: 'Pool Standards',
  serviceSectionSubtitle: 'Crystal clear results every single visit.',
  aboutText: 'Aqua Glow makes pool ownership a breeze. We handle the chemicals, the scrubbing, and the filtering so you can jump in anytime and find a crystal-clear oasis waiting.',
  services: [
    { title: 'Chemical Balance', description: 'Weekly testing and balancing for safe, stinging-free water.', icon: Droplets, image: 'https://placehold.co/800x600?text=Chemicals' },
    { title: 'Debris Removal', description: 'Skimming and vacuuming to keep your pool floor spotless.', icon: Waves, image: 'https://placehold.co/800x600?text=Debris' },
    { title: 'Filter Care', description: 'Full system inspections and regular filter cleanings.', icon: ShieldCheck, image: 'https://placehold.co/800x600?text=Filter' }
  ],
  testimonials: [
    { name: 'Sarah T.', role: 'Pool Owner', content: 'Our pool has never looked this clear. They are incredibly reliable.', avatar: 'https://i.pravatar.cc/150?u=sarah' }
  ]
};

export default function App() {
  return (
    <div className="min-h-screen bg-sky-50 text-sky-950 font-sans selection:bg-sky-200 selection:text-sky-900">
      {/* 1. Hero Section from PoolService.tsx */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
             <motion.div
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               className="mb-8 p-3 bg-sky-200/50 rounded-full text-sky-600 font-bold uppercase tracking-widest text-xs"
             >
                Crystal Clear Every Time
             </motion.div>
             <motion.h1 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 1 }}
               className="text-[8rem] md:text-[12rem] font-black tracking-tighter text-sky-950/20 absolute -top-12 z-0 whitespace-nowrap select-none"
             >
               REFLECTIONS
             </motion.h1>
             <motion.h1
               initial={{ y: 40, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase relative z-10 leading-none mb-8"
             >
               {project.name.split(' ')[0]} <span className="text-white drop-shadow-[0_4px_10px_rgba(3,105,161,0.2)] stroke-sky-900 stroke-2" style={{ WebkitTextStroke: '2px #0369a1' }}>Pools</span>
             </motion.h1>
             <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="text-xl md:text-2xl text-sky-900/60 font-medium max-w-2xl mb-12"
             >
                Professional maintenance, balancing, and cleaning for premium residential pools. Your personal oasis, perfectly maintained.
             </motion.p>
             
             <div className="w-full max-w-5xl h-[60vh] relative group border-[20px] border-white/5 shadow-2xl overflow-hidden">
                <img 
                 src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2000" 
                 className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" 
                 referrerPolicy="no-referrer" 
                 alt="Swimming pool"
                />
                <div className="absolute inset-0 bg-sky-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
             </div>
          </div>
        </div>
      </section>

      {/* 2. Services Grid from PoolService.tsx */}
      <section className="py-20 px-6 bg-white shrink">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: Droplets, title: "Chemical Balance", desc: "Precise water testing and balancing for safe, healthy swimming." },
              { icon: Waves, title: "Filter Cleaning", desc: "Full backwashing and filter maintenance to ensure perfect flow." },
              { icon: Sun, title: "Algae Treatment", desc: "Professional shocking and preventative care for crystal blue water." },
              { icon: ShieldCheck, title: "Equipment Check", desc: "Weekly inspection of pumps, heaters, and automation systems." }
            ].map((s, idx) => (
              <div key={idx} className="group">
                <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                  <s.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-sky-950 mb-3">{s.title}</h3>
                <p className="text-sky-900/50 font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Submerged Flow Services from ProjectDetail.tsx */}
      <section className="py-24 px-6 bg-sky-950 text-white">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="mb-12">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 opacity-50 text-sky-400">{project.serviceSectionTitle}</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">{project.serviceSectionSubtitle}</h3>
          </div>
          {project.services.map((service, idx) => (
             <motion.div 
               key={idx} 
               initial={{ x: -100, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               className="flex items-center gap-12 bg-sky-500/10 backdrop-blur-xl p-12 border-l-[16px] border-sky-400 group hover:bg-sky-600/20 transition-all cursor-default relative overflow-hidden"
             >
                <div className="w-32 h-32 bg-sky-900 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform shadow-2xl">
                   <service.icon className="w-16 h-16 text-sky-400 group-hover:text-white" />
                </div>
                <div className="flex-1">
                   <h4 className="text-4xl font-black text-white italic uppercase tracking-tighter mb-4">{service.title}</h4>
                   <p className="text-sky-200 group-hover:text-white leading-relaxed text-lg">{service.description}</p>
                </div>
                <div className="text-8xl font-black text-white/5 absolute right-12 group-hover:text-white/20 transition-all">0{idx + 1}</div>
             </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Infinity Visions from ProjectDetail.tsx */}
      <section className="bg-sky-950 p-12 md:p-20 relative overflow-hidden border-t border-sky-800">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10 text-white">
            <div className="order-2 lg:order-1">
               <img src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200" className="w-full aspect-square object-cover rounded-none shadow-2xl" alt="Pool" />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
               <h2 className="text-6xl md:text-7xl font-black text-white italic leading-none uppercase">Infinity <br/>Visions.</h2>
               <p className="text-2xl text-sky-100 font-light leading-relaxed tracking-tight">{project.aboutText}</p>
               <div className="flex gap-4">
                  <div className="px-6 py-2 bg-sky-400/20 rounded-none border border-sky-400/30 text-sky-400 text-xs font-bold uppercase tracking-widest leading-none">Saltwater Specialist</div>
                  <div className="px-6 py-2 bg-sky-400/20 rounded-none border border-sky-400/30 text-sky-400 text-xs font-bold uppercase tracking-widest leading-none">Weekly Care</div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. Reviews from ProjectDetail.tsx */}
      {project.testimonials.length > 0 && (
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-sky-600">Water Reviews</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Clear feedback from our happy owners.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {project.testimonials.map((t, idx) => (
              <div key={idx} className="p-10 rounded-[2.5rem] bg-white border border-sky-100 shadow-sm">
                <p className="text-xl font-serif italic opacity-80 mb-8 leading-relaxed">"{t.content}"</p>
                <div>
                  <h5 className="font-bold text-sky-950">{t.name}</h5>
                  <p className="text-xs text-sky-600 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. Stop Scrubbing Start Floating CTA from ProjectDetail.tsx */}
      <section className="py-20 max-w-7xl mx-auto px-6">
         <div className="bg-sky-500 p-16 md:p-20 flex flex-col md:flex-row items-center justify-between rounded-[4rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 text-white mb-8 md:mb-0">
               <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">STOP SCRUBBING.<br/>START FLOATING.</h2>
               <p className="text-sky-100 text-xl font-light uppercase tracking-widest opacity-80">Pure Water. Perfect Balance.</p>
            </div>
            <a href="tel:5555555555" className="relative z-10 px-16 py-8 bg-sky-950 text-white font-black text-2xl uppercase italic tracking-widest hover:bg-white hover:text-sky-950 transition-all shadow-2xl">Book Service</a>
         </div>
      </section>

      {/* 7. Footer from PoolService.tsx */}
      <footer className="py-20 px-6 bg-white border-t border-sky-100 text-sky-900/60 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-10 h-10 rounded-2xl flex items-center justify-center font-black text-white"
                style={{ backgroundColor: project.accentColor }}
              >
                {project.name[0]}
              </div>
              <span className="text-2xl font-black tracking-tighter text-sky-950 uppercase">{project.name}</span>
            </div>
            <p className="max-w-sm mb-6 text-sm">
               Serving premium properties since 2012. Dedicated to the art of the perfect pool.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-sky-950 uppercase text-xs tracking-widest mb-4">Coverage</h5>
            <p>Port Charlotte, Punta Gorda, Englewood, Rotonda West.</p>
          </div>
          <div>
            <h5 className="font-bold text-sky-950 uppercase text-xs tracking-widest mb-4">Contact</h5>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-sky-600" /> (555) 555-5555</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
"""
with open(os.path.join(aqua_dst, 'src', 'App.tsx'), 'w') as f:
    f.write(aqua_app)


# 6. SPARKLE FRESH CLEANING (Exact original content from constants.ts, HomeCleanup.tsx and ProjectDetail.tsx)
sparkle_dst = os.path.join(BUILD_TMP, 'Sparkle')
if os.path.exists(sparkle_dst):
    shutil.rmtree(sparkle_dst)
os.makedirs(os.path.join(sparkle_dst, 'src'), exist_ok=True)
with open(os.path.join(sparkle_dst, 'package.json'), 'w') as f:
    f.write(get_pkg_json('sparkle-fresh'))
with open(os.path.join(sparkle_dst, 'vite.config.ts'), 'w') as f:
    f.write(get_vite_config())
with open(os.path.join(sparkle_dst, 'index.html'), 'w') as f:
    f.write(get_html("Sparkle Fresh Home Cleaning"))
with open(os.path.join(sparkle_dst, 'src', 'main.tsx'), 'w') as f:
    f.write(get_main_tsx())
shutil.copy2(os.path.join(BASE_DIR, 'src', 'types.ts'), os.path.join(sparkle_dst, 'src', 'types.ts'))
shutil.copy2(os.path.join(BASE_DIR, 'src', 'utils.ts'), os.path.join(sparkle_dst, 'src', 'utils.ts'))

sparkle_app = """import React from 'react';
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
"""
with open(os.path.join(sparkle_dst, 'src', 'App.tsx'), 'w') as f:
    f.write(sparkle_app)


# Zip everything into master my_sites.zip and individual zips
print("Creating Master ZIP with exact original content...")
master_zip_path = os.path.join(PUBLIC_DIR, 'my_sites.zip')
if os.path.exists(master_zip_path):
    os.remove(master_zip_path)

EXCLUDE_DIRS = {'node_modules', '.git', 'dist', '.vite', 'build'}

with zipfile.ZipFile(master_zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for folder_name in ['FixIt', 'Dans', 'Aqua', 'Sparkle', 'Bloom', 'Pizza']:
        folder_path = os.path.join(BUILD_TMP, folder_name)
        for root, dirs, files in os.walk(folder_path):
            dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
            for file in files:
                full_p = os.path.join(root, file)
                rel_p = os.path.relpath(full_p, BUILD_TMP)
                zipf.write(full_p, rel_p)

for folder_name in ['FixIt', 'Dans', 'Aqua', 'Sparkle', 'Bloom', 'Pizza']:
    ind_zip_path = os.path.join(PUBLIC_DIR, f"{folder_name.lower()}.zip")
    if os.path.exists(ind_zip_path):
        os.remove(ind_zip_path)
    with zipfile.ZipFile(ind_zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        folder_path = os.path.join(BUILD_TMP, folder_name)
        for root, dirs, files in os.walk(folder_path):
            dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
            for file in files:
                full_p = os.path.join(root, file)
                rel_p = os.path.relpath(full_p, folder_path)
                zipf.write(full_p, rel_p)

print("RESTORE OF ORIGINAL CONTENT PACKAGES COMPLETED SUCCESSFULLY!")
