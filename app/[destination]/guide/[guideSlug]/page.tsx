/**
 * Dynamic Individual Guide Page - Multi-Service
 * Displays a specific guide for a service (ESTA, UK ETA, etc.)
 * Route: /[destination]/guide/[guideSlug] (e.g., /united-states/guide/what-is-esta)
 */

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { use } from "react";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/home/Footer";
import {
  getGuideBySlug,
  getAllGuideSlugs,
  getPillarPages,
  getClusterContent,
} from "@/app/lib/data/guides";
import {
  getServiceByDestination,
  ServiceType,
} from "@/app/lib/config/services";
import { Book, ArrowRight, ChevronRight, Clock, Calendar } from "lucide-react";

/**
 * Generate metadata for individual guide page
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ destination: string; guideSlug: string }>;
}): Promise<Metadata> {
  const { destination, guideSlug } = await params;
  const service = getServiceByDestination(destination);

  if (!service) {
    return { title: "Guide Not Found" };
  }

  const guide = getGuideBySlug(guideSlug, service.type);

  if (!guide) {
    return { title: "Guide Not Found" };
  }

  return {
    title: `${guide.title} - ${service.name} Guide ${new Date().getFullYear()}`,
    description: guide.description,
    keywords: guide.keywords,
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      publishedTime: guide.lastUpdated,
    },
  };
}

/**
 * Generate static paths for all guides
 */
export async function generateStaticParams() {
  const destinations = [
    { destination: "united-states", type: ServiceType.US_ESTA },
    { destination: "united-kingdom", type: ServiceType.UK_ETA },
  ];

  const paths: Array<{ destination: string; guideSlug: string }> = [];

  destinations.forEach(({ destination, type }) => {
    const slugs = getAllGuideSlugs(type);
    slugs.forEach((guideSlug) => {
      paths.push({ destination, guideSlug });
    });
  });

  return paths;
}

/**
 * Individual Guide Page Component
 */
