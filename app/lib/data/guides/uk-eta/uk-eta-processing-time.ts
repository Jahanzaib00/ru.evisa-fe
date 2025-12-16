import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const ukEtaProcessingTime: Guide = {
  slug: "uk-eta-processing-time",
  title: "UK ETA Processing Time: How Long Does Approval Take? [2025]",
  description:
    "UK ETA processing usually takes minutes, but can take up to 3 working days. Learn factors affecting delays and when to apply.",
  serviceType: ServiceType.UK_ETA,
  category: "process",
  pillarTopic: "application",
  clusterOf: "how-to-apply-uk-eta",
  priority: 0.8,
  keywords: [
    "UK ETA processing time",
    "how long UK ETA takes",
    "UK ETA approval time",
  ],
  estimatedReadTime: 7,
  lastUpdated: "2025-12-12",
  sections: [
    {
      id: "standard-processing",
      title: "Standard Processing Time",
      content: [
        "The official UK ETA processing time is up to 3 working days from submission.",
        {
          type: "callout",
          text: "Most applications receive instant decisions within minutes. The 3-day timeframe is the maximum.",
        },
      ],
    },
    {
      id: "instant-decisions",
      title: "Most Get Instant Decisions",
      content: [
        "The vast majority of UK ETA applications receive instant approval - typically within 5-15 minutes.",
        {
          type: "list",
          items: [
            "Fully automated system processes applications electronically",
            "Real-time security checks against databases",
            "If all checks pass, approval is automatic",
          ],
        },
      ],
    },
    {
      id: "when-to-apply",
      title: "When to Apply Before Travel",
      content: [
        {
          type: "list",
          items: [
            "Recommended: At least 1 week before departure",
            "Minimum: 3 full working days before travel",
            "Apply before booking flights if possible",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How long does UK ETA take to process?",
      answer:
        "Usually within minutes, but official timeframe is up to 3 working days.",
    },
    {
      question: "Can I get my UK ETA faster if I pay more?",
      answer:
        "No, there is no expedited processing option regardless of payment.",
    },
  ],
  relatedGuides: ["how-to-apply-uk-eta", "check-uk-eta-status"],
};
