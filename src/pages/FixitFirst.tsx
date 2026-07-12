import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Hammer, 
  Wrench, 
  Zap, 
  Waves, 
  Droplets, 
  Clock, 
  Star, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  Check, 
  CheckCircle2, 
  AlertTriangle,
  Instagram,
  Facebook,
  Twitter,
  Upload,
  X,
  Plus,
  Image as ImageIcon,
  Video as VideoIcon,
  Tv,
  Home,
  Package,
  Grid,
  Ruler,
  Sliders,
  Layers,
  RefreshCw,
  Pin,
  Paintbrush,
  Boxes,
  Sofa,
  SlidersHorizontal,
  ShowerHead,
  Leaf,
  Fence
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  category: 'interior' | 'exterior';
}

// Custom specialized icons that are distinctive and accurate
const DiagonalBandageIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    {...props}
  >
    <g transform="translate(12 12) rotate(45) scale(1.15) translate(-12 -12)">
      {/* Outer rounded strip */}
      <rect x="4" y="8" width="16" height="8" rx="2.5" />
      {/* Center gauze pad */}
      <rect x="8" y="8" width="6" height="8" strokeDasharray="2 1" />
      {/* Holes in the gauze */}
      <circle cx="10" cy="11.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="10" cy="13.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="14" cy="11.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="14" cy="13.5" r="0.6" fill="currentColor" stroke="none" />
    </g>
  </svg>
);

const RuledAngleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    {...props}
  >
    <path d="M5 5v14h14v-4H9V5H5z" />
    <line x1="5" y1="8" x2="8" y2="8" />
    <line x1="5" y1="11" x2="8" y2="11" />
    <line x1="5" y1="14" x2="8" y2="14" />
    <line x1="5" y1="17" x2="8" y2="17" />
    <line x1="12" y1="19" x2="12" y2="16" />
    <line x1="15" y1="19" x2="15" y2="16" />
    <line x1="18" y1="19" x2="18" y2="16" />
    <path d="M9 9h2v2" strokeWidth="1" strokeDasharray="1 1" />
  </svg>
);

const DoorClosedIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    {...props}
  >
    {/* Floor line */}
    <path d="M3 21h18" />
    {/* Clean single-outline door shape to prevent 'doubled doors' look */}
    <rect x="5" y="3" width="14" height="18" rx="1.5" />
    {/* Inner decorative panels */}
    <rect x="8" y="6" width="8" height="5" strokeWidth="1" strokeOpacity="0.6" />
    <rect x="8" y="13" width="8" height="5" strokeWidth="1" strokeOpacity="0.6" />
    {/* Highly obvious door knob */}
    <circle cx="15.5" cy="12" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const KitchenCabinetIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    {...props}
  >
    {/* Outer boundary of the cabinet unit */}
    <rect x="4" y="3" width="16" height="18" rx="1" />
    
    {/* Horizontal divider between upper drawer and lower doors */}
    <line x1="4" y1="9" x2="20" y2="9" />
    
    {/* Top drawer details */}
    <rect x="6" y="5" width="12" height="2.5" strokeWidth="1" strokeOpacity="0.5" />
    <line x1="10" y1="6.25" x2="14" y2="6.25" strokeWidth="1.5" /> {/* Drawer pull handle */}
    
    {/* Bottom double doors */}
    <line x1="12" y1="9" x2="12" y2="21" />
    
    {/* Double door panels */}
    <rect x="6" y="11" width="4" height="8" strokeWidth="1" strokeOpacity="0.5" />
    <rect x="14" y="11" width="4" height="8" strokeWidth="1" strokeOpacity="0.5" />
    
    {/* Door knobs/pulls (vertical handles) */}
    <line x1="10.5" y1="13" x2="10.5" y2="15" strokeWidth="1.5" />
    <line x1="13.5" y1="13" x2="13.5" y2="15" strokeWidth="1.5" />
  </svg>
);

const CurtainsSwagedWindowIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    {...props}
  >
    {/* Window frame */}
    <rect x="4" y="4" width="16" height="16" rx="1" />
    {/* Glass panes cross */}
    <line x1="12" y1="4" x2="12" y2="20" strokeWidth="1" strokeOpacity="0.4" />
    <line x1="4" y1="12" x2="20" y2="12" strokeWidth="1" strokeOpacity="0.4" />
    
    {/* Curtains swaged: draping across the top-middle and swept to sides */}
    {/* Left swaged curve */}
    <path d="M4 4c4 4 8 2 8 2" strokeWidth="1.5" />
    {/* Right swaged curve */}
    <path d="M20 4c-4 4-8 2-8 2" strokeWidth="1.5" />
    
    {/* Curtains hanging down at the sides with sweep */}
    <path d="M4 4c3 3 4 8 1 16" strokeWidth="2" fill="none" />
    <path d="M20 4c-3 3-4 8-1 16" strokeWidth="2" fill="none" />
    
    {/* Tiebacks */}
    <line x1="2" y1="13" x2="5" y2="13" strokeWidth="1" />
    <line x1="19" y1="13" x2="22" y2="13" strokeWidth="1" />
  </svg>
);

const HoseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    {...props}
  >
    {/* Coiled Hose inside */}
    <path d="M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    <path d="M10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
    {/* Hose outlet running out */}
    <path d="M16 10h2" />
    {/* Nozzle gun */}
    <rect x="18" y="8" width="1" height="4" fill="currentColor" stroke="none" />
    <path d="M18 9l3-2v6l-3-2" />
    {/* Droplets / spray */}
    <line x1="21" y1="8" x2="23" y2="7.5" strokeWidth="1.5" />
    <line x1="22" y1="10" x2="24" y2="10" strokeWidth="1.5" />
    <line x1="21" y1="12" x2="23" y2="12.5" strokeWidth="1.5" />
  </svg>
);

