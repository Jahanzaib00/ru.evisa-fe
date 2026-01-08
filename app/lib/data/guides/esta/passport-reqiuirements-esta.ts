import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const passportRequirementsEsta: Guide = {
  slug: "passport-requirements-esta",
  title: "ESTA Passport Requirements: E-Passport Guide",
  description:
    "Detailed passport requirements for ESTA. E-passport specifications, validity rules, and what makes a passport eligible.",
  serviceType: ServiceType.US_ESTA,
  category: "requirements",
  pillarTopic: "service-overview",
  clusterOf: "what-is-esta",
  priority: 0.7,
  keywords: [
    "ESTA passport requirements",
    "e-passport ESTA",
    "passport for ESTA",
    "electronic passport",
    "biometric passport",
    "VWP passport requirements",
  ],
  estimatedReadTime: 10,
  lastUpdated: "2026-01-01",
  relatedGuides: [
    "what-is-esta",
    "how-to-apply-esta",
    "esta-for-minors",
    "visa-waiver-countries",
  ],
  sections: [
    {
      id: "e-passport-requirement",
      title: "What is an E-Passport?",
      content: [
        "An e-passport (electronic passport) is a traditional paper passport that contains an electronic chip. This chip stores the same information that is printed on the passport's data page, including the holder's name, date of birth, and other biographic information, as well as a digital photograph.",
        "All travelers applying for ESTA must have an e-passport from a Visa Waiver Program (VWP) country. This requirement has been in effect since April 1, 2016. If your passport does not have an electronic chip, you are not eligible for ESTA and must apply for a B-1/B-2 visa instead.",
        "How to identify an e-passport:",
        {
          type: "list",
          items: [
            "Look for the international e-passport symbol on the front cover (a rectangle with a circle and horizontal lines)",
            "The passport should state 'biometric passport' or 'electronic passport' inside",
            "E-passports are slightly thicker than traditional passports due to the chip",
            "The chip is typically embedded in the back cover or center page",
            "When opened, you may see a metallic pattern or antenna wiring",
          ],
        },
        {
          type: "callout",
          title: "Important Date",
          text: "If your passport was issued after 2006, it is almost certainly an e-passport. Most VWP countries began issuing e-passports between 2005-2007. If you have an older passport without a chip, you'll need to renew your passport before applying for ESTA.",
        },
        "The electronic chip in your passport is read at automated border control kiosks and by immigration officers. This technology speeds up the immigration process and enhances security by making passport fraud more difficult.",
      ],
    },
    {
      id: "passport-validity-rules",
      title: "Passport Validity Requirements",
      content: [
        "Your passport must meet specific validity requirements to be eligible for ESTA and to enter the United States under the Visa Waiver Program.",
        "The standard rule requires that your passport be valid for at least six months beyond your intended departure date from the United States. However, there are important exceptions to this rule.",
        {
          type: "callout",
          title: "Six-Month Club Exemption",
          text: "Citizens from certain countries (known as 'Six-Month Club' members) are exempt from the six-month passport validity rule. For these countries, your passport only needs to be valid for the duration of your stay in the U.S. These countries include the United Kingdom, Ireland, France, Germany, and most other VWP countries.",
        },
        "Countries exempt from the six-month rule (partial list):",
        {
          type: "list",
          items: [
            "United Kingdom and British territories",
            "Ireland",
            "France",
            "Germany, Austria, Switzerland",
            "Netherlands, Belgium, Luxembourg",
            "Nordic countries (Sweden, Norway, Denmark, Finland)",
            "Spain, Portugal, Italy, Greece",
            "Australia, New Zealand",
            "Japan, South Korea, Singapore",
            "Check the official CBP website for the complete current list",
          ],
        },
        "Even if your country is exempt from the six-month rule, ensure your passport remains valid for your entire stay. If your passport expires while you're in the United States, you may face difficulties with hotel check-ins, car rentals, and your departure flight.",
        {
          type: "warning",
          title: "Passport Expiration During Travel",
          text: "If your passport will expire within the next year, consider renewing it before traveling. Many countries require six months validity for entry, so if you're taking a multi-country trip, you may need the longer validity even if the U.S. doesn't require it.",
        },
      ],
    },
    {
      id: "machine-readable-passport",
      title: "Machine-Readable Passport Requirements",
      content: [
        "In addition to being an e-passport, your passport must also be machine-readable (MRP). A machine-readable passport has two lines of text (letters, numbers, and chevrons <<<) at the bottom of the biographical data page.",
        "All modern e-passports are machine-readable, so if you have an e-passport, this requirement is automatically satisfied. However, it's useful to understand what makes a passport machine-readable.",
        "Machine-readable zone characteristics:",
        {
          type: "list",
          items: [
            "Two lines of characters at the bottom of the photo/data page",
            "Each line contains exactly 44 characters",
            "Uses letters, numbers, and chevrons (<<<) as filler characters",
            "Contains encoded information: passport type, country code, name, document number, nationality, date of birth, sex, expiration date",
            "Optical character recognition (OCR) scanners read this zone at border control",
            "Speeds up passport processing and reduces manual data entry errors",
          ],
        },
        "If you have a very old passport that is not machine-readable (issued before 2000), it will not be eligible for ESTA. You must renew your passport to obtain a modern machine-readable, electronic passport before you can apply for ESTA.",
        {
          type: "callout",
          title: "Passport Damage",
          text: "The machine-readable zone must be in good condition. Water damage, tears, excessive wear, or tampering in this area can make your passport unreadable and may result in denied boarding or entry to the United States. If your MRZ is damaged, renew your passport before traveling.",
        },
      ],
    },
    {
      id: "vwp-country-requirement",
      title: "Visa Waiver Program Country Requirement",
      content: [
        "To be eligible for ESTA, you must be a citizen of one of the 42 countries participating in the Visa Waiver Program (VWP). Your passport must be issued by one of these countries.",
        "Current Visa Waiver Program countries (as of 2026):",
        {
          type: "list",
          items: [
            "Europe: Andorra, Austria, Belgium, Croatia, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Monaco, Netherlands, Norway, Poland, Portugal, San Marino, Slovakia, Slovenia, Spain, Sweden, Switzerland, United Kingdom",
            "Asia-Pacific: Australia, Brunei, Japan, New Zealand, Singapore, South Korea, Taiwan",
            "South America: Chile",
          ],
        },
        "Important notes about VWP country requirements:",
        {
          type: "list",
          items: [
            "You must be a citizen of a VWP country, not just a resident",
            "Permanent residents of VWP countries who hold passports from non-VWP countries must apply for a visa",
            "Dual citizens should use their VWP passport for ESTA application and U.S. travel",
            "If you have citizenship from both a VWP and non-VWP country, use your VWP passport",
            "Refugee travel documents and stateless person documents are not eligible for ESTA",
          ],
        },
        {
          type: "warning",
          title: "Dual Nationality Restrictions",
          text: "If you are a dual national of a VWP country and also Iraq, Syria, Iran, Sudan, Libya, Somalia, or Yemen, you are not eligible for ESTA. You must apply for a visa even if you hold a passport from a VWP country. The same applies if you traveled to these countries after March 2011.",
        },
      ],
    },
    {
      id: "passport-condition-standards",
      title: "Passport Physical Condition",
      content: [
        "Beyond validity and electronic chip requirements, your passport must be in good physical condition. Damaged passports may be rejected by airlines or U.S. immigration authorities, even if they are technically valid.",
        "Conditions that make a passport unacceptable:",
        {
          type: "list",
          items: [
            "Water damage affecting the biographical page or chip",
            "Torn or separated pages, especially the data page",
            "Significant wear that makes information illegible",
            "Unauthorized markings, writing, or alterations",
            "Damaged or non-functional chip (prevents reading at automated kiosks)",
            "Photo page lamination peeling or damaged",
            "Excessive stamps that overlap critical information",
            "Evidence of tampering or attempted alteration",
          ],
        },
        {
          type: "callout",
          title: "Photo Quality",
          text: "Your passport photo must be clear and recognizable. Even if the passport is valid, if your appearance has changed dramatically (significant weight change, different hairstyle/color, facial hair, aging), you may be questioned more extensively. Consider renewing your passport if your photo is more than 5-6 years old and no longer resembles you.",
        },
        "Airlines are particularly strict about passport condition because they face fines if they transport passengers with unacceptable documents. If an airline agent has concerns about your passport condition, they may deny boarding even if the passport is technically valid.",
        "If you notice any damage to your passport, especially to the chip area, biographical page, or machine-readable zone, renew your passport before traveling. This prevents problems at check-in or immigration.",
        {
          type: "warning",
          title: "Emergency Passports",
          text: "Emergency or temporary passports are not eligible for ESTA, even if issued by a VWP country. These documents are typically valid for a short period (3-12 months) and do not contain an electronic chip. If you have an emergency passport, you must apply for a B-1/B-2 visa to travel to the United States.",
        },
      ],
    },
    {
      id: "passport-renewal-esta",
      title: "Passport Renewal and ESTA",
      content: [
        "When you renew your passport, your current ESTA becomes invalid, even if it hasn't reached its two-year expiration date. You must apply for a new ESTA using your new passport information.",
        "Why passport renewal invalidates ESTA:",
        {
          type: "list",
          items: [
            "ESTA is electronically linked to a specific passport number",
            "When you renew your passport, you receive a new passport number",
            "The ESTA system cannot transfer an approval to a new passport",
            "You must submit a new ESTA application ($40 fee) with new passport details",
            "Previous ESTA approval doesn't guarantee approval of new application",
          ],
        },
        "If you're planning to renew your passport, consider timing carefully:",
        {
          type: "list",
          items: [
            "If you have upcoming U.S. travel within 2-3 months, wait until after your trip to renew your passport",
            "If your passport expires in less than 6 months and you're not traveling soon, renew now and apply for new ESTA",
            "If you have a valid ESTA and valid passport but passport expires soon, you can travel as long as both documents are valid on your travel dates",
            "Budget for both passport renewal and new ESTA application fees",
          ],
        },
        {
          type: "callout",
          title: "Name Changes",
          text: "If your name changes due to marriage, divorce, or legal name change, you must update your passport first, then apply for a new ESTA. The name on your ESTA must exactly match your passport. Even minor spelling differences can cause problems at check-in and immigration.",
        },
        "After receiving your new passport, wait 24-48 hours before applying for ESTA to ensure the new passport information has been registered in international databases. This prevents potential mismatches that could delay ESTA processing.",
      ],
    },
    {
      id: "biometric-data",
      title: "Biometric Data and Passport Chips",
      content: [
        "The electronic chip in your e-passport stores biometric data - unique physical characteristics that can be used to verify your identity. Understanding what data is stored and how it's used helps demystify the border control process.",
        "Data stored in e-passport chips:",
        {
          type: "list",
          items: [
            "Biographical information (name, date of birth, nationality, sex)",
            "Passport details (number, issue date, expiration date)",
            "Digital photograph from the passport (used for facial recognition)",
            "Digital signature to prevent data tampering",
            "Some countries include fingerprint data (though this is less common)",
            "Issuing country code and passport authority information",
          ],
        },
        "When you arrive in the United States, your e-passport chip is read at automated passport control (APC) kiosks or by CBP officers using handheld readers. The system:",
        {
          type: "list",
          items: [
            "Reads your biographical data from the chip",
            "Retrieves your ESTA approval from the database",
            "Captures your photo and compares it to the chip photo",
            "Collects your fingerprints and stores them",
            "Verifies that the chip data matches the printed passport",
            "Checks for any security concerns or travel alerts",
          ],
        },
        {
          type: "callout",
          title: "Privacy and Security",
          text: "E-passport chips use encryption and digital signatures to protect your data. The chip can only be read from very close range (a few inches), preventing unauthorized remote scanning. Basic access control requires the MRZ data (from the printed passport) before the chip can be fully read, adding another security layer.",
        },
        "If your passport chip is damaged and cannot be read, you may still be able to travel, but expect significant delays. Officers will need to manually verify all information, and you may face enhanced screening. In some cases, damaged chips may result in denied boarding or entry.",
      ],
    },
    {
      id: "special-passport-situations",
      title: "Special Passport Situations",
      content: [
        "Various special circumstances can affect passport eligibility for ESTA. Understanding these situations helps you determine whether your specific passport qualifies.",
        {
          type: "callout",
          title: "British Passport Variations",
          text: "The United Kingdom issues several types of passports, and not all are eligible for ESTA. British Citizen passports qualify for ESTA. British Overseas Territories Citizen (except Bermuda), British Overseas Citizen, British Subject, and British National (Overseas) passports do NOT qualify for ESTA and require a visa.",
        },
        "Other special passport situations:",
        {
          type: "list",
          items: [
            "Diplomatic and official passports: Not eligible for ESTA; must apply for appropriate visa type",
            "Children's passports: Eligible if they are e-passports from VWP countries",
            "Second passports: You can have multiple passports and choose which to use for ESTA",
            "Lost/stolen passport: Report immediately, get replacement, apply for new ESTA",
            "Damaged chip but valid passport: Technically valid but may cause entry problems",
            "Passport issued by non-recognized government: Not eligible for ESTA",
          ],
        },
        "If you have multiple passports from different countries:",
        {
          type: "list",
          items: [
            "Choose your VWP country passport for ESTA application",
            "Use the same passport for the entire trip (application and travel)",
            "Don't switch passports between ESTA application and travel",
            "If you have both VWP and non-VWP passports, always use VWP passport for U.S. travel",
            "Be aware of dual nationality restrictions for certain countries",
          ],
        },
        {
          type: "warning",
          title: "Passport Number Changes",
          text: "Some countries change passport numbers when renewing even if all other information stays the same. A new passport number requires a new ESTA application. Never try to use an ESTA issued for one passport number with a different passport.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How do I know if my passport is an e-passport?",
      answer:
        "Look for the international e-passport symbol on the front cover - a rectangular icon with a circle and horizontal lines. This symbol indicates your passport contains an electronic chip. If your passport was issued after 2006 by a VWP country, it's almost certainly an e-passport. You can also check with your passport issuing authority.",
    },
    {
      question: "Can I use ESTA if my passport doesn't have a chip?",
      answer:
        "No. All ESTA applicants must have an e-passport (electronic passport with a chip). If your passport doesn't have a chip, you are not eligible for ESTA and must apply for a B-1/B-2 visitor visa at a U.S. embassy or consulate. You should also consider renewing your passport as most countries now only issue e-passports.",
    },
    {
      question:
        "Does my passport need to be valid for six months beyond my trip?",
      answer:
        "It depends on your country. Most VWP countries are part of the 'Six-Month Club,' meaning your passport only needs to be valid for the duration of your U.S. stay, not six months beyond. However, countries not in this club do need six months validity. Check the CBP website for your specific country, or plan for six months validity to be safe.",
    },
    {
      question: "What happens to my ESTA when I renew my passport?",
      answer:
        "Your ESTA becomes invalid when you renew your passport, even if the ESTA hasn't expired. You must apply for a new ESTA using your new passport information and pay the $40 fee again. The old ESTA cannot be transferred to a new passport number. Apply for your new ESTA after receiving your new passport.",
    },
    {
      question:
        "My passport photo looks very different from how I look now. Is this a problem?",
      answer:
        "It can be. While your passport remains legally valid until its expiration date, significant appearance changes may lead to additional questioning at immigration or even denied boarding by airlines. If your appearance has changed dramatically (major weight change, different hair color, facial surgery, aging), consider renewing your passport to avoid potential issues.",
    },
    {
      question: "Can I use an emergency or temporary passport for ESTA?",
      answer:
        "No. Emergency passports and temporary travel documents are not eligible for ESTA, even if issued by a VWP country. These documents typically don't contain an electronic chip and have short validity periods. If you have an emergency passport, you must apply for a B-1/B-2 visa to travel to the United States.",
    },
    {
      question: "What if my passport chip is damaged?",
      answer:
        "A damaged chip can cause significant problems. While you may technically still be able to enter the U.S., you'll likely face long delays as officers manually verify your information. Airlines may deny boarding if they cannot read your chip. If your chip is damaged, it's strongly recommended to renew your passport before traveling.",
    },
    {
      question:
        "I have dual citizenship - which passport should I use for ESTA?",
      answer:
        "Use your Visa Waiver Program country passport for both the ESTA application and your U.S. travel. If you hold passports from both a VWP and non-VWP country, use your VWP passport. However, if one of your citizenships is from Iraq, Syria, Iran, Sudan, Libya, Somalia, or Yemen, you are not eligible for ESTA and must apply for a visa.",
    },
    {
      question:
        "Do I need a new ESTA if my name changes but my passport number stays the same?",
      answer:
        "Yes. Any change to your biographical information requires a new ESTA. First, update your passport with your new name through your passport issuing authority. Some countries issue a new passport with a new number, while others may endorse the change in your existing passport. Either way, you'll need to apply for a new ESTA with the updated information.",
    },
  ],
};
