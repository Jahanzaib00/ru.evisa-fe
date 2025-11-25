/**
 * Individual Blog Post Page
 * Displays single blog post with full content
 * Fetches from backend API - NO PRISMA
 */

import { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { generateBlogMetadata } from "@/app/lib/seo/metadata";
import { generateArticleSchema } from "@/app/lib/seo/structured-data";
import { contentService } from "@/app/lib/api";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static params for all published blog posts
export async function generateStaticParams() {
  try {
    // API client automatically unwraps TransformInterceptor response
    // Returns ContentListResponse: { data: Content[], total, limit, offset }
    const response = await contentService.getBlogPosts({ limit: 1000 });
    const posts = response?.data || [];

    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error fetching blog posts for static params:", error);
    return [];
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = await contentService.getBySlug(slug);

    if (!post || post.status !== "PUBLISHED") {
      return {
        title: "Blog Post Not Found",
      };
    }

    return generateBlogMetadata(
      post.metaTitle || post.title,
      post.metaDescription || post.excerpt || "",
      post.slug,
      post.publishedAt || new Date().toISOString(),
      post.updatedAt,
      "ESTA Visa Portal Team",
      post.keywords,
      post.featuredImage || undefined
    );
  } catch (error) {
    return {
      title: "Blog Post Not Found",
    };
  }
}

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = await contentService.getBySlug(slug);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    notFound();
  }

  if (!post || post.status !== "PUBLISHED") {
    notFound();
  }

  // Note: View count increment should be handled by backend API
  // Backend will increment on GET request

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

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <div className="min-h-screen bg-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              {post.category && (
                <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                  {post.category}
                </span>
              )}
              <span className="text-sm text-gray-500">
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })
                  : "Draft"}
              </span>
              <span className="text-sm text-gray-500">
                {post.views.toLocaleString()} views
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-xl text-gray-600 leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </header>

          {/* Content */}
          <div className="prose prose-lg prose-blue max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Last updated:{" "}
                {new Date(post.updatedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              {post.aiGenerated && (
                <div className="text-xs text-gray-400">AI-Enhanced Content</div>
              )}
            </div>
          </footer>
        </article>
      </div>
    </>
  );
}
