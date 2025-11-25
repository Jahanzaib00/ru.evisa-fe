import { MetadataRoute } from "next";
import { VWP_COUNTRIES } from "@/app/lib/data/countries";

/**
 * Countries Sitemap
 *
 * Generates sitemap for all 41 Visa Waiver Program country pages
 * Each page optimized for "[Country] ESTA" keyword targeting
 *
 * Features:
 * - Static country data (41 VWP countries)
 * - High SEO priority (landing pages)
 * - Weekly update frequency
 * - Optimized for geo-targeted searches
 *
 * SEO Strategy:
 * - Country pages are high-value landing pages
 * - Priority 0.9 (second only to homepage and /apply)
 * - Target country-specific searches (e.g., "UK ESTA", "Australia ESTA")
 * - Stable content with infrequent updates
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.com";

  return VWP_COUNTRIES.map((country) => ({
    url: `${baseUrl}/countries/${country.slug}`,
    lastModified: new Date(), // Updated when country data changes
    changeFrequency: "weekly" as const,
    priority: 0.9, // High priority landing pages
  }));
}

// ISR: Revalidate every 12 hours (country data rarely changes)
export const revalidate = 43200;
