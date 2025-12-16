import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const estaHowToApply: Guide = {
  slug: "how-to-apply-esta",
  title: "How to Apply for ESTA: Complete Step-by-Step Guide 2025",
  description:
    "Complete step-by-step instructions for applying for ESTA online. Learn exactly what information you need, how to fill out the form correctly, and what to expect during the application process.",
  serviceType: ServiceType.US_ESTA,
  category: "main",
  pillarTopic: "application",
  isPillarPage: true,
  priority: 0.9,
  keywords: [
    "how to apply ESTA",
    "ESTA application guide",
    "apply for ESTA online",
    "ESTA application steps",
    "ESTA application process",
    "complete ESTA application",
  ],
  estimatedReadTime: 12,
  lastUpdated: "2025-01-15",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      content: [
        "Applying for ESTA (Electronic System for Travel Authorization) is a straightforward online process that typically takes 10-20 minutes to complete. This guide walks you through every step of the application process.",
        {
          type: "callout",
          title: "Official Website Only",
          text: "Always apply through the official U.S. government website: esta.cbp.dhs.gov. Beware of third-party websites charging inflated fees.",
        },
      ],
    },
    {
      id: "before-you-start",
      title: "Before You Start: What You Need",
      content: [
        "Gather these items before beginning your application:",
        {
          type: "list",
          items: [
            "Valid e-passport (must be from a VWP country)",
            "Valid email address (you will receive updates here)",
            "Credit card, debit card, or PayPal account for the $40 fee",
            "Travel information (if you have travel plans): flight details, U.S. address",
            "Employment information: current and past employers",
            "Emergency contact: name and phone number",
            "Parent information: names of both parents",
          ],
        },
        {
          type: "callout",
          text: 'You can apply for ESTA even if you do not have specific travel plans yet. Just enter "Unknown" for the flight information and U.S. address fields.',
        },
      ],
    },
    {
      id: "step-by-step",
      title: "Step-by-Step Application Process",
      content: [
        "Follow these steps to complete your ESTA application:",
        "Step 1: Go to the official website at esta.cbp.dhs.gov",
        'Step 2: Click "Apply" and select "Individual Application" (or "Group Application" if applying for multiple people)',
        "Step 3: Read and acknowledge the security notification",
        "Step 4: Select your citizenship country from the dropdown menu",
        "Step 5: Fill in your personal information exactly as it appears on your passport:",
        {
          type: "list",
          items: [
            "Last Name (Family Name)",
            "First Name (Given Name)",
            "Middle Name (if applicable)",
            "Date of Birth",
            "City of Birth",
            "Country of Birth",
            "Gender",
            "Aliases (any other names you have used)",
          ],
        },
        "Step 6: Enter your passport information:",
        {
          type: "list",
          items: [
            "Passport Number",
            "Passport Issuance Date",
            "Passport Expiration Date",
            "Passport Issuing Country",
          ],
        },
        "Step 7: Provide your contact information:",
        {
          type: "list",
          items: [
            "Email Address (double-check for accuracy)",
            "Phone Number (include country code)",
            "Address in your home country",
          ],
        },
        "Step 8: Answer employment questions:",
        {
          type: "list",
          items: [
            "Current Employer Name",
            "Current Employer Address",
            "Current Job Title",
          ],
        },
        "Step 9: Provide parent information (names only)",
        "Step 10: Enter emergency contact information",
        "Step 11: If you have travel plans, enter:",
        {
          type: "list",
          items: [
            "U.S. Contact Person (name and address)",
            "U.S. Address where you will stay",
            "Airline/Vessel Information (if known)",
          ],
        },
        'Step 12: Answer eligibility questions (answer all "NO" unless applicable):',
        {
          type: "warning",
          title: "Critical Step",
          text: "Answer these questions honestly. Providing false information is grounds for permanent inadmissibility to the United States.",
        },
        {
          type: "list",
          items: [
            "Communicable diseases",
            "Mental or physical disorders",
            "Drug abuse or addiction",
            "Criminal convictions",
            "Previous visa denials or deportations",
            "Terrorist activities",
            "Fraud or misrepresentation",
          ],
        },
        "Step 13: Review all information carefully",
        "Step 14: Certify that all information is correct",
        "Step 15: Submit your application",
        "Step 16: Pay the $40 fee using credit card, debit card, or PayPal",
      ],
    },
    {
      id: "after-submission",
      title: "After Submission: What Happens Next",
      content: [
        "After you submit your application and payment:",
        {
          type: "list",
          items: [
            "You will receive an application number - SAVE THIS NUMBER",
            "Most applications are processed within minutes",
            "Check your application status at esta.cbp.dhs.gov using your application number",
            "You will receive one of three responses: Authorization Approved, Travel Not Authorized, or Authorization Pending",
          ],
        },
        {
          type: "callout",
          title: "Authorization Approved",
          text: "If approved, your ESTA is valid for 2 years or until your passport expires. You will receive a confirmation email. Print a copy for your records (though not required).",
        },
      ],
    },
    {
      id: "common-mistakes",
      title: "Common Mistakes to Avoid",
      content: [
        "Avoid these common ESTA application errors:",
        {
          type: "list",
          items: [
            "Typos in passport information (must match exactly)",
            "Incorrect passport expiration date",
            "Wrong email address (you will not receive updates)",
            "Using a third-party website instead of the official site",
            "Not saving your application number",
            "Rushing through eligibility questions without reading carefully",
            "Applying too close to departure date (apply at least 72 hours before)",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How long does the ESTA application take to complete?",
      answer:
        "The ESTA application typically takes 10-20 minutes to complete if you have all required information ready. The U.S. government estimates an average completion time of 23 minutes.",
    },
    {
      question: "Can I save my application and complete it later?",
      answer:
        "Yes, you can save your partially completed application and return to it later. You will need your application number and other identifying information to retrieve it. However, the application will expire after 7 days if not completed.",
    },
    {
      question: "What if I make a mistake on my ESTA application?",
      answer:
        "For minor errors (like typos in your address or employment), you may be able to update the information after submission. However, errors in passport information, name, date of birth, or citizenship cannot be corrected. You must submit a new application with the correct information.",
    },
    {
      question: "Do I need to print my ESTA approval?",
      answer:
        "No, printing your ESTA approval is not required. Your ESTA is electronically linked to your passport in the system. However, it is recommended to save or print a copy for your records.",
    },
    {
      question: "Can someone else complete my ESTA application for me?",
      answer:
        "Yes, a third party (family member, friend, travel agent) can complete your ESTA application on your behalf. However, you are responsible for ensuring all information is accurate. At the end of the application, you must certify that you have reviewed the information and it is correct.",
    },
  ],
  relatedGuides: [
    "esta-requirements",
    "filling-esta-form",
    "esta-payment-methods",
    "check-esta-status",
  ],
};
