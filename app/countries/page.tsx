import { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/home/Footer";
import { VWP_COUNTRIES, getCountriesByRegion } from "@/app/lib/data/countries";
import { generateMetadata as generateSEOMetadata } from "@/app/lib/seo/metadata";

/**
 * Generate metadata for countries index page
 */
export const metadata: Metadata = generateSEOMetadata({
  title: "ESTA for All Countries",
  description:
    "Complete ESTA guides for all 41 Visa Waiver Program countries. Find country-specific requirements, tips, and application instructions for your nationality.",
  keywords: [
    "ESTA countries",
    "visa waiver program countries",
    "ESTA eligible countries",
    "VWP countries",
    "countries eligible for ESTA",
  ],
  canonicalUrl: `${
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.com"
  }/countries`,
});

/**
 * Countries Index Page
 * Lists all VWP countries with links to country-specific guides
 */
export default function CountriesPage() {
  const europeCountries = getCountriesByRegion("Europe");
  const asiaPacificCountries = getCountriesByRegion("Asia-Pacific");
  const americasCountries = getCountriesByRegion("Americas");

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-linear-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                ESTA by Country
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Country-specific ESTA guides for all 41 Visa Waiver Program
                nations
              </p>
              <p className="text-lg text-blue-200">
                Select your country to view tailored requirements, application
                tips, and FAQs
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Overview */}
            <div className="prose max-w-none mb-12">
              <h2>Visa Waiver Program Countries</h2>
              <p>
                Citizens of the following 41 countries are eligible to apply for
                ESTA (Electronic System for Travel Authorization) to visit the
                United States for tourism or business for stays of 90 days or
                less without obtaining a visa.
              </p>
              <p>
                Click on your country to view specific requirements, application
                guides, and frequently asked questions tailored to your
                nationality.
              </p>
            </div>

            {/* Europe */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 pb-3 border-b-2 border-blue-600">
                Europe ({europeCountries.length} countries)
              </h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {europeCountries.map((country) => (
                  <Link
                    key={country.slug}
                    href={`/countries/${country.slug}`}
                    className="block bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-blue-600 hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-center space-x-3">
                      {country.flagEmoji && (
                        <span className="text-3xl">{country.flagEmoji}</span>
                      )}
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-blue-600">
                          {country.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Since {country.joinedYear}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Asia-Pacific */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 pb-3 border-b-2 border-blue-600">
                Asia-Pacific ({asiaPacificCountries.length} countries)
              </h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {asiaPacificCountries.map((country) => (
                  <Link
                    key={country.slug}
                    href={`/countries/${country.slug}`}
                    className="block bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-blue-600 hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-center space-x-3">
                      {country.flagEmoji && (
                        <span className="text-3xl">{country.flagEmoji}</span>
                      )}
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-blue-600">
                          {country.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Since {country.joinedYear}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Americas */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 pb-3 border-b-2 border-blue-600">
                Americas ({americasCountries.length} country)
              </h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {americasCountries.map((country) => (
                  <Link
                    key={country.slug}
                    href={`/countries/${country.slug}`}
                    className="block bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-blue-600 hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-center space-x-3">
                      {country.flagEmoji && (
                        <span className="text-3xl">{country.flagEmoji}</span>
                      )}
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-blue-600">
                          {country.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Since {country.joinedYear}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Important Information */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h3 className="text-xl font-bold mb-3">Important Information</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  ✓ All VWP citizens must have an approved ESTA before boarding
                  a flight to the U.S.
                </li>
                <li>
                  ✓ ESTA is valid for 2 years or until your passport expires,
                  whichever comes first
                </li>
                <li>
                  ✓ You can make multiple trips to the U.S. with one ESTA
                  approval
                </li>
                <li>✓ Each stay in the U.S. cannot exceed 90 days</li>
                <li>
                  ✓ ESTA is for tourism and business only - you cannot work with
                  an ESTA
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Apply for ESTA?
              </h2>
              <p className="text-xl text-blue-100 mb-6">
                Start your application now and get approved within 24 hours
              </p>
              <Link
                href="/apply"
                className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
              >
                Start Your Application
              </Link>
              <p className="text-sm text-blue-200 mt-4">
                Expert assistance • 99% approval rate • 24/7 support
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
