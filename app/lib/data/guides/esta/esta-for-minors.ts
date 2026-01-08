import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const estaForMinors: Guide = {
  slug: "esta-for-minors",
  title: "ESTA for Children and Minors: Complete Guide",
  description:
    "Do children need ESTA? How to apply for ESTA for minors, infants, and children traveling to the U.S.",
  serviceType: ServiceType.US_ESTA,
  category: "travel",
  pillarTopic: "travel",
  isPillarPage: true,
  priority: 0.7,
  keywords: [
    "ESTA for children",
    "ESTA for minors",
    "child ESTA",
    "baby ESTA",
    "infant ESTA application",
    "children traveling to USA",
  ],
  estimatedReadTime: 9,
  lastUpdated: "2026-01-01",
  relatedGuides: [
    "what-is-esta",
    "how-to-apply-esta",
    "passport-requirements-esta",
    "esta-cost-fees",
  ],
  sections: [
    {
      id: "children-need-esta",
      title: "Do Children and Infants Need ESTA?",
      content: [
        "Yes, all travelers entering the United States under the Visa Waiver Program must have an approved ESTA, regardless of age. This includes infants, toddlers, children, and teenagers. There are no age exemptions for the ESTA requirement.",
        "Even if a child is traveling in their parent's arms and does not occupy a separate airplane seat, they still require their own individual ESTA approval. Each person, regardless of age, must have their own valid passport and approved ESTA before boarding a flight to the United States.",
        "The ESTA requirement applies to all VWP travelers, including:",
        {
          type: "list",
          items: [
            "Newborns and infants (under 2 years old)",
            "Toddlers and young children (2-12 years old)",
            "Teenagers (13-17 years old)",
            "Children traveling with parents or guardians",
            "Unaccompanied minors traveling alone",
            "Children with dual citizenship from VWP countries",
          ],
        },
        {
          type: "callout",
          title: "Important for Parents",
          text: "Do not attempt to travel to the U.S. with a child who does not have an approved ESTA. Airlines will deny boarding, and you will not be permitted to fly. Apply for your child's ESTA well in advance of your travel date.",
        },
      ],
    },
    {
      id: "application-process-minors",
      title: "How to Apply for ESTA for a Child",
      content: [
        "Parents or legal guardians can apply for ESTA on behalf of their children. The application process is identical to adult applications, but parents complete the form with the child's information. Here's the step-by-step process:",
        "The parent or guardian must have the child's valid passport information available before starting the application. The passport must be an e-passport (electronic passport with a chip) from a Visa Waiver Program country and must be valid for at least six months beyond your intended stay.",
        {
          type: "list",
          items: [
            "Visit the official ESTA website at esta.cbp.dhs.gov",
            "Click on 'New Application' and select 'Individual Application'",
            "Enter the child's passport information exactly as it appears on their passport",
            "Provide the child's biographical information (name, date of birth, place of birth)",
            "Answer all eligibility questions on behalf of the child",
            "Provide parent or guardian contact information in the emergency contact section",
            "Review all information carefully for accuracy",
            "Pay the $40 USD application fee using a valid credit or debit card",
          ],
        },
        {
          type: "callout",
          title: "Third Party Authorization",
          text: "When applying on behalf of a child, you will be asked to certify that you are authorized to submit the application. Parents and legal guardians are automatically authorized. The application will record the applicant information separately from the third-party applicant (parent/guardian).",
        },
        "After submitting the application, you will receive a confirmation number. Keep this number safe, as you'll need it to check the application status. Most ESTA applications for children are processed within minutes, but it can take up to 72 hours.",
      ],
    },
    {
      id: "child-passport-requirements",
      title: "Passport Requirements for Children",
      content: [
        "Children traveling under the Visa Waiver Program must have their own individual passport. They cannot be included on a parent's passport. The passport must meet specific requirements established by U.S. Customs and Border Protection.",
        "Child passport requirements for ESTA:",
        {
          type: "list",
          items: [
            "Must be an e-passport (electronic passport with an embedded chip)",
            "Must be machine-readable with two lines of text at the bottom",
            "Must be issued by a Visa Waiver Program country",
            "Must be valid for at least six months beyond your U.S. stay",
            "Must be in good physical condition (no water damage, tears, or tampering)",
            "Child's photo must be current and meet biometric standards",
            "Cannot be an emergency or temporary passport",
          ],
        },
        "Many countries issue child passports with shorter validity periods (typically 5 years instead of 10 years for adults). Ensure your child's passport will remain valid for the entire duration of your trip plus six months beyond.",
        {
          type: "warning",
          title: "Passport Photo Requirements",
          text: "Passport photos for infants and young children can be challenging. The child must have their eyes open, be looking at the camera, and have a neutral expression. While this is difficult with babies, most passport agencies understand and have some flexibility for very young children.",
        },
      ],
    },
    {
      id: "child-esta-fees",
      title: "ESTA Fees for Children and Minors",
      content: [
        "The ESTA application fee for children is exactly the same as for adults: $40 USD per application. There are no discounts, family rates, or reduced fees for minors, infants, or children.",
        "The $40 fee breaks down as follows:",
        {
          type: "list",
          items: [
            "$4 processing fee (charged for all applications, even if denied)",
            "$17 authorization fee (only charged if ESTA is approved)",
            "Valid for 2 years from approval date or until passport expires",
            "Multiple entries allowed during the 2-year validity period",
          ],
        },
        "While the fee may seem expensive for infants who may only use the ESTA once, remember that the approved ESTA is valid for two years. If you plan multiple trips to the United States, your child can use the same ESTA for all visits within the two-year period.",
        {
          type: "callout",
          title: "Fee Payment",
          text: "Payment must be made by credit or debit card (Visa, MasterCard, American Express, Discover, JCB, or Diners Club). The cardholder does not need to be the traveler or parent - any valid payment card can be used.",
        },
        "If your child's passport expires before the two-year ESTA validity period ends, the ESTA will become invalid when the passport expires. You will need to obtain a new passport for your child and apply for a new ESTA using the new passport information.",
      ],
    },
    {
      id: "traveling-with-children",
      title: "Traveling to the U.S. with Children",
      content: [
        "When traveling to the United States with children, proper preparation ensures a smooth entry process. U.S. Customs and Border Protection has specific procedures and requirements for minors entering the country.",
        "Essential documents to bring when traveling with children:",
        {
          type: "list",
          items: [
            "Child's valid passport with at least 6 months validity",
            "Printed copy of ESTA approval (confirmation number at minimum)",
            "Birth certificate for each child (recommended but not required)",
            "Consent letter if child is traveling with only one parent",
            "Custody documents if applicable",
            "Return or onward travel tickets",
            "Hotel reservations or U.S. address where you'll be staying",
          ],
        },
        {
          type: "warning",
          title: "Single Parent or Guardian Travel",
          text: "If a child is traveling with only one parent or with grandparents, guardians, or other adults, carry a notarized letter of consent from the non-traveling parent(s). While not always required, CBP officers may request this documentation, especially if they have concerns about potential child abduction.",
        },
        "At U.S. immigration, children can be included in their parents' declaration for customs purposes, but each person (including infants) will have their biometric data collected - fingerprints and photo. Officers are experienced with children and will work quickly to minimize stress.",
      ],
    },
    {
      id: "unaccompanied-minors",
      title: "Unaccompanied Minors and ESTA",
      content: [
        "Unaccompanied minors (children traveling alone without a parent or guardian) can travel to the United States under the Visa Waiver Program with an approved ESTA, but additional considerations apply.",
        "Most airlines have specific policies for unaccompanied minors, typically requiring:",
        {
          type: "list",
          items: [
            "Minimum age requirements (usually 5-15 years old, varies by airline)",
            "Unaccompanied minor processing fee (typically $150+ each way)",
            "Complete information about who will pick up the child in the U.S.",
            "Contact information for both sending and receiving adults",
            "Special check-in procedures at the airport",
            "Flight restrictions (direct flights only, no connections for younger children)",
          ],
        },
        "At U.S. immigration, unaccompanied minors will be processed by CBP officers who are trained to interview children. The child should know:",
        {
          type: "list",
          items: [
            "Why they are visiting the United States",
            "Who they are staying with (name and relationship)",
            "The address where they will be staying",
            "How long they plan to stay",
            "When they are returning to their home country",
          ],
        },
        {
          type: "callout",
          title: "Supporting Documentation",
          text: "Unaccompanied minors should carry copies of: invitation letter from U.S. host, host's contact information and address, notarized parental consent letter, return flight tickets, and proof of accommodation. These documents help demonstrate the legitimate purpose of travel.",
        },
      ],
    },
    {
      id: "esta-validity-growing-children",
      title: "ESTA Validity as Children Grow",
      content: [
        "As children grow, their appearance changes significantly. This can raise questions about ESTA validity, passport photos, and travel documentation. Understanding how these changes affect travel authorization is important for parents.",
        "Your child's ESTA remains valid for two years or until their passport expires, whichever comes first. However, several situations may require obtaining a new ESTA:",
        {
          type: "list",
          items: [
            "Child's passport expires (even if ESTA period hasn't ended)",
            "Child receives a new passport for any reason",
            "Child's name changes (marriage, adoption, legal name change)",
            "Child's citizenship changes",
            "Child's gender is changed on their passport",
            "Answers to ESTA eligibility questions change",
          ],
        },
        "While a child's appearance may change dramatically during the two-year ESTA validity period, this alone does not invalidate the ESTA. CBP officers are trained to account for natural changes in children's appearances. However, the passport photo should be reasonably current.",
        {
          type: "warning",
          title: "Passport Renewal for Children",
          text: "Many countries issue child passports with 5-year validity instead of the standard 10 years for adults. When your child's passport expires, you must obtain a new passport AND apply for a new ESTA using the new passport information. The old ESTA will become invalid when the old passport expires.",
        },
        "If you're planning to travel near the end of your child's passport validity, consider renewing the passport early and obtaining a new ESTA. This prevents complications if passport processing takes longer than expected.",
      ],
    },
    {
      id: "special-situations-children",
      title: "Special Situations for Children",
      content: [
        "Several special situations may affect ESTA applications for children. Understanding these scenarios helps parents navigate unusual circumstances.",
        "Children with dual citizenship must choose which passport to use for ESTA travel. If the child holds citizenship from both a VWP country and a non-VWP country, they should use their VWP passport for ESTA application and U.S. travel. If one of the citizenships is from Iraq, Syria, Iran, Sudan, Libya, Somalia, or Yemen, additional restrictions may apply.",
        {
          type: "callout",
          title: "Born in the United States",
          text: "If your child was born in the United States, they are likely a U.S. citizen and should not apply for ESTA. Instead, obtain a U.S. passport for the child. U.S. citizens, even dual nationals, must enter the United States using a U.S. passport.",
        },
        "Adopted children traveling with adoptive parents should use their current legal name as it appears on their passport. If adoption is recent and name change documentation is still pending, carry adoption papers and court orders in case questions arise at immigration.",
        "Children with previous U.S. visa denials or overstays by parents should be evaluated carefully. While a parent's immigration violation doesn't automatically affect a child's ESTA, be prepared to answer questions honestly about family immigration history if asked.",
        {
          type: "list",
          items: [
            "Foster children: Carry legal custody documents and authorization letters",
            "Children in guardianship: Bring court orders establishing guardianship",
            "Children with medical conditions: Carry relevant medical documentation",
            "Newborns: Apply for passport and ESTA as soon as passport is received",
            "School groups: Each child needs individual ESTA, group leaders should coordinate",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question:
        "Does my baby need an ESTA even though they won't have their own seat on the plane?",
      answer:
        "Yes, all travelers entering the U.S. under the Visa Waiver Program need an approved ESTA, regardless of age or whether they have their own seat. Even infants traveling as lap children must have their own passport and approved ESTA before boarding the flight.",
    },
    {
      question: "Can I include my child on my ESTA application?",
      answer:
        "No, each person must have their own individual ESTA application, including children and infants. There is no family or group ESTA option. Parents or guardians can submit applications on behalf of their children, but each child needs a separate application and separate $40 fee.",
    },
    {
      question: "How long does an ESTA for a child last?",
      answer:
        "A child's ESTA is valid for two years from the approval date or until the child's passport expires, whichever comes first. Since many countries issue child passports with 5-year validity, the ESTA will likely remain valid for the full two years. However, you'll need a new ESTA if the child gets a new passport.",
    },
    {
      question:
        "What if my child's appearance has changed significantly since their passport photo?",
      answer:
        "Natural changes in a child's appearance do not invalidate their ESTA or passport, as long as the documents remain within their validity period. CBP officers are trained to account for how children grow and change. However, if the photo is extremely outdated or the child is unrecognizable, consider renewing the passport.",
    },
    {
      question:
        "Do I need a consent letter if I'm traveling alone with my child?",
      answer:
        "While not always required, it's highly recommended to carry a notarized consent letter from the non-traveling parent if you're traveling to the U.S. with a child alone. CBP officers may ask for this documentation to prevent international child abduction. The letter should include both parents' information, the child's information, travel dates, and the non-traveling parent's consent.",
    },
    {
      question: "Can my teenager apply for their own ESTA?",
      answer:
        "Yes, teenagers can complete their own ESTA application if they have the necessary information (passport details, travel plans, credit card for payment). However, a parent or guardian should review the application for accuracy before submission. Many families prefer parents to handle ESTA applications for all minor children to ensure consistency.",
    },
    {
      question: "What happens if my child's ESTA is denied?",
      answer:
        "ESTA denials for children are rare but can occur. If denied, your child cannot travel to the U.S. under the Visa Waiver Program and must apply for a B-2 tourist visa at a U.S. embassy or consulate. Common denial reasons include passport issues, eligibility question answers, or previous immigration violations. The denial notice will not provide a specific reason.",
    },
    {
      question:
        "My child was born in the U.S. but we live abroad. Do they need ESTA?",
      answer:
        "No. If your child was born in the United States, they are a U.S. citizen regardless of where you live now. U.S. citizens cannot and should not apply for ESTA. Instead, obtain a U.S. passport for your child from the nearest U.S. embassy or consulate. U.S. citizens must enter the United States using their U.S. passport.",
    },
    {
      question: "How do I check the status of my child's ESTA application?",
      answer:
        "Use the same status check process as adult applications. Visit the official ESTA website, select 'Check ESTA Status,' and enter your child's passport information and application number. The status will show as pending, authorized, or travel not authorized. Keep the application number in your travel records.",
    },
  ],
};
