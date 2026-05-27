import { motion } from 'motion/react';
import { Linkedin, Twitter, Dribbble } from 'lucide-react';
import { getOptimizedUrl } from '../utils/image';

const founders = [
  {
    name: "Ravi Kumar",
    role: "Web Developer & Creative Lead",
    desc: "Ravi is the multi-skilled creative behind SR Studio’s web experiences. From development to visual direction and project handling, he ensures every project feels modern, functional, and polished.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Rohit Arya",
    role: "Graphic Designer",
    desc: "Rohit focuses on branding visuals, social media creatives, and premium graphic design that helps businesses stand out with a clean and professional identity.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Samar Gupta",
    role: "Account Manager",
    desc: "Samar manages communication, client relationships, and project coordination to ensure a smooth and reliable experience from start to finish.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Founders() {
  return (
    <section id="about" className="py-32 relative bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <article className="text-center mb-20 prose prose-invert max-w-none">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-semibold mb-4 tracking-tight"
          >
            Meet The Founders
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            The creative minds behind SR Studio. Together, our team drives comprehensive brand strategies, integrating aesthetic brilliance with robust technical execution to maximize your digital presence.
          </motion.p>
        </article>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative cursor-pointer"
              tabIndex={0}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative h-full glass rounded-3xl p-8 flex flex-col items-center text-center items-stretch hover:-translate-y-2 transition-transform duration-500 group-hover:border-white/20">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border border-white/10 p-1 relative z-10">
                  <div className="w-full h-full rounded-full overflow-hidden filter grayscale group-hover:grayscale-0 transition-all duration-500">
                    <img src={getOptimizedUrl(founder.image, 400)} alt={founder.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                
                <h3 className="font-display text-2xl font-medium mb-2">{founder.name}</h3>
                
                <div className="inline-flex items-center justify-center -mx-4 mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/50 border border-white/10 rounded-full px-3 py-1 bg-white/5">
                    {founder.role}
                  </span>
                </div>
                
                <p className="text-sm text-muted leading-relaxed mb-8 flex-grow">
                  "{founder.desc}"
                </p>
                
                <div className="flex items-center justify-center gap-4 mt-auto border-t border-white/5 pt-6">
                  <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                    <Linkedin size={16} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                    <Twitter size={16} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                    <Dribbble size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
