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

# 1. PIZZA APP CODE
PIZZA_APP = '''import React, { useState } from 'react';
import { 
  Flame, 
  Pizza, 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  ShoppingBag, 
  Check, 
  Plus, 
  Minus, 
  Trash2, 
  X, 
  Sparkles, 
  Wine, 
  Beer, 
  ChevronRight, 
  ShieldCheck, 
  Utensils 
} from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  category: 'red' | 'white' | 'sweets';
  price: number;
  description: string;
  spicy?: boolean;
  popular?: boolean;
  image: string;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: 'p1',
    name: 'The Burner',
    category: 'red',
    price: 22,
    description: 'Hot Calabrian chili paste, spicy soppressata, smoked mozzarella, hot honey drizzle, fresh basil.',
    spicy: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800'
  },
  {
    id: 'p2',
    name: 'The OG Margherita',
    category: 'red',
    price: 18,
    description: 'San Marzano D.O.P. tomatoes, hand-pulled fiore di latte, wild Sicilian oregano, cold-pressed olive oil, sea salt.',
    popular: true,
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800'
  },
  {
    id: 'p3',
    name: 'Double Smoke Pepperoni',
    category: 'red',
    price: 20,
    description: 'Crisp cupping pepperoni curls, charred tomato sauce, pecorino romano, garlic confit oil.',
    popular: true,
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=800'
  },
  {
    id: 'p4',
    name: 'Sausage & Wild Shroom',
    category: 'red',
    price: 21,
    description: 'Fennel pork sausage, roasted king oyster mushrooms, caramelized shallots, thyme.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800'
  },
  {
    id: 'p5',
    name: 'Truffle Shuff',
    category: 'white',
    price: 24,
    description: 'Black truffle crema, fontina, wild foraged cremini mushrooms, rosemary sea salt, white truffle oil.',
    popular: true,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800'
  },
  {
    id: 'p6',
    name: 'Garlic Knotty White',
    category: 'white',
    price: 20,
    description: 'Whipped ricotta cloud, roasted whole garlic cloves, fresh mozzarella, red pepper flakes, parsley.',
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=800'
  },
  {
    id: 'p7',
    name: 'Wood-Fired Garlic Knots (6x)',
    category: 'sweets',
    price: 9,
    description: 'Stretched fermented dough knots drenched in parm, parsley, and roasted garlic herb butter.',
    image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?q=80&w=800'
  },
  {
    id: 'p8',
    name: 'Fire-Charred Cinnasquares',
    category: 'sweets',
    price: 11,
    description: 'Puff dough squares baked in stone heat, tossed in Saigon cinnamon sugar with sweet mascarpone glaze.',
    popular: true,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800'
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'all' | 'red' | 'white' | 'sweets'>('all');
  const [cart, setCart] = useState<{ item: MenuItem; count: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({ name: '', phone: '', orderType: 'pickup' });

  const filteredItems = activeTab === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeTab);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(p => p.item.id === item.id);
      if (existing) {
        return prev.map(p => p.item.id === item.id ? { ...p, count: p.count + 1 } : p);
      }
      return [...prev, { item, count: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateCount = (id: string, delta: number) => {
    setCart(prev => {
      return prev.map(p => {
        if (p.item.id === id) {
          const next = p.count + delta;
          return next > 0 ? { ...p, count: next } : null;
        }
        return p;
      }).filter(Boolean) as { item: MenuItem; count: number }[];
    });
  };

  const cartTotal = cart.reduce((sum, entry) => sum + (entry.item.price * entry.count), 0);
  const cartItemCount = cart.reduce((sum, entry) => sum + entry.count, 0);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerInfo.name || !customerInfo.phone) return;
    setOrderSuccess(true);
    setTimeout(() => {
      setCart([]);
      setOrderSuccess(false);
      setIsCartOpen(false);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-rose-600 selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-stone-950/90 backdrop-blur-md border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-600 flex items-center justify-center text-white shadow-lg shadow-rose-600/30">
              <Flame className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-2xl font-black italic tracking-tighter text-white uppercase">PIZZA PRIME</span>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-amber-400">Volcanic Stone Pies</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-bold text-stone-400">
            <a href="#about" className="hover:text-rose-500 transition-colors">The 900° Oven</a>
            <a href="#menu" className="hover:text-rose-500 transition-colors">The Slices</a>
            <a href="#deals" className="hover:text-rose-500 transition-colors">Digital Coupon</a>
            <a href="#reviews" className="hover:text-rose-500 transition-colors">Praises</a>
            <a href="#hours" className="hover:text-rose-500 transition-colors">Location</a>
          </div>

          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative px-5 py-2.5 rounded-full bg-rose-600 hover:bg-rose-500 transition-all font-bold text-sm flex items-center gap-2 text-white shadow-lg shadow-rose-600/20"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Order</span>
            {cartItemCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-amber-400 text-stone-950 text-xs font-black flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 z-0 opacity-25">
          <img 
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2000" 
            alt="Pizza oven fire" 
            className="w-full h-full object-cover scale-105 filter saturate-150"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/90" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-400 text-xs font-black uppercase tracking-widest mb-8">
            <Flame className="w-4 h-4 text-rose-500" />
            900°F VOLCANIC STONE OVEN • CHARRED IN 90 SECONDS
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter uppercase leading-[0.85] mb-8 text-white">
            FIRE BORN.<br />
            <span className="text-rose-500 underline decoration-amber-400 decoration-wavy decoration-2">PERFECTION.</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 max-w-2xl mx-auto font-medium mb-10 leading-relaxed">
            48-hour cold fermented dough, imported San Marzano tomatoes, and intense blister heat. No shortcuts. Pure flame craft.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a 
              href="#menu" 
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-black text-lg uppercase tracking-wider transition-all shadow-xl shadow-rose-600/30 hover:scale-105"
            >
              Explore The Menu
            </a>
            <a 
              href="#deals" 
              className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-stone-900/80 hover:bg-stone-800 border border-stone-700 text-amber-400 font-bold text-lg uppercase tracking-wider transition-all"
            >
              Get 50% Off First Pie
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-stone-800/80 text-left">
            <div>
              <p className="text-3xl font-black text-amber-400 font-mono">90s</p>
              <p className="text-xs uppercase tracking-widest text-stone-400 font-bold">Oven Bake Time</p>
            </div>
            <div>
              <p className="text-3xl font-black text-rose-500 font-mono">48hr</p>
              <p className="text-xs uppercase tracking-widest text-stone-400 font-bold">Cold Fermentation</p>
            </div>
            <div>
              <p className="text-3xl font-black text-amber-400 font-mono">900°F</p>
              <p className="text-xs uppercase tracking-widest text-stone-400 font-bold">Volcanic Heat</p>
            </div>
            <div>
              <p className="text-3xl font-black text-rose-500 font-mono">100%</p>
              <p className="text-xs uppercase tracking-widest text-stone-400 font-bold">Zero-Double Flour</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Oven / Craft Section */}
      <section id="about" className="py-24 bg-stone-900 border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase font-bold tracking-[0.3em] text-rose-500 mb-3 block">Authentic Wood-Fired Process</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
              WHY 90 SECONDS MAKES ALL THE DIFFERENCE.
            </h2>
            <p className="text-stone-300 text-lg leading-relaxed mb-6 font-medium">
              When dough meets 900-degree volcanic brick, moisture turns into instant micro-steam pockets. The crust bubbles, blisters with signature leopard spots, and locks in a cloud-like interior with an irresistible crisp crunch.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-stone-950 border border-stone-800">
                <Utensils className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white uppercase text-sm">Natural Wild Leaven</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Easy on digestion and packed with subtle sourdough tang.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-stone-950 border border-stone-800">
                <ShieldCheck className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white uppercase text-sm">Real Italian San Marzano Tomatoes</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Hand-crushed with sea salt. Never pasteurized tomato paste or fillers.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=800" 
              alt="Pizza slice" 
              className="w-full h-64 object-cover rounded-2xl shadow-xl border border-stone-800"
            />
            <img 
              src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800" 
              alt="Fresh pizza" 
              className="w-full h-64 object-cover rounded-2xl shadow-xl border border-stone-800 mt-8"
            />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-rose-500 block mb-2">Signature Fire Pies</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white">THE DAILY SLICES</h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-stone-900 border border-stone-800 overflow-x-auto">
            {(['all', 'red', 'white', 'sweets'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeTab === tab 
                    ? 'bg-rose-600 text-white shadow-md' 
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                {tab === 'all' ? 'All Items' : tab === 'red' ? 'Red Label Pies' : tab === 'white' ? 'White Truffle Pies' : 'Sides & Sweets'}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div 
              key={item.id}
              className="bg-stone-900 rounded-3xl border border-stone-800 overflow-hidden hover:border-stone-700 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {item.popular && (
                      <span className="px-3 py-1 rounded-full bg-amber-400 text-stone-950 font-black text-[10px] uppercase tracking-widest shadow-md">
                        Crowd Favorite
                      </span>
                    )}
                    {item.spicy && (
                      <span className="px-3 py-1 rounded-full bg-rose-600 text-white font-black text-[10px] uppercase tracking-widest shadow-md flex items-center gap-1">
                        <Flame className="w-3 h-3" /> Spicy
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl bg-stone-950/90 text-amber-400 font-mono font-black text-lg border border-stone-800">
                    ${item.price}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">{item.name}</h3>
                  <p className="text-sm text-stone-400 leading-relaxed font-medium">{item.description}</p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => addToCart(item)}
                  className="w-full py-3.5 rounded-2xl bg-stone-800 hover:bg-rose-600 text-white font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 group-hover:bg-rose-600"
                >
                  <Plus className="w-4 h-4" /> Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Digital Coupon Section */}
      <section id="deals" className="py-20 bg-gradient-to-r from-rose-950/60 via-stone-900 to-rose-950/60 border-y border-rose-900/40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-8 md:p-12 rounded-3xl bg-stone-950 border-2 border-dashed border-rose-500 relative overflow-hidden text-center shadow-2xl">
            <span className="inline-block px-4 py-1 rounded-full bg-amber-400 text-stone-950 font-black text-xs uppercase tracking-widest mb-4">
              Digital Resident Offer
            </span>
            <h3 className="text-4xl md:text-5xl font-black uppercase text-white mb-4">
              50% OFF YOUR FIRST WOOD-FIRED PIE
            </h3>
            <p className="text-stone-300 text-base max-w-xl mx-auto mb-8 font-medium">
              Valid for dine-in and online pick-up orders. Mention or show this digital screen at checkout.
            </p>
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-stone-900 border border-stone-700 font-mono font-black text-xl text-rose-400">
              <span>PROMO: FIRE-BORN-2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Ticker */}
      <section id="reviews" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.3em] text-rose-500 mb-2 block">Verified Feedback</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white">WHAT THE NEIGHBORS SAY</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Marco G.", role: "Local Chef", text: "Best crust in Charlotte County hands down. That 90-second volcanic bake creates an airy crust that is impossible to mimic in standard ovens.", stars: 5 },
            { name: "Sarah L.", role: "Regular Diner", text: "The Burner with the spicy hot honey drizzle is completely addictive. We pick up three pies every single Friday night without fail.", stars: 5 },
            { name: "Antonio V.", role: "Punta Gorda Resident", text: "Reminds me of the pizzerias on the back streets of Naples. Real San Marzano tomatoes and legitimate char. 10/10.", stars: 5 }
          ].map((rev, i) => (
            <div key={i} className="p-8 rounded-3xl bg-stone-900 border border-stone-800 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(rev.stars)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-stone-300 text-sm leading-relaxed italic mb-6">"{rev.text}"</p>
              </div>
              <div className="pt-4 border-t border-stone-800">
                <p className="font-bold text-white uppercase text-sm">{rev.name}</p>
                <p className="text-xs text-stone-500 font-medium">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location, Hours & Footer */}
      <footer id="hours" className="bg-stone-900 border-t border-stone-800 py-16 text-stone-400 text-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-rose-600 flex items-center justify-center text-white">
                <Flame className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white italic">PIZZA PRIME</span>
            </div>
            <p className="text-xs leading-relaxed text-stone-400 mb-6 max-w-sm">
              Authentic wood-fired Neapolitan pizza crafted with 48-hour cold fermented dough and baked in 900°F volcanic stone.
            </p>
            <div className="flex items-center gap-3 text-xs text-stone-500 font-mono">
              <span>EST. 2012</span>
              <span>•</span>
              <span>CHARLOTTE COUNTY</span>
            </div>
          </div>

          <div>
            <h4 className="font-black text-white uppercase text-sm mb-4 tracking-wider">Hours & Service</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex justify-between py-1 border-b border-stone-800">
                <span>Mon – Thursday</span>
                <span className="text-white font-bold">11:00 AM – 10:00 PM</span>
              </li>
              <li className="flex justify-between py-1 border-b border-stone-800">
                <span>Friday – Saturday</span>
                <span className="text-white font-bold">11:00 AM – 2:00 AM</span>
              </li>
              <li className="flex justify-between py-1 border-b border-stone-800">
                <span>Sunday</span>
                <span className="text-white font-bold">12:00 PM – 9:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white uppercase text-sm mb-4 tracking-wider">Call or Visit</h4>
            <div className="space-y-3 text-xs">
              <p className="flex items-center gap-2 text-stone-300">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                123 Fire Lane, Pizzaville, FL 33950
              </p>
              <p className="flex items-center gap-2 text-stone-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                (555) 012-3456
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-xs">
          <div className="w-full max-w-md bg-stone-900 border-l border-stone-800 h-full flex flex-col p-6 overflow-y-auto">
            <div className="flex items-center justify-between pb-6 border-b border-stone-800">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-rose-500" />
                <h3 className="text-xl font-black uppercase text-white">Your Order</h3>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {orderSuccess ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-white mb-2">Order Fired Up!</h4>
                <p className="text-sm text-stone-400">
                  We received your order. Your pizza will be blistering hot and ready in 15 minutes!
                </p>
              </div>
            ) : cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center text-stone-500 py-12">
                <Pizza className="w-12 h-12 mb-3 stroke-1" />
                <p className="font-bold text-sm">Your order is empty</p>
                <p className="text-xs text-stone-600 mt-1">Select your favorite wood-fired pies to get started.</p>
              </div>
            ) : (
              <div className="flex-1 flex flex-col justify-between py-6">
                <div className="space-y-4">
                  {cart.map(({ item, count }) => (
                    <div key={item.id} className="flex items-center justify-between p-3 rounded-2xl bg-stone-950 border border-stone-800">
                      <div>
                        <h4 className="font-bold text-white text-sm uppercase">{item.name}</h4>
                        <p className="text-xs text-amber-400 font-mono">${item.price * count}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => updateCount(item.id, -1)}
                          className="w-7 h-7 rounded-lg bg-stone-800 text-stone-300 flex items-center justify-center hover:bg-stone-700"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-bold text-sm text-white w-6 text-center">{count}</span>
                        <button 
                          onClick={() => updateCount(item.id, 1)}
                          className="w-7 h-7 rounded-lg bg-stone-800 text-stone-300 flex items-center justify-center hover:bg-stone-700"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleCheckout} className="pt-6 border-t border-stone-800 space-y-4">
                  <div className="flex justify-between items-center text-lg font-black text-white">
                    <span>Total</span>
                    <span className="font-mono text-amber-400">${cartTotal}</span>
                  </div>

                  <div className="space-y-2">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      required
                      value={customerInfo.name}
                      onChange={e => setCustomerInfo({...customerInfo, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 text-sm focus:border-rose-500 outline-none"
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number (for pickup SMS)" 
                      required
                      value={customerInfo.phone}
                      onChange={e => setCustomerInfo({...customerInfo, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 text-sm focus:border-rose-500 outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-base uppercase tracking-wider transition-all shadow-lg shadow-rose-600/20"
                  >
                    Send Order to Oven (${cartTotal})
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
'''

