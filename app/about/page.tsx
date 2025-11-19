import type { Metadata } from "next";
import Header from "../components/layout/Header";
import Footer from "../components/home/Footer";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ESTA Visa Portal - your trusted partner for U.S. travel authorization applications. Expert assistance, transparent pricing, and 24/7 support.",
};

export default function AboutPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Section padding="lg" className="bg-linear-to-b from-blue-50 to-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-dark mb-6">
              About ESTA Visa Portal
            </h1>
            <p className="text-xl text-gray leading-relaxed">
              We&apos;re dedicated to making U.S. travel authorization simple,
              secure, and stress-free for travelers worldwide.
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Content */}
      <Section padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Who We Are */}
            <div>
              <h2 className="text-3xl font-bold text-gray-dark mb-4">
                Who We Are
              </h2>
              <div className="prose prose-lg text-gray space-y-4">
                <p>
                  ESTA Visa Portal is a specialized application assistance
                  service that helps travelers navigate the U.S. Electronic
                  System for Travel Authorization (ESTA) process. Since our
                  founding, we&apos;ve assisted thousands of travelers in
                  obtaining their travel authorization efficiently and
                  accurately.
                </p>
                <p>
                  Our team of experienced professionals understands the
                  complexities of travel documentation and immigration
                  processes. We&apos;ve built our service to simplify the ESTA
                  application process, reduce errors, and provide peace of mind
                  to travelers preparing for their U.S. journey.
                </p>
              </div>
            </div>

            {/* What We Do */}
            <div className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-dark mb-4">
                What We Do
              </h2>
              <div className="prose prose-lg text-gray space-y-4">
                <p>
                  We provide professional application assistance for ESTA
                  applications. Our service includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Form Review & Error Checking:</strong> We carefully
                    review your application for common mistakes and
                    inconsistencies before submission, significantly reducing
                    the chance of delays or denials.
                  </li>
                  <li>
                    <strong>Simplified Application Process:</strong> Our
                    user-friendly interface makes completing your ESTA
                    application straightforward and less time-consuming than the
                    government website.
                  </li>
                  <li>
                    <strong>Real-time Status Monitoring:</strong> We track your
                    application status and notify you immediately when there are
                    updates.
                  </li>
                  <li>
                    <strong>24/7 Multilingual Support:</strong> Our support team
                    is available around the clock in English and Urdu to answer
                    questions and provide guidance.
                  </li>
                  <li>
                    <strong>Document Guidance:</strong> We help you understand
                    exactly what information is needed and how to present it
                    correctly.
                  </li>
                  <li>
                    <strong>Resubmission Assistance:</strong> If needed, we
                    assist with corrections and resubmissions at no additional
                    charge.
                  </li>
                </ul>
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="text-3xl font-bold text-gray-dark mb-4">
                Why Choose Us
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-dark mb-2">
                    99% Approval Rate
                  </h3>
                  <p className="text-gray">
                    Our thorough review process helps identify and correct
                    potential issues before submission, resulting in an
                    exceptional approval rate.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-dark mb-2">
                    Fast Processing
                  </h3>
                  <p className="text-gray">
                    Most applications receive approval within 24 hours. We
                    monitor your application status and notify you immediately
                    of any updates.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-dark mb-2">
                    Secure & Private
                  </h3>
                  <p className="text-gray">
                    We use bank-level encryption to protect your personal
                    information. Your data is never shared with third parties
                    except as required to process your application.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-dark mb-2">
                    Transparent Pricing
                  </h3>
                  <p className="text-gray">
                    No hidden fees. We clearly show the breakdown of government
                    fees and our service charge so you know exactly what
                    you&apos;re paying for.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Commitment */}
            <div className="border-l-4 border-yellow-400 bg-yellow-50 p-6 rounded-r-lg">
              <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
              <p className="text-lg leading-relaxed mb-4">
                We&apos;re committed to providing honest, transparent, and
                professional service to every traveler. We understand that
                planning international travel can be stressful, and we&apos;re
                here to make at least one part of that process easier.
              </p>
              <p className="text-lg leading-relaxed">
                Every member of our team is dedicated to helping you travel with
                confidence. We&apos;re available 24/7 to answer your questions,
                address your concerns, and ensure your application is completed
                accurately and efficiently.
              </p>
            </div>

            {/* Contact CTA */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                Questions About Our Service?
              </h2>
              <p className="text-lg text-gray mb-6">
                Our support team is here to help you 24/7
              </p>
              <a
                href="/support"
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
