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
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Cursor />
      
      <div
        className="app-entry"
        style={{ animation: 'fadeIn 1s ease-in-out 0.2s both' }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/locations/:city" element={<Location />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </div>
      <ContactModal />
    </>
  );
}

export default function App() {
  return (
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
  );
}
