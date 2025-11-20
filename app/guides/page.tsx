import { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/home/Footer";
import { ESTA_GUIDES, getGuidesByCategory } from "@/app/lib/data/guides";
import { generateMetadata as generateSEOMetadata } from "@/app/lib/seo/metadata";

/**
 * Generate metadata for guides index page
 */
export const metadata: Metadata = generateSEOMetadata({
  title: "ESTA Guides & Resources",
  description:
    "Complete collection of ESTA guides and resources. Learn everything about ESTA requirements, application process, fees, validity, and more. Expert guidance for U.S. travel authorization.",
  keywords: [
    "ESTA guides",
    "ESTA resources",
    "ESTA information",
    "ESTA help",
    "travel authorization guides",
    "ESTA knowledge base",
  ],
  canonicalUrl: `${
    process.env.NEXT_PUBLIC_SITE_URL || "https://visaportal.online"
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
      icon: "📚",
      description: "Start here for the fundamentals",
    },
    {
      name: "Application Process",
      guides: processGuides,
      icon: "📝",
      description: "Step-by-step application guides",
    },
    {
      name: "Status & Tracking",
      guides: statusGuides,
      icon: "🔍",
      description: "Track and understand your application status",
    },
    {
      name: "Renewal & Updates",
      guides: renewalGuides,
      icon: "🔄",
      description: "Renewing and updating your ESTA",
    },
    {
      name: "Travel Purposes",
      guides: travelGuides,
      icon: "✈️",
      description: "Different types of ESTA travel",
    },
    {
      name: "Common Questions",
      guides: questionsGuides,
      icon: "❓",
      description: "Answers to frequently asked questions",
    },
    {
      name: "Requirements",
      guides: requirementsGuides,
      icon: "✅",
      description: "Eligibility and requirements",
    },
    {
      name: "Tips & Best Practices",
      guides: tipsGuides,
      icon: "💡",
      description: "Expert tips for success",
    },
    {
      name: "Comparisons",
      guides: comparisonGuides,
      icon: "⚖️",
      description: "ESTA vs other options",
    },
  ].filter((cat) => cat.guides.length > 0);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-linear-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                ESTA Guides & Resources
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Everything you need to know about ESTA in one place
              </p>
              <p className="text-lg text-blue-200">
                {ESTA_GUIDES.length}+ comprehensive guides covering all aspects
                of ESTA applications
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-8 bg-blue-50 border-b border-blue-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/guides/what-is-esta"
                className="bg-white px-6 py-3 rounded-lg font-semibold text-blue-900 hover:bg-blue-100 transition-colors"
              >
                What is ESTA?
              </Link>
              <Link
                href="/guides/esta-requirements"
                className="bg-white px-6 py-3 rounded-lg font-semibold text-blue-900 hover:bg-blue-100 transition-colors"
              >
                Requirements
              </Link>
              <Link
                href="/guides/how-to-apply-esta"
                className="bg-white px-6 py-3 rounded-lg font-semibold text-blue-900 hover:bg-blue-100 transition-colors"
              >
                How to Apply
              </Link>
              <Link
                href="/guides/check-esta-status"
                className="bg-white px-6 py-3 rounded-lg font-semibold text-blue-900 hover:bg-blue-100 transition-colors"
              >
                Check Status
              </Link>
              <Link
                href="/apply"
                className="bg-blue-600 px-6 py-3 rounded-lg font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </section>

        {/* Guide Categories */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            {categories.map((category, idx) => (
              <div key={idx} className="mb-12">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold mb-2">
                    <span className="mr-3">{category.icon}</span>
                    {category.name}
                  </h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.guides.map((guide) => (
                    <Link
                      key={guide.slug}
                      href={`/guides/${guide.slug}`}
                      className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition-all group"
                    >
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600">
                        {guide.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {guide.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        {guide.estimatedReadTime && (
                          <span>📖 {guide.estimatedReadTime} min</span>
                        )}
                        <span className="text-blue-600 group-hover:underline">
                          Read more →
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
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Need Personal Assistance?
              </h2>
              <p className="text-xl text-blue-100 mb-6">
                Our expert team is here to help with your ESTA application
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/apply"
                  className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
                >
                  Start Application
                </Link>
                <Link
                  href="/support"
                  className="inline-block bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors"
                >
                  Contact Support
                </Link>
              </div>
              <p className="text-sm text-blue-200 mt-4">
                99% approval rate • 24/7 support • Money-back guarantee
              </p>
            </div>
          </div>
        </section>

        {/* Other Resources */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold mb-6">Other Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/countries"
                className="block border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  🌍 Country Guides
                </h3>
                <p className="text-gray-600 text-sm">
                  ESTA guides for all 41 Visa Waiver Program countries
                </p>
              </Link>
              <Link
                href="/support"
                className="block border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  💬 Support Center
                </h3>
                <p className="text-gray-600 text-sm">
                  Get help with your ESTA application from our team
                </p>
              </Link>
              <Link
                href="/"
                className="block border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  🏠 Homepage
                </h3>
                <p className="text-gray-600 text-sm">
                  Learn about our ESTA application service
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
