/**
 * US ESTA Service Hub Page - PRODUCTION QUALITY
 * /services/esta
 *
 * CONVERSION-OPTIMIZED | SEO-OPTIMIZED | PROFESSIONAL
 */

import { Metadata } from "next";
import {
  US_ESTA_CONFIG,
  calculatePrice,
  getCurrencySymbol,
} from "@/app/lib/config/services";
import { generateMetadata as generateSEOMetadata } from "@/app/lib/seo/metadata";
import { generateServiceSchema } from "@/app/lib/seo/structured-data";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/home/Footer";
import Section from "@/app/components/ui/Section";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.online";

  return generateSEOMetadata({
    title: US_ESTA_CONFIG.meta.title,
    description: US_ESTA_CONFIG.meta.description,
    keywords: US_ESTA_CONFIG.meta.keywords,
    canonicalUrl: `${baseUrl}/services/esta`,
  });
}

export default function ESTAServicePage() {
  const pricing = calculatePrice(US_ESTA_CONFIG.type, 1, false);
  const currency = getCurrencySymbol(US_ESTA_CONFIG.pricing.currency);

  // Generate structured data for Google
  const structuredData = generateServiceSchema({
    name: US_ESTA_CONFIG.name,
    description: US_ESTA_CONFIG.meta.description,
    provider: "Visa Portal",
    areaServed: "Worldwide",
    price: pricing.perApplicant.toString(),
    priceCurrency: US_ESTA_CONFIG.pricing.currency,
    url: `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.online"
    }/services/esta`,
  });

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />

      <main>
        {/* Hero Section - Above the Fold Conversion */}
        <Section id="hero" background="primary" padding="xl">
          <Container maxWidth="lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Value Proposition */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {US_ESTA_CONFIG.name}
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                  Fast, secure, and hassle-free travel authorization for the
                  United States. Get approved in{" "}
                  {US_ESTA_CONFIG.processing.standard}.
                </p>

                {/* Trust Signals */}
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2 text-white">
                    <svg
                      className="w-6 h-6 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-semibold">99% Approval Rate</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <svg
                      className="w-6 h-6 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-semibold">24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <svg
                      className="w-6 h-6 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-semibold">Secure Processing</span>
                  </div>
                </div>

                {/* primary-light CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/united-states/apply">
                    <Button size="lg" variant="primary">
                      Start Application →
                    </Button>
                  </Link>
                  <Link href="#how-it-works">
                    <Button size="lg" variant="secondary">
                      How It Works
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right: Quick Info Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-primary-light mb-2">
                    {currency}
                    {pricing.perApplicant}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Validity</span>
                    <span className="font-bold text-gray-900">
                      {US_ESTA_CONFIG.validity.years} Years
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">
                      Processing Time
                    </span>
                    <span className="font-bold text-gray-900">
                      {US_ESTA_CONFIG.processing.standard}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-700 font-medium">Max Stay</span>
                    <span className="font-bold text-gray-900">
                      {US_ESTA_CONFIG.validity.stays}
                    </span>
                  </div>
                </div>

                <Link href="/united-states/apply" className="w-full">
                  <Button size="lg" variant="primary" className="w-full">
                    Apply Now
                  </Button>
                </Link>

                <p className="text-xs text-gray-500 text-center mt-4">
                  ✓ Instant Approval
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Social Proof Bar */}
        <Section id="social-proof" background="white" padding="sm">
          <Container maxWidth="lg">
            <div className="flex flex-wrap items-center justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-light">50K+</div>
                <div className="text-sm text-gray-600">
                  Applications Processed
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-primary-light">99%</div>
                <div className="text-sm text-gray-600">Approval Rate</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-primary-light">4.9/5</div>
                <div className="text-sm text-gray-600">Customer Rating</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-primary-light">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </Container>
        </Section>

        {/* What's Included */}
        <Section id="whats-included" background="gray" padding="xl">
          <Container maxWidth="lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What's Included in Our Service
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                More than just form submission - get expert support every step
                of the way
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {US_ESTA_CONFIG.includedServices.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-primary-light"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{service}</h3>
                  <p className="text-sm text-gray-600">
                    Professional assistance to ensure accuracy
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* How It Works */}
        <Section id="how-it-works" background="white" padding="xl">
          <Container maxWidth="lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Simple 3-Step Process
              </h2>
              <p className="text-xl text-gray-600">
                Get your ESTA in minutes with our streamlined application
                process
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-primary-light text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                  1
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    Complete Application
                  </h3>
                  <p className="text-gray-600">
                    Fill out our simple online form with your passport and
                    travel details. Takes only 10 minutes.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="bg-primary-light text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                  2
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    Secure Payment
                  </h3>
                  <p className="text-gray-600">
                    Pay securely with credit card or PayPal. All transactions
                    are encrypted and protected.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="bg-primary-light text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                  3
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    Receive ESTA
                  </h3>
                  <p className="text-gray-600">
                    Get your approved ESTA via email within{" "}
                    {US_ESTA_CONFIG.processing.standard}. No paperwork needed.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/united-states/apply">
                <Button size="lg" variant="primary">
                  Start Your Application Now →
                </Button>
              </Link>
            </div>
          </Container>
        </Section>

        {/* Requirements */}
        <Section id="requirements" background="gray" padding="xl">
          <Container maxWidth="lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ESTA Requirements
              </h2>
              <p className="text-xl text-gray-600">
                Make sure you meet these requirements before applying
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Eligibility */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-primary-light"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Eligibility Criteria
                </h3>
                <ul className="space-y-4">
                  {[
                    "Citizen of a Visa Waiver Program country",
                    "Traveling for tourism, business, or transit",
                    "Staying 90 days or less in the US",
                    "Valid e-Passport with electronic chip",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Documents */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-primary-light"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Required Documents
                </h3>
                <ul className="space-y-4">
                  {[
                    "Valid passport (valid for 6+ months)",
                    "Valid email address for confirmation",
                    "Payment method (credit card or PayPal)",
                    "Contact information",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/united-states/guide/esta-requirements"
                target="_blank"
                className="inline-flex items-center text-primary-light font-semibold hover:text-blue-700"
              >
                Read full requirements guide →
              </Link>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section id="faq" background="white" padding="xl">
          <Container maxWidth="md">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "How long does ESTA approval take?",
                  a: `Most applications are approved within ${US_ESTA_CONFIG.processing.standard}. We offer rush processing for urgent travel needs.`,
                },
                {
                  q: "How long is my ESTA valid?",
                  a: `Your ESTA is valid for ${US_ESTA_CONFIG.validity.years} years from the date of approval, or until your passport expires, whichever comes first.`,
                },
                {
                  q: "Can I extend my ESTA?",
                  a: "No, ESTAs cannot be extended. You'll need to apply for a new ESTA after it expires.",
                },
                {
                  q: "What if my ESTA is denied?",
                  a: "If your ESTA is denied, you may need to apply for a B1/B2 visa at a US Embassy. We offer denial protection and will assist you with the process.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/blog/united-states"
                className="inline-flex items-center text-primary-light font-semibold hover:text-blue-700"
              >
                View all ESTA guides →
              </Link>
            </div>
          </Container>
        </Section>

        {/* Final CTA */}
        <Section id="final-cta" background="primary" padding="xl">
          <Container maxWidth="md">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your ESTA Application?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join 50,000+ travelers who trust us with their US travel
                authorization
              </p>
              <Link href="/united-states/apply">
                <Button size="lg" variant="primary">
                  Apply Now - Only {currency}
                  {pricing.perApplicant} →
                </Button>
              </Link>
              <p className="text-sm text-blue-100 mt-4">
                ✓ 99% approval rate | ✓ Money-back guarantee | ✓ 24/7 support
              </p>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
