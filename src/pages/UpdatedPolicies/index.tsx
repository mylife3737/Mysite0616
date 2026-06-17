import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Plus, 
  FolderLock, 
  Sliders, 
  Notebook, 
  HelpCircle, 
  ShieldAlert, 
  Droplets,
  ArrowLeft,
  Briefcase,
  Torus,
  CheckCircle2
} from 'lucide-react';
import { cn } from '../../utils';
import { PolicyItem } from './types';
import SOPWorkbench from './SOPWorkbench';
import PublishedManual from './PublishedManual';
import DispatchDesk from './DispatchDesk';

// Seed templates for initial manual
const INITIAL_POLICIES: PolicyItem[] = [
  {
    id: 'p-1',
    category: 'Billing & Quotes',
    title: 'Service Call Dispatch & Call-Out Rates',
    vibe: 'Firm & Professional',
    objective: 'To compensate service technicians fairly for fuel, vehicle wear, and transit time, ensuring standard dispatch call viability.',
    rules: [
      'A minimum dispatch fee of $75.00 shall be assessed for all confirmed on-site visits, irrespective of repair duration.',
      'Technicians shall not negotiate or waive the trip fee under any circumstances without written approval from dispatch.',
      'All estimates provided on-site are valid for 30 days and require client signature prior to the commencement of water balance work.'
    ],
    footerText: 'Under penalty of service denial. Authorized by VibeCode Systems.',
    lastUpdated: '2026-06-16'
  },
  {
    id: 'p-2',
    category: 'Operations & Safety',
    title: 'Severe Weather Dispatch & Field Safety Protocols',
    vibe: 'Warm & Explanatory',
    objective: 'Providing clear execution criteria for field crews during adverse weather conditions, ensuring client pools are balanced while keeping team members safe and dry.',
    rules: [
      'In the event of severe lightning, tornado, or heavy storm surges, routing schedules will automatically shift to the subsequent drier business day.',
      'Light rain or misty conditions are designated active service hours. Crews will continue operations as routed to maintain chemical balances.',
      'Cancellations requested by customers within 24 hours of scheduled services will incur a standard $25.00 scheduling disruption fee to cover logistics overhead.'
    ],
    footerText: 'Thank you for helping us keep our field crews safe and responsive.',
    lastUpdated: '2026-06-15'
  }
];

