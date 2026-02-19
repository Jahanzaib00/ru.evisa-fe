import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const canadaEtaDenied: Guide = {
  slug: "canada-eta-denied",
  title: "Canada eTA Denied: What to Do If Your Application Is Refused",
  description:
    "Common reasons for Canada eTA refusal and what to do if your eTA is denied.",
  serviceType: ServiceType.CANADA_ETA,
  category: "questions",
  pillarTopic: "troubleshooting",
  isPillarPage: true,
  priority: 0.75,
  keywords: [
    "Canada eTA denied",
    "Canada eTA refused",
    "Canada eTA rejection",
    "eTA inadmissible Canada",
  ],
  estimatedReadTime: 12,
  lastUpdated: "2026-01-01",
  sections: [
    {
      id: "understanding-refusal",
      title: "Understanding Canada eTA Refusal",
      content: [
        "If your Canada eTA is refused, you cannot travel to Canada by air using the eTA system. However, you may still be eligible to apply for a visitor visa instead.",
        {
          type: "callout",
          text: "An eTA refusal is not automatically the same as a visa refusal. Many travelers who are refused an eTA may still qualify for a Temporary Resident Visa (visitor visa).",
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
            "Criminal history (including DUI or similar offenses)",
            "Previous immigration violations in Canada or other countries",
            "Providing incorrect or inconsistent information",
            "Security or background concerns",
            "Health-related inadmissibility issues",
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
            "Carefully review the refusal email for the stated reason",
            "Correct any factual errors if applicable",
            "Do NOT attempt to travel without valid authorization",
            "Apply for a Temporary Resident Visa (visitor visa) if eligible",
          ],
        },
        {
          type: "warning",
          title: "No Formal Appeal Process",
          text: "There is no formal appeal process for Canada eTA refusals. If you believe there was an error, you may submit a new application or apply for a visitor visa.",
        },
      ],
    },
    {
      id: "reapplying",
      title: "Can You Reapply?",
      content: [
        "You may submit a new eTA application if:",
        {
          type: "list",
          items: [
            "You made a mistake in your original application",
            "Your circumstances have changed",
            "You can now provide accurate and complete information",
          ],
        },
        "If your refusal was based on criminality or inadmissibility, you will likely need to apply for a visitor visa instead.",
      ],
    },
  ],
  faqs: [
    {
      question: "Why was my Canada eTA refused?",
      answer:
        "Common reasons include criminal history (such as DUI), past immigration violations, security concerns, medical inadmissibility, or providing incorrect information.",
    },
    {
      question: "Can I appeal a Canada eTA refusal?",
      answer:
        "No. There is no formal appeal process for eTA refusals. You may reapply if the issue was an error or apply for a Temporary Resident Visa instead.",
    },
    {
      question: "Can I travel to Canada if my eTA was denied?",
      answer:
        "No. You must obtain valid authorization before traveling. If refused, you should apply for a visitor visa before making travel arrangements.",
    },
  ],
  relatedGuides: [
    "canada-eta-requirements",
    "canada-eta-vs-visa",
    "check-canada-eta-status",
  ],
};
