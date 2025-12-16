/**
 * UK ETA Guides - Main Export
 * All guides imported from separate files for easier management
 */

import { Guide } from "../types";
import { whatIsUkEta } from "./what-is-uk-eta";
import { ukEtaRequirements } from "./uk-eta-requirements";
import { howToApplyUkEta } from "./how-to-apply-uk-eta";
import { ukEtaFees } from "./uk-eta-fees";
import { checkUkEtaStatus } from "./check-uk-eta-status";
import { ukEtaValidity } from "./uk-eta-validity";
import { ukEtaVsVisa } from "./uk-eta-vs-visa";
import { ukEtaProcessingTime } from "./uk-eta-processing-time";
import { renewUkEta } from "./renew-uk-eta";
import { ukEtaForMinors } from "./uk-eta-for-minors";
import { passportRequirementsUkEta } from "./passport-requirements-uk-eta";
import { ukEtaDenied } from "./uk-eta-denied";

// Export types
export type { Guide, GuideSection, GuideFAQ } from "../types";

// Export all guides as an array
export const UK_ETA_GUIDES: Guide[] = [
  whatIsUkEta,
  ukEtaRequirements,
  howToApplyUkEta,
  ukEtaFees,
  checkUkEtaStatus,
  ukEtaValidity,
  ukEtaVsVisa,
  ukEtaProcessingTime,
  renewUkEta,
  ukEtaForMinors,
  passportRequirementsUkEta,
  ukEtaDenied,
];

// Export individual guides for direct imports if needed
export {
  whatIsUkEta,
  ukEtaRequirements,
  howToApplyUkEta,
  ukEtaFees,
  checkUkEtaStatus,
  ukEtaValidity,
  ukEtaVsVisa,
  ukEtaProcessingTime,
  renewUkEta,
  ukEtaForMinors,
  passportRequirementsUkEta,
  ukEtaDenied,
};

// Helper functions
export function getGuidesByCategory(category: string): Guide[] {
  return UK_ETA_GUIDES.filter((guide) => guide.category === category);
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return UK_ETA_GUIDES.find((guide) => guide.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return UK_ETA_GUIDES.map((guide) => guide.slug);
}