export default function UpdatedPolicies() {
  // Master states
  const [policies, setPolicies] = useState<PolicyItem[]>(() => {
    const saved = localStorage.getItem('business_policies');
    return saved ? JSON.parse(saved) : INITIAL_POLICIES;
  });

  const [activeTab, setActiveTab] = useState<'workbench' | 'manual' | 'desk'>('workbench');
  const [previewPolicy, setPreviewPolicy] = useState<PolicyItem | null>(null);

  // Monitor statistics
  const [pressureAlarmSnoozed, setPressureAlarmSnoozed] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync back-office policies to local memory
  useEffect(() => {
    localStorage.setItem('business_policies', JSON.stringify(policies));
  }, [policies]);

  // Lazy set first preview policy if none selected
  useEffect(() => {
    if (policies.length > 0 && !previewPolicy) {
      setPreviewPolicy(policies[0]);
    }
  }, [policies, previewPolicy]);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Saved generated SOP of workbench
  const handleSavePolicy = (newPolicy: PolicyItem) => {
    setPolicies(prev => [newPolicy, ...prev]);
    setPreviewPolicy(newPolicy);
  };

  // Inline update policy inside manual
  const handleUpdatePolicy = (updated: PolicyItem) => {
    setPolicies(prev => prev.map(p => p.id === updated.id ? updated : p));
  };

  // Deletion logic
  const handleDeletePolicy = (id: string) => {
    if (confirm("Are you sure you want to permanently delete this operational SOP?")) {
      const filtered = policies.filter(p => p.id !== id);
      setPolicies(filtered);
      if (previewPolicy?.id === id) {
        setPreviewPolicy(filtered.length > 0 ? filtered[0] : null);
      }
      triggerToast("SOP deleted permanently from active business records.");
    }
  };

  const categories = ['All', 'Operations & Safety', 'Billing & Quotes', 'Customer Guidelines', 'Chemical Safety', 'Payments & Deposits'];

  // Calculate office chaos metric dynamically based on remaining files
  const calculateChaosRating = () => {
    if (policies.length >= 8) return 1;
    if (policies.length >= 5) return 3;
    if (policies.length >= 3) return 6;
    return 9;
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans antialiased text-zinc-900 dark:text-zinc-100 transition-colors duration-200">
      
      {/* Toast Alert Frame */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-55 animate-fade-in bg-zinc-900 border border-zinc-800 text-white dark:bg-zinc-100 dark:text-zinc-900 py-3.5 px-5 rounded-2xl shadow-xl flex items-center gap-3 text-xs font-bold font-mono">
          <Sparkles className="w-4 h-4 text-sky-400 dark:text-sky-600 animate-spin" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Modern Back-office Control Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-900 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className="p-2 border border-zinc-200 dark:border-zinc-850 hover:bg-zinc-100 dark:hover:bg-zinc-850 rounded-xl transition-all"
              title="Return to Home Dashboard"
            >
              <ArrowLeft className="w-4 h-4 text-zinc-650 dark:text-zinc-300" />
            </Link>
            
            <div className="leading-tight">
              <span className="text-[10px] uppercase font-bold tracking-widest text-sky-500 font-mono">
                Aqua Glow Logistics
              </span>
              <h1 className="font-extrabold text-xs tracking-tight text-zinc-850 dark:text-white flex items-center gap-1.5">
                Pool Route Backoffice Control Panel
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 bg-zinc-100 dark:bg-zinc-900 px-3 py-1 pb-1.5 rounded-lg text-[9px] font-mono border border-zinc-205 dark:border-zinc-800 text-zinc-500">
              <span>Chaos Rating: </span>
              <strong className={cn(
                "font-black text-xs",
                calculateChaosRating() > 6 ? "text-red-500" :
                calculateChaosRating() > 3 ? "text-amber-500" : "text-green-500"
              )}>
                {calculateChaosRating()}/10
              </strong>
            </div>

            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold text-zinc-400 font-mono tracking-widest hidden md:inline">
              SECURE WORKSTATION ACTIVE
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Header Section */}
      <header className="bg-white dark:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-90 w-full py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-1.5 text-sky-500 dark:text-sky-400 text-[10px] font-mono font-black uppercase tracking-widest mb-3 bg-sky-50 dark:bg-sky-950/30 px-2.5 py-1 rounded-md border border-sky-100 dark:border-sky-900/30">
              <FolderLock className="w-3.5 h-3.5" />
              SOP OPERATIONS PORTAL
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.05]">
              Modular SOP Design & Operational Binder
            </h2>
            <p className="mt-3 text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed max-w-xl">
              Clean up messy truck logs and loose poolside sticky notes. Unify operations under customized regulatory guidelines, searchable digital binders, and real-time dispatch estimators.
            </p>
          </div>
          
          {/* Pressure Snoozer and Quick stats */}
          <div className="w-full md:w-auto bg-zinc-100/50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-2xl flex items-center justify-between gap-4 md:min-w-80">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-sky-500/10 text-sky-500 rounded-xl relative shrink-0">
                <Droplets className="w-4 h-4" />
                {!pressureAlarmSnoozed && (
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-sky-500 rounded-full animate-ping" />
                )}
              </div>
              <div className="text-left text-xs leading-tight">
                <h5 className="font-bold text-zinc-550 dark:text-zinc-400">Pressure Valve Feed</h5>
                <p className="font-semibold text-[11px] text-zinc-450 dark:text-zinc-300 mt-0.5">
                  {pressureAlarmSnoozed ? "Snoozed" : "Main Chemical Flow Check"}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setPressureAlarmSnoozed(prev => !prev);
                triggerToast(pressureAlarmSnoozed ? "Pump pressure alarm restored." : "Feed pressure alert snoozed.");
              }}
              className="px-2.5 py-1.5 bg-zinc-900 hover:bg-zinc-850 dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-900 text-white text-[10px] font-bold rounded-lg transition-all cursor-pointer"
            >
              {pressureAlarmSnoozed ? "Un-snooze" : "Snooze Alarm"}
            </button>
          </div>
        </div>
      </header>

      {/* Main Tabbed Layout Container */}
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        
        {/* Navigation Toolbar */}
        <div className="flex border-b border-zinc-200 dark:border-zinc-800 gap-6 overflow-x-auto pb-0.5">
          <button
            onClick={() => setActiveTab('workbench')}
            className={cn(
              "pb-4 text-xs font-bold uppercase tracking-wider transition-all border-b-2 px-1 relative flex items-center gap-2 cursor-pointer",
              activeTab === 'workbench' ? "border-sky-500 text-sky-500 font-extrabold" : "border-transparent text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-300"
            )}
          >
            <Sliders className="w-4 h-4 text-sky-500" />
            <span>1. SOP Design Workbench</span>
          </button>

          <button
            onClick={() => setActiveTab('manual')}
            className={cn(
              "pb-4 text-xs font-bold uppercase tracking-wider transition-all border-b-2 px-1 relative flex items-center gap-2 cursor-pointer",
              activeTab === 'manual' ? "border-sky-500 text-sky-500 font-extrabold" : "border-transparent text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-300"
            )}
          >
            <Notebook className="w-4 h-4 text-sky-500" />
            <span>2. Published SOP Manual</span>
            <span className="bg-sky-500/10 text-sky-600 dark:text-sky-400 text-[10px] font-mono px-1.5 py-0.2 rounded-md font-bold shrink-0">
              {policies.length} Active
            </span>
          </button>

          <button
            onClick={() => setActiveTab('desk')}
            className={cn(
              "pb-4 text-xs font-bold uppercase tracking-wider transition-all border-b-2 px-1 relative flex items-center gap-2 cursor-pointer",
              activeTab === 'desk' ? "border-sky-500 text-sky-500 font-extrabold" : "border-transparent text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-300"
            )}
          >
            <HelpCircle className="w-4 h-4 text-sky-500" />
            <span>3. Dispatch Reference Desk</span>
          </button>
        </div>

        {/* Tab Panel Renders */}
        <div className="pt-2 animate-fade-in">
          
          {activeTab === 'workbench' && (
            <SOPWorkbench 
              onSavePolicy={handleSavePolicy} 
              triggerToast={triggerToast} 
            />
          )}

          {activeTab === 'manual' && (
            <PublishedManual
              policies={policies}
              previewPolicy={previewPolicy}
              setPreviewPolicy={setPreviewPolicy}
              onUpdatePolicy={handleUpdatePolicy}
              onDeletePolicy={handleDeletePolicy}
              categories={categories}
              triggerToast={triggerToast}
            />
          )}

          {activeTab === 'desk' && (
            <DispatchDesk 
              triggerToast={triggerToast} 
            />
          )}

        </div>

      </main>

    </div>
  );
}
