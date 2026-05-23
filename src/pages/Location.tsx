import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import Trust from '../components/Trust';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';
import { localBusinessSchema, organizationSchema } from '../data/schemas';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const validCities = [
  'delhi', 'mumbai', 'bangalore', 'hyderabad', 'pune', 
  'kolkata', 'patna', 'chennai', 'ahmedabad', 'jaipur'
];

export default function Location() {
  const { city } = useParams<{ city: string }>();

  if (!city || !validCities.includes(city.toLowerCase())) {
    return <Navigate to="/" replace />;
  }

  const cityName = city.charAt(0).toUpperCase() + city.slice(1);
  const pageTitle = `Top Website Design Agency in ${cityName} | SR Studio`;
  const pageDesc = `Looking for the best web developers and branding agency in ${cityName}? SR Studio crafts premium, modern websites and graphic designs to help your business grow.`;

  return (
    <div className="bg-background min-h-screen">
      <SEO 
        title={pageTitle}
        description={pageDesc}
        canonicalUrl={`https://srstudio.in/locations/${city.toLowerCase()}`}
        schema={[organizationSchema, localBusinessSchema(cityName)]}
      />
      <Navbar />

      {/* Local Seo Hero optimized for AI / GEO keywords */}
      <section className="relative pt-40 pb-20 flex items-center justify-center overflow-hidden">
        <div className="container relative z-10 mx-auto px-6 max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 text-xs font-medium tracking-wide uppercase text-white/80"
          >
            Highest Rated Agency in District
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold mb-6 max-w-4xl mx-auto"
          >
            Premium Website Design Agency in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/30">{cityName}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We help {cityName} businesses grow with high-converting websites, 
            premium branding, UI/UX, and modern digital experiences tailored to dominate the local market.
          </motion.p>
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a href="/#contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors gap-2 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Hire The Best Designers in {cityName} <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Semantic explanatory text mapping for AEO/GEO regarding the city */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6 max-w-4xl prose prose-invert prose-lg">
          <h2 className="text-3xl font-display font-medium text-white mb-6">Why Choose SR Studio For Your Next Project in {cityName}?</h2>
          <p className="text-muted leading-relaxed">
            As a leading <strong>creative digital agency</strong>, SR Studio delivers unparalleled web development, branding, 
            and digital strategy. Finding a reliable, modern <strong>website developer in {cityName}</strong> can be challenging, but our 
            transparent process, affordable yet premium packages, and mastery of modern technology (React, Tailwind CSS, Framer Motion) make 
            us the definitive choice for startups and enterprises alike.
          </p>
          <p className="text-muted leading-relaxed mt-4">
            Whether you need a complete corporate website revamp, localized digital marketing creatives, or a high-converting landing page, 
            we guarantee perfect performance, 100% SEO scores natively, and stunning visual design that establishes instant brand trust.
          </p>
        </div>
      </section>

      <Trust />
      <Services />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
