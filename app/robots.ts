import { MetadataRoute } from "next";

/**
 * Dynamic Robots.txt
 *
 * Next.js 15 native robots.txt generation
 * Automatically points to all sitemaps
 *
 * Benefits:
 * - Type-safe configuration
 * - Automatically includes all sitemap routes
 * - Environment-aware (dev vs production)
 * - No manual robots.txt management
 *
 * Google Best Practices:
 * - Allow crawling of public content
 * - Disallow sensitive routes (auth, API, admin)
 * - Reference all sitemaps
 * - Control aggressive crawlers
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/*",
          "/login",
          "/signup",
          "/apply/personal-details",
          "/apply/passport-details",
          "/apply/review",
          "/payment/",
          "/orders",
          "/_next/*",
          "/static/*",
        ],
      },
      // Aggressive bot rate limiting
      {
        userAgent: ["AhrefsBot", "SemrushBot", "DotBot"],
        crawlDelay: 10,
      },
      // Major search engines (no restrictions)
      {
        userAgent: ["Googlebot", "Bingbot", "Slurp"],
        allow: "/",
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/blog/sitemap.xml`,
      `${baseUrl}/guides/sitemap.xml`,
      `${baseUrl}/countries/sitemap.xml`,
    ],
    // Add host for Google (optional but recommended)
    host: baseUrl,
  };
}
