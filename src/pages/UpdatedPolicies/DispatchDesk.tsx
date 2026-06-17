import React, { useState } from 'react';
import { 
  Phone, 
  ShoppingBag, 
  Clock, 
  HelpCircle, 
  Calculator, 
  ShieldAlert, 
  Bookmark, 
  CheckCircle2, 
  User, 
  DollarSign, 
  Droplets, 
  Trash2, 
  Sparkles, 
  Trophy 
} from 'lucide-react';
import { cn } from '../../utils';
import {
  PHONE_LIST_OPTIONS,
  SUPPLIER_OPTIONS,
  PROCEDURES_OPTIONS,
  FAQ_OPTIONS,
  QUOTE_CALCULATORS
} from './backofficeData';

interface DispatchDeskProps {
  triggerToast: (msg: string) => void;
}

export default function DispatchDesk({ triggerToast }: DispatchDeskProps) {
  // Folder Categories
  const deskTabs = [
    { id: 'phone', label: 'Dispatch Phone Book', icon: Phone, color: 'border-l-rose-500 bg-rose-50/20 dark:bg-rose-950/5 text-rose-600 dark:text-rose-400' },
    { id: 'vendors', label: 'Wholesale Suppliers', icon: ShoppingBag, color: 'border-l-sky-500 bg-sky-50/20 dark:bg-sky-950/5 text-sky-600 dark:text-sky-400' },
    { id: 'procedures', label: 'Shift Checklists', icon: Clock, color: 'border-l-amber-500 bg-amber-50/20 dark:bg-amber-955/5 text-amber-600 dark:text-amber-400' },
    { id: 'faqs', label: 'Disputes & FAQs', icon: HelpCircle, color: 'border-l-purple-500 bg-purple-50/20 dark:bg-purple-955/5 text-purple-600 dark:text-purple-400' },
    { id: 'quotes', label: 'Contract Estimator', icon: Calculator, color: 'border-l-emerald-500 bg-emerald-50/20 dark:bg-emerald-955/5 text-emerald-600 dark:text-emerald-400' },
  ];

  const [activeTab, setActiveTab] = useState('phone');
  
  // Specific Sub-option indexes (like which phone list or which supply house is currently selected)
  const [subIndices, setSubIndices] = useState<Record<string, number>>({
    phone: 0,
    vendors: 0,
    procedures: 0,
    faqs: 0,
    quotes: 0
  });

  // Checklist status memory so managers can check off active routines
  const [checkedSteps, setCheckedSteps] = useState<Record<string, boolean>>({});

  // Slide parameters for Calculator
  const [calcVolume, setCalcVolume] = useState(15); // pool volume k gallons
  const [calcVisits, setCalcVisits] = useState(1);  // weekly visits
  const [calcWaterTier, setCalcWaterTier] = useState(1.2); // standard chlorine (1.0), premium (1.5), vip salt (2.3)

  const [calcHours, setCalcHours] = useState(2);    // diagnostic repair hours
  const [calcDistance, setCalcDistance] = useState(15); // travel mileage
  const [calcUrgency, setCalcUrgency] = useState(1.5); // standard/weekend multiplier

  const [calcSurface, setCalcSurface] = useState(2500); // pool surface area
  const [calcCommVisits, setCalcCommVisits] = useState(3); // commercial weekly times
  const [calcLogGrade, setCalcLogGrade] = useState(1.4); // logger intensity

  const changeSubIndex = (tab: string, val: number) => {
    setSubIndices(prev => ({ ...prev, [tab]: val }));
  };

  const toggleCheckStep = (taskKey: string) => {
    setCheckedSteps(prev => ({ ...prev, taskKey: !prev[taskKey] }));
  };

  // Pricing calculations
  const calculateTotal = () => {
    const activeCalc = QUOTE_CALCULATORS[subIndices.quotes];
    if (!activeCalc) return 0;

    if (activeCalc.calcType === 'catering') {
      // Weekly Service Contract: base = $45 + volume multiplier + visits count + chemistry index
      return (activeCalc.baseRate + (calcVolume * 1.5) + (calcVisits * 12.0)) * calcWaterTier;
    } else if (activeCalc.calcType === 'dispatch') {
      // Diagnostic Call: base = $75 + diagnostic hours + mileage surcharge * urgency
      return (activeCalc.baseRate + (calcHours * 35.0) + (calcDistance * 1.8)) * calcUrgency;
    } else {
      // Commercial Agreement: base = $150 + surface area factor + frequency * multiplier
      return (activeCalc.baseRate + (calcSurface * 0.05) + (calcCommVisits * 65.0)) * calcLogGrade;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left animate-fade-in pb-12">
      
      {/* Left Column: Index Menu Tabs (4 columns) */}
      <div className="lg:col-span-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-5 rounded-2xl shadow-xs space-y-4">
        <div className="space-y-1">
          <h4 className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">
            Filing Cabinet Drawer
          </h4>
          <h3 className="font-extrabold text-zinc-800 dark:text-zinc-150 text-sm">
            Operational Reference Desk
          </h3>
        </div>

        <div className="space-y-1 pt-2">
          {deskTabs.map((tab) => {
            const Icon = tab.icon;
            const isTabActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "w-full p-3 border-l-4 text-xs font-bold transition-all flex items-center justify-between cursor-pointer rounded-r-xl",
                  isTabActive
                    ? tab.color + " font-extrabold"
                    : "border-l-transparent text-zinc-550 dark:text-zinc-450 hover:bg-zinc-50 dark:hover:bg-zinc-850"
                )}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{tab.label}</span>
                </div>
                {isTabActive && <span className="w-1.5 h-1.5 bg-sky-500 rounded-full" />}
              </button>
            );
          })}
        </div>

        <div className="border-t border-zinc-150 dark:border-zinc-800/80 pt-4 text-[10px] text-zinc-400 text-center font-mono">
          Locked Security Session (Offline Storage)
        </div>
      </div>

      {/* Right Column: Interactive Reference Sheets (8 columns) */}
      <div className="lg:col-span-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl shadow-xs min-h-[460px] flex flex-col justify-between">
        
        {/* Dynamic Inner Tab Renders */}
        <div>
          
          {/* TAB 1: PHONE BOOK */}
          {activeTab === 'phone' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-zinc-200 dark:border-zinc-800 pb-4 gap-3">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono font-bold tracking-widest text-rose-500 uppercase">
                    📱 Contact Registry
                  </span>
                  <h4 className="font-extrabold text-zinc-900 dark:text-white text-base">
                    Crisis & Dispatch phone Index
                  </h4>
                </div>

                <div className="flex bg-zinc-100 dark:bg-zinc-950 p-1 rounded-lg border border-zinc-200/50 dark:border-zinc-800/80">
                  {PHONE_LIST_OPTIONS.map((opt, idx) => (
                    <button
                      key={opt.id}
                      onClick={() => changeSubIndex('phone', idx)}
                      className={cn(
                        "px-2.5 py-1 text-[9px] font-bold uppercase rounded-md transition-all cursor-pointer",
                        subIndices.phone === idx 
                          ? "bg-rose-500 text-white shadow-xs" 
                          : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                      )}
                    >
                      Book #{idx + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Phone Details */}
              <div className="space-y-4">
                <div className="p-3 bg-rose-50/35 border border-rose-100 dark:bg-rose-950/10 dark:border-red-900/40 rounded-xl">
                  <h5 className="text-xs font-bold text-rose-900 dark:text-rose-300">
                    {PHONE_LIST_OPTIONS[subIndices.phone].name}
                  </h5>
                  <p className="text-[11px] text-zinc-500 mt-1">
                    {PHONE_LIST_OPTIONS[subIndices.phone].description}
                  </p>
                </div>

                <div className="divide-y divide-zinc-100 dark:divide-zinc-800 border-t border-b border-zinc-100 dark:border-zinc-800">
                  {PHONE_LIST_OPTIONS[subIndices.phone].contacts.map((contact, idx) => (
                    <div key={idx} className="py-3 flex sm:items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-extrabold text-zinc-900 dark:text-zinc-100 text-xs">
                            {contact.name}
                          </span>
                          <span className={cn(
                            "text-[8px] font-mono px-1.5 py-0.2 rounded font-bold uppercase",
                            contact.urgency === 'high' ? 'bg-red-500/10 text-red-500 border border-red-500/20' :
                            contact.urgency === 'medium' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                            'bg-zinc-500/10 text-zinc-400'
                          )}>
                            {contact.urgency} Action
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-400 font-medium">{contact.role}</p>
                        <p className="text-[10px] text-zinc-500 italic mt-1 font-serif">"{contact.notes}"</p>
                      </div>

                      <div className="flex items-center gap-1 text-sky-600 dark:text-sky-455 font-mono text-xs font-bold bg-sky-50 dark:bg-sky-950/30 px-3 py-1.5 rounded-lg border border-sky-100 dark:border-sky-900/45 shrink-0">
                        <Phone className="w-3.5 h-3.5 shrink-0" />
                        <span>{contact.phone}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: WHOLESALE SUPPLIERS */}
          {activeTab === 'vendors' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-zinc-200 dark:border-zinc-800 pb-4 gap-3">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono font-bold tracking-widest text-sky-500 uppercase">
                    🚛 Procurement
                  </span>
                  <h4 className="font-extrabold text-zinc-900 dark:text-white text-base">
                    Active Wholesale Supplier Ledgers
                  </h4>
                </div>

                <div className="flex bg-zinc-100 dark:bg-zinc-950 p-1 rounded-lg border border-zinc-200/50 dark:border-zinc-800/80">
                  {SUPPLIER_OPTIONS.map((opt, idx) => (
                    <button
                      key={opt.id}
                      onClick={() => changeSubIndex('vendors', idx)}
                      className={cn(
                        "px-2.5 py-1 text-[9px] font-bold uppercase rounded-md transition-all cursor-pointer",
                        subIndices.vendors === idx 
                          ? "bg-sky-500 text-white shadow-xs" 
                          : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                      )}
                    >
                      Vendor #{idx + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Vendor Details */}
              <div className="space-y-4">
                <div className="p-4 bg-sky-50/30 border border-sky-100 dark:bg-sky-950/10 dark:border-sky-900/30 rounded-xl">
                  <h5 className="text-xs font-bold text-sky-900 dark:text-sky-300">
                    {SUPPLIER_OPTIONS[subIndices.vendors].name}
                  </h5>
                  <p className="text-[11px] text-zinc-500 mt-1">
                    {SUPPLIER_OPTIONS[subIndices.vendors].description}
                  </p>

                  <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-zinc-200/50 dark:border-zinc-850 text-[10px] font-mono text-zinc-500">
                    <div>
                      <span>Delivery: </span>
                      <strong className="text-zinc-750 dark:text-zinc-300 block">{SUPPLIER_OPTIONS[subIndices.vendors].deliverySchedule}</strong>
                    </div>
                    <div>
                      <span>Min Order: </span>
                      <strong className="text-zinc-750 dark:text-zinc-300 block">{SUPPLIER_OPTIONS[subIndices.vendors].minOrder}</strong>
                    </div>
                    <div>
                      <span>Billing Terms: </span>
                      <strong className="text-zinc-750 dark:text-zinc-300 block">{SUPPLIER_OPTIONS[subIndices.vendors].terms}</strong>
                    </div>
                  </div>
                </div>

                {/* SKU Table list */}
                <div className="bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-100 dark:border-zinc-850 rounded-xl overflow-hidden leading-tight">
                  <div className="grid grid-cols-12 bg-zinc-100 dark:bg-zinc-900 p-2.5 text-[9px] uppercase tracking-wider font-extrabold text-zinc-500 pb-2">
                    <span className="col-span-6">Catalog Chemical Item</span>
                    <span className="col-span-3">Item Code</span>
                    <span className="col-span-3 text-right">Unit Price</span>
                  </div>

                  <div className="divide-y divide-zinc-100 dark:divide-zinc-850/60 font-mono text-[11px]">
                    {SUPPLIER_OPTIONS[subIndices.vendors].skus.map((sku, idx) => (
                      <div key={idx} className="grid grid-cols-12 p-3 text-zinc-700 dark:text-zinc-300 sm:items-center">
                        <span className="col-span-6 font-bold font-sans text-zinc-900 dark:text-zinc-150">{sku.item}</span>
                        <span className="col-span-3 text-[10px] opacity-75">{sku.code}</span>
                        <span className="col-span-3 text-right text-xs font-bold text-sky-600 dark:text-sky-400">
                          {sku.price} <span className="text-[9px] opacity-65 font-normal"> / {sku.unit}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SAFETY CHECKLISTS */}
          {activeTab === 'procedures' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-zinc-200 dark:border-zinc-800 pb-4 gap-3">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono font-bold tracking-widest text-amber-500 uppercase">
                    📋 Compliance Checklists
                  </span>
                  <h4 className="font-extrabold text-zinc-900 dark:text-white text-base">
                    Chemical & Route Daily Procedures
                  </h4>
                </div>

                <div className="flex bg-zinc-100 dark:bg-zinc-950 p-1 rounded-lg border border-zinc-200/50 dark:border-zinc-800/80">
                  {PROCEDURES_OPTIONS.map((opt, idx) => (
                    <button
                      key={opt.id}
                      onClick={() => changeSubIndex('procedures', idx)}
                      className={cn(
                        "px-2.5 py-1 text-[9px] font-bold uppercase rounded-md transition-all cursor-pointer",
                        subIndices.procedures === idx 
                          ? "bg-amber-500 text-white shadow-xs" 
                          : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                      )}
                    >
                      Shift #{idx + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Checklist Details */}
              <div className="space-y-4">
                <div className="p-4 bg-amber-50/20 border border-amber-100 dark:bg-amber-955/5 dark:border-amber-900/40 rounded-xl flex justify-between items-center flex-wrap gap-2">
                  <div className="space-y-1">
                    <h5 className="text-xs font-bold text-amber-900 dark:text-amber-300">
                      {PROCEDURES_OPTIONS[subIndices.procedures].name}
                    </h5>
                    <p className="text-[11px] text-zinc-500 leading-normal max-w-md">
                      {PROCEDURES_OPTIONS[subIndices.procedures].description}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-amber-500/10 text-amber-600 rounded">
                    🕙 {PROCEDURES_OPTIONS[subIndices.procedures].timeframe}
                  </span>
                </div>

                <div className="space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-850">
                  {PROCEDURES_OPTIONS[subIndices.procedures].steps.map((step, idx) => {
                    const stepKey = `${PROCEDURES_OPTIONS[subIndices.procedures].id}-${idx}`;
                    const checked = checkedSteps[stepKey] || false;
                    return (
                      <div
                        key={idx}
                        onClick={() => toggleCheckStep(stepKey)}
                        className={cn(
                          "p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3",
                          checked
                            ? "bg-zinc-50/80 dark:bg-zinc-950/40 border-zinc-200 dark:border-zinc-800/60 opacity-60"
                            : "bg-white dark:bg-zinc-900/50 border-zinc-205 dark:border-zinc-800 hover:bg-zinc-50"
                        )}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => {}} // toggled via parent div click
                          className="w-4 h-4 text-sky-500 border-zinc-300 rounded focus:ring-sky-500 mt-0.5 cursor-pointer accent-sky-500"
                        />
                        <div className="space-y-1 text-xs">
                          <p className={cn("font-medium text-zinc-800 dark:text-zinc-200 leading-relaxed", checked && "line-through text-zinc-500")}>
                            {step.task}
                          </p>
                          <div className="flex gap-4 text-[9px] font-mono text-zinc-400">
                            <span>Assign: <strong className="text-zinc-500 dark:text-zinc-300">{step.assignedTo}</strong></span>
                            <span>Verify: <strong className="text-zinc-500 dark:text-zinc-300 uppercase">{step.verification}</strong></span>
                            {step.critical && (
                              <span className="text-red-500 font-bold uppercase tracking-wider">CRITICAL DIRECTIVE</span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: DISPUTE FAQS */}
          {activeTab === 'faqs' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-zinc-200 dark:border-zinc-800 pb-4 gap-3">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono font-bold tracking-widest text-purple-500 uppercase">
                    💬 Conflict SOP
                  </span>
                  <h4 className="font-extrabold text-zinc-900 dark:text-white text-base">
                    Algae Disputes & Client Handbooks
                  </h4>
                </div>

                <div className="flex bg-zinc-100 dark:bg-zinc-950 p-1 rounded-lg border border-zinc-200/50 dark:border-zinc-800/80">
                  {FAQ_OPTIONS.map((opt, idx) => (
                    <button
                      key={opt.id}
                      onClick={() => changeSubIndex('faqs', idx)}
                      className={cn(
                        "px-2.5 py-1 text-[9px] font-bold uppercase rounded-md transition-all cursor-pointer",
                        subIndices.faqs === idx 
                          ? "bg-purple-500 text-white shadow-xs" 
                          : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                      )}
                    >
                      FAQ #{idx + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active FAQ Option */}
              <div className="space-y-4">
                <div className="p-3 bg-purple-50/20 border border-purple-100 dark:bg-purple-955/5 dark:border-purple-900/40 rounded-xl">
                  <div className="flex justify-between items-center">
                    <h5 className="text-xs font-bold text-purple-900 dark:text-purple-300">
                      {FAQ_OPTIONS[subIndices.faqs].name}
                    </h5>
                    <span className="text-[9px] font-mono px-2 py-0.5 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded">
                      {FAQ_OPTIONS[subIndices.faqs].category}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-500 mt-1 leading-normal">
                    {FAQ_OPTIONS[subIndices.faqs].description}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {FAQ_OPTIONS[subIndices.faqs].qas.map((qa, idx) => (
                    <div key={idx} className="p-4 bg-zinc-50/60 dark:bg-zinc-950/40 border border-zinc-150 dark:border-zinc-850 rounded-xl space-y-3 text-xs leading-relaxed">
                      <div className="font-extrabold text-zinc-900 dark:text-zinc-100 flex gap-2">
                        <span className="text-purple-500 font-mono">Q:</span>
                        <span>{qa.question}</span>
                      </div>

                      <div className="text-zinc-650 dark:text-zinc-300 pl-4 border-l border-purple-200 dark:border-purple-900 flex gap-2">
                        <span className="text-emerald-500 font-mono font-bold">A:</span>
                        <p>{qa.answer}</p>
                      </div>

                      {qa.flowChartStep && (
                        <div className="pl-4 pt-1 text-[9px] font-mono text-zinc-400">
                          <span className="bg-zinc-100 dark:bg-zinc-900 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-800 text-sky-600 block leading-normal">
                            💼 DECISION RESOLUTION PIPELINE:<br />
                            <strong className="text-zinc-650 dark:text-zinc-300 font-normal block mt-0.5 text-[10px] tracking-tight">{qa.flowChartStep}</strong>
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: INTEGRATED CONTRACT ESTIMATOR (CLEANED) */}
          {activeTab === 'quotes' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-zinc-200 dark:border-zinc-800 pb-4 gap-3">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono font-bold tracking-widest text-emerald-500 uppercase">
                    🧮 Pricing Calibration
                  </span>
                  <h4 className="font-extrabold text-zinc-900 dark:text-white text-base">
                    Pool Route Contract Quote Estimator
                  </h4>
                </div>

                <div className="flex bg-zinc-100 dark:bg-zinc-950 p-1 rounded-lg border border-zinc-200/50 dark:border-zinc-800/80">
                  {QUOTE_CALCULATORS.map((opt, idx) => (
                    <button
                      key={opt.id}
                      onClick={() => changeSubIndex('quotes', idx)}
                      className={cn(
                        "px-2 py-1 text-[9px] font-bold uppercase rounded-md transition-all cursor-pointer",
                        subIndices.quotes === idx 
                          ? "bg-emerald-500 text-white shadow-xs" 
                          : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                      )}
                    >
                      Type #{idx + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Estimator Interface */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Left panel: Sliding parameters */}
                <div className="md:col-span-7 bg-zinc-50 dark:bg-zinc-950/40 p-4 border border-zinc-200/80 dark:border-zinc-850 rounded-xl space-y-4">
                  <h5 className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest pb-1 border-b border-zinc-200/50 dark:border-zinc-850">
                    Sizer contract Adjustments
                  </h5>

                  {QUOTE_CALCULATORS[subIndices.quotes].calcType === 'catering' && (
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1">
                          <span className="text-zinc-650 dark:text-zinc-350">Estimated Pool Water Volume</span>
                          <span className="text-emerald-500 font-mono">{calcVolume}k gallons</span>
                        </div>
                        <input
                          type="range"
                          min="5"
                          max="40"
                          step="5"
                          value={calcVolume}
                          onChange={(e) => setCalcVolume(Number(e.target.value))}
                          className="w-full accent-emerald-500 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-lg cursor-pointer"
                        />
                        <div className="flex justify-between text-[9px] text-zinc-400 mt-1">
                          <span>Min: 5k gal</span>
                          <span>Max: 40k gal</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1">
                          <span className="text-zinc-650 dark:text-zinc-350">Weekly Dispatch Visits</span>
                          <span className="text-emerald-500 font-mono">{calcVisits} vis/week</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="3"
                          value={calcVisits}
                          onChange={(e) => setCalcVisits(Number(e.target.value))}
                          className="w-full accent-emerald-500 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-lg cursor-pointer"
                        />
                        <div className="flex justify-between text-[9px] text-zinc-400 mt-1">
                          <span>1 visit/week</span>
                          <span>3 visits/week</span>
                        </div>
                      </div>

                      <div>
                        <span className="block text-xs font-bold text-zinc-650 dark:text-zinc-350 mb-1.5">
                          Sanitizer Treatment Tier
                        </span>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { tier: 1.0, label: 'Standard Chlorine', icon: Droplets },
                            { tier: 1.5, label: 'Premium Balancing', icon: Trophy },
                            { tier: 2.3, label: 'VIP Saltwater Cell', icon: Sparkles }
                          ].map((item) => (
                            <button
                              key={item.tier}
                              onClick={() => setCalcWaterTier(item.tier)}
                              className={cn(
                                "p-2 rounded-lg border text-[10px] font-semibold text-center flex flex-col items-center justify-center cursor-pointer transition-all leading-tight",
                                calcWaterTier === item.tier
                                  ? "border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-450"
                                  : "border-zinc-200 dark:border-zinc-800 text-zinc-500 bg-white dark:bg-zinc-900 hover:bg-zinc-50"
                              )}
                            >
                              <item.icon className="w-3.5 h-3.5 mb-1 text-center shrink-0" />
                              <span>{item.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {QUOTE_CALCULATORS[subIndices.quotes].calcType === 'dispatch' && (
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1">
                          <span className="text-zinc-650 dark:text-zinc-350">Travel Distance</span>
                          <span className="text-emerald-500 font-mono">{calcDistance} miles</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="80"
                          value={calcDistance}
                          onChange={(e) => setCalcDistance(Number(e.target.value))}
                          className="w-full accent-emerald-500 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-lg cursor-pointer"
                        />
                        <div className="flex justify-between text-[9px] text-zinc-400 mt-1">
                          <span>In-city (1m)</span>
                          <span>Regional (80m)</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1">
                          <span className="text-zinc-650 dark:text-zinc-350">Diagnostic Repair labor</span>
                          <span className="text-emerald-500 font-mono">{calcHours} hours</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="10"
                          value={calcHours}
                          onChange={(e) => setCalcHours(Number(e.target.value))}
                          className="w-full accent-emerald-500 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-lg cursor-pointer"
                        />
                        <div className="flex justify-between text-[9px] text-zinc-400 mt-1">
                          <span>1 hour</span>
                          <span>10 hours</span>
                        </div>
                      </div>

                      <div>
                        <span className="block text-xs font-bold text-zinc-650 dark:text-zinc-350 mb-1.5">
                          Urgency Tier Adjustment
                        </span>
                        <div className="grid grid-cols-2 gap-2 text-[10px]">
                          <button
                            onClick={() => setCalcUrgency(1.0)}
                            className={cn(
                              "p-2 rounded-lg border font-bold cursor-pointer text-center",
                              calcUrgency === 1.0
                                ? "border-emerald-500 bg-emerald-500/10 text-emerald-600"
                                : "border-zinc-205 dark:border-zinc-800 text-zinc-550 bg-white dark:bg-zinc-900"
                            )}
                          >
                            Weekdays (1x base)
                          </button>
                          <button
                            onClick={() => setCalcUrgency(1.8)}
                            className={cn(
                              "p-2 rounded-lg border font-bold cursor-pointer text-center",
                              calcUrgency === 1.8
                                ? "border-emerald-500 bg-emerald-500/10 text-emerald-600"
                                : "border-zinc-205 dark:border-zinc-800 text-zinc-550 bg-white dark:bg-zinc-900"
                            )}
                          >
                            Holiday/Night (1.8x base)
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {QUOTE_CALCULATORS[subIndices.quotes].calcType === 'agreement' && (
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1">
                          <span className="text-zinc-650 dark:text-zinc-350">Combined Water Surface Area</span>
                          <span className="text-emerald-500 font-mono">{calcSurface} sq ft</span>
                        </div>
                        <input
                          type="range"
                          min="500"
                          max="15000"
                          step="500"
                          value={calcSurface}
                          onChange={(e) => setCalcSurface(Number(e.target.value))}
                          className="w-full accent-emerald-500 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-lg cursor-pointer"
                        />
                        <div className="flex justify-between text-[9px] text-zinc-400 mt-1">
                          <span>500 sq ft</span>
                          <span>15,000 sq ft</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1">
                          <span className="text-zinc-650 dark:text-zinc-350">Service Frequency</span>
                          <span className="text-emerald-500 font-mono">{calcCommVisits} visits/week</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="7"
                          value={calcCommVisits}
                          onChange={(e) => setCalcCommVisits(Number(e.target.value))}
                          className="w-full accent-emerald-500 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-lg cursor-pointer"
                        />
                        <div className="flex justify-between text-[9px] text-zinc-400 mt-1">
                          <span>1 time / week</span>
                          <span>Daily (7 times / week)</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-zinc-650 dark:text-zinc-350 mb-1">
                          Logging & Reporting Intensity
                        </label>
                        <select
                          value={calcLogGrade}
                          onChange={(e) => setCalcLogGrade(Number(e.target.value))}
                          className="w-full text-xs p-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg cursor-pointer"
                        >
                          <option value="1.0">Basic Hand-signed Logs (1.0x)</option>
                          <option value="1.4">Standard Chemical Digital Audits (1.4x)</option>
                          <option value="2.0">Hourly State Board Water Log Compliance (2.0x)</option>
                        </select>
                      </div>
                    </div>
                  )}

                </div>

                {/* Right panel: Grand pricing sheet */}
                <div className="md:col-span-5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-950 dark:text-emerald-100 p-5 rounded-xl space-y-4">
                  <div className="space-y-1">
                    <span className="text-[8px] font-mono tracking-widest uppercase text-emerald-600 block font-bold">
                      Calibrated Quote Summary
                    </span>
                    <h5 className="font-extrabold text-[11px] leading-tight text-zinc-900 dark:text-zinc-100">
                      {QUOTE_CALCULATORS[subIndices.quotes].name}
                    </h5>
                  </div>

                  <p className="text-[10px] text-zinc-550 leading-relaxed font-sans italic">
                    "{QUOTE_CALCULATORS[subIndices.quotes].description}"
                  </p>

                  <div className="pt-3 border-t border-emerald-500/20 text-center">
                    <span className="text-[9px] uppercase tracking-wider block font-bold text-zinc-550 dark:text-zinc-450 font-mono">
                      Calculated Dispatch Contract Value
                    </span>
                    <div className="font-black text-3xl font-mono text-emerald-600 dark:text-emerald-450 mt-1.5 flex justify-center items-center">
                      <DollarSign className="w-6 h-6 stroke-[3.5]" />
                      <span>{calculateTotal().toFixed(2)}</span>
                    </div>
                    <span className="text-[8px] text-zinc-400 font-semibold block mt-1">
                      {QUOTE_CALCULATORS[subIndices.quotes].calcType === 'catering' ? 'billed weekly recurring' : 'one-time flat estimate fee'}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      triggerToast("Quote calculated and recorded successfully under business catalog ID!");
                    }}
                    className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all text-white font-bold text-[10px] uppercase rounded-lg cursor-pointer border border-emerald-500/30 font-sans"
                  >
                    ✨ Store Quote Prospectus
                  </button>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
