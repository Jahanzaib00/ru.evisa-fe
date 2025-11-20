/**
 * Blog Listing Page
 * Displays all published blog posts from backend API
 * NO PRISMA - Uses NestJS backend following Rails pattern
 */

import { Metadata } from "next";
import Link from "next/link";
import { generateMetadata as generateSEOMetadata } from "@/app/lib/seo/metadata";
import { contentService, type Content } from "@/app/lib/api";

export const metadata: Metadata = generateSEOMetadata({
  title: "ESTA Blog - Tips, Guides & Updates",
  description:
    "Stay updated with the latest ESTA application tips, travel guides, and visa waiver program information. Expert advice for hassle-free US travel authorization.",
  keywords: [
    "ESTA blog",
    "travel tips",
    "visa waiver",
    "US travel guide",
    "ESTA updates",
    "travel authorization tips",
  ],
});

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  // Fetch published blog posts from backend API
  let posts: Content[] = [];

  const response = await contentService.getBlogPosts({
    limit: 50,
  });
  posts = response?.data || [];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ESTA Blog & Travel Tips
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert guides and tips for your ESTA application and US travel
          </p>
        </div>

        {/* Blog Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No blog posts available yet.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {post.category && (
                      <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                        {post.category}
                      </span>
                    )}
                    <span className="text-xs text-gray-500">
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
                  </div>

                  <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>

                  {post.excerpt && (
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                  )}

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="font-medium text-blue-600 hover:text-blue-700">
                      Read more →
                    </span>
                    <span>{post.views.toLocaleString()} views</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
