import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const passportRequirementsCanadaEta: Guide = {
  slug: "passport-requirements-canada-eta",
  title: "Canada eTA Passport Requirements: Complete Guide",
  description:
    "Essential passport requirements for Canada eTA including validity rules, eligible passport types, and biometric specifications.",
  serviceType: ServiceType.CANADA_ETA,
  category: "requirements",
  pillarTopic: "service-overview",
  clusterOf: "what-is-canada-eta",
  priority: 0.75,
  keywords: [
    "Canada eTA passport requirements",
    "passport validity Canada eTA",
    "biometric passport Canada eTA",
    "Canada eTA passport rules",
  ],
  estimatedReadTime: 8,
  lastUpdated: "2026-01-01",
  sections: [
    {
      id: "passport-type-requirement",
      title: "Eligible Passport Types",
      content: [
        "To apply for a Canada eTA, you must hold a valid ordinary passport from an eTA-eligible country.",
        {
          type: "callout",
          title: "Important",
          text: "Your eTA is electronically linked to the passport used during application. If you renew or replace your passport, you must apply for a new eTA.",
        },
        {
          type: "list",
          items: [
            "Ordinary (regular) passport",
            "Must be machine-readable",
            "Must be issued by an eTA-eligible country",
          ],
        },
      ],
    },
    {
      id: "biometric-passport",
      title: "Biometric Passport (E-Passport)",
      content: [
        "Most travelers use biometric (e-passports), which contain an embedded electronic chip with your personal data.",
        {
          type: "callout",
          title: "What is an E-Passport?",
          text: "An e-passport contains an electronic chip storing your biometric information. While not always explicitly mandatory, most modern passports issued today are biometric and fully compatible with Canada’s entry systems.",
        },
      ],
    },
    {
      id: "validity-requirements",
      title: "Passport Validity Requirements",
      content: [
        "Your passport must be valid at the time of travel to Canada.",
        {
          type: "list",
          items: [
            "Valid on the date you enter Canada",
            "Must remain valid for the duration of your stay",
            "If your passport expires, your eTA becomes invalid",
          ],
        },
        {
          type: "callout",
          text: "Canada does not impose a standard 6-month passport validity rule for eTA travelers. However, airlines may have their own policies.",
        },
      ],
    },
    {
      id: "special-passports",
      title: "Emergency and Special Passports",
      content: [
        {
          type: "list",
          items: [
            "Emergency or temporary passports may not be eligible for eTA",
            "Refugee travel documents typically require a visa instead of an eTA",
            "Diplomatic and official passports may have separate entry rules",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Do I need a biometric passport for Canada eTA?",
      answer:
        "Most modern passports are biometric and compatible with Canada’s systems. You must have a machine-readable passport from an eligible country.",
    },
    {
      question: "Can I transfer my Canada eTA to a new passport?",
      answer:
        "No. Your eTA is electronically linked to the passport used in your application. If you obtain a new passport, you must apply for a new eTA.",
    },
    {
      question: "Can I travel if my passport expires soon?",
      answer:
        "Your passport must be valid for your entire stay in Canada. If it expires before or during travel, you may be denied boarding.",
    },
  ],
  relatedGuides: ["canada-eta-requirements", "how-to-apply-canada-eta"],
};
