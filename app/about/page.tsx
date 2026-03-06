import type { Metadata } from "next";
import Header from "../components/layout/Header";
import Footer from "../components/home/Footer";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  COMPANY_ADDRESS,
  COMPANY_LEGAL_NAME,
  COMPANY_NAME,
  // COMPANY_ORG_NUMBER,
  // COMPANY_JURISDICTION,
  EXTERNAL_LINKS,
} from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about eVisa Portal - your trusted partner for international travel authorization applications. Expert assistance for US ESTA, UK ETA, and more. Professional service with 24/7 support.",
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
              About {COMPANY_NAME}
            </h1>
            <p className="text-xl text-gray leading-relaxed">
              We&apos;re dedicated to making international travel authorization
              simple, secure, and stress-free for travelers worldwide.
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
                  {COMPANY_NAME} is a proprietary online platform and commercial
                  project of {COMPANY_LEGAL_NAME}. We are a specialized travel
                  authorization assistance service that helps travelers navigate
                  electronic travel authorization systems worldwide, including
                  the U.S. Electronic System for Travel Authorization (ESTA) and
                  the UK Electronic Travel Authorization (ETA).
                </p>
                <p>
                  Since our founding, we&apos;ve assisted thousands of travelers
                  in obtaining their travel authorizations efficiently and
                  accurately. Our expanding service portfolio reflects our
                  commitment to becoming a comprehensive global travel
                  authorization platform, serving travelers heading to multiple
                  destinations around the world.
                </p>
                <p>
                  Our team of experienced professionals understands the
                  complexities of travel documentation and immigration
                  processes. We&apos;ve built our services to simplify
                  application processes, reduce errors, and provide peace of
                  mind to travelers preparing for their international journeys.
                </p>
              </div>
            </div>

            {/* Direct Government Accreditations */}
            {/*<div className="bg-white border-2 border-blue-600 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-dark">
                  Direct Government Accreditations
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-dark mb-3 flex items-center gap-2">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Australian MARA Registration
                  </h3>
                  <p className="text-gray mb-4">
                    Our team includes registered migration agents authorized by
                    the Office of the Migration Agents Registration Authority
                    (MARA), the official Australian government body that
                    regulates migration advice under the Migration Act 1958.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-blue-200">
                          <th className="text-left py-2 px-3 text-sm font-semibold text-gray-dark">
                            Agent Name
                          </th>
                          <th className="text-left py-2 px-3 text-sm font-semibold text-gray-dark">
                            MARN
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-blue-100">
                          <td className="py-3 px-3 text-gray">
                            Sarah Mitchell
                          </td>
                          <td className="py-3 px-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                              MARN 1234567
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-3 text-gray">James Chen</td>
                          <td className="py-3 px-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                              MARN 2345678
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r">
                    <p className="text-sm text-gray">
                      <strong>Verify Registration:</strong> You can verify our
                      registration at{" "}
                      <a
                        href={EXTERNAL_LINKS.maraVerify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 underline font-semibold"
                      >
                        MARA Official Register
                      </a>
                      . All registered migration agents must comply with the
                      MARA Code of Conduct, ensuring professional and ethical
                      service delivery.
                    </p>
                  </div> 
                </div>
              </div>
            </div> */}

            {/* Partner Government Accreditations */}
            {/* <div className="bg-white border-2 border-purple-600 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-dark">
                  Partner Government Accreditations
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-purple-50 rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border-2 border-purple-200">
                      <svg
                        className="w-10 h-10 text-purple-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.96.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>

                    <h3 className="text-lg font-bold text-gray-dark">
                      Migration Institute of Australia
                    </h3>
                  </div>

                  <p className="text-gray">
                    Member of the Migration Institute of Australia (MIA), the
                    peak professional body for Australian migration advisors.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-dark mb-3">
                    Government-Licensed Partners
                  </h3>
                  <p className="text-gray mb-4">
                    We work exclusively with government-licensed and regulated
                    professionals across multiple jurisdictions:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-purple-600 mt-0.5 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray">
                        <strong className="text-gray-dark">Australia:</strong>{" "}
                        MARA-registered migration agents authorized by the
                        Australian government
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-purple-600 mt-0.5 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray">
                        <strong className="text-gray-dark">New Zealand:</strong>{" "}
                        Licensed Immigration Advisers regulated by the
                        Immigration Advisers Authority
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-purple-600 mt-0.5 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray">
                        <strong className="text-gray-dark">
                          United States:
                        </strong>{" "}
                        Authorized to submit applications directly to U.S.
                        Customs and Border Protection
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}

            {/* Legal Information */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-dark">
                  Legal Information
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  {/* <h3 className="text-lg font-bold text-gray-dark mb-4">
                    Entrepreneur Details
                  </h3> */}
                  <div className="space-y-2 text-gray">
                    <p>
                      <strong className="text-gray-dark">Legal Name:</strong>{" "}
                      {COMPANY_LEGAL_NAME}
                    </p>
                    {/* <p>
                      <strong className="text-gray-dark">
                        Organization Number:
                      </strong>{" "}
                      {COMPANY_ORG_NUMBER}
                    </p>
                    <p>
                      <strong className="text-gray-dark">Jurisdiction:</strong>{" "}
                      Incorporated under the laws of {COMPANY_JURISDICTION}
                    </p> */}
                    {/* <p>
                      <strong className="text-gray-dark">Trade Name:</strong>{" "}
                      {COMPANY_NAME} (www.visaportal.online)
                    </p> */}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-dark mb-4">
                      Mailing Address
                    </h3>
                    <address className="not-italic text-gray space-y-1">
                      <p>{COMPANY_ADDRESS.line1}</p>
                      {COMPANY_ADDRESS.line2 && <p>{COMPANY_ADDRESS.line2}</p>}
                      <p>
                        {COMPANY_ADDRESS.postalCode} {COMPANY_ADDRESS.city}
                      </p>
                      <p>{COMPANY_ADDRESS.country}</p>
                    </address>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-dark mb-4">
                      Contact Details
                    </h3>
                    <address className="not-italic text-gray space-y-2">
                      <p>
                        <strong className="text-gray-dark">Email:</strong>{" "}
                        {CONTACT_EMAIL}
                      </p>
                      <p>
                        <strong className="text-gray-dark">Phone:</strong>{" "}
                        {CONTACT_PHONE}
                      </p>
                      <p>
                        <strong className="text-gray-dark">
                          Support Center:
                        </strong>{" "}
                        <a
                          href="/support"
                          className="text-blue-600 hover:text-blue-700 underline"
                        >
                          Visit Support
                        </a>
                      </p>
                    </address>
                  </div>
                </div>

                {/* <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                  <h3 className="text-lg font-bold text-gray-dark mb-3">
                    Regulatory Compliance
                  </h3>
                  <p className="text-gray mb-4">
                    {COMPANY_NAME} operates in full compliance with:
                  </p>
                  <ul className="space-y-2 text-gray">
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 mt-0.5 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      General Data Protection Regulation (GDPR) for European
                      users
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 mt-0.5 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Australian Privacy Act 1988 and Privacy Principles
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 mt-0.5 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      MARA Code of Conduct for Migration Agents
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 mt-0.5 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Swedish Data Protection Act and EU data protection laws
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 mt-0.5 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Consumer Protection Laws and Fair Trading Regulations
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600 mt-0.5 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      PCI-DSS Level 1 Compliance for Payment Processing (via
                      Stripe)
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-400">
                  <h3 className="text-lg font-bold text-gray-dark mb-3">
                    Professional Indemnity Insurance
                  </h3>
                  <p className="text-gray">
                    We maintain comprehensive Professional Indemnity Insurance
                    as required under the MARA Code of Conduct, providing
                    additional protection and peace of mind for our clients. Our
                    insurance covers all services provided by our registered
                    migration agents.
                  </p>
                </div> */}
              </div>
            </div>

            {/* What We Do */}
            <div className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-dark mb-4">
                What We Do
              </h2>
              <div className="prose prose-lg text-gray space-y-4">
                <p>
                  We provide professional application assistance for electronic
                  travel authorizations across multiple countries. Our services
                  include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>US ESTA Applications:</strong> Expert assistance
                    with U.S. Electronic System for Travel Authorization
                    applications for Visa Waiver Program travelers
                  </li>
                  <li>
                    <strong>UK ETA Applications:</strong> Professional support
                    for United Kingdom Electronic Travel Authorization
                    applications
                  </li>
                  <li>
                    <strong>Form Review & Error Checking:</strong> We carefully
                    review your application for common mistakes and
                    inconsistencies before submission, significantly reducing
                    the chance of delays or denials
                  </li>
                  <li>
                    <strong>Simplified Application Process:</strong> Our
                    user-friendly interface makes completing your travel
                    authorization application straightforward and less
                    time-consuming than government websites
                  </li>
                  <li>
                    <strong>Real-time Status Monitoring:</strong> We track your
                    application status and notify you immediately when there are
                    updates
                  </li>
                  <li>
                    <strong>24/7 Multilingual Support:</strong> Our support team
                    is available around the clock to answer questions and
                    provide guidance
                  </li>
                  <li>
                    <strong>Document Guidance:</strong> We help you understand
                    exactly what information is needed and how to present it
                    correctly
                  </li>
                  <li>
                    <strong>Multiple Processing Tiers:</strong> Choose from
                    standard, rush, or super rush processing based on your
                    travel timeline
                  </li>
                  <li>
                    <strong>Resubmission Assistance:</strong> If needed, we
                    assist with corrections and resubmissions
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
            <div className="border-l-4 border-green-400 bg-green-50 p-6 rounded-r-lg">
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
