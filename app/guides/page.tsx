/**
 * ESTA Guides Index Page
 * THE ABSOLUTE BEST guides landing page
 * Perfect SEO, UX, and Conversion Optimization
 */

import { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/home/Footer";
import { ESTA_GUIDES, getGuidesByCategory } from "@/app/lib/data/guides";
import { generateMetadata as generateSEOMetadata } from "@/app/lib/seo/metadata";
import SearchGuides from "@/app/components/content/SearchGuides";
import {
  Book,
  FileText,
  Search,
  RefreshCcw,
  Plane,
  HelpCircle,
  CheckCircle,
  Lightbulb,
  Scale,
  Globe,
  Newspaper,
  MessageCircle,
  NewspaperIcon,
  MessageSquare,
} from "lucide-react";

/**
 * Generate metadata for guides index page
 */
export const metadata: Metadata = generateSEOMetadata({
  title: "ESTA Guides & Resources - Complete Application Guide 2024",
  description:
    "Complete collection of ESTA guides and resources. Learn everything about ESTA requirements, application process, fees, validity, and more. Expert guidance for U.S. travel authorization with 99% approval rate.",
  keywords: [
    "ESTA guides",
    "ESTA resources",
    "ESTA information",
    "ESTA help",
    "travel authorization guides",
    "ESTA knowledge base",
    "ESTA application guide",
    "how to apply ESTA",
    "ESTA requirements",
  ],
  canonicalUrl: `${
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.online"
  }/guides`,
});

/**
 * Guides Index Page
 * Central hub for all ESTA guides and resources
 */
export default function GuidesPage() {
  const mainGuides = getGuidesByCategory("main");
  const processGuides = getGuidesByCategory("process");
  const statusGuides = getGuidesByCategory("status");
  const renewalGuides = getGuidesByCategory("renewal");
  const travelGuides = getGuidesByCategory("travel");
  const questionsGuides = getGuidesByCategory("questions");
  const requirementsGuides = getGuidesByCategory("requirements");
  const tipsGuides = getGuidesByCategory("tips");
  const comparisonGuides = getGuidesByCategory("comparison");

  // Category configuration
  const categories = [
    {
      name: "Essential Guides",
      guides: mainGuides,
      icon: <Book className="w-8 h-8 text-blue-600" />,
      description: "Start here for the fundamentals",
      color: "blue",
    },
    {
      name: "Application Process",
      guides: processGuides,
      icon: <FileText className="w-8 h-8 text-green-600" />,
      description: "Step-by-step application guides",
      color: "green",
    },
    {
      name: "Status & Tracking",
      guides: statusGuides,
      icon: <Search className="w-8 h-8 text-purple-600" />,
      description: "Track and understand your application status",
      color: "purple",
    },
    {
      name: "Renewal & Updates",
      guides: renewalGuides,
      icon: <RefreshCcw className="w-8 h-8 text-orange-600" />,
      description: "Renewing and updating your ESTA",
      color: "orange",
    },
    {
      name: "Travel Purposes",
      guides: travelGuides,
      icon: <Plane className="w-8 h-8 text-cyan-600" />,
      description: "Different types of ESTA travel",
      color: "cyan",
    },
    {
      name: "Common Questions",
      guides: questionsGuides,
      icon: <HelpCircle className="w-8 h-8 text-yellow-600" />,
      description: "Answers to frequently asked questions",
      color: "yellow",
    },
    {
      name: "Requirements",
      guides: requirementsGuides,
      icon: <CheckCircle className="w-8 h-8 text-red-600" />,
      description: "Eligibility and requirements",
      color: "red",
    },
    {
      name: "Tips & Best Practices",
      guides: tipsGuides,
      icon: <Lightbulb className="w-8 h-8 text-indigo-600" />,
      description: "Expert tips for success",
      color: "indigo",
    },
    {
      name: "Comparisons",
      guides: comparisonGuides,
      icon: <Scale className="w-8 h-8 text-pink-600" />,
      description: "ESTA vs other options",
      color: "pink",
    },
  ].filter((cat) => cat.guides.length > 0);

  return (
    <>
      {/* Structured Data - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item:
                  process.env.NEXT_PUBLIC_SITE_URL ||
                  "https://www.visaportal.online",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "ESTA Guides",
                item: `${
                  process.env.NEXT_PUBLIC_SITE_URL ||
                  "https://www.visaportal.online"
                }/guides`,
              },
            ],
          }),
        }}
      />

      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                ESTA Guides & Resources
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-6 max-w-3xl mx-auto">
                Everything you need to know about ESTA in one place
              </p>
              <p className="text-lg text-blue-200 mb-8">
                {ESTA_GUIDES.length}+ comprehensive guides covering all aspects
                of ESTA applications
              </p>
              <Link
                href="/apply"
                className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Start ESTA Application →
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-8 bg-blue-50 border-b border-blue-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <Link
                href="/guides/what-is-esta"
                className="bg-white px-4 md:px-6 py-3 rounded-lg font-semibold text-sm md:text-base text-blue-900 hover:bg-blue-100 transition-colors shadow-sm"
              >
                What is ESTA?
              </Link>
              <Link
                href="/guides/esta-requirements"
                className="bg-white px-4 md:px-6 py-3 rounded-lg font-semibold text-sm md:text-base text-blue-900 hover:bg-blue-100 transition-colors shadow-sm"
              >
                Requirements
              </Link>
              <Link
                href="/guides/how-to-apply-esta"
                className="bg-white px-4 md:px-6 py-3 rounded-lg font-semibold text-sm md:text-base text-blue-900 hover:bg-blue-100 transition-colors shadow-sm"
              >
                How to Apply
              </Link>
              <Link
                href="/guides/check-esta-status"
                className="bg-white px-4 md:px-6 py-3 rounded-lg font-semibold text-sm md:text-base text-blue-900 hover:bg-blue-100 transition-colors shadow-sm"
              >
                Check Status
              </Link>
              <Link
                href="/apply"
                className="bg-blue-600 px-4 md:px-6 py-3 rounded-lg font-semibold text-sm md:text-base text-white hover:bg-blue-700 transition-colors shadow-sm"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <SearchGuides guides={ESTA_GUIDES} />
          </div>
        </section>

        {/* Guide Categories */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            {categories.map((category, idx) => (
              <div key={idx} className="mb-16">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-3">
                    <span className="text-4xl">{category.icon}</span>
                    {category.name}
                  </h2>
                  <p className="text-gray-600 text-lg">
                    {category.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.guides.map((guide) => (
                    <Link
                      key={guide.slug}
                      href={`/guides/${guide.slug}`}
                      className="block bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-xl transition-all duration-300 group"
                    >
                      <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {guide.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-3">
                        {guide.description}
                      </p>
                      <div className="flex items-center justify-between text-xs md:text-sm text-gray-500">
                        {guide.estimatedReadTime && (
                          <span className="flex items-center gap-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                              />
                            </svg>
                            {guide.estimatedReadTime} min
                          </span>
                        )}
                        <span className="text-blue-600 font-semibold group-hover:underline flex items-center gap-1">
                          Read guide
                          <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Personal Assistance?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Our expert team is here to help with your ESTA application
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link
                  href="/apply"
                  className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Start Application
                </Link>
                <Link
                  href="/support"
                  className="inline-block bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors border-2 border-blue-500"
                >
                  Contact Support
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  99% approval rate
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  24/7 support
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Money-back guarantee
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Other Resources */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Other Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/countries"
                className="block border-2 border-gray-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-xl transition-all group"
              >
                <div className="text-primary-light text-center mb-4">
                  <Globe className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600">
                  Country Guides
                </h3>
                <p className="text-gray-600">
                  ESTA guides for all 41 Visa Waiver Program countries
                </p>
              </Link>

              <Link
                href="/blog"
                className="block border-2 border-gray-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-xl transition-all group"
              >
                <div className="text-primary-light mb-4">
                  <NewspaperIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600">
                  Blog & Tips
                </h3>
                <p className="text-gray-600">
                  Latest ESTA news, updates, and travel tips
                </p>
              </Link>

              <Link
                href="/support"
                className="block border-2 border-gray-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-xl transition-all group"
              >
                <div className="text-primary-light mb-4">
                  <MessageSquare className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600">
                  Support Center
                </h3>
                <p className="text-gray-600">
                  Get help with your ESTA application from our team
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
