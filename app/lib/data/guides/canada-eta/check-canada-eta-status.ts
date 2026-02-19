import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const checkCanadaEtaStatus: Guide = {
  slug: "check-canada-eta-status",
  title: "How to Check Canada eTA Status Online - Complete Guide",
  description:
    "Check your Canada eTA application status online. Learn how to verify approval, recover your eTA number, and understand decision types.",
  serviceType: ServiceType.CANADA_ETA,
  category: "status",
  pillarTopic: "status-management",
  isPillarPage: true,
  priority: 0.8,
  keywords: [
    "check Canada eTA status",
    "Canada eTA status check",
    "track Canada eTA application",
    "Canada eTA lookup",
    "verify Canada eTA approval",
  ],
  estimatedReadTime: 9,
  lastUpdated: "2026-01-01",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      content: [
        "Checking your Canada eTA status is important to confirm your travel authorization has been approved before boarding your flight to Canada. You can verify your eTA status online through the official Government of Canada website.",
        {
          type: "callout",
          title: "Quick Access",
          text: "You can check your Canada eTA status online 24/7 through the official IRCC portal. Status checks are free and provide real-time information.",
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
            "Visit the official Government of Canada eTA status page",
            "Select 'Check your eTA status' or 'Check your application status'",
            "Enter your passport number",
            "Enter your passport country of issue",
            "Enter your passport expiry date",
            "Enter your date of birth",
            "Provide your application number (if available)",
            "Submit to view your status",
          ],
        },
      ],
    },
    {
      id: "decision-types",
      title: "Understanding Decision Types",
      content: [
        "Your Canada eTA application may result in one of the following outcomes:",
        {
          type: "list",
          items: [
            "Approved: Your eTA is linked electronically to your passport and you can travel to Canada by air",
            "Pending: Your application is still being processed",
            "Refused: You are not approved for an eTA and may need to apply for a visitor visa instead",
          ],
        },
      ],
    },
    {
      id: "processing-times",
      title: "Processing Times",
      content: [
        "Most Canada eTA applications are approved within minutes of submission.",
        "However, some applications may take several days if additional documents or background checks are required.",
      ],
    },
  ],
  faqs: [
    {
      question: "How long does it take to get a Canada eTA decision?",
      answer:
        "Most applications are approved within minutes. However, some may take several days if additional review is required.",
    },
    {
      question:
        "Can I check my Canada eTA status without my application number?",
      answer:
        "Yes. In most cases, you can check your eTA status using your passport details even if you do not have your application number.",
    },
    {
      question: "Do I need to print my Canada eTA?",
      answer:
        "No. The Canada eTA is electronically linked to your passport. Airlines verify it automatically when you check in for your flight.",
    },
  ],
  relatedGuides: [
    "what-is-canada-eta",
    "how-to-apply-canada-eta",
    "canada-eta-processing-time",
  ],
};
