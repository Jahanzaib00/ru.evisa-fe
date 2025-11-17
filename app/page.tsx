import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import TrustBar from './components/home/TrustBar';
import ValueProposition from './components/home/ValueProposition';
import HowItWorks from './components/home/HowItWorks';
import Requirements from './components/home/Requirements';
import Pricing from './components/home/Pricing';
import FAQ from './components/home/FAQ';
import Testimonials from './components/home/Testimonials';
import FinalCTA from './components/home/FinalCTA';
import Footer from './components/home/Footer';

/**
 * ESTA Landing Page
 *
 * High-converting landing page for ESTA application service
 * - Government-inspired design for trust and credibility
 * - CRO-optimized with clear CTAs and conversion tactics
 * - SEO-optimized with schema markup
 * - Mobile-first responsive design
 * - Accessibility compliant (WCAG 2.1 AA)
 */
export default function Home() {
  return (
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
  );
}
