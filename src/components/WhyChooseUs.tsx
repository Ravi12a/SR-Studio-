import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Check } from 'lucide-react';

const points = [
  "Modern Premium Design",
  "Fast Communication",
  "Mobile-First Development",
  "Conversion Focused Design",
  "Clean Branding Strategy",
  "Reliable Client Support"
];

const stats = [
  { value: 15, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "%", label: "Design Satisfaction" },
  { value: 13, label: "Happy Clients" },
  { value: 24, suffix: "h", label: "Response Time" }
];

function AnimatedCounter({ end, duration = 2 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const startValue = 0;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * (end - startValue) + startValue));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function WhyChooseUs() {
  return (
    <section className="py-32 relative bg-surface border-y border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6 tracking-tight">Why Choose<br/>SR Studio?</h2>
            <p className="text-muted text-lg mb-10 leading-relaxed">We don't just build websites; we craft digital experiences that position your brand as an industry leader.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {points.map((point, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-sm font-medium">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background border border-white/5 rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:border-white/20 transition-colors"
              >
                <div className="font-display text-5xl font-semibold mb-2 flex items-center">
                  <AnimatedCounter end={stat.value} />
                  {stat.suffix && <span>{stat.suffix}</span>}
                </div>
                <div className="text-sm text-muted uppercase tracking-wider font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
