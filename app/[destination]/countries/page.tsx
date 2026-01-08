/**
 * Dynamic Countries Index Page - Multi-Service
 * Lists all eligible countries for a specific service (ESTA, UK ETA, etc.)
 * Route: /[destination]/countries (e.g., /united-states/countries, /united-kingdom/countries)
 *
 * SEO OPTIMIZED FOR 2026:
 * - Targets "ESTA eligible countries", "UK ETA countries list"
 * - Complete internal linking hub for all country pages
 * - Schema.org CollectionPage + ItemList + FAQPage
 * - Regional grouping for better UX and SEO
 */

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { use } from "react";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/home/Footer";
import SearchCountries from "@/app/components/content/SearchCountries";
import {
  getCountriesByService,
  getCountriesByRegion,
  Country,
} from "@/app/lib/data/countries";
import {
  getServiceByDestination,
  ServiceType,
} from "@/app/lib/config/services";
import {
  Globe,
  Users,
  MapPin,
  CheckCircle,
  Book,
  FileText,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import InlineCTA from "@/app/components/content/InlineCTA";

/**
 * Generate metadata for countries index page
 * Optimized for "[service] eligible countries" queries
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ destination: string }>;
}): Promise<Metadata> {
  const { destination } = await params;
  const service = getServiceByDestination(destination);

  if (!service) {
    return { title: "Countries Not Found" };
  }

  const countries = getCountriesByService(service.type);
  const currentYear = new Date().getFullYear();

  // Service-specific keyword optimization
  const serviceKeywords =
    service.type === ServiceType.US_ESTA
      ? [
          "VWP countries",
          "Visa Waiver Program countries",
          "ESTA eligible nationalities",
          "US visa waiver countries",
          "ESTA participating countries",
        ]
      : service.type === ServiceType.UK_ETA
      ? [
          "UK ETA eligible countries",
          "UK visa waiver countries",
          "UK ETA nationalities",
          "UK electronic travel authorization countries",
        ]
      : [];

  return {
    title: `${service.name} Eligible Countries ${currentYear} - Complete List of ${countries.length} Countries`,
    description: `Complete list of ${countries.length} countries eligible for ${service.name}. Check if your nationality qualifies for ${service.destination} travel authorization. Official eligibility guide updated for ${currentYear} with requirements and application process.`,
    keywords: [
      `${service.slug} eligible countries`,
      `${service.slug} countries list ${currentYear}`,
      `${service.name} countries`,
      `which countries can apply for ${service.slug}`,
      `${service.destination} visa waiver countries`,
      `${service.slug} nationality requirements`,
      `${service.slug} participating countries`,
      ...serviceKeywords,
    ],
    openGraph: {
      title: `${countries.length} Countries Eligible for ${service.name} ${currentYear}`,
      description: `Check if your country qualifies for ${service.name}. Complete eligibility list with requirements and application guide.`,
      type: "website",
      images: [
        {
          url: `${
            process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.online"
          }/images/og-countries-${service.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `${service.name} Eligible Countries`,
        },
      ],
    },
  };
}

/**
 * Generate static paths for all services
 */
export async function generateStaticParams() {
  return [
    { destination: "united-states" },
    { destination: "united-kingdom" },
    // Add more as services are implemented
  ];
}

/**
 * Countries Index Page Component
 * Hub page linking to all individual country pages
 */
export default function CountriesIndexPage({
  params,
}: {
  params: Promise<{ destination: string }>;
}) {
  const { destination } = use(params);
  const service = getServiceByDestination(destination);

  if (!service) {
    notFound();
  }

  const allCountries = getCountriesByService(service.type);

  // Group countries by region for better organization
  const regions = Array.from(new Set(allCountries.map((c) => c.region)));
  const countriesByRegion = regions.map((region) => ({
    name: region,
    countries: getCountriesByRegion(region, service.type),
    count: getCountriesByRegion(region, service.type).length,
  }));

  // Sort regions by number of countries (descending)
  countriesByRegion.sort((a, b) => b.count - a.count);

  const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.online";

  // Get service-specific info
  const getServiceInfo = () => {
    switch (service.type) {
      case ServiceType.US_ESTA:
        return {
          programName: "Visa Waiver Program (VWP)",
          validity: "2 years",
          maxStay: "90 days",
          processing: "5 hours",
          intro:
            "Citizens of the following countries can travel to the United States for tourism or business under the Visa Waiver Program by obtaining an ESTA (Electronic System for Travel Authorization).",
        };
      case ServiceType.UK_ETA:
        return {
          programName: "Electronic Travel Authorisation (ETA)",
          validity: "2 years",
          maxStay: "6 months",
          processing: "1 hour",
          intro:
            "The UK ETA allows eligible nationals to visit the United Kingdom for tourism, business, or transit. The ETA is being rolled out in phases.",
        };
      default:
        return {
          programName: "Travel Authorization",
          validity: "varies",
          maxStay: "varies",
          processing: "varies",
          intro: `Check if your country is eligible for ${service.name}.`,
        };
    }
  };

  const serviceInfo = getServiceInfo();

  return (
    <>
      {/* Structured Data - CollectionPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `${service.name} Eligible Countries`,
            description: `Complete list of ${allCountries.length} countries eligible for ${service.name}`,
            url: `${SITE_URL}/${destination}/countries`,
            about: {
              "@type": "Service",
              name: service.name,
              provider: {
                "@type": "Organization",
                name: "eVisa Portal",
              },
            },
            numberOfItems: allCountries.length,
          }),
        }}
      />

      {/* Structured Data - ItemList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: allCountries.map((country, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: country.name,
              url: `${SITE_URL}/${destination}/${service.slug}-for-${country.slug}`,
              item: {
                "@type": "Country",
                name: country.name,
              },
            })),
          }),
        }}
      />

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
                item: SITE_URL,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: service.name,
                item: `${SITE_URL}/services/${service.slug}`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Eligible Countries",
                item: `${SITE_URL}/${destination}/countries`,
              },
            ],
          }),
        }}
      />

      {/* Structured Data - FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: `Which countries are eligible for ${service.name}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `${allCountries.length} countries are currently eligible for ${service.name}. This includes countries from Europe, Asia-Pacific, Americas, and other regions. Citizens of eligible countries can apply online for travel authorization to ${service.destination}.`,
                },
              },
              {
                "@type": "Question",
                name: `How do I know if my nationality qualifies for ${service.name}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Check the complete list above. If your country of citizenship appears in the list, you're eligible to apply for ${service.name}. Eligibility is based on your passport's nationality, not your current place of residence.`,
                },
              },
              {
                "@type": "Question",
                name: "Can dual citizens apply?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Yes, if you hold citizenship from any eligible country, you can apply using that passport. You must use the same passport for both the application and travel.`,
                },
              },
            ],
          }),
        }}
      />

      <Header />

      <main className="min-h-screen bg-white">
        {/* Breadcrumb Navigation */}
        <section className="bg-gray-50 border-b border-gray-200 py-4">
          <div className="container mx-auto px-4 max-w-6xl">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link
                href={`/services/${service.slug}`}
                className="hover:text-blue-600 transition-colors"
              >
                {service.name}
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900 font-medium">
                Eligible Countries
              </span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-primary text-white py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Globe className="w-12 h-12 text-blue-300" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {service.name} Eligible Countries {new Date().getFullYear()}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-6 max-w-3xl mx-auto">
                Complete list of {allCountries.length} countries eligible for{" "}
                {service.name}
              </p>

              {/* Stats Bar */}
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-300">
                    {allCountries.length}
                  </div>
                  <div className="text-sm md:text-base text-blue-200">
                    Eligible Countries
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-300">
                    {regions.length}
                  </div>
                  <div className="text-sm md:text-base text-blue-200">
                    World Regions
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-300">
                    {serviceInfo.processing}
                  </div>
                  <div className="text-sm md:text-base text-blue-200">
                    Processing Time
                  </div>
                </div>
              </div>

              <Link
                href={`/${destination}/apply`}
                className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Check Your Eligibility →
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                About {service.name}
              </h2>
              <p className="text-gray-700 text-lg mb-4">{serviceInfo.intro}</p>
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-bold text-blue-900 mb-2">
                    Validity Period
                  </h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {serviceInfo.validity}
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-bold text-blue-900 mb-2">Maximum Stay</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {serviceInfo.maxStay}
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-bold text-blue-900 mb-2">Processing</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {serviceInfo.processing}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Find Your Country
            </h2>
            <SearchCountries
              countries={allCountries}
              destination={destination}
              service={service}
            />
          </div>
        </section>

        {/* Countries by Region */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            {countriesByRegion.map((region, idx) => (
              <div key={idx} className="mb-16">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-3 text-gray-900">
                    <MapPin className="w-8 h-8 text-blue-600" />
                    {region.name} ({region.count}{" "}
                    {region.count === 1 ? "country" : "countries"})
                  </h2>
                  <p className="text-gray-600 text-lg">
                    {service.name} is available for citizens of these{" "}
                    {region.name} countries
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {region.countries.map((country) => (
                    <Link
                      key={country.slug}
                      href={`/${destination}/${service.slug}-for-${country.slug}`}
                      className="block bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-blue-600 hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <span className="text-4xl">{country.flagEmoji}</span>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                            {country.name}
                          </h3>
                          {country.capitalCity && (
                            <p className="text-xs text-gray-500">
                              Capital: {country.capitalCity}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-1 text-sm text-gray-600 mb-3">
                        {country.population && (
                          <div className="flex items-center gap-2">
                            <Users className="w-3 h-3" />
                            <span>{country.population / 1000000}M people</span>
                          </div>
                        )}
                        {service.type === ServiceType.US_ESTA &&
                          country.vwpJoinedYear && (
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-600" />
                              <span>VWP since {country.vwpJoinedYear}</span>
                            </div>
                          )}
                      </div>

                      <span className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        View {country.name} guide
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: `Which countries are eligible for ${service.name}?`,
                  a: `${
                    allCountries.length
                  } countries are currently eligible for ${
                    service.name
                  }, spanning ${
                    regions.length
                  } world regions including ${regions.join(
                    ", "
                  )}. Use the search function above to quickly check if your country qualifies.`,
                },
                {
                  q: `How do I know if my nationality qualifies?`,
                  a: `Your eligibility is based on your passport's nationality, not your current residence. If your passport is from any of the ${allCountries.length} countries listed above, you can apply for ${service.name}. Dual citizens can use either eligible passport.`,
                },
                {
                  q: `Can dual citizens apply for ${service.name}?`,
                  a: `Yes, if you hold citizenship from any ${service.name}-eligible country, you can apply using that passport. Important: You must travel with the same passport you used for the ${service.name} application.`,
                },
                {
                  q: `What if my country is not on this list?`,
                  a: `If your country is not listed, you'll need to apply for a traditional visa to visit ${service.destination}. Contact the nearest embassy or consulate of ${service.destination} for visa requirements and application procedures.`,
                },
                {
                  q: `How long does the ${service.name} approval process take?`,
                  a: `Most ${service.name} applications are processed ${serviceInfo.processing}. However, we recommend applying at least 72 hours before your planned travel date to allow for any potential delays or additional verification.`,
                },
                {
                  q: `Is ${service.name} guaranteed for all eligible nationalities?`,
                  a: `While citizens of eligible countries can apply for ${service.name}, approval is not automatic. Each application is reviewed individually based on security and immigration criteria. Our service has a 99% approval rate with proper documentation.`,
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                >
                  <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Resources Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
              More {service.name} Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href={`/${destination}/guide`}
                className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-xl transition-all group"
              >
                <div className="flex items-start gap-4">
                  <Book className="w-12 h-12 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.name} Guides & Resources
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Comprehensive guides covering everything about{" "}
                      {service.name} - requirements, process, FAQs, and tips.
                    </p>
                    <span className="text-blue-600 font-semibold flex items-center gap-1">
                      Browse all guides
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>

              <Link
                href={`/services/${service.slug}`}
                className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-xl p-8 hover:border-green-600 hover:shadow-xl transition-all group"
              >
                <div className="flex items-start gap-4">
                  <FileText className="w-12 h-12 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {service.name} Service Overview
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Learn about our {service.name} application service,
                      pricing, processing times, and what's included.
                    </p>
                    <span className="text-green-600 font-semibold flex items-center gap-1">
                      View service details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <InlineCTA
          variant="sticky"
          position="bottom"
          title={`Ready to Apply for ${service.name}`}
          description={`Expert assistance • 99% approval rate • 24/7 support`}
          buttonText="Start Application"
          destination={destination}
          service={service}
        />
      </main>

      <Footer />
    </>
  );
}
