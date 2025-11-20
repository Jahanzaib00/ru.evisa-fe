import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/home/Footer';
import { getCountryBySlug, getAllCountrySlugs } from '@/app/lib/data/countries';
import { generateCountryMetadata } from '@/app/lib/seo/metadata';
import {
  generateCountryPageSchema,
  generateFAQPageSchema,
  renderStructuredData,
} from '@/app/lib/seo/structured-data';

/**
 * Generate static paths for all VWP countries
 * This pre-renders all 41 country pages at build time for optimal SEO
 */
export async function generateStaticParams() {
  const slugs = getAllCountrySlugs();
  return slugs.map((slug) => ({
    country: slug,
  }));
}

/**
 * Generate metadata for country page
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country: countrySlug } = await params;
  const country = getCountryBySlug(countrySlug);

  if (!country) {
    return {
      title: 'Country Not Found',
    };
  }

  return generateCountryMetadata(country.name, country.slug);
}

/**
 * Country-specific ESTA landing page
 * Optimized for "[Country] ESTA" keywords
 */
export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country: countrySlug } = await params;

  let country;
  try {
    country = getCountryBySlug(countrySlug);
  } catch (error) {
    console.error('Error fetching country:', error);
    notFound();
  }

  if (!country) {
    notFound();
  }

  // Country-specific FAQs
  const countryFAQs = [
    {
      question: `Do ${country.name} citizens need ESTA for USA?`,
      answer: `Yes, ${country.name} citizens need ESTA (Electronic System for Travel Authorization) to visit the United States for tourism or business stays of 90 days or less. ${country.name} is part of the Visa Waiver Program, which allows eligible travelers to enter the U.S. without a visa if they have an approved ESTA.`,
    },
    {
      question: `How long does ESTA approval take for ${country.name} citizens?`,
      answer: `Most ESTA applications for ${country.name} citizens are approved within 24 hours. However, it can take up to 72 hours in some cases. We recommend applying at least 72 hours before your departure to ensure you receive your approval in time.`,
    },
    {
      question: `How much does ESTA cost for ${country.name} travelers?`,
      answer: `The total cost is $45 USD, which includes the government fee of $40 and our service fee of $5. Our service provides expert assistance, application review, and 24/7 support to ensure your ESTA is approved correctly.`,
    },
    {
      question: `How long is ESTA valid for ${country.name} citizens?`,
      answer: `An approved ESTA is valid for 2 years from the date of approval, or until your passport expires, whichever comes first. During this time, you can make multiple trips to the United States, with each stay limited to 90 days.`,
    },
    {
      question: `Can ${country.name} citizens work in the USA with ESTA?`,
      answer: `No, ESTA does not permit ${country.name} citizens to work in the United States. ESTA is only for tourism, business meetings, conferences, or transit purposes. If you plan to work in the U.S., you must apply for the appropriate work visa.`,
    },
  ];

  // Generate structured data
  const countrySchemas = generateCountryPageSchema({
    countryName: country.name,
    countrySlug: country.slug,
    description: `Complete ESTA application guide for ${country.name} citizens traveling to the United States.`,
  });

  const faqSchema = generateFAQPageSchema(countryFAQs);

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
        <section className="bg-linear-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center">
              {country.flagEmoji && (
                <div className="text-6xl mb-4">{country.flagEmoji}</div>
              )}
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                ESTA for {country.name} Citizens
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Complete guide to applying for U.S. travel authorization from {country.name}
              </p>
              <Link
                href="/apply"
                className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
              >
                Start Your ESTA Application
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Quick Facts */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Quick Facts</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 text-sm">VWP Member Since</p>
                  <p className="font-semibold">{country.joinedYear}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Processing Time</p>
                  <p className="font-semibold">24-72 hours</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Validity Period</p>
                  <p className="font-semibold">2 years</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Maximum Stay</p>
                  <p className="font-semibold">90 days per visit</p>
                </div>
              </div>
            </div>

            {/* Main Guide Content */}
            <div className="prose max-w-none">
              <h2>ESTA Requirements for {country.name} Citizens</h2>
              <p>
                As a citizen of {country.name}, you are eligible to apply for ESTA under the U.S.
                Visa Waiver Program. To qualify, you must meet the following requirements:
              </p>
              <ul>
                <li>Hold a valid {country.name} passport</li>
                <li>Your passport must be an e-Passport with an electronic chip</li>
                <li>Passport must be valid for at least 6 months beyond your planned stay</li>
                <li>Traveling for tourism, business, or transit purposes only</li>
                <li>Planning to stay in the U.S. for 90 days or less</li>
                <li>Have no criminal record or visa violations</li>
                <li>Not be a dual citizen of Iran, Iraq, Sudan, or Syria</li>
              </ul>

              <h2>How to Apply for ESTA from {country.name}</h2>
              <p>
                The ESTA application process for {country.name} citizens is straightforward and
                can be completed entirely online in just a few minutes:
              </p>
              <ol>
                <li>
                  <strong>Complete the Application:</strong> Fill out the online form with your
                  passport and travel information. The form takes about 5-10 minutes to complete.
                </li>
                <li>
                  <strong>Review and Pay:</strong> Double-check all information for accuracy, then
                  pay the $45 processing fee securely online.
                </li>
                <li>
                  <strong>Receive Authorization:</strong> Most applications are approved within 24
                  hours. You'll receive your ESTA approval via email.
                </li>
              </ol>

              <h2>ESTA vs Visa for {country.name} Travelers</h2>
              <p>
                {country.name} citizens have the advantage of being able to use ESTA instead of
                applying for a traditional U.S. visa. Here's why ESTA is better:
              </p>
              <ul>
                <li>
                  <strong>No Embassy Visit Required:</strong> Apply completely online from{' '}
                  {country.name}
                </li>
                <li>
                  <strong>Faster Processing:</strong> Get approved in 24-72 hours vs weeks for a
                  visa
                </li>
                <li>
                  <strong>Valid for 2 Years:</strong> Make multiple trips without reapplying
                </li>
                <li>
                  <strong>Lower Cost:</strong> ESTA costs $45 vs $160+ for a tourist visa
                </li>
                <li>
                  <strong>No Interview:</strong> Simple online form, no in-person interview needed
                </li>
              </ul>

              <h2>What {country.name} Travelers Can Do with ESTA</h2>
              <p>With an approved ESTA, {country.name} citizens can:</p>
              <ul>
                <li>Visit the United States for tourism and sightseeing</li>
                <li>Attend business meetings and conferences</li>
                <li>Transit through the U.S. to another destination</li>
                <li>Visit friends and family</li>
                <li>Participate in short-term courses or training (not for academic credit)</li>
                <li>Seek medical treatment</li>
              </ul>

              <h2>Important Travel Tips for {country.name} Citizens</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                <h3 className="text-lg font-semibold mb-2">Before You Travel</h3>
                <ul className="mb-0">
                  <li>Apply for ESTA at least 72 hours before departure</li>
                  <li>Print a copy of your ESTA approval (though not required)</li>
                  <li>Ensure your passport is valid for the entire duration of your stay</li>
                  <li>Have proof of return/onward travel</li>
                  <li>Carry proof of accommodation in the U.S.</li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-900 text-white rounded-lg p-8 my-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
              <p className="text-xl text-blue-100 mb-6">
                Join thousands of {country.name} travelers who have successfully obtained their
                ESTA with our expert assistance
              </p>
              <Link
                href="/apply"
                className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
              >
                Start ESTA Application Now
              </Link>
              <p className="text-sm text-blue-200 mt-4">
                99% approval rate • 24/7 support • Money-back guarantee
              </p>
            </div>

            {/* FAQs */}
            <div className="my-12">
              <h2 className="text-3xl font-bold mb-8">
                Frequently Asked Questions for {country.name} Citizens
              </h2>
              <div className="space-y-6">
                {countryFAQs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Links */}
            <div className="bg-gray-50 rounded-lg p-8 my-12">
              <h2 className="text-2xl font-bold mb-4">More Resources</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/guides/what-is-esta" className="text-blue-600 hover:underline">
                  → What is ESTA?
                </Link>
                <Link href="/guides/esta-requirements" className="text-blue-600 hover:underline">
                  → ESTA Requirements
                </Link>
                <Link href="/guides/how-to-apply-esta" className="text-blue-600 hover:underline">
                  → How to Apply for ESTA
                </Link>
                <Link href="/support" className="text-blue-600 hover:underline">
                  → Support Center
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
