import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/home/Footer';
import { getGuideBySlug, getAllGuideSlugs, getRelatedGuides } from '@/app/lib/data/guides';
import { generateGuideMetadata } from '@/app/lib/seo/metadata';
import {
  generateArticleSchema,
  generateWebPageSchema,
  renderStructuredData,
} from '@/app/lib/seo/structured-data';

/**
 * Generate static paths for all guides
 * Pre-renders all guide pages at build time for SEO
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
      title: 'Guide Not Found',
    };
  }

  return generateGuideMetadata(guide.title, guide.description, guide.slug, guide.keywords);
}

/**
 * Guide Page Component
 * SEO-optimized guide pages with structured data
 *
 * NOTE: Content can be enhanced with OpenAI generation
 */
export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let guide;
  try {
    guide = getGuideBySlug(slug);
  } catch (error) {
    console.error('Error fetching guide:', error);
    notFound();
  }

  if (!guide) {
    notFound();
  }

  const relatedGuides = getRelatedGuides(slug, 4);
  const currentDate = new Date().toISOString();

  // Generate structured data
  const articleSchema = generateArticleSchema({
    title: guide.title,
    description: guide.description,
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://visaportal.online'}/guides/${guide.slug}`,
    datePublished: guide.lastUpdated || currentDate,
    dateModified: guide.lastUpdated || currentDate,
    author: 'ESTA Visa Portal Team',
    keywords: guide.keywords,
  });

  const webPageSchema = generateWebPageSchema({
    title: guide.title,
    description: guide.description,
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://visaportal.online'}/guides/${guide.slug}`,
    datePublished: guide.lastUpdated || currentDate,
    dateModified: guide.lastUpdated || currentDate,
    breadcrumbs: [
      { name: 'Home', url: process.env.NEXT_PUBLIC_SITE_URL || 'https://visaportal.online' },
      { name: 'Guides', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://visaportal.online'}/guides` },
      { name: guide.title, url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://visaportal.online'}/guides/${guide.slug}` },
    ],
  });

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderStructuredData([articleSchema, webPageSchema]),
        }}
      />

      <Header />

      <main className="min-h-screen bg-white">
        {/* Breadcrumbs */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 max-w-4xl py-3">
            <nav className="flex text-sm">
              <Link href="/" className="text-blue-600 hover:underline">
                Home
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/guides" className="text-blue-600 hover:underline">
                Guides
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-600">{guide.title}</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <article className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <header className="mb-8">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase">
                  {guide.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                {guide.title}
              </h1>
              <p className="text-xl text-gray-600 mb-4">{guide.description}</p>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                {guide.estimatedReadTime && (
                  <span>📖 {guide.estimatedReadTime} min read</span>
                )}
                <span>✍️ ESTA Visa Portal Team</span>
                <span>
                  🕐 Last updated: {new Date(guide.lastUpdated || currentDate).toLocaleDateString()}
                </span>
              </div>
            </header>

            {/* Guide Content - This is a template that will be enhanced with OpenAI */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <h2 className="text-xl font-bold mb-2 mt-0">Quick Summary</h2>
                <p className="mb-0">{guide.description}</p>
              </div>

              {/* Template content - will be replaced with OpenAI generated content */}
              <h2>Introduction</h2>
              <p>
                This comprehensive guide covers everything you need to know about {guide.title.toLowerCase()}.
                Whether you're applying for the first time or need clarification on specific requirements,
                this guide will walk you through all the essential information.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
                <p className="text-sm font-semibold mb-2">🚧 Enhanced Content Coming Soon</p>
                <p className="text-sm mb-0">
                  This guide is currently being enhanced with detailed, expert-level content. Check back
                  soon for the complete guide, or{' '}
                  <Link href="/apply" className="text-blue-600 hover:underline font-semibold">
                    start your ESTA application now
                  </Link>
                  .
                </p>
              </div>

              <h2>Key Points</h2>
              <ul>
                <li>ESTA is required for Visa Waiver Program travelers to the United States</li>
                <li>The application process is completed entirely online</li>
                <li>Most applications are approved within 24-72 hours</li>
                <li>ESTA is valid for 2 years or until passport expiration</li>
                <li>You can make multiple trips to the U.S. with one ESTA</li>
              </ul>

              <h2>Need Help?</h2>
              <p>
                If you have questions about this topic or need assistance with your ESTA application,
                our expert team is here to help 24/7.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-blue-900 text-white rounded-lg p-8 my-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Apply for ESTA?</h2>
              <p className="text-xl text-blue-100 mb-6">
                Get expert assistance with your ESTA application
              </p>
              <Link
                href="/apply"
                className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
              >
                Start Your Application
              </Link>
              <p className="text-sm text-blue-200 mt-4">
                99% approval rate • 24/7 support • Money-back guarantee
              </p>
            </div>

            {/* Related Guides */}
            {relatedGuides.length > 0 && (
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedGuides.map((relatedGuide) => (
                    <Link
                      key={relatedGuide.slug}
                      href={`/guides/${relatedGuide.slug}`}
                      className="block border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition-all"
                    >
                      <div className="mb-2">
                        <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded uppercase">
                          {relatedGuide.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">
                        {relatedGuide.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{relatedGuide.description}</p>
                      {relatedGuide.estimatedReadTime && (
                        <p className="text-xs text-gray-500 mt-2">
                          📖 {relatedGuide.estimatedReadTime} min read
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
