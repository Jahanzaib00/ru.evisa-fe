import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const checkUkEtaStatus: Guide = {
  slug: "check-uk-eta-status",
  title: "How to Check UK ETA Status Online - Complete Guide 2025",
  description:
    "Check your UK ETA application status online at gov.uk/check-eta. Learn how to track your application and understand decision types.",
  serviceType: ServiceType.UK_ETA,
  category: "status",
  pillarTopic: "status-management",
  isPillarPage: true,
  priority: 0.8,
  keywords: [
    "check UK ETA status",
    "UK ETA status check",
    "track UK ETA application",
    "UK ETA lookup",
  ],
  estimatedReadTime: 9,
  lastUpdated: "2025-12-12",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      content: [
        "Checking your UK ETA status is essential to confirm your application has been approved before traveling. You can check your status at any time using the official gov.uk website.",
        {
          type: "callout",
          title: "Quick Access",
          text: "Check your UK ETA status 24/7 at www.gov.uk/check-eta. The status check is free and provides real-time information.",
        },
      ],
    },
    {
      id: "how-to-check",
      title: "How to Check Your Status",
      content: [
        {
          type: "list",
          items: [
            "Go to gov.uk/check-eta",
            "Click 'Start now'",
            "Enter your 16-digit reference number",
            "Enter your date of birth",
            "Enter your passport number",
            "Click 'Check status'",
          ],
        },
      ],
    },
    {
      id: "decision-types",
      title: "Understanding Decision Types",
      content: [
        "Your application can result in three decisions:",
        {
          type: "list",
          items: [
            "Approved: You can travel to the UK",
            "Refused: You must apply for a visa instead",
            "Rejected: Technical issue, you can reapply",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How long does it take to get a UK ETA decision?",
      answer:
        "Most applications are processed within 3 working days, with many receiving decisions within hours.",
    },
    {
      question: "Can I check my UK ETA status without my reference number?",
      answer:
        "No, you must have your 16-digit reference number to check status online.",
    },
  ],
  relatedGuides: [
    "what-is-uk-eta",
    "how-to-apply-uk-eta",
    "uk-eta-processing-time",
  ],
};
