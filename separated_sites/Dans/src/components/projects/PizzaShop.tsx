import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../../types';
import { cn } from '../../utils';
import { Instagram, Facebook, Twitter, MapPin, Phone, Star } from 'lucide-react';

interface ProjectProps {
  project: Project;
}

export const PizzaShop: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-pizza overflow-hidden selection:bg-rose-600 selection:text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 group">
          <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2000" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5s]" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-zinc-950/60" />
          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-12">
             <motion.div 
               initial={{ x: -100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               className="text-center lg:text-left"
             >
                <div className="bg-rose-600 inline-block px-4 py-1 mb-6 text-sm uppercase italic skew-x-[-15deg] shadow-[10px_10px_0_rgba(255,255,255,1)]">Fresh Out The Oven</div>
                <h1 className="text-[12rem] md:text-[18rem] leading-[0.8] font-black italic tracking-tighter uppercase mb-4 relative">
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
               className="hidden xl:block w-[600px] h-[600px] rounded-full border-[30px] border-white/5 relative"
             >
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-[500px] h-[500px] rounded-full bg-rose-600/10 blur-[100px]" />
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-40 bg-zinc-950 relative border-y-8 border-rose-600">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
               <div className="relative">
                  <h2 className="text-8xl md:text-9xl font-black italic uppercase tracking-tighter leading-none mix-blend-difference">Our Signature <span className="text-rose-600">Slices</span></h2>
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
                     <img src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1200" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-rose-600 text-white px-4 py-1 font-pizza uppercase italic text-sm skew-x-[-15deg] group-hover:scale-110 transition-transform">Cheese Stretch</div>
                     </div>
                  </div>
               </div>
               <div className="absolute top-20 -left-20 w-80 h-80 rounded-none overflow-hidden border-8 border-white shadow-2xl z-10 hidden xl:block">
                  <img src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=1200" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </div>
            </div>
         </div>
      </section>

      {/* Grid Menu Preview */}
      <section className="py-20 bg-zinc-900 overflow-hidden">
         <div className="flex animate-marquee whitespace-nowrap gap-12 py-8">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="text-8xl font-black italic uppercase text-transparent stroke-white/10 stroke-2" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}>
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

      {/* Footer */}
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
            <div className="flex gap-4">
              <a href="#" className="p-4 bg-zinc-900 border border-white/10 text-white hover:bg-rose-600 transition-colors"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="p-4 bg-zinc-900 border border-white/10 text-white hover:bg-rose-600 transition-colors"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="p-4 bg-zinc-900 border border-white/10 text-white hover:bg-rose-600 transition-colors"><Twitter className="w-6 h-6" /></a>
            </div>
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
};
