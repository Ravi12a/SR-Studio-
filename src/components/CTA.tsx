import { motion } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function CTA() {
  const { openModal } = useModal();

  return (
    <section id="cta" className="py-32 relative overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-white/10 rounded-[3rem] p-12 md:p-24 bg-white/5 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
          
          <h2 className="font-display text-4xl md:text-6xl font-semibold mb-6 tracking-tight relative z-10">
            Let's Build Something <br className="hidden md:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">People Remember.</span>
          </h2>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 relative z-10">
            Modern websites and branding that help your business grow.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button onClick={openModal} className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors flex items-center justify-center gap-2 cursor-pointer">
              Start Project
              <ArrowRight size={18} />
            </button>
            <a href="https://wa.me/918409104373" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 rounded-full font-medium hover:bg-[#25D366]/20 transition-colors flex items-center justify-center gap-2">
                <MessageCircle size={18} />
                Contact on WhatsApp
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
