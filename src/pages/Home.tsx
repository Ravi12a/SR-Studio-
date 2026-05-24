import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Trust from '../components/Trust';
import Services from '../components/Services';
import FeaturedWork from '../components/FeaturedWork';
import WhyChooseUs from '../components/WhyChooseUs';
import Pricing from '../components/Pricing';
import Founders from '../components/Founders';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { localBusinessSchema, organizationSchema, websiteSchema, faqSchema } from '../data/schemas';

export default function Home() {
  return (
    <>
      <SEO 
        title="SR Studio | Premium Creative Digital Agency in India"
        description="SR Studio helps businesses grow with premium websites, branding, UI/UX design, and modern digital experiences. Top-rated website design agency in India."
        canonicalUrl="https://sr-studio.in/"
        schema={[organizationSchema, websiteSchema, faqSchema, localBusinessSchema("India")]}
      />
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services />
        <FeaturedWork />
        <WhyChooseUs />
        <Pricing />
        <Founders />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
