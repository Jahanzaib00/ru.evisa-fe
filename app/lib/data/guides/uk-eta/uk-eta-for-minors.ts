import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const ukEtaForMinors: Guide = {
  slug: "uk-eta-for-minors",
  title: "UK ETA for Children and Minors: Complete Guide for Parents",
  description:
    "Everything parents need to know about applying for UK ETA for children, including babies and minors.",
  serviceType: ServiceType.UK_ETA,
  category: "requirements",
  pillarTopic: "travel",
  isPillarPage: true,
  priority: 0.75,
  keywords: ["UK ETA for children", "UK ETA for minors", "UK ETA for babies"],
  estimatedReadTime: 8,
  lastUpdated: "2025-12-12",
  sections: [
    {
      id: "do-children-need",
      title: "Do Children Need UK ETA?",
      content: [
        "Yes, all children traveling to the UK from ETA-eligible countries must have their own ETA, regardless of age.",
        {
          type: "list",
          items: [
            "Newborns and babies (from birth)",
            "Toddlers and young children",
            "Teenagers under 18",
          ],
        },
        {
          type: "callout",
          text: "Every child must have an individual ETA - they cannot be included on a parent's ETA.",
        },
      ],
    },
    {
      id: "cost-for-children",
      title: "Cost for Children",
      content: [
        "The UK ETA costs £16 per child - the same fee as for adults. There are no discounts for children or babies.",
        {
          type: "warning",
          text: "For a family of 4 (2 adults, 2 children), the total cost is £64 (£16 × 4).",
        },
      ],
    },
    {
      id: "how-parents-apply",
      title: "How Parents Apply",
      content: [
        "Parents or legal guardians can apply for UK ETA on behalf of their children.",
        {
          type: "list",
          items: [
            "Use the UK ETA app or official website",
            "Complete one application per child",
            "Provide child's passport and personal details",
            "Upload child's photo",
            "Answer screening questions on behalf of child",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Do babies need a UK ETA?",
      answer:
        "Yes, all children including newborn babies need their own UK ETA. There is no minimum age exemption.",
    },
    {
      question: "How much does UK ETA cost for children?",
      answer: "£16 per child, the same as adults. There are no discounts.",
    },
  ],
  relatedGuides: ["what-is-uk-eta", "how-to-apply-uk-eta"],
};
