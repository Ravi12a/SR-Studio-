import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Copy, CheckCircle2, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(text);
      setTimeout(() => setCopiedPhone(null), 2000);
    }
  };

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
    <section id="contact" className="py-32 relative bg-background border-t border-white/5 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-semibold mb-4 tracking-tight"
          >
            Let's Work Together
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            Have a project in mind? SR Studio is ready to help your business stand out with modern design and powerful digital experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left Side: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="p-8 rounded-[2rem] glass bg-surface/50 border-white/5 hover:border-white/10 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                <Mail size={20} className="text-white/80" />
              </div>
              <h3 className="font-medium text-lg mb-2">Email Us</h3>
              <p className="text-muted text-sm mb-6">Drop us a line and we'll get back to you within 24 hours.</p>
              
              <div 
                className="flex items-center justify-between p-4 rounded-xl bg-background border border-white/5 cursor-pointer hover:border-white/20 transition-all"
                onClick={() => handleCopy('hello.srstudio@gmail.com', 'email')}
              >
                <a href="mailto:hello.srstudio@gmail.com" className="text-sm font-medium hover:text-white/80 transition-colors pointer-events-none">hello.srstudio@gmail.com</a>
                {copiedEmail ? <CheckCircle2 size={16} className="text-green-500" /> : <Copy size={16} className="text-muted group-hover:text-white transition-colors" />}
              </div>
            </div>

            <div className="p-8 rounded-[2rem] glass bg-surface/50 border-white/5 hover:border-white/10 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                <Phone size={20} className="text-white/80" />
              </div>
              <h3 className="font-medium text-lg mb-2">Call Us</h3>
              <p className="text-muted text-sm mb-6">Available Mon-Fri, 10am - 6pm IST.</p>
              
              <div className="flex flex-col gap-3">
                {['+91 8409104373', '+91 8544302465', '+91 9155552833'].map((phone, i) => (
                  <div 
                    key={i}
                    className="flex items-center justify-between p-4 rounded-xl bg-background border border-white/5 cursor-pointer hover:border-white/20 transition-all"
                    onClick={() => handleCopy(phone, 'phone')}
                  >
                    <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-sm font-medium hover:text-white/80 transition-colors pointer-events-none">{phone}</a>
                    {copiedPhone === phone ? <CheckCircle2 size={16} className="text-green-500" /> : <Copy size={16} className="text-muted group-hover:text-white transition-colors" />}
                  </div>
                ))}
              </div>
              
              <a 
                href="https://wa.me/918409104373" 
                target="_blank" 
                rel="noreferrer"
                className="mt-6 w-full py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 rounded-xl font-medium hover:bg-[#25D366]/20 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Quick WhatsApp Chat
              </a>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-8 md:p-12 rounded-[2rem] glass bg-surface/50 border-white/5 relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-muted ml-2">Name</label>
                  <input type="text" id="name" name="name" required className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all placeholder:text-white/20" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="business" className="text-xs font-medium uppercase tracking-wider text-muted ml-2">Business Name</label>
                  <input type="text" id="business" name="business" className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all placeholder:text-white/20" placeholder="Company Inc." />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-muted ml-2">Email Address</label>
                  <input type="email" id="email" name="email" required className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all placeholder:text-white/20" placeholder="john@company.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs font-medium uppercase tracking-wider text-muted ml-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all placeholder:text-white/20" placeholder="+91 00000 00000" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="type" className="text-xs font-medium uppercase tracking-wider text-muted ml-2">Project Type</label>
                  <select id="type" name="type" className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all appearance-none text-white outline-none">
                    <option value="website">Website Design & Dev</option>
                    <option value="branding">Branding & Identity</option>
                    <option value="social">Social Media Creatives</option>
                    <option value="portfolio">Business Portfolio</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="budget" className="text-xs font-medium uppercase tracking-wider text-muted ml-2">Estimated Budget</label>
                  <select id="budget" name="budget" className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all appearance-none text-white outline-none">
                    <option value="5k">₹4,999 - ₹9,999</option>
                    <option value="10k">₹9,999 - ₹19,999</option>
                    <option value="20k">₹19,999 - ₹49,999</option>
                    <option value="50k+">₹50,000+</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-8">
                <label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-muted ml-2">Project Details</label>
                <textarea id="message" name="message" required rows={4} className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all placeholder:text-white/20 resize-none" placeholder="Tell us a little bit about what you are looking to achieve..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-5 bg-white text-black rounded-xl font-medium hover:bg-white/90 transition-all disabled:opacity-80 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center -mb-2 relative overflow-hidden"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <span>Send Inquiry</span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
