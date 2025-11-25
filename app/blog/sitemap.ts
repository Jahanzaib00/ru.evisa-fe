import { MetadataRoute } from "next";
import { contentService } from "@/app/lib/api";

/**
 * Dynamic Blog Sitemap
 *
 * Fetches all published blog posts from backend API
 *
 * Features:
 * - Automatic ISR caching (revalidates every hour)
 * - Real-time data from backend database
 * - Type-safe implementation
 * - Handles up to 50,000 posts (Google limit)
 *
 * Scalability Note:
 * - When blog exceeds 50K posts, implement generateSitemaps()
 * - For now, simplified single sitemap approach
 *
 * Google Best Practices:
 * - Max 50,000 URLs per sitemap
 * - Logical grouping by content type
 * - Includes lastModified for better crawling
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.com";

  try {
    // Fetch all blog posts (up to 50K limit)
    const response = await contentService.getBlogPosts({
      limit: 50000,
    });

    const posts = response?.data || [];

    return posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error generating blog sitemap:", error);
    // Return empty array on error (Next.js will handle gracefully)
    return [];
  }
}

// ISR: Revalidate every hour
export const revalidate = 3600;
