import { MetadataRoute } from "next";
import { getCountriesByService } from "./lib/data/countries";
import { getGuidesByService } from "./lib/data/guides";
import { destinations, services } from "./lib/constants";
import { staticPages } from "./lib/constants";
import { contentService } from "./lib/api/services/content.service";
/**
 * Multi-Service Sitemap - SEO CRITICAL
 *
 * Next.js 15 native sitemap implementation
 * Automatically generates sitemap for all services, countries, and blog posts
 *
 * INCLUDED URLS:
 * - Static pages (homepage, about, contact, etc.)
 * - Service hub pages (/services/esta, /services/uk-eta)
 * - Blog hub pages (/blog, /blog/{destination})
 * - ALL blog posts from database (/blog/{destination}/{slug})
 * - Guides (/{destination}/guide/{slug})
 * - Country pages (/{destination}/{service}-for-{country})
 *
 * SEO BEST PRACTICES:
 * - ALL published content MUST be in sitemap for Google discovery
 * - Use actual lastModified dates from database (not "now")
 * - Set priorities: 1.0 (homepage) > 0.9 (services) > 0.8 (hubs) > 0.7 (posts)
 * - Blog posts: changeFreq = "monthly" (they rarely change after publish)
 *
 * Google Guidelines:
 * - Max 50,000 URLs per sitemap
 * - Max 50 MB uncompressed
 * - If exceeded, use sitemap index with multiple sitemaps
 * - Regenerates on every build + ISR revalidation
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.online";
  const now = new Date();

  const urls: MetadataRoute.Sitemap = [];

  // Homepage - highest priority
  urls.push({
    url: baseUrl,
    lastModified: now,
    changeFrequency: "daily",
    priority: 1,
  });

  // Static pages
  staticPages.forEach(({ path, changeFreq, priority }) => {
    urls.push({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: changeFreq,
      priority,
    });
  });

  // Service hub pages - high priority landing pages
  urls.push({
    url: `${baseUrl}/services/esta`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.95,
  });
  urls.push({
    url: `${baseUrl}/services/uk-eta`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.95,
  });

  // Content index pages
  urls.push({
    url: `${baseUrl}/blog`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.8,
  });

  // Destination blog hubs
  destinations.forEach((destination) => {
    urls.push({
      url: `${baseUrl}/blog/${destination}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.85,
    });
  });

  // ALL BLOG POSTS - Critical for SEO
  try {
    // Fetch all published blog posts from database
    const blogPosts = await contentService.getBlogPosts({
      limit: 50000, // Sitemap limit
    });

    blogPosts.data.forEach((post) => {
      urls.push({
        url: `${baseUrl}/blog/${post.destination}/${post.slug}`,
        lastModified: post.updatedAt
          ? new Date(post.updatedAt)
          : new Date(post.createdAt),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
  } catch (error) {
    console.error("Failed to fetch blog posts for sitemap:", error);
    // Continue anyway - other URLs will still be in sitemap
  }

  services.forEach(({ type, serviceSlug, destinationSlug }) => {
    // Service apply page
    urls.push({
      url: `${baseUrl}/${destinationSlug}/apply`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });

    // Service-specific guides index page
    // URL format: /{destination}/guide
    // Example: /united-states/guide
    urls.push({
      url: `${baseUrl}/${destinationSlug}/guide`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9, // Hub page - high priority
    });

    // Service-specific countries index page (NEW - CRITICAL FOR SEO)
    // URL format: /{destination}/countries
    // Example: /united-states/countries
    urls.push({
      url: `${baseUrl}/${destinationSlug}/countries`,
      lastModified: now,
      changeFrequency: "monthly", // Countries list changes infrequently
      priority: 0.9, // Hub page - high priority for "{service} eligible countries" queries
    });

    // All individual guide pages for this service
    // URL format: /{destination}/guide/{slug}
    // Example: /united-states/guide/what-is-esta
    const guides = getGuidesByService(type);
    guides.forEach((guide) => {
      // Use higher priority for pillar pages
      const priority = guide.isPillarPage ? 0.9 : 0.8;

      urls.push({
        url: `${baseUrl}/${destinationSlug}/guide/${guide.slug}`,
        lastModified: guide.lastUpdated ? new Date(guide.lastUpdated) : now,
        changeFrequency: "monthly",
        priority,
      });
    });

    // All country pages for this service
    // URL format: /{destination}/{service}-for-{country}
    // Example: /united-states/esta-for-france
    const countries = getCountriesByService(type);
    countries.forEach((country) => {
      urls.push({
        url: `${baseUrl}/${destinationSlug}/${serviceSlug}-for-${country.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7, // Slightly lower than hub pages (was 0.8)
      });
    });
  });

  return urls;
}
