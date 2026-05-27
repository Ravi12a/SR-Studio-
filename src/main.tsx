import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root')!;

const hasActualContent = rootElement.hasChildNodes() && 
  !(rootElement.childNodes.length === 1 && rootElement.firstChild?.nodeType === Node.COMMENT_NODE);

if (typeof document !== 'undefined') {
  document.addEventListener("touchstart", function() {}, {passive: true});
}

if (hasActualContent) {
  hydrateRoot(
    rootElement,
    <StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </StrictMode>
  );
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </StrictMode>
  );
}
