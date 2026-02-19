import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const canadaEtaForMinors: Guide = {
  slug: "canada-eta-for-minors",
  title: "Canada eTA for Children and Minors: Complete Guide for Parents",
  description:
    "Everything parents need to know about applying for Canada eTA for children, including babies and minors.",
  serviceType: ServiceType.CANADA_ETA,
  category: "requirements",
  pillarTopic: "travel",
  isPillarPage: true,
  priority: 0.75,
  keywords: [
    "Canada eTA for children",
    "Canada eTA for minors",
    "Canada eTA for babies",
  ],
  estimatedReadTime: 8,
  lastUpdated: "2026-01-01",
  sections: [
    {
      id: "do-children-need",
      title: "Do Children Need Canada eTA?",
      content: [
        "Yes, all children traveling to Canada from visa-exempt countries by air must have their own eTA, regardless of age.",
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
          text: "Every child must have an individual eTA—they cannot be included on a parent's eTA.",
        },
      ],
    },
    {
      id: "cost-for-children",
      title: "Cost for Children",
      content: [
        "The Canada eTA costs CAD $7 per child—the same fee as for adults. There are no discounts for children or babies.",
        {
          type: "warning",
          text: "For a family of 4 (2 adults, 2 children), the total cost is CAD $28 (CAD $7 × 4).",
        },
      ],
    },
    {
      id: "how-parents-apply",
      title: "How Parents Apply",
      content: [
        "Parents or legal guardians can apply for Canada eTA on behalf of their children.",
        {
          type: "list",
          items: [
            "Use the official Canada eTA website",
            "Complete one application per child",
            "Provide the child's passport and personal details",
            "Answer eligibility questions on behalf of the child",
            "Submit payment for each child's application",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Do babies need a Canada eTA?",
      answer:
        "Yes, all children including newborn babies need their own Canada eTA. There is no minimum age exemption.",
    },
    {
      question: "How much does Canada eTA cost for children?",
      answer: "CAD $7 per child, the same as adults. There are no discounts.",
    },
  ],
  relatedGuides: ["what-is-canada-eta", "how-to-apply-canada-eta"],
};
