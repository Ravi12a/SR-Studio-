import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ArrowLeft, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProgressiveImage from '../components/ProgressiveImage';
import { projects, projectCategories as categories } from '../data/projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { useImageModal } from '../context/ImageModalContext';
import { getOptimizedUrl } from '../utils/image';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { openImageModal } = useImageModal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = projects.filter(project => 
    activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="bg-background min-h-screen pt-24">
      <SEO 
        title="Featured Work & Portfolio | SR Studio"
        description="View SR Studio's curated selection of premium projects across website development, branding, UI/UX, and graphic design."
        canonicalUrl="https://sr-studio.in/projects"
      />
      <Navbar />
      
      <div className="container mx-auto px-6 max-w-7xl pt-12 pb-32">
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors mb-8">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="font-display text-5xl md:text-7xl font-semibold mb-6 tracking-tight text-white">Our Complete Portfolio</h1>
          <p className="text-muted text-xl max-w-2xl">A comprehensive look at our design, branding, and development work that drives results.</p>
        </div>

        {/* Category Filters */}
        <div className="flex gap-3 mb-16 overflow-x-auto scrollbar-hide pb-2">
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

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
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

      <Footer />
    </div>
  );
}
