/**
 * Destination Blog Post Page
 * /blog/united-states/esta-requirements
 * /blog/united-kingdom/uk-eta-guide
 * SEO-optimized with destination-aware CTAs
 */

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateBlogMetadata } from "@/app/lib/seo/metadata";
import { generateArticleSchema } from "@/app/lib/seo/structured-data";
import { contentService } from "@/app/lib/api";
import { getServiceBySlug } from "@/app/lib/config/services";
import ContentPageLayout from "@/app/components/content/ContentPageLayout";
import InlineCTA from "@/app/components/content/InlineCTA";
import TableOfContents from "@/app/components/content/TableOfContents";
import ContentGrid from "@/app/components/content/ContentGrid";
import MarkdownRenderer from "@/app/components/content/MarkdownRenderer";

type Props = {
  params: Promise<{ destination: string; slug: string }>;
};

const DESTINATION_MAP: Record<string, string> = {
  "united-states": "United States",
  "united-kingdom": "United Kingdom",
  "canada": "Canada"
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug, destination } = await params;
    const post = await contentService.getBySlug(slug);

    if (!post || post.destination !== destination) {
      return {
        title: "Blog Post Not Found",
        robots: { index: false, follow: false }
      };
    }

    return generateBlogMetadata(
      post.metaTitle || post.title,
      post.metaDescription || post.excerpt || "",
      `${destination}/${slug}`,
      post.createdAt || new Date().toISOString(),
      post.updatedAt,
      "Travel Authorization Experts",
      post.keywords
    );
  } catch (error) {
    return {
      title: "Blog Post Not Found",
      robots: { index: false, follow: false }
    };
  }
}

export const revalidate = 3600;

export default async function DestinationBlogPost({ params }: Props) {
  const { slug, destination } = await params;

  let post;
  let relatedContent;

  try {
    post = await contentService.getBySlug(slug);
    if (!post || post.destination !== destination) {
      notFound();
    }
    relatedContent = await contentService.getRelatedContent(slug, 3);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    notFound();
  }

  if (post.status !== "PUBLISHED") {
    notFound();
  }

  // Get service config for destination-aware CTAs
  const serviceSlug = destination === "united-states" ? "esta" :
                      destination === "united-kingdom" ? "uk-eta" : "canada-eta";
  const service = getServiceBySlug(serviceSlug);
  const destinationName = DESTINATION_MAP[destination] || destination;

  // Generate structured data
  const structuredData = generateArticleSchema({
    title: post.title,
    description: post.metaDescription || post.excerpt || "",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.online"}/blog/${destination}/${slug}`,
    datePublished: post.createdAt || new Date().toISOString(),
    dateModified: post.updatedAt,
    author: "Travel Authorization Experts",
    keywords: post.keywords,
  });

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: destinationName, url: `/blog/${destination}` },
    { name: post.title, url: `/blog/${destination}/${slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Sticky CTA with destination-specific messaging */}
      <InlineCTA
        variant="sticky"
        position="sticky-bottom"
        destination={destination}
        service={service}
      />

      <ContentPageLayout breadcrumbs={breadcrumbs}>
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-[1fr_300px] gap-12">
              <article className="max-w-4xl">
                {/* Header */}
                <header className="mb-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
                    {post.category && (
                      <span className="inline-block bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full uppercase">
                        {post.category}
                      </span>
                    )}
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                      {destinationName}
                    </span>
                    <span className="text-gray-500 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {post.createdAt
                        ? new Date(post.createdAt).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })
                        : "Draft"}
                    </span>
                    <span className="text-gray-500 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
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

                {/* Early CTA - Destination specific */}
                {service && (
                  <InlineCTA
                    variant="minimal"
                    position="early"
                    title={`Need help with your ${service.name} application?`}
                    description="Our experts are available 24/7 to assist you. Start your application now."
                    buttonText={`Apply for ${service.name}`}
                    buttonHref={`/${destination}/apply`}
                  />
                )}

                {/* Content */}
                <div className="max-w-none mb-12">
                  <MarkdownRenderer content={post.content} />
                </div>

                {/* Bottom CTA - Destination specific */}
                {service && (
                  <InlineCTA
                    variant="banner"
                    position="bottom"
                    title={`Ready to Start Your ${service.name} Application?`}
                    description={`Join thousands of travelers who trust us for their ${destinationName} travel authorization. 99% approval rate guaranteed.`}
                    buttonText="Apply Now"
                    buttonHref={`/${destination}/apply`}
                  />
                )}

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
                        <strong>Written by:</strong> Travel Authorization Experts
                      </div>
                    </div>
                  </div>
                </footer>

                {/* Related Content */}
                {relatedContent && relatedContent.length > 0 && (
                  <div className="mt-16 pt-12 border-t border-gray-200">
                    <ContentGrid
                      items={relatedContent}
                      title={`More ${destinationName} Travel Guides`}
                      columns={3}
                      showExcerpt={true}
                      showCategory={true}
                      showDate={false}
                    />
                  </div>
                )}
              </article>

              {/* Sidebar */}
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
