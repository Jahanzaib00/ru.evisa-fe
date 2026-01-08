import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const estaApplicationFees: Guide = {
  slug: "esta-application-fees",
  title: "ESTA Fees 2026: Complete Cost Breakdown & Payment Guide",
  description:
    "Official ESTA application fees, payment methods, what you are paying for, and how to avoid third-party scams. Complete cost breakdown and refund policy for 2026.",
  serviceType: ServiceType.US_ESTA,
  category: "process",
  pillarTopic: "application",
  clusterOf: "how-to-apply-esta",
  priority: 0.8,
  keywords: [
    "ESTA fees",
    "ESTA cost",
    "how much ESTA",
    "ESTA price",
    "ESTA payment",
    "ESTA fee 2026",
    "ESTA application cost",
  ],
  estimatedReadTime: 8,
  lastUpdated: "2026-01-01",
  sections: [
    {
      id: "introduction",
      title: "ESTA Fee Overview",
      content: [
        "Understanding the official ESTA fee structure is important to avoid overpaying through third-party websites. This comprehensive guide covers the current ESTA fees, payment methods, what the fees cover, and how to ensure you pay the correct amount.",
        {
          type: "callout",
          title: "Official ESTA Fee",
          text: "The official ESTA fee is $40 USD as of September 30, 2024. This is the ONLY fee charged by the U.S. government. Any website charging more is a third-party service adding extra charges.",
        },
      ],
    },
    {
      id: "current-fees",
      title: "Current ESTA Fees Breakdown",
      content: [
        "As of September 30, 2024, the official ESTA fee is $40 USD, which consists of two components:",
        {
          type: "list",
          items: [
            "$5 Processing Fee: Charged to all applicants regardless of approval status. This fee covers the cost of processing your application.",
            "$40 Authorization Fee: Only charged if your ESTA is approved. This fee funds travel promotion and tourism programs.",
          ],
        },
        {
          type: "warning",
          title: "Fee Increase",
          text: "The ESTA fee increased from $14 to $40 on September 30, 2024. This represents a 50% increase and is the current official fee charged by U.S. Customs and Border Protection.",
        },
      ],
    },
    {
      id: "payment-methods",
      title: "Accepted Payment Methods",
      content: [
        "The official ESTA website (esta.cbp.dhs.gov) accepts the following payment methods:",
        {
          type: "list",
          items: [
            "Credit Cards: Visa, Mastercard, American Express, Discover",
            "Debit Cards: Visa or Mastercard debit cards",
            "PayPal: PayPal account payments accepted",
          ],
        },
        {
          type: "callout",
          text: "All payments must be made in U.S. dollars (USD). Currency conversion fees may apply depending on your bank or credit card provider.",
        },
        "Payment is required at the time of application submission. You cannot submit your ESTA application without paying the fee.",
      ],
    },
    {
      id: "what-fees-cover",
      title: "What ESTA Fees Cover",
      content: [
        "The $40 ESTA fee covers the following services:",
        "$5 Processing Fee covers:",
        {
          type: "list",
          items: [
            "Automated background checks against security and law enforcement databases",
            "System maintenance and operation costs",
            "Application processing infrastructure",
            "Customer support and help desk services",
          ],
        },
        "$40 Authorization Fee (if approved) funds:",
        {
          type: "list",
          items: [
            "Travel Promotion Act programs",
            "U.S. tourism marketing initiatives",
            "International visitor program development",
            "Brand USA campaigns promoting U.S. tourism",
          ],
        },
        {
          type: "callout",
          title: "One-Time Fee",
          text: "The $40 fee covers your ESTA for its entire validity period (2 years or until passport expiration). There are NO annual renewal fees or hidden charges.",
        },
      ],
    },
    {
      id: "refund-policy",
      title: "Refund Policy",
      content: [
        "Understanding when you can and cannot get a refund:",
        "If your ESTA is DENIED (Travel Not Authorized):",
        {
          type: "list",
          items: [
            "The $5 processing fee is NON-REFUNDABLE",
            "You will NOT be charged the $40 authorization fee",
            "Total charge if denied: $5",
          ],
        },
        "If your ESTA is APPROVED (Authorization Approved):",
        {
          type: "list",
          items: [
            "You will be charged the full $40 fee",
            "The fee is NON-REFUNDABLE even if you do not travel",
            "The fee is valid for 2 years or until passport expiration",
          ],
        },
        {
          type: "warning",
          title: "No Refunds",
          text: "ESTA fees are non-refundable under any circumstances, including: change of travel plans, application errors, duplicate applications, or if you decide not to travel to the U.S.",
        },
      ],
    },
    {
      id: "fee-comparison",
      title: "ESTA Fee vs Visa Fee Comparison",
      content: [
        "Comparing ESTA fees to traditional U.S. visa fees:",
        "ESTA: $40 fee, valid for 2 years, unlimited entries, 90-day stays, online application only, approved in hours.",
        "B-2 Tourist Visa: $185 MRV fee, valid up to 10 years, unlimited entries, up to 6-month stays, requires embassy interview, processing takes weeks.",
        {
          type: "callout",
          text: "ESTA is significantly cheaper ($40 vs $185) and faster than a traditional tourist visa. If you are eligible for ESTA, it is the most cost-effective option for U.S. travel.",
        },
      ],
    },
    {
      id: "payment-security",
      title: "Payment Security",
      content: [
        "The official ESTA website uses industry-standard security measures to protect your payment information:",
        {
          type: "list",
          items: [
            "256-bit SSL encryption for all transactions",
            "PCI DSS compliant payment processing",
            "No credit card information stored on ESTA servers",
            "Secure government payment gateway",
            "Transaction confirmation numbers for tracking",
          ],
        },
        {
          type: "callout",
          text: "Your payment information is safe when using the official esta.cbp.dhs.gov website. Never provide payment information to unofficial third-party sites.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is the ESTA fee refundable if denied?",
      answer:
        "The $5 processing fee is non-refundable. However, if your ESTA is denied, you will NOT be charged the $40 authorization fee. Only applicants with approved ESTA applications pay the full $40. The processing fee is charged for the cost of reviewing your application, regardless of the outcome.",
    },
    {
      question: "Can I get a refund if I do not travel to the U.S.?",
      answer:
        "No, the ESTA fee is non-refundable once your application is approved, even if you never travel to the United States. The $40 fee covers the 2-year validity period, and you can use it for multiple trips during that time.",
    },
    {
      question: "Why did the ESTA fee increase from $14 to $40?",
      answer:
        "The ESTA fee increased from $14 to $40 on September 30, 2024, due to updated regulations and increased costs for maintaining the ESTA system and funding travel promotion programs. The fee had remained at $14 since 2010, so this was the first increase in 14 years.",
    },
    {
      question: "Do I have to pay the ESTA fee for children?",
      answer:
        "Yes, every traveler, including infants and children, must have their own ESTA and pay the $40 fee. There are no discounts or exemptions for minors. Each individual requires a separate application and fee.",
    },
    {
      question:
        "What if I made a mistake on my application? Do I have to pay again?",
      answer:
        "It depends on the type of mistake. Minor errors (like address or employment information) can sometimes be updated without reapplying. However, errors in passport information, name, date of birth, or citizenship require a new application and a new $40 fee. Always double-check your information before submitting.",
    },
    {
      question: "Can I pay the ESTA fee with cash?",
      answer:
        "No, the ESTA application is entirely online, and cash payments are not accepted. You must pay using a credit card, debit card, or PayPal account. There is no option to mail a check or pay in person.",
    },
    {
      question: "Why are some websites charging $50 or more for ESTA?",
      answer:
        "These are third-party commercial websites that charge processing fees to complete your ESTA application on your behalf. The official U.S. government fee is only $40. Third-party sites charge premium prices ($50-$150) for application assistance, which you do not need. Apply directly at esta.cbp.dhs.gov to pay only $40.",
    },
    {
      question: "Does the $40 ESTA fee cover my entire family?",
      answer:
        "No, the $40 fee is per person. Each traveler, including children and infants, needs their own ESTA application and must pay the $40 fee. For a family of four, the total cost would be $160 ($40 x 4 people).",
    },
    {
      question: "Can I use a foreign credit card to pay the ESTA fee?",
      answer:
        "Yes, you can use credit or debit cards issued by foreign banks, as long as they are Visa, Mastercard, American Express, or Discover. The charge will appear in U.S. dollars, and your bank may apply currency conversion fees and foreign transaction fees.",
    },
  ],
  relatedGuides: [
    "how-to-apply-esta",
    "esta-requirements",
    "esta-vs-visa",
    "esta-payment-methods",
    "check-esta-status",
  ],
};
