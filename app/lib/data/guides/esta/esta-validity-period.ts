import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const estaValidityPeriod: Guide = {
  slug: "esta-validity-period",
  title: "ESTA Validity Period: How Long is ESTA Valid?",
  description:
    "Learn how long ESTA is valid, when it expires, and when you need to renew. Complete guide to ESTA validity duration, passport expiration rules, and multiple entry requirements for 2025.",
  serviceType: ServiceType.US_ESTA,
  category: "main",
  pillarTopic: "status-management",
  clusterOf: "check-esta-status",
  priority: 0.8,
  keywords: [
    "ESTA validity",
    "how long ESTA valid",
    "ESTA expiration",
    "ESTA duration",
    "ESTA renewal period",
    "ESTA 2 years",
    "ESTA multiple entries",
    "ESTA passport expiration",
  ],
  estimatedReadTime: 9,
  lastUpdated: "2025-01-15",
  sections: [
    {
      id: "introduction",
      title: "Understanding ESTA Validity",
      content: [
        "Understanding how long your ESTA authorization is valid and when it expires is crucial for planning your U.S. travel. This comprehensive guide explains all ESTA validity rules, passport expiration requirements, and when you need to apply for a new authorization.",
        {
          type: "callout",
          title: "Quick Answer",
          text: "An approved ESTA is valid for 2 years from the date of approval OR until your passport expires, whichever comes first. During this period, you can make unlimited trips to the U.S., with each stay limited to 90 days.",
        },
      ],
    },
    {
      id: "two-year-validity",
      title: "The 2-Year Validity Rule",
      content: [
        "When your ESTA application is approved by U.S. Customs and Border Protection (CBP), it is valid for two years from the approval date. This means:",
        {
          type: "list",
          items: [
            "The validity period starts on the approval date, NOT your travel date",
            "You can travel to the U.S. multiple times during the 2-year period",
            "Each visit can be up to 90 consecutive days",
            "There is no limit on the number of trips you can make",
            "The ESTA remains valid even if you do not travel immediately",
          ],
        },
        {
          type: "callout",
          title: "Example: 2-Year Validity",
          text: "If your ESTA is approved on February 15, 2025, it will remain valid until February 15, 2027. You can travel to the U.S. as many times as you want between these dates.",
        },
      ],
    },
    {
      id: "passport-expiration",
      title: "Passport Expiration and ESTA Validity",
      content: [
        "Your ESTA validity is directly tied to your passport. Even if your ESTA has not reached its 2-year expiration date, it will expire when your passport expires.",
        {
          type: "warning",
          title: "Critical Rule",
          text: "Your ESTA expires on whichever date comes FIRST: (1) Two years from approval date, OR (2) Your passport expiration date.",
        },
        {
          type: "callout",
          title: "Example: Passport Expiration Scenario",
          text: "ESTA approved: March 1, 2025 (normally valid until March 1, 2027). Passport expires: October 15, 2025. Your ESTA will expire: October 15, 2025 (when your passport expires), NOT March 1, 2027.",
        },
        "This is because your ESTA is electronically linked to your specific passport number. When you get a new passport, even if your ESTA has not expired, you MUST apply for a new ESTA with your new passport information.",
      ],
    },
    {
      id: "new-passport-requirement",
      title: "When You Must Apply for a New ESTA",
      content: [
        "You are required to submit a new ESTA application if ANY of the following situations occur:",
        {
          type: "list",
          items: [
            "You obtain a new passport (even from the same country)",
            "You change your name (marriage, divorce, legal name change)",
            "You change your gender",
            "You change your country of citizenship",
            "Your circumstances change regarding ESTA eligibility questions (health, criminal record, visa history, etc.)",
            "Your previous ESTA has expired (after 2 years)",
          ],
        },
        {
          type: "warning",
          title: "New Passport = New ESTA Required",
          text: "Even if your old ESTA shows 1 year of validity remaining, if you renew your passport, you MUST apply for a new ESTA. The old ESTA is no longer valid because it is tied to your old passport number.",
        },
        "Each new ESTA application requires payment of the $40 fee. There are no renewals or transfers - you must complete a new full application.",
      ],
    },
    {
      id: "multiple-entries",
      title: "Multiple Entries and the 90-Day Rule",
      content: [
        "During your ESTA validity period (up to 2 years), you can enter the United States multiple times. However, each individual visit is subject to the 90-day maximum stay rule:",
        {
          type: "list",
          items: [
            "Each entry allows up to 90 consecutive days in the U.S.",
            "You cannot extend your 90-day stay - it is a hard limit",
            "There is no official requirement for how long you must stay outside the U.S. between visits",
            "However, CBP officers have discretion to deny entry if they suspect you are living in the U.S.",
            "Quick trips to Canada, Mexico, or Caribbean islands do NOT reset your 90-day counter",
          ],
        },
        {
          type: "callout",
          title: "Best Practice",
          text: "While there is no legal requirement, immigration experts recommend spending more time outside the U.S. than inside. If you spend 85 days in the U.S., leave for a week, then try to return for another 85 days, CBP officers may question your intentions and deny entry.",
        },
      ],
    },
    {
      id: "canada-mexico-travel",
      title: "Important Rule: Canada, Mexico, and Caribbean Travel",
      content: [
        "This is one of the most misunderstood ESTA rules:",
        {
          type: "warning",
          title: "Critical Information",
          text: "Trips to Canada, Mexico, or adjacent Caribbean islands do NOT reset your 90-day counter. The days you spend in these countries are counted as part of your U.S. stay.",
        },
        {
          type: "callout",
          title: "Example: Canada Trip Scenario",
          text: "You enter the U.S. on Day 1. On Day 60, you take a 10-day trip to Canada. When you return to the U.S., you have already used 60 days of your 90-day allowance. You now have only 30 days remaining in the U.S., NOT a fresh 90 days.",
        },
        'This rule exists to prevent people from "resetting" their 90-day stay by making quick trips across the border.',
      ],
    },
    {
      id: "checking-expiration",
      title: "How to Check Your ESTA Expiration Date",
      content: [
        "You can check your ESTA status and expiration date at any time:",
        {
          type: "list",
          items: [
            "Visit the official ESTA website: esta.cbp.dhs.gov",
            'Click "Check ESTA Status"',
            "Enter your application number (or passport details) and date of birth",
            "Your status page will show your ESTA expiration date",
          ],
        },
        {
          type: "callout",
          text: "It is recommended to check your ESTA status before booking any travel to ensure it is still valid.",
        },
      ],
    },
    {
      id: "validity-scenarios",
      title: "Common ESTA Validity Scenarios",
      content: [
        "Here are real-world scenarios to help you understand ESTA validity:",
        "Scenario 1 - Standard 2-Year Validity: ESTA approved January 1, 2025. Passport expires December 1, 2027. ESTA valid until: January 1, 2027 (full 2 years).",
        "Scenario 2 - Passport Expires First: ESTA approved January 1, 2025. Passport expires June 1, 2026. ESTA valid until: June 1, 2026 (18 months, when passport expires).",
        "Scenario 3 - New Passport Obtained: ESTA approved and valid until December 2026. New passport issued in March 2025. ESTA valid until: Invalid immediately. Must apply for new ESTA with new passport.",
        "Scenario 4 - Multiple Trips: ESTA approved January 2025, valid until January 2027. Trips: March 2025 (20 days), July 2025 (30 days), December 2025 (15 days), May 2026 (25 days). All trips allowed under same ESTA as long as each is ≤90 days.",
      ],
    },
  ],
  faqs: [
    {
      question:
        "What happens if my ESTA expires while I am in the United States?",
      answer:
        "This is allowed and not a problem. Your ESTA only needs to be valid when you ENTER the United States. If your ESTA expires during your authorized 90-day stay, you can complete your visit and depart as planned. However, you will need to apply for a new ESTA before your next trip to the U.S.",
    },
    {
      question: "Can I renew my ESTA before it expires?",
      answer:
        "There is no renewal process for ESTA. When your ESTA expires (or is about to expire), you must submit a completely new application and pay the $40 fee again. You can apply for a new ESTA at any time, even before your current one expires.",
    },
    {
      question: "If I get a new passport, can I still use my valid ESTA?",
      answer:
        "No. Your ESTA is electronically linked to a specific passport number. If you obtain a new passport for any reason, your old ESTA immediately becomes invalid, even if it shows years of remaining validity. You must apply for a new ESTA using your new passport information.",
    },
    {
      question: "How many times can I visit the U.S. with one ESTA?",
      answer:
        "There is no limit on the number of visits you can make during your ESTA validity period (up to 2 years). However, each visit must be 90 days or less, and CBP officers have discretion to deny entry if they believe you are attempting to live in the U.S. or abuse the system.",
    },
    {
      question: "Do I need to wait a certain time between U.S. visits on ESTA?",
      answer:
        "There is no official waiting period between visits. However, if you spend extended periods in the U.S. with only short trips abroad, CBP officers may question whether you are using ESTA appropriately. As a general guideline, you should spend more time outside the U.S. than inside to avoid issues.",
    },
    {
      question:
        "Can I stay in the U.S. for 90 days, leave for a week, and return for another 90 days?",
      answer:
        "Technically there is no rule preventing this, but it is highly risky. CBP officers have discretion to deny entry if they suspect you are trying to live in the U.S. or circumvent visa requirements. This pattern would likely raise red flags and could result in denial of entry or revocation of your ESTA.",
    },
    {
      question:
        "If I visit Canada during my U.S. trip, does my 90-day counter reset?",
      answer:
        "No. Trips to Canada, Mexico, and adjacent Caribbean islands do NOT reset your 90-day counter. The time spent in these countries is counted as part of your U.S. stay. For example, if you spend 60 days in the U.S., then 5 days in Canada, you have used 60 of your 90 days and have 30 days remaining when you return to the U.S.",
    },
    {
      question:
        "How early should I apply for a new ESTA before my old one expires?",
      answer:
        "You can apply for a new ESTA at any time, even before your current one expires. However, most travelers apply for a new ESTA 1-2 weeks before their existing one expires or before booking new travel. Remember that each new ESTA application costs $40.",
    },
  ],
  relatedGuides: [
    "renew-esta",
    "check-esta-status",
    "passport-requirements-esta",
    "esta-multiple-entries",
    "new-passport-esta",
  ],
};
