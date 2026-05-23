import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useImageModal } from '../context/ImageModalContext';

export default function ImageModal() {
  const { isImageModalOpen, currentImage, closeImageModal } = useImageModal();

  useEffect(() => {
    if (isImageModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeImageModal();
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isImageModalOpen, closeImageModal]);

  return (
    <AnimatePresence>
      {isImageModalOpen && currentImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImageModal}
            className="absolute inset-0 bg-background/95 backdrop-blur-3xl cursor-zoom-out"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 max-w-7xl w-full max-h-[90vh] flex flex-col items-center justify-center rounded-3xl"
          >
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 md:-right-12 text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full cursor-pointer z-50 shadow-xl border border-white/10"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="w-full h-full object-contain max-h-[85vh] rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
            />
            {currentImage.alt && (
              <div className="mt-6 text-center text-white/80 font-medium text-lg">
                {currentImage.alt}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
