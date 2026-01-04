/**
 * Dynamic Country Page - Service-Specific
 * Individual country page showing service-specific requirements
 * Route: /[destination]/countries/[countrySlug] where countrySlug = "{service}-for-{country}"
 * Example: /united-states/countries/esta-for-france, /united-kingdom/countries/uk-eta-for-japan
 */

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { use } from "react";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/home/Footer";
import {
  getCountryBySlug,
  getAllCountrySlugs,
  Country,
} from "@/app/lib/data/countries";
import {
  getServiceByDestination,
  ServiceType,
  ServiceConfig,
  getDefaultProcessingTier,
} from "@/app/lib/config/services";
import { generateCountryPageMetadata } from "@/app/lib/seo/metadata";
import InlineCTA from "../../components/content/InlineCTA";
import {
  generateCountryPageSchema,
  generateCountryFAQSchema,
  renderStructuredData,
} from "@/app/lib/seo/structured-data";
import {
  FileText,
  CheckCircle,
  CreditCard,
  IdCard,
  Plane,
  UserCheck,
  Clipboard,
  MessageSquare,
  Book,
} from "lucide-react";

/**
 * Parse slug format: "{service}-for-{country}"
 * Example: "esta-for-france" -> { service: "esta", country: "france" }
 */
function parseSlug(slug: string): { service: string; country: string } | null {
  const match = slug.match(/^(.+)-for-(.+)$/);
  if (!match) return null;
  return { service: match[1], country: match[2] };
}

/**
 * Generate metadata for country page
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ destination: string; countrySlug: string }>;
}): Promise<Metadata> {
  const { destination, countrySlug } = await params;
  const parsed = parseSlug(countrySlug);

  if (!parsed) {
    return { title: "Page Not Found" };
  }

  const service = getServiceByDestination(destination);
  if (!service) {
    return { title: "Service Not Found" };
  }

  const country = getCountryBySlug(parsed.country, service.type);
  if (!country) {
    return { title: "Country Not Found" };
  }

  return generateCountryPageMetadata(country, service);
}

/**
 * Generate static paths for all service-country combinations
 */
export async function generateStaticParams() {
  const paths: { destination: string; countrySlug: string }[] = [];

  // US ESTA countries
  const estaCountries = getAllCountrySlugs(ServiceType.US_ESTA);
  estaCountries.forEach((country) => {
    paths.push({
      destination: "united-states",
      countrySlug: `esta-for-${country}`,
    });
  });

  // UK ETA countries
  const ukEtaCountries = getAllCountrySlugs(ServiceType.UK_ETA);
  ukEtaCountries.forEach((country) => {
    paths.push({
      destination: "united-kingdom",
      countrySlug: `uk-eta-for-${country}`,
    });
  });

  // Add more services as they're implemented

  return paths;
}

/**
 * Individual Country Page Component
 */
export default function CountryPage({
  params,
}: {
  params: Promise<{ destination: string; countrySlug: string }>;
}) {
  const { destination, countrySlug } = use(params);
  const parsed = parseSlug(countrySlug);

  if (!parsed) {
    notFound();
  }

  const service = getServiceByDestination(destination);
  if (!service) {
    notFound();
  }

  const country = getCountryBySlug(parsed.country, service.type);
  if (!country) {
    notFound();
  }

  // Validate that service in slug matches destination
  // For united-states, service should be "esta"
  // For united-kingdom, service should be "uk-eta"
  const expectedService = service.slug;
  if (parsed.service !== expectedService) {
    notFound();
  }

  // Generate structured data
  const countrySchemas = generateCountryPageSchema(country, service);
  const faqSchema = generateCountryFAQSchema(country, service);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderStructuredData([...countrySchemas, faqSchema]),
        }}
      />

      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <CountryHero
          country={country}
          service={service}
          destination={destination}
        />

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Quick Facts */}
            <QuickFacts country={country} service={service} />

            {/* Step-by-Step Visual Guide */}
            <ApplicationSteps
              country={country}
              service={service}
              destination={destination}
            />

            {/* Requirements */}
            <Requirements country={country} service={service} />

            {/* Comparison Table */}
            <ComparisonTable
              country={country}
              service={service}
              destination={destination}
            />

            {/* Travel Tips */}
            <TravelTips country={country} service={service} />

            {/* CTA Section */}
            <InlineCTA service={service} destination={destination} />

            {/* FAQs */}
            <CountryFAQSection country={country} service={service} />

            {/* Related Links */}
            <RelatedLinks service={service} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/**
 * Country Hero Component
 */
