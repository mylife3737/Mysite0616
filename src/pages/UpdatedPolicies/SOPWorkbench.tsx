import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  RefreshCw, 
  FileCheck, 
  Briefcase, 
  Torus, 
  FolderLock, 
  Copy, 
  Check, 
  AlertCircle, 
  StickyNote, 
  Plus, 
  Printer, 
  FileText,
  Bookmark,
  Droplets
} from 'lucide-react';
import { cn } from '../../utils';
import { PolicyItem } from './types';

// Raw messy sticky notes for Aqua Glow Pool Service
const MESSY_STICKY_NOTES = [
  {
    id: 'sticky-1',
    title: 'Smith Home Gate Lock Code',
    tag: 'Access & Security',
    color: 'bg-amber-100/90 dark:bg-amber-950/20 border-amber-300 dark:border-amber-900 text-amber-950 dark:text-amber-100',
    emoji: '🔑',
    rawText: "Backyard lock code for Smith home is 2026. Keep it hidden. If the client dog is outside, do not enter without ringing doorbell first. Turn off the safety lock after servicing so the kids cannot slip past to the pool!"
  },
  {
    id: 'sticky-2',
    title: 'Pool Chlorinator Wi-Fi Offline',
    tag: 'Tech Operations',
    color: 'bg-sky-100/90 dark:bg-cyan-950/20 border-cyan-300 dark:border-cyan-900 text-cyan-950 dark:text-cyan-100',
    emoji: '🔌',
    rawText: "When the chemistry sensor tablet drops offline on the custom pool deck router, do not restart the main chlorinator. Unplug the grey router inside panel B under the shelter, count to 15, and reset. Password is 'vibe-password-5g' in case it asks."
  },
  {
    id: 'sticky-3',
    title: 'Acid Pouring Downwind Hazard',
    tag: 'Chemical Safety',
    color: 'bg-rose-100/90 dark:bg-rose-950/20 border-rose-300 dark:border-rose-900 text-rose-950 dark:text-rose-100',
    emoji: '🧪',
    rawText: "Technicians must wear high-density safety glasses when dosing active muriatic acid! Never pour downwind from the vessel or you will inhale the fumes and choke. Test chemistry before pouring."
  },
  {
    id: 'sticky-4',
    title: 'Liquid Chlorine Transport Lashing',
    tag: 'Route Transport',
    color: 'bg-emerald-100/90 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-900 text-emerald-955 dark:text-emerald-100',
    emoji: '🚛',
    rawText: "Load at most ten liquid chlorine drums in the flatbed truck rack! Strap lock every drum tightly to prevent tipping. Brenda saw a truck dripping wet liquid in the roadway last night. Tie it secure!"
  },
  {
    id: 'sticky-5',
    title: 'Filter Backwash Pipe Pine Clog',
    tag: 'Site Maintenance',
    color: 'bg-purple-100/90 dark:bg-purple-950/20 border-purple-300 dark:border-purple-900 text-purple-955 dark:text-purple-100',
    emoji: '🍂',
    rawText: "Main filtration backwash pipe is clogged with pine needles and dirt again. Backroom smells terrible. Tell Tim to bring his industrial rooter to clear the yard outlet but negotiate down for our regular rate."
  }
];

interface SOPWorkbenchProps {
  onSavePolicy: (policy: PolicyItem) => void;
  triggerToast: (msg: string) => void;
}

