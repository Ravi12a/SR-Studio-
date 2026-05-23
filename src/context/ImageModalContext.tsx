import { createContext, useContext, useState, ReactNode } from 'react';

interface ImageModalContextType {
  openImageModal: (imageSrc: string, altText: string) => void;
  closeImageModal: () => void;
  isImageModalOpen: boolean;
  currentImage: { src: string; alt: string } | null;
}

const ImageModalContext = createContext<ImageModalContextType | undefined>(undefined);

export function ImageModalProvider({ children }: { children: ReactNode }) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<{ src: string; alt: string } | null>(null);

  const openImageModal = (imageSrc: string, altText: string) => {
    setCurrentImage({ src: imageSrc, alt: altText });
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setTimeout(() => setCurrentImage(null), 300); // clear after exit animation
  };

  return (
    <ImageModalContext.Provider value={{ isImageModalOpen, currentImage, openImageModal, closeImageModal }}>
      {children}
    </ImageModalContext.Provider>
  );
}

export function useImageModal() {
  const context = useContext(ImageModalContext);
  if (context === undefined) {
    throw new Error('useImageModal must be used within an ImageModalProvider');
  }
  return context;
}
