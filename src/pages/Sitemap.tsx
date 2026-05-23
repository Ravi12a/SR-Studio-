import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { websiteSchema } from '../data/schemas';

const cities = [
  'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Pune', 
  'Kolkata', 'Patna', 'Chennai', 'Ahmedabad', 'Jaipur'
];

export default function HTMLSitemap() {
  return (
    <div className="bg-background min-h-screen pt-24">
      <SEO 
        title="HTML Sitemap | SR Studio" 
        description="Navigate to all core pages, services, and local city web design service pages of SR Studio."
        canonicalUrl="https://srstudio.in/sitemap"
        schema={websiteSchema}
      />
      <Navbar />
      
      <div className="container mx-auto px-6 max-w-5xl py-20 min-h-[60vh]">
        <h1 className="text-4xl font-display font-semibold mb-12">HTML Sitemap</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-medium mb-6 uppercase tracking-widest text-white/50 text-sm">Core Pages</h2>
            <ul className="space-y-4">
              <li><Link to="/" className="text-white hover:text-white/70 transition-colors underline decoration-white/20 underline-offset-4">Home</Link></li>
              <li><Link to="/projects" className="text-white hover:text-white/70 transition-colors underline decoration-white/20 underline-offset-4">Portfolio & Featured Work</Link></li>
              <li><Link to="/#services" className="text-white hover:text-white/70 transition-colors underline decoration-white/20 underline-offset-4">Our Services</Link></li>
              <li><Link to="/#pricing" className="text-white hover:text-white/70 transition-colors underline decoration-white/20 underline-offset-4">Pricing Plans</Link></li>
              <li><Link to="/#contact" className="text-white hover:text-white/70 transition-colors underline decoration-white/20 underline-offset-4">Contact Us</Link></li>
              <li><Link to="/#faq" className="text-white hover:text-white/70 transition-colors underline decoration-white/20 underline-offset-4">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-medium mb-6 uppercase tracking-widest text-white/50 text-sm">Local Services</h2>
            <ul className="space-y-4">
              {cities.map((city) => (
                <li key={city}>
                  <Link to={`/locations/${city.toLowerCase()}`} className="text-white hover:text-white/70 transition-colors underline decoration-white/20 underline-offset-4">
                    Web Design Agency in {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
