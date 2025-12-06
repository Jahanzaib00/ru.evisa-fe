/**
 * ESTA Countries Index Page
 * THE ABSOLUTE BEST countries landing page
 * Perfect SEO, UX, and Conversion Optimization
 */

import { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/home/Footer";
import { VWP_COUNTRIES, getCountriesByRegion } from "@/app/lib/data/countries";
import { generateMetadata as generateSEOMetadata } from "@/app/lib/seo/metadata";
import SearchCountries from "@/app/components/content/SearchCountries";

/**
 * Generate metadata for countries index page
 */
export const metadata: Metadata = generateSEOMetadata({
  title: "ESTA Countries - All 41 Visa Waiver Program Countries (2024)",
  description:
    "Complete ESTA guides for all 41 Visa Waiver Program countries. Find country-specific requirements, application tips, and eligibility information for citizens of Europe, Asia-Pacific, and Americas. Get approved in 24 hours.",
  keywords: [
    "ESTA countries",
    "visa waiver program countries",
    "ESTA eligible countries",
    "VWP countries list",
    "countries eligible for ESTA",
    "ESTA by country",
    "who can apply for ESTA",
    "ESTA nationality requirements",
  ],
  canonicalUrl: `${
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.online"
  }/countries`,
});

/**
 * Countries Index Page
 * Central hub for all VWP country-specific ESTA guides
 */
export default function CountriesPage() {
  const europeCountries = getCountriesByRegion("Europe");
  const asiaPacificCountries = getCountriesByRegion("Asia-Pacific");
  const americasCountries = getCountriesByRegion("Americas");

  return (
    <>
      {/* Structured Data - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item:
                  process.env.NEXT_PUBLIC_SITE_URL ||
                  "https://www.visaportal.online",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "ESTA Countries",
                item: `${
                  process.env.NEXT_PUBLIC_SITE_URL ||
                  "https://www.visaportal.online"
                }/countries`,
              },
            ],
          }),
        }}
      />

      {/* Structured Data - CollectionPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "ESTA Countries - All 41 Visa Waiver Program Countries",
            description:
              "Complete ESTA guides for all 41 Visa Waiver Program countries",
            url: `${
              process.env.NEXT_PUBLIC_SITE_URL ||
              "https://www.visaportal.online"
            }/countries`,
            numberOfItems: VWP_COUNTRIES.length,
          }),
        }}
      />

      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                ESTA by Country
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-6 max-w-3xl mx-auto">
                Country-specific ESTA guides for all 41 Visa Waiver Program
                nations
              </p>
              <p className="text-lg text-blue-200 mb-8">
                Select your country to view tailored requirements, application
                tips, and step-by-step guides
              </p>
              <Link
                href="/apply"
                className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Start ESTA Application →
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Stats Bar */}
        <section className="py-8 bg-blue-50 border-b border-blue-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-1">
                  41
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  Eligible Countries
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-1">
                  {europeCountries.length}
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  European Countries
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-1">
                  {asiaPacificCountries.length}
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  Asia-Pacific Countries
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-1">
                  2 Years
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  ESTA Validity
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <SearchCountries countries={VWP_COUNTRIES} />
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Overview */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Visa Waiver Program Countries
              </h2>
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Citizens of the following <strong>41 countries</strong> are
                  eligible to apply for ESTA (Electronic System for Travel
                  Authorization) to visit the United States for tourism or
                  business for stays of 90 days or less without obtaining a
                  visa.
                </p>
                <p className="text-base text-gray-600">
                  Click on your country to view specific requirements,
                  application guides, and frequently asked questions tailored to
                  your nationality.
                </p>
              </div>
            </div>

            {/* Europe */}
            <div className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-3">
                  Europe
                </h2>
                <p className="text-gray-600 text-lg">
                  {europeCountries.length} European countries eligible for ESTA
                </p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {europeCountries.map((country) => (
                  <Link
                    key={country.slug}
                    href={`/countries/${country.slug}`}
                    className="block bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-blue-600 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      {country.flagEmoji && (
                        <span className="text-5xl">{country.flagEmoji}</span>
                      )}
                      <div className="w-full">
                        <h3 className="font-bold text-lg md:text-xl text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                          {country.name}
                        </h3>
                        <div className="space-y-1 text-xs md:text-sm text-gray-500">
                          <p>VWP since {country.joinedYear}</p>
                          {country.population && (
                            <p className="text-xs text-gray-400">
                              {(country.population / 1000000).toFixed(1)}M
                              people
                            </p>
                          )}
                        </div>
                      </div>
                      <span className="text-blue-600 font-semibold text-sm group-hover:underline flex items-center gap-1">
                        View guide
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Asia-Pacific */}
            <div className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-3">
                  Asia-Pacific
                </h2>
                <p className="text-gray-600 text-lg">
                  {asiaPacificCountries.length} Asia-Pacific countries eligible
                  for ESTA
                </p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {asiaPacificCountries.map((country) => (
                  <Link
                    key={country.slug}
                    href={`/countries/${country.slug}`}
                    className="block bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-blue-600 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      {country.flagEmoji && (
                        <span className="text-5xl">{country.flagEmoji}</span>
                      )}
                      <div className="w-full">
                        <h3 className="font-bold text-lg md:text-xl text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                          {country.name}
                        </h3>
                        <div className="space-y-1 text-xs md:text-sm text-gray-500">
                          <p>VWP since {country.joinedYear}</p>
                          {country.population && (
                            <p className="text-xs text-gray-400">
                              {(country.population / 1000000).toFixed(1)}M
                              people
                            </p>
                          )}
                        </div>
                      </div>
                      <span className="text-blue-600 font-semibold text-sm group-hover:underline flex items-center gap-1">
                        View guide
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Americas */}
            <div className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-3">
                  Americas
                </h2>
                <p className="text-gray-600 text-lg">
                  {americasCountries.length} country from the Americas eligible
                  for ESTA
                </p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {americasCountries.map((country) => (
                  <Link
                    key={country.slug}
                    href={`/countries/${country.slug}`}
                    className="block bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-blue-600 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      {country.flagEmoji && (
                        <span className="text-5xl">{country.flagEmoji}</span>
                      )}
                      <div className="w-full">
                        <h3 className="font-bold text-lg md:text-xl text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                          {country.name}
                        </h3>
                        <div className="space-y-1 text-xs md:text-sm text-gray-500">
                          <p>VWP since {country.joinedYear}</p>
                          {country.population && (
                            <p className="text-xs text-gray-400">
                              {(country.population / 1000000).toFixed(1)}M
                              people
                            </p>
                          )}
                        </div>
                      </div>
                      <span className="text-blue-600 font-semibold text-sm group-hover:underline flex items-center gap-1">
                        View guide
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Important Information */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-8 mb-12 rounded-r-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                Important Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">✓</span>
                  <p className="text-base md:text-lg text-gray-700">
                    All VWP citizens must have an <strong>approved ESTA</strong>{" "}
                    before boarding a flight to the U.S.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">✓</span>
                  <p className="text-base md:text-lg text-gray-700">
                    ESTA is valid for <strong>2 years</strong> or until your
                    passport expires, whichever comes first
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">✓</span>
                  <p className="text-base md:text-lg text-gray-700">
                    You can make <strong>multiple trips</strong> to the U.S.
                    with one ESTA approval
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">✓</span>
                  <p className="text-base md:text-lg text-gray-700">
                    Each stay in the U.S. cannot exceed <strong>90 days</strong>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">✓</span>
                  <p className="text-base md:text-lg text-gray-700">
                    ESTA is for <strong>tourism and business</strong> only - you
                    cannot work with an ESTA
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">✓</span>
                  <p className="text-base md:text-lg text-gray-700">
                    Applications are usually approved{" "}
                    <strong>within 72 hours</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Apply for ESTA?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Start your application now and get approved within 24 hours. Our
                expert team will guide you through every step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href="/apply"
                  className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Start Application Now
                </Link>
                <Link
                  href="/guides"
                  className="inline-block bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors border-2 border-blue-500"
                >
                  View ESTA Guides
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  99% approval rate
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  24/7 expert support
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Money-back guarantee
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
