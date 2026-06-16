import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Printer, 
  FileText, 
  Sparkles, 
  Plus, 
  Trash2, 
  Scissors, 
  Wrench, 
  Cake, 
  Pizza, 
  Tractor, 
  RefreshCw,
  HelpCircle,
  ClipboardList,
  Waves
} from 'lucide-react';
import { cn } from '../utils';

// Types for Document Template
interface PrintableItem {
  id: string;
  title: string;
  subtitle?: string;
  detail?: string; // price, description, etc.
}

interface DocumentTemplate {
  id: string;
  brandName: string;
  themeColor: string;
  fontFamily: string;
  title: string;
  subtitle: string;
  footer: string;
  items: PrintableItem[];
}

// Default pre-populated templates for the 5 businesses
const DEFAULT_TEMPLATES: Record<string, Record<string, DocumentTemplate>> = {
  'dans-lawn-care': {
    rules: {
      id: 'lawn-rules',
      brandName: "Dan's Lawn Care",
      themeColor: '#064e3b', // emerald-950
      fontFamily: 'serif',
      title: 'Our Service Guidelines',
      subtitle: 'Healthy lawns and happy yards begin with simple ground rules.',
      footer: 'Thank you for your business! Text Dan at (555) 123-4567 with any questions.',
      items: [
        { id: '1', title: 'Unlocked Gates', detail: 'Please ensure backyard gates are unlocked on your scheduled morning so I can access the lawn without delays.' },
        { id: '2', title: 'Pets Indoors', detail: 'For safety, please keep dogs and other pets inside during our mowing visits.' },
        { id: '3', title: 'Clear Lawn of Toys', detail: 'Kindly pick up dog toys, garden hoses, and heavy yard debris before our arrival to avoid equipment damage.' },
        { id: '4', title: 'Rain Days', detail: 'In case of active heavy rainfall, your service is deferred to the next day as mowing wet sod can damage grass beds.' }
      ]
    },
    menu: {
      id: 'lawn-services',
      brandName: "Dan's Lawn Care",
      themeColor: '#047857', // emerald-700
      fontFamily: 'sans',
      title: 'Standard Mowing Services & Cleanups',
      subtitle: 'Flat-rate neighborhood care. Simple and honest pricing.',
      footer: 'No contracts, pause anytime. Contact Dan for customized flowerbed care.',
      items: [
        { id: '1', title: 'Standard Lot Mowing', detail: 'Starting at $45', subtitle: 'Includes standard mowing, custom edge trimming, and sidewalk leaf blowing.' },
        { id: '2', title: 'Overgrown Cleanup', detail: 'Starting at $120', subtitle: 'First-time treatment for taller grass. Restores edges and removes dense piles.' },
        { id: '3', title: 'Spring Mulch Refresh', detail: '$200 + materials', subtitle: 'Hand-weed beds, install premium pine straw or organic brown hardwood mulch.' }
      ]
    },
    faq: {
      id: 'lawn-faq',
      brandName: "Dan's Lawn Care",
      themeColor: '#0f5132',
      fontFamily: 'serif',
      title: 'Yard Care Frequently Asked Questions',
      subtitle: 'Clear, straightforward answers about our neighborhood service.',
      footer: 'Have an extraordinary yard challenge? Let\'s discuss and get it done!',
      items: [
        { id: '1', title: 'How often do you come?', detail: 'Typically once a week from April through October, and bi-weekly during cooler winter months when growth slows.' },
        { id: '2', title: 'How do I pay you?', detail: 'We accept digital cash transfers, credit cards, or invoices via email. Payments are due within 48 hours of service.' },
        { id: '3', title: 'Do I need to be home?', detail: 'No. As long as your backyard gate is accessible, we do the job and text you a picture of the finished yard!' }
      ]
    }
  },
  'handyman': {
    rules: {
      id: 'handy-rules',
      brandName: 'Fixit Sam Repairs',
      themeColor: '#dc2626', // red-600
      fontFamily: 'mono',
      title: 'Fair Booking Agreement',
      subtitle: 'Clear boundaries for smooth local repairs.',
      footer: 'Let\'s fix it right. Call Sam: (555) 012-3456.',
      items: [
        { id: '1', title: 'Minimum Service Order', detail: 'We carry a minimum dispatch/service call fee of $65 which covers the first 45 minutes of minor troubleshooting.' },
        { id: '2', title: 'Material Approvals', detail: 'Any material hardware costs (mounting brackets, specialized light dimmers) are pre-cleared with clients before purchase.' },
        { id: '3', title: 'Hazmat Restrictions', detail: 'Sam acts as a light general repair specialist. I do not touch active sewage lines or gas pipes due to code regulations.' }
      ]
    },
    menu: {
      id: 'handy-rates',
      brandName: 'Fixit Sam Repairs',
      themeColor: '#18181b', // zinc-900
      fontFamily: 'mono',
      title: 'Flat-Rate Service List',
      subtitle: 'Clear, transparent pricing for common home repairs.',
      footer: 'Materials are calculated separately on the absolute cost without markup.',
      items: [
        { id: '1', title: 'TV Wall Mounting', detail: '$85 / screen', subtitle: 'We level, secure to wood/metal studs, and route wire cables cleanly.' },
        { id: '2', title: 'Ceiling Fan Replacement', detail: '$110 / fixture', subtitle: 'Disassembly of old fans, structural junction box checks, and safe balance setup.' },
        { id: '3', title: 'Faucet & Sink Upgrade', detail: '$130 / unit', subtitle: 'Removing old fixtures, dry matching threads, and brand new braided high-durability supply lines.' },
        { id: '4', title: 'Drywall Hole Patching', detail: '$75 / patch', subtitle: 'Applying fiber mesh, durable fast-drying joint compounds, and professional hand-texture match.' }
      ]
    },
    faq: {
      id: 'handy-faq',
      brandName: 'Fixit Sam Repairs',
      themeColor: '#b91c1c',
      fontFamily: 'sans',
      title: 'Handyman Fix list FAQ',
      subtitle: 'Everything you need to know about preparing for work days.',
      footer: 'Serving clients since 2012. Trusted, local, and fully accredited.',
      items: [
        { id: '1', title: 'Are you fully insured?', detail: 'Yes, I carry comprehensive property and general liability coverage to keep your home protected.' },
        { id: '2', title: 'Do you buy the parts/appliances?', detail: 'You can purchase fixtures ahead of time (e.g. at Home Depot) or I can pick them up for you. Pick-up times are calculated as standard helper time.' },
        { id: '3', title: 'What if a repair fails later?', detail: 'We proudly support our local neighbors. All custom physical repairs carry a 1-year guarantee. If it breaks, I come fix it free.' }
      ]
    }
  },
  'bakery': {
    rules: {
      id: 'bakery-rules',
      brandName: 'Bloom & Batch',
      themeColor: '#065f46', // emerald-800
      fontFamily: 'serif',
      title: 'Pre-Order Sourdough Rules',
      subtitle: 'Slow bread takes time. Please read our pre-order conditions carefully.',
      footer: 'Crafted with heirloom cultures in North Carolina. Thank you for baking with us!',
      items: [
        { id: '1', title: '48-Hour Notice', detail: 'Our starters are activated in cycles. Pre-orders must be submitted before 4 PM, windowing 48 hours for flour hydration.' },
        { id: '2', title: 'Pick-Up Hours', detail: 'Fresh loaves must be claimed between 7:30 AM and 1:00 PM on your selected day. Uncollected bakes are donated to our local pantry.' },
        { id: '3', title: 'Allergen Advisory', detail: 'Our kitchen processes walnuts, wheat grains, and local organic honey. Total cross-contamination prevention is not guaranteed.' }
      ]
    },
    menu: {
      id: 'bakery-menu',
      brandName: 'Bloom & Batch',
      themeColor: '#059669',
      fontFamily: 'serif',
      title: 'The Sourdough Card',
      subtitle: 'Baked stone-hot on local hearths. Slow, golden, non-GMO.',
      footer: 'Always artisan. Grains sourced from family farms in NC.',
      items: [
        { id: '1', title: 'Country Classic Loaf', detail: '$9.50', subtitle: 'A crisp golden-dark crust with an airy crumb made from 100% stoneground whole wheat.' },
        { id: '2', title: 'Olive & Rosemary Boule', detail: '$11.00', subtitle: 'Infused with cold-pressed olive oils, cured Kalamata olives, and hand-rubbed rosemary spikes.' },
        { id: '3', title: 'Toasted Walnut & Honey Log', detail: '$12.00', subtitle: 'A sweeter heritage flour selection packed with premium buttery wood-fired California walnuts.' },
        { id: '4', title: 'Cranberry Pecan Round', detail: '$11.50', subtitle: 'Rich, dynamic bread containing tart wild dried berries and raw roasted golden pecans.' }
      ]
    },
    faq: {
      id: 'bakery-faq',
      brandName: 'Bloom & Batch',
      themeColor: '#047857',
      fontFamily: 'sans',
      title: 'Our Natural Leaven Sourdough FAQ',
      subtitle: 'Answers to help you store, serve, and enjoy your organic loaves.',
      footer: 'Bloom & Batch Artisan Bakery — Keeping bread simple.',
      items: [
        { id: '1', title: 'How do I store my sourdough?', detail: 'Never refrigerate sourdough! Store cut-side flat in a brown paper bag or wrap loosely in dry beeswax cloth for up to 5 days.' },
        { id: '2', title: 'Do you offer gluten-free bread?', detail: 'No. True sourdough is wheat-based. However, our long, slow 48-hour fermentation pre-digests gluten, making it much gentler for sensitive digestions.' },
        { id: '3', title: 'Can I freeze the loaves?', detail: 'Yes! Slice the bread first, freeze in an airtight bag, and toast from frozen relative to instant morning convenience.' }
      ]
    }
  },
  'pet-grooming': {
    rules: {
      id: 'grooming-rules',
      brandName: 'Paws & Pamper',
      themeColor: '#6d28d9', // violet-700
      fontFamily: 'sans',
      title: 'Salon Health & Safety Rules',
      subtitle: 'Ensuring a safe, calming, tick-free zone for our sweet neighborhood guests.',
      footer: 'Questions? Reach our front desk at (555) 789-0123.',
      items: [
        { id: '1', title: 'Vaccine Certificates Required', detail: 'All canine visitors must hold up-to-date proof of Rabies, DHPP, and Bordetella vaccines at check-in.' },
        { id: '2', title: 'Flea & Tick Protocol', detail: 'If live fleas are surfaced during bathing, we instantly perform an organic citrus flea rinse ($20) to prevent room transmission.' },
        { id: '3', title: 'Cancellation Rules', detail: 'Please let us know at least 24 hours prior to your slot. No-shows are charged a $35 booking retention fee.' }
      ]
    },
    menu: {
      id: 'grooming-services',
      brandName: 'Paws & Pamper',
      themeColor: '#5b21b6',
      fontFamily: 'sans',
      title: 'Spa Options & Treatment Cards',
      subtitle: 'Organic botanicals & stress-free hand styling.',
      footer: 'Rates fluctuate lightly depending on dog mass and coat matting.',
      items: [
        { id: '1', title: 'The Paws Classic Wash', detail: '$55 - $85', subtitle: 'Double shampooing, lavender botanical conditioning, safe fluff dry, ear cleansing, and nail trim.' },
        { id: '2', title: 'The Royal Pamper Trim', detail: '$90 - $140', subtitle: 'Includes the classic bath plus customized hand-scissoring, paw-pad beeswax therapy, and tooth brushing.' },
        { id: '3', title: 'Therapeutic Oatmeal Soaking', detail: '+$20 upgrade', subtitle: 'Targeted skin treatment specifically formulated for dry, flaky, or seasonally irritated canine skins.' }
      ]
    },
    faq: {
      id: 'grooming-faq',
      brandName: 'Paws & Pamper',
      themeColor: '#7c3aed',
      fontFamily: 'serif',
      title: 'Pet Grooming & Stress FAQ',
      subtitle: 'Helping you prepare your companion for their relaxing day here.',
      footer: 'Pet Comfort First — Modern care for our beautiful fur families.',
      items: [
        { id: '1', title: 'How long does a session take?', detail: 'Normally 2 to 3 hours. We focus on natural air drying methods and calm pauses to ensure a zero-trauma, serene experience.' },
        { id: '2', title: 'Do you put dogs in crates?', detail: 'No. Paws & Pamper uses small designated open pens with soft cloud-mats. Dogs remain free of tight dark wire cages throughout.' },
        { id: '3', title: 'Can I stay and watch the cut?', detail: 'We recommend drop-offs. Dogs behave differently, and sometimes display hyper-excitement or protector instincts if dynamic owners are visible.' }
      ]
    }
  },
  'pizza-shop': {
    rules: {
      id: 'pizza-rules',
      brandName: 'Pizza Prime Fire-Pies',
      themeColor: '#ea580c', // orange-600
      fontFamily: 'mono',
      title: 'Pizza Prime Ordering Guidelines',
      subtitle: 'Woodfire guidelines for peak slice freshness.',
      footer: 'Hot pizza is a serious matter. (555) 012-3456.',
      items: [
        { id: '1', title: '900° Neapolitan Slice Limit', detail: 'Because authentic Neapolitan style dough is extremely thin and moist, we slice fire-pies only upon immediate request to prevent sogginess.' },
        { id: '2', title: 'Delivery Distances', detail: 'We deliver within a precise 4-mile radius. Any delivery further than 4 miles cools down below our quality threshold!' },
        { id: '3', title: 'Call-in Holding Limits', detail: 'Unclaimed warm orders are held in our ceramic brick hotbox for up to 30 minutes, then reheated and served at our takeaway counter.' }
      ]
    },
    menu: {
      id: 'pizza-menu',
      brandName: 'Pizza Prime Fire-Pies',
      themeColor: '#c2410c',
      fontFamily: 'sans',
      title: 'Blistering Woodfire Menu',
      subtitle: '90-second lava-bakes. Double-zero grain crust, hand-shaved cheeses.',
      footer: 'Dine-In, Pick-up, or Hotline Delivery.',
      items: [
        { id: '1', title: 'Margherita Prime', detail: '$15.00', subtitle: 'Imported San Marzano tomatoes, fresh pulled buffalo mozzarella, sweet garden basil leaf, and cold-pressed olive oils.' },
        { id: '2', title: 'Diavola Hot Sauce Pie', detail: '$18.50', subtitle: 'Crushed spicy Calabrian salami, red pepper seed flakes, fresh shredded mozzarella, and raw local honey glaze.' },
        { id: '3', title: 'Wild Porcini & Rosemary', detail: '$19.00', subtitle: 'White base (no sauce), roasted fresh wood-mushrooms, shaved mild fontina cheese, rosemary spike, and white truffle emulsion.' },
        { id: '4', title: 'Prosciutto Arugula Round', detail: '$19.50', subtitle: 'Red base topped post-bake with 24-month cured prosciutto, peppery baby organic wild arugula, and shaved aged parmigiano.' }
      ]
    },
    faq: {
      id: 'pizza-faq',
      brandName: 'Pizza Prime',
      themeColor: '#9a3412',
      fontFamily: 'sans',
      title: 'The Italian Neapolitan Fire FAQ',
      subtitle: 'Why we do things differently for our classic pies.',
      footer: 'Est. 2018 in Florida. Blistered to raw perfection.',
      items: [
        { id: '1', title: 'What are those dark burnt spots?', detail: 'This is called "leopard spotting." It is the signature of high-temperature woodfire baking at 900°F. It provides flavor, crunch, and authentic quality!' },
        { id: '2', title: 'Do you offer vegan dairy substitutes?', detail: 'Yes! We carry artisan cashew-based vegan mozzarella that melts beautifully under high direct heat, available on any pie choice.' },
        { id: '3', title: 'Why is the center soft?', detail: 'Traditional Neapolitan pizza has a very soft, moist center. We recommend eating it folded "a portafoglio" (wallet style) or with a fork and knife like they do in Naples.' }
      ]
    }
  },
  'pool-service': {
    rules: {
      id: 'pool-rules',
      brandName: 'Aqua Glow Pool Service',
      themeColor: '#0ea5e9',
      fontFamily: 'sans',
      title: 'Our Clean Water Guidelines',
      subtitle: 'Guidelines for safe, beautiful, zero-effort pool ownership.',
      footer: 'Questions? Reach our service desk at (555) 012-POOL.',
      items: [
        { id: '1', title: 'Open Pool Access', detail: 'Ensure backyard gates are unlocked and any pets are safely kept indoors on your scheduled service mornings.' },
        { id: '2', title: 'Water Level Check', detail: 'Please maintain pool water level at the midpoint of the skimmer opening to ensure continuous filtration system operation.' },
        { id: '3', title: 'After-Shock Rest', detail: 'For safety, please wait at least 4 hours after a heavy chemical shock treatment before jumping into the pool.' }
      ]
    },
    menu: {
      id: 'pool-rates',
      brandName: 'Aqua Glow Pool Service',
      themeColor: '#0284c7',
      fontFamily: 'sans',
      title: 'Pool Service Packages',
      subtitle: 'Crystal clear waters with absolute peace of mind.',
      footer: 'Service visits occur weekly. Extra charges may apply for storm-debris cleanups.',
      items: [
        { id: '1', title: 'Chemical Protection', detail: '$95 / month', subtitle: 'Weekly water testing, chemical balancing, and chemical supply replenishment.' },
        { id: '2', title: 'Full Diamond Care', detail: '$165 / month', subtitle: 'Includes chemical balancing, wall brushing, basket skims, floor vacuuming, and filter checks.' },
        { id: '3', title: 'Algae Revival Treatment', detail: '$120 - $250', subtitle: 'Full green-to-blue shock therapy, dual filter cleans, and chemical stabilizer boost.' }
      ]
    },
    faq: {
      id: 'pool-faq',
      brandName: 'Aqua Glow Pool Service',
      themeColor: '#0ea5e9',
      fontFamily: 'serif',
      title: 'Residential Pool Care FAQ',
      subtitle: 'Answers to ensure healthy, safe waters for your family year-round.',
      footer: 'Aqua Glow Pool Service — Perfect water, zero effort.',
      items: [
        { id: '1', title: 'Why is my pool water cloudy?', detail: 'This typically indicates poor chemical filtration or unbalanced pH levels. We test pressure values first and perform backwashing if flow rates drop.' },
        { id: '2', title: 'How often should the filter be cleaned?', detail: 'We inspect filters weekly and perform complete cartridge cleanings or sand backwashes roughly every 4 to 6 weeks for optimal flow.' },
        { id: '3', title: 'Do you charge extra for summer storm prep?', detail: 'Standard leaf skimming is included in weekly packages. Severe hurricanes or tropical storms requiring heavy manual vacuuming are quoted on dispatch.' }
      ]
    }
  },
  'housecleaner': {
    rules: {
      id: 'cleaning-rules',
      brandName: 'Sparkle Fresh Home Cleaning',
      themeColor: '#facc15',
      fontFamily: 'sans',
      title: 'Our Cleaning Standards',
      subtitle: 'Respecting your beautiful home and maximizing physical clarity.',
      footer: 'Serving Charlotte County. Sparkle Fresh — Breathe easy.',
      items: [
        { id: '1', title: 'Lockbox & Access Keys', detail: 'Please provide a secure lockbox code or key entry coordinate to ensure our helpers can access your site smoothly.' },
        { id: '2', title: 'Tidy-Up Separation', detail: 'To ensure efficient sanitization, kindly clear main floors of personal documents, clothing pile clusters, and loose toys.' },
        { id: '3', title: 'Pet Companion Policy', detail: 'Pets should be locked or kept comfortable in designated rooms to avoid distress during dry/vacuuming runs.' }
      ]
    },
    menu: {
      id: 'cleaning-menu',
      brandName: 'Sparkle Fresh Home Cleaning',
      themeColor: '#cab014',
      fontFamily: 'sans',
      title: 'Home Cleaning Service Card',
      subtitle: 'Clear, simple flat-rates for meticulous residential care.',
      footer: 'All packages include certified bio-safe botanicals. Custom hours available.',
      items: [
        { id: '1', title: 'Total House Clean', detail: 'Starting at $140', subtitle: 'Comprehensive refresh of all bedrooms, public living spaces, kitchen counters, and full baths.' },
        { id: '2', title: 'Deep Clean Upgrade', detail: 'Starting at $260', subtitle: 'Includes standard clean plus detailed baseboards, interior windows, oven interiors, and vents.' },
        { id: '3', title: 'Move-In / Move-Out', detail: 'Starting at $350', subtitle: 'Deep clean targeting raw shelf linings, cabinet tracks, baseboard molds, and full appliance sanitizations.' }
      ]
    },
    faq: {
      id: 'cleaning-faq',
      brandName: 'Sparkle Fresh Home Cleaning',
      themeColor: '#eab308',
      fontFamily: 'serif',
      title: 'Home Care & Cleaning FAQ',
      subtitle: 'Answers to help you prepare your family space for cleaning days.',
      footer: 'Breathe easy in a truly clean environment.',
      items: [
        { id: '1', title: 'What products do you use?', detail: 'We proudly use certified non-toxic, pet-friendly, organic herbal extracts that are safe for allergy-prone lungs.' },
        { id: '2', title: 'Do I need to leave my house?', detail: 'It is entirely up to you. Many clients find it easiest to let us clean during work/school hours so they can return to a fresh sanctuary.' },
        { id: '3', title: 'What is your satisfaction guarantee?', detail: 'We target complete precision. If you notice any skipped corner or smudge, notify us within 24 hours and we return to reclean it free.' }
      ]
    }
  }
};

