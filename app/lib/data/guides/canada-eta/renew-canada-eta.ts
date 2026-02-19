import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const renewCanadaEta: Guide = {
  slug: "renew-canada-eta",
  title: "How to Renew Your Canada eTA: Complete Guide",
  description:
    "Learn what to do when your Canada eTA expires or when you receive a new passport.",
  serviceType: ServiceType.CANADA_ETA,
  category: "renewal",
  pillarTopic: "status-management",
  clusterOf: "check-canada-eta-status",
  priority: 0.75,
  keywords: [
    "canada eta renewal",
    "renew canada eta",
    "canada eta expired",
    "canada eta new passport",
  ],
  estimatedReadTime: 6,
  lastUpdated: "2026-01-01",
  sections: [
    {
      id: "understanding-renewal",
      title: "Understanding Canada eTA Renewal",
      content: [
        "There is no formal renewal process for a Canada eTA. When your eTA expires, you must submit a completely new application and pay the CAD $7 fee again.",
        {
          type: "callout",
          text: "A Canada eTA is generally valid for up to 5 years from approval or until your passport expires, whichever comes first.",
        },
      ],
    },
    {
      id: "when-need-new",
      title: "When You Need a New eTA",
      content: [
        {
          type: "list",
          items: [
            "After 5 years: Your eTA automatically expires",
            "New passport: If you receive a new passport, your existing eTA becomes invalid immediately",
            "Passport expiry: If your passport expires before 5 years, your eTA expires with it",
            "Change of personal details: In some cases, you may need a new eTA if key information changes",
          ],
        },
      ],
    },
    {
      id: "how-to-reapply",
      title: "How to Apply Again",
      content: [
        "To obtain a new Canada eTA:",
        {
          type: "list",
          items: [
            "Visit the official Government of Canada eTA website",
            "Complete a new online application form",
            "Enter your new passport details (if applicable)",
            "Pay the CAD $7 processing fee",
            "Receive confirmation by email",
          ],
        },
        {
          type: "warning",
          title: "Important",
          text: "You cannot transfer an existing eTA to a new passport. A fresh application is always required.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Can I renew my Canada eTA before it expires?",
      answer:
        "There is no renewal option. You may submit a new application at any time, but the new validity period begins from the new approval date.",
    },
    {
      question: "Do I need a new eTA if I get a new passport?",
      answer:
        "Yes. Your Canada eTA is electronically linked to the passport used during your application. A new passport requires a new eTA.",
    },
    {
      question: "How long is a Canada eTA valid?",
      answer:
        "A Canada eTA is typically valid for up to 5 years or until your passport expires, whichever comes first.",
    },
  ],
  relatedGuides: [
    "what-is-canada-eta",
    "canada-eta-validity",
    "check-canada-eta-status",
  ],
};
