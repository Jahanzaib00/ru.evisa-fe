/**
 * Individual Blog Post Page
 * Displays single blog post with full content
 * Fetches from backend API - NO PRISMA
 *
 * CONVERSION-OPTIMIZED DESIGN:
 * - Multiple CTAs throughout content (early, mid, bottom)
 * - Table of contents for engagement
 * - Related content for increased page views
 * - Sticky CTA bar for mobile conversions
 * - SEO-optimized with structured data
 */

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateBlogMetadata } from "@/app/lib/seo/metadata";
import { generateArticleSchema } from "@/app/lib/seo/structured-data";
import { contentService } from "@/app/lib/api";
import ContentPageLayout from "@/app/components/content/ContentPageLayout";
import InlineCTA from "@/app/components/content/InlineCTA";
import TableOfContents from "@/app/components/content/TableOfContents";
import ContentGrid from "@/app/components/content/ContentGrid";
import MarkdownRenderer from "@/app/components/content/MarkdownRenderer";

type Props = {
  params: Promise<{ slug: string }>;
};

// Dynamic rendering - no static params needed
// Posts are server-rendered on demand for better performance
export const dynamicParams = true;

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = await contentService.getBySlug(slug);

    if (!post || post.status !== "PUBLISHED") {
      return {
        title: "Blog Post Not Found",
        robots: {
          index: false,
          follow: false,
        },
      };
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.com";
    const canonicalUrl = `${baseUrl}/blog/${post.slug}`;

    const metadata = generateBlogMetadata(
      post.metaTitle || post.title,
      post.metaDescription || post.excerpt || "",
      post.slug,
      post.publishedAt || new Date().toISOString(),
      post.updatedAt,
      "ESTA Visa Portal Team",
      post.keywords,
      post.featuredImage || undefined
    );

    // Ensure canonical URL is set
    if (!metadata.alternates) {
      metadata.alternates = {};
    }
    metadata.alternates.canonical = canonicalUrl;

    // Ensure Open Graph image is set
    if (!metadata.openGraph) {
      metadata.openGraph = {};
    }
    if (post.featuredImage && !metadata.openGraph.images) {
      metadata.openGraph.images = [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ];
    }

    // Twitter card
    if (post.featuredImage) {
      metadata.twitter = {
        card: "summary_large_image",
        images: [post.featuredImage],
      };
    }

    return metadata;
  } catch (error) {
    return {
      title: "Blog Post Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }
}

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  let relatedContent;

  try {
    post = await contentService.getBySlug(slug);
    relatedContent = await contentService.getRelatedContent(slug, 3);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    notFound();
  }

  if (!post || post.status !== "PUBLISHED") {
    notFound();
  }

  // Generate structured data
  const structuredData = generateArticleSchema({
    title: post.title,
    description: post.metaDescription || post.excerpt || "",
    url: `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.com"
    }/blog/${post.slug}`,
    datePublished: post.publishedAt || new Date().toISOString(),
    dateModified: post.updatedAt,
    author: "ESTA Visa Portal Team",
    image: post.featuredImage,
    keywords: post.keywords,
  });

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ];

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Sticky CTA for mobile/desktop */}
      <InlineCTA variant="sticky" position="sticky-bottom" />

      <ContentPageLayout breadcrumbs={breadcrumbs}>
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-[1fr_300px] gap-12">
              {/* Main Content Column */}
              <article className="max-w-4xl">
                {/* Header */}
                <header className="mb-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
                    {post.category && (
                      <span className="inline-block bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full uppercase">
                        {post.category}
                      </span>
                    )}
                    <span className="text-gray-500 flex items-center gap-2">
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
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {post.publishedAt
                        ? new Date(post.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            }
                          )
                        : "Draft"}
                    </span>
                    <span className="text-gray-500 flex items-center gap-2">
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
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      {post.views.toLocaleString()} views
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    {post.title}
                  </h1>

                  {post.excerpt && (
                    <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-blue-600 pl-6 py-2">
                      {post.excerpt}
                    </p>
                  )}
                </header>

                {/* Early CTA - After introduction */}
                <InlineCTA
                  variant="minimal"
                  position="early"
                  title="Need help with your ESTA application?"
                  description="Our experts are available 24/7 to assist you. Start your application now."
                />

                {/* Content - Rich Markdown Rendering with YOUR Design System */}
                <div className="max-w-none mb-12">
                  <MarkdownRenderer
                    content={post.content}
                    injectCTAs={true}
                    ctaFrequency={3}
                  />
                </div>

                {/* Bottom CTA */}
                <InlineCTA
                  variant="banner"
                  position="bottom"
                  title="Ready to Start Your ESTA Application?"
                  description="Join thousands of travelers who trust us for their ESTA needs. 99% approval rate guaranteed."
                  buttonText="Apply Now"
                />

                {/* Article Footer */}
                <footer className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-2">
                        <strong>Last updated:</strong>{" "}
                        {new Date(post.updatedAt).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                      <div className="text-sm text-gray-600">
                        <strong>Written by:</strong> ESTA Visa Portal Team
                      </div>
                    </div>
                  </div>
                </footer>

                {/* Related Content */}
                {relatedContent && relatedContent.length > 0 && (
                  <div className="mt-16 pt-12 border-t border-gray-200">
                    <ContentGrid
                      items={relatedContent}
                      title="Related Articles"
                      columns={3}
                      showExcerpt={true}
                      showCategory={true}
                      showDate={false}
                    />
                  </div>
                )}
              </article>

              {/* Sidebar - Table of Contents (Desktop only) */}
              <aside className="hidden lg:block">
                <TableOfContents />
              </aside>
            </div>
          </div>
        </div>
      </ContentPageLayout>
    </>
  );
}
