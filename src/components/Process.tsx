import { motion } from 'motion/react';

const steps = [
  { num: "01", title: "Discovery", desc: "Understanding your vision, audience, and goals." },
  { num: "02", title: "Strategy", desc: "Defining the architecture and visual direction." },
  { num: "03", title: "Design", desc: "Crafting pixel-perfect layouts and interactions." },
  { num: "04", title: "Development", desc: "Bringing the design to life with clean code." },
  { num: "05", title: "Launch", desc: "Testing, optimization, and seamless deployment." }
];

export default function Process() {
  return (
    <section className="py-32 relative bg-surface overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-semibold mb-4 tracking-tight"
          >
            How We Work
          </motion.h2>
          <p className="text-muted text-lg max-w-xl mx-auto">A streamlined process designed for efficiency and premium results.</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-white/10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative text-center lg:text-left flex flex-col items-center lg:items-start"
              >
                <div className="w-24 h-24 rounded-full bg-background border border-white/10 flex items-center justify-center font-display text-2xl font-bold mb-6 relative group">
                  <div className="absolute inset-0 rounded-full border border-white/20 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500"></div>
                  {step.num}
                </div>
                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed max-w-[200px] text-center lg:text-left">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
