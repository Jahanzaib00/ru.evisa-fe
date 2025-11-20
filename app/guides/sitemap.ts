import { MetadataRoute } from 'next';
import { ESTA_GUIDES } from '@/app/lib/data/guides';

/**
 * Guides Sitemap
 *
 * Generates sitemap for all ESTA guide pages
 * Currently uses static data, can be upgraded to fetch from backend
 *
 * Features:
 * - Static guide data (fast generation)
 * - High SEO priority (educational content)
 * - Monthly update frequency
 * - Automatic ISR caching
 *
 * SEO Strategy:
 * - Guides are evergreen content
 * - Higher priority than blog posts (0.8 vs 0.7)
 * - Grouped logically by content type
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://visaportal.online';

  return ESTA_GUIDES.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: guide.lastUpdated ? new Date(guide.lastUpdated) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8, // Higher priority than blog posts
  }));
}

// ISR: Revalidate every 6 hours (guides change less frequently)
export const revalidate = 21600;
