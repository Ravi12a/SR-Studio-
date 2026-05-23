import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useModal } from '../context/ModalContext';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useModal();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ensure scroll happens if we navigate back to home with a hash
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 backdrop-blur-xl bg-background/70 border-b border-white/5' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <Link to="/" className="text-xl font-display font-bold tracking-tighter z-50 relative">SR STUDIO.</Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 py-2 px-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <ul className="flex items-center gap-8 text-sm font-medium">
              <li><Link to="/#services" className="hover:text-white/70 transition-colors">Services</Link></li>
              <li><Link to="/#work" className="hover:text-white/70 transition-colors">Work</Link></li>
              <li><Link to="/#pricing" className="hover:text-white/70 transition-colors">Pricing</Link></li>
              <li><Link to="/#contact" className="hover:text-white/70 transition-colors">Contact</Link></li>
            </ul>
          </nav>

          <div className="hidden md:block">
            <button onClick={openModal} className="px-5 py-2 text-sm bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors cursor-pointer">
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden relative z-50 p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-8 text-2xl font-display">
              <li><Link to="/#services" onClick={() => setIsOpen(false)} className="hover:text-white/70 transition-colors">Services</Link></li>
              <li><Link to="/#work" onClick={() => setIsOpen(false)} className="hover:text-white/70 transition-colors">Work</Link></li>
              <li><Link to="/#pricing" onClick={() => setIsOpen(false)} className="hover:text-white/70 transition-colors">Pricing</Link></li>
              <li><button onClick={() => { setIsOpen(false); openModal(); }} className="hover:text-white/70 transition-colors cursor-pointer">Start Project</button></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