# 2. BLOOM & BATCH BAKERY APP CODE
BLOOM_APP = '''import React, { useState } from 'react';
import { 
  Sparkles, 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  ShoppingBag, 
  Check, 
  Heart, 
  Cake, 
  Calendar, 
  Send 
} from 'lucide-react';

interface BakeryItem {
  id: string;
  name: string;
  category: 'bread' | 'pastry';
  price: number;
  description: string;
  fermentation: string;
  image: string;
}

const BAKERY_ITEMS: BakeryItem[] = [
  {
    id: 'b1',
    name: 'Country Sourdough Boule',
    category: 'bread',
    price: 9,
    description: 'Heirloom wheat, long slow ferment, blistered caramelized crust, open airy crumb.',
    fermentation: '48 Hours',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800'
  },
  {
    id: 'b2',
    name: 'Heritage French Baguette',
    category: 'bread',
    price: 6,
    description: 'Stone-ground unbleached flour, crackly crust, tender interior with buttery aroma.',
    fermentation: '36 Hours',
    image: 'https://images.unsplash.com/photo-1540331547168-8b63109225b7?q=80&w=800'
  },
  {
    id: 'b3',
    name: 'Seeded Rye & Honey Batard',
    category: 'bread',
    price: 10,
    description: 'Toasted sesame, pumpkin seed, flax, whole dark rye, wildflower honey wash.',
    fermentation: '72 Hours',
    image: 'https://images.unsplash.com/photo-1517686469429-8bc8623f908f?q=80&w=800'
  },
  {
    id: 'b4',
    name: 'Wild Honey Morning Bun',
    category: 'pastry',
    price: 5.5,
    description: 'Flaky croissant dough layered with brown butter, cinnamon sugar, and orange zest.',
    fermentation: 'Hand-rolled daily',
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bac3c?q=80&w=800'
  },
  {
    id: 'b5',
    name: 'Artisan Almond Croissant',
    category: 'pastry',
    price: 6,
    description: 'Double baked with rich almond frangipane cream, toasted sliced almonds, powdered sugar.',
    fermentation: 'French Butter',
    image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?q=80&w=800'
  },
  {
    id: 'b6',
    name: 'Rosemary Sea Salt Focaccia',
    category: 'bread',
    price: 8,
    description: 'Extravagantly drenched in cold-pressed olive oil, Maldon sea salt flakes, garden rosemary.',
    fermentation: '24 Hours',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800'
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'bread' | 'pastry'>('all');
  const [preorderForm, setPreorderForm] = useState({ name: '', phone: '', date: '', items: 'Country Sourdough Boule' });
  const [submitted, setSubmitted] = useState(false);

  const filtered = selectedCategory === 'all' 
    ? BAKERY_ITEMS 
    : BAKERY_ITEMS.filter(item => item.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setPreorderForm({ name: '', phone: '', date: '', items: 'Country Sourdough Boule' });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-emerald-900 selection:text-emerald-50">
      {/* Top Banner */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-6 text-center font-medium">
        Baked fresh every sunrise • Organic stone-milled grains • Sourdough starters active since 2012
      </div>

      {/* Nav */}
      <header className="border-b border-stone-200 bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-serif font-black tracking-tight text-emerald-950">BLOOM & BATCH</h1>
            <p className="text-[10px] uppercase font-bold tracking-[0.25em] text-emerald-800">Artisanal Hearth Bakery</p>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-serif italic text-stone-600">
            <a href="#philosophy" className="hover:text-emerald-900 transition-colors">Our Ferment</a>
            <a href="#menu" className="hover:text-emerald-900 transition-colors">Daily Loaves</a>
            <a href="#reviews" className="hover:text-emerald-900 transition-colors">Customer Praises</a>
            <a href="#preorder" className="hover:text-emerald-900 transition-colors">Pre-Order</a>
          </div>
          <a 
            href="#preorder"
            className="px-6 py-2.5 rounded-full bg-emerald-950 text-white font-medium text-xs uppercase tracking-widest hover:bg-emerald-800 transition-colors shadow-sm"
          >
            Reserve Loaf
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs uppercase font-bold tracking-[0.3em] text-emerald-800 block mb-4">Old-World Sourdough</span>
          <h2 className="text-5xl md:text-7xl font-serif font-black text-emerald-950 leading-[1.05] mb-8">
            Slowly Kneaded.<br />
            <span className="italic font-normal text-emerald-800">Allowed to Breathe.</span>
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed font-serif mb-10 max-w-lg">
            We mill our flour each morning using ancient stone mills. Our wild heirloom starters ferment for up to 72 hours before hitting intense hearth stone heat.
          </p>
          <div className="flex gap-4">
            <a 
              href="#menu" 
              className="px-8 py-4 rounded-xl bg-emerald-950 text-white font-bold text-sm uppercase tracking-wider hover:bg-emerald-800 transition-colors shadow-lg"
            >
              See Today's Bake
            </a>
            <a 
              href="#preorder" 
              className="px-8 py-4 rounded-xl border border-stone-300 text-stone-800 font-bold text-sm uppercase tracking-wider hover:bg-stone-100 transition-colors"
            >
              Pre-Order Loaves
            </a>
          </div>
        </div>

        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200" 
            alt="Handmade sourdough" 
            className="w-full aspect-[4/3] object-cover rounded-3xl shadow-2xl border-8 border-white"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-stone-100 max-w-xs">
            <p className="text-2xl font-serif font-bold text-emerald-950">96 Hours</p>
            <p className="text-xs text-stone-500 font-medium">Long cold fermentation for maximum flavor & nutrition</p>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24 bg-stone-100/70 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-[0.3em] text-emerald-800 block mb-2">Hearth Bakes</span>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-emerald-950">THE DAILY SELECTION</h2>
            </div>
            <div className="flex gap-2 bg-white p-1 rounded-xl border border-stone-200">
              {(['all', 'bread', 'pastry'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setSelectedCategory(tab)}
                  className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                    selectedCategory === tab ? 'bg-emerald-950 text-white' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {tab === 'all' ? 'All Bakes' : tab === 'bread' ? 'Heirloom Breads' : 'Morning Pastries'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(item => (
              <div key={item.id} className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-2xl mb-6" />
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold text-emerald-950">{item.name}</h3>
                    <span className="font-serif font-bold text-emerald-800 text-lg">${item.price}</span>
                  </div>
                  <p className="text-xs text-stone-500 font-medium mb-4">{item.description}</p>
                </div>
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span>Ferment: {item.fermentation}</span>
                  <a href="#preorder" className="font-bold text-emerald-900 hover:underline">Reserve</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-order Section */}
      <section id="preorder" className="py-24 max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200 shadow-xl">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-bold tracking-[0.3em] text-emerald-800 block mb-2">Advance Orders</span>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-emerald-950">RESERVE FOR TOMORROW</h2>
            <p className="text-stone-500 text-sm mt-2 font-serif italic">We bake limited loaves daily. Guarantee yours fresh out of the oven.</p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
              <Check className="w-10 h-10 text-emerald-700 mx-auto mb-2" />
              <h4 className="font-serif font-bold text-xl text-emerald-950">Loaf Reserved!</h4>
              <p className="text-sm text-emerald-800 mt-1">We will have your order warm and packaged waiting for your arrival.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">Your Full Name</label>
                  <input 
                    type="text" 
                    required 
                    value={preorderForm.name}
                    onChange={e => setPreorderForm({...preorderForm, name: e.target.value})}
                    placeholder="Jane Doe" 
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:border-emerald-800 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">Contact Phone</label>
                  <input 
                    type="tel" 
                    required 
                    value={preorderForm.phone}
                    onChange={e => setPreorderForm({...preorderForm, phone: e.target.value})}
                    placeholder="(555) 000-0000" 
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:border-emerald-800 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">Select Bread / Pastry</label>
                <select 
                  value={preorderForm.items}
                  onChange={e => setPreorderForm({...preorderForm, items: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:border-emerald-800 outline-none"
                >
                  {BAKERY_ITEMS.map(b => (
                    <option key={b.id} value={b.name}>{b.name} (${b.price})</option>
                  ))}
                </select>
              </div>
              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-white font-bold text-sm uppercase tracking-wider transition-colors shadow-lg mt-4"
              >
                Confirm Loaf Reservation
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-100 py-16 px-6 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-xl font-serif font-black text-white mb-2">BLOOM & BATCH</h4>
            <p className="text-xs text-emerald-300/80 leading-relaxed max-w-xs">
              Natural sourdough, heritage flour, and time-honored artisanal baking. Made for our neighbors every morning.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-white uppercase text-xs tracking-widest mb-3">Hours</h5>
            <p className="text-xs text-emerald-200">Tuesday – Sunday: 6:00 AM – 2:00 PM</p>
            <p className="text-xs text-emerald-400 mt-1">Closed Mondays for grain milling</p>
          </div>
          <div>
            <h5 className="font-bold text-white uppercase text-xs tracking-widest mb-3">Location</h5>
            <p className="text-xs text-emerald-200 flex items-center gap-2"><MapPin className="w-4 h-4" /> Port Charlotte, FL</p>
            <p className="text-xs text-emerald-200 flex items-center gap-2 mt-1"><Phone className="w-4 h-4" /> (555) BAKE-NOW</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
'''

