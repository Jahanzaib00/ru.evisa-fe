import { MetadataRoute } from 'next';

/**
 * Main Sitemap Index
 *
 * Next.js 15 native sitemap implementation
 * Automatically generates sitemap index pointing to all sub-sitemaps
 *
 * Benefits:
 * - Native Next.js functionality (no manual XML)
 * - Automatic caching with ISR
 * - Type-safe
 * - Better performance than API routes
 *
 * Google Guidelines:
 * - Sitemap index can reference up to 50,000 sitemaps
 * - Must be under 10 MB (uncompressed)
 * - Automatically submitted to search engines via robots.txt
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://visaportal.online';
  const now = new Date();

  return [
    // Static pages - high priority
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/apply`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.5,
    },

    // Content index pages
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/countries`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}
