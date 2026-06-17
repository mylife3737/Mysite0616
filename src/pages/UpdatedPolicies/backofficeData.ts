// Back-office handy sheets and templates for a pool maintenance and chemistry service (such as Aqua Glow)
// Each category has 2 or 3 robust page options containing handy day-to-day operations files
// Completely emoji-free as per client constraints

export interface PhoneListOption {
  id: string;
  name: string;
  description: string;
  iconName: string;
  contacts: {
    name: string;
    role: string;
    phone: string;
    notes: string;
    urgency: 'high' | 'medium' | 'low';
  }[];
}

export interface SupplierOption {
  id: string;
  name: string;
  description: string;
  deliverySchedule: string;
  minOrder: string;
  terms: string;
  skus: {
    item: string;
    code: string;
    price: string;
    unit: string;
  }[];
}

export interface ChecklistOption {
  id: string;
  name: string;
  description: string;
  timeframe: string;
  steps: {
    task: string;
    assignedTo: string;
    critical: boolean;
    verification: string;
  }[];
}

export interface FAQOption {
  id: string;
  name: string;
  description: string;
  category: string;
  qas: {
    question: string;
    answer: string;
    flowChartStep?: string;
  }[];
}

export interface CalcFactor {
  label: string;
  min: number;
  max: number;
  step: number;
  unit: string;
}

export interface QuoteOption {
  id: string;
  name: string;
  description: string;
  calcType: 'catering' | 'dispatch' | 'agreement';
  baseRate: number;
  factors: {
    [key: string]: {
      label: string;
      value: number;
      min: number;
      max: number;
      step: number;
      unit: string;
    };
  };
}

// 1. Phone Lists
export const PHONE_LIST_OPTIONS: PhoneListOption[] = [
  {
    id: "phone-opt-1",
    name: "Crisis SOS and Core Staff Tree",
    description: "In case of chemical spills, route vehicle failure, or heavy storm surges. Call in sequential order.",
    iconName: "ShieldAlert",
    contacts: [
      { name: "Officer Jenkins", role: "Night Patrol Security Guard", phone: "555-0322", notes: "Call for suspicious chemical yard activity or silent yard gate alarms", urgency: "high" },
      { name: "Tim O'Malley", role: "Emergency Water Supply Specialist", phone: "555-0199", notes: "Charges double after 10 PM. Only call for active commercial pump pipeline flooding.", urgency: "high" },
      { name: "Stan Miller", role: "Landlord (Miller Real Estate)", phone: "555-0102", notes: "Call for chlorine warehouse structural leaks. Takes substantial time to reply.", urgency: "medium" },
      { name: "Sarah Higgins", role: "Field Route Manager", phone: "555-0144", notes: "For employee schedule emergencies, key replacements, or if vehicle yard did not lock.", urgency: "medium" },
      { name: "Alex Rivers", role: "Assistant Dispatcher", phone: "555-0158", notes: "Backup scheduler and routing map credentials manager", urgency: "low" }
    ]
  },
  {
    id: "phone-opt-2",
    name: "Chemical Wholesalers and Equipment Suppliers",
    description: "Wholesale chemical accounts, pump suppliers, and local parts dispatch numbers.",
    iconName: "ShoppingBag",
    contacts: [
      { name: "Florida Pool Pro Wholesalers", role: "Primary Liquid Chlorine Partner", phone: "555-7301", notes: "Account 9983A. Call by 12 PM Tuesday for the Friday morning drop.", urgency: "high" },
      { name: "Precision Chem Supply Systems", role: "Sanitizer and pH Balancer Supplier", phone: "555-6677", notes: "Account CHEM-33. Acid drops schedule is Mon/Wed/Fri 5:00 AM.", urgency: "high" },
      { name: "AquaTech Filter Manufacturer", role: "Cartridge and Grid Logistics", phone: "555-4421", notes: "Account 881920. Custom replacement grids take five business days to ship.", urgency: "medium" },
      { name: "Solar Heat Exchange Co", role: "Commercial Pool Heater Auditor", phone: "555-9088", notes: "Account 909-SHE. Maintenance is scheduled for the first Thursday of the month.", urgency: "medium" }
    ]
  },
  {
    id: "phone-opt-3",
    name: "Critical Local Services and Inspectors",
    description: "County water quality inspectors, safety auditors, and state licensing desks.",
    iconName: "Shield",
    contacts: [
      { name: "County Health Department", role: "Lead Inspector (Officer Brenda)", phone: "555-9911", notes: "Keep dry storage locked, prove chemical warning stickers are placed, show logbook", urgency: "high" },
      { name: "Regional Service Escalations", role: "Regional Corporate Escalations", phone: "555-8800", notes: "Only call if a client threatens legal action or public reviews.", urgency: "medium" },
      { name: "State Water Board Safety", role: "State Mechanical Safety Auditor", phone: "555-2204", notes: "License expires November 2026. File fee paid.", urgency: "low" },
      { name: "Fire Marshall Hazard Hub", role: "Extinguisher and Dry Storage Testing", phone: "555-7722", notes: "Annual chemical storage safety review scheduled for first Monday of August", urgency: "low" }
    ]
  }
];

