import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const estaVsVisa: Guide = {
  slug: "esta-vs-visa",
  title: "ESTA vs U.S. Visa: Which One Do You Need?",
  description:
    "Compare ESTA and U.S. B-2 tourist visa. Complete comparison of differences, requirements, costs, processing time, validity, and which option is right for your travel needs in 2026.",
  serviceType: ServiceType.US_ESTA,
  category: "comparison",
  pillarTopic: "comparison",
  isPillarPage: true,
  priority: 0.8,
  keywords: [
    "ESTA vs visa",
    "difference ESTA visa",
    "ESTA or visa",
    "do I need ESTA or visa",
    "B2 visa vs ESTA",
    "B1 B2 visa ESTA comparison",
    "visitor visa vs ESTA",
  ],
  estimatedReadTime: 11,
  lastUpdated: "2026-01-01",
  sections: [
    {
      id: "introduction",
      title: "ESTA vs U.S. Visa: What You Need to Know",
      content: [
        "Both ESTA (Electronic System for Travel Authorization) and the U.S. B-1/B-2 visitor visa allow foreign nationals to enter the United States for tourism or business purposes. However, they differ significantly in eligibility, application process, cost, validity, and flexibility.",
        {
          type: "callout",
          title: "Quick Decision Guide",
          text: "If you are from a Visa Waiver Program country and planning a trip under 90 days, choose ESTA. If you are not from a VWP country, need to stay longer than 90 days, or want the flexibility to extend your stay, apply for a B-2 visa.",
        },
      ],
    },
    {
      id: "comparison-table",
      title: "Side-by-Side Comparison",
      content: [
        "Here is a comprehensive comparison of ESTA and B-1/B-2 visitor visa:",
        "ELIGIBILITY - ESTA: Citizens of 42 Visa Waiver Program countries only. B-2 Visa: Available to citizens of all countries worldwide.",
        "APPLICATION PROCESS - ESTA: 100% online application, no in-person interview required. B-2 Visa: Form DS-160 online application + mandatory in-person interview at U.S. embassy or consulate.",
        "COST - ESTA: $40 USD (as of September 2024). B-2 Visa: $185 USD (MRV fee).",
        "PROCESSING TIME - ESTA: Most applications approved within minutes to 72 hours. B-2 Visa: Several weeks to several months depending on embassy wait times and processing.",
        "VALIDITY PERIOD - ESTA: Valid for 2 years or until passport expires. B-2 Visa: Valid for up to 10 years (depends on nationality and bilateral agreements).",
        "MAXIMUM STAY PER VISIT - ESTA: 90 days maximum, cannot be extended. B-2 Visa: Initially up to 6 months per visit, can be extended.",
        "NUMBER OF ENTRIES - ESTA: Unlimited entries during validity period. B-2 Visa: Unlimited entries during validity period.",
        "DOCUMENTATION REQUIRED - ESTA: Valid passport, payment method, basic travel information. B-2 Visa: Passport, DS-160 confirmation, photo, appointment confirmation, supporting documents (financial proof, ties to home country, travel itinerary).",
        "INTERVIEW REQUIRED - ESTA: No. B-2 Visa: Yes, mandatory in-person interview.",
      ],
    },
    {
      id: "when-choose-esta",
      title: "When to Choose ESTA",
      content: [
        "ESTA is the right choice if you meet ALL of these criteria:",
        {
          type: "list",
          items: [
            "You are a citizen or eligible national of a Visa Waiver Program country (42 countries including UK, Germany, France, Japan, Australia, South Korea, etc.)",
            "Your trip will be 90 days or less",
            "You are traveling for tourism, business meetings/conferences, or transit",
            "You have a valid e-passport",
            "You have not been denied a U.S. visa in the past",
            "You do not need the flexibility to extend your stay",
            "You want a fast, convenient, online-only application process",
          ],
        },
        {
          type: "callout",
          title: "ESTA Advantages",
          text: "ESTA is faster (approved in hours vs weeks), cheaper ($40 vs $185), and more convenient (no embassy visit required). Perfect for short-term tourists and business travelers from VWP countries.",
        },
      ],
    },
    {
      id: "when-choose-visa",
      title: "When to Choose a U.S. Visa",
      content: [
        "You must or should apply for a B-1/B-2 visa if ANY of these apply:",
        {
          type: "list",
          items: [
            "You are NOT a citizen of a Visa Waiver Program country",
            "You plan to stay in the U.S. for more than 90 days",
            "You may need to extend your stay beyond your initial entry",
            "You have been denied ESTA in the past",
            "You have a criminal record or visa violations",
            "You have traveled to Iran, Iraq, Libya, North Korea, Somalia, Sudan, Syria, or Yemen since March 2011 (ESTA ineligibility)",
            "You are a dual citizen of a VWP country AND Iran, Iraq, North Korea, Sudan, or Syria",
            "You want longer validity (up to 10 years vs 2 years)",
          ],
        },
        {
          type: "warning",
          title: "Visa Required Situations",
          text: "If you are not from a VWP country or do not meet ESTA eligibility requirements, you have NO choice - you MUST apply for a visa. There is no alternative for visa-required nationals.",
        },
      ],
    },
    {
      id: "application-differences",
      title: "Application Process Comparison",
      content: [
        "The application processes for ESTA and B-2 visa are vastly different:",
        "ESTA Application Process:",
        {
          type: "list",
          items: [
            "Step 1: Go to esta.cbp.dhs.gov",
            "Step 2: Complete online form (10-20 minutes)",
            "Step 3: Pay $40 fee online",
            "Step 4: Receive approval (usually within minutes, up to 72 hours)",
            "Step 5: Travel to the U.S. (no physical document needed)",
          ],
        },
        "B-2 Visa Application Process:",
        {
          type: "list",
          items: [
            "Step 1: Complete Form DS-160 online (30-60 minutes)",
            "Step 2: Pay $185 MRV fee",
            "Step 3: Schedule visa interview appointment (wait time varies by location)",
            "Step 4: Gather supporting documents (financial statements, employment letter, travel itinerary, proof of ties to home country)",
            "Step 5: Attend in-person interview at U.S. embassy or consulate",
            "Step 6: Wait for visa processing (several days to weeks)",
            "Step 7: Receive passport with visa stamp (or denial notice)",
          ],
        },
        {
          type: "callout",
          text: "ESTA can be completed entirely from home in under an hour. B-2 visa requires embassy visit, documentation preparation, and much longer processing time.",
        },
      ],
    },
    {
      id: "cost-comparison",
      title: "Cost Comparison",
      content: [
        "The cost difference between ESTA and B-2 visa is significant:",
        "ESTA Cost: $45 fee ($5 processing + $40 authorization fee). One-time payment online. Valid for 2 years.",
        "B-2 Visa Cost: $185 MRV (Machine Readable Visa) fee. Paid before interview. Valid for up to 10 years depending on nationality.",
        {
          type: "callout",
          title: "Cost-Per-Year Analysis",
          text: "ESTA: $40 for 2 years = $10.50/year. B-2 Visa: $185 for 10 years = $18.50/year. While the B-2 visa has a higher upfront cost, it can be more economical over time if you travel to the U.S. frequently.",
        },
        "Additional costs to consider for B-2 visa:",
        {
          type: "list",
          items: [
            "Travel to U.S. embassy or consulate (if not in your city)",
            "Passport photos ($10-30)",
            "Document translation/notarization fees (if required)",
            "Potential legal assistance fees (optional)",
          ],
        },
      ],
    },
    {
      id: "flexibility-extensions",
      title: "Stay Duration and Extension Flexibility",
      content: [
        "One of the biggest differences between ESTA and B-2 visa is flexibility:",
        {
          type: "warning",
          title: "ESTA Limitations",
          text: "ESTA allows a maximum 90-day stay that CANNOT be extended under any circumstances. If you stay beyond 90 days, you will face serious immigration consequences including bans from future U.S. travel.",
        },
        "B-2 Visa Flexibility:",
        {
          type: "list",
          items: [
            "Initial admission typically granted for 6 months",
            "Can apply for extension of stay (Form I-539) if circumstances change",
            "Extensions may be granted for up to 6 additional months",
            "Useful if you need longer stays for medical treatment, visiting family, or extended tourism",
          ],
        },
        {
          type: "callout",
          title: "When Flexibility Matters",
          text: "If there is any possibility your trip might exceed 90 days, apply for a B-2 visa instead of ESTA. Converting from ESTA to a visa while in the U.S. is not possible.",
        },
      ],
    },
    {
      id: "which-is-better",
      title: "Which is Better for You?",
      content: [
        "The answer depends on your specific situation:",
        "Choose ESTA if:",
        {
          type: "list",
          items: [
            "You are from a VWP country and meet eligibility requirements",
            "Your trip is definitely under 90 days",
            "You want fast approval and no embassy hassle",
            "You prefer lower cost and online convenience",
            "You have a clean travel and criminal record",
          ],
        },
        "Choose B-2 Visa if:",
        {
          type: "list",
          items: [
            "You are not from a VWP country (no choice - must apply for visa)",
            "Your trip will exceed 90 days or you are unsure of exact duration",
            "You want the flexibility to extend your stay if needed",
            "You have ESTA ineligibility issues (criminal record, previous denials, travel to restricted countries)",
            "You travel to the U.S. very frequently and want 10-year validity",
            "You are willing to invest time and money for greater flexibility",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Can I apply for both ESTA and a B-2 visa?",
      answer:
        "Generally, you only need one or the other, not both. If you have a valid B-2 visa, you should use it to enter the U.S. - you do not need ESTA. However, if your visa expires, you can apply for ESTA (if eligible) for future trips. You cannot hold an active ESTA and active B visa simultaneously in practice, as you will use whichever is valid for entry.",
    },
    {
      question: "If I have a valid B-2 visa, do I still need ESTA?",
      answer:
        "No, if you have a valid B-2 visa, you do NOT need ESTA. You should use your visa to enter the United States. ESTA is only for travelers from Visa Waiver Program countries who are traveling without a visa.",
    },
    {
      question: "Can I switch from ESTA to a visa while in the U.S.?",
      answer:
        "No, you cannot apply for or switch to a B-2 visa while in the United States on ESTA. If you enter on ESTA with a 90-day limit, you must depart within 90 days. To get a visa, you must return to your home country and apply through a U.S. embassy or consulate.",
    },
    {
      question: "What if I am from a VWP country but my ESTA is denied?",
      answer:
        "If your ESTA is denied, you can apply for a B-1/B-2 visa at a U.S. embassy or consulate. The visa application process is more rigorous and requires an interview, but it is an option if ESTA is not available to you. Be prepared to explain the ESTA denial during your visa interview.",
    },
    {
      question: "Is it easier to get ESTA or a B-2 visa?",
      answer:
        "ESTA is significantly easier and faster if you meet the eligibility requirements. ESTA has a 99%+ approval rate for eligible applicants, requires no interview, and is approved in hours. B-2 visa requires documentation, interview, and has variable approval rates depending on your nationality and circumstances. However, if you are not from a VWP country, B-2 visa is your only option.",
    },
    {
      question: "Can I work in the U.S. with ESTA or a B-2 visa?",
      answer:
        "No, you cannot work in the United States with either ESTA or a B-2 visitor visa. Both are strictly for tourism, business meetings/conferences, or transit. Any form of employment or paid work requires an appropriate work visa (such as H-1B, L-1, O-1, etc.).",
    },
    {
      question: "Which lasts longer, ESTA or B-2 visa?",
      answer:
        "B-2 visas typically have longer validity. ESTA is valid for 2 years or until your passport expires. B-2 visas can be valid for up to 10 years depending on your nationality and bilateral agreements between your country and the U.S. However, the validity period does not determine how long you can stay per visit.",
    },
    {
      question: "What if my travel plans change after getting ESTA or visa?",
      answer:
        "If you have ESTA and your plans change (new passport, name change, address change), you can update some information online or apply for a new ESTA. With a B-2 visa, minor changes do not affect your visa validity, but major changes (new passport, name change) require a new visa application. Both ESTA and B-2 visa allow flexible travel dates within their validity periods.",
    },
  ],
  relatedGuides: [
    "what-is-esta",
    "esta-requirements",
    "how-to-apply-esta",
    "esta-denied-what-to-do",
    "esta-validity-period",
  ],
};
