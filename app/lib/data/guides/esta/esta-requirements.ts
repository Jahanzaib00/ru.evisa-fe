import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const estaRequirements: Guide = {
  slug: "esta-requirements",
  title: "ESTA Requirements 2025: Complete Eligibility Guide",
  description:
    "Complete list of ESTA requirements including passport requirements, eligibility criteria, and what you need to qualify for U.S. travel authorization under the Visa Waiver Program.",
  serviceType: ServiceType.US_ESTA,
  category: "main",
  pillarTopic: "service-overview",
  clusterOf: "what-is-esta",
  priority: 0.9,
  keywords: [
    "ESTA requirements",
    "ESTA eligibility",
    "who can apply ESTA",
    "ESTA qualifications",
    "ESTA criteria",
    "passport requirements ESTA",
  ],
  estimatedReadTime: 10,
  lastUpdated: "2025-01-15",
  sections: [
    {
      id: "introduction",
      title: "ESTA Requirements Overview",
      content: [
        "To qualify for ESTA (Electronic System for Travel Authorization), you must meet specific requirements set by the U.S. Department of Homeland Security. This guide covers all eligibility criteria in detail.",
        {
          type: "callout",
          title: "Quick Check",
          text: "You can apply for ESTA if you are a citizen of a VWP country, have an e-passport, are traveling for 90 days or less, and have not been denied a U.S. visa or had visa violations in the past.",
        },
      ],
    },
    {
      id: "citizenship-requirements",
      title: "1. Citizenship Requirements",
      content: [
        "You must be a citizen or eligible national of one of the 42 Visa Waiver Program countries:",
        {
          type: "list",
          items: [
            "European Countries: Andorra, Austria, Belgium, Croatia, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Monaco, Netherlands, Norway, Poland, Portugal, San Marino, Slovakia, Slovenia, Spain, Sweden, Switzerland, United Kingdom",
            "Asia-Pacific: Australia, Brunei, Israel, Japan, New Zealand, Singapore, South Korea, Taiwan",
            "Americas: Chile",
          ],
        },
        {
          type: "warning",
          title: "Dual Citizenship Restriction",
          text: "If you are a dual citizen of a VWP country AND Iran, Iraq, North Korea, Sudan, or Syria, you are NOT eligible for ESTA. You must apply for a visa.",
        },
      ],
    },
    {
      id: "passport-requirements",
      title: "2. Passport Requirements",
      content: [
        "Your passport must meet these strict requirements:",
        {
          type: "list",
          items: [
            "E-Passport: Must have an electronic chip containing your biometric information (look for the small camera icon on the cover)",
            "Validity: Must be valid for at least 6 months beyond your planned departure from the U.S. (some countries are exempt from this rule)",
            "Machine-Readable: Must have a machine-readable zone (MRZ) with two lines of text at the bottom of the biographical page",
            "Individual Passport: Each traveler, including infants and children, must have their own passport",
          ],
        },
        {
          type: "callout",
          title: "How to Check if You Have an E-Passport",
          text: "Look for a small rectangular icon of a camera or microchip on the front or back cover of your passport. This indicates it contains an electronic chip. All passports issued by VWP countries since 2006 are e-passports.",
        },
      ],
    },
    {
      id: "travel-requirements",
      title: "3. Travel Purpose Requirements",
      content: [
        "ESTA is ONLY valid for specific types of travel:",
        {
          type: "list",
          items: [
            "Tourism: Vacation, sightseeing, visiting friends/family, recreational activities",
            "Business: Attending meetings, conferences, consultations, negotiating contracts (no actual work or employment)",
            "Transit: Passing through the U.S. to another destination",
            "Medical Treatment: Receiving medical treatment from U.S. healthcare providers",
          ],
        },
        "Maximum stay: 90 days per visit (cannot be extended)",
        {
          type: "warning",
          title: "NOT Allowed with ESTA",
          text: "You CANNOT use ESTA if you plan to: work for a U.S. employer, study for academic credit, stay longer than 90 days, arrive by private aircraft, become a permanent resident, or work as foreign media/journalist.",
        },
      ],
    },
    {
      id: "eligibility-questions",
      title: "4. Eligibility Questions",
      content: [
        'You must answer "NO" to all of these questions to be eligible:',
        {
          type: "list",
          items: [
            "Do you have a communicable disease of public health significance?",
            "Do you have a mental or physical disorder that poses a threat to yourself or others?",
            "Have you ever been arrested or convicted of a crime involving moral turpitude?",
            "Have you ever been arrested or convicted of two or more offenses with total sentences of 5+ years?",
            "Have you ever been a controlled substance trafficker, or aided/abetted drug trafficking?",
            "Do you seek to engage in terrorism, espionage, or sabotage?",
            "Have you ever committed fraud or misrepresented yourself to obtain a U.S. visa or entry?",
            "Have you ever stayed in the U.S. longer than your authorized period?",
            "Have you ever been removed or deported from the United States?",
          ],
        },
        {
          type: "callout",
          text: 'Even a single "YES" answer to these questions will likely result in ESTA denial. You will need to apply for a visa instead.',
        },
      ],
    },
    {
      id: "travel-restrictions",
      title: "5. Travel History Restrictions",
      content: [
        "You are NOT eligible for ESTA if you have traveled to or been present in these countries on or after March 1, 2011:",
        {
          type: "list",
          items: [
            "Iran",
            "Iraq",
            "Libya",
            "North Korea",
            "Somalia",
            "Sudan",
            "Syria",
            "Yemen",
          ],
        },
        {
          type: "warning",
          title: "Limited Exceptions",
          text: "There are limited exceptions for diplomatic or military travel for VWP governments. If you traveled to these countries for government purposes, you may still be eligible.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Can I apply for ESTA if I have a criminal record?",
      answer:
        "It depends on the type and severity of the crime. Minor traffic violations generally do not affect ESTA eligibility. However, arrests or convictions for crimes involving moral turpitude (fraud, theft, assault, drug offenses) will likely result in ESTA denial. If you have a criminal record, you should apply for a U.S. visa instead.",
    },
    {
      question:
        "What if my passport expires in 5 months but my trip is only 2 weeks?",
      answer:
        "If your passport expires in less than 6 months, you should renew it before applying for ESTA. Although some VWP countries have agreements exempting them from the 6-month rule, it is best practice to have a passport valid for 6 months beyond your departure date to avoid issues.",
    },
    {
      question: "Can I apply for ESTA if I was previously denied a U.S. visa?",
      answer:
        "Technically yes, but it is unlikely to be approved. A previous visa denial must be disclosed on your ESTA application, and the same issues that led to the visa denial will likely result in ESTA denial. It is better to reapply for a visa and address the previous denial reasons.",
    },
    {
      question:
        "Do I need ESTA if I am just transiting through the United States?",
      answer:
        "Yes, if you are transiting through the U.S. by air or sea, you need ESTA even if you are not leaving the airport. This applies to connecting flights. However, if you are entering the U.S. by land from Canada or Mexico, you do NOT need ESTA.",
    },
    {
      question: "What is an e-passport and how do I know if I have one?",
      answer:
        "An e-passport is a passport with an embedded electronic chip containing your biographic and biometric information. Look for a small rectangular icon of a camera or microchip on the front or back cover. All passports issued by VWP countries after 2006 are e-passports.",
    },
  ],
  relatedGuides: [
    "what-is-esta",
    "passport-requirements-esta",
    "esta-eligibility-criteria",
    "criminal-record-esta",
  ],
};
