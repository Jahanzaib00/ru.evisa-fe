import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const howToApplyCanadaEta: Guide = {
  slug: "how-to-apply-canada-eta",
  title: "How to Apply for Canada eTA: Complete Step-by-Step Guide",
  description:
    "Complete step-by-step instructions for applying for a Canada eTA online. Learn what information you need, how to pay the fee, and what to expect during the approval process.",
  serviceType: ServiceType.CANADA_ETA,
  category: "process",
  pillarTopic: "application",
  isPillarPage: true,
  priority: 0.95,
  keywords: [
    "how to apply Canada eTA",
    "Canada eTA application guide",
    "apply for Canada eTA online",
    "Canada eTA application steps",
    "Canada eTA form",
  ],
  estimatedReadTime: 12,
  lastUpdated: "2026-01-01",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      content: [
        "Applying for a Canada eTA (Electronic Travel Authorization) is a simple online process that usually takes about 10–15 minutes to complete. Most applicants receive approval within minutes of submitting their application.",
        {
          type: "callout",
          title: "Official Channel Only",
          text: "Apply only through the official Government of Canada website. The official Canada eTA fee is CAD $7. Beware of third-party websites charging significantly higher service fees.",
        },
      ],
    },
    {
      id: "before-you-start",
      title: "Before You Start: What You Need",
      content: [
        "Gather these essential items before beginning your Canada eTA application:",
        {
          type: "list",
          items: [
            "Valid passport from an eTA-eligible country",
            "Email address (to receive your eTA confirmation)",
            "Credit or debit card (CAD $7 fee)",
            "Personal details (address, employment information if requested)",
            "Travel details (optional but recommended)",
          ],
        },
        {
          type: "callout",
          text: "Your approved eTA is electronically linked to your passport and is generally valid for up to 5 years or until your passport expires, whichever comes first.",
        },
      ],
    },
    {
      id: "application-steps",
      title: "Step-by-Step Application Process",
      content: [
        "Step 1: Visit the official Government of Canada eTA application page",
        "Step 2: Review eligibility requirements",
        "Step 3: Enter your passport details exactly as shown",
        "Step 4: Provide your personal and contact information",
        "Step 5: Answer background and admissibility questions honestly",
        "Step 6: Review your application carefully for errors",
        "Step 7: Pay the CAD $7 processing fee",
        "Step 8: Submit your application and receive confirmation by email",
        {
          type: "warning",
          title: "Important",
          text: "All information must match your passport exactly. Errors in passport number or personal details may result in delays or denial.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How long does the Canada eTA application take to complete?",
      answer:
        "The application typically takes 10–15 minutes if you have all required information ready. Most applicants receive approval within minutes.",
    },
    {
      question: "Can I apply for Canada eTA on a mobile phone?",
      answer:
        "Yes. The Canada eTA application is completed online through a web browser and can be submitted using a computer, tablet, or smartphone.",
    },
    {
      question: "Do I need to print my Canada eTA approval?",
      answer:
        "No. The Canada eTA is electronically linked to your passport. Airlines verify your authorization automatically when you check in.",
    },
  ],
  relatedGuides: [
    "what-is-canada-eta",
    "canada-eta-requirements",
    "canada-eta-fees",
    "check-canada-eta-status",
  ],
};
