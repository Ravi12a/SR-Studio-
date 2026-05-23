import { motion } from 'motion/react';
import { Check, Star } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    description: "Perfect to get your business online.",
    features: [
      "Basic Website",
      "Mobile Responsive",
      "Fast Delivery",
      "Clean Modern Design"
    ],
    buttonText: "Get Started",
    popular: false,
  },
  {
    name: "Standard",
    price: "₹9,999",
    description: "Ideal for growing businesses.",
    features: [
      "Premium UI Design",
      "Multi-page Website",
      "SEO Basics",
      "Smooth Animations",
      "Better Brand Presentation"
    ],
    buttonText: "Choose Standard",
    popular: true,
  },
  {
    name: "Premium",
    price: "₹19,999",
    description: "For brands seeking industry leadership.",
    features: [
      "Full Brand Experience",
      "Advanced UI/UX",
      "Premium Support",
      "High-End Custom Design",
      "Priority Delivery"
    ],
    buttonText: "Book Premium",
    popular: false,
  }
];

export default function Pricing() {
  const { openModal } = useModal();

  return (
    <section id="pricing" className="py-32 relative bg-surface border-y border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-center items-center">
        <div className="w-[800px] h-[500px] bg-white/[0.02] rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-semibold mb-4 tracking-tight"
          >
            Simple Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg max-w-xl mx-auto"
          >
            Premium digital experiences tailored for growing businesses.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`group relative glass rounded-[2rem] p-8 md:p-10 flex flex-col h-full bg-background/40 hover:-translate-y-2 transition-transform duration-500
                ${plan.popular ? 'border-white/20 md:-mt-8 shadow-2xl shadow-white/5' : 'border-white/5 hover:border-white/10'}
              `}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider shadow-lg">
                    <Star size={12} className="fill-black" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="font-display text-2xl font-medium mb-2">{plan.name}</h3>
                <p className="text-sm text-muted mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-display font-semibold">{plan.price}</span>
                </div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-white/20 transition-colors">
                        <Check size={12} className={plan.popular ? "text-white" : "text-white/70"} />
                      </div>
                      <span className="text-sm text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={openModal}
                className={`w-full py-4 px-6 rounded-full font-medium transition-all duration-300 cursor-pointer
                  ${plan.popular 
                    ? 'bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.1)]' 
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                  }
                `}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
