import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const estaDeniedWhatToDo: Guide = {
  slug: "esta-denied-what-to-do",
  title: "ESTA Denied: What to Do When Travel Not Authorized",
  description:
    "Common reasons for ESTA denial and what to do if your ESTA is rejected. Next steps after denial.",
  serviceType: ServiceType.US_ESTA,
  category: "status",
  pillarTopic: "troubleshooting",
  isPillarPage: true,
  priority: 0.8,
  keywords: [
    "ESTA denied",
    "ESTA rejected",
    "travel not authorized",
    "ESTA denial reasons",
    "what to do ESTA denied",
    "visa after ESTA denial",
  ],
  estimatedReadTime: 11,
  lastUpdated: "2025-01-15",
  relatedGuides: [
    "what-is-esta",
    "how-to-apply-esta",
    "check-esta-status",
    "passport-requirements-esta",
  ],
  sections: [
    {
      id: "understanding-esta-denial",
      title: "Understanding 'Travel Not Authorized'",
      content: [
        "When your ESTA application is denied, the status will show as 'Travel Not Authorized' in the ESTA system. This is a disappointing outcome, but it's important to understand what it means and that you still have options for U.S. travel.",
        "A 'Travel Not Authorized' status means you cannot travel to the United States under the Visa Waiver Program. You are not banned from the U.S., but you cannot use the streamlined ESTA process. Instead, you must apply for a traditional visa through a U.S. embassy or consulate.",
        {
          type: "callout",
          title: "Important Distinction",
          text: "An ESTA denial is NOT the same as a visa denial. Being denied ESTA does not mean you'll be denied a visa. Many people who are ineligible for ESTA successfully obtain visitor visas. The visa application process is more thorough and allows you to provide documentation and attend an interview to demonstrate your eligibility.",
        },
        "Key facts about ESTA denial:",
        {
          type: "list",
          items: [
            "You cannot appeal an ESTA denial",
            "You will not receive a detailed explanation for the denial",
            "You cannot reapply for ESTA if denied (with rare exceptions)",
            "The $4 processing fee is not refunded, but you won't be charged the $17 authorization fee",
            "Your denial is recorded in the system permanently",
            "You must apply for a B-1/B-2 visa to travel to the U.S.",
          ],
        },
        "ESTA denials are relatively uncommon. According to U.S. Customs and Border Protection, the approval rate for ESTA applications is over 99%. If you've been denied, it's usually for a specific reason related to your eligibility, travel history, or answers to security questions.",
      ],
    },
    {
      id: "common-denial-reasons",
      title: "Common Reasons for ESTA Denial",
      content: [
        "While the ESTA system doesn't provide specific reasons for denial, certain factors commonly result in 'Travel Not Authorized' status. Understanding these can help you identify why you were denied and prepare for your visa application.",
        "Most common reasons for ESTA denial:",
        {
          type: "list",
          items: [
            "Previous visa denial or refusal to the United States",
            "Previous overstay in the U.S. or another country",
            "Previous deportation or removal from the United States",
            "Criminal history, including arrests even without conviction",
            "Travel to restricted countries (Iran, Iraq, Syria, North Korea, Sudan, Libya, Somalia, Yemen) since March 2011",
            "Dual nationality with restricted countries",
            "Communicable disease or health condition",
            "Previous immigration violations in the U.S. or other countries",
            "Answering 'Yes' to any of the eligibility questions",
          ],
        },
        {
          type: "warning",
          title: "Honesty is Critical",
          text: "Never lie on your ESTA application. If you answer questions dishonestly and are later discovered, you could be permanently barred from the United States. Even if the truth might lead to ESTA denial, being honest allows you to apply for a visa and explain your situation. Fraud or misrepresentation carries far more serious consequences.",
        },
        "Technical reasons for denial:",
        {
          type: "list",
          items: [
            "Passport doesn't meet requirements (not an e-passport, damaged chip)",
            "Errors or discrepancies in application information",
            "Multiple ESTA applications submitted simultaneously",
            "Passport from non-VWP country or invalid passport type",
            "Previous ESTA was revoked or canceled",
          ],
        },
        "If you believe your denial was due to an error in your application (wrong passport number, name misspelling, incorrect answer), you may be able to submit a new application. However, if the denial is based on your actual travel history or circumstances, reapplying won't help and you should proceed directly to visa application.",
      ],
    },
    {
      id: "immediate-steps-after-denial",
      title: "Immediate Steps After ESTA Denial",
      content: [
        "Receiving an ESTA denial can be stressful, especially if you have upcoming travel plans. Take the following steps immediately to understand your options and begin the visa application process.",
        "What to do immediately after denial:",
        {
          type: "list",
          items: [
            "Don't panic - ESTA denial doesn't mean you can't travel to the U.S.",
            "Do not attempt to board a flight to the U.S. with denied ESTA",
            "Review your application for any errors or incorrect information",
            "Check if you answered any questions incorrectly",
            "Document all your application details (confirmation number, dates, answers)",
            "Begin researching the B-1/B-2 visa application process",
            "Contact the nearest U.S. embassy or consulate",
            "If you have non-refundable tickets or reservations, contact travel insurance",
          ],
        },
        {
          type: "callout",
          title: "Travel Plans",
          text: "If you have upcoming U.S. travel booked, contact your airline immediately about your situation. Explain that your ESTA was denied and you're applying for a visa instead. Many airlines will allow you to change your flight dates without a fee if you're waiting for visa processing, especially if you have travel insurance.",
        },
        "Determine if reapplication makes sense:",
        {
          type: "list",
          items: [
            "Clear application error (wrong passport number, typo in name): Reapply with correct information",
            "Incorrect answer to eligibility question (clicked wrong box accidentally): Reapply with correct answer",
            "Legitimate eligibility issue (previous overstay, criminal history, restricted country travel): Do NOT reapply; apply for visa instead",
            "Unclear reason for denial: Contact CBP Information Center or proceed to visa application",
          ],
        },
        "The CBP Information Center can provide limited assistance. Call 1-202-344-3710 (international) or visit the official ESTA website's contact page. However, they typically cannot provide specific reasons for denial or guarantee that reapplication will succeed.",
      ],
    },
    {
      id: "applying-for-visa-after-denial",
      title: "Applying for a U.S. Visa After ESTA Denial",
      content: [
        "The most reliable path to U.S. travel after ESTA denial is applying for a B-1/B-2 visitor visa. This is a more comprehensive process than ESTA, but it allows you to present documentation and explain your circumstances in an interview.",
        "B-1/B-2 visa application process overview:",
        {
          type: "list",
          items: [
            "Complete the DS-160 online visa application form",
            "Pay the visa application fee ($185 USD, non-refundable)",
            "Schedule a visa interview at the U.S. embassy or consulate in your country",
            "Gather supporting documentation (financial statements, employment letter, property ownership, etc.)",
            "Attend the visa interview in person",
            "Provide biometric data (fingerprints and photo)",
            "Wait for visa processing (typically 3-10 business days after interview)",
            "If approved, receive your passport with visa stamp",
          ],
        },
        {
          type: "callout",
          title: "Processing Time",
          text: "Visa processing typically takes 2-4 weeks from application to interview, plus 3-10 business days for the visa to be issued after a successful interview. In some countries, wait times for interview appointments can be several months. Apply as early as possible if you have upcoming travel plans.",
        },
        "At your visa interview, you'll need to demonstrate:",
        {
          type: "list",
          items: [
            "Strong ties to your home country (job, family, property, financial assets)",
            "Legitimate purpose for U.S. travel (tourism, business, medical treatment)",
            "Sufficient financial resources to support your trip",
            "Intent to return home after your visit",
            "No intention to overstay or immigrate",
            "Explanation for ESTA denial if asked (be honest and concise)",
          ],
        },
        "The visa approval rate varies by country and individual circumstances, but many people who are denied ESTA successfully obtain visitor visas. The interview allows you to provide context and documentation that the ESTA application doesn't accommodate.",
        {
          type: "warning",
          title: "ESTA Denial Disclosure",
          text: "You must disclose your ESTA denial on your visa application. The DS-160 form asks if you've ever been denied a U.S. visa or entry authorization. Answer 'Yes' and include ESTA denial. Failing to disclose this is fraud and will result in permanent visa ineligibility.",
        },
      ],
    },
    {
      id: "documentation-for-visa",
      title: "Preparing Documentation for Your Visa Interview",
      content: [
        "Strong documentation is key to a successful visa interview after ESTA denial. Consular officers need to see evidence that you qualify for a visitor visa and will return home after your trip.",
        "Essential documents to bring to your visa interview:",
        {
          type: "list",
          items: [
            "Valid passport (must be valid for at least 6 months beyond your intended stay)",
            "DS-160 confirmation page with barcode",
            "Visa fee payment receipt",
            "Interview appointment confirmation",
            "Passport-style photo (if not uploaded with DS-160)",
            "Evidence of ties to home country (explained below)",
            "Travel itinerary and purpose of visit documentation",
            "Financial documentation showing ability to pay for trip",
          ],
        },
        "Evidence of strong ties to your home country:",
        {
          type: "list",
          items: [
            "Employment: Letter from employer stating position, salary, approved leave",
            "Business ownership: Business registration, tax returns, financial statements",
            "Property ownership: Deeds, mortgage statements, rental agreements",
            "Family ties: Marriage certificate, children's birth certificates, family photos",
            "Educational enrollment: Letter from university, student ID, class schedule",
            "Financial assets: Bank statements (last 3-6 months), investment accounts, pension statements",
          ],
        },
        {
          type: "callout",
          title: "Purpose of Visit Documentation",
          text: "Bring documentation specific to your trip purpose: hotel reservations, tour bookings, invitation letters from U.S. contacts, business meeting confirmations, medical appointment letters, event tickets, etc. Concrete plans demonstrate legitimate travel intent.",
        },
        "If your ESTA was denied due to specific issues, bring documentation addressing those concerns:",
        {
          type: "list",
          items: [
            "Previous overstay: Evidence of extenuating circumstances, proof you've complied with immigration laws since",
            "Criminal history: Court records showing case disposition, evidence of rehabilitation",
            "Dual nationality concerns: Explanation of your citizenship status and ties to VWP country",
            "Travel to restricted countries: Documentation of travel purpose (work, family, humanitarian)",
          ],
        },
      ],
    },
    {
      id: "visa-interview-tips",
      title: "Visa Interview Tips After ESTA Denial",
      content: [
        "The visa interview is your opportunity to demonstrate why you should be granted a visa despite your ESTA denial. Preparation and honesty are essential for success.",
        "Interview preparation strategies:",
        {
          type: "list",
          items: [
            "Arrive early (at least 30 minutes before your appointment)",
            "Dress professionally and conservatively",
            "Bring all documents organized in a folder or binder",
            "Review your DS-160 answers before the interview",
            "Prepare a brief, honest explanation of your ESTA denial if asked",
            "Practice answering common interview questions",
            "Be ready to explain your ties to your home country",
            "Have specific details about your trip ready (dates, places, people you'll visit)",
          ],
        },
        {
          type: "callout",
          title: "Common Interview Questions",
          text: "Why do you want to visit the U.S.? How long will you stay? What do you do for work? Who will you visit? What ties do you have to your home country? Why was your ESTA denied? Have you been to the U.S. before? Who is paying for your trip? When will you return?",
        },
        "How to discuss your ESTA denial:",
        {
          type: "list",
          items: [
            "Be honest and direct - don't try to hide or minimize it",
            "Keep explanation brief and factual",
            "If denial was due to an error, explain what happened",
            "If due to eligibility issue, acknowledge it and explain context if relevant",
            "Don't blame the system or argue about the denial",
            "Focus on why you qualify for a visa despite the ESTA denial",
            "Emphasize your intent to comply with visa conditions and return home",
          ],
        },
        {
          type: "warning",
          title: "Don't Argue or Become Defensive",
          text: "Consular officers make quick decisions based on interviews and documentation. Arguing, becoming emotional, or being defensive will hurt your chances. Answer questions politely and directly. If denied, ask if there's anything you can provide for reconsideration, but accept the decision professionally.",
        },
        "After the interview, the officer will typically tell you whether you're approved, denied, or if your application needs administrative processing (additional review). If approved, your passport will be returned with your visa in 3-10 business days. If denied, you can reapply, but address the reasons for denial first.",
      ],
    },
    {
      id: "preventing-future-denials",
      title: "Preventing Future ESTA Denials",
      content: [
        "If you were denied ESTA due to an error or misunderstanding, understanding how to avoid future denials is important. If you eventually obtain a new passport or your circumstances change, you may be able to apply for ESTA again.",
        "Tips for successful future ESTA applications:",
        {
          type: "list",
          items: [
            "Double-check all information before submitting - passport number, name spelling, dates",
            "Read each eligibility question carefully before answering",
            "If unsure about a question, research or seek clarification before answering",
            "Don't rush through the application - take your time",
            "Have your passport, previous U.S. visa information, and travel details ready",
            "Use official ESTA website only (esta.cbp.dhs.gov)",
            "Avoid third-party websites that charge excessive fees or may submit incorrect information",
            "Keep records of your application details and confirmation number",
          ],
        },
        {
          type: "callout",
          title: "When You Can Reapply for ESTA",
          text: "Generally, once denied, you should apply for a visa rather than ESTA. However, if you obtain a new passport number OR if significant time has passed and your circumstances have materially changed (e.g., criminal record was expunged, you're no longer a dual national of a restricted country), you may attempt ESTA again. Consult with an immigration attorney first.",
        },
        "Understanding eligibility questions:",
        {
          type: "list",
          items: [
            "Communicable disease: TB, Ebola, etc. Common illnesses like flu or COVID don't count",
            "Physical or mental disorder: Only if it poses danger to yourself or others",
            "Drug abuse or addiction: Past or current issues with illegal drugs",
            "Arrest or conviction: Any arrest, even without conviction, including expunged records",
            "Visa denial or refusal: Any U.S. visa denial or entry refusal, including ESTA",
            "Overstay: Stayed beyond authorized period in any country",
            "Work without authorization: Worked illegally in the U.S. or violated visa terms",
          ],
        },
        {
          type: "warning",
          title: "Avoid Application Errors",
          text: "Common errors that lead to denial: selecting wrong passport type, entering wrong passport number, misspelling name, entering wrong date of birth, accidentally clicking 'Yes' to eligibility questions. These simple mistakes can result in denial, so review everything carefully before submission.",
        },
      ],
    },
    {
      id: "alternative-travel-options",
      title: "Alternative Options After ESTA Denial",
      content: [
        "While the B-1/B-2 visa is the most common solution after ESTA denial, other options may be available depending on your circumstances and travel purpose.",
        "Alternative visa types to consider:",
        {
          type: "list",
          items: [
            "F-1 Student Visa: If you're planning to study in the U.S.",
            "J-1 Exchange Visitor Visa: For approved exchange programs, internships, or cultural exchanges",
            "H-1B Work Visa: If you have a job offer from a U.S. employer",
            "L-1 Intracompany Transfer Visa: If your company is transferring you to a U.S. office",
            "E-2 Investor Visa: If you're investing in a U.S. business",
            "O-1 Visa: For individuals with extraordinary ability in sciences, arts, education, business, or athletics",
          ],
        },
        "Each visa type has specific requirements, processing times, and fees. If your U.S. travel is for work, study, or another specific purpose beyond tourism, investigate whether a specialized visa better fits your situation.",
        {
          type: "callout",
          title: "Canadian Border Entry",
          text: "VWP citizens who are denied ESTA but need to visit the U.S. urgently sometimes consider entering through the Canadian or Mexican land border. Be aware that even though you don't need ESTA for land border entry, you'll still undergo full inspection by CBP officers. If you're ineligible for ESTA, you may also be deemed inadmissible at the land border. A visa is the safest option.",
        },
        "If you absolutely cannot obtain a visa in time for critical travel (medical emergency, family funeral, urgent business), contact the U.S. embassy or consulate to request an emergency appointment. They sometimes accommodate genuine emergencies with expedited interview scheduling.",
        "Long-term solutions if permanently ineligible for ESTA:",
        {
          type: "list",
          items: [
            "Maintain a valid B-1/B-2 visa (typically valid for 10 years with multiple entries)",
            "Work with immigration attorney to address underlying inadmissibility issues",
            "If criminal record is the issue, seek expungement or pardon if available in your country",
            "If dual nationality is the issue, consider whether renouncing one citizenship is worthwhile (major decision)",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Why was my ESTA denied?",
      answer:
        "The ESTA system doesn't provide specific denial reasons, but common causes include: previous visa denial or overstay, travel to restricted countries (Iran, Iraq, Syria, etc.), dual nationality with restricted countries, criminal history, answering 'Yes' to any eligibility questions, or passport issues. Review your application carefully to identify potential causes.",
    },
    {
      question: "Can I appeal an ESTA denial?",
      answer:
        "No, there is no appeals process for ESTA denials. The Department of Homeland Security's decision is final. However, you can apply for a B-1/B-2 visitor visa through a U.S. embassy or consulate, which includes an interview where you can present documentation and explain your circumstances.",
    },
    {
      question: "Can I reapply for ESTA after being denied?",
      answer:
        "Generally, no. If you were legitimately denied due to eligibility issues, reapplying won't change the outcome and wastes the $40 fee. Only reapply if your denial was clearly due to an application error (wrong passport number, typo, accidentally clicked wrong answer). Otherwise, apply for a visa instead.",
    },
    {
      question: "How long does it take to get a visa after ESTA denial?",
      answer:
        "Visa processing typically takes 2-4 weeks to schedule an interview appointment (longer in some countries), followed by 3-10 business days after your interview for visa issuance if approved. Total timeline is usually 3-8 weeks, but can be several months in countries with high demand. Apply as early as possible.",
    },
    {
      question: "Does ESTA denial mean I can never visit the United States?",
      answer:
        "No. ESTA denial only means you cannot use the Visa Waiver Program. You can still apply for a visitor visa (B-1/B-2) and many people who are denied ESTA successfully obtain visas. The visa process is more thorough and allows you to present documentation and attend an interview to demonstrate your eligibility.",
    },
    {
      question: "Will I get my ESTA fee refunded if denied?",
      answer:
        "Partially. The $4 processing fee is non-refundable whether approved or denied. However, you will not be charged the $17 authorization fee if your ESTA is denied. So you'll only lose $4, not the full $40.",
    },
    {
      question: "Should I disclose my ESTA denial when applying for a visa?",
      answer:
        "Yes, absolutely. The DS-160 visa application form asks if you've ever been denied a U.S. visa or entry authorization. You must answer 'Yes' and include your ESTA denial. Failing to disclose this is fraud and will result in permanent visa ineligibility. Always be honest on visa applications.",
    },
    {
      question: "Can I enter the U.S. through Canada or Mexico without ESTA?",
      answer:
        "While you don't technically need ESTA for land border entry, you'll still undergo full inspection by CBP officers. If you're ineligible for ESTA due to overstay, criminal history, or other serious issues, you'll likely be deemed inadmissible at the land border as well. The safest and most reliable option is obtaining a proper visa.",
    },
    {
      question: "What should I tell the visa officer about my ESTA denial?",
      answer:
        "Be brief, honest, and factual. If you know why you were denied, explain it directly: 'I was denied ESTA because I previously overstayed by two weeks in 2018. I have complied with all immigration laws since then.' If you don't know why, say so: 'I'm not certain why I was denied, but I'm happy to provide any documentation you need.' Don't argue or blame the system.",
    },
    {
      question: "Can an immigration lawyer help me after ESTA denial?",
      answer:
        "Yes, particularly if your denial was due to complex issues like criminal history, previous immigration violations, or dual nationality concerns. An immigration attorney can review your situation, advise whether you're likely to obtain a visa, help prepare your application and documentation, and coach you for your interview. This is especially valuable for complicated cases.",
    },
  ],
};
