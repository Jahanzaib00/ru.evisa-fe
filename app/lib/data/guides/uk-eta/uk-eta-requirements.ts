import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const ukEtaRequirements: Guide = {
  slug: "uk-eta-requirements",
  title: "UK ETA Requirements: Complete Eligibility Guide for 2025",
  description:
    "Comprehensive guide to UK Electronic Travel Authorization (ETA) requirements including eligible nationalities, passport criteria, travel purposes, criminal record implications, and immigration history restrictions.",
  serviceType: ServiceType.UK_ETA,
  category: "requirements",
  pillarTopic: "service-overview",
  clusterOf: "what-is-uk-eta",
  priority: 0.9,
  keywords: [
    "uk eta requirements",
    "uk eta eligibility",
    "uk electronic travel authorization",
    "uk eta eligible countries",
    "uk eta passport requirements",
    "uk eta criminal record",
  ],
  estimatedReadTime: 10,
  lastUpdated: "2025-12-12",
  sections: [
    {
      id: "introduction",
      title: "Understanding UK ETA Requirements",
      content: [
        "The UK Electronic Travel Authorization (ETA) is a mandatory digital travel permission for visa-exempt nationals visiting the United Kingdom. Costing £16 and valid for 2 years, the ETA allows eligible travelers to visit the UK for up to 6 months per trip without requiring a traditional visa.",
        "Understanding the requirements is crucial for a successful application, as the UK government has specific eligibility criteria regarding nationality, passport specifications, travel purposes, criminal history, and immigration background.",
        {
          type: "callout",
          title: "Key Point",
          text: "Meeting all requirements doesn't guarantee approval, but failing to meet any single requirement will result in automatic refusal.",
        },
      ],
    },
    {
      id: "nationality-requirements",
      title: "Eligible Nationalities: 85 Countries",
      content: [
        "The UK ETA is available to citizens of 85 eligible countries across four major regions. Your nationality, not your residence, determines eligibility.",
        {
          type: "list",
          items: [
            "Americas: Citizens from the United States, Canada, Mexico, Brazil, Argentina, Chile, and several Caribbean nations",
            "Europe: All EU member states (except Ireland), plus Switzerland, Norway, Iceland, and other European nations",
            "Asia-Pacific: Australia, New Zealand, Japan, South Korea, Singapore, Malaysia, and several Pacific island nations",
            "Middle East: Bahrain, Kuwait, Oman, Qatar, Saudi Arabia, and the United Arab Emirates",
          ],
        },
        {
          type: "callout",
          text: "Dual citizens can use the passport from their eligible nationality. British and Irish citizens do NOT need an ETA.",
        },
      ],
    },
    {
      id: "passport-requirements",
      title: "Passport Requirements",
      content: [
        "Your passport must be an e-passport (electronic passport) with specific validity criteria.",
        {
          type: "list",
          items: [
            "Biometric/E-Passport: Must contain an embedded electronic chip storing biometric information",
            "Validity: Must be valid for the entire duration of your stay in the UK",
            "Condition: The biometric chip must be functional and the passport must not be damaged",
          ],
        },
        {
          type: "warning",
          title: "Important",
          text: "Emergency travel documents and temporary passports are NOT eligible for ETA applications. If your passport is renewed after receiving an ETA, you must apply for a new ETA.",
        },
      ],
    },
    {
      id: "criminal-record",
      title: "Criminal Record Requirements",
      content: [
        "Criminal history is a critical factor in UK ETA eligibility. You cannot get UK ETA if you have:",
        {
          type: "list",
          items: [
            "ANY criminal conviction within the last 12 months",
            "ANY conviction that resulted in a prison sentence of 12 months or more (at any time)",
            "Multiple convictions that add up to 12 months or more",
            "Outstanding criminal charges or pending prosecution",
          ],
        },
        {
          type: "warning",
          title: "Disclosure Required",
          text: "You must truthfully disclose all criminal history. Providing false information is grounds for immediate refusal and potential ban from the UK.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What happens if I don't meet one of the UK ETA requirements?",
      answer:
        "If you don't meet any of the core requirements, your ETA application will be refused. The £16 fee is non-refundable. You may apply for a standard UK visitor visa instead.",
    },
    {
      question: "Do I need an e-passport or will a regular passport work?",
      answer:
        "You must have an e-passport (biometric passport) to apply for a UK ETA. Regular non-biometric passports are not eligible. Most passports issued after 2010 are e-passports.",
    },
    {
      question:
        "Can I apply for UK ETA with a criminal conviction from 15 years ago?",
      answer:
        "It depends on the sentence length. If your conviction resulted in a sentence of 12 months or more, you will be automatically refused regardless of how long ago it occurred.",
    },
  ],
  relatedGuides: [
    "what-is-uk-eta",
    "how-to-apply-uk-eta",
    "uk-eta-fees",
    "uk-eta-vs-visa",
  ],
};
