/**
 * CountryFAQSection Component
 * Service-aware FAQ component that generates dynamic, service-specific FAQs
 * Includes structured data for SEO
 */

import { Country } from "@/app/lib/data/countries";
import { ServiceConfig, ServiceType, getDefaultProcessingTier } from "@/app/lib/config/services";
import {
  generateFAQPageSchema,
  renderStructuredData,
} from "@/app/lib/seo/structured-data";

interface CountryFAQSectionProps {
  country: Country;
  service: ServiceConfig;
}

interface FAQ {
  question: string;
  answer: string;
}

export default function CountryFAQSection({
  country,
  service,
}: CountryFAQSectionProps) {
  // Generate service-specific FAQs
  const generateFAQs = (): FAQ[] => {
    const serviceName =
      service.type === ServiceType.US_ESTA
        ? "ESTA"
        : service.type === ServiceType.UK_ETA
          ? "UK ETA"
          : "eTA";

    const shortServiceName =
      service.type === ServiceType.US_ESTA
        ? "ESTA"
        : service.type === ServiceType.UK_ETA
          ? "ETA"
          : "eTA";

    const destination = service.destination;
    const validityText = service.validity.duration;

    const maxStay = service.validity.stays || "90 days per visit";
    const processingTime = service.processing.standard;
    const defaultTier = getDefaultProcessingTier(service.type);
    const totalCost = service.pricing.government + defaultTier.serviceFee;
    const currency = service.pricing.currency;

    return [
      {
        question: `Do ${country.name} citizens need ${shortServiceName} for ${destination}?`,
        answer: `Yes, ${country.name} citizens need ${serviceName} (${
          service.type === ServiceType.US_ESTA
            ? "Electronic System for Travel Authorization"
            : service.type === ServiceType.UK_ETA
              ? "Electronic Travel Authorisation"
              : "Electronic Travel Authorization"
        }) to visit ${destination} for ${
          service.type === ServiceType.US_ESTA
            ? "tourism or business stays of 90 days or less"
            : service.type === ServiceType.UK_ETA
              ? "tourism, business, or transit"
              : "tourism or business purposes"
        }. ${country.name} is ${
          service.type === ServiceType.US_ESTA
            ? "part of the Visa Waiver Program"
            : service.type === ServiceType.UK_ETA
              ? "eligible for the UK ETA scheme"
              : "visa-exempt for Canada"
        }, which allows eligible travelers to enter ${destination} without a visa if they have an approved ${shortServiceName}.`,
      },
      {
        question: `How long does ${shortServiceName} approval take for ${country.name} citizens?`,
        answer: `Most ${shortServiceName} applications for ${country.name} citizens are approved within ${processingTime.toLowerCase()}. ${
          service.type === ServiceType.US_ESTA
            ? "However, it can take up to 72 hours in some cases. We recommend applying at least 72 hours before your departure to ensure you receive your approval in time."
            : service.type === ServiceType.UK_ETA
              ? "Many applications are approved instantly, though some may take up to 3 working days. We recommend applying before booking your travel."
              : "Processing times vary, but most applications are approved quickly. We recommend applying as early as possible before your trip."
        }`,
      },
      {
        question: `How much does ${shortServiceName} cost for ${country.name} travelers?`,
        answer: `The total cost is ${currency === "USD" ? "$" : currency === "GBP" ? "£" : "€"}${totalCost} ${currency}, which includes the government fee of ${currency === "USD" ? "$" : currency === "GBP" ? "£" : "€"}${service.pricing.government} and our processing fee of ${currency === "USD" ? "$" : currency === "GBP" ? "£" : "€"}${defaultTier.serviceFee}. Our service provides expert assistance, application review, and 24/7 support to ensure your ${shortServiceName} is approved correctly.`,
      },
      {
        question: `How long is ${shortServiceName} valid for ${country.name} citizens?`,
        answer: `An approved ${shortServiceName} is valid for ${validityText} from the date of approval, or until your passport expires, whichever comes first. During this time, you can make multiple trips to ${destination}, with each stay limited to ${maxStay.replace(" per visit", "")}.`,
      },
      {
        question: `Can ${country.name} citizens work in ${destination} with ${shortServiceName}?`,
        answer: `No, ${shortServiceName} does not permit ${country.name} citizens to work in ${destination}. ${shortServiceName} is only for ${
          service.type === ServiceType.US_ESTA
            ? "tourism, business meetings, conferences, or transit purposes"
            : service.type === ServiceType.UK_ETA
              ? "tourism, business visits, short-term study, and transit"
              : "tourism, business, or transit purposes"
        }. If you plan to work in ${destination}, you must apply for the appropriate work visa.`,
      },
    ];
  };

  const faqs = generateFAQs();
  const faqSchema = generateFAQPageSchema(faqs);

  return (
    <>
      {/* JSON-LD Structured Data for FAQs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderStructuredData([faqSchema]),
        }}
      />

      <div className="my-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Common questions from {country.name} citizens about{" "}
          {service.type === ServiceType.US_ESTA
            ? "ESTA"
            : service.type === ServiceType.UK_ETA
              ? "UK ETA"
              : "Canada eTA"}
        </p>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-600 transition-colors"
            >
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                <span className="text-blue-600 shrink-0 text-2xl">Q:</span>
                <span>{faq.question}</span>
              </h3>
              <div className="text-base md:text-lg text-gray-700 ml-11">
                <span className="font-semibold text-blue-600">A:</span>{" "}
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
