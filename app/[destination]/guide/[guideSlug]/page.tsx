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
import {
  Book,
  ArrowRight,
  ChevronRight,
  Clock,
  Calendar,
  CheckCircle,
} from "lucide-react";
import InlineCTA from "@/app/components/content/InlineCTA";
import ReadingProgress from "@/app/components/content/ReadingProgress";
import TableOfContents from "@/app/components/content/TableOfContents";
import FAQAccordion from "@/app/components/content/FAQAccordion";
import BackToTop from "@/app/components/content/BackToTop";

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

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.online";
  const canonicalUrl = `${baseUrl}/${destination}/guide/${guideSlug}`;

  return {
    title: `${guide.title} - ${service.name} Guide ${new Date().getFullYear()}`,
    description: guide.description,
    keywords: guide.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      url: canonicalUrl,
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
      <ReadingProgress />
      <BackToTop />

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
              name: "eVisa Portal",
            },
            publisher: {
              "@type": "Organization",
              name: "eVisa Portal",
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

      <InlineCTA
        variant="sticky"
        position="bottom"
        title={`Ready to apply for ${service.name}?`}
        description={`Fast-Track your ${service.slug} approval now`}
        buttonText="Start Application"
        destination={destination}
        service={service}
      />

      <main className="min-h-screen bg-white scroll-smooth">
        {/* Breadcrumb Navigation */}
        <section className="bg-gray-50 border-b border-gray-200 py-4">
          <div className="container mx-auto px-4 max-w-6xl">
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
          <div className="container mx-auto px-4 max-w-5xl">
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
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content Column */}
              <div className="lg:col-span-3">
                {/* What You'll Learn */}
                {guide.sections && guide.sections.length > 0 && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      What You&apos;ll Learn
                    </h3>
                    <ul className="space-y-2">
                      {guide.sections.slice(0, 4).map((section, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-800"
                        >
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{section.title}</span>
                        </li>
                      ))}
                      {guide.sections.length > 4 && (
                        <li className="text-gray-600 text-sm ml-7">
                          ...and {guide.sections.length - 4} more topics
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                {/* Guide Sections */}
                {guide.sections && guide.sections.length > 0 && (
                  <div className="mb-12">
                    {guide.sections.map((section, idx) => (
                      <div
                        key={idx}
                        id={section.id}
                        className="mb-8 scroll-mt-24"
                      >
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                          {section.title}
                        </h2>
                        <div className="prose prose-lg max-w-none">
                          {section.content.map((item, itemIdx) => {
                            if (typeof item === "string") {
                              return (
                                <p
                                  key={itemIdx}
                                  className="text-gray-700 mb-4 leading-relaxed"
                                >
                                  {item}
                                </p>
                              );
                            }

                            if ("type" in item && item.type === "list") {
                              return (
                                <ul key={itemIdx} className="space-y-2 mb-4">
                                  {item.items.map((listItem, listIdx) => (
                                    <li
                                      key={listIdx}
                                      className="flex items-start gap-2 text-gray-700"
                                    >
                                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                      <span>{listItem}</span>
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
                      </div>
                    ))}
                  </div>
                )}

                {/* FAQs Section */}
                {guide.faqs && guide.faqs.length > 0 && (
                  <div id="faqs" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                      Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Have more questions?{" "}
                      <Link
                        href="/support"
                        className="text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        Contact our support team
                      </Link>
                      .
                    </p>
                    <FAQAccordion faqs={guide.faqs} defaultOpen={0} />
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
                <InlineCTA
                  title="Ready to Apply?"
                  description={`Start your ${service.name} application now with our simple
                    online process`}
                  buttonText={`Start Application`}
                  destination={destination}
                  service={service}
                />
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Table of Contents - Sticky */}
                {guide.sections && guide.sections.length > 0 && (
                  <div className="lg:sticky lg:top-24 mb-6">
                    <TableOfContents
                      sections={guide.sections}
                      includeFAQs={guide.faqs && guide.faqs.length > 0}
                    />
                  </div>
                )}

                {/* Essential Guides - NOT sticky, scrolls away */}
                {pillarPages.length > 0 && (
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                      <Book className="w-5 h-5 text-blue-600" />
                      <h3 className="text-lg font-bold text-gray-900">
                        Essential Guides
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {pillarPages.map((pillar) => (
                        <li key={pillar.slug}>
                          <Link
                            href={`/${destination}/guide/${pillar.slug}`}
                            className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                              pillar.slug === guideSlug
                                ? "bg-blue-600 text-white font-semibold"
                                : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                            }`}
                          >
                            <ChevronRight
                              className={`w-4 h-4 ${
                                pillar.slug === guideSlug
                                  ? "text-white"
                                  : "text-gray-400"
                              }`}
                            />
                            <span className="line-clamp-2">{pillar.title}</span>
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
