import Header from "./components/layout/Header";
import Hero from "./components/home/Hero";
import TrustBar from "./components/home/TrustBar";
import ValueProposition from "./components/home/ValueProposition";
import HowItWorks from "./components/home/HowItWorks";
import Requirements from "./components/home/Requirements";
import Pricing from "./components/home/Pricing";
import FAQ from "./components/home/FAQ";
import Testimonials from "./components/home/Testimonials";
import FinalCTA from "./components/home/FinalCTA";
import Footer from "./components/home/Footer";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateServiceSchema,
  generateHowToSchema,
  renderStructuredData,
} from "./lib/seo/structured-data";

/**
 * ESTA Landing Page
 *
 * High-converting landing page for ESTA application service
 * - Government-inspired design for trust and credibility
 * - CRO-optimized with clear CTAs and conversion tactics
 * - SEO-optimized with schema markup (JSON-LD)
 * - Mobile-first responsive design
 * - Accessibility compliant (WCAG 2.1 AA)
 */
export default function Home() {
  // Generate structured data for homepage
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();
  const serviceSchema = generateServiceSchema();
  const howToSchema = generateHowToSchema({
    name: "How to Apply for ESTA",
    description:
      "Complete guide to applying for U.S. ESTA travel authorization in 3 simple steps",
    url: "https://www.visaportal.com",
    totalTime: "PT10M",
    steps: [
      {
        name: "Fill Out Application",
        text: "Complete the online ESTA application form with your passport and travel information. Takes about 5 minutes.",
        url: "https://www.visaportal.com/apply",
      },
      {
        name: "Review and Pay",
        text: "Review your application details and pay the processing fee securely with Stripe.",
      },
      {
        name: "Receive Authorization",
        text: "Get your ESTA approval via email within 24-72 hours. Most applications are approved within 24 hours.",
      },
    ],
  });

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderStructuredData([
            organizationSchema,
            websiteSchema,
            serviceSchema,
            howToSchema,
          ]),
        }}
      />

      <main className="landing-page">
        {/* Header */}
        <Header />

        {/* 1. Hero Section - Above the fold with primary CTA */}
        <Hero />

        {/* 2. Trust Bar - Social proof and credentials */}
        <TrustBar />

        {/* 3. Value Proposition - Why choose our service */}
        <ValueProposition />

        {/* 4. How It Works - 3-step process */}
        <HowItWorks />

        {/* 5. Requirements - What you need to apply */}
        <Requirements />

        {/* 6. Pricing - Transparent pricing breakdown */}
        <Pricing />

        {/* 7. FAQ - Common questions with schema markup */}
        <FAQ />

        {/* 8. Testimonials - Social proof */}
        <Testimonials />

        {/* 9. Final CTA - Last conversion opportunity */}
        <FinalCTA />

        {/* 10. Footer - Legal links and disclaimer */}
        <Footer />
      </main>
    </>
  );
}
