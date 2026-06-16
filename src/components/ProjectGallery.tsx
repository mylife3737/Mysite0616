import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowRight, Tractor, Wrench, Cake, Scissors, Pizza, LucideIcon, Waves, Sparkles } from 'lucide-react';
import { cn } from '../utils';

// Helper to get matching icon for each project
const getProjectIcon = (id: string): LucideIcon => {
  switch (id) {
    case 'dans-lawn-care':
      return Tractor;
    case 'handyman':
      return Wrench;
    case 'bakery':
      return Cake;
    case 'pet-grooming':
      return Scissors;
    case 'pizza-shop':
      return Pizza;
    case 'pool-service':
      return Waves;
    case 'housecleaner':
      return Sparkles;
    default:
      return ArrowRight;
  }
};

export default function ProjectGallery() {
  // Filter all registered showcase businesses
  const galleryIds = ['dans-lawn-care', 'handyman', 'pool-service', 'housecleaner', 'bakery', 'pet-grooming', 'pizza-shop'];
  const galleryProjects = PROJECTS.filter((project) => galleryIds.includes(project.id));

  return (
    <div id="project-gallery-wrapper" className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryProjects.map((project, idx) => {
          const IconComponent = getProjectIcon(project.id);
          const isLawnCare = project.id === 'dans-lawn-care';
          const isHandyman = project.id === 'handyman';
          const isBakery = project.id === 'bakery';
          const isPetGrooming = project.id === 'pet-grooming';
          const isPizzaShop = project.id === 'pizza-shop';
          const isPoolService = project.id === 'pool-service';
          const isHousecleaner = project.id === 'housecleaner';

          return (
            <motion.div
              key={project.id}
              id={`gallery-card-${project.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                damping: 15,
                stiffness: 90,
                delay: idx * 0.1,
              }}
              className="flex flex-col h-full"
            >
              <Link
                to={`/project/${project.id}`}
                id={`gallery-link-${project.id}`}
                className="group flex flex-col h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-2 flex-1"
              >
                {/* Image Container with custom shape/border per brand layout */}
                <div 
                  id={`image-container-${project.id}`}
                  className={cn(
                    "relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800 m-4 mb-2",
                    isLawnCare && "rounded-2xl border-2 border-emerald-950 p-0.5",
                    isHandyman && "rounded-none border border-red-600/50 p-1 bg-zinc-950",
                    isBakery && "rounded-t-[3rem] rounded-b-xl",
                    isPetGrooming && "rounded-[2.5rem]",
                    isPizzaShop && "rounded-2xl skew-x-[-1deg]",
                    isPoolService && "rounded-3xl border-2 border-sky-400 p-0.5 bg-sky-950/20",
                    isHousecleaner && "rounded-xl border-2 border-yellow-500/50 p-0.5"
                  )}
                >
                  <img
                    id={`gallery-image-${project.id}`}
                    src={project.heroImage}
                    alt={project.name}
                    className={cn(
                      "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                      isLawnCare && "rounded-xl"
                    )}
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Brand Overlay / Banner */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-semibold tracking-wider uppercase flex items-center gap-1">
                      View Live Website <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>

                  {/* Brand Floating Badge */}
                  <div className="absolute top-4 left-4" id={`badge-${project.id}`}>
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black shadow-lg"
                      style={{ backgroundColor: project.accentColor }}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-6 pt-3 flex flex-col flex-1" id={`info-container-${project.id}`}>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span 
                      id={`tag-${project.id}`}
                      className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                    >
                      {project.id === 'dans-lawn-care' ? 'Lawn Care' : project.id.replace(/-/g, ' ')}
                    </span>
                    <span className="text-[11px] font-mono opacity-40">0{idx + 1}</span>
                  </div>

                  {/* Title */}
                  <h3 
                    id={`title-${project.id}`}
                    className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors"
                  >
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p 
                    id={`desc-${project.id}`}
                    className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 md:line-clamp-3 leading-relaxed flex-1"
                  >
                    {project.description}
                  </p>

                  {/* Call to action arrow link */}
                  <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300" id={`cta-link-${project.id}`}>
                    <span>Explore Vibe</span>
                    <ArrowRight className="w-4 h-4 -translate-x-1 group-hover:translate-x-0 transition-transform duration-300" style={{ color: project.accentColor }} />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
