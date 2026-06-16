import { 
  Leaf, 
  Wrench, 
  Cake, 
  Dog, 
  Pizza,
  Scissors,
  Hammer,
  Droplets,
  Clock,
  ShieldCheck,
  Star,
  Zap,
  Waves,
  Heart,
  Flame,
  UtilityPole,
  Brush,
  Sparkles,
  SprayCan,
  Trash2,
  Image,
  Paintbrush,
  Tractor,
  ExternalLink,
  CalendarDays,
  Gem,
  CheckCircle2,
  PackageCheck,
  Utensils
} from 'lucide-react';
import { Project } from './types';
import headerImg from './assets/Header.jpg';
import droneImg from './assets/drone.avif';
import kidsImg from './assets/kidsongrass.jpg';
import trimImg from './assets/trim.jpg';
import danPhoto from './assets/dananddog.jpeg';
import mulchImg from './assets/mulch.jpeg';
import mowingVideo from './assets/GIF.mp4';

export const PROJECTS: Project[] = [
  {
    id: 'dans-lawn-care',
    name: "Dan's Lawn Care",
    businessName: "Dan's Lawn Care",
    description: 'Just a guy, a mower, and a perfect yard.',
    logo: 'DansLawn',
    heroImage: 'https://placehold.co/1920x1080?text=Hero+Image',
    accentColor: '#fbbf24', // amber-400
    theme: 'light',
    fontFamily: 'font-lawn',
    serviceSectionTitle: 'Fair & Fast',
    serviceSectionSubtitle: 'Simple service for busy neighbors.',
    aboutText: "Hey, I'm Dan. I'm just a guy with a mower who loves making yards look great. I've been mowing neighborhood lawns in Charlotte County for years—I just show up, do a good job, and let you get back to your weekend.",
    services: [
      { title: 'Weekly Mowing', description: "I'll show up every week and keep it looking short and tidy. No fuss.", icon: Tractor, image: 'https://placehold.co/1200x800?text=Mowing' },
      { title: 'String Trimming', description: 'Clean, crisp edges around the fence and flower beds.', icon: Scissors, image: 'https://placehold.co/1200x800?text=Trimming' },
      { title: 'Landscaping', description: 'Mulching and bed maintenance to keep things looking clean.', icon: Leaf, image: 'https://placehold.co/1200x800?text=Landscaping' }
    ],
    testimonials: []
  },
  {
    id: 'handyman',
    name: 'Fixit Sam',
    businessName: 'Fixit Sam Repairs',
    description: 'Home repairs made simple and reliable.',
    logo: 'FixitSam',
    heroImage: 'https://placehold.co/1920x1080?text=Handyman+Hero',
    accentColor: '#dc2626', // red-600
    theme: 'dark',
    fontFamily: 'font-handy',
    serviceSectionTitle: 'The Fix List',
    serviceSectionSubtitle: "Small jobs, big relief.",
    aboutText: "I am a retired school teacher who raised 4 kids and now keep busy doing the handywork that neighbors actually need. I bring a teacher's patience and an expert's eye to every small fix and large project.",
    services: [
      { title: 'Faucet & Leak Repair', description: 'Stopping drips and clearing clogs in kitchens and baths.', icon: Droplets },
      { title: 'Light & Fixtures', description: 'Changing out old lights and ceiling fans safely.', icon: Zap },
      { title: 'Shelving & Mounts', description: 'Mounting TVs and hanging shelves exactly where you want them.', icon: Wrench },
      { title: 'Power Washing', description: 'Reviving driveways, decks, and siding.', icon: Waves },
      { title: 'Door Hardware', description: 'Fixing jams and installing new locks or handles.', icon: Hammer },
      { title: 'Furniture Assembly', description: 'Putting together your new pieces with zero stress.', icon: PackageCheck },
      { title: 'Drywall Patching', description: 'Seamless repairs for holes and scuffs.', icon: Wrench }
    ],
    testimonials: [
      { name: 'Mike Ross', role: 'Homeowner', content: 'Sam fixed my kitchen sink and a closet door in under an hour. Great service.', avatar: 'https://i.pravatar.cc/150?u=mike' }
    ]
  },
  {
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
      { title: 'Chemical Balance', description: 'Weekly testing and balancing for safe, stinging-free water.', icon: Droplets, image: 'https://placehold.co/800x600?text=Chemicals' },
      { title: 'Debris Removal', description: 'Skimming and vacuuming to keep your pool floor spotless.', icon: Waves, image: 'https://placehold.co/800x600?text=Debris' },
      { title: 'Filter Care', description: 'Full system inspections and regular filter cleanings.', icon: ShieldCheck, image: 'https://placehold.co/800x600?text=Filter' }
    ],
    testimonials: [
      { name: 'Sarah T.', role: 'Pool Owner', content: 'Our pool has never looked this clear. They are incredibly reliable.', avatar: 'https://i.pravatar.cc/150?u=sarah' }
    ]
  },
  {
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
      { name: 'Emma G.', role: 'Busy Lawyer', content: 'Coming home to a Sparkle Fresh house is the best feeling in the world.', avatar: 'https://i.pravatar.cc/150?u=emma' }
    ]
  },
  {
    id: 'bakery',
    name: 'Bloom & Batch',
    businessName: 'Bloom & Batch Artisanal Bakery',
    description: 'Hand-rolled, stone-baked, slow-cooled.',
    logo: 'Bloom&Batch',
    heroImage: 'https://placehold.co/2000x800?text=Hero+Photo',
    accentColor: '#10b981', // emerald-500
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
  },
  {
    id: 'pet-grooming',
    name: 'Paws & Pamper',
    businessName: 'Paws & Pamper Pet Spa',
    description: 'Happiness in every bubble.',
    logo: 'Paws&Pamper',
    heroImage: 'https://placehold.co/2000x800?text=Hero+Photo',
    accentColor: '#8b5cf6', // violet-500
    theme: 'light',
    fontFamily: 'font-pet',
    serviceSectionTitle: 'The Spa Menu',
    serviceSectionSubtitle: 'Tailored care for sensitive souls.',
    aboutText: "We believe grooming should be the highlight of your pet's week. Our low-stress environment and organic botanicals ensure a calm experience for even the most anxious friends.",
    services: [
      { title: 'Lavender Bath', description: 'Calming botanical soaks for a silky, fresh coat.', icon: Waves },
      { title: 'Nail Trimming', description: 'Safe, stress-free trimming and filing for healthy paws.', icon: Gem },
      { title: 'Electric Shaving', description: 'Full hygiene clips and seasonal length adjustments.', icon: Scissors },
      { title: 'Scissor Styling', description: 'Precision hand-trimming by our senior stylists.', icon: Brush },
      { title: 'Paw Wellness', description: 'Deep cleaning and pad conditioning with organic beeswax.', icon: Heart }
    ],
    testimonials: [
      { name: 'Linda W.', role: 'Poodle Mom', content: 'They treated my senior dog with so much gentleness.', avatar: 'https://i.pravatar.cc/150?u=linda' }
    ]
  },
  {
    id: 'pizza-shop',
    name: 'Pizza Prime',
    businessName: 'Pizza Prime Fire-Pies',
    description: 'Blistering heat. Authentic dough.',
    logo: 'PizzaPrime',
    heroImage: 'https://placehold.co/2000x800?text=Hero+Photo',
    accentColor: '#facc15', // italy yellow
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
  }
];
