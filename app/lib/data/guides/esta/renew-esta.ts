import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const renewEsta: Guide = {
  slug: "renew-esta",
  title: "How to Renew ESTA: Complete Renewal Guide 2025",
  description:
    "Complete guide to renewing your expired ESTA. Learn when to renew, the step-by-step renewal process, what information you need, and important differences between renewal and new applications.",
  serviceType: ServiceType.US_ESTA,
  category: "renewal",
  pillarTopic: "status-management",
  clusterOf: "check-esta-status",
  priority: 0.8,
  keywords: [
    "renew ESTA",
    "ESTA renewal",
    "reapply ESTA",
    "ESTA expired",
    "new ESTA application",
    "ESTA renewal process",
  ],
  estimatedReadTime: 9,
  lastUpdated: "2025-01-15",
  sections: [
    {
      id: "introduction",
      title: "Understanding ESTA Renewal",
      content: [
        "ESTA (Electronic System for Travel Authorization) does not have a traditional 'renewal' process. When your ESTA expires or becomes invalid, you must submit a completely new application. However, the process is straightforward and identical to your initial application.",
        {
          type: "callout",
          title: "Important Clarification",
          text: "There is no 'renew' button or simplified renewal process for ESTA. You must complete a brand new application and pay the full $40 fee again, just as you did for your original ESTA.",
        },
      ],
    },
    {
      id: "when-to-renew",
      title: "When You Need to Apply for a New ESTA",
      content: [
        "You must apply for a new ESTA in these situations:",
        {
          type: "list",
          items: [
            "Your ESTA has expired (2 years from approval date)",
            "Your passport has expired or will expire before your ESTA expires",
            "You obtained a new passport (even if your ESTA has not expired)",
            "You changed your name (marriage, divorce, legal name change)",
            "You changed your gender",
            "You changed your country of citizenship",
            "Any of your answers to ESTA eligibility questions have changed (health, criminal record, travel history, etc.)",
          ],
        },
        {
          type: "warning",
          title: "New Passport Invalidates ESTA",
          text: "If you get a new passport for any reason, your existing ESTA immediately becomes invalid, even if it has years of validity remaining. You must apply for a new ESTA using your new passport information.",
        },
      ],
    },
    {
      id: "timing",
      title: "When to Submit Your New Application",
      content: [
        "Recommended timing for your new ESTA application:",
        "Ideal Timing:",
        {
          type: "list",
          items: [
            "Apply 2-4 weeks before your current ESTA expires",
            "Apply immediately after receiving a new passport",
            "Apply as soon as you know your circumstances have changed",
            "You can apply for a new ESTA at any time, even before your current one expires",
          ],
        },
        "Minimum Timing:",
        {
          type: "list",
          items: [
            "Apply at least 72 hours before your planned travel",
            "Never wait until the last minute - processing can take up to 72 hours",
            "Do not book non-refundable travel until your new ESTA is approved",
          ],
        },
        {
          type: "callout",
          title: "Pro Tip",
          text: "You can hold two valid ESTAs simultaneously during a transition period. If your current ESTA expires in 2 weeks and you apply for a new one today, both will be valid until the old one expires. This prevents any gap in authorization.",
        },
      ],
    },
    {
      id: "renewal-process",
      title: "Step-by-Step Renewal Process",
      content: [
        "The process for applying for a new ESTA is identical to your original application:",
        "Step 1: Gather Required Information",
        {
          type: "list",
          items: [
            "Valid e-passport (must be current, not expired)",
            "Email address for confirmation",
            "Credit card, debit card, or PayPal for $40 fee",
            "Travel information if you have specific plans",
            "Employment information (current employer)",
            "Parent information (names of both parents)",
            "Emergency contact information",
          ],
        },
        "Step 2: Access the Official Website",
        {
          type: "list",
          items: [
            "Go to esta.cbp.dhs.gov (official U.S. government website only)",
            'Click "Apply for ESTA"',
            'Select "Individual Application"',
            "Read and accept the disclaimer",
          ],
        },
        "Step 3: Complete the Application Form",
        {
          type: "list",
          items: [
            "Enter passport information exactly as shown on your passport",
            "Provide personal information (name, date of birth, address)",
            "Answer all eligibility questions honestly",
            "Enter travel information (if known)",
            "Provide employment and parent information",
            "Review all information carefully for accuracy",
          ],
        },
        "Step 4: Submit and Pay",
        {
          type: "list",
          items: [
            "Review your complete application",
            "Submit the application",
            "Pay the $40 fee (non-refundable)",
            "Save your application number immediately",
          ],
        },
        "Step 5: Check Status",
        {
          type: "list",
          items: [
            "Most applications are approved within minutes",
            "Check status at esta.cbp.dhs.gov using your application number",
            "Wait up to 72 hours for final decision if status shows 'pending'",
          ],
        },
      ],
    },
    {
      id: "differences-from-original",
      title: "Differences from Your Original Application",
      content: [
        "While the process is the same, there are a few differences to be aware of when applying for a new ESTA:",
        "Advantages of Reapplying:",
        {
          type: "list",
          items: [
            "You already know the process and what information is needed",
            "You likely have your previous application number for reference",
            "Your information is probably already organized from your first application",
            "The process should feel faster and easier the second time",
          ],
        },
        "Important Considerations:",
        {
          type: "list",
          items: [
            "You must pay the full $40 fee again - there is no discount for renewals",
            "Your new ESTA will have a new application number (different from your old one)",
            "You cannot copy or transfer information from your old ESTA",
            "If your circumstances have changed, your answers must reflect current information",
          ],
        },
        {
          type: "callout",
          text: "Even minor changes to your circumstances must be accurately reflected in your new application. Answer all questions based on your current situation, not what you answered before.",
        },
      ],
    },
    {
      id: "common-mistakes",
      title: "Common Renewal Mistakes to Avoid",
      content: [
        "Avoid these common errors when applying for a new ESTA:",
        {
          type: "list",
          items: [
            "Using old passport information instead of new passport details",
            "Waiting too long - applying the day before travel is risky",
            "Not updating changed information (new address, new employer, etc.)",
            "Using third-party websites that charge inflated fees",
            "Forgetting to save the new application number",
            "Assuming the old ESTA is still valid after getting a new passport",
            "Not checking the new ESTA status before traveling",
          ],
        },
        {
          type: "warning",
          title: "Critical Mistake",
          text: "Never travel using an expired ESTA or an ESTA linked to an expired/old passport. Airlines will not allow you to board, and you will miss your flight.",
        },
      ],
    },
    {
      id: "validity-new-esta",
      title: "Validity of Your New ESTA",
      content: [
        "Your new ESTA will be valid for:",
        {
          type: "list",
          items: [
            "2 years from the approval date, OR",
            "Until your passport expires, whichever comes first",
            "Multiple entries to the U.S. during the validity period",
            "Up to 90 days per visit (cannot be extended)",
          ],
        },
        {
          type: "callout",
          title: "Validity Example",
          text: "If your new ESTA is approved on March 1, 2025, it will be valid until March 1, 2027, unless your passport expires before then. If your passport expires on January 15, 2026, your ESTA will also expire on that date.",
        },
      ],
    },
    {
      id: "costs-and-fees",
      title: "Renewal Costs and Fees",
      content: [
        "Understanding the costs for your new ESTA application:",
        "Official Fee: $40 USD $40",
        {
          type: "list",
          items: [
            "$5 processing fee (charged even if denied)",
            "$40 authorization fee (only charged if approved)",
            "Payment methods: Credit card, debit card, or PayPal",
            "No refunds under any circumstances",
          ],
        },
        {
          type: "warning",
          title: "Beware of Scams",
          text: "The official government fee is $40. Third-party websites charge $50-$150+ for the same application. Always use the official website: esta.cbp.dhs.gov",
        },
        "Cost Comparison:",
        {
          type: "list",
          items: [
            "Official website: $40 $40",
            "Third-party websites: $50-$150 (unnecessary markup)",
            "U.S. embassy visa: $185+ (if ESTA is not available)",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Can I renew my ESTA before it expires?",
      answer:
        "Yes, you can apply for a new ESTA at any time, even before your current one expires. There is no waiting period. In fact, it is recommended to apply for a new ESTA a few weeks before your current one expires to ensure continuous authorization.",
    },
    {
      question: "How much does it cost to renew ESTA?",
      answer:
        "You must pay the full $40 fee for a new ESTA application. There is no reduced renewal fee or discount for previous ESTA holders. Each application costs $40 regardless of whether it is your first application or your fifth.",
    },
    {
      question: "Can I use my old ESTA application number to renew?",
      answer:
        "No, you cannot renew using your old application number. You must complete an entirely new application. Your new ESTA will receive a new application number. However, you can reference your old application for information accuracy.",
    },
    {
      question: "What if I get a new passport 6 months before my ESTA expires?",
      answer:
        "You must apply for a new ESTA immediately. Your ESTA is electronically linked to your passport number, so when you get a new passport, your old ESTA becomes invalid instantly, regardless of how much validity time remains. Apply for a new ESTA with your new passport information before traveling.",
    },
    {
      question:
        "Is the renewal process different from the original application?",
      answer:
        "No, the process is identical. There is no simplified renewal process. You must complete the full application form, answer all eligibility questions, and pay the full fee, just as you did for your original ESTA.",
    },
    {
      question: "Can I renew my ESTA if it was previously denied?",
      answer:
        "If your ESTA was denied in the past, you generally cannot apply for ESTA again. The same eligibility issues that caused the denial will likely result in another denial. You should apply for a U.S. visa at an embassy instead.",
    },
    {
      question: "How long does the renewal process take?",
      answer:
        "The new application process takes 10-20 minutes to complete, and most applications are approved within minutes to hours. However, U.S. Customs and Border Protection recommends allowing up to 72 hours for processing. Apply well in advance of any travel.",
    },
    {
      question: "Will my new ESTA have the same approval status as my old one?",
      answer:
        "Not necessarily. Each application is reviewed independently. While most renewals are approved if nothing has changed, circumstances can change, and a new application could be denied if your eligibility has changed (new criminal record, travel to restricted countries, etc.).",
    },
    {
      question: "Can I travel while my renewal application is pending?",
      answer:
        "If your old ESTA is still valid and your passport has not changed, yes, you can travel on your existing ESTA while the new application is pending. However, if your old ESTA has expired or you have a new passport, you must wait for the new ESTA to be approved before traveling.",
    },
    {
      question:
        "Do I need to renew if I am not planning to travel to the U.S.?",
      answer:
        "No, you only need a valid ESTA when you are actually traveling to the United States. If you have no travel plans, there is no need to maintain a valid ESTA. You can apply for a new one when you decide to travel again.",
    },
  ],
  relatedGuides: [
    "esta-validity-period",
    "check-esta-status",
    "how-to-apply-esta",
    "passport-requirements-esta",
    "esta-denied-what-to-do",
  ],
};
