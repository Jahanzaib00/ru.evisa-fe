import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const renewUkEta: Guide = {
  slug: "renew-uk-eta",
  title: "How to Renew Your UK ETA: Complete Guide",
  description:
    "Learn how to renew your UK ETA when it expires or when you get a new passport.",
  serviceType: ServiceType.UK_ETA,
  category: "renewal",
  pillarTopic: "status-management",
  clusterOf: "check-uk-eta-status",
  priority: 0.75,
  keywords: ["uk eta renewal", "renew uk eta", "eta expired"],
  estimatedReadTime: 6,
  lastUpdated: "2025-12-12",
  sections: [
    {
      id: "understanding-renewal",
      title: "Understanding UK ETA Renewal",
      content: [
        "There is no formal renewal process for UK ETA. When your ETA expires, you must submit a completely fresh application and pay the full £16 fee again.",
        {
          type: "callout",
          text: "Your ETA is valid for 2 years from approval or until your passport expires, whichever comes first.",
        },
      ],
    },
    {
      id: "when-need-new",
      title: "When You Need a New ETA",
      content: [
        {
          type: "list",
          items: [
            "After 2 years: ETA automatically expires",
            "New passport: If you get a new passport, your ETA becomes invalid immediately",
            "Passport expiry: If passport expires before 2 years, ETA expires with it",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Can I renew my UK ETA before it expires?",
      answer:
        "There is no renewal process. You can apply for a new ETA anytime, but the new 2-year validity starts from the new approval date.",
    },
    {
      question: "Do I need a new ETA if I get a new passport?",
      answer:
        "Yes, your ETA is linked to your passport number. If you get a new passport, you must apply for a new ETA.",
    },
  ],
  relatedGuides: ["what-is-uk-eta", "uk-eta-validity"],
};
