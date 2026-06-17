import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Trash2, 
  Printer, 
  Copy, 
  Check, 
  Sliders, 
  Bookmark, 
  Droplets,
  Edit3,
  CheckCircle2,
  AlertTriangle,
  FolderLock
} from 'lucide-react';
import { cn } from '../../utils';
import { PolicyItem } from './types';

interface PublishedManualProps {
  policies: PolicyItem[];
  previewPolicy: PolicyItem | null;
  setPreviewPolicy: (p: PolicyItem | null) => void;
  onUpdatePolicy: (p: PolicyItem) => void;
  onDeletePolicy: (id: string) => void;
  categories: string[];
  triggerToast: (msg: string) => void;
}

export default function PublishedManual({
  policies,
  previewPolicy,
  setPreviewPolicy,
  onUpdatePolicy,
  onDeletePolicy,
  categories,
  triggerToast
}: PublishedManualProps) {
  // Filters & State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isEditing, setIsEditing] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // Filter policies based on selections
  const filteredPolicies = policies.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const searchString = `${p.title} ${p.objective} ${p.category} ${p.vibe}`.toLowerCase();
    const matchesSearch = searchString.includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle local in-place updates
  const handleFieldChange = (field: keyof PolicyItem, value: any) => {
    if (!previewPolicy) return;
    const updated = { ...previewPolicy, [field]: value };
    setPreviewPolicy(updated);
    onUpdatePolicy(updated);
  };

  const handleRuleChange = (index: number, value: string) => {
    if (!previewPolicy) return;
    const updatedRules = [...previewPolicy.rules];
    updatedRules[index] = value;
    const updated = { ...previewPolicy, rules: updatedRules };
    setPreviewPolicy(updated);
    onUpdatePolicy(updated);
  };

  const handleCopyToClipboard = (p: PolicyItem) => {
    const textFormat = `
=========================================
AQUA GLOW POOL SERVICE - OFFICIAL SOP
=========================================
SOP TITLE: ${p.title.toUpperCase()}
CATEGORY : ${p.category}
VIBE LEVEL: ${p.vibe}
LAST UPDATED: ${p.lastUpdated}

OBJECTIVE:
${p.objective}

PROCEDURAL RULES & DIRECTIVES:
${p.rules.map((rule, idx) => `[${idx + 1}] ${rule}`).join('\n')}

FILING STATEMENT:
${p.footerText}
=========================================
`;
    navigator.clipboard.writeText(textFormat.trim());
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
    triggerToast("SOP copied securely in standardized format!");
  };

  return (
    <div className="space-y-6 animate-fade-in text-left">
      
      {/* Search & Header Bar */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-5 rounded-2xl shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-[13px]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search published SOP manual..."
              className="w-full bg-zinc-50 dark:bg-zinc-950 pl-10 pr-4 py-2.5 border border-zinc-200 dark:border-zinc-800 rounded-xl text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase transition-all tracking-wider cursor-pointer border",
                  selectedCategory === cat
                    ? "bg-sky-500 border-sky-500 text-white shadow-xs"
                    : "bg-zinc-50 dark:bg-zinc-850 border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                )}
              >
                {cat === 'All' ? '💼 ALL SECTIONS' : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Directory List (4 columns) */}
        <div className="lg:col-span-5 space-y-3 max-h-[700px] overflow-y-auto pr-1">
          {filteredPolicies.length > 0 ? (
            filteredPolicies.map((p) => {
              const isActive = previewPolicy?.id === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() => {
                    setPreviewPolicy(p);
                    setIsEditing(false);
                  }}
                  className={cn(
                    "p-4 rounded-xl border transition-all cursor-pointer text-left relative overflow-hidden group",
                    isActive 
                      ? "border-sky-500 bg-white dark:bg-zinc-900 shadow-sm"
                      : "border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 hover:bg-white dark:hover:bg-zinc-900"
                  )}
                >
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-sky-500" />
                  )}

                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                        {p.category}
                      </span>
                      <h4 className="font-extrabold text-zinc-900 dark:text-zinc-100 text-xs mt-0.5 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                        {p.title}
                      </h4>
                      <p className="text-[10px] text-zinc-500 line-clamp-2 mt-1 leading-normal">
                        {p.objective}
                      </p>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeletePolicy(p.id);
                      }}
                      className="text-zinc-400 hover:text-red-500 p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/20 shrink-0"
                      title="Delete SOP Permanent Entry"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-zinc-100 dark:border-zinc-800/80 text-[9px] text-zinc-450 font-mono">
                    <span>Tone style: <strong className="text-zinc-600 dark:text-zinc-300">{p.vibe}</strong></span>
                    <span className="opacity-75">{p.lastUpdated}</span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center p-12 bg-zinc-100/50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <FolderLock className="w-8 h-8 text-zinc-400 mx-auto mb-2" />
              <h5 className="font-bold text-zinc-700 dark:text-zinc-300 text-xs">No policies filter match</h5>
              <p className="text-[10px] text-zinc-500 mt-1">Adjust search metrics or compile a new scrap note on the workbench.</p>
            </div>
          )}
        </div>

        {/* Right Side: Visual Binder Paper Card Selector (7 columns) */}
        <div className="lg:col-span-7">
          {previewPolicy ? (
            <div className="space-y-4">
              
              {/* Binder Action Ribbon */}
              <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 flex justify-between items-center gap-3">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border border-zinc-200 dark:border-zinc-800/80 hover:bg-zinc-50 dark:hover:bg-zinc-850",
                    isEditing && "bg-sky-50 dark:bg-sky-950/20 border-sky-200 dark:border-sky-900 text-sky-600 dark:text-sky-400"
                  )}
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>{isEditing ? "Viewing Live Mode" : "Toggle Live In-Place Editor"}</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyToClipboard(previewPolicy)}
                    className="px-4 py-2 bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-850 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-850 rounded-lg text-xs font-bold text-zinc-650 dark:text-zinc-300 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    {copySuccess ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copySuccess ? 'Copied' : 'Copy'}</span>
                  </button>

                  <button
                    onClick={() => {
                      triggerToast("Formulating document layout for standard printer grids...");
                      window.print();
                    }}
                    className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs shadow-sky-600/10"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print SOP Sheet</span>
                  </button>
                </div>
              </div>

              {/* A4 Sheet Body */}
              <div className="w-full bg-white dark:bg-zinc-950 p-8 rounded-2xl shadow-md border border-zinc-200 dark:border-zinc-900 relative overflow-hidden">
                {/* Watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.012] dark:opacity-[0.022]">
                  <Droplets className="w-80 h-80 text-sky-500" />
                </div>

                <div className="space-y-6 relative z-10">
                  
                  {/* Top stamp */}
                  <div className="flex justify-between items-start border-b border-zinc-200 dark:border-zinc-850 pb-5">
                    <div>
                      <span className="text-[9px] font-mono font-bold tracking-widest text-sky-500 uppercase">
                        AQUA GLOW POOL SERVICE
                      </span>
                      {isEditing ? (
                        <input
                          type="text"
                          value={previewPolicy.title}
                          onChange={(e) => handleFieldChange('title', e.target.value)}
                          className="w-full font-extrabold text-lg text-zinc-900 dark:text-white tracking-tight mt-1 bg-zinc-50 dark:bg-zinc-900 px-3 py-1.5 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-1 focus:ring-sky-500 focus:outline-none"
                        />
                      ) : (
                        <h3 className="font-extrabold text-lg text-zinc-900 dark:text-white tracking-tight mt-1">
                          {previewPolicy.title}
                        </h3>
                      )}
                    </div>

                    <div className="text-right">
                      <span className="text-[8px] font-mono uppercase bg-zinc-100 dark:bg-zinc-900/80 px-2 py-0.5 rounded text-zinc-505 dark:text-zinc-400 font-bold border border-zinc-200 dark:border-zinc-800">
                        {previewPolicy.category}
                      </span>
                      <p className="text-[9px] text-zinc-400 font-mono mt-1.5">SOP ID: {previewPolicy.id.substring(0, 10)}</p>
                    </div>
                  </div>

                  {/* Objective */}
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono font-bold tracking-widest text-zinc-400 uppercase">
                      Operational Objective
                    </span>
                    {isEditing ? (
                      <textarea
                        value={previewPolicy.objective}
                        onChange={(e) => handleFieldChange('objective', e.target.value)}
                        rows={3}
                        className="w-full text-xs text-zinc-600 dark:text-zinc-350 bg-zinc-50 dark:bg-zinc-900 px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-1 focus:ring-sky-500 focus:outline-none"
                      />
                    ) : (
                      <p className="text-xs text-zinc-600 dark:text-zinc-350 leading-relaxed italic bg-zinc-50/50 dark:bg-zinc-900/30 p-3.5 rounded-xl border border-zinc-100 dark:border-zinc-800/50 font-serif">
                        "{previewPolicy.objective}"
                      </p>
                    )}
                  </div>

                  {/* Standard Directives List */}
                  <div className="space-y-3.5">
                    <span className="text-[9px] font-mono font-bold tracking-widest text-zinc-400 uppercase">
                      Procedural Directives
                    </span>
                    <div className="space-y-3">
                      {previewPolicy.rules.map((rule, idx) => (
                        <div key={idx} className="flex gap-3 text-xs leading-relaxed text-zinc-750 dark:text-zinc-200">
                          <span className="font-mono font-black text-sky-500 w-4 h-4 bg-sky-500/10 dark:bg-sky-500/20 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[9px]">
                            {idx + 1}
                          </span>
                          
                          {isEditing ? (
                            <input
                              type="text"
                              value={rule}
                              onChange={(e) => handleRuleChange(idx, e.target.value)}
                              className="w-full text-xs bg-zinc-50 dark:bg-zinc-900 px-3 py-1.5 border border-zinc-205 dark:border-zinc-800 rounded-lg focus:ring-1 focus:ring-sky-500 focus:outline-none"
                            />
                          ) : (
                            <p className="pt-0.5">{rule}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Statement */}
                  <div className="border-t border-dashed border-zinc-200 dark:border-zinc-850 pt-5 flex justify-between items-end flex-wrap gap-3">
                    <div className="space-y-1">
                      <span className="text-[8px] font-mono tracking-widest text-zinc-400 uppercase">
                        SOP DOCUMENT SIGNATURE FOOTER
                      </span>
                      {isEditing ? (
                        <input
                          type="text"
                          value={previewPolicy.footerText}
                          onChange={(e) => handleFieldChange('footerText', e.target.value)}
                          className="text-xs w-72 bg-zinc-50 dark:bg-zinc-900 px-3 py-1 border border-zinc-200 dark:border-zinc-800 rounded focus:ring-1 focus:ring-sky-500 focus:outline-none"
                        />
                      ) : (
                        <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-serif">{previewPolicy.footerText}</p>
                      )}
                    </div>

                    <div className="text-right text-[9px] text-zinc-455 font-mono font-bold">
                      <div>Active Class: {previewPolicy.vibe}</div>
                      <div>Updated: {previewPolicy.lastUpdated}</div>
                    </div>
                  </div>

                </div>

                {isEditing && (
                  <div className="mt-6 p-3 bg-sky-50 dark:bg-sky-950/25 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-rose-900/20 rounded-xl text-[10px] font-mono flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-sky-500" />
                    <span>In-place sandbox synchronized. Your modifications are saved automatically to local memory.</span>
                  </div>
                )}

              </div>

            </div>
          ) : (
            <div className="text-center py-32 bg-zinc-100/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-3xl flex flex-col items-center justify-center space-y-3">
              <FolderLock className="w-10 h-10 text-zinc-450" />
              <div className="space-y-1">
                <h5 className="font-bold text-xs text-zinc-700 dark:text-zinc-300">No SOP Card Selected</h5>
                <p className="text-[10px] text-zinc-500 max-w-xs">
                  Click on any published card in the list to open it inside the premium visual document reader pane.
                </p>
              </div>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
