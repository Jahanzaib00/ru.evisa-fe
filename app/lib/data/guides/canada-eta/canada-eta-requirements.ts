import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const canadaEtaRequirements: Guide = {
  slug: "canada-eta-requirements",
  title: "Canada eTA Requirements: Complete Eligibility Guide for 2026",
  description:
    "Comprehensive guide to Canada Electronic Travel Authorization (eTA) requirements including eligible nationalities, passport criteria, travel purposes, criminal record implications, and immigration history restrictions.",
  serviceType: ServiceType.CANADA_ETA,
  category: "requirements",
  pillarTopic: "service-overview",
  clusterOf: "what-is-canada-eta",
  priority: 0.9,
  keywords: [
    "canada eta requirements",
    "canada eta eligibility",
    "canada electronic travel authorization",
    "canada eta eligible countries",
    "canada eta passport requirements",
    "canada eta criminal record",
  ],
  estimatedReadTime: 10,
  lastUpdated: "2026-01-01",
  sections: [
    {
      id: "introduction",
      title: "Understanding Canada eTA Requirements",
      content: [
        "The Canada Electronic Travel Authorization (eTA) is a mandatory digital travel permission for visa-exempt nationals flying to or transiting through Canada. Costing CAD $7 and valid for up to 5 years (or until your passport expires), the eTA allows eligible travelers to enter Canada for stays up to 6 months per visit.",
        "Understanding the requirements is crucial for a successful application, as the Canadian government has specific eligibility criteria regarding nationality, passport specifications, travel purposes, criminal history, and immigration background.",
        {
          type: "callout",
          title: "Key Point",
          text: "Meeting all requirements doesn't guarantee approval, but failing to meet any single requirement will result in automatic refusal.",
        },
      ],
    },
    {
      id: "nationality-requirements",
      title: "Eligible Nationalities",
      content: [
        "The Canada eTA is available to citizens of visa-exempt countries. Your nationality, not your residence, determines eligibility.",
        {
          type: "list",
          items: [
            "Americas: United States, most Caribbean nations, and several South American countries",
            "Europe: EU countries, UK, Norway, Switzerland, Iceland, and other European nations",
            "Asia-Pacific: Australia, New Zealand, Japan, South Korea, Singapore, Malaysia, Hong Kong",
            "Middle East: Israel, UAE, and other designated countries",
          ],
        },
        {
          type: "callout",
          text: "Dual citizens can use the passport from their eligible nationality. U.S. citizens are also eligible for eTA when flying to Canada.",
        },
      ],
    },
    {
      id: "passport-requirements",
      title: "Passport Requirements",
      content: [
        "Your passport must be valid and recognized for international travel.",
        {
          type: "list",
          items: [
            "Validity: Must be valid for the entire duration of your stay in Canada",
            "Type: Regular passports or e-passports are accepted, but emergency or temporary travel documents may not be eligible",
            "Condition: The passport must be undamaged and legible",
          ],
        },
        {
          type: "warning",
          title: "Important",
          text: "If your passport is renewed after receiving an eTA, you must apply for a new eTA. Emergency travel documents are typically NOT accepted.",
        },
      ],
    },
    {
      id: "criminal-record",
      title: "Criminal Record Requirements",
      content: [
        "Criminal history can affect your Canada eTA eligibility. You may be refused an eTA if you have:",
        {
          type: "list",
          items: [
            "A criminal conviction for which you have not completed the sentence",
            "Multiple convictions that may indicate inadmissibility",
            "Pending criminal charges",
          ],
        },
        {
          type: "warning",
          title: "Disclosure Required",
          text: "You must truthfully disclose any criminal history or prior immigration refusals. Providing false information can result in refusal or bans from Canada.",
        },
      ],
    },
    {
      id: "travel-purpose",
      title: "Travel Purpose and Restrictions",
      content: [
        "The Canada eTA is only valid for short-term visits such as tourism, business, or transit. It cannot be used for:",
        {
          type: "list",
          items: [
            "Work or employment in Canada",
            "Study programs longer than 6 months",
            "Immigration or permanent residence applications",
          ],
        },
        {
          type: "callout",
          text: "If your visit purpose does not qualify, you must apply for the appropriate Canadian visa.",
        },
      ],
    },
  ],
  faqs: [
    {
      question:
        "What happens if I don't meet one of the Canada eTA requirements?",
      answer:
        "If you don't meet any of the core requirements, your eTA application will be refused. The CAD $7 fee is non-refundable. You may apply for a Canadian visitor visa instead.",
    },
    {
      question: "Do I need an e-passport to apply for a Canada eTA?",
      answer:
        "No, regular passports are accepted as long as they are valid for travel. Emergency or temporary travel documents may not be eligible.",
    },
    {
      question:
        "Can I apply for Canada eTA if I have a minor criminal conviction from 10 years ago?",
      answer:
        "It depends on the conviction. Convictions for which you have not completed the sentence or that indicate inadmissibility may result in refusal. Minor, completed convictions may not automatically disqualify you.",
    },
  ],
  relatedGuides: [
    "what-is-canada-eta",
    "how-to-apply-canada-eta",
    "canada-eta-fees",
    "canada-eta-vs-visa",
  ],
};