export default function PrintableStudio() {
  const [activeBusiness, setActiveBusiness] = useState<string>('dans-lawn-care');
  const [docType, setDocType] = useState<'rules' | 'menu' | 'faq'>('menu');
  const [fontSelected, setFontSelected] = useState<string>('serif');

  // Load appropriate dynamic template from our presets
  const currentTemplate = DEFAULT_TEMPLATES[activeBusiness]?.[docType];

  // Editable fields states (managed locally so users can tweak instantly!)
  const [editableTitle, setEditableTitle] = useState<string>('');
  const [editableSub, setEditableSub] = useState<string>('');
  const [editableFooter, setEditableFooter] = useState<string>('');
  const [editableColor, setEditableColor] = useState<string>('');
  const [itemsList, setItemsList] = useState<PrintableItem[]>([]);

  // Synchronize component state whenever business or doctype modifications occur
  React.useEffect(() => {
    if (currentTemplate) {
      setEditableTitle(currentTemplate.title);
      setEditableSub(currentTemplate.subtitle);
      setEditableFooter(currentTemplate.footer);
      setEditableColor(currentTemplate.themeColor);
      setItemsList([...currentTemplate.items]);
      setFontSelected(currentTemplate.fontFamily);
    }
  }, [activeBusiness, docType]);

  // Method to handle item updates
  const handleUpdateItem = (id: string, field: 'title' | 'detail' | 'subtitle', value: string) => {
    setItemsList(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    }));
  };

  // Method to add new blank line item
  const handleAddItem = () => {
    const newItem: PrintableItem = {
      id: Date.now().toString(),
      title: 'New Custom Entry Item',
      subtitle: 'Optional description or detail line',
      detail: '$0.00 or Detail Text'
    };
    setItemsList(prev => [...prev, newItem]);
  };

  // Method to delete a line item
  const handleDeleteItem = (id: string) => {
    setItemsList(prev => prev.filter(item => item.id !== id));
  };

  // Trigger print logic
  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="pdf-studio-container" className="w-full bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] overflow-hidden shadow-sm">
      {/* Header bar */}
      <div className="p-8 bg-zinc-900 text-white border-b border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4 print:hidden">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Printable PDF Document Studio (Test Tool)
          </span>
          <h3 className="text-2xl font-bold tracking-tight">Paper & Print Boutique Prototype</h3>
          <p className="text-zinc-400 text-sm mt-1">
            Build rapid menus, handbooks, and lists. Customize copy instantly, then click Print to save as elegant high-contrast PDFs with zero credit consumption.
          </p>
        </div>
        <button
          onClick={handlePrint}
          className="px-6 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-lg transition-all rounded-xl cursor-pointer shrink-0"
        >
          <Printer className="w-4 h-4" /> Print / Save PDF
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[640px] print:grid-cols-1 print:block">
        {/* Left Side: Setup Controls panel (hidden on print!) */}
        <div className="lg:col-span-5 p-8 bg-zinc-100/50 dark:bg-zinc-900/40 border-r border-zinc-200 dark:border-zinc-800 flex flex-col gap-6 print:hidden">
          
          {/* Step 1: Select Business preset */}
          <div>
            <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">1. Select Small Business Brand</label>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
              {[
                { id: 'dans-lawn-care', label: 'Lawn Care', icon: Tractor, color: '#fbbf24' },
                { id: 'handyman', label: 'Handyman', icon: Wrench, color: '#dc2626' },
                { id: 'pool-service', label: 'Pool Service', icon: Waves, color: '#0ea5e9' },
                { id: 'housecleaner', label: 'House Clean', icon: Sparkles, color: '#facc15' },
                { id: 'bakery', label: 'Bakery', icon: Cake, color: '#10b981' },
                { id: 'pet-grooming', label: 'Pet Groom', icon: Scissors, color: '#8b5cf6' },
                { id: 'pizza-shop', label: 'Pizza', icon: Pizza, color: '#eaba58' }
              ].map(biz => (
                <button
                  key={biz.id}
                  onClick={() => setActiveBusiness(biz.id)}
                  className={cn(
                    "flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer",
                    activeBusiness === biz.id 
                      ? "border-zinc-900 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm ring-2 ring-emerald-500" 
                      : "border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900 text-zinc-500 hover:bg-zinc-100"
                  )}
                >
                  <biz.icon className="w-5 h-5 mb-1.5" style={{ color: activeBusiness === biz.id ? biz.color : 'inherit' }} />
                  <span className="text-[10px] font-bold leading-tight">{biz.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select Document template type */}
          <div>
            <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">2. Select Printable Template</label>
            <div className="flex bg-zinc-200/50 dark:bg-zinc-800/50 p-1 rounded-xl gap-1">
              {[
                { id: 'menu', label: 'Price Menu', icon: FileText },
                { id: 'rules', label: 'Rules & Terms', icon: ClipboardList },
                { id: 'faq', label: 'Business FAQ', icon: HelpCircle }
              ].map(type => (
                <button
                  key={type.id}
                  onClick={() => setDocType(type.id as any)}
                  className={cn(
                    "flex-1 py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 text-xs font-bold transition-all cursor-pointer",
                    docType === type.id
                      ? "bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm"
                      : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300"
                  )}
                >
                  <type.icon className="w-3.5 h-3.5" /> {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Design Customizations */}
          <div className="border-t border-zinc-200/60 dark:border-zinc-800/60 pt-4 space-y-4">
            <h4 className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide">Brand & Design Rules</h4>
            
            {/* Color selection */}
            <div>
              <label className="block text-[11px] text-zinc-400 mb-1.5">Primary Stamp/Accent Color (Hex)</label>
              <div className="flex gap-2 items-center">
                <input
                  type="color"
                  value={editableColor}
                  onChange={(e) => setEditableColor(e.target.value)}
                  className="w-10 h-10 border border-zinc-200 rounded-lg cursor-pointer bg-transparent"
                />
                <input
                  type="text"
                  value={editableColor}
                  onChange={(e) => setEditableColor(e.target.value)}
                  className="flex-1 min-w-0 p-2.5 bg-white dark:bg-zinc-800 rounded-lg text-xs font-mono border border-zinc-200 dark:border-zinc-700"
                  placeholder="#000000"
                />
              </div>
            </div>

            {/* Font selection */}
            <div>
              <label className="block text-[11px] text-zinc-400 mb-1.5">Style Vibe / Typography Suite</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'serif', label: 'Classic Serif' },
                  { id: 'sans', label: 'Clean Sans' },
                  { id: 'mono', label: 'Technical Mono' }
                ].map(font => (
                  <button
                    key={font.id}
                    onClick={() => setFontSelected(font.id)}
                    className={cn(
                      "py-2 text-[11px] font-bold border rounded-lg cursor-pointer transition-colors",
                      fontSelected === font.id
                        ? "border-zinc-900 bg-zinc-900 text-white dark:border-white"
                        : "border-zinc-200 dark:border-zinc-800 dark:text-zinc-400 hover:bg-zinc-50"
                    )}
                  >
                    {font.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Live Document Text Content Editor */}
          <div className="border-t border-zinc-200/60 dark:border-zinc-800/60 pt-4 flex-1 flex flex-col gap-4">
            <h4 className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide flex items-center justify-between">
              <span>Edit Document Items</span>
              <button 
                onClick={handleAddItem}
                className="text-[11px] px-2 py-1 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold uppercase rounded-lg flex items-center gap-1 cursor-pointer transition-colors"
              >
                <Plus className="w-3 h-3" /> Add Item
              </button>
            </h4>

            {/* Title & subtitle inputs */}
            <div className="space-y-2">
              <input
                type="text"
                value={editableTitle}
                onChange={(e) => setEditableTitle(e.target.value)}
                className="w-full p-2.5 bg-white dark:bg-zinc-800 rounded-lg text-xs border border-zinc-200 dark:border-zinc-700 font-semibold"
                placeholder="Document Header Title"
              />
              <textarea
                value={editableSub}
                onChange={(e) => setEditableSub(e.target.value)}
                className="w-full p-2.5 bg-white dark:bg-zinc-800 rounded-lg text-xs border border-zinc-200 dark:border-zinc-700 h-16 resize-none"
                placeholder="Document Subtitle description..."
              />
            </div>

            {/* Document Lines Scroll Area */}
            <div className="flex-1 overflow-y-auto max-h-[220px] bg-white/40 dark:bg-zinc-900/20 p-2.5 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 space-y-3">
              {itemsList.map((item, index) => (
                <div key={item.id} className="p-3 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 relative group/item">
                  <div className="flex items-center justify-between gap-2 mb-2 pr-6">
                    <span className="text-[10px] font-bold text-zinc-400">Item #{index + 1}</span>
                    <button
                      onClick={() => handleDeleteItem(item.id)}
                      className="absolute top-2 right-2 text-zinc-300 hover:text-red-500 transition-colors cursor-pointer"
                      title="Delete Item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  
                  <div className="space-y-1.5">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => handleUpdateItem(item.id, 'title', e.target.value)}
                        className="flex-1 p-2 bg-zinc-50 dark:bg-zinc-900 rounded text-xs border border-zinc-200/50 dark:border-zinc-700/50 font-bold"
                        placeholder="Title / Rule Name"
                      />
                      <input
                        type="text"
                        value={item.detail || ''}
                        onChange={(e) => handleUpdateItem(item.id, 'detail', e.target.value)}
                        className="w-[100px] p-2 bg-zinc-50 dark:bg-zinc-900 rounded text-xs border border-zinc-200/50 dark:border-zinc-700/50 font-mono text-right"
                        placeholder="Price / Tag"
                      />
                    </div>
                    
                    <textarea
                      value={item.subtitle || ''}
                      onChange={(e) => handleUpdateItem(item.id, 'subtitle', e.target.value)}
                      className="w-full p-2 bg-zinc-50 dark:bg-zinc-900 rounded text-[11px] border border-zinc-200/50 dark:border-zinc-700/50 h-12"
                      placeholder="Service details, rules explanations, descriptions..."
                    />
                  </div>
                </div>
              ))}
              {itemsList.length === 0 && (
                <div className="text-center py-6 text-zinc-400 text-xs">
                  No document items remaining. Click 'Add Item' to start fresh.
                </div>
              )}
            </div>

            {/* Footer Text */}
            <div>
              <label className="block text-[11px] text-zinc-400 mb-1">Company legal footer / Call-to-action note</label>
              <input
                type="text"
                value={editableFooter}
                onChange={(e) => setEditableFooter(e.target.value)}
                className="w-full p-2.5 bg-white dark:bg-zinc-800 rounded-lg text-xs border border-zinc-200 dark:border-zinc-700"
                placeholder="Footer contact information"
              />
            </div>
          </div>
        </div>

        {/* Right Side: High fidelity paper mockup (rendered globally, optimized for Print!) */}
        <div className="lg:col-span-7 bg-zinc-800/20 dark:bg-zinc-950/40 p-8 flex items-start justify-center overflow-y-auto max-h-[800px] print:p-0 print:m-0 print:bg-white print:max-h-none print:w-full">
          {/* Simulated A4 Paper Card */}
          <div 
            id="printable-document-root"
            className={cn(
              "w-full max-w-[620px] bg-white text-zinc-950 p-12 shadow-2xl relative min-h-[750px] flex flex-col justify-between border border-zinc-200 select-none print:shadow-none print:border-none print:p-0 print:m-0 print:min-h-0 print:max-w-none print:w-full print:bg-white print:text-zinc-950",
              fontSelected === 'serif' && "font-serif",
              fontSelected === 'sans' && "font-sans",
              fontSelected === 'mono' && "font-mono"
            )}
          >
            {/* Top Minimalist Header Border */}
            <div 
              className="absolute top-0 left-0 right-0 h-2" 
              style={{ backgroundColor: editableColor }}
            />

            <div>
              {/* Document Stamp Branding */}
              <div className="flex items-start justify-between border-b border-zinc-100 pb-8 mb-8">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1">Printable Studio Preset</span>
                  <h4 className="text-lg font-black tracking-tighter uppercase leading-[0.9]" style={{ color: editableColor }}>
                    {DEFAULT_TEMPLATES[activeBusiness]?.[docType]?.brandName || activeBusiness}
                  </h4>
                </div>
                
                {/* Official Stamp emblem */}
                <div 
                  className="px-3 py-1.5 border-2 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center justify-center opacity-80"
                  style={{ borderColor: editableColor, color: editableColor }}
                >
                  OFFICIAL USE
                </div>
              </div>

              {/* Core Doc Titles */}
              <div className="mb-10 text-center md:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight mb-3 text-zinc-900 leading-tight">
                  {editableTitle}
                </h1>
                <p className="text-zinc-500 font-serif italic text-sm leading-relaxed max-w-xl">
                  {editableSub}
                </p>
              </div>

              {/* Items List - Rendered Beautifully like high-end restaurant menu or legal document */}
              <div className="space-y-8 my-8">
                {itemsList.map((item, idx) => (
                  <div key={item.id} className="relative group">
                    <div className="flex items-baseline justify-between gap-4">
                      {/* Left: Item Title */}
                      <span className="font-bold text-zinc-900 text-md tracking-tight flex items-baseline gap-2">
                        <span className="text-xs opacity-30 font-mono">0{idx + 1}</span>
                        {item.title}
                      </span>
                      
                      {/* Dynamic connecting line between title and price details if menu items style */}
                      {docType === 'menu' && (
                        <div className="flex-1 border-b border-dashed border-zinc-200 mx-2 relative -top-1" />
                      )}

                      {/* Right: Price/Detail */}
                      {item.detail && (
                        <span className="font-mono font-bold text-sm select-all whitespace-nowrap px-1" style={{ color: editableColor }}>
                          {item.detail}
                        </span>
                      )}
                    </div>

                    {/* Secondary Detail Text */}
                    {item.subtitle && (
                      <p className="text-xs text-zinc-500 mt-1.5 pl-6 leading-relaxed max-w-xl font-normal">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                ))}

                {itemsList.length === 0 && (
                  <div className="text-center py-12 text-zinc-400 italic font-serif text-sm">
                    No custom fields filled. Click "Add Item" in the toolbar left-hand list.
                  </div>
                )}
              </div>
            </div>

            {/* Terms Footer signature row */}
            <div className="mt-12 border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-baseline gap-4">
              <p className="text-[11px] text-zinc-400 leading-relaxed max-w-sm">
                {editableFooter}
              </p>
              
              <div className="flex flex-col items-end shrink-0">
                <div className="border-b-2 border-zinc-200 w-32 h-6" />
                <span className="text-[9px] text-zinc-400 mt-1 uppercase tracking-wider">Stamp Authority Check</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