// 2. Companies We Order From
export const SUPPLIER_OPTIONS: SupplierOption[] = [
  {
    id: "supplier-opt-1",
    name: "Florida Pool Pro Chemical Supply",
    description: "Primary provider of sanitizers, dry acids, and mineral stabilizers.",
    deliverySchedule: "Monday, Wednesday, Friday at 5:30 AM",
    minOrder: "$250.00 flat threshold",
    terms: "Net-15 Invoice Cycle",
    skus: [
      { item: "Liquid Chlorine Drum (Premium Option)", code: "SKU-CHLOR-LIQ", price: "$18.50", unit: "5 Gal Drum" },
      { item: "Trichlor Chlorine Tablets (3-Inch)", code: "SKU-CHLOR-TAB", price: "$185.00", unit: "50 lb Bucket" },
      { item: "Dry Muriatic Acid Mineral crystals", code: "SKU-ACID-DRY", price: "$32.00", unit: "25 lb Bag" },
      { item: "Cyanuric Acid Stabilizer UV Shielder", code: "SKU-CYA-STAB", price: "$48.00", unit: "20 lb Bag" },
      { item: "Liquid Copper-Base Active Algaecide", code: "SKU-ALGAE-COP", price: "$16.00", unit: "1 Qt Bottle" }
    ]
  },
  {
    id: "supplier-opt-2",
    name: "Premium Filter Grid and Pump Components",
    description: "Schedules of filtration media, cartridge filters, PVC connectors, and motor seal replacements.",
    deliverySchedule: "Monthly on the 1st (Shipped ground)",
    minOrder: "$300.00 order minimum",
    terms: "Direct Card charging",
    skus: [
      { item: "100 sq ft Cartridge Filter Element", code: "SKU-FILT-100", price: "$65.00", unit: "Individual PC" },
      { item: "DE Filter Grid Assembly (Full Set)", code: "SKU-GRID-DE8", price: "$195.00", unit: "8-Grid Set" },
      { item: "Variable Speed Pump Seal Replacement Gasket", code: "SKU-PMP-SEAL", price: "$22.00", unit: "Gasket Kit" },
      { item: "Two-way PVC Ball Valves (2-Inch slip)", code: "SKU-PVC-VALV", price: "$14.50", unit: "Individual Valve" },
      { item: "Commercial Suction Pressure Air Gauge", code: "SKU-PRES-GAUG", price: "$18.00", unit: "Individual Unit" }
    ]
  },
  {
    id: "supplier-opt-3",
    name: "Aqua Clean Fleet and Truck Supplies",
    description: "SOP-mandated water test kits, aluminum telepoles, high-mesh skimming nets, and calibration tools.",
    deliverySchedule: "Bi-Weekly on Tuesdays by 2 PM",
    minOrder: "No minimum, free delivery over $100.00",
    terms: "COD (Cash On Delivery bank draft)",
    skus: [
      { item: "Taylor K-2006 Complete Liquid Test Kit", code: "SKU-TAYR-TEST", price: "$82.00", unit: "Boxed Kit" },
      { item: "Commercial Telepole (Double-lock 16-foot)", code: "SKU-POLE-COM", price: "$45.00", unit: "Solid Pole" },
      { item: "Heavy Duty Deep-Silt Leaf Rake Net", code: "SKU-NET-LEAF", price: "$28.00", unit: "Complete Head" },
      { item: "Stainless Algae Brush (18-Inch Metal)", code: "SKU-BRSH-WALL", price: "$19.50", unit: "Brush Head" },
      { item: "Digital Salinity and TDS Electronic Probe", code: "SKU-SLNT-MTR", price: "$115.00", unit: "Probe Unit" }
    ]
  }
];

