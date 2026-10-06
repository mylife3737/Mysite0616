import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { 
  ArrowRight, 
  Tractor, 
  Wrench, 
  Cake, 
  Scissors, 
  Pizza, 
  Waves, 
  Sparkles,
  ExternalLink,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { cn } from '../utils';

type CategoryFilter = 'all' | 'trades' | 'food' | 'specialty';

export default function ProjectGallery() {
  const [filter, setFilter] = useState<CategoryFilter>('all');

  const galleryItems = [
    {
      id: 'dans-lawn-care',
      category: 'trades',
      categoryLabel: 'Lawn & Landscape Trades',
      resultHighlight: '+48% Weekly recurring mowing routes',
      highlightBadge: 'Fast Route Booking',
      icon: Tractor,
      features: ['Instant Yard Size Quote', 'Weekly Recurring Schedule', 'Direct Call Link']
    },
    {
      id: 'handyman',
      category: 'trades',
      categoryLabel: 'Home Repair & Trades',
      resultHighlight: '3.4x More emergency repair bookings',
      highlightBadge: 'Instant Repair Estimator',
      icon: Wrench,
      features: ['Self-Serve Job Estimator', 'Photo Upload For Quotes', 'Same-Day Dispatch']
    },
    {
      id: 'pizza-shop',
      category: 'food',
      categoryLabel: 'Restaurant & Dining',
      resultHighlight: 'Zero third-party commission fees',
      highlightBadge: 'Online Ordering Engine',
      icon: Pizza,
      features: ['Direct Mobile Pizza Builder', '15-Min Pickup Countdown', 'Full Menu Customizer']
    },
    {
      id: 'pool-service',
      category: 'specialty',
      categoryLabel: 'Property & Water Care',
      resultHighlight: '100% Retainer client retention rate',
      highlightBadge: 'Service Plan Portal',
      icon: Waves,
      features: ['Chemical Balance Log', 'Recurring Monthly Retainer', 'Emergency Service Call']
    },
    {
      id: 'housecleaner',
      category: 'trades',
      categoryLabel: 'Residential Services',
      resultHighlight: 'Booked solid 3 weeks in advance',
      highlightBadge: 'Deep Clean Checklist',
      icon: Sparkles,
      features: ['Room-by-Room Estimator', 'Supply Preference Selector', 'Automated Reminders']
    },
    {
      id: 'bakery',
      category: 'food',
      categoryLabel: 'Artisanal Bakery & Floral',
      resultHighlight: 'Daily sunrise batches sell out by 10am',
      highlightBadge: 'Daily Fresh Bake Board',
      icon: Cake,
      features: ['Daily Bake Status Tracker', 'Gift Box Pre-Orders', 'Ingredient Storytelling']
    },
    {
      id: 'pet-grooming',
      category: 'specialty',
      categoryLabel: 'Pet Care & Spa',
      resultHighlight: '+52% Repeat appointment rebooking',
      highlightBadge: 'Spa Appointment Engine',
      icon: Scissors,
      features: ['Breed-Specific Spa Packages', 'Vaccine Record Uploader', 'Calm Care Guarantee']
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <div className="w-full space-y-10">
      {/* Interactive Category Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <div className="flex items-center gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-800/80 rounded-xl">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={cn(
              "px-4 py-2 text-xs font-semibold rounded-lg transition-all",
              filter === 'all'
                ? "bg-white dark:bg-zinc-900 text-zinc-950 dark:text-white shadow-sm"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
            )}
          >
            All Client Sites ({galleryItems.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('trades')}
            className={cn(
              "px-4 py-2 text-xs font-semibold rounded-lg transition-all",
              filter === 'trades'
                ? "bg-white dark:bg-zinc-900 text-zinc-950 dark:text-white shadow-sm"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
            )}
          >
            Trades & Home Services
          </button>
          <button
            type="button"
            onClick={() => setFilter('food')}
            className={cn(
              "px-4 py-2 text-xs font-semibold rounded-lg transition-all",
              filter === 'food'
                ? "bg-white dark:bg-zinc-900 text-zinc-950 dark:text-white shadow-sm"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
            )}
          >
            Food & Dining
          </button>
          <button
            type="button"
            onClick={() => setFilter('specialty')}
            className={cn(
              "px-4 py-2 text-xs font-semibold rounded-lg transition-all",
              filter === 'specialty'
                ? "bg-white dark:bg-zinc-900 text-zinc-950 dark:text-white shadow-sm"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
            )}
          >
            Specialty & Care
          </button>
        </div>

        <div className="text-xs text-zinc-500 font-mono hidden sm:flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Click any site to launch the interactive live demo</span>
        </div>
      </div>

      {/* Grid of Client Showcases */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredItems.map((item, idx) => {
            const project = PROJECTS.find(p => p.id === item.id);
            if (!project) return null;
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex flex-col h-full"
              >
                <div className="group flex flex-col h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden hover:border-zinc-400 dark:hover:border-zinc-700 hover:shadow-xl transition-all duration-300 flex-1">
                  {/* Hero Thumbnail Preview */}
                  <Link
                    to={`/project/${project.id}`}
                    className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800 block"
                  >
                    <img
                      src={project.heroImage}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-5">
                      <div className="flex justify-between items-start">
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg backdrop-blur-md"
                          style={{ backgroundColor: project.accentColor }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-mono font-medium text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                          {item.highlightBadge}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-white">
                        <span className="text-xs font-semibold tracking-wide flex items-center gap-1.5 opacity-90 group-hover:opacity-100">
                          Launch Interactive Demo
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <span className="text-[11px] font-mono text-white/70">
                          0.3s load
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-1 justify-between space-y-6">
                    <div className="space-y-3">
                      {/* Quiet Unboxed Metadata */}
                      <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
                        <span>{item.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono">{project.serviceSectionTitle || 'Full Service'}</span>
                      </div>

                      {/* Business Title */}
                      <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        <Link to={`/project/${project.id}`}>
                          {project.businessName}
                        </Link>
                      </h3>

                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                        Built-in Capabilities:
                      </div>
                      <div className="space-y-1.5">
                        {item.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Business Result & Direct Demo Link */}
                    <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                      <div className="text-xs">
                        <span className="text-zinc-400 block text-[10px] uppercase font-mono">Proven Impact:</span>
                        <span className="font-semibold text-zinc-900 dark:text-white">{item.resultHighlight}</span>
                      </div>
                      <Link
                        to={`/project/${project.id}`}
                        className="px-3.5 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-xs font-semibold text-zinc-900 dark:text-white flex items-center gap-1.5 transition-colors"
                      >
                        Demo <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
