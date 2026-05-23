import { motion } from 'motion/react';
import { LayoutTemplate, PenTool, Share2, Layers, Monitor, Target } from 'lucide-react';

const services = [
  {
    icon: LayoutTemplate,
    title: "Website Design & Dev",
    desc: "Bespoke, high-performing websites built with modern frameworks and pixel-perfect precision."
  },
  {
    icon: PenTool,
    title: "Branding & Identity",
    desc: "Distinctive brand identities, logos, and visual systems that make your business unforgettable."
  },
  {
    icon: Share2,
    title: "Social Media Creatives",
    desc: "Engaging and premium posts, stories, and advertisements designed to boost impressions."
  },
  {
    icon: Layers,
    title: "Graphic Design",
    desc: "From pitch decks to corporate brochures, we design materials that communicate excellence."
  },
  {
    icon: Monitor,
    title: "Business Portfolios",
    desc: "Elegant digital portfolios tailored for agencies, freelancers, and creative studios."
  },
  {
    icon: Target,
    title: "Creative Direction",
    desc: "Comprehensive strategy shaping the unified visual tone across all your business touchpoints."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative bg-surface">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-end justify-between mb-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6 tracking-tight">Expertise that elevates<br/><span className="text-white/50">your standard.</span></h2>
            <p className="text-muted text-lg">We combine strategic thinking with premium design execution. Our services are tailored to modern brands seeking a competitive edge.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-[1px] rounded-3xl overflow-hidden bg-white/5 hover:bg-transparent transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full bg-surface p-8 rounded-[23px] flex flex-col items-start gap-6 border border-white/5 group-hover:border-transparent transition-colors duration-500">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <service.icon size={20} className="group-hover:text-black text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
