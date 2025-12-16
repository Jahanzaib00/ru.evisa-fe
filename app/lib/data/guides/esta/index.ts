// index for esta

/**
 *
 * Centralized export of all ESTA guides
 * All guides imported from separate files for easier management

 **/
import { Guide } from "../types";
import { whatIsEsta } from "./what-is-esta";
import { estaRequirements } from "./esta-requirements";
import { estaHowToApply } from "./how-to-apply-esta";
import { estaApplicationFees } from "./esta-application-fees";
import { checkEstaStatus } from "./check-esta-status";
import { estaValidityPeriod } from "./esta-validity-period";
import { estaVsVisa } from "./esta-vs-visa";
import { estaProcessingTime } from "./esta-processing-time";
import { renewEsta } from "./renew-esta";
import { estaForMinors } from "./esta-for-minors";
import { passportRequirementsEsta } from "./passport-reqiuirements-esta";
import { estaDeniedWhatToDo } from "./esta-denied-what-to-do";

// Export types
export type { Guide, GuideSection, GuideFAQ } from "../types";

// Export all guides as an array
export const ESTA_GUIDES: Guide[] = [
  whatIsEsta,
  estaRequirements,
  estaHowToApply,
  estaApplicationFees,
  checkEstaStatus,
  estaValidityPeriod,
  estaVsVisa,
  estaProcessingTime,
  renewEsta,
  estaForMinors,
  passportRequirementsEsta,
  estaDeniedWhatToDo,
];

// Export individual guides for direct imports if needed
export {
  whatIsEsta,
  estaRequirements,
  estaHowToApply,
  estaApplicationFees,
  checkEstaStatus,
  estaValidityPeriod,
  estaVsVisa,
  estaProcessingTime,
  renewEsta,
  estaForMinors,
  passportRequirementsEsta,
  estaDeniedWhatToDo,
};

// Helper functions
export function getGuidesByCategory(category: string): Guide[] {
  return ESTA_GUIDES.filter((guide) => guide.category === category);
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return ESTA_GUIDES.find((guide) => guide.slug === slug);
}
