import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "What makes SR Studio the best website developer in India?",
    answer: "SR Studio combines premium, cinematic design with modern technical stacks (React, Tailwind) to create high-converting, blazing-fast websites. We don't use generic templates; every project is bespoke to your brand, maximizing both Google Search rankings and AI Search Visibility (GEO/AEO)."
  },
  {
    question: "Do you provide affordable website design for small businesses?",
    answer: "Yes, our Simple Pricing structure includes a highly capable 'Starter' package at ₹4,999. It is designed to give startups and small businesses an affordable, premium modern digital experience without compromising on quality or aesthetics."
  },
  {
    question: "What is included in your full business branding services?",
    answer: "Our branding services cover everything from logo design and visual identity (color palettes, typography) to complete social media kits and brand guidelines. We ensure your brand looks trustworthy, modern, and high-end across all touchpoints."
  },
  {
    question: "How do you optimize websites for AI search engines like ChatGPT and Perplexity?",
    answer: "We implement advanced Generative Engine Optimization (GEO) strategies. This includes rich semantic HTML, deeply structured schema markup (LocalBusiness, Organization, FAQ), clear entity-rich copywriting, and authoritative content structures that AI models can easily parse and confidently recommend."
  },
  {
    question: "Do you design modern portfolio websites?",
    answer: "Absolutely. We specialize in building sleek, glassmorphism-inspired business and personal portfolios. Our portfolios feature smooth Framer Motion animations, clean layouts, and mobile-first responsive coding to showcase your work cinematically."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 relative bg-surface border-y border-white/5" id="faq">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-semibold mb-4 tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            Direct answers about our premium web design and branding services.
          </motion.p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-white/5 border-white/20' : 'bg-transparent border-white/5 hover:border-white/10'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-lg pr-8">{faq.question}</span>
                  <div className={`w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-white text-black' : 'bg-white/5 text-white'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="p-6 pt-0 text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
