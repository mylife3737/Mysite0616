import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  Smartphone, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  Phone, 
  Mail, 
  Star,
  Layers,
  ChevronDown
} from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import ProjectGallery from '../components/ProjectGallery';
import ProjectEstimator from '../components/ProjectEstimator';
import ContactForm from '../components/ContactForm';
import { cn } from '../utils';

export default function Home() {
  const [selectedEstimateDetails, setSelectedEstimateDetails] = useState<{
    tier: string;
    total: number;
    features: string[];
  } | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-sm font-black shadow-md shadow-indigo-600/30">
              V
            </span>
            <span className="text-zinc-900 dark:text-white">VibeCode<span className="text-indigo-600 dark:text-indigo-400">.Studio</span></span>
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a href="#work" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              Client Work
            </a>
            <a href="#estimator" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              Cost Calculator
            </a>
            <a href="#why-custom" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              Why Custom
            </a>
            <a href="#pricing" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              Packages
            </a>
            <a href="#reviews" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              Reviews
            </a>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
            >
              Start Project
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Accepting New Local Business Projects</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.05]">
              Websites built to turn local searches into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500">
                paying customers.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
              We design and build bespoke, ultra-fast websites for independent trade pros, contractors, restaurants, and neighborhood services. Zero bloated templates. 100% mobile-first and engineered for direct calls and bookings.
            </p>

            {/* Unboxed Metadata Stats */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-zinc-500 dark:text-zinc-400 pt-2 border-y border-zinc-100 dark:border-zinc-800/80 py-4">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" />
                <span className="font-semibold text-zinc-900 dark:text-white">0.3s</span> Average Speed
              </div>
              <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700 hidden sm:inline">/</span>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-500" />
                <span className="font-semibold text-zinc-900 dark:text-white">3.4x</span> More Quote Leads
              </div>
              <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700 hidden sm:inline">/</span>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-indigo-500" />
                <span className="font-semibold text-zinc-900 dark:text-white">100%</span> Mobile Native
              </div>
              <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700 hidden sm:inline">/</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-500" />
                <span className="font-semibold text-zinc-900 dark:text-white">10-14 Day</span> Launch
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#work"
                className="px-7 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all shadow-lg shadow-indigo-600/20 hover:scale-[1.02] flex items-center gap-2"
              >
                <span>Explore Live Client Sites</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#estimator"
                className="px-7 py-4 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white font-bold text-sm transition-all border border-zinc-200 dark:border-zinc-700 flex items-center gap-2"
              >
                <span>Calculate Your Scope & Cost</span>
              </a>
            </div>
          </div>
        </section>

        {/* Client Work Showcase Section */}
        <section id="work" className="bg-zinc-50/60 dark:bg-zinc-900/40 py-28 border-y border-zinc-200 dark:border-zinc-800/80">
          <div className="max-w-7xl mx-auto px-6 space-y-12">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">
                Live Client Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                Tested & Proven In The Real World.
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
                Click any client site below to test the full live interactive experience, including booking calculators, custom menus, and mobile responsiveness.
              </p>
            </div>

            <ProjectGallery />
          </div>
        </section>

        {/* Interactive Scope & Pricing Estimator Section */}
        <section id="estimator" className="py-28 max-w-7xl mx-auto px-6">
          <ProjectEstimator 
            onSelectEstimate={(details) => setSelectedEstimateDetails(details)} 
          />
        </section>

        {/* Why Custom Beats Generic Builders */}
        <section id="why-custom" className="py-28 bg-zinc-900 text-white border-y border-zinc-800">
          <div className="max-w-7xl mx-auto px-6 space-y-16">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                Why Custom Engineering Matters
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                The Difference Between A Site That Loses Customers vs One That Converts.
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed">
                Most DIY website builders force your local business into bloated themes that take 5+ seconds to load on mobile. In 2026, a neighbor searching on their phone leaves after 2 seconds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* DIY Card */}
              <div className="p-8 rounded-3xl bg-zinc-950/70 border border-zinc-800/80 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-zinc-400">Generic DIY Builders</h3>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-red-950/60 border border-red-900/40 text-red-400">Slow & Cookie-Cutter</span>
                </div>
                <ul className="space-y-4 text-sm text-zinc-400">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">✕</span>
                    <span><strong>Slow 4–6s load times</strong> packed with unused plugin scripts that hurt local Google rankings.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">✕</span>
                    <span><strong>Generic templates</strong> that make your business look identical to ten competitors down the street.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">✕</span>
                    <span><strong>High friction contact forms</strong> that force customers into back-and-forth phone tag.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">✕</span>
                    <span><strong>Endless monthly fees</strong> and locked into proprietary platform ecosystems you can't export.</span>
                  </li>
                </ul>
              </div>

              {/* VibeCode Custom Card */}
              <div className="p-8 rounded-3xl bg-indigo-950/30 border border-indigo-500/40 space-y-6 ring-1 ring-indigo-500/20">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">VibeCode Bespoke Build</h3>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-indigo-900/60 border border-indigo-700/50 text-indigo-300">High-Converting Pro</span>
                </div>
                <ul className="space-y-4 text-sm text-zinc-200">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Instantaneous 0.3s load speed</strong> built on React & Vite for top mobile Google Core Web Vitals.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Distinctive brand identity</strong> designed around your local story, photos, and unique pricing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Interactive booking & price estimators</strong> that give customers upfront answers and capture warm leads 24/7.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>100% Code Ownership</strong>. You own your repository and files forever with zero vendor lock-in.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Client Reviews & Testimonials */}
        <section id="reviews" className="py-28 max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">
              Client Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Trusted by Independent Local Owners.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-base">
              Real results from trade pros, restaurant operators, and service leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-4">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed italic">
                "Within two weeks of launching Dan's Lawn Care, neighbors were booking mowing routes straight from the site. Best business investment I made this year."
              </p>
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Dan Miller</h4>
                <p className="text-xs text-zinc-500">Owner, Dan's Lawn Care</p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-4">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed italic">
                "The instant repair calculator on FixitFirst stops tire-kickers and sends me qualified homeowners with photos ready to book. Saves me 2 hours every evening."
              </p>
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Ruben Santos</h4>
                <p className="text-xs text-zinc-500">Founder, FixitFirst Handyman</p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-4">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed italic">
                "We stopped losing 30% cuts to food delivery platforms. Slice & Stone customers order straight through our custom pizza builder and pick up in 15 minutes."
              </p>
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Antonio Moretti</h4>
                <p className="text-xs text-zinc-500">Head Pizzaiolo, Slice & Stone</p>
              </div>
            </div>
          </div>
        </section>

        {/* Transparent Packages & Pricing Section */}
        <section id="pricing" className="py-28 bg-zinc-50/60 dark:bg-zinc-900/40 border-y border-zinc-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-6 space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">
                Transparent Packages
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                Simple Pricing, Flat Investment.
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-base">
                No monthly maintenance hostage fees. You get the complete source code, custom design, and turnkey launch.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {/* Starter */}
              <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Starter Presence</h3>
                  <p className="text-xs text-zinc-500">For new businesses establishing local credibility fast.</p>
                  <div className="flex items-baseline gap-1 pt-2">
                    <span className="text-4xl font-black text-zinc-900 dark:text-white">$1,450</span>
                    <span className="text-xs text-zinc-500">one-time</span>
                  </div>
                  <ul className="space-y-3 pt-6 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-300">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Custom 1-Page High Speed Website</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Direct Tap-to-Call & Quote Buttons</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Google Business Profile SEO Alignment</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>7–10 Business Day Turnaround</span>
                    </li>
                  </ul>
                </div>
                <a
                  href="#contact"
                  className="w-full py-3.5 px-4 rounded-xl border border-zinc-300 dark:border-zinc-700 font-bold text-xs text-center text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  Choose Starter
                </a>
              </div>

              {/* Growth */}
              <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border-2 border-indigo-600 dark:border-indigo-500 flex flex-col justify-between space-y-8 relative shadow-xl">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full font-bold">
                  Most Popular for Local Pros
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Growth Engine</h3>
                  <p className="text-xs text-zinc-500">Interactive tools that automate lead qualification & scheduling.</p>
                  <div className="flex items-baseline gap-1 pt-2">
                    <span className="text-4xl font-black text-zinc-900 dark:text-white">$2,850</span>
                    <span className="text-xs text-zinc-500">one-time</span>
                  </div>
                  <ul className="space-y-3 pt-6 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-300">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Multi-Page or Interactive Modular Site</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Self-Serve Quote Estimator or Booking System</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Live 5-Star Google Reviews Integration</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Printable Business Card or QR Assets Included</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>10–14 Business Day Turnaround</span>
                    </li>
                  </ul>
                </div>
                <a
                  href="#contact"
                  className="w-full py-3.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs text-center transition-all shadow-md shadow-indigo-600/30"
                >
                  Choose Growth Engine
                </a>
              </div>

              {/* Flagship */}
              <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Custom Flagship</h3>
                  <p className="text-xs text-zinc-500">Comprehensive custom architecture with automated workflows.</p>
                  <div className="flex items-baseline gap-1 pt-2">
                    <span className="text-4xl font-black text-zinc-900 dark:text-white">$4,800</span>
                    <span className="text-xs text-zinc-500">one-time</span>
                  </div>
                  <ul className="space-y-3 pt-6 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-300">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Bespoke Full-Stack Web Application</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Customer Order / Booking Portal with SMS</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Full Custom Photo & Video Media Integration</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Priority VIP Turnaround & Unlimited Revisions</span>
                    </li>
                  </ul>
                </div>
                <a
                  href="#contact"
                  className="w-full py-3.5 px-4 rounded-xl border border-zinc-300 dark:border-zinc-700 font-bold text-xs text-center text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  Choose Flagship
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Project Intake Section */}
        <section id="contact" className="py-28 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">
                  Start Your Project
                </span>
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                  Let's Build Your Local Monopoly.
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
                  Tell us a bit about your business. We'll reply within 24 hours with an actionable plan and demo preview strategy.
                </p>
              </div>

              {selectedEstimateDetails && (
                <div className="p-5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold block">
                    Pre-Selected Scope
                  </span>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                    {selectedEstimateDetails.tier} Package · ${selectedEstimateDetails.total.toLocaleString()} Estimated
                  </p>
                  <p className="text-xs text-zinc-500">
                    Includes {selectedEstimateDetails.features.length} custom interactive capabilities.
                  </p>
                </div>
              )}

              <div className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-sm">
                <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
                  <Mail className="w-4 h-4 text-indigo-500" />
                  <span>direct: hello@vibecode.studio</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
                  <Phone className="w-4 h-4 text-emerald-500" />
                  <span>direct: (555) 321-VIBE</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
                  <ShieldCheck className="w-4 h-4 text-sky-500" />
                  <span>100% On-Time Delivery Guarantee</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 lg:p-10 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Agency Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800/80 py-12 bg-zinc-50/50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
              V
            </span>
            <span className="font-semibold text-zinc-900 dark:text-white">VibeCode Studio</span>
            <span aria-hidden="true">·</span>
            <span>Handcrafted Websites for Local Business</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#work" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Client Showcase</a>
            <a href="#estimator" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Estimator</a>
            <a href="#pricing" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Packages</a>
            <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Inquire</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
