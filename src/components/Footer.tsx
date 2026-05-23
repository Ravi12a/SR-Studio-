import { useState, FormEvent } from 'react';
import { Instagram, Twitter, Linkedin, Github, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { toast } from 'sonner';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus('loading');
      
      try {
        await addDoc(collection(db, 'subscribers'), {
          email: email,
          createdAt: serverTimestamp()
        });
        
        setStatus('idle');
        setEmail('');
        toast.success('Successfully subscribed!', {
          description: 'Thank you for joining our premium newsletter.',
        });
      } catch (error) {
        console.error("Subscription failed:", error);
        setStatus('idle');
        toast.error('Subscription failed', {
          description: 'Please try again later.',
        });
      }
    }
  };

  return (
    <footer className="bg-surface border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="glass rounded-[2rem] p-8 md:p-12 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/5 bg-background/50">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-2xl font-display font-medium mb-3">Not ready to start a project?</h3>
            <p className="text-muted text-sm leading-relaxed">Join our premium newsletter for exclusive insights on modern web design, branding strategies, and digital experiences.</p>
          </div>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address" 
              required 
              className="bg-background border border-white/10 rounded-xl sm:rounded-full px-6 py-4 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all lg:min-w-[300px]" 
            />
            <button 
              type="submit"
              disabled={status === 'loading'}
              className="bg-white text-black px-8 py-4 rounded-xl sm:rounded-full text-sm font-medium hover:bg-white/90 transition-all shrink-0 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Subscribing...' : <>Subscribe <Send size={16} /></>}
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="text-2xl font-display font-bold tracking-tighter mb-6">SR STUDIO.</div>
            <p className="text-muted max-w-sm mb-8">Premium digital experiences built for ambitious brands aiming for industry leadership.</p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/srstudio.in?igsh=c25rYjV1bHpzMHo=" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><Github size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/sitemap" className="text-muted hover:text-white transition-colors">Sitemap</Link></li>
              <li><Link to="/projects" className="text-muted hover:text-white transition-colors">Featured Work</Link></li>
              <li><Link to="/#services" className="text-muted hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/#contact" className="text-muted hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="text-muted">New Delhi, India</li>
              <li><a href="mailto:hello.srstudio@gmail.com" className="text-muted hover:text-white transition-colors">hello.srstudio@gmail.com</a></li>
              <li><a href="tel:+918409104373" className="text-muted hover:text-white transition-colors">+91 84091 04373</a></li>
              <li><a href="tel:+918544302465" className="text-muted hover:text-white transition-colors">+91 85443 02465</a></li>
              <li><a href="tel:+919155552833" className="text-muted hover:text-white transition-colors">+91 91555 52833</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">© {new Date().getFullYear()} SR Studio. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