export default function SOPWorkbench({ onSavePolicy, triggerToast }: SOPWorkbenchProps) {
  // Local scratch states
  const [messyInput, setMessyInput] = useState('');
  const [policyTitle, setPolicyTitle] = useState('');
  const [selectedDept, setSelectedDept] = useState('Operations & Safety');
  const [selectedVibe, setSelectedVibe] = useState('Firm & Professional');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedOutput, setGeneratedOutput] = useState<PolicyItem | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [stepMessage, setStepMessage] = useState('');

  // Loads a sticky into the sandboxed scratchpad
  const handleLoadSticky = (sticky: typeof MESSY_STICKY_NOTES[0]) => {
    setMessyInput(sticky.rawText);
    setPolicyTitle(sticky.title);
    
    const tagLower = sticky.tag.toLowerCase();
    if (tagLower.includes('chemical') || tagLower.includes('acid') || tagLower.includes('safety') || tagLower.includes('chlorine')) {
      setSelectedDept('Chemical Safety');
    } else if (tagLower.includes('bill') || tagLower.includes('quote') || tagLower.includes('pricing') || tagLower.includes('deposit')) {
      setSelectedDept('Billing & Quotes');
    } else if (tagLower.includes('customer') || tagLower.includes('client')) {
      setSelectedDept('Customer Guidelines');
    } else {
      setSelectedDept('Operations & Safety');
    }
    
    triggerToast(`Loaded "${sticky.title}" scrap data directly into workspace!`);
  };

  // Simulation engine translating raw messy notes to formal guidelines
  const handleTransform = () => {
    if (!messyInput.trim()) return;
    setIsGenerating(true);
    setGeneratedOutput(null);

    // Staggered loading messages to make the "AI Transform" feeling beautiful
    const steps = [
      "Analyzing raw poolside scribbles...",
      "Extracting critical water safety directives...",
      "Injecting tone guidelines (" + selectedVibe + ")...",
      "Drafting polished standard operating procedures..."
    ];

    let currentStep = 0;
    setStepMessage(steps[0]);

    const stepInterval = setInterval(() => {
      currentStep++;
      if (currentStep < steps.length) {
        setStepMessage(steps[currentStep]);
      }
    }, 350);

    setTimeout(() => {
      clearInterval(stepInterval);
      const title = policyTitle.trim() || "Pool Routing Standard Guideline";
      const text = messyInput.toLowerCase();
      
      // Objective generation
      let objective = `To formalize general procedures and safety constraints regarding ${selectedDept.toLowerCase()} for all active route technicians.`;
      
      if (text.includes('lock') || text.includes('gate') || text.includes('code')) {
        objective = 'Enforcing strict backyard access and lock safety protocols during pool dispatch routes to safeguard client children, pets, and private properties.';
      } else if (text.includes('rain') || text.includes('weather') || text.includes('storm')) {
        objective = 'Managing field dispatch routes safely and logically during wind and severe storm surges, preventing chemical imbalance and staff slippage.';
      } else if (text.includes('pay') || text.includes('deposit') || text.includes('fee')) {
        objective = 'Establishing secure billing terms, advance deposit thresholds, and standard route service fees to protect logistical company revenue.';
      } else if (text.includes('acid') || text.includes('chlorine') || text.includes('chemical')) {
        objective = 'Regulating high-risk chemical transport, testing, and water dosage, preventing inhalation of fumes or skin-burn hazards in residential yards.';
      } else if (text.includes('backwash') || text.includes('filter') || text.includes('pipe') || text.includes('clog')) {
        objective = 'Directing systematic filtration backwashing and debris removal on equipment pads to maintain balanced vacuum pressures.';
      }

      // Rules generation based on Vibe
      let rulesArray: string[] = [];
      const sentenceLines = messyInput.split(/[.!?\n]+/).map(s => s.trim()).filter(Boolean);
      
      if (selectedVibe === 'Firm & Professional') {
        rulesArray = [
          `All personnel shall strictly implement chemical dosing or mechanical rules as authorized in the active manual files.`,
          `No waivers or verbal agreements with clients regarding route locks, billing, or access codes are permitted without dispatch clearance.`,
          `All parameters and physical inspections must be formally logged indicating pool shell chemistry levels, time stamps, and signatures.`
        ];
        if (text.includes('dog') || text.includes('gate') || text.includes('lock')) {
          rulesArray[1] = "All residential backyard dogs must be verified indoors by the homeowner before a routing technician unlocks the gateway.";
        }
        if (text.includes('pay') || text.includes('deposit')) {
          rulesArray[0] = "New residential agreements require a 50% retainer fee payment processed in Square terminal prior to scheduling initial routes.";
        }
        if (text.includes('rain') || text.includes('weather')) {
          rulesArray[1] = "Standard routes proceed during light rain. In extreme lightning threats, technicians must return to shelter immediately and note dispatch.";
        }
      } else if (selectedVibe === 'Warm & Explanatory') {
        rulesArray = [
          `We care about your convenience: please help us prepare a clean, open pathway to your filtration units before our weekly dispatch arrival.`,
          `To maintain safe chemical levels and solid transparency, we log every water sample and mechanical test in our digital system.`,
          `Please kindly text our team lead at least 24 hours in advance if gate locks or service times need immediate changes.`
        ];
        if (text.includes('gate') || text.includes('lock')) {
          rulesArray[1] = "To prevent children and curious pets from slipping into deep pool water, always double-check that the backyard latch clicks firmly shut.";
        }
        if (text.includes('pay') || text.includes('deposit')) {
          rulesArray[0] = "To save your weekly slot in our route book, we request a friendly 50% reservation payment for all first-time alignments.";
        }
      } else if (selectedVibe === 'Legal SOP Style') {
        rulesArray = [
          `Pursuant to Operational Guideline A-12, the licensed service provider reserves the right to suspend routing under meteorologic hazards or animal threats.`,
          `Failure to secure double-check safety gates, ground-chlorine locks, or chemical latch plates constitutes immediate breach of employee duty.`,
          `Any disputes or requests regarding client billing and dispatch surcharge adjustments shall be reported in writing inside of 7 calendar days.`
        ];
        if (text.includes('acid') || text.includes('chemical')) {
          rulesArray[0] = "Mandatory: Concentrated acid and liquid chlorine gallons shall be racked and tied vertically. Heavy safety goggles must be worn during dosing.";
        }
      } else { // Direct & Playful
        rulesArray = [
          `Let's make sure we have clear, beautiful guidelines so nobody has to squint at wet, marker-damaged notes on a route truck!`,
          `Keep your local team informed and your customer smiling. Clear lanes make for sparkling water and early Friday clock-outs!`,
          `Stuck or have a special yard challenge? Shoot dispatch a quick clip so they can update this specific guideline rule on the fly.`
        ];
      }

      // Append practical action clip from original notes to preserve user input
      if (sentenceLines.length > 0) {
        let firstScribble = sentenceLines[0];
        if (firstScribble.length > 12) {
          rulesArray.push(`Scribble Directive: "${firstScribble.charAt(0).toUpperCase() + firstScribble.slice(1)}."`);
        }
      }

      const newPolicy: PolicyItem = {
        id: `gen-${Date.now()}`,
        category: selectedDept,
        title: title,
        vibe: selectedVibe,
        objective: objective,
        rules: rulesArray.slice(0, 3), // Grab 3 clean, highly polished rules
        footerText: `Aqua Glow Operations SOP System. Authorized for ${selectedDept} folder.`,
        lastUpdated: new Date().toISOString().split('T')[0]
      };

      setGeneratedOutput(newPolicy);
      setIsGenerating(false);
      triggerToast("SOP draft compiled successfully! Review it in the preview sheet.");
    }, 1200);
  };

  const handlePublish = () => {
    if (!generatedOutput) return;
    onSavePolicy(generatedOutput);
    // Reset workbench
    setGeneratedOutput(null);
    setMessyInput('');
    setPolicyTitle('');
    triggerToast("✨ Converted SOP published and logged in the Operational Manual Binder!");
  };

  const handleCopyText = (policy: PolicyItem) => {
    const txt = `
=========================================
AQUA GLOW POOL SERVICE - STANDARD DIRECTIVE
=========================================
TITLE: ${policy.title.toUpperCase()}
CATEGORY: ${policy.category} | DATE: ${policy.lastUpdated}
VIBE METRIC: ${policy.vibe}

OBJECTIVE PURPOSE:
${policy.objective}

PROCEDURAL GUIDELINES:
${policy.rules.map((r, i) => `[${i + 1}] ${r}`).join('\n')}

FILING FOOTER:
${policy.footerText}
=========================================
`;
    navigator.clipboard.writeText(txt);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
    triggerToast("SOP text copied securely to clipboard.");
  };

  return (
    <div className="space-y-8 animate-fade-in text-left">
      
      {/* Intro instruction block */}
      <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-5 rounded-2xl flex items-center justify-between flex-wrap gap-4">
        <div className="space-y-1 max-w-xl">
          <div className="text-zinc-900 dark:text-white font-bold text-sm flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-sky-500" />
            Aqua Glow SOP Workbench
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Select a raw, scribbled poolside scribble or write a guideline from scratch. Use our formatting engine to convert loose words into beautiful, client-ready, printed SOP cards instantly.
          </p>
        </div>
        
        <div className="flex gap-2">
          {MESSY_STICKY_NOTES.slice(0, 3).map((sticky) => (
            <button
              key={sticky.id}
              onClick={() => handleLoadSticky(sticky)}
              className="px-3 py-1.5 bg-yellow-50 dark:bg-amber-950/20 hover:bg-yellow-100 dark:hover:bg-amber-950/40 border border-yellow-250 dark:border-amber-900 rounded-lg text-[10px] font-bold text-amber-900 dark:text-amber-300 transition-all cursor-pointer flex items-center gap-1"
            >
              <span>{sticky.emoji}</span>
              {sticky.title.replace(" Smith Home", "").replace(" Pool", "").substring(0, 15)}...
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Intake, Presets, Settings (5 Columns) */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Section 1: Scrap presets drawer */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-5 rounded-2xl shadow-xs">
            <h4 className="text-[10px] font-bold tracking-wider text-zinc-400 dark:text-zinc-500 uppercase flex items-center gap-1.5 mb-3">
              <StickyNote className="w-3.5 h-3.5 text-yellow-500" />
              1. Presets: Select Scattered Yard Scribble
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MESSY_STICKY_NOTES.map((s) => (
                <div
                  key={s.id}
                  onClick={() => handleLoadSticky(s)}
                  className={cn(
                    "p-3 rounded-xl border text-left cursor-pointer transition-all hover:scale-[1.01] hover:shadow-xs active:scale-[0.99] flex flex-col justify-between min-h-[95px]",
                    s.color
                  )}
                >
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-[8px] uppercase tracking-wider font-mono opacity-60">
                        {s.tag}
                      </span>
                      <span className="text-xs">{s.emoji}</span>
                    </div>
                    <h5 className="font-bold text-[11px] mt-0.5 tracking-tight leading-tight line-clamp-1">{s.title}</h5>
                    <p className="text-[10px] italic line-clamp-2 mt-1 leading-normal text-zinc-700 dark:text-zinc-300">
                      "{s.rawText}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Editor Scratchpad */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl shadow-xs space-y-4">
            <h4 className="text-[10px] font-bold tracking-wider text-zinc-400 dark:text-zinc-500 uppercase flex items-center gap-1.5">
              <Plus className="w-3.5 h-3.5 text-sky-500" />
              2. Scratchpad Sandbox Inputs
            </h4>
            
            <div className="space-y-3">
              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest pl-0.5 mb-1">
                  SOP Guidelines Header Title
                </label>
                <input
                  type="text"
                  value={policyTitle}
                  onChange={(e) => setPolicyTitle(e.target.value)}
                  placeholder="E.g. Acid Testing Wind Safety SOP"
                  className="w-full text-xs bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 p-3 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest pl-0.5 mb-1">
                  Raw Casual Instructions (Scribble or Notes)
                </label>
                <textarea
                  value={messyInput}
                  onChange={(e) => setMessyInput(e.target.value)}
                  rows={4}
                  placeholder="Write a messy raw scribble or click on any yellow notepad snippet above to load..."
                  className="w-full text-xs font-sans bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 p-3 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-sky-500 focus:outline-none placeholder:text-zinc-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest pl-0.5 mb-1">
                    Operational Folder
                  </label>
                  <select
                    value={selectedDept}
                    onChange={(e) => setSelectedDept(e.target.value)}
                    className="w-full text-xs bg-zinc-50 dark:bg-zinc-950 text-zinc-750 dark:text-zinc-250 p-2.5 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-sky-500 focus:outline-none cursor-pointer"
                  >
                    <option value="Chemical Safety">Chemical Safety</option>
                    <option value="Operations & Safety">Operations & Safety</option>
                    <option value="Billing & Quotes">Billing & Quotes</option>
                    <option value="Customer Guidelines">Customer Guidelines</option>
                    <option value="Payments & Deposits">Payments & Deposits</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest pl-0.5 mb-1">
                    Tone Guidelines (Vibe)
                  </label>
                  <select
                    value={selectedVibe}
                    onChange={(e) => setSelectedVibe(e.target.value)}
                    className="w-full text-xs bg-zinc-50 dark:bg-zinc-950 text-zinc-750 dark:text-zinc-250 p-2.5 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-sky-500 focus:outline-none cursor-pointer"
                  >
                    <option value="Firm & Professional">Firm & Professional</option>
                    <option value="Warm & Explanatory">Warm & Explanatory</option>
                    <option value="Legal SOP Style">Legal SOP Style</option>
                    <option value="Direct & Playful">Direct & Playful</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              onClick={handleTransform}
              disabled={isGenerating || !messyInput.trim()}
              className={cn(
                "w-full py-3.5 bg-sky-500 hover:bg-sky-600 active:scale-[0.99] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2",
                (!messyInput.trim()) && "opacity-40 cursor-not-allowed bg-zinc-100 text-zinc-400 hover:bg-zinc-100"
              )}
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-white" />
                  <span>Formatting scribble...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-yellow-350" />
                  <span>Transform Raw Note to SOP Sheet</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Right Column: High Fidelity Compiled Card Preview (6 Columns) */}
        <div className="lg:col-span-6 space-y-4">
          
          <div className="flex justify-between items-center px-1">
            <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-400">
              Live Compiled SOP Preview Layer
            </span>
            {generatedOutput && (
              <span className="text-[9px] text-green-500 font-mono flex items-center gap-1 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                DRAFT READY
              </span>
            )}
          </div>

          <div className="min-h-[460px] bg-zinc-100 dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between shadow-xs relative overflow-hidden">
            
            {/* Watermark effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.015] dark:opacity-[0.025]">
              <Droplets className="w-96 h-96 text-sky-500" />
            </div>

            <AnimatePresence mode="wait">
              {isGenerating ? (
                // Generating screen
                <motion.div 
                  key="generating"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-32 space-y-4 text-center my-auto"
                >
                  <RefreshCw className="w-10 h-10 animate-spin text-sky-500" />
                  <div className="space-y-1.5">
                    <h5 className="text-zinc-800 dark:text-zinc-200 text-sm font-bold tracking-tight">Active Policy Processor</h5>
                    <p className="text-[11px] text-sky-500 dark:text-sky-450 font-mono">{stepMessage}</p>
                  </div>
                </motion.div>
              ) : generatedOutput ? (
                // Beautiful formatted preview card
                <motion.div
                  key="preview-content"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full bg-white dark:bg-zinc-950 p-[1px] rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-800/80 overflow-hidden text-left"
                >
                  <div className="p-6 bg-amber-50/20 dark:bg-zinc-950/20 border-b border-zinc-200 dark:border-zinc-800 relative">
                    {/* Corner badge */}
                    <div className="absolute top-4 right-4 bg-sky-50 text-sky-850 dark:bg-sky-950/50 dark:text-sky-400 font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-sky-200/55 dark:border-sky-900/60">
                      Folder: {generatedOutput.category}
                    </div>

                    <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase font-bold">
                      SOP Dispatch Standard
                    </span>
                    <h3 className="font-extrabold text-lg text-zinc-900 dark:text-white tracking-tight mt-1">
                      {generatedOutput.title}
                    </h3>
                  </div>

                  <div className="p-6 space-y-5">
                    
                    {/* Objective Box */}
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono font-bold tracking-widest text-zinc-400 uppercase">
                        SOP Target Objective
                      </span>
                      <p className="text-xs text-zinc-600 dark:text-zinc-350 leading-relaxed italic bg-zinc-50 dark:bg-zinc-900/40 p-3 rounded-xl border border-zinc-100 dark:border-zinc-800/50 font-serif">
                        "{generatedOutput.objective}"
                      </p>
                    </div>

                    {/* Guidelines List */}
                    <div className="space-y-3">
                      <span className="text-[9px] font-mono font-bold tracking-widest text-zinc-400 uppercase">
                        Procedural Guidelines
                      </span>
                      <div className="space-y-2">
                        {generatedOutput.rules.map((rule, idx) => (
                          <div key={idx} className="flex gap-3 text-xs leading-relaxed text-zinc-750 dark:text-zinc-200">
                            <span className="font-mono font-black text-sky-500 w-4 h-4 bg-sky-500/10 dark:bg-sky-500/20 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[9px]">
                              {idx + 1}
                            </span>
                            <p>{rule}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer signature line */}
                    <div className="border-t border-dashed border-zinc-250 dark:border-zinc-800 pt-4 flex justify-between items-end">
                      <div className="space-y-0.5 text-[10px] text-zinc-400">
                        <span>Classification Level: </span>
                        <strong className="text-zinc-500 dark:text-zinc-300 font-mono text-[9px] uppercase tracking-wider">{generatedOutput.vibe}</strong>
                      </div>
                      <div className="text-right text-[9px] text-zinc-400 font-mono">
                        <div>Aqua Glow Systems, Inc.</div>
                        <div>Date Signed: {generatedOutput.lastUpdated}</div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              ) : (
                // Empty state card
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-24 text-center my-auto space-y-4"
                >
                  <div className="p-4 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-full text-zinc-400 dark:text-zinc-500">
                    <FileText className="w-8 h-8" />
                  </div>
                  <div className="space-y-1.5 max-w-xs">
                    <h5 className="font-bold text-zinc-800 dark:text-zinc-300 text-xs">Waiting for Scribble Draft</h5>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                      Populate custom text into the sandbox or select a preset and click "Format Raw Note" to view results.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom active controls */}
            {generatedOutput && (
              <div className="mt-6 pt-5 border-t border-zinc-205 dark:border-zinc-800 flex justify-between gap-3 flex-wrap">
                <button
                  onClick={() => handleCopyText(generatedOutput)}
                  className="px-4 py-2 bg-white hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-300 border border-zinc-250 dark:border-zinc-800 font-bold text-[11px] tracking-wide rounded-xl transition-all cursor-pointer flex items-center gap-1"
                >
                  {copySuccess ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copySuccess ? 'Copied Details' : 'Copy Text'}</span>
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      triggerToast("Launching physical print server...");
                      window.print();
                    }}
                    className="px-4 py-2 bg-zinc-150 hover:bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-750 font-bold text-[11px] tracking-wide rounded-xl transition-all cursor-pointer flex items-center gap-1"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Direct</span>
                  </button>

                  <button
                    onClick={handlePublish}
                    className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 hover:shadow-xs hover:scale-[1.01] active:scale-[0.99] text-white font-bold text-[11px] tracking-wide rounded-xl transition-all cursor-pointer flex items-center gap-1"
                  >
                    <Bookmark className="w-3.5 h-3.5 text-emerald-100" />
                    <span>Publish to Binder</span>
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
