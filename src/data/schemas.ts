export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SR Studio",
  "url": "https://srstudio.in",
  "logo": "https://srstudio.in/logo.png",
  "sameAs": [
    "https://www.instagram.com/srstudio",
    "https://www.linkedin.com/company/srstudio",
    "https://twitter.com/srstudio"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-8409104373",
    "contactType": "customer service",
    "email": "hello.srstudio@gmail.com",
    "areaServed": "IN",
    "availableLanguage": "English"
  }
};

export const localBusinessSchema = (cityName = "India") => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": `SR Studio - Premium Web Design in ${cityName}`,
  "image": "https://srstudio.in/og-image.jpg",
  "@id": `https://srstudio.in/#${cityName.toLowerCase().replace(/\\s+/g, '-')}`,
  "url": "https://srstudio.in",
  "telephone": "+91-8409104373",
  "priceRange": "â¹4,999+",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "New Delhi Area",
    "addressLocality": cityName === 'India' ? 'New Delhi' : cityName,
    "addressRegion": cityName === 'India' ? 'DL' : '',
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.6139,
    "longitude": 77.2090
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "150"
  }
});

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SR Studio",
  "url": "https://srstudio.in/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://srstudio.in/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes SR Studio the best website developer in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SR Studio combines premium, cinematic design with modern technical stacks (React, Tailwind) to create high-converting, blazing-fast websites."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide affordable website design for small businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our Simple Pricing structure includes a highly capable 'Starter' package at â¹4,999 designed for startups across India without compromising quality."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in your full business branding services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our branding services cover everything from logo design and visual identity to complete social media kits."
      }
    }
  ]
};
