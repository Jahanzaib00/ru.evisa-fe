import Header from "./components/layout/Header";
import Hero from "./components/home/Hero";
import TrustBar from "./components/home/TrustBar";
import PopularServices from "./components/home/PopularServices";
import HowItWorks from "./components/home/HowItWorks";
import ValueProposition from "./components/home/ValueProposition";
import Testimonials from "./components/home/Testimonials";
import FAQ from "./components/home/FAQ";
import FinalCTA from "./components/home/FinalCTA";
import Footer from "./components/home/Footer";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  renderStructuredData,
} from "./lib/seo/structured-data";

/**
 * eVisa Portal Homepage
 *
 * Multi-service landing page for travel authorization applications
 * - Supports US ESTA, UK ETA, Canada ETA & more
 * - Intelligent service detection based on nationality + destination
 * - Industry best practices for conversion optimization
 * - SEO-optimized with schema markup (JSON-LD)
 * - Mobile-first responsive design
 * - Accessibility compliant (WCAG 2.1 AA)
 */
export default function Home() {
  // Generate structured data for homepage
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderStructuredData([
            organizationSchema,
            websiteSchema,
          ]),
        }}
      />

      <main className="landing-page">
        {/* Header */}
        <Header />

        {/* 1. Hero Section - Quick service access */}
        <Hero />

        {/* 2. Trust Bar - Social proof and credentials */}
        <TrustBar />

        {/* 3. Popular Services - Quick access to main services */}
        <PopularServices />

        {/* 4. How It Works - Universal 3-step process */}
        <HowItWorks />

        {/* 5. Value Proposition - Why choose our service */}
        <ValueProposition />

        {/* 6. Testimonials - Social proof */}
        <Testimonials />

        {/* 7. FAQ - Common questions with schema markup */}
        <FAQ />

        {/* 8. Final CTA - Last conversion opportunity */}
        <FinalCTA />

        {/* 9. Footer - Legal links and disclaimer */}
        <Footer />
      </main>
    </>
  );
}