// 3. Opening & Closing Procedures
export const PROCEDURES_OPTIONS: ChecklistOption[] = [
  {
    id: "proc-opt-1",
    name: "Morning Route Start and Truck Safety Checklist",
    description: "Procedures to guide field service technicians to prepare their service trucks and load active chemistry safely.",
    timeframe: "05:30 AM - 07:00 AM Daily",
    steps: [
      { task: "Check truck chem deck lock mechanisms. Confirm liquid chlorine Drums are lashed upright.", assignedTo: "Opening Technician", critical: true, verification: "Strap-latch check log" },
      { task: "Test truck emergency parking brakes and review hazardous chemical placards.", assignedTo: "Route Driver", critical: true, verification: "Placard visible check" },
      { task: "Verify Taylor liquid reagent vials are full and fresh. Supply safety eyewear to team.", assignedTo: "Route Driver", critical: false, verification: "Reagent check complete" },
      { task: "Retrieve customer backyard lock codes from secure digital terminal base.", assignedTo: "Opening Technician", critical: true, verification: "Tally in route system log" },
      { task: "Unlock fleet yard entrance gate. Move service trucks out and secure main fence.", assignedTo: "General Staff", critical: false, verification: "Double lock secured" }
    ]
  },
  {
    id: "proc-opt-2",
    name: "Evening Truck Shutdown and Chemical Log Audit",
    description: "Essential procedures to wash down truck decks, store unused pool chemistry, and drop client logs.",
    timeframe: "04:30 PM - 06:00 PM Daily",
    steps: [
      { task: "Wipe down chemical utility decks. Check for acid drips or chlorine leaks.", assignedTo: "Closing Technician", critical: true, verification: "Physical clean logs signed" },
      { task: "Store unused chemical packages in the shaded dry storage warehouse away from direct sun.", assignedTo: "Closing Lead", critical: true, verification: "Lock box dial turned" },
      { task: "Unload spent filters and dump debris into regional commercial dumpster centers.", assignedTo: "General Staff", critical: false, verification: "Bin latch checked" },
      { task: "Settle customer service logs. Input chemical salinity values to route software portal.", assignedTo: "Closing Lead", critical: true, verification: "Server database update finished" },
      { task: "Verify variable fleet vehicles are fully parked in central yard. Engage master alarm.", assignedTo: "Closing Lead", critical: true, verification: "Security light activation check" }
    ]
  },
  {
    id: "proc-opt-3",
    name: "Sunday Deep Equipment Service and Filter Backwash",
    description: "Weekly procedures to service major filtration units, clean chemical injectors, and cycle valves.",
    timeframe: "Sunday Routing (07:00 AM - 12:30 PM)",
    steps: [
      { task: "Engage primary power breakers downward. Flip valve handles to backwash filter systems.", assignedTo: "Lead Technician", critical: true, verification: "Silt glass check runs clear" },
      { task: "Submerge salt-chlorine cells in commercial acid bath to remove scale buildup.", assignedTo: "Support Tech", critical: false, verification: "Cell grid sparkles cleanly" },
      { task: "Deep clean pump lint baskets and main skimmer catch pots. Secure safety lids.", assignedTo: "General Staff", critical: true, verification: "Lock indicators click" },
      { task: "Calibrate regional public facility chemical feeders and drop warning markers.", assignedTo: "Lead Technician", critical: true, verification: "PPM dials log entry" }
    ]
  }
];

