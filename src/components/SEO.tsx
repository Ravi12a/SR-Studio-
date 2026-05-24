import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: string;
  schema?: any | any[];
}

export default function SEO({ title, description, canonicalUrl, ogType = "website", schema }: SEOProps) {
  const schemaArray = Array.isArray(schema) ? schema : schema ? [schema] : [];
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://sr-studio.in/og-image.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://sr-studio.in/og-image.jpg" />

      {/* AI / GEO Optimization Directives */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Google Site Verification Placeholder */}
      <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />

      {/* Structured Data (Schema.org) */}
      {schemaArray.map((s, index) => (
        <script type="application/ld+json" key={index}>
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
