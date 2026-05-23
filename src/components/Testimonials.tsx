import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "SR Studio transformed our digital presence. The attention to detail and modern aesthetic exceeded our expectations.",
    author: "Elena Rodriguez",
    role: "CEO, Aura Skincare",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Working with Ravi and the team was seamless. They understood our vision perfectly and delivered a flawless product.",
    author: "James Chen",
    role: "Founder, TechFlow",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "The branding strategy completely changed how our clients perceive us. Highly recommended for premium design.",
    author: "Sarah Jenkins",
    role: "Director, Lumine Space",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 relative bg-background border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-semibold mb-4 tracking-tight"
          >
            Client Reviews
          </motion.h2>
          <p className="text-muted text-lg max-w-xl mx-auto md:mx-0">Don't just take our word for it.</p>
        </div>

        <div className="flex overflow-x-auto pb-12 gap-6 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[300px] md:min-w-[400px] w-full max-w-[450px] snap-center bg-surface border border-white/5 p-10 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <Quote className="text-white/20 mb-6" size={32} />
                <p className="text-lg leading-relaxed mb-10">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover grayscale" />
                <div>
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-xs text-muted font-medium uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
