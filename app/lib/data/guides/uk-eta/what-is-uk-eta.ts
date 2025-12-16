import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const whatIsUkEta: Guide = {
  slug: "what-is-uk-eta",
  title: "What is UK ETA? Complete Guide to UK Electronic Travel Authorisation",
  description:
    "UK ETA (Electronic Travel Authorisation) is a digital permission to travel to the UK for tourism, business, or transit. Learn everything you need to know about the UK's new travel authorization system.",
  serviceType: ServiceType.UK_ETA,
  category: "main",
  pillarTopic: "service-overview",
  isPillarPage: true,
  priority: 1.0,
  keywords: [
    "what is UK ETA",
    "UK ETA definition",
    "electronic travel authorisation UK",
    "UK ETA explained",
    "UK ETA meaning",
    "what does UK ETA stand for",
  ],
  estimatedReadTime: 8,
  lastUpdated: "2025-12-12",
  sections: [
    {
      id: "introduction",
      title: "Introduction to UK ETA",
      content: [
        "UK ETA (Electronic Travel Authorisation) is a digital permission to travel to the United Kingdom for tourism, business, family visits, and certain other purposes. It's part of the UK's digitized immigration system designed to enhance border security.",
        "Introduced in phases from November 2023, the UK ETA determines whether travelers pose a security risk before they travel. The system is mandatory for visa-exempt nationals from 85 countries visiting the UK.",
        {
          type: "callout",
          title: "Key Point",
          text: "UK ETA is NOT a visa. It is a digital authorization to travel to the UK, but having an approved ETA does not guarantee entry - UK Border Force officers at the port of entry make the final determination on whether you can enter the country.",
        },
      ],
    },
    {
      id: "who-needs-uk-eta",
      title: "Who Needs UK ETA?",
      content: [
        "You must obtain UK ETA authorization if you meet ALL of the following criteria:",
        {
          type: "list",
          items: [
            "You are a citizen of one of 85 eligible countries (including USA, Canada, Australia, and most European countries)",
            "You are traveling to the UK for tourism, business, family visits, or transit (passing through UK border control)",
            "Your stay will be up to 6 months",
            "You do not currently hold a valid UK visa or immigration permission",
            "You are not a British or Irish citizen",
          ],
        },
        {
          type: "warning",
          title: "Important Exception",
          text: "British citizens, Irish citizens, and those with existing UK immigration permission (settled/pre-settled status, work/study visas) do NOT need an ETA. Legal residents of Ireland traveling within the Common Travel Area also do not need an ETA.",
        },
      ],
    },
    {
      id: "how-uk-eta-works",
      title: "How UK ETA Works",
      content: [
        "The UK ETA system performs automated checks to determine if a traveler poses a security risk. Here is how the process works:",
        {
          type: "list",
          items: [
            "You apply online at gov.uk/eta or via the UK ETA mobile app",
            "You provide passport details and upload passport/facial photos",
            "You answer suitability questions about criminal convictions and immigration history",
            "The system performs checks against UK security and immigration databases",
            "Most applications receive an automatic decision within minutes",
            "If approved, your ETA is digitally linked to your passport (valid for 2 years)",
            "Carriers verify your ETA before allowing boarding to the UK",
            "UK Border Force officers verify your ETA upon arrival",
          ],
        },
        "The entire process is quick, secure, and designed to process most applications automatically while maintaining border security.",
      ],
    },
    {
      id: "uk-eta-validity",
      title: "UK ETA Validity and Duration",
      content: [
        "Once approved, your UK ETA is valid for 2 years from the date of approval, or until your passport expires, whichever comes first.",
        "During this validity period, you can:",
        {
          type: "list",
          items: [
            "Make unlimited trips to the United Kingdom",
            "Stay up to 6 months per visit",
            "Travel for tourism, business, family visits, short-term study, or transit",
            "Enter through any UK port of entry (airport, seaport, or land border)",
          ],
        },
        {
          type: "callout",
          text: "You must apply for a new UK ETA if you get a new passport. Your ETA is permanently digitally linked to the passport you used when applying and cannot be transferred to a new passport.",
        },
      ],
    },
    {
      id: "uk-eta-vs-visa",
      title: "UK ETA vs. UK Visa",
      content: [
        "UK ETA is not a visa, and there are important differences:",
        "UK ETA is simpler and faster: Online/app application, approved in minutes to 3 working days, costs £16, valid for 2 years, allows unlimited entries, no in-person appointment required.",
        "UK Standard Visitor Visa is more complex: In-person appointment at visa application centre required, processing takes up to 3 weeks, costs £127-£1,059 depending on duration, valid for 6 months to 10 years, requires biometric information, more documentation needed.",
        "Both ETA and Standard Visitor visa allow stays of up to 6 months per visit, but a visa may be required if you have a criminal record or previous immigration violations.",
        {
          type: "callout",
          title: "When You Need a Visa Instead",
          text: "If your ETA application is refused, you have a criminal record, or you're from a visa-required country, you must apply for a Standard Visitor visa instead. There is no appeal process for ETA refusals.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is UK ETA the same as a visa?",
      answer:
        "No, UK ETA is not a visa. UK ETA is a digital travel authorization for visa-exempt nationals visiting the UK. While both allow entry to the UK, ETA is faster, cheaper, and easier to obtain (costs £16, approved in minutes, valid 2 years). A visa requires an in-person appointment at a visa application centre and takes longer to process.",
    },
    {
      question: "How much does UK ETA cost?",
      answer:
        "The official UK ETA fee is £16. This fee is non-refundable, meaning you cannot get a refund even if your application is refused. Payment can be made by credit/debit card, Apple Pay, or Google Pay.",
    },
    {
      question: "How long does UK ETA take to process?",
      answer:
        "Most UK ETA applications receive an automatic decision within minutes when applying via the UK ETA app. The standard processing time is usually within 1 day, but can take up to 3 working days. It's recommended to apply at least 3 working days before your departure.",
    },
    {
      question: "Can I work in the UK with UK ETA?",
      answer:
        "No, you cannot work in the UK with an ETA. UK ETA is only for tourism, business meetings, family visits, short-term study, and certain permitted paid engagements. If you plan to work in the UK, you must apply for an appropriate work visa (such as Skilled Worker visa).",
    },
    {
      question: "Do children need UK ETA?",
      answer:
        "Yes, all travelers, including babies and children, need their own UK ETA. Each person must pay the £16 fee separately. A parent or guardian can apply on behalf of a child using the UK ETA app or online at gov.uk/eta.",
    },
  ],
  relatedGuides: [
    "uk-eta-requirements",
    "how-to-apply-uk-eta",
    "uk-eta-vs-visa",
    "check-uk-eta-status",
  ],
};
