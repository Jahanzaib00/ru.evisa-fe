import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const ukEtaVsVisa: Guide = {
  slug: "uk-eta-vs-visa",
  title: "UK ETA vs Visa: Complete Comparison Guide 2025",
  description:
    "Comprehensive comparison of UK ETA vs UK visa: cost, processing time, validity, and when you need a visa instead of ETA.",
  serviceType: ServiceType.UK_ETA,
  category: "comparison",
  pillarTopic: "comparison",
  isPillarPage: true,
  priority: 0.8,
  keywords: ["UK ETA vs visa", "UK ETA or visa", "difference UK ETA visa"],
  estimatedReadTime: 12,
  lastUpdated: "2025-12-12",
  sections: [
    {
      id: "key-differences",
      title: "Key Differences at a Glance",
      content: [
        {
          type: "list",
          items: [
            "Cost: UK ETA £16 vs UK visa £127-£1,059",
            "Processing: ETA minutes-hours vs Visa 3 weeks",
            "Application: ETA 100% online vs Visa requires biometric appointment",
            "Validity: ETA 2 years vs Visa 6 months-10 years",
          ],
        },
      ],
    },
    {
      id: "when-need-visa",
      title: "When You Need a Visa Instead",
      content: [
        {
          type: "list",
          items: [
            "You're from a visa-required country",
            "You want to work in the UK",
            "You need to study for more than 6 months",
            "Your ETA application was refused",
            "You have a criminal record or immigration violations",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Can I apply for both UK ETA and visa?",
      answer:
        "No, you typically only need one. If you're from an ETA-eligible country traveling for tourism/business, use ETA.",
    },
    {
      question: "Is it easier to get UK ETA or visa?",
      answer:
        "UK ETA is significantly easier, faster, and cheaper if you're eligible. High approval rate, no appointment needed, approved in minutes.",
    },
  ],
  relatedGuides: ["what-is-uk-eta", "uk-eta-requirements", "uk-eta-fees"],
};
