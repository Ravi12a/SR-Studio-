import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ArrowRight, Maximize2 } from 'lucide-react';
import ProgressiveImage from './ProgressiveImage';
import { Link } from 'react-router-dom';
import { projects, projectCategories as categories } from '../data/projects';
import { useImageModal } from '../context/ImageModalContext';
import { getOptimizedUrl } from '../utils/image';

export default function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { openImageModal } = useImageModal();

  const filteredProjects = projects.filter(project => 
    activeCategory === "All" || project.category === activeCategory
  );

  const displayedProjects = filteredProjects.slice(0, 4);

  return (
    <section id="work" className="py-32 relative bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 tracking-tight">Featured Work</h2>
            <p className="text-muted text-lg max-w-lg">A curated selection of our finest projects across web, branding, and digital design.</p>
          </div>
          <Link 
            to="/projects"
            className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider hover:text-white/70 transition-colors cursor-pointer"
          >
            View All Projects 
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Category Filters */}
        <div className="flex gap-3 mb-12 overflow-x-auto scrollbar-hide pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 pointer-events-auto cursor-pointer ${
                activeCategory === category 
                  ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]' 
                  : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.a 
                layout
                href={project.link === '#' ? undefined : project.link}
                target={project.link === '#' ? undefined : "_blank"}
                rel={project.link === '#' ? undefined : "noreferrer"}
                onClick={(e) => {
                  if (project.link === '#') {
                    e.preventDefault();
                    openImageModal(project.image, project.title);
                  }
                }}
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`group cursor-pointer ${project.size === 'large' ? 'md:col-span-2 aspect-[2/1]' : 'aspect-square md:aspect-[4/5]'} overflow-hidden rounded-3xl relative block focus:outline-none`}
                tabIndex={0}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                
                <ProgressiveImage 
                  src={getOptimizedUrl(project.image, project.size === 'large' ? 1200 : 800)} 
                  alt={project.title} 
                  placeholderSrc={(project as any).placeholder ? getOptimizedUrl((project as any).placeholder, 50) : undefined}
                  imageClassName="transform scale-100 group-hover:scale-105" 
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex justify-between items-end pointer-events-none">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">{project.category}</div>
                    <h3 className="text-3xl font-display font-medium text-white">{project.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {project.link === '#' ? <Maximize2 size={20} /> : <ArrowUpRight size={20} />}
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
