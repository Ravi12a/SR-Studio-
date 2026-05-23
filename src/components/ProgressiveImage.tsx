import { useState } from 'react';

export default function ProgressiveImage({ src, alt, imageClassName = "", placeholderSrc }: { src: string, alt: string, imageClassName?: string, placeholderSrc?: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-full h-full relative bg-white/5 overflow-hidden">
      {/* Skeleton Pulse Loader */}
      {!isLoaded && !placeholderSrc && (
        <div className="absolute inset-0 bg-white/10 animate-pulse" />
      )}
      
      {placeholderSrc && (
        <img 
          src={placeholderSrc} 
          alt="" 
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover blur-xl scale-110 transition-opacity duration-700 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
        />
      )}
      
      {/* High-Res Image */}
      <img 
        src={src} 
        alt={alt} 
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover relative z-10 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-md'} ${imageClassName}`}
      />
    </div>
  );
}