# 3. AQUA GLOW POOL SERVICE APP CODE
AQUA_APP = '''import React, { useState } from 'react';
import { 
  Droplets, 
  Waves, 
  Sun, 
  ShieldCheck, 
  Check, 
  Phone, 
  MapPin, 
  Calendar, 
  Sparkles, 
  Star 
} from 'lucide-react';

export default function App() {
  const [booking, setBooking] = useState({ name: '', phone: '', poolType: 'chlorine', gallons: '15,000' });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <div className="min-h-screen bg-sky-950 text-white font-sans selection:bg-sky-400 selection:text-sky-950">
      {/* Top Banner */}
      <div className="bg-sky-900 border-b border-sky-800 text-sky-200 text-xs py-2 px-6 text-center font-bold tracking-wider">
        PORT CHARLOTTE & PUNTA GORDA'S #1 RATED POOL WATER CARE SPECIALISTS
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 bg-sky-950/90 backdrop-blur-md border-b border-sky-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center text-white shadow-lg shadow-sky-500/30">
              <Droplets className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-black italic tracking-tighter uppercase text-white">AQUA GLOW</span>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-sky-400">Crystal Clear Water Systems</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs uppercase font-bold tracking-widest text-sky-200">
            <a href="#services" className="hover:text-sky-400 transition-colors">Maintenance Plans</a>
            <a href="#standards" className="hover:text-sky-400 transition-colors">Water Chemistry</a>
            <a href="#reviews" className="hover:text-sky-400 transition-colors">Client Reviews</a>
            <a href="#quote" className="hover:text-sky-400 transition-colors">Free Water Test</a>
          </div>

          <a 
            href="tel:5555555555" 
            className="px-5 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-sky-950 font-black text-xs uppercase tracking-wider transition-colors shadow-lg"
          >
            Call (555) 555-5555
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2000" 
            alt="Crystal clear pool" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sky-950 via-sky-950/70 to-sky-950/90" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-900/80 border border-sky-400/40 text-sky-300 text-xs font-bold uppercase tracking-widest mb-8">
            <Sparkles className="w-4 h-4 text-sky-400" />
            STING-FREE • SPARKLING CLEAR • GUARANTEED WEEKLY CARE
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.9] mb-8 text-white">
            STOP SCRUBBING.<br />
            <span className="text-sky-400 underline decoration-sky-300 decoration-wavy decoration-2">START FLOATING.</span>
          </h1>
          <p className="text-xl text-sky-200 max-w-2xl mx-auto font-medium mb-10 leading-relaxed">
            Professional pool maintenance, automated chemical titration, and filter care for Florida homeowners. Jump into perfection every single weekend.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#quote" 
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-sky-400 hover:bg-sky-300 text-sky-950 font-black text-sm uppercase tracking-wider transition-all shadow-xl shadow-sky-500/20"
            >
              Get Free 5-Point Water Test
            </a>
            <a 
              href="#services" 
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-sky-900/60 hover:bg-sky-900 border border-sky-700 text-sky-200 font-bold text-sm uppercase tracking-wider transition-colors"
            >
              View Service Packages
            </a>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.3em] text-sky-400 block mb-2">Comprehensive Service</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white">WEEKLY POOL PLANS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "The Weekly Oasis",
              price: 149,
              desc: "Complete hands-off weekly care for standard chlorine residential pools.",
              features: [
                "Full chemical test & rebalance",
                "Surface skimming & deep floor vacuuming",
                "Wall, tile & step scrubbing",
                "Pump basket & skimmer emptying",
                "Filter pressure checks"
              ]
            },
            {
              title: "Saltwater Specialist",
              price: 179,
              popular: true,
              desc: "Specialized care designed to protect saltwater generators and prevent scaling.",
              features: [
                "All Weekly Oasis features",
                "Salt cell acid descaling",
                "Salinity ppm calibration",
                "Zinc anode corrosion inspection",
                "Water softening & stabilizer buffering"
              ]
            },
            {
              title: "Green-to-Clean Rescue",
              price: 299,
              desc: "Emergency 48-hour shock and algae purge to turn cloudy green pools sparkling.",
              features: [
                "Triple hyper-chlorination shock",
                "Flocculant clarifier treatment",
                "Heavy debris extraction",
                "Complete filter cartridge acid wash",
                "72-hour clarity guarantee"
              ]
            }
          ].map((plan, i) => (
            <div 
              key={i} 
              className={`p-8 rounded-3xl border flex flex-col justify-between ${
                plan.popular 
                  ? 'bg-sky-900/50 border-sky-400 shadow-2xl shadow-sky-500/20' 
                  : 'bg-sky-900/20 border-sky-800'
              }`}
            >
              <div>
                {plan.popular && (
                  <span className="px-3 py-1 rounded-full bg-sky-400 text-sky-950 font-black text-[10px] uppercase tracking-widest mb-4 inline-block">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-black uppercase text-white mb-2">{plan.title}</h3>
                <p className="text-xs text-sky-300 font-medium mb-6">{plan.desc}</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-black text-sky-400 font-mono">${plan.price}</span>
                  <span className="text-xs text-sky-300">/ month</span>
                </div>
                <ul className="space-y-3 mb-8 text-xs text-sky-200">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a 
                href="#quote" 
                className="w-full py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-sky-950 font-black text-xs uppercase tracking-wider transition-colors text-center"
              >
                Select Plan
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Request */}
      <section id="quote" className="py-24 bg-sky-900/40 border-t border-sky-800">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-sky-950 p-8 md:p-12 rounded-3xl border border-sky-800 shadow-2xl">
            <h3 className="text-3xl font-black uppercase text-white text-center mb-2">SCHEDULE YOUR FREE WATER TEST</h3>
            <p className="text-xs text-sky-300 text-center mb-8">We will test your pH, chlorine, and stabilizer levels on site at zero charge.</p>

            {success ? (
              <div className="p-6 rounded-2xl bg-sky-900 border border-sky-400 text-center">
                <Check className="w-8 h-8 text-sky-300 mx-auto mb-2" />
                <h4 className="font-bold text-white">Water Test Request Received!</h4>
                <p className="text-xs text-sky-200 mt-1">Our lead technician will text you to confirm your time window.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    required 
                    value={booking.name}
                    onChange={e => setBooking({...booking, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-sky-900/50 border border-sky-700 text-white text-sm focus:border-sky-400 outline-none"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    required 
                    value={booking.phone}
                    onChange={e => setBooking({...booking, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-sky-900/50 border border-sky-700 text-white text-sm focus:border-sky-400 outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select 
                    value={booking.poolType}
                    onChange={e => setBooking({...booking, poolType: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-sky-900/50 border border-sky-700 text-white text-sm focus:border-sky-400 outline-none"
                  >
                    <option value="chlorine">Traditional Chlorine Pool</option>
                    <option value="saltwater">Saltwater Chlorine Generator</option>
                    <option value="spa">Pool + Attached Spa</option>
                  </select>
                  <select 
                    value={booking.gallons}
                    onChange={e => setBooking({...booking, gallons: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-sky-900/50 border border-sky-700 text-white text-sm focus:border-sky-400 outline-none"
                  >
                    <option value="10000">Small Pool (approx 10,000 gal)</option>
                    <option value="15000">Medium Pool (approx 15,000 gal)</option>
                    <option value="25000">Large Estate Pool (25,000+ gal)</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-4 rounded-xl bg-sky-400 hover:bg-sky-300 text-sky-950 font-black text-sm uppercase tracking-wider transition-colors shadow-lg"
                >
                  Book Free Water Check
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-sky-900 text-xs text-sky-400 text-center">
        <p className="font-bold text-white mb-2">AQUA GLOW POOL SERVICES</p>
        <p>Serving Charlotte County, Sarasota, and surrounding Florida Gulf communities.</p>
        <p className="mt-2 text-sky-500">© 2026 Aqua Glow. Licensed & Insured Pool Contractor.</p>
      </footer>
    </div>
  );
}
'''