export default function GuidePage({
  params,
}: {
  params: Promise<{ destination: string; guideSlug: string }>;
}) {
  const { destination, guideSlug } = use(params);
  const service = getServiceByDestination(destination);

  if (!service) {
    notFound();
  }

  const guide = getGuideBySlug(guideSlug, service.type);

  if (!guide) {
    notFound();
  }

  // Get related guides
  const relatedGuides = guide.relatedGuides
    ? guide.relatedGuides
        .map((relatedSlug) => getGuideBySlug(relatedSlug, service.type))
        .filter(Boolean)
    : [];

  // Get pillar/cluster navigation
  const pillarPages = getPillarPages(service.type);
  const clusterGuides = guide.isPillarPage ? getClusterContent(guide.slug) : [];

  const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.online";

  return (
    <>
      {/* Structured Data - Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: guide.title,
            description: guide.description,
            datePublished: guide.lastUpdated || new Date().toISOString(),
            dateModified: guide.lastUpdated || new Date().toISOString(),
            author: {
              "@type": "Organization",
              name: "VisaPortal",
            },
            publisher: {
              "@type": "Organization",
              name: "VisaPortal",
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/logo.png`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE_URL}/${destination}/guide/${guideSlug}`,
            },
          }),
        }}
      />

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
                item: SITE_URL,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: service.slug.toUpperCase(),
                item: `${SITE_URL}/services/${service.slug}`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Guide",
                item: `${SITE_URL}/${destination}/guide`,
              },
              {
                "@type": "ListItem",
                position: 4,
                name: guide.title,
                item: `${SITE_URL}/${destination}/guide/${guideSlug}`,
              },
            ],
          }),
        }}
      />

      {/* FAQ Structured Data */}
      {guide.faqs && guide.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: guide.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}

      <Header />

      <div className="fixed bottom-0 left-0 right-0 bg-blue-900 text-white shadow-2xl border-t-4 border-blue-600 z-50 transform translate-y-full animate-slide-up">
        <div className="container mx-auto px-4 py-4 max-w-5xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold">
                Ready to Apply for {service.name}?
              </h3>
              <p className="text-sm text-blue-100">
                Expert assistance • 99% approval rate • 24/7 support
              </p>
            </div>
            <Link
              href={`/${destination}/apply`}
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap"
            >
              Start Application →
            </Link>
          </div>
        </div>
      </div>

      <main className="min-h-screen bg-white">
        {/* Breadcrumb Navigation */}
        <section className="bg-gray-50 border-b border-gray-200 py-4">
          <div className="container mx-auto px-4 max-w-4xl">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link
                href={`/services/${service.slug}`}
                className="hover:text-blue-600 transition-colors"
              >
                {service.slug.toUpperCase()}
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link
                href={`/${destination}/guide`}
                className="hover:text-blue-600 transition-colors"
              >
                Guide
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900 font-medium">{guide.title}</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-primary text-white py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Book className="w-8 h-8 text-blue-300" />
              <span className="text-blue-200 text-sm md:text-base font-medium">
                {service.name} Guide
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {guide.title}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-6">
              {guide.description}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-blue-200">
              {guide.estimatedReadTime && (
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {guide.estimatedReadTime} min read
                </span>
              )}
              {guide.lastUpdated && (
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Updated {new Date(guide.lastUpdated).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content Column */}
              <div className="lg:col-span-3">
                {/* Guide Sections */}
                {guide.sections && guide.sections.length > 0 && (
                  <div className="prose prose-lg max-w-none mb-12">
                    {guide.sections.map((section, idx) => (
                      <div key={idx} id={section.id} className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                          {section.title}
                        </h2>
                        {section.content.map((item, itemIdx) => {
                          if (typeof item === "string") {
                            return (
                              <p key={itemIdx} className="text-gray-700 mb-4">
                                {item}
                              </p>
                            );
                          }

                          if ("type" in item && item.type === "list") {
                            return (
                              <ul
                                key={itemIdx}
                                className="list-disc pl-6 mb-4 space-y-2"
                              >
                                {item.items.map((listItem, listIdx) => (
                                  <li key={listIdx} className="text-gray-700">
                                    {listItem}
                                  </li>
                                ))}
                              </ul>
                            );
                          }

                          if ("type" in item && item.type === "callout") {
                            return (
                              <div
                                key={itemIdx}
                                className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-4 rounded-r-lg"
                              >
                                {item.title && (
                                  <h4 className="font-bold text-blue-900 mb-2">
                                    {item.title}
                                  </h4>
                                )}
                                <p className="text-blue-800">{item.text}</p>
                              </div>
                            );
                          }

                          if ("type" in item && item.type === "warning") {
                            return (
                              <div
                                key={itemIdx}
                                className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-4 rounded-r-lg"
                              >
                                {item.title && (
                                  <h4 className="font-bold text-yellow-900 mb-2">
                                    {item.title}
                                  </h4>
                                )}
                                <p className="text-yellow-800">{item.text}</p>
                              </div>
                            );
                          }

                          return null;
                        })}
                      </div>
                    ))}
                  </div>
                )}

                {/* FAQs Section */}
                {guide.faqs && guide.faqs.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                      {guide.faqs.map((faq, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                        >
                          <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">
                            {faq.question}
                          </h3>
                          <p className="text-gray-700">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Cluster Guides (if this is a pillar page) */}
                {guide.isPillarPage && clusterGuides.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                      Related Topics
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {clusterGuides.map((clusterGuide) => (
                        <Link
                          key={clusterGuide.slug}
                          href={`/${destination}/guide/${clusterGuide.slug}`}
                          className="block bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-blue-600 hover:shadow-lg transition-all group"
                        >
                          <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                            {clusterGuide.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                            {clusterGuide.description}
                          </p>
                          <span className="text-blue-600 font-semibold text-sm flex items-center gap-1">
                            Read more
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Related Guides */}
                {relatedGuides.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                      You May Also Like
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {relatedGuides.map((relatedGuide) => (
                        <Link
                          key={relatedGuide!.slug}
                          href={`/${destination}/guide/${relatedGuide!.slug}`}
                          className="block bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-blue-600 hover:shadow-lg transition-all group"
                        >
                          <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                            {relatedGuide!.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                            {relatedGuide!.description}
                          </p>
                          <span className="text-blue-600 font-semibold text-sm flex items-center gap-1">
                            Read guide
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Box */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-8 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    Ready to Apply?
                  </h3>
                  <p className="text-lg text-blue-100 mb-6">
                    Start your {service.name} application now with our simple
                    online process
                  </p>
                  <Link
                    href={`/${destination}/apply`}
                    className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Start Application →
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Table of Contents */}
                {guide.sections && guide.sections.length > 0 && (
                  <div className="bg-gray-50 rounded-lg p-6 mb-6 sticky top-24">
                    <h3 className="text-lg font-bold mb-4 text-gray-900">
                      On This Page
                    </h3>
                    <ul className="space-y-2">
                      {guide.sections.map((section, idx) => (
                        <li key={idx}>
                          <a
                            href={`#${section.id}`}
                            className="text-sm text-gray-600 hover:text-blue-600 transition-colors block"
                          >
                            {section.title}
                          </a>
                        </li>
                      ))}
                      {guide.faqs && guide.faqs.length > 0 && (
                        <li>
                          <a
                            href="#faqs"
                            className="text-sm text-gray-600 hover:text-blue-600 transition-colors block"
                          >
                            FAQs
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                {/* Pillar Pages Navigation */}
                {pillarPages.length > 0 && (
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-4 text-gray-900">
                      Essential Guides
                    </h3>
                    <ul className="space-y-3">
                      {pillarPages.map((pillar) => (
                        <li key={pillar.slug}>
                          <Link
                            href={`/${destination}/guide/${pillar.slug}`}
                            className={`text-sm block transition-colors ${
                              pillar.slug === guideSlug
                                ? "text-blue-600 font-semibold"
                                : "text-gray-700 hover:text-blue-600"
                            }`}
                          >
                            {pillar.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
