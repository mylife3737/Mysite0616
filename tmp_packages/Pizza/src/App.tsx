import React from 'react';
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
