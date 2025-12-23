import { MetadataRoute } from "next";

/**
 * Robots.txt - 2025 Industry Standards
 *
 * Next.js 15 native robots.txt generation
 * Follows Google Search Central & industry best practices
 *
 * KEY 2025 UPDATES:
 * - AI crawler management (GPTBot, CCBot, etc.) - protect from LLM training
 * - Query parameter blocking - prevent duplicate content indexing
 * - Removed deprecated directives (host, crawlDelay)
 * - Single sitemap reference (project uses unified sitemap)
 * - Precise disallow patterns for multi-step forms
 *
 * WHAT THIS DOES:
 * - Allows: All public content (blog, guides, countries, services)
 * - Blocks: Application forms, payment pages, auth, duplicate URLs
 * - Manages: AI crawlers separately from search engines
 *
 * Google Guidelines 2025:
 * - robots.txt is for crawler management, NOT security
 * - Don't block CSS/JS needed for rendering
 * - Use noindex meta tag for pages you don't want indexed
 * - Keep it simple and maintainable
 *
 * Reference: https://developers.google.com/search/docs/crawling-indexing/robots/intro
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.online";

  return {
    rules: [
      // ======================
      // AI CRAWLERS - 2025 CRITICAL
      // ======================
      // Block AI training bots from scraping content
      {
        userAgent: [
          "GPTBot", // OpenAI
          "ChatGPT-User", // OpenAI
          "CCBot", // Common Crawl (used by many AI companies)
          "anthropic-ai", // Anthropic/Claude
          "Claude-Web", // Anthropic/Claude
          "Google-Extended", // Google Bard/Gemini training
          "PerplexityBot", // Perplexity AI
          "Omgilibot", // Omgili (AI training)
          "FacebookBot", // Meta AI training
        ],
        disallow: ["/"],
      },

      // ======================
      // SEO TOOL CRAWLERS
      // ======================
      // Block aggressive SEO tools (they don't provide value to users)
      {
        userAgent: [
          "AhrefsBot",
          "SemrushBot",
          "DotBot",
          "Mj12bot",
          "BLEXBot",
          "SeznamBot",
        ],
        disallow: ["/"],
      },

      // ======================
      // SEARCH ENGINE CRAWLERS
      // ======================
      // Major search engines - full access to public content
      {
        userAgent: ["Googlebot", "Bingbot", "Slurp", "DuckDuckBot"],
        allow: ["/"],
        disallow: [
          // Application forms (multi-step process)
          "/*/application/*", // All application steps
          "/*/apply/personal-details",
          "/*/apply/passport-details",
          "/*/apply/review",
          "/track/*", // Order tracking (contains sensitive info)

          // Payment & Orders
          "/payment/*",
          "/orders",
          "/orders/*",

          // Authentication
          "/login",
          "/signup",
          "/logout",
          "/auth/*",

          // Next.js internals
          "/_next/*",
          "/static/*",

          // Duplicate content - query parameters
          "/*?*sort=*", // Sort parameters create duplicates
          "/*?*filter=*", // Filter parameters create duplicates
          "/*?*page=*", // Pagination creates duplicates (use rel=canonical instead)
          "/*?*search=*", // Search results shouldn't be indexed
          "/*?*ref=*", // Tracking parameters
          "/*?*utm_*", // UTM parameters
        ],
      },

      // ======================
      // ALL OTHER BOTS
      // ======================
      // Default rule for unspecified crawlers
      {
        userAgent: "*",
        allow: ["/"],
        disallow: [
          // Same blocks as search engines
          "/*/application/*",
          "/*/apply/personal-details",
          "/*/apply/passport-details",
          "/*/apply/review",
          "/track/*",
          "/payment/*",
          "/orders",
          "/orders/*",
          "/login",
          "/signup",
          "/logout",
          "/auth/*",
          "/_next/*",
          "/static/*",
          "/*?*sort=*",
          "/*?*filter=*",
          "/*?*page=*",
          "/*?*search=*",
          "/*?*ref=*",
          "/*?*utm_*",
        ],
      },
    ],

    // ======================
    // SITEMAP
    // ======================
    // Single unified sitemap (includes all content)
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
