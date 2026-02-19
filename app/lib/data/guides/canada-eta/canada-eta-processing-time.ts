import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const canadaEtaProcessingTime: Guide = {
  slug: "canada-eta-processing-time",
  title: "Canada eTA Processing Time: How Long Does Approval Take?",
  description:
    "Canada eTA processing usually takes minutes, but some applications may take several days. Learn what affects processing times and when to apply.",
  serviceType: ServiceType.CANADA_ETA,
  category: "process",
  pillarTopic: "application",
  clusterOf: "how-to-apply-canada-eta",
  priority: 0.8,
  keywords: [
    "Canada eTA processing time",
    "how long Canada eTA takes",
    "Canada eTA approval time",
    "Canada eTA delay",
  ],
  estimatedReadTime: 7,
  lastUpdated: "2026-01-01",
  sections: [
    {
      id: "standard-processing",
      title: "Standard Processing Time",
      content: [
        "Most Canada eTA applications are processed within minutes of submission.",
        {
          type: "callout",
          text: "While many applicants receive instant approval, some applications may take several days if additional review is required.",
        },
      ],
    },
    {
      id: "instant-decisions",
      title: "Most Applications Are Approved Quickly",
      content: [
        "The majority of Canada eTA applications receive approval within minutes through an automated system.",
        {
          type: "list",
          items: [
            "Automated electronic processing",
            "Real-time checks against immigration and security databases",
            "Instant email confirmation if approved",
          ],
        },
      ],
    },
    {
      id: "possible-delays",
      title: "When Processing May Take Longer",
      content: [
        {
          type: "list",
          items: [
            "Background or security screening requires manual review",
            "Previous immigration history needs verification",
            "Criminal history disclosures (including DUI)",
            "Incomplete or inconsistent information",
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
            "Recommended: Apply as soon as you book your flight",
            "At minimum: Several days before departure",
            "Do not travel without confirmed eTA approval",
          ],
        },
        {
          type: "callout",
          text: "You must receive your eTA approval before boarding your flight to Canada. Airlines will verify your authorization electronically.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How long does Canada eTA take to process?",
      answer:
        "Most applications are approved within minutes. However, some may take several days if additional review is required.",
    },
    {
      question: "Can I pay extra for faster Canada eTA processing?",
      answer:
        "No. There is no expedited or priority processing option for Canada eTA applications.",
    },
    {
      question: "Will I receive an email when my eTA is approved?",
      answer:
        "Yes. You will receive an email confirmation once your Canada eTA is approved or if further information is required.",
    },
  ],
  relatedGuides: ["how-to-apply-canada-eta", "check-canada-eta-status"],
};
