import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const canadaEtaFees: Guide = {
  slug: "canada-eta-fees",
  title: "Canada eTA Fees: Complete Cost Guide",
  description:
    "Complete guide to Canada eTA fees including the CAD $7 application cost, payment methods, refund policy, and comparison with Canada visa fees.",
  serviceType: ServiceType.CANADA_ETA,
  category: "process",
  pillarTopic: "application",
  clusterOf: "how-to-apply-canada-eta",
  priority: 0.85,
  keywords: [
    "canada eta fee",
    "canada eta cost",
    "eta application fee",
    "canada eta price",
    "eta payment methods",
  ],
  estimatedReadTime: 7,
  lastUpdated: "2026-01-01",
  sections: [
    {
      id: "fee-overview",
      title: "Canada eTA Fee Overview",
      content: [
        "The Canada Electronic Travel Authorisation (eTA) costs CAD $7 per person. This is a one-time, non-refundable fee that must be paid when you submit your application.",
        {
          type: "list",
          items: [
            "Application fee: CAD $7 per person",
            "One-time payment at submission",
            "Non-refundable regardless of outcome",
            "Same cost for all nationalities and ages eligible for eTA",
          ],
        },
      ],
    },
    {
      id: "what-fee-covers",
      title: "What the CAD $7 Fee Covers",
      content: [
        "For CAD $7, you receive a travel authorisation valid for up to 5 years or until your passport expires, whichever comes first. You can enter Canada multiple times, staying up to 6 months per visit.",
        {
          type: "callout",
          text: "Exceptional value: CAD $7 for up to 5 years of multiple entries versus hundreds of dollars for Canada visas.",
        },
      ],
    },
    {
      id: "payment-methods",
      title: "Accepted Payment Methods",
      content: [
        {
          type: "list",
          items: [
            "Credit cards (Visa, Mastercard, American Express)",
            "Debit cards",
            "Apple Pay",
            "Google Pay",
          ],
        },
      ],
    },
    {
      id: "refund-policy",
      title: "Non-Refundable Fee Policy",
      content: [
        "The CAD $7 Canada eTA application fee is completely non-refundable under all circumstances.",
        {
          type: "warning",
          title: "No Refunds",
          text: "No refund if application is refused, if you cancel travel plans, for duplicate applications, or for errors in application.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How much does a Canada eTA cost?",
      answer:
        "The Canada eTA costs CAD $7 per person, regardless of age or nationality.",
    },
    {
      question: "Is the eTA fee refundable if my application is rejected?",
      answer:
        "No, the CAD $7 fee is completely non-refundable under all circumstances.",
    },
    {
      question: "Do children pay less for a Canada eTA?",
      answer:
        "No, children pay the same CAD $7 fee as adults. There are no discounts for children or babies.",
    },
  ],
  relatedGuides: [
    "how-to-apply-canada-eta",
    "canada-eta-processing-time",
    "canada-eta-requirements",
    "canada-eta-vs-visa",
  ],
};
