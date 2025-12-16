import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const passportRequirementsUkEta: Guide = {
  slug: "passport-requirements-uk-eta",
  title: "UK ETA Passport Requirements: Complete Guide",
  description:
    "Essential passport requirements for UK ETA including e-passport specifications and validity rules.",
  serviceType: ServiceType.UK_ETA,
  category: "requirements",
  pillarTopic: "service-overview",
  clusterOf: "what-is-uk-eta",
  priority: 0.75,
  keywords: [
    "UK ETA passport requirements",
    "e-passport UK",
    "biometric passport UK ETA",
  ],
  estimatedReadTime: 8,
  lastUpdated: "2025-12-12",
  sections: [
    {
      id: "e-passport-requirement",
      title: "E-Passport Requirement",
      content: [
        "To apply for UK ETA, you must have an e-passport (biometric passport). This is mandatory with no exceptions.",
        {
          type: "callout",
          title: "What is an E-Passport?",
          text: "An e-passport contains an electronic chip that stores your biometric information. It enables faster, more secure identity verification at UK borders.",
        },
      ],
    },
    {
      id: "identifying-e-passport",
      title: "How to Identify an E-Passport",
      content: [
        "Look for a small rectangular symbol on the front cover showing a circle (chip) inside two horizontal lines.",
        {
          type: "list",
          items: [
            "Symbol usually on front cover",
            "Internationally standardized",
            "Most passports issued after 2010 are biometric",
          ],
        },
      ],
    },
    {
      id: "validity-requirements",
      title: "Passport Validity Requirements",
      content: [
        "Your passport must be valid for the entire duration of your intended stay in the UK.",
        {
          type: "callout",
          text: "Unlike some countries, the UK does not require 6 months validity for ETA nationals - only validity for your stay duration.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How do I know if my passport is biometric?",
      answer:
        "Look for the small chip symbol on the front cover. Most passports issued after 2010-2015 are biometric.",
    },
    {
      question: "Can I use an emergency passport with UK ETA?",
      answer:
        "No, emergency and temporary passports are not eligible for UK ETAs.",
    },
  ],
  relatedGuides: ["uk-eta-requirements", "how-to-apply-uk-eta"],
};
