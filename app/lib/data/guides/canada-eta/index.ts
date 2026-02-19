/**
 * Canada eTA Guides - Main Export
 * All guides imported from separate files for easier management
 */

import { Guide } from "../types";
import { whatIsCanadaEta } from "./what-is-canada-eta";
import { canadaEtaRequirements } from "./canada-eta-requirements";
import { howToApplyCanadaEta } from "./how-to-apply-canada-eta";
import { canadaEtaFees } from "./canada-eta-fees";
import { checkCanadaEtaStatus } from "./check-canada-eta-status";
import { canadaEtaValidity } from "./canada-eta-validity";
import { canadaEtaVsVisa } from "./canada-eta-vs-visa";
import { canadaEtaProcessingTime } from "./canada-eta-processing-time";
import { renewCanadaEta } from "./renew-canada-eta";
import { canadaEtaForMinors } from "./canada-eta-for-minors";
import { passportRequirementsCanadaEta } from "./passport-requirements-canada-eta";
import { canadaEtaDenied } from "./canada-eta-denied";

// Export types
export type { Guide, GuideSection, GuideFAQ } from "../types";

// Export all guides as an array
export const CANADA_ETA_GUIDES: Guide[] = [
  whatIsCanadaEta,
  canadaEtaRequirements,
  howToApplyCanadaEta,
  canadaEtaFees,
  checkCanadaEtaStatus,
  canadaEtaValidity,
  canadaEtaVsVisa,
  canadaEtaProcessingTime,
  renewCanadaEta,
  canadaEtaForMinors,
  passportRequirementsCanadaEta,
  canadaEtaDenied,
];

// Export individual guides for direct imports if needed
export {
  whatIsCanadaEta,
  canadaEtaRequirements,
  howToApplyCanadaEta,
  canadaEtaFees,
  checkCanadaEtaStatus,
  canadaEtaValidity,
  canadaEtaVsVisa,
  canadaEtaProcessingTime,
  renewCanadaEta,
  canadaEtaForMinors,
  passportRequirementsCanadaEta,
  canadaEtaDenied,
};

// Helper functions
export function getGuidesByCategory(category: string): Guide[] {
  return CANADA_ETA_GUIDES.filter((guide) => guide.category === category);
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return CANADA_ETA_GUIDES.find((guide) => guide.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return CANADA_ETA_GUIDES.map((guide) => guide.slug);
}
