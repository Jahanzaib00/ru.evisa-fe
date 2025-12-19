"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  defaultOpen?: number;
}

/**
 * Collapsible FAQ Accordion Component
 * Reduces visual overload by collapsing answers
 * Encourages interaction and improves engagement
 */
export default function FAQAccordion({
  faqs,
  defaultOpen = 0,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className={`bg-white rounded-lg border-2 transition-all ${
            openIndex === idx
              ? "border-blue-600 shadow-md"
              : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <button
            onClick={() => toggleFAQ(idx)}
            className="w-full px-6 py-4 text-left flex items-start gap-4 group"
            aria-expanded={openIndex === idx}
          >
            <div className="flex-shrink-0 mt-0.5">
              <HelpCircle
                className={`w-5 h-5 transition-colors ${
                  openIndex === idx
                    ? "text-blue-600"
                    : "text-gray-400 group-hover:text-blue-500"
                }`}
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3
                className={`text-lg font-semibold transition-colors ${
                  openIndex === idx
                    ? "text-blue-900"
                    : "text-gray-900 group-hover:text-blue-700"
                }`}
              >
                {faq.question}
              </h3>
            </div>
            <div className="flex-shrink-0 mt-0.5">
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  openIndex === idx ? "rotate-180 text-blue-600" : "text-gray-400"
                }`}
              />
            </div>
          </button>

          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === idx ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="px-6 pb-5 pl-[3.75rem]">
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
