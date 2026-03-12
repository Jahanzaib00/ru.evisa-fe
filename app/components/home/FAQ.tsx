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
    question: "Сколько времени занимает обработка заявки?",
    answer:
      "Сроки обработки зависят от типа услуги. Заявки US ESTA обычно одобряются в течение 24–72 часов, а UK ETA — часто мгновенно. Рекомендуем подавать заявку минимум за 3 дня до вылета. Мы отслеживаем статус и сразу уведомляем вас об одобрении.",
  },
  {
    question: "Как долго действует разрешение на въезд?",
    answer:
      "Срок действия зависит от типа услуги. US ESTA действует 2 года с пребыванием до 90 дней, UK ETA — 2 года с пребыванием до 180 дней. Все разрешения прекращают действие при истечении срока паспорта.",
  },
  {
    question: "Что делать, если заявку отклонили?",
    answer:
      "В случае отказа вам нужно будет подать на обычную визу через посольство. Мы окажем полную поддержку и консультацию. Отказы случаются крайне редко (менее 1% заявок) и обычно связаны с нарушениями иммиграционного законодательства.",
  },
  {
    question: "Можно ли изменить заявку после подачи?",
    answer:
      "После подачи большинство полей изменить нельзя. Однако некоторые сервисы позволяют обновить контактную информацию и детали поездки. При критической ошибке может потребоваться новая заявка. Свяжитесь с нашей службой поддержки для консультации.",
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
              Часто задаваемые вопросы
            </h2>
            <p className="text-lg text-gray">
              Ответы на популярные вопросы об оформлении разрешений на въезд
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
              Остались вопросы?{" "}
              <a
                href="/support"
                className="text-primary-light font-semibold hover:text-primary underline"
              >
                Свяжитесь с нашей службой поддержки
              </a>
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
