"use client";

import { useState } from "react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import { trackFAQInteraction } from "@/app/lib/analytics";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How long does processing take?",
    answer:
      "Processing times vary by service. US ESTA applications are typically approved within 24-72 hours, while UK ETA applications are often approved instantly. We recommend applying at least 3 days before your flight. We monitor your application status and notify you immediately upon approval.",
  },
  {
    question: "How long are travel authorizations valid?",
    answer:
      "Validity depends on the service. US ESTA is valid for 2 years with 90-day stays, while UK ETA is valid for 2 years with 180-day stays. All authorizations expire when your passport expires, whichever comes first.",
  },
  {
    question: "What if my application is denied?",
    answer:
      "If denied, you'll need to apply for a traditional visa at the embassy. We provide full support and guidance if this occurs. Denials are rare (less than 1% of applications) and usually happen due to previous immigration violations or ineligibility criteria.",
  },
  {
    question: "Can I edit my application after submission?",
    answer:
      "Once submitted, you cannot edit most fields. However, some services allow updates to contact information and travel details. If you made a critical error, you may need to submit a new application. Contact our support team for guidance on your specific situation.",
  },
];

// Generate FAQ Schema for SEO
export const generateFAQSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
      trackFAQInteraction(faqs[index].question);
    }
  };

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema()),
        }}
      />

      <Section id="faq" padding="xl">
        <Container maxWidth="md">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray">
              Get answers to common questions about travel authorization
              applications
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-light rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-lightest transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg font-semibold text-gray-dark pr-4">
                    {faq.question}
                  </h3>

                  {/* Expand/Collapse Icon */}
                  <svg
                    className={`w-6 h-6 text-primary shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Answer */}
                {openIndex === index && (
                  <div className="px-6 pb-5 text-gray leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* View All FAQ Link */}
          <div className="text-center mt-10">
            <p className="text-gray">
              Still have questions?{" "}
              <a
                href="/support"
                className="text-primary-light font-semibold hover:text-primary underline"
              >
                Contact our support team
              </a>
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
