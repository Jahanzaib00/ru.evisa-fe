import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const howToApplyUkEta: Guide = {
  slug: "how-to-apply-uk-eta",
  title: "How to Apply for UK ETA: Complete Step-by-Step Guide 2025",
  description:
    "Complete step-by-step instructions for applying for UK ETA online or via the mobile app. Learn what information you need and what to expect during the approval process.",
  serviceType: ServiceType.UK_ETA,
  category: "process",
  pillarTopic: "application",
  isPillarPage: true,
  priority: 0.95,
  keywords: [
    "how to apply UK ETA",
    "UK ETA application guide",
    "apply for UK ETA online",
    "UK ETA app",
    "UK ETA application steps",
  ],
  estimatedReadTime: 12,
  lastUpdated: "2025-12-12",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      content: [
        "Applying for UK ETA is straightforward and can be completed in 10-15 minutes using the UK ETA mobile app or the gov.uk website. Most applications receive a decision within minutes.",
        {
          type: "callout",
          title: "Official Channels Only",
          text: "Only apply through official UK government channels: the UK ETA mobile app or gov.uk/eta. Beware of third-party websites charging inflated fees beyond the official £16 cost.",
        },
      ],
    },
    {
      id: "before-you-start",
      title: "Before You Start: What You Need",
      content: [
        "Gather these essential items before beginning your application:",
        {
          type: "list",
          items: [
            "Valid passport from an eligible country",
            "Email address for receiving decision",
            "Payment method: Credit or debit card (£16 fee)",
            "Digital photo of passport biodata page",
            "Smartphone with camera (for app) or device to upload photos",
          ],
        },
        {
          type: "callout",
          text: "You do NOT need specific travel plans to apply. Your ETA is valid for multiple trips over 2 years.",
        },
      ],
    },
    {
      id: "application-steps",
      title: "Step-by-Step Application Process",
      content: [
        "Step 1: Download the UK ETA app or visit gov.uk/eta",
        "Step 2: Scan or upload your passport biodata page",
        "Step 3: Take or upload your face photo",
        "Step 4: Enter your personal details",
        "Step 5: Answer suitability questions honestly",
        "Step 6: Review your application carefully",
        "Step 7: Pay the £16 fee",
        "Step 8: Submit and receive confirmation",
        {
          type: "warning",
          title: "Critical",
          text: "Answer all questions honestly. Providing false information will result in refusal and potential ban from the UK.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How long does the UK ETA application take to complete?",
      answer:
        "The application typically takes 10-15 minutes if you have all required information ready. Most applications receive a decision within minutes.",
    },
    {
      question: "Can I apply for UK ETA without the mobile app?",
      answer:
        "Yes, you can apply via the gov.uk/eta website using any web browser. However, the mobile app is recommended for a more streamlined experience.",
    },
    {
      question: "Do I need to print my UK ETA approval?",
      answer:
        "No, you do NOT need to print your ETA approval. It's electronically linked to your passport and verified automatically at the border.",
    },
  ],
  relatedGuides: [
    "what-is-uk-eta",
    "uk-eta-requirements",
    "uk-eta-fees",
    "check-uk-eta-status",
  ],
};
