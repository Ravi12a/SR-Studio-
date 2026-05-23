import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';

// Context
import { ModalProvider } from './context/ModalContext';

// Components
import Cursor from './components/Cursor';
import ContactModal from './components/ContactModal';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import Location from './pages/Location';
import Sitemap from './pages/Sitemap';

import { ImageModalProvider } from './context/ImageModalContext';
import ImageModal from './components/ImageModal';

function AppContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate premium loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[999] bg-background grid place-items-center"
          >
            <div className="flex flex-col items-center gap-6">
              <div className="text-3xl font-display font-bold tracking-tighter">SR STUDIO.</div>
              <motion.div 
                className="w-48 h-[2px] bg-white/10 relative overflow-hidden rounded-full"
              >
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Cursor />
      
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/locations/:city" element={<Location />} />
            <Route path="/sitemap" element={<Sitemap />} />
          </Routes>
        </motion.div>
      )}
      <ContactModal />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ImageModalProvider>
        <ModalProvider>
          <AppContent />
          <Toaster 
            theme="dark" 
            position="bottom-right"
            toastOptions={{
              style: {
                background: 'rgba(20, 20, 20, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                borderRadius: '12px'
              }
            }}
          />
        </ModalProvider>
        <ImageModal />
      </ImageModalProvider>
    </Router>
  );
}