const SERVICES_DATA: ServiceItem[] = [
  { 
    id: 'drywall', 
    title: 'Drywall Patching & Repair', 
    description: 'Fixing small holes, dents, or cracks in walls and ceilings.', 
    icon: DiagonalBandageIcon, 
    category: 'interior' 
  },
  { 
    id: 'doors_windows', 
    title: 'Door & Window Maintenance', 
    description: 'Adjusting sticking doors, replacing weatherstripping, or installing new door hardware and deadbolts.', 
    icon: DoorClosedIcon, 
    category: 'interior' 
  },
  { 
    id: 'cabinets', 
    title: 'Cabinet Repairs', 
    description: 'Fixing loose hinges, adjusting drawer tracks, or installing new cabinet handles and pulls.', 
    icon: KitchenCabinetIcon, 
    category: 'interior' 
  },
  { 
    id: 'painting', 
    title: 'Painting & Touch-ups', 
    description: 'Minor interior painting, wall touch-ups, trim repainting, and small room updates.', 
    icon: Paintbrush, 
    category: 'interior' 
  },
  { 
    id: 'screens', 
    title: 'Screen Repair', 
    description: 'Patching or replacing torn window and lanai screens.', 
    icon: Grid, 
    category: 'exterior' 
  },
  { 
    id: 'assembly', 
    title: 'Furniture Assembly', 
    description: 'Putting together flat-pack furniture (IKEA, Wayfair, etc.).', 
    icon: Sofa, 
    category: 'interior' 
  },
  { 
    id: 'mounting', 
    title: 'Hanging & Mounting', 
    description: 'Securely hanging picture frames, heavy mirrors, shelving, and artwork.', 
    icon: Pin, 
    category: 'interior' 
  },
  { 
    id: 'tv_mount', 
    title: 'TV Wall Mounting', 
    description: 'Mounting televisions and hiding cables (without touching internal wiring).', 
    icon: Tv, 
    category: 'interior' 
  },
  { 
    id: 'blinds', 
    title: 'Blinds & Curtains', 
    description: 'Installing window blinds, shades, and curtain rods.', 
    icon: CurtainsSwagedWindowIcon, 
    category: 'interior' 
  },
  { 
    id: 'washing', 
    title: 'Pressure Washing', 
    description: 'Power washing driveways, sidewalks, patios, fences, and siding.', 
    icon: HoseIcon, 
    category: 'exterior' 
  },
  { 
    id: 'gutters', 
    title: 'Gutter Cleaning', 
    description: 'Clearing out leaves and debris from gutters and downspouts.', 
    icon: Leaf, 
    category: 'exterior' 
  },
  { 
    id: 'fence', 
    title: 'Minor Fence Repair', 
    description: 'Fixing loose slats or latches on wooden or vinyl fences.', 
    icon: Fence, 
    category: 'exterior' 
  },
  { 
    id: 'swaps', 
    title: 'Fixture Swaps', 
    description: 'Changing out existing cabinet handles, light fixtures, or adding a new mailbox.', 
    icon: RefreshCw, 
    category: 'interior' 
  }
];

const DEFAULT_TESTIMONIALS = [
  {
    name: 'Mike Ross',
    role: 'Homeowner',
    content: 'Ruben fixed my kitchen cabinet hinges and re-aligned a sticking closet door in under an hour. Outstanding service, super honest, and thorough.',
    location: 'Deep Creek',
    date: '2 months ago',
    rating: 5,
    image: null,
    jobTitle: 'Kitchen Cabinet Hinge Fix'
  },
  {
    name: 'Robert Harrison',
    role: 'Property Owner',
    content: 'Absolute professional. Showed up exactly on time, did exactly what I asked, and left zero mess behind. My go-to forever.',
    location: 'Punta Gorda',
    date: '1 month ago',
    rating: 5,
    image: null,
    jobTitle: 'Drywall & door repair'
  },
  {
    name: 'Sarah T.',
    role: 'Homeowner',
    content: "As an incredibly particular homeowner myself, I appreciate Ruben's careful attention to detail. He explained the fix and completed it beautifully.",
    location: 'South Gulf Cove',
    date: '3 weeks ago',
    rating: 5,
    image: null,
    jobTitle: 'Gutter & Exterior maintenance'
  },
  {
    name: 'Amanda Vance',
    role: 'Homeowner',
    content: 'Ruben repainted our hallway and touched up the walls perfectly. He is punctual, friendly, and very meticulous about details.',
    location: 'Port Charlotte',
    date: '4 weeks ago',
    rating: 5,
    image: null,
    jobTitle: 'Hallway Painting'
  },
  {
    name: 'John D.',
    role: 'Local Business Owner',
    content: 'Outstanding pressure washing of our commercial entryway. Ruben did an amazing job, removing years of grit in no time. Highly recommend!',
    location: 'Charlotte Harbor',
    date: '2 weeks ago',
    rating: 5,
    image: null,
    jobTitle: 'Entryway Pressure Washing'
  }
];

