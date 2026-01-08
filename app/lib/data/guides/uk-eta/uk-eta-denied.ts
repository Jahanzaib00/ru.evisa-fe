import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const ukEtaDenied: Guide = {
  slug: "uk-eta-denied",
  title: "UK ETA Denied: What to Do When Your Application is Refused",
  description:
    "Common reasons for UK ETA refusal and what to do if your ETA is rejected.",
  serviceType: ServiceType.UK_ETA,
  category: "questions",
  pillarTopic: "troubleshooting",
  isPillarPage: true,
  priority: 0.75,
  keywords: ["UK ETA denied", "UK ETA refused", "UK ETA rejection"],
  estimatedReadTime: 12,
  lastUpdated: "2026-01-01",
  sections: [
    {
      id: "understanding-refusal",
      title: "Understanding UK ETA Refusal",
      content: [
        "When your UK ETA is refused, you cannot travel using the ETA system. However, you still have options for UK travel.",
        {
          type: "callout",
          text: "ETA refusal is NOT the same as a visa refusal. Many people refused ETA successfully obtain Standard Visitor visas.",
        },
      ],
    },
    {
      id: "common-reasons",
      title: "Common Refusal Reasons",
      content: [
        {
          type: "list",
          items: [
            "Criminal conviction within last 12 months",
            "Criminal sentence of 12+ months at any time",
            "Previous immigration violations",
            "Previous deportation from UK",
            "Previous use of deception in UK applications",
          ],
        },
      ],
    },
    {
      id: "what-to-do",
      title: "What to Do If Denied",
      content: [
        {
          type: "list",
          items: [
            "Don't panic - you can still apply for a visa",
            "Do NOT attempt to travel with refused ETA",
            "Review why you were likely refused",
            "Apply for Standard Visitor visa instead",
          ],
        },
        {
          type: "warning",
          title: "No Appeal Process",
          text: "There is no appeal process for ETA refusals. Your only option is to apply for a Standard Visitor visa.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Why was my UK ETA refused?",
      answer:
        "Common reasons: criminal conviction within 12 months, sentences of 12+ months, previous immigration violations, or deportation from UK.",
    },
    {
      question: "Can I appeal a UK ETA refusal?",
      answer:
        "No, there is no appeal process. You must apply for a Standard Visitor visa instead.",
    },
    {
      question: "Can I reapply for UK ETA after refusal?",
      answer:
        "Only if the refusal was due to a correctable error. Otherwise, you must apply for a visa.",
    },
  ],
  relatedGuides: ["uk-eta-requirements", "uk-eta-vs-visa"],
};
