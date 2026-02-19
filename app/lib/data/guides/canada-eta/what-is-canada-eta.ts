import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const whatIsCanadaEta: Guide = {
  slug: "what-is-canada-eta",
  title:
    "What is Canada eTA? Complete Guide to Canada Electronic Travel Authorization",
  description:
    "Canada eTA (Electronic Travel Authorization) is a digital permission to travel to Canada for tourism, business, or transit. Learn everything you need to know about Canada's travel authorization system.",
  serviceType: ServiceType.CANADA_ETA,
  category: "main",
  pillarTopic: "service-overview",
  isPillarPage: true,
  priority: 1.0,
  keywords: [
    "what is Canada eTA",
    "Canada eTA definition",
    "electronic travel authorization Canada",
    "Canada eTA explained",
    "Canada eTA meaning",
    "what does Canada eTA stand for",
  ],
  estimatedReadTime: 8,
  lastUpdated: "2026-01-01",
  sections: [
    {
      id: "introduction",
      title: "Introduction to Canada eTA",
      content: [
        "Canada eTA (Electronic Travel Authorization) is a mandatory digital travel permission for visa-exempt nationals flying to or transiting through Canada for tourism, business, or transit. It is part of Canada's digitized immigration system designed to enhance border security.",
        "Introduced in 2016, the eTA system allows Canadian authorities to pre-screen travelers before they arrive. The system is mandatory for nationals of visa-exempt countries traveling by air to Canada.",
        {
          type: "callout",
          title: "Key Point",
          text: "Canada eTA is NOT a visa. It is a digital authorization to travel to Canada, but having an approved eTA does not guarantee entry—Canadian Border Services Agency (CBSA) officers at the port of entry make the final determination.",
        },
      ],
    },
    {
      id: "who-needs-eta",
      title: "Who Needs a Canada eTA?",
      content: [
        "You must obtain a Canada eTA if you meet ALL of the following criteria:",
        {
          type: "list",
          items: [
            "You are a citizen of a visa-exempt country",
            "You are traveling to Canada by air for tourism, business, family visits, or transit",
            "Your stay will be up to 6 months per visit",
            "You do not currently hold a valid Canadian visa that covers your purpose of travel",
          ],
        },
        {
          type: "warning",
          title: "Important Exception",
          text: "U.S. citizens do NOT need an eTA when flying to Canada. All travelers with existing Canadian visas or traveling by land/sea may not require an eTA.",
        },
      ],
    },
    {
      id: "how-canada-eta-works",
      title: "How Canada eTA Works",
      content: [
        "The Canada eTA system performs automated checks to determine if a traveler is admissible. Here is how the process works:",
        {
          type: "list",
          items: [
            "You apply online via the official Canada eTA website",
            "Provide passport details and answer questions about criminal convictions and immigration history",
            "The system performs automated checks against Canadian immigration and security databases",
            "Most applications receive approval within minutes",
            "If approved, your eTA is electronically linked to your passport (valid for up to 5 years or until passport expiry)",
            "Air carriers verify your eTA before allowing boarding",
            "CBSA officers verify your eTA upon arrival in Canada",
          ],
        },
        "The system is designed to process most applications automatically while maintaining border security.",
      ],
    },
    {
      id: "eta-validity",
      title: "Canada eTA Validity and Duration",
      content: [
        "Once approved, your Canada eTA is valid for up to 5 years from the date of approval or until your passport expires, whichever comes first.",
        "During this validity period, you can:",
        {
          type: "list",
          items: [
            "Make multiple trips to Canada",
            "Stay up to 6 months per visit",
            "Travel for tourism, business meetings, family visits, or transit",
            "Enter through any Canadian airport",
          ],
        },
        {
          type: "callout",
          text: "You must apply for a new eTA if you get a new passport. Each eTA is permanently linked to the passport used when applying and cannot be transferred.",
        },
      ],
    },
    {
      id: "eta-vs-visa",
      title: "Canada eTA vs Visitor Visa",
      content: [
        "Canada eTA is not a visa, and there are important differences:",
        "Canada eTA is simpler and faster: Online application, approved in minutes to hours, costs CAD $7, valid for up to 5 years, allows multiple entries, no in-person appointment required.",
        "Canadian Visitor Visa is more complex: Requires document submission and potentially biometrics, processing takes 2–4 weeks or longer, costs CAD $100+, valid for 6 months to 10 years depending on type, more documentation needed.",
        "Both eTA and Visitor Visa allow stays of up to 6 months per visit, but a visa may be required if you have a criminal record or previous immigration issues.",
        {
          type: "callout",
          title: "When You Need a Visitor Visa Instead",
          text: "If your eTA application is refused, you have a criminal record, or you're from a visa-required country, you must apply for a Visitor Visa. There is no appeal process for eTA refusals.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is Canada eTA the same as a visa?",
      answer:
        "No, Canada eTA is not a visa. eTA is a digital travel authorization for visa-exempt nationals flying to Canada. While both allow entry, eTA is faster, cheaper, and easier to obtain (CAD $7, approved in minutes, valid 5 years). A visa requires document submission, may require biometrics, and takes longer to process.",
    },
    {
      question: "How much does Canada eTA cost?",
      answer:
        "The official Canada eTA fee is CAD $7. This fee is non-refundable, even if your application is refused. Payment can be made by credit/debit card or online payment methods.",
    },
    {
      question: "How long does Canada eTA take to process?",
      answer:
        "Most eTA applications receive an automatic decision within minutes. Some may take a few hours. It's recommended to apply at least a few days before your flight.",
    },
    {
      question: "Can I work in Canada with an eTA?",
      answer:
        "No, you cannot work in Canada with an eTA. It is only for tourism, business meetings, family visits, or transit. For work, you must apply for an appropriate Canadian work visa.",
    },
    {
      question: "Do children need Canada eTA?",
      answer:
        "Yes, all travelers, including children and infants, need their own eTA. Each person must submit an individual application and pay the CAD $7 fee.",
    },
  ],
  relatedGuides: [
    "canada-eta-requirements",
    "how-to-apply-canada-eta",
    "canada-eta-vs-visa",
    "canada-eta-validity",
  ],
};
