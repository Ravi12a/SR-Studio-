import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { toast } from 'sonner';

export default function ContactModal() {
  const { isModalOpen, closeModal } = useModal();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isModalOpen]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "0616fdea-be73-49c1-af0b-2eae7abc3c8e");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast.success("Message sent successfully!", {
          description: "We'll get back to you within 24 hours.",
        });
        form.reset();
        closeModal();
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again or email us directly.",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto scrollbar-hide rounded-[2rem] glass bg-surface/95 border border-white/10 shadow-2xl"
          >
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="p-8 md:p-12 relative z-0">
              <div className="mb-10">
                <h3 className="font-display text-3xl font-semibold mb-2 tracking-tight">Start Your Project</h3>
                <p className="text-muted">Fill out the form below and we'll get back to you shortly.</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="modal-name" className="text-xs font-medium uppercase tracking-wider text-muted ml-2">Name</label>
                    <input type="text" id="modal-name" name="name" required className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all placeholder:text-white/20" placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="modal-business" className="text-xs font-medium uppercase tracking-wider text-muted ml-2">Business Name</label>
                    <input type="text" id="modal-business" name="business" className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all placeholder:text-white/20" placeholder="Company Inc." />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="modal-email" className="text-xs font-medium uppercase tracking-wider text-muted ml-2">Email Address</label>
                    <input type="email" id="modal-email" name="email" required className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all placeholder:text-white/20" placeholder="john@company.com" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="modal-phone" className="text-xs font-medium uppercase tracking-wider text-muted ml-2">Phone Number</label>
                    <input type="tel" id="modal-phone" name="phone" className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all placeholder:text-white/20" placeholder="+91 00000 00000" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="modal-type" className="text-xs font-medium uppercase tracking-wider text-muted ml-2">Project Type</label>
                    <select id="modal-type" name="type" className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all appearance-none text-white outline-none">
                      <option value="website">Website Design & Dev</option>
                      <option value="branding">Branding & Identity</option>
                      <option value="social">Social Media Creatives</option>
                      <option value="portfolio">Business Portfolio</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="modal-budget" className="text-xs font-medium uppercase tracking-wider text-muted ml-2">Estimated Budget</label>
                    <select id="modal-budget" name="budget" className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all appearance-none text-white outline-none">
                      <option value="5k">₹4,999 - ₹9,999</option>
                      <option value="10k">₹9,999 - ₹19,999</option>
                      <option value="20k">₹19,999 - ₹49,999</option>
                      <option value="50k+">₹50,000+</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-8">
                  <label htmlFor="modal-message" className="text-xs font-medium uppercase tracking-wider text-muted ml-2">Project Details</label>
                  <textarea id="modal-message" name="message" required rows={4} className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all placeholder:text-white/20 resize-none" placeholder="Tell us a little bit about what you are looking to achieve..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-5 bg-white text-black rounded-xl font-medium hover:bg-white/90 transition-all disabled:opacity-80 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center relative overflow-hidden"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <span>Submit Inquiry</span>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