function CountryHero({
  country,
  service,
  destination,
}: {
  country: Country;
  service: ServiceConfig;
  destination: string;
}) {
  return (
    <section className="bg-primary text-white py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center">
          {country.flagEmoji && (
            <div className="text-7xl md:text-8xl mb-6">{country.flagEmoji}</div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {service.name} for {country.name} Citizens
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Complete guide to applying for {service.destination} travel
            authorization from {country.name}
          </p>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              99% Approval Rate
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              {service.processing.rush || service.processing.standard}{" "}
              Processing
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Secure & Trusted
            </span>
          </div>

          <Link
            href={`/${destination}/apply`}
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl"
          >
            Start Your {service.name} Application →
          </Link>
        </div>
      </div>
    </section>
  );
}

/**
 * Quick Facts Component
 */
function QuickFacts({
  country,
  service,
}: {
  country: Country;
  service: ServiceConfig;
}) {
  const joinedInfo = country.vwpJoinedYear
    ? country.vwpJoinedYear.toString()
    : country.etaPhase
    ? `Phase ${country.etaPhase}`
    : "Eligible";

  return (
    <div className="bg-blue-50 border-l-4 border-blue-600 p-8 mb-12 rounded-r-xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
        Quick Facts for {country.name} Citizens
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-600 text-sm mb-2">Program Member</p>
          <p className="text-2xl font-bold text-blue-900">{joinedInfo}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-600 text-sm mb-2">Processing Time</p>
          <p className="text-2xl font-bold text-blue-900">
            {service.processing.rush || service.processing.standard}
          </p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-600 text-sm mb-2">Validity Period</p>
          <p className="text-2xl font-bold text-blue-900">
            {service.validity.years || service.validity.months}{" "}
            {service.validity.years ? "Years" : "Months"}
          </p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-600 text-sm mb-2">Maximum Stay</p>
          <p className="text-2xl font-bold text-blue-900">
            {service.validity.stays}
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Application Steps Component
 */
function ApplicationSteps({
  country,
  service,
  destination,
}: {
  country: Country;
  service: ServiceConfig;
  destination: string;
}) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
        How {country.name} Citizens Apply for {service.name}
      </h2>
      <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Get your {service.destination} travel authorization in 3 simple steps
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 text-center shadow-xl h-full flex flex-col">
            <div className="mb-6 flex justify-center">
              <FileText className="w-16 h-16" />
            </div>
            <div className="absolute top-4 right-4 bg-white text-blue-900 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
              1
            </div>
            <h3 className="text-2xl font-bold mb-4">Fill Application</h3>
            <p className="text-blue-100 mb-6 flex-grow">
              Complete the online form with your {country.name} passport and
              travel information. Takes just 5-10 minutes.
            </p>
            <ul className="text-left space-y-2 text-sm text-blue-100">
              <li className="flex items-start gap-2">
                <span className="mt-1">✓</span>
                <span>Passport details</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">✓</span>
                <span>Contact information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">✓</span>
                <span>Travel plans</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative">
          <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl p-8 text-center shadow-xl h-full flex flex-col">
            <div className="mb-6 flex justify-center">
              <CreditCard className="w-16 h-16" />
            </div>
            <div className="absolute top-4 right-4 bg-white text-green-900 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
              2
            </div>
            <h3 className="text-2xl font-bold mb-4">Review & Pay</h3>
            <p className="text-green-100 mb-6 flex-grow">
              Double-check your information and pay securely. We accept all
              major credit and debit cards.
            </p>
            <ul className="text-left space-y-2 text-sm text-green-100">
              <li className="flex items-start gap-2">
                <span className="mt-1">✓</span>
                <span>Verify all details</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">✓</span>
                <span>
                  Secure payment: {service.pricing.currency}{" "}
                  {service.pricing.government + getDefaultProcessingTier(service.type).serviceFee}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">✓</span>
                <span>Instant confirmation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative">
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl p-8 text-center shadow-xl h-full flex flex-col">
            <div className="mb-6 flex justify-center">
              <CheckCircle className="w-16 h-16" />
            </div>
            <div className="absolute top-4 right-4 bg-white text-purple-900 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
              3
            </div>
            <h3 className="text-2xl font-bold mb-4">Get Approved</h3>
            <p className="text-purple-100 mb-6 flex-grow">
              Receive your {service.name} approval via email within{" "}
              {service.processing.standard}. Valid for{" "}
              {service.validity.years || service.validity.months}{" "}
              {service.validity.years ? "years" : "months"} of travel.
            </p>
            <ul className="text-left space-y-2 text-sm text-purple-100">
              <li className="flex items-start gap-2">
                <span className="mt-1">✓</span>
                <span>Email notification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">✓</span>
                <span>
                  Valid for {service.validity.years || service.validity.months}{" "}
                  {service.validity.years ? "years" : "months"}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">✓</span>
                <span>Multiple entries allowed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link
          href={`/${destination}/apply`}
          className="inline-block bg-blue-600 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-blue-700 transition-colors shadow-xl"
        >
          Start Your Application Now →
        </Link>
        <p className="text-sm text-gray-500 mt-4">
          Join{" "}
          {country.population
            ? `${((country.population * 0.02) / 1000000).toFixed(1)} million`
            : "thousands of"}{" "}
          {country.name} citizens traveling to {service.destination}
        </p>
      </div>
    </div>
  );
}

/**
 * Requirements Component
 */
function Requirements({
  country,
  service,
}: {
  country: Country;
  service: ServiceConfig;
}) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        {service.name} Requirements for {country.name} Citizens
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        As a citizen of {country.name}, you are eligible to apply for{" "}
        {service.name}. To qualify, you must meet the following requirements:
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="border-2 border-blue-200 rounded-xl p-6 hover:border-blue-600 transition-colors">
          <h3 className="text-xl font-bold mb-4 text-blue-900 flex items-center gap-2">
            <IdCard className="w-8 h-8" />
            Passport Requirements
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 shrink-0">✓</span>
              <span className="text-gray-700">
                Hold a valid {country.name} passport
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 shrink-0">✓</span>
              <span className="text-gray-700">
                Must be an e-Passport with electronic chip
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 shrink-0">✓</span>
              <span className="text-gray-700">
                Valid for at least 6 months beyond your stay
              </span>
            </li>
          </ul>
        </div>

        <div className="border-2 border-green-200 rounded-xl p-6 hover:border-green-600 transition-colors">
          <h3 className="text-xl font-bold mb-4 text-green-900 flex items-center gap-2">
            <Plane className="w-8 h-8" />
            Travel Requirements
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-1 shrink-0">✓</span>
              <span className="text-gray-700">
                Tourism, business, or transit purposes only
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-1 shrink-0">✓</span>
              <span className="text-gray-700">
                Planning to stay {service.validity.stays}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-1 shrink-0">✓</span>
              <span className="text-gray-700">
                Have return/onward travel ticket
              </span>
            </li>
          </ul>
        </div>

        <div className="border-2 border-purple-200 rounded-xl p-6 hover:border-purple-600 transition-colors">
          <h3 className="text-xl font-bold mb-4 text-purple-900 flex items-center gap-2">
            <UserCheck className="w-8 h-8" />
            Eligibility Criteria
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-purple-600 mt-1 shrink-0">✓</span>
              <span className="text-gray-700">
                No criminal record or visa violations
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 mt-1 shrink-0">✓</span>
              <span className="text-gray-700">In good health</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 mt-1 shrink-0">✓</span>
              <span className="text-gray-700">
                Not a dual citizen of restricted countries
              </span>
            </li>
          </ul>
        </div>

        <div className="border-2 border-orange-200 rounded-xl p-6 hover:border-orange-600 transition-colors">
          <h3 className="text-xl font-bold mb-4 text-orange-900 flex items-center gap-2">
            <Clipboard className="w-8 h-8" />
            Additional Requirements
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-orange-600 mt-1 shrink-0">✓</span>
              <span className="text-gray-700">
                Valid email address for notifications
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 mt-1 shrink-0">✓</span>
              <span className="text-gray-700">
                Payment method (credit/debit card)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 mt-1 shrink-0">✓</span>
              <span className="text-gray-700">
                Accommodation details in {service.destination}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/**
 * Comparison Table Component
 */
function ComparisonTable({
  country,
  service,
  destination,
}: {
  country: Country;
  service: ServiceConfig;
  destination: string;
}) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        {service.name} vs Tourist Visa for {country.name} Travelers
      </h2>
      <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
        {country.name} citizens have the advantage of using {service.name}{" "}
        instead of applying for a traditional visa
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-xl rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <th className="p-4 text-left font-bold text-lg">Feature</th>
              <th className="p-4 text-center font-bold text-lg bg-blue-700">
                {service.name}
              </th>
              <th className="p-4 text-center font-bold text-lg">
                Tourist Visa
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 hover:bg-blue-50">
              <td className="p-4 font-semibold">Application Process</td>
              <td className="p-4 text-center bg-green-50">
                <span className="text-green-700 font-bold">100% Online</span>
              </td>
              <td className="p-4 text-center bg-red-50">
                <span className="text-red-700">Embassy Visit Required</span>
              </td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-blue-50">
              <td className="p-4 font-semibold">Processing Time</td>
              <td className="p-4 text-center bg-green-50">
                <span className="text-green-700 font-bold">
                  {service.processing.rush || service.processing.standard}
                </span>
              </td>
              <td className="p-4 text-center bg-red-50">
                <span className="text-red-700">2-4 weeks</span>
              </td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-blue-50">
              <td className="p-4 font-semibold">Cost</td>
              <td className="p-4 text-center bg-green-50">
                <span className="text-green-700 font-bold">
                  {service.pricing.currency}{" "}
                  {service.pricing.government + getDefaultProcessingTier(service.type).serviceFee}
                </span>
              </td>
              <td className="p-4 text-center bg-red-50">
                <span className="text-red-700">
                  {service.pricing.currency} 160+
                </span>
              </td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-blue-50">
              <td className="p-4 font-semibold">Validity</td>
              <td className="p-4 text-center bg-green-50">
                <span className="text-green-700 font-bold">
                  {service.validity.years || service.validity.months}{" "}
                  {service.validity.years ? "years" : "months"}
                </span>
              </td>
              <td className="p-4 text-center bg-yellow-50">
                <span className="text-yellow-700">Varies</span>
              </td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-blue-50">
              <td className="p-4 font-semibold">Interview</td>
              <td className="p-4 text-center bg-green-50">
                <span className="text-green-700 font-bold">Not Required ✓</span>
              </td>
              <td className="p-4 text-center bg-red-50">
                <span className="text-red-700">Required ✗</span>
              </td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-blue-50">
              <td className="p-4 font-semibold">Maximum Stay</td>
              <td className="p-4 text-center bg-yellow-50">
                <span className="text-yellow-700">
                  {service.validity.stays}
                </span>
              </td>
              <td className="p-4 text-center bg-green-50">
                <span className="text-green-700">Varies</span>
              </td>
            </tr>
            <tr className="hover:bg-blue-50">
              <td className="p-4 font-semibold">Multiple Entries</td>
              <td className="p-4 text-center bg-green-50">
                <span className="text-green-700 font-bold">Yes ✓</span>
              </td>
              <td className="p-4 text-center bg-green-50">
                <span className="text-green-700">Yes ✓</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-center mt-8">
        <p className="text-lg text-gray-700 mb-6">
          <strong>For most {country.name} travelers,</strong> {service.name} is
          the best choice for short trips to {service.destination}
        </p>
        <Link
          href={`/${destination}/apply`}
          className="inline-block bg-green-600 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-green-700 transition-colors shadow-xl"
        >
          Apply for {service.name} Now →
        </Link>
      </div>
    </div>
  );
}

