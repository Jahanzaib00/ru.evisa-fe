/**
 * Malaysia MDAC Service Hub Page
 * /services/malaysia-mdac
 */

import { Metadata } from "next";
import {
  MALAYSIA_MDAC_CONFIG,
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
    title: MALAYSIA_MDAC_CONFIG.meta.title,
    description: MALAYSIA_MDAC_CONFIG.meta.description,
    keywords: MALAYSIA_MDAC_CONFIG.meta.keywords,
    canonicalUrl: `${baseUrl}/services/malaysia-mdac`,
  });
}

export default function MalaysiaMDACServicePage() {
  const pricing = calculatePrice(MALAYSIA_MDAC_CONFIG.type, 1);
  const currency = getCurrencySymbol(MALAYSIA_MDAC_CONFIG.pricing.currency);

  const structuredData = generateServiceSchema({
    name: MALAYSIA_MDAC_CONFIG.name,
    description: MALAYSIA_MDAC_CONFIG.meta.description,
    provider: "Visa Portal",
    areaServed: "Worldwide",
    price: pricing.perApplicant.toString(),
    priceCurrency: MALAYSIA_MDAC_CONFIG.pricing.currency,
    url: `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.online"
    }/services/malaysia-mdac`,
  });

  return (
    <>
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
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Malaysia Digital Arrival Card
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                  Complete your mandatory Malaysia MDAC hassle-free before you
                  travel. Expert review ensures an error-free submission with
                  same-day processing.
                </p>

                <div className="flex flex-wrap gap-6 mb-8">
                  {[
                    "Error-Free Guarantee",
                    "24/7 Support",
                    "Same-Day Processing",
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
                  <Link href="/malaysia/apply">
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

              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-primary-light mb-2">
                    {currency}
                    {pricing.perApplicant.toFixed(2)}
                  </div>
                  <p className="text-sm text-gray-500">per person</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Required For</span>
                    <span className="font-bold text-gray-900">All Foreign Nationals</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Processing Time</span>
                    <span className="font-bold text-gray-900">Same Day</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Entry Type</span>
                    <span className="font-bold text-gray-900">Per Entry</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-700 font-medium">Entry Methods</span>
                    <span className="font-bold text-gray-900">Air, Land & Sea</span>
                  </div>
                </div>

                <Link href="/malaysia/apply" className="w-full">
                  <Button size="lg" variant="primary" className="w-full">
                    Apply Now
                  </Button>
                </Link>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Expert Review · Secure Payment
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
                { value: "50K+", label: "Applications Processed" },
                { value: "100%", label: "Submission Success" },
                { value: "4.9/5", label: "Customer Rating" },
                { value: "24/7", label: "Support Available" },
              ].map((stat, idx, arr) => (
                <div key={stat.label} className="flex items-center gap-8">
                  <div>
                    <div className="text-3xl font-bold text-primary-light">{stat.value}</div>
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
                Professional assistance to ensure your Malaysia MDAC is
                completed correctly the first time
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MALAYSIA_MDAC_CONFIG.includedServices.map((service, idx) => (
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
                Get your Malaysia MDAC completed quickly with our streamlined process
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: "Complete Application",
                  desc: "Fill out our simplified form with your passport, travel, and personal details. Takes just 5 minutes.",
                },
                {
                  step: 2,
                  title: "Expert Review & Payment",
                  desc: "Our team reviews your application for errors. Pay securely with your credit card. All transactions are SSL encrypted.",
                },
                {
                  step: 3,
                  title: "Receive Your MDAC",
                  desc: "Get your completed Malaysia Digital Arrival Card via email. Ready for your trip!",
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="relative text-center">
                  <div className="bg-primary-light text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                    {step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/malaysia/apply">
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
                Malaysia MDAC Requirements
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know before applying
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Who Needs an MDAC?
                </h3>
                <ul className="space-y-4">
                  {[
                    "All non-Malaysian nationals entering Malaysia",
                    "Required for air, land, and sea entry",
                    "Applies regardless of visa type or nationality",
                    "Children and infants included",
                    "New MDAC required for each entry into Malaysia",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Required Information
                </h3>
                <ul className="space-y-4">
                  {[
                    "Valid passport (name, number, nationality, DOB)",
                    "Travel booking (flight number, arrival date)",
                    "Accommodation details (hotel name, address)",
                    "Valid email address (for confirmation delivery)",
                    "Payment method (credit/debit card)",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
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
                  q: "What is the Malaysia MDAC?",
                  a: "The Malaysia Digital Arrival Card (MDAC) is a mandatory online form that all foreign nationals must complete before entering Malaysia. It collects travel and personal information for immigration processing.",
                },
                {
                  q: "When should I complete the MDAC?",
                  a: "The MDAC should be completed before your arrival in Malaysia. We recommend submitting it at least 3 days before travel to avoid any last-minute issues at the airport.",
                },
                {
                  q: "What happens if I don't complete the MDAC before arrival?",
                  a: "You may face delays at immigration if the MDAC is not completed in advance. Airport kiosks may be available, but completing it beforehand ensures a smooth and fast arrival experience.",
                },
                {
                  q: "Is the MDAC free on the official website?",
                  a: "Yes, the official MDAC portal is free. Our service provides expert form review, error checking, dedicated support, and guaranteed correct submission — saving you time and ensuring no mistakes.",
                },
                {
                  q: "Do I need a new MDAC for every trip to Malaysia?",
                  a: "Yes. A new MDAC must be submitted for each entry into Malaysia. It is not valid for multiple entries.",
                },
                {
                  q: "Does the MDAC replace a visa?",
                  a: "No, the MDAC is an arrival card, not a visa. If your nationality requires a visa to enter Malaysia, you must still obtain the appropriate visa in addition to completing the MDAC.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/malaysia/guide"
                className="inline-flex items-center text-primary-light font-semibold hover:text-blue-700"
              >
                View all Malaysia MDAC guides →
              </Link>
            </div>
          </Container>
        </Section>

        {/* Final CTA */}
        <Section id="final-cta" background="primary" padding="xl">
          <Container maxWidth="md">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Complete Your Malaysia MDAC?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Skip the airport hassle. Complete your Digital Arrival Card
                online with expert assistance.
              </p>
              <Link href="/malaysia/apply">
                <Button size="lg" variant="primary">
                  Apply Now — Only {currency}
                  {pricing.perApplicant.toFixed(2)} →
                </Button>
              </Link>
              <p className="text-sm text-blue-100 mt-4">
                Same-day processing · Error-free guarantee · 24/7 support
              </p>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
