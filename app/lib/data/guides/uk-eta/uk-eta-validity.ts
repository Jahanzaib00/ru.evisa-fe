import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const ukEtaValidity: Guide = {
  slug: "uk-eta-validity",
  title: "UK ETA Validity Period: How Long is UK ETA Valid?",
  description:
    "Learn how long UK ETA is valid, when it expires, and when you need to apply for a new one.",
  serviceType: ServiceType.UK_ETA,
  category: "main",
  pillarTopic: "status-management",
  clusterOf: "check-uk-eta-status",
  priority: 0.85,
  keywords: [
    "UK ETA validity",
    "how long UK ETA valid",
    "UK ETA expiration",
    "UK ETA duration",
  ],
  estimatedReadTime: 9,
  lastUpdated: "2026-01-01",
  sections: [
    {
      id: "introduction",
      title: "Understanding UK ETA Validity",
      content: [
        "Understanding how long your UK ETA is valid is essential for planning your UK travel.",
        {
          type: "callout",
          title: "Quick Answer",
          text: "An approved UK ETA is valid for 2 years OR until your passport expires, whichever comes first. You can make unlimited trips during this period.",
        },
      ],
    },
    {
      id: "two-year-validity",
      title: "The 2-Year Validity Rule",
      content: [
        "When approved, your UK ETA is valid for two years from the approval date.",
        {
          type: "list",
          items: [
            "Validity starts on approval date, not travel date",
            "Multiple trips allowed during 2 years",
            "Each visit can be up to 6 months",
            "No limit on number of trips",
          ],
        },
      ],
    },
    {
      id: "passport-expiration",
      title: "Passport Expiration Rule",
      content: [
        "Your ETA expires when your passport expires, even if less than 2 years have passed.",
        {
          type: "warning",
          title: "Critical Rule",
          text: "Your ETA expires on whichever date comes FIRST: (1) Two years from approval, OR (2) Your passport expiration date.",
        },
      ],
    },
    {
      id: "new-passport-requirement",
      title: "New Passport = New ETA Required",
      content: [
        "If you get a new passport, you MUST apply for a new ETA. Your old ETA cannot be transferred.",
        {
          type: "warning",
          text: "Each ETA is electronically linked to a specific passport number and cannot be transferred to a new passport.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What happens if my UK ETA expires while I am in the UK?",
      answer:
        "This is allowed. Your ETA only needs to be valid when you ENTER the UK. If it expires during your stay, you can complete your visit.",
    },
    {
      question: "Can I renew my UK ETA before it expires?",
      answer:
        "There is no renewal process. You must submit a completely new application and pay the £16 fee again.",
    },
  ],
  relatedGuides: ["what-is-uk-eta", "how-to-apply-uk-eta", "renew-uk-eta"],
};
