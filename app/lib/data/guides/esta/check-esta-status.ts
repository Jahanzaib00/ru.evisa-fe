import { Guide } from "../types";
import { ServiceType } from "@/app/lib/config/services";

export const checkEstaStatus: Guide = {
  slug: "check-esta-status",
  title: "How to Check ESTA Status Online - Complete Lookup Guide 2025",
  description:
    "Check your ESTA application status online using the official CBP website. Complete step-by-step guide to tracking your application, understanding status types, and what to do if you lost your application number.",
  serviceType: ServiceType.US_ESTA,
  category: "status",
  pillarTopic: "status-management",
  isPillarPage: true,
  priority: 0.8,
  keywords: [
    "check ESTA status",
    "ESTA status check",
    "track ESTA application",
    "ESTA lookup",
    "check ESTA approval",
    "ESTA application number",
    "verify ESTA",
    "ESTA status online",
  ],
  estimatedReadTime: 9,
  lastUpdated: "2025-01-15",
  sections: [
    {
      id: "introduction",
      title: "Introduction: Checking Your ESTA Status",
      content: [
        "Checking your ESTA (Electronic System for Travel Authorization) status is essential to confirm your application has been approved before traveling to the United States. You can check your status at any time using the official CBP website, whether you just applied or your ESTA was approved years ago.",
        {
          type: "callout",
          title: "Quick Access",
          text: "You can check your ESTA status 24/7 online at esta.cbp.dhs.gov. The status check is free and provides real-time information about your authorization.",
        },
      ],
    },
    {
      id: "how-to-check-step-by-step",
      title: "How to Check Your ESTA Status: Step-by-Step",
      content: [
        "There are two methods to check your ESTA status, depending on whether you have your application number:",
        "Method 1: Check with Application Number (Fastest)",
        {
          type: "list",
          items: [
            "Go to the official ESTA website: esta.cbp.dhs.gov",
            'Click "Check ESTA Status" or "Check Individual Status"',
            'Select "Individual Status Inquiry" option',
            "Enter your Application Number (a 14-character alphanumeric code starting with a letter)",
            "Enter your date of birth (MM/DD/YYYY format)",
            'Click "Check Status"',
            "Your ESTA status will be displayed immediately",
          ],
        },
        "Method 2: Check without Application Number (Using Passport Information)",
        {
          type: "list",
          items: [
            "Go to esta.cbp.dhs.gov",
            'Click "Check ESTA Status"',
            'Select "Retrieve Application" if you do not have your application number',
            "Enter your passport number exactly as it appears on your passport",
            "Select your country of citizenship from the dropdown",
            "Enter your passport issuance date",
            "Enter your passport expiration date",
            "Enter your date of birth",
            'Click "Retrieve Application"',
            "Your application number will be displayed, then you can check status",
          ],
        },
        {
          type: "callout",
          title: "Pro Tip",
          text: "Save your application number in a safe place (email it to yourself or write it down). It makes checking your status much faster and easier.",
        },
      ],
    },
    {
      id: "understanding-status-types",
      title: "Understanding ESTA Status Types",
      content: [
        "Your ESTA can show one of three official statuses. Here is what each means:",
        "1. Authorization Approved (Green Status)",
        "This is the status you want to see. It means:",
        {
          type: "list",
          items: [
            "Your ESTA application has been approved",
            "You are authorized to travel to the United States under the Visa Waiver Program",
            "Your ESTA is valid for 2 years or until your passport expires (whichever comes first)",
            "You can make multiple trips to the U.S. during the validity period",
            "Each trip can be up to 90 days",
            "You do NOT need to print this confirmation (though it is recommended)",
          ],
        },
        {
          type: "callout",
          title: "What to Do",
          text: "If approved, note your ESTA expiration date. You can travel to the U.S. anytime before that date. Your ESTA is electronically linked to your passport.",
        },
        "2. Authorization Pending (Yellow Status)",
        "This status means your application is still being reviewed:",
        {
          type: "list",
          items: [
            "Your application requires additional processing time",
            "This is normal and does not mean denial",
            "The system is conducting further security checks",
            "You should receive a final decision within 72 hours",
            "Most pending applications are eventually approved",
          ],
        },
        {
          type: "warning",
          title: "What to Do",
          text: "Do NOT book flights or make final travel plans until your ESTA is approved. Check your status again after 24-72 hours. If still pending after 72 hours, contact CBP.",
        },
        "3. Travel Not Authorized (Red Status)",
        "This is a denial. It means:",
        {
          type: "list",
          items: [
            "Your ESTA application has been denied",
            "You are NOT authorized to travel under the Visa Waiver Program",
            "You cannot reapply for ESTA (reapplying will result in another denial)",
            "You must apply for a U.S. visa at an embassy or consulate instead",
            "The denial is typically permanent for ESTA (though visa applications may still succeed)",
          ],
        },
        {
          type: "warning",
          title: "What to Do",
          text: "If denied, you must apply for a B-1/B-2 visitor visa through a U.S. embassy. Do not attempt to reapply for ESTA, as the denial reason still applies. Contact the embassy for visa application guidance.",
        },
      ],
    },
    {
      id: "lost-application-number",
      title: "What If You Lost Your Application Number?",
      content: [
        "If you did not save your application number, do not worry - you can still retrieve it and check your status:",
        {
          type: "list",
          items: [
            "Go to esta.cbp.dhs.gov and click 'Check ESTA Status'",
            'Select "Retrieve Application Number"',
            "Enter your passport information (passport number, issuance date, expiration date)",
            "Enter your date of birth and country of citizenship",
            "The system will display your application number",
            "Save this number for future use",
          ],
        },
        {
          type: "callout",
          title: "Email Confirmation",
          text: "If you provided an email address when applying, you should have received a confirmation email with your application number. Check your spam/junk folder if you cannot find it.",
        },
        "If you cannot retrieve your application number using passport information:",
        {
          type: "list",
          items: [
            "Double-check that you are entering passport information exactly as it appears on your passport",
            "Verify you are using the correct passport (the one you used for the ESTA application)",
            "Make sure you are entering the correct date of birth format (MM/DD/YYYY)",
            "If still unable to retrieve, contact CBP help desk at +1-202-344-3710",
          ],
        },
      ],
    },
    {
      id: "checking-expiration",
      title: "Checking Your ESTA Expiration Date",
      content: [
        "When you check your ESTA status, the system will display important validity information:",
        {
          type: "list",
          items: [
            "Authorization Approval Date: When your ESTA was approved",
            "Expiration Date: When your ESTA authorization expires",
            "Travel Valid Until: The last date you can use your ESTA to enter the U.S.",
          ],
        },
        {
          type: "callout",
          title: "Expiration Rule Reminder",
          text: "Your ESTA expires on whichever date comes FIRST: (1) Two years from approval date, OR (2) Your passport expiration date. If you get a new passport before your ESTA expires, the ESTA immediately becomes invalid.",
        },
        "It is recommended to check your ESTA status:",
        {
          type: "list",
          items: [
            "Before booking any travel to the U.S. (to ensure it is still valid)",
            "At least 72 hours before your departure",
            "If you get a new passport (your old ESTA will show invalid)",
            "If any of your circumstances change (name change, new citizenship, etc.)",
            "Periodically if you travel to the U.S. frequently",
          ],
        },
      ],
    },
    {
      id: "updating-information",
      title: "Updating ESTA Information",
      content: [
        "Some information on your ESTA can be updated after approval, while other changes require a new application:",
        "Information You CAN Update:",
        {
          type: "list",
          items: [
            "Email address",
            "Phone number",
            "Home address",
            "Employment information",
            "U.S. contact information",
            "Travel itinerary details (flight information, U.S. address)",
          ],
        },
        "To update this information:",
        {
          type: "list",
          items: [
            "Go to esta.cbp.dhs.gov",
            'Click "Check ESTA Status"',
            "Enter your application number and date of birth",
            'Click "Update" next to the information you want to change',
            "Make your changes and submit",
          ],
        },
        {
          type: "warning",
          title: "Information You CANNOT Update",
          text: "Passport information, name, date of birth, country of citizenship, gender, and eligibility question answers cannot be updated. If any of these change, you MUST apply for a new ESTA.",
        },
      ],
    },
    {
      id: "group-applications",
      title: "Checking Status for Group Applications",
      content: [
        "If you applied for ESTA for multiple people at once (family, group travel), you can check all statuses together:",
        {
          type: "list",
          items: [
            "Go to esta.cbp.dhs.gov",
            'Click "Check ESTA Status"',
            'Select "Group Status Inquiry"',
            "Enter the Group ID provided when you submitted the group application",
            "All individual applications in the group will be displayed with their current status",
          ],
        },
        {
          type: "callout",
          text: "Each person in a group application receives their own individual application number and ESTA authorization. Group members can have different statuses (some approved, some pending).",
        },
      ],
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting Common Status Check Issues",
      content: [
        "Problem: 'Application Not Found' message",
        {
          type: "list",
          items: [
            "Verify you entered the application number correctly (it is case-sensitive)",
            "Check that you are using the correct date of birth format (MM/DD/YYYY)",
            "Make sure your application was actually submitted and paid for",
            "If using passport information, verify all details match your passport exactly",
            "Wait 24 hours if you just submitted - the system may still be processing",
          ],
        },
        "Problem: Status has been 'Pending' for more than 72 hours",
        {
          type: "list",
          items: [
            "Contact CBP help desk: +1-202-344-3710 (international) or use the online contact form",
            "Have your application number ready",
            "Be prepared to provide passport information",
            "CBP can provide additional information about the delay",
          ],
        },
        "Problem: Status changed from 'Approved' to 'Not Authorized'",
        {
          type: "list",
          items: [
            "This can happen if CBP discovers new information or circumstances change",
            "ESTA authorizations can be revoked at any time",
            "You will need to apply for a visa instead",
            "Contact CBP for specific information about the revocation",
          ],
        },
        {
          type: "callout",
          title: "Need Help?",
          text: "For technical issues or questions about your ESTA status, contact CBP at +1-202-344-3710 (available 24/7) or submit a help request through the official ESTA website.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How often should I check my ESTA status?",
      answer:
        "You should check your ESTA status: (1) After submitting your application to confirm approval, (2) Before booking any travel to the U.S., (3) At least 72 hours before your departure date, (4) If you get a new passport, and (5) If your circumstances change (name change, new citizenship, etc.). Once approved, your ESTA remains valid for 2 years or until passport expiration unless revoked.",
    },
    {
      question: "Can I check my ESTA status without my application number?",
      answer:
        "Yes, you can check your ESTA status using your passport information if you do not have your application number. Go to esta.cbp.dhs.gov, select 'Retrieve Application', and enter your passport number, issuance date, expiration date, date of birth, and citizenship country. The system will retrieve your application number and display your status.",
    },
    {
      question: "What if I never received a confirmation email after applying?",
      answer:
        "Check your spam/junk folder first. If you still cannot find it, you can retrieve your ESTA status using your passport information on the official website. The confirmation email is not required - your ESTA is electronically linked to your passport. However, it is recommended to save your application number for easy future access.",
    },
    {
      question: "How long does 'Authorization Pending' status typically last?",
      answer:
        "Most pending applications are processed within 72 hours. The majority are approved within 24 hours. If your status remains pending for more than 72 hours, contact CBP help desk at +1-202-344-3710. Do not book travel until your ESTA is approved.",
    },
    {
      question:
        "Can I check someone else's ESTA status (family member, child)?",
      answer:
        "Yes, you can check anyone's ESTA status if you have their application number (or passport information) and date of birth. This is common for parents checking children's ESTA applications or travel agents managing group applications. However, you need the specific information to perform the lookup.",
    },
    {
      question: "Why does the system say it cannot find my ESTA application?",
      answer:
        "Common reasons: (1) Application number entered incorrectly (it is case-sensitive), (2) Wrong date of birth format (use MM/DD/YYYY), (3) Passport information does not match exactly, (4) Application was not successfully submitted or paid, or (5) System is still processing (wait 24 hours after submission). Double-check all information and try both retrieval methods.",
    },
    {
      question: "Do I need to print my ESTA approval status?",
      answer:
        "No, printing your ESTA approval is not required. Your ESTA is electronically linked to your passport number in the CBP system, and airlines can verify it automatically. However, it is recommended to save or print a copy for your personal records, including your application number and expiration date.",
    },
    {
      question: "Can I check my ESTA status from outside the United States?",
      answer:
        "Yes, the ESTA status check system is accessible worldwide 24/7 from any internet connection. You can check your status from any country at esta.cbp.dhs.gov. This is particularly useful for checking your status before international travel.",
    },
    {
      question:
        "What if my ESTA status shows expired but I am already in the U.S.?",
      answer:
        "This is normal and acceptable. Your ESTA only needs to be valid when you ENTER the United States. If it expires during your authorized 90-day stay, you can complete your visit and depart as planned. However, you will need to apply for a new ESTA before your next trip to the U.S.",
    },
    {
      question:
        "Will my ESTA status change automatically if my passport expires?",
      answer:
        "Yes, your ESTA status will automatically show as invalid/expired once your passport expiration date passes, even if your ESTA authorization has not reached its 2-year limit. The system is electronically linked to passport validity, so expired passports invalidate ESTA authorizations.",
    },
  ],
  relatedGuides: [
    "how-to-apply-esta",
    "esta-validity-period",
    "esta-processing-time",
    "esta-denied-what-to-do",
    "renew-esta",
  ],
};
