import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/[0.05] via-background to-background"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-3xl"></div>
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,#000_20%,transparent_100%)]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-6xl flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 text-xs font-medium tracking-wide uppercase text-white/80"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Award Winning Digital Agency
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-[88px] tracking-tight leading-[0.95] font-semibold mb-6 max-w-5xl">
            We Build Brands That <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/30">People Trust.</span>
            {/* Semantic visually hidden h1 context for AI/Google Indexing */}
            <span className="sr-only">SR Studio: Premium Website Design & Branding Agency in India</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted max-w-2xl mb-12 leading-relaxed"
        >
          SR Studio helps businesses grow with premium websites, branding, social media creatives, and modern digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <div className="glow-border w-full sm:w-auto">
            <button onClick={openModal} className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors flex items-center justify-center gap-2 cursor-pointer">
              Start Your Project
              <ArrowRight size={18} />
            </button>
          </div>
          <a href="#work" className="w-full sm:w-auto hidden sm:block">
            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-medium hover:bg-white/10 backdrop-blur-md transition-colors flex items-center justify-center gap-2 text-white">
              <Play fill="currentColor" size={14} className="opacity-80"/>
              View Our Work
            </button>
          </a>
        </motion.div>
      </div>

      {/* Floating UI Mocks */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        className="absolute -bottom-32 md:-bottom-48 left-1/2 -translate-x-1/2 w-[120%] md:w-[80%] max-w-5xl h-[40vh] border border-white/10 rounded-t-3xl bg-surface/50 backdrop-blur-xl z-10 flex overflow-hidden mask-image-bottom"
        style={{ maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)' }}
      >
        <div className="w-full h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-white/20"></div>
          <div className="w-3 h-3 rounded-full bg-white/20"></div>
          <div className="w-3 h-3 rounded-full bg-white/20"></div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</div>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
      </motion.div>
    </section>
  );
}