# 4. SPARKLE FRESH CLEANING APP CODE
SPARKLE_APP = '''import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Star, 
  Home, 
  Clock, 
  Phone, 
  MapPin, 
  Calendar, 
  Check 
} from 'lucide-react';

export default function App() {
  const [bedrooms, setBedrooms] = useState(3);
  const [bathrooms, setBathrooms] = useState(2);
  const [frequency, setFrequency] = useState<'weekly' | 'biweekly' | 'onetime'>('biweekly');
  const [addons, setAddons] = useState<{ [key: string]: boolean }>({ oven: false, fridge: false, windows: false });
  const [submitted, setSubmitted] = useState(false);
  const [contact, setContact] = useState({ name: '', phone: '' });

  // Calculation logic
  const baseRate = 90 + (bedrooms * 20) + (bathrooms * 25);
  const addonCost = (addons.oven ? 35 : 0) + (addons.fridge ? 30 : 0) + (addons.windows ? 45 : 0);
  const rawTotal = baseRate + addonCost;
  const discountMultiplier = frequency === 'weekly' ? 0.8 : frequency === 'biweekly' ? 0.85 : 1.0;
  const estimatedTotal = Math.round(rawTotal * discountMultiplier);

  const toggleAddon = (key: string) => {
    setAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4500);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-400 selection:text-stone-950">
      {/* Top Banner */}
      <div className="bg-stone-950 text-stone-200 text-xs py-2 px-6 text-center font-bold tracking-wider">
        EXPERIENCE THE FRESH HOME RESET • INSURED, BONDED & 100% BACKGROUND-CHECKED
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-stone-950 shadow-md">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-stone-950">SPARKLE FRESH</span>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-amber-600">Home Cleaning & Sanctuary</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs uppercase font-bold tracking-widest text-stone-600">
            <a href="#calculator" className="hover:text-stone-950 transition-colors">Instant Quote</a>
            <a href="#team" className="hover:text-stone-950 transition-colors">The Team of Three</a>
            <a href="#checklist" className="hover:text-stone-950 transition-colors">Room Checklist</a>
            <a href="#reviews" className="hover:text-stone-950 transition-colors">Client Reviews</a>
          </div>

          <a 
            href="#calculator" 
            className="px-5 py-2.5 rounded-full bg-stone-950 hover:bg-amber-400 hover:text-stone-950 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            Calculate Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-widest mb-6">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            VETTED RESIDENTIAL CLEANING SPECIALISTS
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-stone-950 leading-[0.95] tracking-tight mb-8">
            BREATHE EASY IN A TRULY <span className="text-amber-500 underline decoration-stone-950 decoration-wavy decoration-2">CLEAN HOME.</span>
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed mb-10 max-w-lg">
            We don't just 'tidy up'. Our dedicated 3-person team cleans baseboards, degreases kitchen tile, disinfects bathrooms, and gives you back your weekends.
          </p>
          <div className="flex gap-4">
            <a 
              href="#calculator" 
              className="px-8 py-4 rounded-xl bg-stone-950 text-white font-bold text-sm uppercase tracking-wider hover:bg-amber-400 hover:text-stone-950 transition-colors shadow-lg"
            >
              Instant Rate Calculator
            </a>
            <a 
              href="#team" 
              className="px-8 py-4 rounded-xl border border-stone-300 text-stone-800 font-bold text-sm uppercase tracking-wider hover:bg-stone-100 transition-colors"
            >
              Our Method
            </a>
          </div>
        </div>

        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200" 
            alt="Spotless living room" 
            className="w-full aspect-[4/3] object-cover rounded-3xl shadow-2xl border-8 border-white"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-stone-100 max-w-xs">
            <p className="text-2xl font-black text-stone-950">50-Point</p>
            <p className="text-xs text-stone-500 font-medium">Standardized inspection checklist completed every clean</p>
          </div>
        </div>
      </section>

      {/* Interactive Calculator */}
      <section id="calculator" className="py-24 bg-stone-100/70 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200 shadow-xl">
            <div className="text-center mb-10">
              <span className="text-xs uppercase font-bold tracking-[0.3em] text-amber-600 block mb-2">Transparent Pricing</span>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-stone-950">INSTANT ESTIMATE CALCULATOR</h2>
              <p className="text-stone-500 text-sm mt-1">Select your home size and preferred frequency for a live quote.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                  Bedrooms: <span className="text-stone-950 text-sm font-black">{bedrooms}</span>
                </label>
                <input 
                  type="range" 
                  min="1" 
                  max="6" 
                  value={bedrooms}
                  onChange={e => setBedrooms(Number(e.target.value))}
                  className="w-full accent-amber-500 h-2 bg-stone-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-400 mt-1 font-bold">
                  <span>1 Bed</span>
                  <span>3 Bed</span>
                  <span>6 Bed</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                  Bathrooms: <span className="text-stone-950 text-sm font-black">{bathrooms}</span>
                </label>
                <input 
                  type="range" 
                  min="1" 
                  max="5" 
                  value={bathrooms}
                  onChange={e => setBathrooms(Number(e.target.value))}
                  className="w-full accent-amber-500 h-2 bg-stone-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-400 mt-1 font-bold">
                  <span>1 Bath</span>
                  <span>3 Bath</span>
                  <span>5 Bath</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">Frequency</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { key: 'weekly', label: 'Weekly', tag: '20% OFF' },
                  { key: 'biweekly', label: 'Bi-Weekly', tag: '15% OFF' },
                  { key: 'onetime', label: 'One-Time', tag: 'Standard' }
                ].map(item => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setFrequency(item.key as any)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      frequency === item.key 
                        ? 'bg-stone-950 text-white border-stone-950 shadow-md' 
                        : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <p className="font-bold text-xs uppercase">{item.label}</p>
                    <p className={`text-[10px] mt-0.5 ${frequency === item.key ? 'text-amber-400' : 'text-stone-500'}`}>{item.tag}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">Optional Add-ons</label>
              <div className="grid grid-cols-3 gap-3 text-xs">
                {[
                  { key: 'oven', label: 'Oven Deep Clean (+$35)' },
                  { key: 'fridge', label: 'Inside Fridge (+$30)' },
                  { key: 'windows', label: 'Interior Glass (+$45)' }
                ].map(opt => (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => toggleAddon(opt.key)}
                    className={`p-3 rounded-xl border text-center font-bold transition-all ${
                      addons[opt.key] 
                        ? 'bg-amber-100 border-amber-400 text-amber-950 shadow-xs' 
                        : 'bg-stone-50 border-stone-200 text-stone-600'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-stone-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-stone-400 block font-bold">Estimated Rate</span>
                <span className="text-4xl font-black text-amber-400 font-mono">${estimatedTotal}</span>
                <span className="text-xs text-stone-400 ml-2">/ visit</span>
              </div>

              {submitted ? (
                <div className="text-right">
                  <p className="font-bold text-amber-400 text-sm">Quote Submitted!</p>
                  <p className="text-xs text-stone-300">We will call you within 15 minutes to lock in your date.</p>
                </div>
              ) : (
                <form onSubmit={handleBooking} className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <input 
                    type="tel" 
                    placeholder="Your Phone Number" 
                    required 
                    value={contact.phone}
                    onChange={e => setContact({...contact, phone: e.target.value})}
                    className="px-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs focus:border-amber-400 outline-none"
                  />
                  <button 
                    type="submit" 
                    className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                  >
                    Book This Rate
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* The Team of Three */}
      <section id="team" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.3em] text-amber-600 block mb-2">Our Methodology</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-stone-950">THE TEAM OF THREE</h2>
          <p className="text-stone-500 text-sm mt-2">Every home visit is staffed by three dedicated specialists working in sync.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { num: "01", title: "The Visual Lead", desc: "Focuses on surface resets, decluttering, straightening cushions, making beds, and creating neat, tranquil spaces." },
            { num: "02", title: "The Detail Specialist", desc: "Attacks baseboards, ceiling fans, light fixtures, door frames, switch plates, and hard-to-reach dust traps." },
            { num: "03", title: "The Sanitary Pro", desc: "Hospital-grade disinfection of all wet areas: deep scrubbing showers, polishing chrome, and degreasing stovetops." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm">
              <span className="text-4xl font-black text-amber-400 font-mono block mb-4">{item.num}</span>
              <h3 className="text-xl font-bold uppercase text-stone-950 mb-3">{item.title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16 px-6 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-xl font-black text-white mb-2">SPARKLE FRESH</h4>
            <p className="text-xs leading-relaxed max-w-xs">
              Boutique residential cleaning company treating your home as a sanctuary. Eco-friendly cleaning solutions upon request.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-white uppercase text-xs tracking-widest mb-3">Service Areas</h5>
            <p className="text-xs">Port Charlotte, Punta Gorda, Englewood, North Port, Venice.</p>
          </div>
          <div>
            <h5 className="font-bold text-white uppercase text-xs tracking-widest mb-3">Contact</h5>
            <p className="text-xs text-stone-300 flex items-center gap-2"><Phone className="w-4 h-4" /> (555) 555-5555</p>
            <p className="text-xs text-stone-300 flex items-center gap-2 mt-1"><MapPin className="w-4 h-4" /> Charlotte County, FL</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
'''

