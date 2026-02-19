import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const canadaEtaVsVisa: Guide = {
  slug: "canada-eta-vs-visa",
  title: "Canada eTA vs Visitor Visa: Complete Comparison Guide",
  description:
    "Comprehensive comparison of Canada eTA vs Canadian visitor visa: cost, processing time, validity, and when you need a visa instead of eTA.",
  serviceType: ServiceType.CANADA_ETA,
  category: "comparison",
  pillarTopic: "comparison",
  isPillarPage: true,
  priority: 0.8,
  keywords: [
    "Canada eTA vs visa",
    "Canada eTA or visa",
    "difference Canada eTA visa",
  ],
  estimatedReadTime: 12,
  lastUpdated: "2026-01-01",
  sections: [
    {
      id: "key-differences",
      title: "Key Differences at a Glance",
      content: [
        {
          type: "list",
          items: [
            "Cost: Canada eTA CAD $7 vs Visitor Visa CAD $100+",
            "Processing: eTA minutes-hours vs Visa 2-4 weeks or more",
            "Application: eTA 100% online vs Visa requires document submission and possibly biometrics",
            "Validity: eTA up to 5 years or until passport expiration vs Visa 6 months–10 years depending on type",
          ],
        },
      ],
    },
    {
      id: "when-need-visa",
      title: "When You Need a Visitor Visa Instead",
      content: [
        {
          type: "list",
          items: [
            "You're from a visa-required country",
            "You want to work or study in Canada for more than 6 months",
            "Your eTA application was refused",
            "You have a criminal record or prior immigration violations",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Can I apply for both Canada eTA and visitor visa?",
      answer:
        "No, you typically only need one. If you're from a visa-exempt country traveling for tourism, business, or transit, use an eTA. Otherwise, apply for a visitor visa.",
    },
    {
      question: "Is it easier to get a Canada eTA or visitor visa?",
      answer:
        "Canada eTA is faster, cheaper, and simpler if you're eligible. Approved in minutes to hours online, with no biometrics required.",
    },
  ],
  relatedGuides: [
    "what-is-canada-eta",
    "canada-eta-requirements",
    "canada-eta-fees",
  ],
};