// 4. FAQ Pages
export const FAQ_OPTIONS: FAQOption[] = [
  {
    id: "faq-opt-1",
    name: "Green Water Disputes and Unbalanced Pools",
    description: "Standard handling protocols for client service requests regarding rainy weather blooms and algae complaints.",
    category: "Customer Relations",
    qas: [
      {
        question: "What if a residential water client claims the pool turned green within 48 hours of treatment?",
        answer: "Speak calmly. Explain how sudden severe rainstorms inject high levels of bio-organic nitrogen and phosphates, which consumes sanitizer instantly. Request a technician return for active triple-shock treatment immediately, without charging guest fees.",
        flowChartStep: "Log Complaint -> Verify Rain Event -> Dispatch Free Diagnostic -> Double-Shock Chemistry"
      },
      {
        question: "Can customers immediately swim in pool water after a high-chlorine shock service?",
        answer: "Absolutely not. Inform the client that swimming is prohibited for at least two hours. Water chemistry levels must balance below 4.0 PPM. Leave a bright yellow door hanger on the master yard gate.",
        flowChartStep: "Service Completed -> Measure PPM -> Leave Safety Door Hanger -> Restrict Entry"
      },
      {
        question: "A client demands full service refunds due to persistent heat-wave cloudiness?",
        answer: "Apologize for the inconvenience. Offer a complimentary steel brush down, phosphate treatment booster, and pump grid wash. Escalate to Sarah only if they threaten online review damage.",
        flowChartStep: "Validate History -> Schedule Free Brush Down -> Add Algae Inhibitor -> Review Escalation"
      }
    ]
  },
  {
    id: "faq-opt-2",
    name: "Equipment Drops, Pipe Leaks, and Valve Failures",
    description: "Immediate action sequences for technicians experiencing sudden equipment issues or site floods.",
    category: "Emergency Operations",
    qas: [
      {
        question: "The customer main pool pump has lost pressure flow or is sucking air?",
        answer: "Turn off pump breaker instantly. Double check hair-and-lint lid gasket. Apply silicone grease to rubber seal, clean debris, prime pump pot with water, and restore power.",
        flowChartStep: "Shutdown Power -> Check Lid Gasket -> Prime Pump Pot -> Restore Power"
      },
      {
        question: "The PVC main pressure valve cracked or is leaking during a service visit?",
        answer: "Shut down system power on mechanical board. Open filter relief valve to discharge head water. Apply temporary pipeline pressure wraps, log route notes, and call Tim's emergency line if critical.",
        flowChartStep: "Switch off System -> open Air Release -> Apply Pressure wrap -> Call Emergency Plumber"
      },
      {
        question: "The master salt saltwater generator displays dark cells or low flow alarms?",
        answer: "Check route history. Turn off system. Clean flow sensor with mild water. If issue remains, service scale scaling using a acid mixture wash.",
        flowChartStep: "Turn off unit -> Check Flow Switch -> Acid Clean Cell Grid -> Re-Test Flow"
      }
    ]
  },
  {
    id: "faq-opt-3",
    name: "Employee Route Logs and Chemical Safety Standards",
    description: "Mandatory compliance rules regarding vehicle chemicals, test tubes, and backyards.",
    category: "Staff Standards",
    qas: [
      {
        question: "What safety gear is mandatory during active muriatic acid testing and dosing?",
        answer: "All technicians must wear high-density chemical gloves and wrap safety goggles. Always stand upwind from the pool basin when pouring active minerals to prevent toxic vapor inhalation.",
        flowChartStep: "Wear Safety Glasses -> Check Wind Direction -> Dose Pool Basin -> Log chemistry"
      },
      {
        question: "Can employees take home extra chemical materials for personal pool uses?",
        answer: "Absolutely prohibited. Every dry bag and liquid drum must match specific client service logs. Unauthorized inventory removal leads to termination.",
        flowChartStep: "Check Truck Inventory -> Verify Route Usage -> Return Extra to Yard"
      },
      {
        question: "What is the cell phone policy when navigating inside target residential yard gates?",
        answer: "Devices must remain stored in truck cabs or pockets. Walking near deep pool water while holding screens creates a severe slip-and-fall risk and looks unprofessional to observing clients.",
        flowChartStep: "Lock Phone in Pocket -> Inspect Deck Safety -> Service Vessel"
      }
    ]
  }
];

// 5. Quote Estimator Calculators (Interactive page options)
export const QUOTE_CALCULATORS: QuoteOption[] = [
  {
    id: "quote-opt-1",
    name: "Weekly Residential Pool Service Agreement",
    description: "Estimator tool to generate pricing slips based on pool fluid volume, weekly dispatch intervals, and filtration types.",
    calcType: "catering", // maps to internal render logic structure
    baseRate: 45.00, // weekly service cost
    factors: {
      guestsCount: { label: "Estimated Pool Water Volume", value: 15, min: 5, max: 40, step: 5, unit: "k gallons" },
      staffHours: { label: "Weekly Dispatch Route Visits", value: 1, min: 1, max: 3, step: 1, unit: "visits" },
      cateringTier: { label: "Water chemistry index (1=Basic, 2.5=VIP Saltwater)", value: 1.2, min: 1.0, max: 2.5, step: 0.1, unit: "index" }
    }
  },
  {
    id: "quote-opt-2",
    name: "Emergency Service Call and Direct Leak Diagnostics",
    description: "Calculate immediate dispatch travel mileage coverage, equipment leak pressure scans, and labor rates.",
    calcType: "dispatch",
    baseRate: 75.00, // basic service call drop
    factors: {
      onSiteHours: { label: "Estimated Diagnostic and Repair Hours", value: 2, min: 1, max: 10, step: 1, unit: "hours" },
      travelDistance: { label: "One-Way Distance from Service Hub", value: 15, min: 1, max: 80, step: 1, unit: "miles" },
      nightWeekend: { label: "Urgency Multiplier (1=Standard, 2=Holiday Call)", value: 1.5, min: 1.0, max: 2.0, step: 0.5, unit: "multiplier" }
    }
  },
  {
    id: "quote-opt-3",
    name: "Commercial Association and Hotel Agreement",
    description: "Recurring package contracts for public facility pools requiring strict state sanitization logs.",
    calcType: "agreement",
    baseRate: 150.00, // base account administration fee
    factors: {
      squareFootage: { label: "Combined Water Surface Area", value: 2500, min: 500, max: 15000, step: 500, unit: "sq ft" },
      visitFrequency: { label: "Service Visits per Week", value: 3, min: 1, max: 7, step: 1, unit: "times" },
      cleaningGrade: { label: "Logging frequency multiplier (1x=SOP, 2x=Hourly Log)", value: 1.4, min: 1.0, max: 2.0, step: 0.2, unit: "index" }
    }
  }
];
