/**
 * Individual Guide Page
 * THE ABSOLUTE BEST guide detail page
 * Perfect SEO, UX, Conversion with Multiple CTAs, Sticky Bar, TOC
 */

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/home/Footer";
import { getGuideBySlug, getAllGuideSlugs } from "@/app/lib/data/guides";
import { generateGuideMetadata } from "@/app/lib/seo/metadata";
import {
  generateArticleSchema,
  generateWebPageSchema,
  renderStructuredData,
} from "@/app/lib/seo/structured-data";
import GuideContent from "@/app/components/content/GuideContent";
import GuideSidebar from "@/app/components/content/GuideSidebar";

/**
 * Generate static params for all guides
 */
export async function generateStaticParams() {
  const slugs = getAllGuideSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

/**
 * Generate metadata for guide page
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {
      title: "Guide Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return generateGuideMetadata(
    guide.title,
    guide.description,
    guide.slug,
    guide.keywords
  );
}

/**
 * Guide Page Component
 */
export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let guide;
  try {
    guide = getGuideBySlug(slug);
  } catch (error) {
    console.error("Error fetching guide:", error);
    notFound();
  }

  if (!guide) {
    notFound();
  }

  const currentDate = new Date().toISOString();

  // Generate structured data
  const articleSchema = generateArticleSchema({
    title: guide.title,
    description: guide.description,
    url: `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.com"
    }/guides/${guide.slug}`,
    datePublished: guide.lastUpdated || currentDate,
    dateModified: guide.lastUpdated || currentDate,
    author: "ESTA Visa Portal Team",
    keywords: guide.keywords,
  });

  const webPageSchema = generateWebPageSchema({
    title: guide.title,
    description: guide.description,
    url: `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.com"
    }/guides/${guide.slug}`,
    datePublished: guide.lastUpdated || currentDate,
    dateModified: guide.lastUpdated || currentDate,
    breadcrumbs: [
      {
        name: "Home",
        url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.com",
      },
      {
        name: "Guides",
        url: `${
          process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.com"
        }/guides`,
      },
      {
        name: guide.title,
        url: `${
          process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.com"
        }/guides/${guide.slug}`,
      },
    ],
  });

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderStructuredData([articleSchema, webPageSchema]),
        }}
      />

      <Header />

      {/* Sticky CTA Bar - Mobile & Desktop */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-900 text-white shadow-2xl border-t-4 border-blue-600 z-50 transform translate-y-full animate-slide-up">
        <div className="container mx-auto px-4 py-4 max-w-5xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold">Ready to Apply for ESTA?</h3>
              <p className="text-sm text-blue-100">
                Expert assistance • 99% approval rate • 24/7 support
              </p>
            </div>
            <Link
              href="/apply"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap"
            >
              Start Application →
            </Link>
          </div>
        </div>
      </div>

      <main className="min-h-screen bg-white pb-24">
        {/* Breadcrumbs */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 max-w-5xl py-4">
            <nav className="flex text-sm">
              <Link
                href="/"
                className="text-blue-600 hover:underline font-medium"
              >
                Home
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link
                href="/guides"
                className="text-blue-600 hover:underline font-medium"
              >
                Guides
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-700 font-medium">{guide.title}</span>
            </nav>
          </div>
        </div>

        {/* Article */}
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid lg:grid-cols-[1fr_280px] gap-12">
              {/* Main Content */}
              <div>
                {/* Header */}
                <header className="mb-10">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wide">
                      {guide.category}
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
                    {guide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed border-l-4 border-blue-600 pl-6 py-3">
                    {guide.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    {guide.estimatedReadTime && (
                      <span className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {guide.estimatedReadTime} min read
                      </span>
                    )}
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      ESTA Visa Portal Team
                    </span>
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Updated{" "}
                      {new Date(
                        guide.lastUpdated || currentDate
                      ).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </header>

                {/* Main Guide Content */}
                <GuideContent guide={guide} />
              </div>

              {/* Sidebar - Table of Contents (Desktop only) */}
              <aside className="hidden lg:block">
                <GuideSidebar sections={guide.sections || []} />
              </aside>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