# Write full apps to tmp_packages
projects_data = [
    ('Pizza', 'Pizza Prime & Slices', PIZZA_APP),
    ('Bloom', 'Bloom & Batch Artisanal Bakery', BLOOM_APP),
    ('Aqua', 'Aqua Glow Pool Service', AQUA_APP),
    ('Sparkle', 'Sparkle Fresh Home Cleaning', SPARKLE_APP)
]

for folder_name, page_title, app_content in projects_data:
    target_dir = os.path.join(BUILD_TMP, folder_name)
    os.makedirs(os.path.join(target_dir, 'src'), exist_ok=True)
    with open(os.path.join(target_dir, 'package.json'), 'w') as f:
        f.write(get_pkg_json(folder_name.lower()))
    with open(os.path.join(target_dir, 'vite.config.ts'), 'w') as f:
        f.write(get_vite_config())
    with open(os.path.join(target_dir, 'index.html'), 'w') as f:
        f.write(get_html(page_title))
    with open(os.path.join(target_dir, 'src', 'main.tsx'), 'w') as f:
        f.write(get_main_tsx())
    with open(os.path.join(target_dir, 'src', 'App.tsx'), 'w') as f:
        f.write(app_content)

# Zip everything into master my_sites.zip and individual zips
print("Creating Master ZIP...")
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

# Also create individual zips
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

print("ALL FULL APPS PACKAGED SUCCESSFULLY!")
