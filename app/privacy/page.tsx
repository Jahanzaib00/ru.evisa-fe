import type { Metadata } from "next";
import Header from "../components/layout/Header";
import Footer from "../components/home/Footer";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import {
  PRIVACY_EMAIL,
  COMPANY_NAME,
  COMPANY_LEGAL_NAME,
  COMPANY_ORG_NUMBER,
  COMPANY_JURISDICTION,
  COMPANY_ADDRESS,
} from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for eVisa Portal. Learn how we collect, use, and protect your personal information in compliance with GDPR and international data protection laws.",
};

export default function PrivacyPage() {
  const lastUpdated = "January 13, 2026";

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Section padding="lg" className="bg-gray-dark text-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-300">Last Updated: {lastUpdated}</p>
          </div>
        </Container>
      </Section>

      {/* Main Content */}
      <Section padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-lg">
            {/* Introduction */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
              <p className="text-gray mb-2">
                At {COMPANY_NAME}, we take your privacy seriously. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your personal information when you use our travel authorization
                application assistance services.
              </p>
              <p className="text-gray mb-2">
                <strong>Data Controller:</strong> {COMPANY_LEGAL_NAME}, a
                company incorporated under the laws of {COMPANY_JURISDICTION}{" "}
                (Organization Number: {COMPANY_ORG_NUMBER}), operating{" "}
                {COMPANY_NAME} (www.visaportal.online), is the data controller
                responsible for your personal information.
              </p>
              <p className="text-gray mb-0">
                By using our service, you consent to the data practices
                described in this policy. If you do not agree with this policy,
                please do not use our service.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                1. Information We Collect
              </h2>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                1.1 Personal Information You Provide
              </h3>
              <p className="text-gray mb-4">
                When you use our service to apply for travel authorizations (US
                ESTA, UK ETA, or other services), we collect personal
                information that you voluntarily provide, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>
                  <strong>Contact Information:</strong> Name, email address,
                  phone number, residential address
                </li>
                <li>
                  <strong>Travel Information:</strong> Passport details, travel
                  dates, destination addresses
                </li>
                <li>
                  <strong>Biographical Information:</strong> Date of birth,
                  place of birth, gender, citizenship, nationality, employment
                  details
                </li>
                <li>
                  <strong>Emergency Contact:</strong> Emergency contact name and
                  phone number (where required)
                </li>
                <li>
                  <strong>Eligibility Information:</strong> Responses to
                  eligibility questions regarding health, criminal history,
                  previous visa denials, and immigration history (as required by
                  each destination country)
                </li>
                <li>
                  <strong>Payment Information:</strong> Billing address and
                  payment details (processed securely through Stripe - we do not
                  store full payment card details)
                </li>
                <li>
                  <strong>Documents:</strong> Passport scans, photographs, and
                  other supporting documents as required
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                1.2 Information Automatically Collected
              </h3>
              <p className="text-gray mb-4">
                We automatically collect certain information when you visit our
                website:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>
                  <strong>Usage Data:</strong> IP address, browser type,
                  operating system, pages viewed, time spent on pages, access
                  times, referring website
                </li>
                <li>
                  <strong>Device Information:</strong> Device type, unique
                  device identifiers, screen resolution, language preferences
                </li>
                <li>
                  <strong>Analytics Data:</strong> We use Google Analytics (GA4)
                  to collect anonymized usage statistics and improve our
                  services
                </li>
                <li>
                  <strong>Cookies and Tracking Technologies:</strong> We use
                  cookies, local storage, and session storage to enhance your
                  experience, save application progress, and analyze website
                  usage. For details, see our{" "}
                  <a
                    href="/cookies"
                    className="text-blue-600 hover:text-blue-700 underline font-semibold"
                  >
                    Cookie Policy
                  </a>
                  .
                </li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p className="text-gray mb-0">
                  <strong>Note:</strong> We use localStorage and sessionStorage
                  to save your application progress locally on your device. This
                  allows you to resume your application if you close your
                  browser. This data remains on your device and is only
                  transmitted to our servers when you submit your application.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray mb-4">
                We use the information we collect for the following purposes:
              </p>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                2.1 Primary Service Purposes
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>
                  To process and submit your travel authorization applications
                  to relevant government authorities (e.g., U.S. Customs and
                  Border Protection for ESTA, UK Home Office for UK ETA)
                </li>
                <li>
                  To review your application for errors, inconsistencies, and
                  completeness
                </li>
                <li>
                  To communicate with you about your application status and
                  updates
                </li>
                <li>
                  To provide customer support and respond to your inquiries
                </li>
                <li>To process payments securely and prevent fraud</li>
                <li>
                  To maintain records as required by law and for business
                  purposes
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                2.2 Service Improvement and Analytics
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>To improve our website and service offerings</li>
                <li>To analyze usage patterns and optimize user experience</li>
                <li>To detect and prevent technical issues</li>
                <li>To conduct internal research and analytics</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                2.3 Legal and Security Purposes
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray">
                <li>
                  To comply with legal obligations and government requests
                </li>
                <li>To enforce our Terms of Service</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>
                  To detect, prevent, and address fraud or security issues
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                3. How We Share Your Information
              </h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-4">
                <p className="text-gray mb-0">
                  <strong>
                    We do not sell, rent, or trade your personal information to
                    third parties for their marketing purposes.
                  </strong>
                </p>
              </div>

              <p className="text-gray mb-4">
                We may share your information only in the following
                circumstances:
              </p>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                3.1 Government Authorities
              </h3>
              <p className="text-gray mb-4">
                Your travel authorization application information is submitted
                to the relevant government authorities of your destination
                country:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>
                  <strong>United States:</strong> U.S. Customs and Border
                  Protection and related DHS agencies
                </li>
                <li>
                  <strong>United Kingdom:</strong> UK Home Office and
                  immigration authorities
                </li>
                <li>
                  <strong>Other Destinations:</strong> Respective immigration
                  and border control authorities
                </li>
              </ul>
              <p className="text-gray">
                These authorities may share your information with other
                government agencies as permitted or required by their respective
                laws.
              </p>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                3.2 Service Providers
              </h3>
              <p className="text-gray mb-4">
                We share information with trusted third-party service providers
                who assist us in operating our website and providing our
                services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>
                  <strong>Payment Processor (Stripe):</strong> To process
                  payments securely
                </li>
                <li>
                  <strong>Communication Services:</strong> To send emails and
                  SMS notifications
                </li>
                <li>
                  <strong>Cloud Hosting:</strong> To host our website and store
                  data securely
                </li>
                <li>
                  <strong>Analytics Providers:</strong> To analyze website usage
                  and performance
                </li>
              </ul>
              <p className="text-gray mb-4">
                These service providers are contractually obligated to protect
                your information and may only use it for the specific services
                they provide to us.
              </p>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                3.3 Legal Requirements
              </h3>
              <p className="text-gray mb-4">
                We may disclose your information if required to do so by law or
                in response to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray">
                <li>Court orders, subpoenas, or legal processes</li>
                <li>Requests from law enforcement or government authorities</li>
                <li>Protection of our legal rights or property</li>
                <li>
                  Investigation of potential violations of our Terms of Service
                </li>
                <li>Prevention of harm to individuals or the public</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                4. Data Security
              </h2>
              <p className="text-gray mb-4">
                We implement industry-standard security measures to protect your
                personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>
                  <strong>Encryption:</strong> All data transmitted between your
                  browser and our servers is encrypted using SSL/TLS technology
                </li>
                <li>
                  <strong>Secure Storage:</strong> Personal information is
                  stored on secure servers with restricted access
                </li>
                <li>
                  <strong>Payment Security:</strong> We use Stripe, a PCI-DSS
                  Level 1 certified payment processor. We do not store credit
                  card information on our servers
                </li>
                <li>
                  <strong>Access Controls:</strong> Only authorized personnel
                  have access to personal information, and they are bound by
                  confidentiality obligations
                </li>
                <li>
                  <strong>Regular Audits:</strong> We regularly review our
                  security practices and update them as needed
                </li>
              </ul>
              {/* <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <p className="text-gray mb-0">
                  <strong>Important:</strong> While we strive to protect your
                  personal information, no method of transmission over the
                  Internet or electronic storage is 100% secure. We cannot
                  guarantee absolute security.
                </p>
              </div> */}
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                5. Data Retention
              </h2>
              <p className="text-gray mb-4">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>Provide our services and support your application</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Resolve disputes and enforce our agreements</li>
                <li>Maintain business records</li>
              </ul>
              <p className="text-gray">
                Typically, we retain application data for 7 years after
                submission to comply with record-keeping requirements. After
                this period, we securely delete or anonymize your information
                unless we are legally required to retain it longer.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                6. Your Privacy Rights
              </h2>
              <p className="text-gray mb-4">
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                6.1 Access and Portability
              </h3>
              <p className="text-gray mb-4">
                You have the right to request a copy of the personal information
                we hold about you in a structured, commonly used format.
              </p>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                6.2 Correction
              </h3>
              <p className="text-gray mb-4">
                You have the right to request correction of inaccurate or
                incomplete personal information. Note that once your application
                is submitted to U.S. authorities, changes must be made through
                official government channels.
              </p>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                6.3 Deletion
              </h3>
              <p className="text-gray mb-4">
                You have the right to request deletion of your personal
                information, subject to certain exceptions (e.g., legal
                retention requirements, ongoing transactions, security
                purposes).
              </p>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                6.4 Opt-Out of Marketing
              </h3>
              <p className="text-gray mb-4">
                You can opt out of receiving promotional emails by clicking the
                &quot;unsubscribe&quot; link in any marketing email. Note that
                you will still receive transactional emails related to your
                application.
              </p>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                6.5 GDPR Rights (European Users)
              </h3>
              <p className="text-gray mb-4">
                If you are located in the European Economic Area (EEA), you have
                additional rights under the General Data Protection Regulation
                (GDPR), including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray">
                <li>Right to object to processing</li>
                <li>Right to restrict processing</li>
                <li>Right to lodge a complaint with a supervisory authority</li>
              </ul>

              <p className="text-gray mt-4">
                To exercise any of these rights, contact us at
                {PRIVACY_EMAIL}. We will respond to your request within 30 days.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray mb-4">
                We use cookies and similar tracking technologies to enhance your
                experience on our website:
              </p>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                7.1 Types of Cookies We Use
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>
                  <strong>Essential Cookies:</strong> Required for the website
                  to function properly (e.g., authentication, security)
                </li>
                <li>
                  <strong>Functional Cookies:</strong> Remember your preferences
                  and settings
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how
                  visitors use our website
                </li>
                <li>
                  <strong>Performance Cookies:</strong> Collect information
                  about website performance
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                7.2 Managing Cookies
              </h3>
              <p className="text-gray">
                Most web browsers automatically accept cookies, but you can
                modify your browser settings to decline cookies if you prefer.
                Please note that disabling cookies may affect the functionality
                of our website.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                8. Children&apos;s Privacy
              </h2>
              <p className="text-gray">
                Our service is not intended for children under 18 years of age
                without parental consent. When processing ESTA applications for
                minors, we require a parent or legal guardian to complete the
                application on their behalf. We do not knowingly collect
                personal information from children without parental consent.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                9. International Data Transfers
              </h2>
              <p className="text-gray mb-4">
                As {COMPANY_NAME} is operated by {COMPANY_LEGAL_NAME}, a company
                based in {COMPANY_JURISDICTION}, and we process travel
                authorizations for multiple countries, your information may be
                transferred internationally.
              </p>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                9.1 Transfers Within the EU/EEA
              </h3>
              <p className="text-gray mb-4">
                Our servers and primary data processing occur within the
                European Economic Area (EEA), ensuring GDPR compliance for
                European users.
              </p>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                9.2 Transfers Outside the EU/EEA
              </h3>
              <p className="text-gray mb-4">
                Your information may be transferred to and processed outside the
                EEA, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>
                  <strong>United States:</strong> When submitting ESTA
                  applications to U.S. Customs and Border Protection
                </li>
                <li>
                  <strong>United Kingdom:</strong> When submitting ETA
                  applications to UK authorities (UK maintains data adequacy
                  status with the EU)
                </li>
                <li>
                  <strong>Service Providers:</strong> Third-party providers like
                  Stripe (payment processing) and Google (analytics) may process
                  data in multiple jurisdictions
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                9.3 Safeguards for International Transfers
              </h3>
              <p className="text-gray">
                We ensure appropriate safeguards are in place for all
                international data transfers, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray">
                <li>
                  Use of Standard Contractual Clauses (SCCs) approved by the
                  European Commission
                </li>
                <li>
                  Transferring data only to countries with adequacy decisions
                  from the EU Commission
                </li>
                <li>
                  Ensuring service providers comply with GDPR and maintain
                  appropriate technical and organizational security measures
                </li>
                <li>
                  Implementing data processing agreements with all third-party
                  processors
                </li>
              </ul>
            </section>

            {/* Section 10 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                10. Third-Party Links
              </h2>
              <p className="text-gray">
                Our website may contain links to third-party websites, including
                the official U.S. government ESTA website. We are not
                responsible for the privacy practices or content of these
                external sites. We encourage you to review the privacy policies
                of any third-party websites you visit.
              </p>
            </section>

            {/* Section 11 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                11. California Privacy Rights
              </h2>
              <p className="text-gray mb-4">
                If you are a California resident, you have specific rights under
                the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>
                  Right to know what personal information we collect, use,
                  disclose, and sell
                </li>
                <li>Right to request deletion of your personal information</li>
                <li>
                  Right to opt-out of the sale of personal information (Note: We
                  do not sell personal information)
                </li>
                <li>
                  Right to non-discrimination for exercising your privacy rights
                </li>
              </ul>
              <p className="text-gray">
                To exercise these rights, contact us at
                {PRIVACY_EMAIL}.
              </p>
            </section>

            {/* Section 12 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                12. Changes to This Privacy Policy
              </h2>
              <p className="text-gray">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technology, legal requirements, or
                other factors. We will notify you of any material changes by
                posting the new Privacy Policy on our website and updating the
                &quot;Last Updated&quot; date. Your continued use of our service
                after such changes constitutes your acceptance of the updated
                policy.
              </p>
            </section>

            {/* Section 13 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                13. Data Protection Officer & Contact
              </h2>
              <p className="text-gray mb-4">
                For questions or concerns about our privacy practices or to
                exercise your privacy rights, you can contact our Data
                Protection Officer:
              </p>
              <div className="bg-blue-50 rounded-lg p-6 mb-4">
                <ul className="space-y-2 text-gray">
                  <li>
                    <strong>Email:</strong> {PRIVACY_EMAIL}
                  </li>
                  <li>
                    <strong>Subject Line:</strong> Privacy Request / Data
                    Protection
                  </li>
                  <li>
                    <strong>Response Time:</strong> We will respond within 30
                    days
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                13.1 Data Controller Information
              </h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray mb-2">
                  <strong>Legal Name:</strong> {COMPANY_LEGAL_NAME}
                </p>
                <p className="text-gray mb-2">
                  <strong>Organization Number:</strong> {COMPANY_ORG_NUMBER}
                </p>
                <p className="text-gray mb-2">
                  <strong>Jurisdiction:</strong> {COMPANY_JURISDICTION}
                </p>
                <p className="text-gray mb-2">
                  <strong>Registered Office:</strong> {COMPANY_ADDRESS.line1},{" "}
                  {COMPANY_ADDRESS.postalCode} {COMPANY_ADDRESS.city},{" "}
                  {COMPANY_ADDRESS.country}
                </p>
                <p className="text-gray mb-0">
                  <strong>Trading As:</strong> {COMPANY_NAME} (
                  www.visaportal.online)
                </p>
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-blue-50 rounded-lg p-6 mt-12">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                Questions About This Privacy Policy?
              </h2>
              <p className="text-gray mb-4">
                If you have questions or concerns about this Privacy Policy or
                our data practices, please contact us:
              </p>
              <ul className="space-y-2 text-gray">
                <li>
                  <strong>Email:</strong> {PRIVACY_EMAIL}
                </li>
                <li>
                  <strong>Support Center:</strong>{" "}
                  <a
                    href="/support"
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    Visit our Support Center
                  </a>
                </li>
              </ul>
            </section>

            {/* Acknowledgment */}
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 mt-8">
              <p className="text-gray mb-0">
                <strong>
                  By using our service, you acknowledge that you have read and
                  understood this Privacy Policy and agree to the collection,
                  use, and disclosure of your information as described herein.
                </strong>
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
