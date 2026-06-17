import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import ContactForm from '../components/ContactForm';
import ProjectGallery from '../components/ProjectGallery';
import PrintableStudio from '../components/PrintableStudio';
import { cn } from '../utils';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <span className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-mono italic">V</span>
            VibeCode Studio
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/updated-policies" className="text-sm font-bold text-sky-500 hover:text-sky-600 transition-colors flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-pulse" />
              Updated Policies
            </Link>
            <Link to="#work" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">Our Work</Link>
            <Link to="#contact" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">Inquire</Link>
            <div className="h-4 w-[1px] bg-zinc-200 dark:bg-zinc-800" />
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 pt-24 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[10px] font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Open for Bookings
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              Websites built <br />
              <span className="text-zinc-500 italic font-serif font-normal">with vibe.</span>
            </h1>
            <p className="text-xl text-zinc-500 md:text-2xl mb-12 max-w-2xl leading-relaxed">
              We help local businesses dominate their digital presence through high-performance, intentionally designed websites.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-medium hover:scale-[1.02] transition-transform flex items-center gap-2"
              >
                Start Your Project
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a 
                href="#work" 
                className="px-8 py-4 border border-zinc-200 dark:border-zinc-800 rounded-2xl font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
              >
                View Catalog
              </a>
            </div>
          </motion.div>
        </section>

        {/* Featured Work */}
        <section id="work" className="bg-zinc-50 dark:bg-zinc-900/50 py-32 border-y border-zinc-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-16">
              <div>
                <h2 className="text-sm font-mono italic text-zinc-500 mb-2">// OUR RECENT WORK</h2>
                <h3 className="text-4xl font-bold tracking-tight">Small Business Showcases</h3>
              </div>
            </div>

            <ProjectGallery />
          </div>
        </section>

        {/* Printable Document Labs Section */}
        <section id="printables" className="py-32 border-b border-zinc-200 dark:border-zinc-800 print:hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4">
              <div>
                <h2 className="text-sm font-mono italic text-zinc-500 mb-2">// BRANDED COLUMNS</h2>
                <h3 className="text-4xl font-bold tracking-tight">Printable & Document Labs</h3>
              </div>
              <p className="text-zinc-500 text-sm max-w-md leading-relaxed">
                Need clean rules, menu cards, or FAQ guides to print and tape or serve physically in your shop? Try our interactive custom print engine below.
              </p>
            </div>

            <PrintableStudio />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-bold tracking-tighter mb-8">Ready to evolve <br /> your business?</h2>
              <p className="text-xl text-zinc-500 mb-12 leading-relaxed">
                We're currently accepting new clients for Q3 2026. Reach out for a free consultation and let's build something iconic.
              </p>
              
              <div className="space-y-6">
                <div className="p-6 border border-zinc-100 dark:border-zinc-800 rounded-3xl flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Chat with us</h4>
                    <p className="text-sm text-zinc-500">hello@vibecode.studio</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
            <div className="max-w-xs">
              <Link to="/" className="text-xl font-bold tracking-tighter flex items-center gap-2 mb-6">
                <span className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-mono italic">V</span>
                VibeCode Studio
              </Link>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Self-taught engineering meets intentional boutique design. Building the future of local commerce one pixel at a time.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <h5 className="font-bold mb-4 text-xs uppercase tracking-widest text-zinc-400">Services</h5>
                <ul className="space-y-2 text-sm text-zinc-500">
                  <li><Link to="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Web Design</Link></li>
                  <li><Link to="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Development</Link></li>
                  <li><Link to="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">SEO Mastery</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-4 text-xs uppercase tracking-widest text-zinc-400">Catalog</h5>
                <ul className="space-y-2 text-sm text-zinc-500">
                  {PROJECTS.map(p => (
                    <li key={p.id}><Link to={`/project/${p.id}`} className="hover:text-zinc-900 dark:hover:text-white transition-colors">{p.name}</Link></li>
                  ))}
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h5 className="font-bold mb-4 text-xs uppercase tracking-widest text-zinc-400">Follow</h5>
                <div className="flex gap-4">
                  <a href="#" className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:scale-110 transition-transform"><Twitter className="w-5 h-5" /></a>
                  <a href="#" className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:scale-110 transition-transform"><Linkedin className="w-5 h-5" /></a>
                  <a href="#" className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:scale-110 transition-transform"><Github className="w-5 h-5" /></a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-zinc-200 dark:border-zinc-800 gap-6">
            <p className="text-zinc-400 text-xs text-center md:text-left">
              &copy; 2026 VibeCode Studio. All rights reserved. Self-taught, vibe-driven.
            </p>
            <div className="flex gap-8 text-zinc-400 text-xs">
              <Link to="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
