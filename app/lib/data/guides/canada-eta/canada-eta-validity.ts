import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const canadaEtaValidity: Guide = {
  slug: "canada-eta-validity",
  title: "Canada eTA Validity Period: How Long is Canada eTA Valid?",
  description:
    "Learn how long a Canada eTA is valid, when it expires, and when you need to apply for a new one.",
  serviceType: ServiceType.CANADA_ETA,
  category: "main",
  pillarTopic: "status-management",
  clusterOf: "check-canada-eta-status",
  priority: 0.85,
  keywords: [
    "Canada eTA validity",
    "how long Canada eTA valid",
    "Canada eTA expiration",
    "Canada eTA duration",
  ],
  estimatedReadTime: 9,
  lastUpdated: "2026-01-01",
  sections: [
    {
      id: "introduction",
      title: "Understanding Canada eTA Validity",
      content: [
        "Knowing the validity period of your Canada eTA is essential for planning your trip to Canada.",
        {
          type: "callout",
          title: "Quick Answer",
          text: "An approved Canada eTA is valid for up to 5 years OR until your passport expires, whichever comes first. You can make multiple trips to Canada during this period, staying up to 6 months per visit.",
        },
      ],
    },
    {
      id: "five-year-validity",
      title: "The 5-Year Validity Rule",
      content: [
        "When approved, your Canada eTA is valid for up to five years from the approval date.",
        {
          type: "list",
          items: [
            "Validity starts on approval date, not travel date",
            "Multiple trips allowed during the validity period",
            "Each visit can be up to 6 months",
            "No limit on number of trips during validity",
          ],
        },
      ],
    },
    {
      id: "passport-expiration",
      title: "Passport Expiration Rule",
      content: [
        "Your eTA expires when your passport expires, even if less than 5 years have passed.",
        {
          type: "warning",
          title: "Critical Rule",
          text: "Your eTA expires on whichever date comes FIRST: (1) Five years from approval, OR (2) Your passport expiration date.",
        },
      ],
    },
    {
      id: "new-passport-requirement",
      title: "New Passport = New eTA Required",
      content: [
        "If you get a new passport, you MUST apply for a new Canada eTA. Your old eTA cannot be transferred.",
        {
          type: "warning",
          text: "Each eTA is electronically linked to a specific passport number and cannot be transferred to a new passport.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What happens if my Canada eTA expires while I am in Canada?",
      answer:
        "Your eTA only needs to be valid when you ENTER Canada. If it expires during your stay, you can complete your visit.",
    },
    {
      question: "Can I renew my Canada eTA before it expires?",
      answer:
        "There is no renewal process. You must submit a completely new application and pay the CAD $7 fee again.",
    },
  ],
  relatedGuides: [
    "what-is-canada-eta",
    "how-to-apply-canada-eta",
    "renew-canada-eta",
  ],
};
