/**
 * Multi-Service Guides Index
 * Central export point for all guides across services
 */

import { Guide } from "./types";
import { ServiceType } from "@/app/lib/config/services";
import { ESTA_GUIDES } from "./esta";
import { UK_ETA_GUIDES } from "./uk-eta";
import { CANADA_ETA_GUIDES } from "./canada-eta";

// Export types
export type {  Guide, GuideSection, GuideFAQ, PillarTopic } from "./types";

// Export service-specific guide arrays
export { ESTA_GUIDES } from "./esta";
export { UK_ETA_GUIDES } from "./uk-eta";
export { CANADA_ETA_GUIDES } from "./canada-eta";

// Combined guides array (all services)
export const ALL_GUIDES: Guide[] = [...ESTA_GUIDES, ...UK_ETA_GUIDES, ...CANADA_ETA_GUIDES];

/**
 * Get all guides for a specific service
 */
export function getGuidesByService(serviceType: ServiceType): Guide[] {
  return ALL_GUIDES.filter((guide) => guide.serviceType === serviceType);
}

/**
 * Get guides by category for a specific service
 */
export function getGuidesByCategory(
  category: string,
  serviceType?: ServiceType
): Guide[] {
  let guides = ALL_GUIDES.filter((guide) => guide.category === category);

  if (serviceType) {
    guides = guides.filter((guide) => guide.serviceType === serviceType);
  }

  return guides;
}

/**
 * Get a single guide by slug
 * Optionally filter by service for safety
 */
export function getGuideBySlug(
  slug: string,
  serviceType?: ServiceType
): Guide | undefined {
  let guide = ALL_GUIDES.find((g) => g.slug === slug);

  if (guide && serviceType && guide.serviceType !== serviceType) {
    return undefined; // Wrong service
  }

  return guide;
}

/**
 * Get all guide slugs for a service (for generateStaticParams)
 */
export function getAllGuideSlugs(serviceType?: ServiceType): string[] {
  let guides = ALL_GUIDES;

  if (serviceType) {
    guides = guides.filter((guide) => guide.serviceType === serviceType);
  }

  return guides.map((guide) => guide.slug);
}

/**
 * Get pillar pages for a service
 */
export function getPillarPages(serviceType: ServiceType): Guide[] {
  return ALL_GUIDES.filter(
    (guide) => guide.serviceType === serviceType && guide.isPillarPage === true
  );
}

/**
 * Get cluster content for a pillar page
 */
export function getClusterContent(pillarSlug: string): Guide[] {
  return ALL_GUIDES.filter((guide) => guide.clusterOf === pillarSlug);
}

/**
 * Get guides by pillar topic
 */
export function getGuidesByPillarTopic(
  pillarTopic: string,
  serviceType?: ServiceType
): Guide[] {
  let guides = ALL_GUIDES.filter((guide) => guide.pillarTopic === pillarTopic);

  if (serviceType) {
    guides = guides.filter((guide) => guide.serviceType === serviceType);
  }

  return guides;
}
