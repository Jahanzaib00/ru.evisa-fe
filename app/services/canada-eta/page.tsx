/**
 * Canada eTA Service Hub Page
 * /services/canada-eta
 *
 * CONVERSION-OPTIMIZED | SEO-OPTIMIZED | PROFESSIONAL
 */

import { Metadata } from "next";
import {
  CANADA_ETA_CONFIG,
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
    title: CANADA_ETA_CONFIG.meta.title,
    description: CANADA_ETA_CONFIG.meta.description,
    keywords: CANADA_ETA_CONFIG.meta.keywords,
    canonicalUrl: `${baseUrl}/services/canada-eta`,
  });
}

export default function CanadaETAServicePage() {
  const pricing = calculatePrice(CANADA_ETA_CONFIG.type, 1);
  const currency = getCurrencySymbol(CANADA_ETA_CONFIG.pricing.currency);

  const structuredData = generateServiceSchema({
    name: CANADA_ETA_CONFIG.name,
    description: CANADA_ETA_CONFIG.meta.description,
    provider: "Visa Portal",
    areaServed: "Worldwide",
    price: pricing.perApplicant.toString(),
    priceCurrency: CANADA_ETA_CONFIG.pricing.currency,
    url: `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.online"
    }/services/canada-eta`,
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
        {/* Hero Section */}
        <Section id="hero" background="primary" padding="xl">
          <Container maxWidth="lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Value Proposition */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {CANADA_ETA_CONFIG.name}
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                  Fast and secure Electronic Travel Authorization for flying to
                  or transiting through Canada. Typically approved within{" "}
                  {CANADA_ETA_CONFIG.processing.superRush}.
                </p>

                {/* Trust Signals */}
                <div className="flex flex-wrap gap-6 mb-8">
                  {[
                    "99% Approval Rate",
                    "24/7 Support",
                    "Instant Processing",
                  ].map((signal) => (
                    <div
                      key={signal}
                      className="flex items-center gap-2 text-white"
                    >
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
                      <span className="font-semibold">{signal}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/canada/apply">
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
                  <p className="text-sm text-gray-500">per person</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Validity</span>
                    <span className="font-bold text-gray-900">
                      {CANADA_ETA_CONFIG.validity.years} Years
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">
                      Processing Time
                    </span>
                    <span className="font-bold text-gray-900">
                      {CANADA_ETA_CONFIG.processing.superRush}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Max Stay</span>
                    <span className="font-bold text-gray-900">
                      {CANADA_ETA_CONFIG.validity.stays}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-700 font-medium">Entries</span>
                    <span className="font-bold text-gray-900">Multiple</span>
                  </div>
                </div>

                <Link href="/canada/apply" className="w-full">
                  <Button size="lg" variant="primary" className="w-full">
                    Apply Now
                  </Button>
                </Link>

                <p className="text-xs text-gray-500 text-center mt-4">
                  ✓ Fast Approval · ✓ Secure Payment
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Social Proof Bar */}
        <Section id="social-proof" background="white" padding="sm">
          <Container maxWidth="lg">
            <div className="flex flex-wrap items-center justify-center gap-8 text-center">
              {[
                { value: "30K+", label: "eTAs Processed" },
                { value: "99%", label: "Approval Rate" },
                { value: "4.9/5", label: "Customer Rating" },
                { value: "24/7", label: "Support Available" },
              ].map((stat, idx, arr) => (
                <div key={stat.label} className="flex items-center gap-8">
                  <div>
                    <div className="text-3xl font-bold text-primary-light">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="hidden md:block w-px h-12 bg-gray-300" />
                  )}
                </div>
              ))}
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
                Professional assistance to ensure your Canada eTA application is
                accurate and complete
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CANADA_ETA_CONFIG.includedServices.map((service, idx) => (
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
                    Expert support throughout the process
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
                Get your Canada eTA approved quickly with our streamlined process
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: "Complete Application",
                  desc: "Fill out our simplified form with your passport and personal details. Takes just 5 minutes.",
                },
                {
                  step: 2,
                  title: "Secure Payment",
                  desc: "Pay securely with your credit card. All transactions are SSL encrypted and fully protected.",
                },
                {
                  step: 3,
                  title: "Receive eTA",
                  desc: `Get your approved Canada eTA via email within ${CANADA_ETA_CONFIG.processing.superRush}. Ready to travel!`,
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="relative text-center">
                  <div className="bg-primary-light text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                    {step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {title}
                  </h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/canada/apply">
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
                Canada eTA Requirements
              </h2>
              <p className="text-xl text-gray-600">
                Check you meet these requirements before applying
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
                    "Citizen of a visa-exempt country (not a US citizen)",
                    "Traveling by air to or through Canada",
                    "Staying up to 6 months per visit",
                    "Valid biometric (e-passport) with chip",
                    "Not a Canadian citizen or permanent resident",
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
                    "Valid biometric passport (e-passport)",
                    "Valid email address",
                    "Payment method (credit/debit card)",
                    "Travel plans (approximate dates)",
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
          </Container>
        </Section>

        {/* FAQ */}
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
                  q: "Who needs a Canada eTA?",
                  a: "Citizens of visa-exempt countries (excluding US citizens) who fly to or transit through Canada need an eTA. US citizens can enter Canada with just their passport — no eTA required.",
                },
                {
                  q: "How quickly is a Canada eTA approved?",
                  a: `Most applications are approved within ${CANADA_ETA_CONFIG.processing.superRush}. Some may take a few days if additional review is needed. Apply well before your travel date.`,
                },
                {
                  q: "How long is my Canada eTA valid?",
                  a: `Your eTA is valid for ${CANADA_ETA_CONFIG.validity.years} years from the date of issue, or until your passport expires — whichever comes first. You can make multiple trips during this period.`,
                },
                {
                  q: "Do I need a Canada eTA for land or sea entry?",
                  a: "No. The eTA is only required for air travel. If you're entering Canada by land (e.g. from the US) or sea, you do not need an eTA — though you still need a valid passport.",
                },
                {
                  q: "Do children need a Canada eTA?",
                  a: "Yes, all travelers including children and infants need their own eTA if traveling by air to or through Canada. A parent or guardian can apply on their behalf.",
                },
                {
                  q: "Can I work in Canada with an eTA?",
                  a: "No. The Canada eTA is only for tourism, business visits, and transit. To work in Canada, you need a work permit or visa.",
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
                href="/canada/guide"
                className="inline-flex items-center text-primary-light font-semibold hover:text-blue-700"
              >
                View all Canada eTA guides →
              </Link>
            </div>
          </Container>
        </Section>

        {/* Final CTA */}
        <Section id="final-cta" background="primary" padding="xl">
          <Container maxWidth="md">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Apply for Your Canada eTA?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of travelers who trust us with their Canada travel
                authorization
              </p>
              <Link href="/canada/apply">
                <Button size="lg" variant="primary">
                  Apply Now — Only {currency}
                  {pricing.perApplicant} →
                </Button>
              </Link>
              <p className="text-sm text-blue-100 mt-4">
                ✓ Fast approval · ✓ Money-back guarantee · ✓ 24/7 support
              </p>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
