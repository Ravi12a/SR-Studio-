import { motion } from 'motion/react';
import { ShieldCheck, Zap, Palette, MonitorSmartphone } from 'lucide-react';

const trustIndicators = [
  { icon: ShieldCheck, title: "Modern UI/UX", desc: "Crafting intuitive digital experiences." },
  { icon: Zap, title: "Fast Delivery", desc: "Iterative sprints & rapid turnarounds." },
  { icon: Palette, title: "Premium Design", desc: "Aesthetic interfaces that build trust." },
  { icon: MonitorSmartphone, title: "Mobile Optimized", desc: "Flawless performance on all devices." }
];

export default function Trust() {
  return (
    <section className="py-24 relative z-10 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-wider uppercase text-white/50 mb-2"
          >
            Trusted by Modern Businesses
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustIndicators.map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-2xl group hover:border-white/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                <indicator.icon size={20} className="text-white/80" />
              </div>
              <h3 className="font-medium text-lg mb-2">{indicator.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{indicator.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