export default function FixitFirst() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [globalNotification, setGlobalNotification] = useState<string | null>(null);
  
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: string; type: string }[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [subdivision, setSubdivision] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [estimateDate, setEstimateDate] = useState('');
  const [urgency, setUrgency] = useState('standard');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [userReviews, setUserReviews] = useState<any[]>(() => {
    const stored = localStorage.getItem('fixitfirst_user_reviews');
    const parsed = stored ? JSON.parse(stored) : null;
    if (parsed && Array.isArray(parsed)) {
      if (parsed.length < 5) {
        const combined = [...parsed];
        DEFAULT_TESTIMONIALS.forEach(def => {
          if (combined.length < 5 && !combined.some(r => r.name === def.name)) {
            combined.push(def);
          }
        });
        return combined.slice(0, 5);
      }
      return parsed.slice(0, 5);
    }
    return DEFAULT_TESTIMONIALS.slice(0, 5);
  });
  const [showAddReviewForm, setShowAddReviewForm] = useState(false);
  const [reviewName, setReviewName] = useState('');
  const [reviewLocation, setReviewLocation] = useState('');
  const [reviewRole, setReviewRole] = useState('Homeowner');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewContent, setReviewContent] = useState('');
  const [reviewJobTitle, setReviewJobTitle] = useState('');
  const [reviewImage, setReviewImage] = useState<string | null>(null);
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);
  const [isReviewDragging, setIsReviewDragging] = useState(false);
  const [estimateFormError, setEstimateFormError] = useState<string | null>(null);
  const [reviewFormError, setReviewFormError] = useState<string | null>(null);
  const reviewFileInputRef = useRef<HTMLInputElement>(null);

  // Lightbox modal state
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);
  const [activeLightboxReview, setActiveLightboxReview] = useState<any | null>(null);

  // Filter for services
  const [activeCategory, setActiveCategory] = useState<'all' | 'interior' | 'exterior'>('interior');

  const toggleService = (id: string) => {
    setSelectedServices(prev => {
      const isSelected = prev.includes(id);
      if (isSelected) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = (Array.from(e.target.files) as File[]).map(file => ({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
        type: file.type
      }));
      setUploadedFiles(prev => [...prev, ...filesArray]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      const filesArray = (Array.from(e.dataTransfer.files) as File[]).map(file => ({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
        type: file.type
      }));
      setUploadedFiles(prev => [...prev, ...filesArray]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  // Handler for Review File Upload
  const handleReviewImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setReviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReviewDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsReviewDragging(true);
  };

  const handleReviewDragLeave = () => {
    setIsReviewDragging(false);
  };

  const handleReviewDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsReviewDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setReviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewName || !reviewContent || !reviewLocation || !reviewJobTitle) {
      const errorMsg = "Please fill out all marked (*) fields: Name, Neighborhood, Work Completed, and Review Message.";
      setReviewFormError(errorMsg);
      setGlobalNotification(`ERROR: ${errorMsg}`);
      return;
    }

    setReviewFormError(null);

    const newReview = {
      name: reviewName,
      role: reviewRole,
      content: reviewContent,
      location: reviewLocation,
      date: 'Just now',
      rating: reviewRating,
      image: reviewImage,
      jobTitle: reviewJobTitle
    };

    let updatedReviews = [newReview, ...userReviews];
    try {
      const stored = localStorage.getItem('fixitfirst_user_reviews');
      const parsedStored = stored ? JSON.parse(stored) : [];
      if (Array.isArray(parsedStored)) {
        updatedReviews = [newReview, ...parsedStored];
      }
    } catch (err) {
      console.error(err);
    }

    const slicedReviews = updatedReviews.slice(0, 5);
    setUserReviews(slicedReviews);
    localStorage.setItem('fixitfirst_user_reviews', JSON.stringify(slicedReviews));

    setIsReviewSubmitted(true);
    setTimeout(() => {
      const element = document.getElementById('review-form-container');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
    
    // Clear inputs immediately, keep success panel active
    setReviewName('');
    setReviewLocation('');
    setReviewRole('Homeowner');
    setReviewRating(5);
    setReviewContent('');
    setReviewJobTitle('');
    setReviewImage(null);
  };

  const handleEstimateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !subdivision) {
      const errorMsg = "Please fill out all marked (*) fields: Name, Telephone Number, and Subdivision/Street Name.";
      setEstimateFormError(errorMsg);
      setGlobalNotification(`ERROR: ${errorMsg}`);
      return;
    }

    setEstimateFormError(null);

    // Save order history in localStorage
    const newRequest = {
      id: `REQ-${Math.floor(1000 + Math.random() * 9000)}`,
      name: customerName,
      phone: customerPhone,
      email: customerEmail,
      subdivision: subdivision,
      message: customMessage,
      estimateDate: estimateDate || 'To be scheduled',
      urgency,
      services: SERVICES_DATA
        .filter(srv => selectedServices.includes(srv.id))
        .map(srv => srv.title),
      files: uploadedFiles.map(f => f.name),
      dateCreated: new Date().toLocaleDateString()
    };

    let requests = [];
    try {
      const existing = localStorage.getItem('fixitfirst_requests');
      requests = existing ? JSON.parse(existing) : [];
      if (!Array.isArray(requests)) requests = [];
    } catch (err) {
      console.error(err);
    }
    requests.push(newRequest);
    localStorage.setItem('fixitfirst_requests', JSON.stringify(requests));

    setIsSubmitted(true);
    setTimeout(() => {
      const element = document.getElementById('estimate-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);

    // Reset fields immediately, keep success screen active
    setCustomerName('');
    setCustomerPhone('');
    setCustomerEmail('');
    setSubdivision('');
    setCustomMessage('');
    setEstimateDate('');
    setUrgency('standard');
    setSelectedServices([]);
    setUploadedFiles([]);
  };

  const filteredServices = SERVICES_DATA;

  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-red-600 selection:text-white bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]">
      <div className="bg-red-600 text-white py-1.5 px-3 sm:px-6 text-[9px] xs:text-[10px] sm:text-xs font-bold tracking-widest uppercase flex items-center justify-between border-b border-red-700 overflow-hidden select-none">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="w-2 h-2 rounded-full bg-white animate-ping shrink-0" />
          <span className="whitespace-nowrap font-black truncate">READY FOR DISPATCH</span>
        </div>
        <div className="flex items-center gap-1 opacity-95 text-[9px] xs:text-[10px] sm:text-[11px] font-black tracking-wider truncate ml-2 shrink-0">
          <span>CHARLOTTE COUNTY, FL</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-zinc-900 px-3 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-1.5 sm:gap-2">
          <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 border-2 border-red-600 flex items-center justify-center bg-zinc-900 text-red-600 font-black text-base sm:text-lg italic hover:rotate-6 transition-transform shrink-0">
              FF
            </div>
            <div className="min-w-0">
              <h1 className="text-sm xs:text-base sm:text-xl font-black uppercase tracking-tight text-white leading-none truncate">
                FIX IT <span className="text-red-600">FIRST</span>
              </h1>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-zinc-500 font-bold block mt-1 truncate">
                BY RUBEN
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-6 shrink-0">
            <nav className="hidden lg:flex items-center gap-6 text-xs uppercase font-bold tracking-wider">
              <a href="#services" className="text-zinc-400 hover:text-red-500 transition-colors">THE_GRID</a>
              <a href="#meet-ruben" className="text-zinc-400 hover:text-red-500 transition-colors">ABOUT</a>
              <a href="#testimonials" className="text-zinc-400 hover:text-red-500 transition-colors">REVIEWS</a>
            </nav>
            <div className="h-4 w-[1px] bg-zinc-800 hidden lg:block" />
            <a 
              href="tel:5553943494" 
              className="text-[10px] xs:text-xs sm:text-sm md:text-base font-black text-red-500 hover:text-white transition-colors tracking-wider flex items-center gap-1 shrink-0"
            >
              <Phone className="w-3 h-3 xs:w-3.5 xs:h-3.5 shrink-0" /> (555) 394-3494
            </a>
            <a href="#estimate-form" className="hidden sm:block px-4 py-2 border border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition-all rounded-none text-xs uppercase font-bold tracking-wider">
              GET_ESTIMATE
            </a>
          </div>
        </div>
      </header>

      {/* Hero Block */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 border-b-8 border-red-600 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.06)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>

        <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block border-2 border-red-600 bg-red-600/10 text-red-500 px-4 sm:px-6 py-2 sm:py-2.5 text-[10px] sm:text-xs font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-8 sm:mb-10 max-w-full text-center"
          >
            RESIDENTIAL ASSISTANCE • NO MIDDLEMEN
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="w-full max-w-sm sm:max-w-2xl border-4 border-red-600 p-6 sm:p-12 bg-zinc-950/90 backdrop-blur-sm mb-10 sm:mb-12 shadow-[15px_15px_0_rgba(220,38,38,0.15)] sm:shadow-[30px_30px_0_rgba(220,38,38,0.15)] relative mx-auto">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-4 border-l-4 border-white" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-4 border-r-4 border-white" />
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-none tracking-tighter uppercase text-white break-words">
                FIX IT <span className="text-red-600">FIRST.</span>
              </h1>
              <span className="block text-base sm:text-lg md:text-2xl text-zinc-500 tracking-[0.2em] font-black mt-3 sm:mt-4">BY RUBEN</span>
            </div>

            <p className="text-xs sm:text-sm md:text-base font-black uppercase tracking-[0.15em] sm:tracking-[0.25em] text-red-500 max-w-3xl mx-auto mb-6 px-2">
              Neighborhood Handyman. Specializing in odd jobs, home maintenance, and small general repairs.
            </p>

            <p className="text-base sm:text-xl md:text-2xl text-zinc-400 mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed border-l-4 border-red-600 pl-4 sm:pl-8 text-left italic font-serif">
              "I gladly tackle the low-margin, small chores that licensed contractors reject, giving minor fixes careful, thorough attention. No overpromising, no overcharging."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12 text-center">
              <div className="bg-zinc-900/60 p-6 border border-zinc-800 flex flex-col items-center justify-center gap-4">
                <MapPin className="w-8 h-8 text-red-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm uppercase text-white tracking-wider">CHARLOTTE_COUNTY</h4>
                </div>
              </div>
              <div className="bg-zinc-900/60 p-6 border border-zinc-800 flex flex-col items-center justify-center gap-4">
                <Clock className="w-8 h-8 text-red-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm uppercase text-white tracking-wider">RELIABLE_SCHEDULE</h4>
                </div>
              </div>
              <div className="bg-zinc-900/60 p-6 border border-zinc-800 flex flex-col items-center justify-center gap-4 sm:col-span-2 md:col-span-1">
                <Wrench className="w-8 h-8 text-red-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm uppercase text-white tracking-wider">HANDY_MAN</h4>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-12 sm:mt-16">
              <a 
                href="#estimate-form" 
                className="w-full sm:w-auto px-6 sm:px-12 py-4 sm:py-5 bg-red-600 text-white font-black uppercase tracking-widest text-base sm:text-lg hover:bg-white hover:text-zinc-950 transition-all shadow-[8px_8px_0_rgba(255,255,255,0.05)] active:translate-y-1 active:shadow-none"
              >
                GET_AN_ESTIMATE
              </a>
              <a 
                href="#services" 
                className="w-full sm:w-auto px-6 sm:px-12 py-4 sm:py-5 border-2 border-zinc-800 hover:border-red-600 text-zinc-400 hover:text-white transition-all text-base sm:text-lg font-black uppercase tracking-widest"
              >
                THE_SERVICES_GRID
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-transparent relative border-b border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="border-l-4 border-red-600 pl-6 mb-12">
            <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-red-500 block mb-3">// MODULE: SERVICE_GRID_V1</span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              HANDYMAN SERVICES & SMALL HOME REPAIRS
            </h2>
            <p className="text-zinc-500 mt-4 max-w-xl text-sm leading-relaxed">
              Below are standard helper repairs. Click tasks to request quote.
            </p>
          </div>

          {/* Category Toggle Buttons (Interior Help and Exterior Help next to each other) */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => setActiveCategory('interior')}
              className={`px-6 py-3 text-xs md:text-sm uppercase font-black tracking-widest border transition-all ${
                activeCategory === 'interior'
                  ? 'bg-red-600 text-white border-red-600'
                  : 'bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
              }`}
            >
              INTERIOR_HELP
            </button>
            <button
              onClick={() => setActiveCategory('exterior')}
              className={`px-6 py-3 text-xs md:text-sm uppercase font-black tracking-widest border transition-all ${
                activeCategory === 'exterior'
                  ? 'bg-red-600 text-white border-red-600'
                  : 'bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
              }`}
            >
              EXTERIOR_HELP
            </button>
          </div>

          {/* Services Grid based on activeCategory */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.filter(srv => srv.category === activeCategory).map((srv, idx) => {
              const isSelected = selectedServices.includes(srv.id);
              return (
                <motion.div 
                  key={srv.id}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  onClick={() => toggleService(srv.id)}
                  className={`p-8 flex flex-col items-center text-center gap-6 border-l-8 relative overflow-hidden transition-all cursor-pointer ${
                    isSelected 
                      ? 'bg-zinc-900/80 border-red-600 ring-1 ring-red-600/30' 
                      : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/[0.02] -mr-16 -mt-16 rounded-full" />
                  
                  <div className="flex items-center justify-between w-full">
                    <div className="w-12 h-12 bg-zinc-950 border border-zinc-800 flex items-center justify-center text-red-600">
                      <srv.icon className="w-5 h-5 text-red-600" />
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <h3 className="text-xl font-black uppercase text-white tracking-tight mb-3">
                      {srv.title}
                    </h3>
                    <p className="text-zinc-500 text-xs leading-relaxed min-h-[48px] text-center">
                      {srv.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-zinc-900 w-full flex items-center justify-end">
                    <div className="flex items-center gap-3">
                      {isSelected ? (
                        <span className="text-xs font-black text-red-500 flex items-center gap-1">
                          <Check className="w-4 h-4" /> IN_QUOTE
                        </span>
                      ) : (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleService(srv.id);
                          }}
                          className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-800 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:border-red-600 hover:text-white transition-all flex items-center gap-1.5"
                        >
                          <Plus className="w-3.5 h-3.5 text-red-600" /> REQUEST_QUOTE
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Custom repair box in same format as the numbered cards */}
            <motion.div 
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`p-8 flex flex-col items-center text-center gap-6 border-l-8 relative overflow-hidden transition-all cursor-pointer ${
                selectedServices.includes('custom') 
                  ? 'bg-zinc-900/80 border-red-600 ring-1 ring-red-600/30' 
                  : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700'
              }`}
              onClick={() => toggleService('custom')}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/[0.02] -mr-16 -mt-16 rounded-full" />
              
              <div className="flex items-center justify-between w-full">
                <div className="w-12 h-12 bg-zinc-950 border border-zinc-800 flex items-center justify-center text-red-600">
                  <Hammer className="w-5 h-5 text-red-600" />
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-black uppercase text-white tracking-tight mb-3">CUSTOM_REPAIR?</h3>
                <p className="text-zinc-500 text-xs leading-relaxed min-h-[48px] text-center">
                  Have a honey-do list or custom fix that isn't mentioned? Describe it directly in our dispatcher estimate console.
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-zinc-900 w-full flex items-center justify-end">
                <div className="flex items-center gap-3">
                  {selectedServices.includes('custom') ? (
                    <span className="text-xs font-black text-red-500 flex items-center gap-1">
                      <Check className="w-4 h-4" /> IN_QUOTE
                    </span>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleService('custom');
                      }}
                      className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-800 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:border-red-600 hover:text-white transition-all flex items-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5 text-red-600" /> REQUEST_CUSTOM
                    </button>
                  )}
                </div>
              </div>
            </motion.div>

          </div>

          {/* Centered Request Quote Button */}
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => {
                const element = document.getElementById('estimate-form');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-12 py-5 bg-red-600 text-white hover:bg-white hover:text-zinc-950 font-black uppercase tracking-widest text-sm transition-all shadow-[8px_8px_0_rgba(255,255,255,0.1)] active:translate-y-1 active:shadow-none flex items-center gap-3 border border-red-600"
            >
              <CheckCircle2 className="w-5 h-5" /> REQUEST_QUOTE {selectedServices.length > 0 && `(${selectedServices.length})`}
            </button>
          </div>
        </div>
      </section>

      {/* Meet Sam - Story Block */}
      <section id="meet-ruben" className="py-20 sm:py-32 px-4 sm:px-6 bg-zinc-950 border-b border-zinc-900 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center">
            
            <div className="w-full max-w-5xl mb-12 sm:mb-20 text-center">
              <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-red-500 block mb-3">// MASTER_HANDYMAN_PROFILE</span>
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-mono font-black text-white leading-none uppercase mb-6 sm:mb-8">
                MEET RUBEN
              </h2>
              <p className="text-zinc-550 font-mono text-base sm:text-lg max-w-2xl mx-auto leading-relaxed italic px-2">
                "I bring a professional standard and a helpful neighbor's attitude to simple chores, painting, light yard work, and common fixes."
              </p>
            </div>

            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              
              <div className="lg:col-span-6 w-full aspect-square sm:aspect-video lg:aspect-square relative group overflow-hidden border-4 border-red-600 bg-black/60 shadow-[10px_10px_0_rgba(220,38,38,0.1)] sm:shadow-[20px_20px_0_rgba(220,38,38,0.1)] flex flex-col items-center justify-center p-6 sm:p-8 text-center">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-zinc-800" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-zinc-800" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-zinc-800" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-zinc-800" />

                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-none bg-red-600/5 border border-red-600/20 flex items-center justify-center">
                    <Wrench className="w-8 h-8 text-red-500" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-sm font-mono text-white font-black uppercase tracking-widest text-red-500">
                      UNNAMED
                    </h5>
                  </div>
                </div>
              </div>

              {/* Bio & Philosophy list */}
              <div className="lg:col-span-6 space-y-6 sm:space-y-10 text-left">
                <h3 className="text-xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                  A NEIGHBORHOOD HANDYMAN <br/>WHO COVERS YOUR <span className="text-red-500">HONEY-DO LIST</span>
                </h3>
                
                <p className="text-zinc-400 text-sm leading-relaxed font-sans font-medium">
                  I am dedicated to helping neighbors directly with simple maintenance, odd jobs, and small general repairs for homeowners who want job reliability, safety, and honest, affordable pricing.
                </p>

                <div className="space-y-6 pt-4 border-t border-zinc-900">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-none border border-red-600 flex items-center justify-center text-red-600 shrink-0 font-bold">
                      01
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase text-white tracking-wider">COMMITTED_TO_NEIGHBORS</h4>
                      <p className="text-xs text-zinc-500 mt-1">I work entirely within Charlotte County, FL. I build genuine relationships, not transient accounts.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-none border border-red-600 flex items-center justify-center text-red-600 shrink-0 font-bold">
                      02
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase text-white tracking-wider">RUBEN'S_STANDARD</h4>
                      <p className="text-xs text-zinc-500 mt-1">Thorough, solid execution, and a friendly attitude to ensure the job is done perfectly!</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Logs Section */}
      <section id="testimonials" className="py-20 sm:py-32 px-4 sm:px-6 bg-zinc-900 border-b border-zinc-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-20">
            <div className="border-l-4 border-red-600 pl-6">
              <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-red-500 block mb-3">// NEIGHBOR FEEDBACK</span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                STRAIGHT TALK FROM THE FIELD
              </h2>
              <p className="text-zinc-400 mt-4 max-w-xl text-sm leading-relaxed">
                Real reviews from real neighbors in Charlotte County, FL.
              </p>
            </div>
            
            <button
              onClick={() => {
                setShowAddReviewForm(true);
                setTimeout(() => {
                  const element = document.getElementById('review-form-container');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
              className="px-6 py-3 bg-red-600 hover:bg-white hover:text-zinc-950 text-white text-xs font-bold uppercase tracking-wider rounded-none shadow-lg transition-all duration-200 self-start md:self-end flex items-center gap-2 border border-red-600"
            >
              <Plus className="w-4 h-4" />
              WRITE A REVIEW
            </button>
          </div>

          {/* Collapsible Add Review Form */}
          <AnimatePresence>
            {showAddReviewForm && (
              <motion.div
                id="review-form-container"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mb-16 border-4 border-red-600 p-8 bg-zinc-950 relative scroll-mt-24"
              >
                <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 text-[10px] font-bold tracking-widest uppercase">
                  SUBMIT A REVIEW
                </div>

                {isReviewSubmitted ? (
                  <div className="py-12 text-center flex flex-col items-center justify-center">
                    <CheckCircle2 className="w-16 h-16 text-red-600 mb-4 animate-bounce" />
                    <h4 className="text-xl font-black uppercase text-white mb-2">
                      REVIEW SUBMITTED!
                    </h4>
                    <p className="text-zinc-400 text-xs font-mono uppercase tracking-wide">
                      Thank you! Your feedback has been posted successfully.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsReviewSubmitted(false);
                        setShowAddReviewForm(false);
                      }}
                      className="mt-6 px-6 py-2.5 bg-red-600 hover:bg-white text-white hover:text-zinc-950 text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      [CLOSE]
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleReviewSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-wider mb-2">
                          Your Name or Username*
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. HandyFan99 or Mike R."
                          value={reviewName}
                          onChange={(e) => setReviewName(e.target.value)}
                          className="w-full bg-zinc-900 border border-zinc-800 focus:border-red-600 p-4 font-mono text-sm text-white focus:outline-hidden transition-colors"
                        />
                        <p className="text-[9px] text-zinc-500 font-mono mt-1 uppercase tracking-wider">
                          [PRIVACY INFO] Feel free to use a custom username or nickname rather than your real name.
                        </p>
                      </div>
                      
                      <div>
                        <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-wider mb-2">
                          Neighborhood / Subdivision*
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Deep Creek"
                          value={reviewLocation}
                          onChange={(e) => setReviewLocation(e.target.value)}
                          className="w-full bg-zinc-900 border border-zinc-800 focus:border-red-600 p-4 font-mono text-sm text-white focus:outline-hidden transition-colors"
                        />
                      </div>


                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-wider mb-2">
                          Work Completed*
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Pressure washed patio, kitchen sink fix"
                          value={reviewJobTitle}
                          onChange={(e) => setReviewJobTitle(e.target.value)}
                          className="w-full bg-zinc-900 border border-zinc-800 focus:border-red-600 p-4 font-mono text-sm text-white focus:outline-hidden transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-wider mb-2">
                          Star Rating*
                        </label>
                        <div className="flex items-center gap-2 h-14 bg-zinc-900 border border-zinc-800 px-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setReviewRating(star)}
                              className="text-zinc-500 hover:scale-110 transition-transform animate-none bg-transparent border-none p-0 cursor-pointer"
                            >
                              <Star
                                className={`w-6 h-6 ${
                                  star <= reviewRating
                                    ? 'text-red-500 fill-red-500'
                                    : 'text-zinc-700'
                                }`}
                              />
                            </button>
                          ))}
                          <span className="ml-2 text-xs text-zinc-400 font-bold uppercase">
                            ({reviewRating}_STARS)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-wider mb-2">
                        Your Message / Review Comment*
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Write details of your experience with Ruben..."
                        value={reviewContent}
                        onChange={(e) => setReviewContent(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800 focus:border-red-600 p-4 font-mono text-sm text-white focus:outline-hidden transition-colors resize-none"
                      />
                    </div>

                    {/* Review Drag-and-Drop Image Uploader */}
                    <div>
                      <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-wider mb-2">
                        Upload Photo of Completed Work (Recommended for Gallery)
                      </label>
                      <p className="text-[10px] text-zinc-500 uppercase mb-3">
                        Share a real snapshot of Ruben's handyman work to post in the community gallery!
                      </p>
                      
                      <div
                        onDragOver={handleReviewDragOver}
                        onDragLeave={handleReviewDragLeave}
                        onDrop={handleReviewDrop}
                        onClick={() => reviewFileInputRef.current?.click()}
                        className={`border-2 border-dashed p-8 text-center cursor-pointer transition-all ${
                          isReviewDragging 
                            ? 'border-red-600 bg-red-600/5' 
                            : reviewImage 
                              ? 'border-zinc-700 bg-zinc-900/40' 
                              : 'border-zinc-800 hover:border-zinc-700 bg-zinc-900/20'
                        }`}
                      >
                        <input 
                          type="file"
                          ref={reviewFileInputRef}
                          onChange={handleReviewImageChange}
                          accept="image/*"
                          className="hidden"
                        />
                        
                        {reviewImage ? (
                          <div className="flex flex-col items-center gap-4">
                            <div className="w-32 h-32 border-2 border-red-600 overflow-hidden relative">
                              <img src={reviewImage} className="w-full h-full object-cover animate-none" alt="Preview" />
                              <button 
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setReviewImage(null);
                                }}
                                className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-none hover:bg-white hover:text-red-600 transition-all border-none cursor-pointer flex items-center justify-center"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-3">
                            <Upload className="w-10 h-10 text-zinc-600" />
                            <div className="space-y-1">
                              <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                                DRAG_&_DROP_COMPLETED_WORK_PHOTO
                              </p>
                              <p className="text-[10px] text-zinc-600 uppercase">
                                OR CLICK TO CHOOSE FROM STORAGE
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {reviewFormError && (
                      <div className="p-4 bg-red-600/10 border border-red-600/30 text-xs text-red-500 font-bold uppercase tracking-wider">
                        {reviewFormError}
                      </div>
                    )}

                    {(!reviewName || !reviewContent || !reviewLocation || !reviewJobTitle) && (
                      <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-2">
                        * Please complete all required fields (Name, Neighborhood, Work Completed, Message) to submit review.
                      </div>
                    )}

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={!reviewName || !reviewContent || !reviewLocation || !reviewJobTitle}
                        className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-white hover:text-zinc-950 text-white disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed disabled:shadow-none font-black uppercase tracking-widest text-sm transition-all cursor-pointer border-none"
                      >
                        SUBMIT_REVIEW
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {userReviews.map((t, idx) => (
              <div 
                key={idx}
                className="bg-zinc-950 border border-zinc-800 p-8 flex flex-col justify-between hover:border-zinc-700 transition-colors relative group"
              >
                <div className="absolute top-4 right-4 text-[40px] text-zinc-800 font-serif leading-none group-hover:text-red-600/10 transition-colors">
                  ”
                </div>

                <div className="space-y-6">
                  <div className="flex gap-1 text-red-600">
                    {[...Array(t.rating || 5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current animate-none" />)}
                  </div>
                  
                  <p className="text-zinc-300 text-sm leading-relaxed italic font-serif">
                    "{t.content}"
                  </p>

                  {t.image && (t.image.startsWith('data:image/') || t.image.startsWith('http')) && (
                    <div 
                      onClick={() => {
                        setActiveLightboxImage(t.image);
                        setActiveLightboxReview(t);
                      }}
                      className="cursor-pointer border-2 border-zinc-800 hover:border-red-600 bg-zinc-950 relative overflow-hidden aspect-video group/img mt-4 flex flex-col items-center justify-center text-center"
                    >
                      <img 
                        src={t.image} 
                        alt={t.jobTitle || 'Completed Work'} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-105"
                      />
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-900 flex items-center justify-between text-xs font-mono">
                  <div>
                    <h5 className="font-bold text-white text-sm uppercase tracking-wider">{t.name}</h5>
                  </div>
                  <div className="text-right">
                    <span className="text-red-500 font-bold block">{t.location}</span>
                    <span className="text-zinc-600 text-[9px] block mt-0.5">{t.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Estimate and Contact Section */}
      <section id="contact" className="py-32 px-6 bg-transparent relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Direct Call details */}
            <div className="lg:col-span-5 space-y-10 text-left">
              <div className="border-l-4 border-red-600 pl-6">
                <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-red-500 block mb-3">// SYSTEM: DISPATCH_CONSOLE_V2</span>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black uppercase tracking-tight text-white break-words">
                  INITIALIZE_ESTIMATE
                </h2>
                <p className="text-zinc-500 mt-3 text-xs leading-relaxed">
                  Call directly, transmit a text, or complete the estimate request form below to send details straight to Ruben.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-8 border-2 border-red-600 bg-red-600/5 relative">
                  <h4 className="text-md font-bold uppercase text-white mb-4 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-red-500" /> CALL_OR_TEXT_RUBEN
                  </h4>
                  <a 
                    href="tel:5553943494" 
                    className="text-2xl md:text-3xl font-black text-red-500 hover:text-white transition-colors tracking-widest block"
                  >
                    (555) 394-3494
                  </a>
                  <p className="text-zinc-500 text-xs mt-3 leading-relaxed">
                    Direct dispatcher dial. Typical phone response is by the end of the day.
                  </p>
                </div>

                <div className="p-6 border border-zinc-800 space-y-4 text-xs">
                  <div className="flex items-center justify-between text-zinc-400">
                    <span>DISPATCH_HOURS:</span>
                    <span className="font-bold text-white">MON-SAT 07:00 - 18:00</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400">
                    <span>DISPATCH_LOCATION:</span>
                    <span className="font-bold text-white flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-red-500" /> CHARLOTTE COUNTY, FL
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Live Estimate Form */}
            <div id="estimate-form" className="lg:col-span-7 scroll-mt-24">
              <div className="border-4 border-zinc-800 p-8 bg-black/60 backdrop-blur-sm relative">
                <div className="absolute top-0 right-0 bg-zinc-800 text-zinc-400 px-4 py-1 text-[10px] font-bold tracking-widest">
                  COMPILE_TRANSMISSION
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-12 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-16 h-16 bg-red-600/10 border-2 border-red-600 flex items-center justify-center text-red-500 mb-6 rounded-full shrink-0">
                      <CheckCircle2 className="w-10 h-10 animate-bounce" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-black uppercase text-white mb-4 tracking-wider leading-tight">
                      TRANSMISSION SUCCESSFUL!
                    </h4>
                    <p className="text-zinc-400 text-xs max-w-sm leading-relaxed mb-6 font-mono uppercase tracking-wide">
                      Your inquiry has been successfully serialized. Ruben will review your details and contact you by the end of the day.
                    </p>
                    <div className="text-[10px] text-red-500 bg-red-500/10 px-4 py-2 font-mono uppercase tracking-wider mb-6">
                      STATUS: RESPONDING_SOON
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 bg-red-600 hover:bg-white text-white hover:text-zinc-950 text-xs font-bold uppercase tracking-wider transition-all border-none cursor-pointer"
                    >
                      [SUBMIT ANOTHER REQUEST]
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-8 pb-6 border-b border-zinc-800">
                      <h3 className="text-lg font-black uppercase text-white mb-2 leading-tight">
                        Your Friendly Charlotte County Neighborhood Handyman
                      </h3>
                      <p className="text-red-500 text-xs font-bold uppercase tracking-wider">
                        Specializing in odd jobs, home maintenance, and small general repairs.
                      </p>
                    </div>

                    <form onSubmit={handleEstimateSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-wider mb-2">
                        Your Full Name*
                      </label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-600 p-4 font-mono text-sm text-white focus:outline-hidden transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-wider mb-2">
                        Telephone Number*
                      </label>
                      <input 
                        type="tel" 
                        placeholder="(555) 000-0000"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-600 p-4 font-mono text-sm text-white focus:outline-hidden transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-wider mb-2">
                      Email Address (Optional)
                    </label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-600 p-4 font-mono text-sm text-white focus:outline-hidden transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-wider mb-2">
                      Subdivision or Street Name*
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g., South Gulf Cove, Deep Creek, etc."
                      value={subdivision}
                      onChange={(e) => setSubdivision(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-600 p-4 font-mono text-sm text-white focus:outline-hidden transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-wider mb-2">
                        Target Date
                      </label>
                      <input 
                        type="date" 
                        value={estimateDate}
                        onChange={(e) => setEstimateDate(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-600 p-4 font-mono text-sm text-white focus:outline-hidden transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-wider mb-2">
                        Job Urgency Level
                      </label>
                      <select 
                        value={urgency}
                        onChange={(e) => setUrgency(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-600 p-4 font-mono text-sm text-white focus:outline-hidden transition-colors appearance-none text-left"
                      >
                        <option value="standard">STANDARD (WITHIN 3-5 DAYS)</option>
                        <option value="high">HIGH (WITHIN 24-48 HOURS)</option>
                        <option value="emergency">EMERGENCY (SAME DAY RESPONSE)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-wider mb-2">
                      Job Details / Notes
                    </label>
                    <textarea 
                      placeholder="Please describe what needs to be fixed, touched up, mowed, trimmed, or cleaned..."
                      value={customMessage}
                      onChange={(e) => setCustomMessage(e.target.value)}
                      className="w-full h-32 bg-zinc-950 border border-zinc-800 focus:border-red-600 p-4 font-mono text-sm text-white focus:outline-hidden transition-colors resize-none"
                    />
                  </div>

                  {/* Image/Video Upload section */}
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-wider">
                      Upload Images or Videos (Optional)
                    </label>
                    <p className="text-[10px] text-zinc-500 uppercase">
                      Show Ruben what needs to be fixed so he can arrive with the right tools.
                    </p>
                    
                    <div 
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`border-2 border-dashed p-6 text-center cursor-pointer transition-all ${
                        isDragging 
                          ? 'border-red-600 bg-red-600/5' 
                          : 'border-zinc-800 hover:border-red-600/60 bg-zinc-950/40 hover:bg-zinc-950/80'
                      }`}
                    >
                      <input 
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        multiple
                        accept="image/*,video/*"
                        className="hidden"
                      />
                      <Upload className="w-8 h-8 text-zinc-650 mx-auto mb-3" />
                      <p className="text-xs font-bold text-zinc-400 uppercase tracking-wide">
                        Drag & drop images/videos here, or <span className="text-red-500">browse files</span>
                      </p>
                      <p className="text-[9px] text-zinc-600 uppercase mt-1">
                        Supports JPEG, PNG, MP4, MOV up to 50MB
                      </p>
                    </div>

                    {/* Display uploaded files */}
                    <AnimatePresence>
                      {uploadedFiles.length > 0 && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="mt-3 space-y-2"
                        >
                          {uploadedFiles.map((file, fileIdx) => {
                            const isVideo = file.type.startsWith('video/');
                            return (
                              <div 
                                key={fileIdx} 
                                className="flex items-center justify-between p-3 bg-zinc-950 border border-zinc-800 text-xs font-mono"
                              >
                                <div className="flex items-center gap-2.5 truncate">
                                  {isVideo ? (
                                    <VideoIcon className="w-4 h-4 text-red-500 shrink-0" />
                                  ) : (
                                    <ImageIcon className="w-4 h-4 text-red-500 shrink-0" />
                                  )}
                                  <span className="text-white font-bold truncate max-w-[240px]">{file.name}</span>
                                  <span className="text-zinc-600 text-[10px] shrink-0">({file.size})</span>
                                </div>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeFile(fileIdx);
                                  }}
                                  className="p-1 text-zinc-500 hover:text-red-500 transition-colors"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Selected Tasks List inline */}
                  {selectedServices.length > 0 && (
                    <div className="p-4 bg-zinc-950 border border-red-600/30 text-xs">
                      <div className="font-bold uppercase mb-2 text-zinc-400">
                        Selected Tasks ({selectedServices.length}):
                      </div>
                      <div className="space-y-1.5">
                        {SERVICES_DATA
                          .filter(srv => selectedServices.includes(srv.id))
                          .map(srv => (
                            <div key={srv.id} className="flex items-center gap-2 text-white">
                              <span className="w-1.5 h-1.5 bg-red-600 rounded-none" />
                              <span className="font-bold uppercase">{srv.title}</span>
                            </div>
                          ))}
                        {selectedServices.includes('custom') && (
                          <div className="flex items-center gap-2 text-white">
                            <span className="w-1.5 h-1.5 bg-red-600 rounded-none" />
                            <span className="font-bold uppercase">Custom Repair / Other</span>
                          </div>
                        )}
                      </div>
                      <button 
                        type="button"
                        onClick={() => setSelectedServices([])}
                        className="text-[10px] uppercase font-bold text-zinc-500 hover:text-red-500 transition-colors mt-3"
                      >
                        [CLEAR_SELECTED_TASKS]
                      </button>
                    </div>
                  )}

                  {estimateFormError && (
                    <div className="p-4 bg-red-600/10 border border-red-600/30 text-xs text-red-500 font-bold uppercase tracking-wider">
                      {estimateFormError}
                    </div>
                  )}

                  {(!customerName || !customerPhone || !subdivision) && (
                    <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider text-center mb-2">
                      * Please complete all required fields (Name, Phone, Subdivision) to request a quote.
                    </div>
                  )}

                  <div className="pt-4">
                    <button 
                      type="submit"
                      disabled={!customerName || !customerPhone || !subdivision}
                      className="w-full py-5 bg-red-600 hover:bg-white text-white hover:text-zinc-950 font-black uppercase tracking-widest text-sm transition-all shadow-[10px_10px_0_rgba(255,255,255,0.05)] disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed disabled:shadow-none"
                    >
                      SUBMIT_QUOTE_REQUEST_V2
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>

          </div>
        </div>
      </section>

      {/* Footer Block */}
      <footer className="py-20 px-6 bg-zinc-950 border-t border-zinc-900 text-zinc-500 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-white font-black">FIX IT FIRST BY RUBEN © 2026</span>
            <span>•</span>
            <span>CHARLOTTE COUNTY, FL</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-red-500 flex items-center gap-1"><Instagram className="w-4 h-4" /> [INSTAGRAM]</a>
            <a href="#" className="hover:text-red-500 flex items-center gap-1"><Facebook className="w-4 h-4" /> [FACEBOOK]</a>
            <a href="#" className="hover:text-red-500 flex items-center gap-1"><Twitter className="w-4 h-4" /> [TWITTER]</a>
          </div>
        </div>
      </footer>

      {/* Immersive Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setActiveLightboxImage(null);
              setActiveLightboxReview(null);
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full bg-black border-2 border-red-600 text-left max-h-[90vh] overflow-y-auto grid grid-cols-1 md:grid-cols-12 relative"
            >
              {/* Close button */}
              <button
                onClick={() => {
                  setActiveLightboxImage(null);
                  setActiveLightboxReview(null);
                }}
                className="absolute top-4 right-4 z-10 bg-black border border-zinc-800 text-zinc-400 hover:text-white hover:border-red-600 p-2 rounded-none transition-all cursor-pointer border-none flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Area / Large Image display */}
              <div className="md:col-span-7 bg-black border-b-2 md:border-b-0 md:border-r-2 border-zinc-900 aspect-video md:aspect-auto flex flex-col items-center justify-center relative min-h-[350px] overflow-hidden">
                {activeLightboxImage && (activeLightboxImage.startsWith('data:image/') || activeLightboxImage.startsWith('http')) ? (
                  <img 
                    src={activeLightboxImage} 
                    alt={activeLightboxReview?.jobTitle || 'Completed Work'} 
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                    
                    <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-zinc-800" />
                    <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-zinc-800" />
                    <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-zinc-800" />
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-zinc-800" />

                    <div className="relative z-10 flex flex-col items-center gap-4 p-8 text-center">
                      <div className="w-16 h-16 rounded-none bg-red-600/5 border border-red-600/20 flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-red-500" />
                      </div>
                      <div className="space-y-1">
                        <h5 className="text-sm font-mono text-white font-black uppercase tracking-widest">
                          VERIFIED RECORD
                        </h5>
                      </div>
                      
                      <div className="text-[9px] font-mono text-zinc-500 uppercase max-w-xs border border-zinc-900 p-2.5 bg-black/60 leading-normal">
                        • SERVICE TYPE: {activeLightboxReview?.jobTitle || 'HOME MAINTENANCE'}<br />
                        • STATUS: COMPLETED<br />
                        • LOCATION: {activeLightboxReview?.location?.toUpperCase()}, FL<br />
                        • FEEDBACK: VERIFIED {activeLightboxReview?.rating} STAR
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Specs Area */}
              <div className="md:col-span-5 p-8 flex flex-col justify-between bg-zinc-950 font-mono text-xs">
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] text-red-500 font-bold uppercase tracking-[0.25em] block mb-2">
                      // VERIFIED JOB DETAILS
                    </span>
                    <h4 className="text-xl font-black uppercase text-white tracking-tight leading-tight">
                      {activeLightboxReview?.jobTitle || 'COMPLETED WORK'}
                    </h4>
                  </div>

                  <div className="flex gap-1 text-red-600">
                    {[...Array(activeLightboxReview?.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current animate-none" />
                    ))}
                  </div>

                  <div className="space-y-2">
                    <span className="text-[9px] uppercase text-zinc-500 font-bold tracking-widest block">// CLIENT_FEEDBACK:</span>
                    <p className="text-zinc-300 italic font-serif leading-relaxed text-sm">
                      "{activeLightboxReview?.content}"
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-900 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">CLIENT:</span>
                    <span className="text-white font-bold">{activeLightboxReview?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">NEIGHBORHOOD:</span>
                    <span className="text-red-500 font-bold">{activeLightboxReview?.location}, FL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">TIMESTAMP:</span>
                    <span className="text-zinc-400">{activeLightboxReview?.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Toast Success Alert overlay */}
      <AnimatePresence>
        {globalNotification && (() => {
          const isError = globalNotification.toUpperCase().includes('ERROR') || globalNotification.toUpperCase().includes('FAILED');
          return (
            <motion.div 
              initial={{ opacity: 0, y: 50, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 50, x: "-50%" }}
              className="fixed bottom-10 left-1/2 z-50 bg-black border-2 border-red-600 text-white font-mono p-5 shadow-[0_15px_50px_rgba(220,38,38,0.3)] max-w-md w-[90%] flex flex-col gap-3 rounded-none select-none"
            >
              <div className="absolute top-0 left-0 bg-red-600 text-white px-2.5 py-0.5 text-[8px] font-black uppercase tracking-widest">
                SYSTEM_NOTIFICATION
              </div>
              <div className="flex items-start gap-3 mt-2">
                <div className="p-1 bg-red-600/10 border border-red-600/30 text-red-500 shrink-0 mt-0.5">
                  {isError ? (
                    <AlertTriangle className="w-5 h-5 animate-pulse" />
                  ) : (
                    <CheckCircle2 className="w-5 h-5 animate-pulse" />
                  )}
                </div>
                <div className="space-y-1 min-w-0">
                  <div className="text-xs font-black uppercase tracking-wider text-red-500">
                    {isError ? 'TRANSMISSION FAILED' : 'TRANSMISSION COMPLETE'}
                  </div>
                  <p className="text-[11px] text-zinc-300 uppercase leading-relaxed font-bold">
                    {globalNotification}
                  </p>
                </div>
              </div>
              <div className="flex justify-end pt-2 border-t border-zinc-900 mt-1">
                <button 
                  onClick={() => setGlobalNotification(null)}
                  className="text-[10px] uppercase font-bold text-zinc-500 hover:text-white transition-colors tracking-widest"
                >
                  [DISMISS_NOTIF]
                </button>
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
}