/**
 * Travel Tips Component
 */
function TravelTips({
  country,
  service,
}: {
  country: Country;
  service: ServiceConfig;
}) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Important Travel Tips for {country.name} Citizens
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Clipboard className="w-8 h-8" />
            Before You Apply
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 mt-1">✓</span>
              <span className="text-gray-700">
                Ensure your passport is valid for 6+ months
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 mt-1">✓</span>
              <span className="text-gray-700">
                Verify you have an e-Passport
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 mt-1">✓</span>
              <span className="text-gray-700">
                Have a valid payment method ready
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 mt-1">✓</span>
              <span className="text-gray-700">
                Prepare your travel itinerary
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Plane className="w-8 h-8" />
            Before You Travel
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">
                Apply at least 72 hours before departure
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">
                Print a copy of your {service.name} approval
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">
                Have proof of return/onward travel
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">
                Carry proof of {service.destination} accommodation
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/**
 * Country FAQ Section Component
 */
function CountryFAQSection({
  country,
  service,
}: {
  country: Country;
  service: ServiceConfig;
}) {
  // Generate service-specific FAQs
  const faqs = [
    {
      question: `Do ${country.name} citizens need ${service.name}?`,
      answer: `Yes, ${country.name} citizens need ${service.name} to visit ${service.destination} for tourism or business stays. ${country.name} is eligible under this program, which allows travelers to enter ${service.destination} without a traditional visa if they have an approved authorization.`,
    },
    {
      question: `How long does ${service.name} approval take for ${country.name} citizens?`,
      answer: `Most ${service.name} applications for ${country.name} citizens are approved within ${service.processing.standard}. However, some applications may be processed faster. We recommend applying at least 72 hours before your departure to ensure you receive your approval in time.`,
    },
    {
      question: `How much does ${service.name} cost for ${country.name} travelers?`,
      answer: `The total cost is ${service.pricing.currency} ${
        service.pricing.government + getDefaultProcessingTier(service.type).serviceFee
      }, which includes the government fee of ${service.pricing.currency} ${
        service.pricing.government
      } and our processing fee of ${service.pricing.currency} ${
        getDefaultProcessingTier(service.type).serviceFee
      }. Our service provides expert assistance, application review, and 24/7 support to ensure your application is approved correctly.`,
    },
    {
      question: `How long is ${service.name} valid for ${country.name} citizens?`,
      answer: `An approved ${service.name} is valid for ${
        service.validity.years || service.validity.months
      } ${
        service.validity.years ? "years" : "months"
      } from the date of approval, or until your passport expires, whichever comes first. During this time, you can make multiple trips to ${
        service.destination
      }, with each stay limited to ${service.validity.stays}.`,
    },
    {
      question: `Can ${country.name} citizens work in ${service.destination} with ${service.name}?`,
      answer: `No, ${service.name} does not permit ${country.name} citizens to work in ${service.destination}. It is only for tourism, business meetings, conferences, or transit purposes. If you plan to work in ${service.destination}, you must apply for the appropriate work visa.`,
    },
  ];

  return (
    <div className="my-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-lg text-gray-600 text-center mb-12">
        Common questions from {country.name} citizens about {service.name}
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
  );
}

