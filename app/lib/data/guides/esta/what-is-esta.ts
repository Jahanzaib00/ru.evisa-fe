import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const whatIsEsta: Guide = {
  slug: "what-is-esta",
  title:
    "What is ESTA? Complete Guide to Electronic System for Travel Authorization",
  description:
    "ESTA (Electronic System for Travel Authorization) is an automated system that determines eligibility for travelers to visit the United States under the Visa Waiver Program. Learn everything you need to know.",
  serviceType: ServiceType.US_ESTA,
  category: "main",
  pillarTopic: "service-overview",
  isPillarPage: true,
  priority: 1.0,
  keywords: [
    "what is ESTA",
    "ESTA definition",
    "electronic travel authorization",
    "ESTA explained",
    "ESTA meaning",
    "what does ESTA stand for",
  ],
  estimatedReadTime: 8,
  lastUpdated: "2025-01-15",
  sections: [
    {
      id: "introduction",
      title: "Introduction to ESTA",
      content: [
        "ESTA (Electronic System for Travel Authorization) is a mandatory online travel authorization system for citizens of Visa Waiver Program (VWP) countries traveling to the United States for tourism, business, or transit purposes.",
        "Implemented by the U.S. Department of Homeland Security (DHS) in 2009, ESTA determines whether travelers pose a security or law enforcement risk before they board a U.S.-bound aircraft or vessel.",
        {
          type: "callout",
          title: "Key Point",
          text: "ESTA is NOT a visa. It is an authorization to travel to the United States without obtaining a traditional visa, but having an approved ESTA does not guarantee entry - U.S. Customs and Border Protection officers at the port of entry make the final determination.",
        },
      ],
    },
    {
      id: "who-needs-esta",
      title: "Who Needs ESTA?",
      content: [
        "You must obtain ESTA authorization if you meet ALL of the following criteria:",
        {
          type: "list",
          items: [
            "You are a citizen or eligible national of a Visa Waiver Program country (42 countries $40)",
            "You are traveling to the United States for tourism, business, or transit",
            "Your stay will be 90 days or less",
            "You plan to arrive by air or sea carrier (cruise ship or international flight)",
            "You do not currently hold a valid U.S. visa",
          ],
        },
        {
          type: "warning",
          title: "Important Exception",
          text: "If you are traveling to the U.S. by land from Canada or Mexico, you do NOT need ESTA. However, you must still be from a VWP country and meet all other requirements.",
        },
      ],
    },
    {
      id: "how-esta-works",
      title: "How ESTA Works",
      content: [
        "The ESTA system performs automated checks against multiple law enforcement and security databases to determine if a traveler poses a risk. Here is how the process works:",
        {
          type: "list",
          items: [
            "You submit an online application with biographical and passport information",
            "You answer eligibility questions about health, criminal history, and previous travel",
            "The system performs real-time checks against security databases",
            "You receive a response usually within minutes (can take up to 72 hours)",
            "If approved, your ESTA is electronically linked to your passport",
            "Airlines and cruise lines verify your ESTA before allowing boarding",
            "CBP officers check your ESTA upon arrival in the United States",
          ],
        },
        "The entire process is automated, secure, and designed to process applications quickly while maintaining security standards.",
      ],
    },
    {
      id: "esta-validity",
      title: "ESTA Validity and Duration",
      content: [
        "Once approved, your ESTA authorization is valid for 2 years from the date of approval, or until your passport expires, whichever comes first.",
        "During this validity period, you can:",
        {
          type: "list",
          items: [
            "Make multiple trips to the United States",
            "Stay up to 90 days per visit",
            "Travel for tourism, business, or transit purposes",
            "Enter through any U.S. port of entry (airport, seaport)",
          ],
        },
        {
          type: "callout",
          text: "You must apply for a new ESTA if you get a new passport, change your name, change your gender, change your country of citizenship, or if any of your answers to the ESTA eligibility questions change.",
        },
      ],
    },
    {
      id: "esta-vs-visa",
      title: "ESTA vs. U.S. Visa",
      content: [
        "ESTA is not a visa, and there are important differences:",
        "ESTA is simpler and faster: Online application, approved in minutes to 72 hours, costs $40, valid for 2 years, allows multiple entries, no embassy visit required.",
        "U.S. Visa is more complex: In-person interview required, processing takes weeks, costs $185+, valid for 10 years, requires embassy appointment, more documentation needed.",
        "However, a visa allows longer stays (typically 180 days per visit) and can be used for purposes not allowed under ESTA, such as work or study.",
        {
          type: "callout",
          title: "When You Need a Visa Instead",
          text: "If you plan to work, study, stay longer than 90 days, or if you have been denied ESTA in the past, you must apply for an appropriate U.S. visa instead of ESTA.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is ESTA the same as a visa?",
      answer:
        "No, ESTA is not a visa. ESTA is an authorization to travel to the United States under the Visa Waiver Program. While both allow entry to the U.S., ESTA is faster, cheaper, and easier to obtain but has more restrictions (90-day limit, no work allowed). A visa requires an in-person interview and takes longer to process.",
    },
    {
      question: "How much does ESTA cost?",
      answer:
        "The official ESTA fee is $40 USD. This includes a $5 processing fee and a $40 authorization fee. The authorization fee is only charged if your ESTA is approved. Payment must be made by credit card, debit card, or PayPal.",
    },
    {
      question: "How long does ESTA take to process?",
      answer:
        "Most ESTA applications are approved within minutes. However, it can take up to 72 hours for a final decision. The U.S. Department of Homeland Security recommends applying at least 72 hours before your departure to allow sufficient processing time.",
    },
    {
      question: "Can I work in the U.S. with ESTA?",
      answer:
        "No, you cannot work in the United States with ESTA. ESTA is only for tourism, business meetings/conferences, or transit purposes. If you plan to work in the U.S., you must apply for an appropriate work visa (such as H-1B, L-1, etc.).",
    },
    {
      question: "Do children need ESTA?",
      answer:
        "Yes, all travelers, including infants and children, need their own ESTA authorization if they are traveling under the Visa Waiver Program. A parent or guardian can complete the ESTA application on behalf of a minor.",
    },
  ],
  relatedGuides: [
    "esta-requirements",
    "how-to-apply-esta",
    "esta-vs-visa",
    "check-esta-status",
  ],
};
