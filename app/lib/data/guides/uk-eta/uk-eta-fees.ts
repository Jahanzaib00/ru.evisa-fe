import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const ukEtaFees: Guide = {
  slug: "uk-eta-fees",
  title: "UK ETA Fees: Complete Cost Guide",
  description:
    "Complete guide to UK ETA fees including the £16 application cost, payment methods, refund policy, and comparison with UK visa fees.",
  serviceType: ServiceType.UK_ETA,
  category: "process",
  pillarTopic: "application",
  clusterOf: "how-to-apply-uk-eta",
  priority: 0.85,
  keywords: [
    "uk eta fee",
    "uk eta cost",
    "eta application fee",
    "uk eta price",
    "eta payment methods",
  ],
  estimatedReadTime: 7,
  lastUpdated: "2026-01-01",
  sections: [
    {
      id: "fee-overview",
      title: "UK ETA Fee Overview",
      content: [
        "The UK Electronic Travel Authorisation costs £16 per person. This is a one-time, non-refundable fee that must be paid when you submit your application.",
        {
          type: "list",
          items: [
            "Application fee: £16 per person",
            "One-time payment at submission",
            "Non-refundable regardless of outcome",
            "Same cost for all nationalities and ages",
          ],
        },
      ],
    },
    {
      id: "what-fee-covers",
      title: "What the £16 Fee Covers",
      content: [
        "For £16, you receive a travel authorisation valid for 2 years with unlimited entries to the UK, staying up to 6 months per visit.",
        {
          type: "callout",
          text: "Exceptional value: £16 for 2 years of unlimited UK travel versus £127+ for UK visas.",
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
        "The £16 UK ETA application fee is completely non-refundable under all circumstances.",
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
      question: "How much does a UK ETA cost?",
      answer:
        "The UK ETA costs £16 per person, regardless of age or nationality.",
    },
    {
      question: "Is the UK ETA fee refundable if my application is rejected?",
      answer:
        "No, the £16 fee is completely non-refundable under all circumstances.",
    },
    {
      question: "Do children pay less for a UK ETA?",
      answer:
        "No, children pay the same £16 fee as adults. There are no discounts for children or babies.",
    },
  ],
  relatedGuides: [
    "how-to-apply-uk-eta",
    "uk-eta-processing-time",
    "uk-eta-requirements",
    "uk-eta-vs-visa",
  ],
};