/**
 * Related Links Component
 */
function RelatedLinks({ service }: { service: ServiceConfig }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 my-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        More {service.name} Resources
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        <Link
          href="/guide/what-is-esta"
          className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all group"
        >
          <Book className="w-8 h-8 text-gray-900 group-hover:text-blue-600" />
          <div>
            <div className="font-semibold text-gray-900 group-hover:text-blue-600">
              What is {service.name}?
            </div>
            <div className="text-sm text-gray-500">
              Complete guide to {service.name}
            </div>
          </div>
        </Link>

        <Link
          href="/guide/esta-requirements"
          className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all group"
        >
          <CheckCircle className="w-8 h-8 text-gray-900 group-hover:text-blue-600" />
          <div>
            <div className="font-semibold text-gray-900 group-hover:text-blue-600">
              {service.name} Requirements
            </div>
            <div className="text-sm text-gray-500">Eligibility criteria</div>
          </div>
        </Link>

        <Link
          href="/guide/how-to-apply-esta"
          className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all group"
        >
          <FileText className="w-8 h-8 text-gray-900 group-hover:text-blue-600" />
          <div>
            <div className="font-semibold text-gray-900 group-hover:text-blue-600">
              How to Apply
            </div>
            <div className="text-sm text-gray-500">Step-by-step guide</div>
          </div>
        </Link>

        <Link
          href="/support"
          className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all group"
        >
          <MessageSquare className="w-8 h-8 text-gray-900 group-hover:text-blue-600" />
          <div>
            <div className="font-semibold text-gray-900 group-hover:text-blue-600">
              Support Center
            </div>
            <div className="text-sm text-gray-500">Get help from our team</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
