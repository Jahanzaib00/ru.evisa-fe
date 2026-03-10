/**
 * Indonesia eVOA Service Hub Page
 * /services/indonesia-evoa
 */

import { Metadata } from "next";
import {
  INDONESIA_EVOA_CONFIG,
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
    title: INDONESIA_EVOA_CONFIG.meta.title,
    description: INDONESIA_EVOA_CONFIG.meta.description,
    keywords: INDONESIA_EVOA_CONFIG.meta.keywords,
    canonicalUrl: `${baseUrl}/services/indonesia-evoa`,
  });
}

export default function IndonesiaEVOAServicePage() {
  const pricing = calculatePrice(INDONESIA_EVOA_CONFIG.type, 1);
  const currency = getCurrencySymbol(INDONESIA_EVOA_CONFIG.pricing.currency);

  const structuredData = generateServiceSchema({
    name: INDONESIA_EVOA_CONFIG.name,
    description: INDONESIA_EVOA_CONFIG.meta.description,
    provider: "Visa Portal",
    areaServed: "Worldwide",
    price: pricing.perApplicant.toString(),
    priceCurrency: INDONESIA_EVOA_CONFIG.pricing.currency,
    url: `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.online"
    }/services/indonesia-evoa`,
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
                  Indonesia eVOA
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                  Get your Indonesia Electronic Visa on Arrival online before you
                  travel. Skip the airport queues in Bali, Jakarta, and all major
                  entry points with expert-reviewed processing.
                </p>

                {/* Trust Signals */}
                <div className="flex flex-wrap gap-6 mb-8">
                  {[
                    "Error-Free Guarantee",
                    "24/7 Support",
                    "Fast Processing",
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
                  <Link href="/indonesia/apply">
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
                    {pricing.perApplicant.toFixed(2)}
                  </div>
                  <p className="text-sm text-gray-500">per person (standard)</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">
                      Visa Type
                    </span>
                    <span className="font-bold text-gray-900">
                      Visa on Arrival (eVOA)
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">
                      Processing Time
                    </span>
                    <span className="font-bold text-gray-900">1–24 Hours</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">
                      Stay Duration
                    </span>
                    <span className="font-bold text-gray-900">
                      30 Days
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-700 font-medium">
                      Entry Type
                    </span>
                    <span className="font-bold text-gray-900">
                      Single Entry
                    </span>
                  </div>
                </div>

                <Link href="/indonesia/apply" className="w-full">
                  <Button size="lg" variant="primary" className="w-full">
                    Apply Now
                  </Button>
                </Link>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Gov. fee ${INDONESIA_EVOA_CONFIG.pricing.government} + service fee included
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
                Professional assistance to ensure your Indonesia eVOA is
                completed correctly the first time
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {INDONESIA_EVOA_CONFIG.includedServices.map((service, idx) => (
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
                Get your Indonesia eVOA completed quickly with our streamlined
                process
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
                  title: "Receive Your eVOA",
                  desc: "Get your approved Indonesia eVOA via email. Present it at immigration on arrival — no queuing required.",
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
              <Link href="/indonesia/apply">
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
                Indonesia eVOA Requirements
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know before applying
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
                  Who Needs an eVOA?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Citizens of 90+ eligible countries visiting Indonesia",
                    "Travelers entering for tourism, social, or business visits",
                    "Valid for entry through all international airports and seaports",
                    "Required for stays up to 30 days (extendable once)",
                    "Each traveler needs their own eVOA approval",
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
                  Required Information
                </h3>
                <ul className="space-y-4">
                  {[
                    "Valid passport (minimum 6 months validity remaining)",
                    "Travel details (flight number, arrival date)",
                    "Personal information (name, DOB, nationality)",
                    "Valid email address (for eVOA delivery)",
                    "Payment method (credit/debit card)",
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
                  q: "What is the Indonesia eVOA?",
                  a: "The Indonesia eVOA (Electronic Visa on Arrival) is an online visa that allows eligible foreign nationals to enter Indonesia for tourism, social, or business visits for up to 30 days. It replaces the need to queue for a traditional Visa on Arrival at the airport.",
                },
                {
                  q: "How long does the eVOA take to process?",
                  a: "Processing times vary by tier: Standard (24 hours), Rush (4 hours), or Super Rush (1 hour). We recommend applying at least 48 hours before your trip for the best experience.",
                },
                {
                  q: "Can I extend my eVOA?",
                  a: "Yes, the Indonesia eVOA can be extended once for an additional 30 days at a local immigration office in Indonesia. The extension must be applied for before your initial 30-day stay expires.",
                },
                {
                  q: "Which airports accept the eVOA?",
                  a: "The eVOA is accepted at all major Indonesian international airports including Ngurah Rai (Bali), Soekarno-Hatta (Jakarta), Juanda (Surabaya), Kualanamu (Medan), and many others, as well as designated seaports.",
                },
                {
                  q: "Is the eVOA available directly from the government?",
                  a: "Yes, the Indonesian government offers the eVOA through their official portal. Our service provides expert application review, error checking, dedicated support, and guaranteed correct submission — saving you time and ensuring no mistakes.",
                },
                {
                  q: "What if my eVOA application is denied?",
                  a: "eVOA denials are rare for eligible nationalities. If your application is denied, contact our support team for immediate assistance.",
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
                href="/indonesia/guide"
                className="inline-flex items-center text-primary-light font-semibold hover:text-blue-700"
              >
                View all Indonesia eVOA guides →
              </Link>
            </div>
          </Container>
        </Section>

        {/* Final CTA */}
        <Section id="final-cta" background="primary" padding="xl">
          <Container maxWidth="md">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Your Indonesia eVOA?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Skip the airport queues. Get your Visa on Arrival approved
                online with expert assistance.
              </p>
              <Link href="/indonesia/apply">
                <Button size="lg" variant="primary">
                  Apply Now — From {currency}
                  {pricing.perApplicant.toFixed(2)} →
                </Button>
              </Link>
              <p className="text-sm text-blue-100 mt-4">
                Fast processing · Error-free guarantee · 24/7 support
              </p>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
