import type { Metadata } from "next";
import Header from "../components/layout/Header";
import Footer from "../components/home/Footer";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import {
  PRIVACY_EMAIL,
  COMPANY_NAME,
  COMPANY_ADDRESS,
  COMPANY_TRADE_NAME,
} from "@/app/lib/constants";
import { getAllServices } from "@/app/lib/helpers/legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${COMPANY_NAME}. Learn how we collect, use, and protect your personal information when using our travel authorization application services.`,
};

function formatDestination(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "March 11, 2026";
  const services = getAllServices();
  const serviceNames = services.map((s) => s.name).join(", ");

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
            <p className="text-lg text-gray-300">
              Last Updated: {lastUpdated}
            </p>
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
                {COMPANY_NAME} ({COMPANY_TRADE_NAME}) (&quot;we,&quot;
                &quot;our,&quot; or &quot;us&quot;) is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your personal information when you use
                our website and travel authorization application services,
                including {serviceNames}.
              </p>
              <p className="text-gray">
                By using our services, you consent to the data practices
                described in this policy. If you do not agree with this policy,
                please do not use our services.
              </p>
            </div>

            {/* Section 1 - Information We Collect */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                1. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-gray-dark mb-3">
                1.1 Personal Information You Provide
              </h3>
              <p className="text-gray mb-4">
                When you use our services to apply for travel authorizations, we
                collect the following categories of personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>
                  <strong>Contact Information:</strong> Full name, email
                  address, phone number, and mailing address.
                </li>
                <li>
                  <strong>Travel Information:</strong> Travel dates, flight
                  details, accommodation addresses, purpose of travel, and
                  itinerary information.
                </li>
                <li>
                  <strong>Biographical Information:</strong> Date of birth,
                  place of birth, gender, nationality, and passport details
                  (passport number, issue date, expiration date, issuing
                  country).
                </li>
                <li>
                  <strong>Emergency Contact Information:</strong> Name, phone
                  number, and relationship of your emergency contact.
                </li>
                <li>
                  <strong>Eligibility Information:</strong> Responses to
                  eligibility questions required by destination governments,
                  including questions about criminal history, prior immigration
                  violations, and health-related inquiries.
                </li>
                <li>
                  <strong>Payment Information:</strong> Payment is processed
                  securely through Stripe. We do not store your full credit card
                  number, CVV, or bank account details on our servers. Stripe
                  collects and processes your payment details directly.
                </li>
                <li>
                  <strong>Documents:</strong> Passport photos, identification
                  documents, and any supporting documents required for your
                  application.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-dark mb-3">
                1.2 Information Collected Automatically
              </h3>
              <p className="text-gray mb-4">
                When you visit our website, we automatically collect certain
                information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>
                  <strong>Usage Data:</strong> Pages visited, time spent on
                  pages, click patterns, referral sources, and navigation paths
                  through our website.
                </li>
                <li>
                  <strong>Device Information:</strong> IP address, browser type
                  and version, operating system, screen resolution, device type,
                  and language preferences.
                </li>
                <li>
                  <strong>Analytics:</strong> We use Google Analytics 4 (GA4) to
                  collect aggregated usage statistics to understand how visitors
                  interact with our website and improve our services.
                </li>
                <li>
                  <strong>Cookies and Storage:</strong> We use cookies,
                  localStorage, and sessionStorage to maintain your session,
                  remember preferences, and enhance your experience. See our{" "}
                  <a
                    href="/cookies"
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    Cookie Policy
                  </a>{" "}
                  for more details.
                </li>
              </ul>
            </section>

            {/* Section 2 - How We Use Your Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                2. How We Use Your Information
              </h2>

              <h3 className="text-xl font-semibold text-gray-dark mb-3">
                2.1 Primary Purposes
              </h3>
              <p className="text-gray mb-4">
                We use your personal information for the following primary
                purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>
                  <strong>Process Applications:</strong> To prepare and submit
                  your travel authorization applications to the relevant
                  government authorities.
                </li>
                <li>
                  <strong>Government Submissions:</strong> To submit your
                  application data to the appropriate government immigration
                  systems:
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    {services.map((service) => (
                      <li key={service.type}>
                        <strong>{service.name}:</strong>{" "}
                        {formatDestination(service.destination)} immigration and
                        border control authorities
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <strong>Application Review:</strong> To review your
                  application for accuracy and completeness before submission.
                </li>
                <li>
                  <strong>Communication:</strong> To send you application status
                  updates, confirmations, and respond to your inquiries.
                </li>
                <li>
                  <strong>Payment Processing:</strong> To process your service
                  fees securely through our payment provider, Stripe.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-dark mb-3">
                2.2 Service Improvement
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>
                  Analyze usage patterns and trends to improve our website and
                  services.
                </li>
                <li>
                  Optimize the user experience and application process based on
                  aggregated analytics data.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-dark mb-3">
                2.3 Legal Purposes
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>
                  Comply with applicable laws, regulations, and legal
                  obligations.
                </li>
                <li>
                  Enforce our{" "}
                  <a
                    href="/terms"
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    Terms of Service
                  </a>{" "}
                  and other agreements.
                </li>
                <li>
                  Detect, prevent, and address fraud, security issues, and
                  technical problems.
                </li>
              </ul>
            </section>

            {/* Section 3 - How We Share Your Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                3. How We Share Your Information
              </h2>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-6">
                <p className="text-gray font-semibold">
                  We do NOT sell, rent, or trade your personal information to
                  third parties for marketing purposes.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-dark mb-3">
                3.1 Government Authorities
              </h3>
              <p className="text-gray mb-4">
                Your application data is submitted to the relevant government
                immigration and border control authorities as required to
                process your travel authorization:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                {services.map((service) => (
                  <li key={service.type}>
                    <strong>{service.name}:</strong> Submitted to{" "}
                    {formatDestination(service.destination)} immigration and
                    border control authorities
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-dark mb-3">
                3.2 Service Providers
              </h3>
              <p className="text-gray mb-4">
                We share information with trusted third-party service providers
                who assist us in operating our business:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>
                  <strong>Stripe:</strong> Payment processing. Stripe is
                  PCI-DSS Level 1 certified. See{" "}
                  <a
                    href="https://stripe.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    Stripe&apos;s Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <strong>Communication Services:</strong> Email delivery and
                  notification services to communicate application status and
                  updates.
                </li>
                <li>
                  <strong>Cloud Hosting:</strong> Secure cloud infrastructure
                  providers for hosting our website and storing application
                  data.
                </li>
                <li>
                  <strong>Analytics:</strong> Google Analytics 4 for aggregated
                  website usage analysis.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-dark mb-3">
                3.3 Legal Requirements
              </h3>
              <p className="text-gray mb-4">
                We may disclose your information if required to do so by law or
                in response to valid requests by public authorities, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>Court orders, subpoenas, or other legal processes.</li>
                <li>
                  Requests from law enforcement or other government agencies.
                </li>
                <li>
                  To protect our rights, property, or safety, or that of our
                  users or the public.
                </li>
              </ul>
            </section>

            {/* Section 4 - Data Security */}
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
                  <strong>Encryption in Transit:</strong> All data transmitted
                  between your browser and our servers is encrypted using
                  SSL/TLS protocols.
                </li>
                <li>
                  <strong>Secure Storage:</strong> Personal data is stored in
                  encrypted databases with restricted access controls.
                </li>
                <li>
                  <strong>Payment Security:</strong> All payment processing is
                  handled by Stripe, which is PCI-DSS Level 1 certified -- the
                  highest level of payment security certification.
                </li>
                <li>
                  <strong>Access Controls:</strong> Access to personal data is
                  restricted to authorized personnel on a need-to-know basis.
                </li>
                <li>
                  <strong>Regular Audits:</strong> We conduct regular security
                  reviews and audits to identify and address potential
                  vulnerabilities.
                </li>
              </ul>
              <p className="text-gray mb-4">
                While we strive to protect your personal information, no method
                of transmission over the Internet or electronic storage is 100%
                secure. We cannot guarantee absolute security.
              </p>
            </section>

            {/* Section 5 - Data Retention */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                5. Data Retention
              </h2>
              <p className="text-gray mb-4">
                We retain your personal information for up to{" "}
                <strong>7 years</strong> from the date of your last application,
                in order to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>Comply with legal and regulatory requirements.</li>
                <li>
                  Resolve disputes and enforce our agreements.
                </li>
                <li>
                  Provide you with records of your past applications if needed.
                </li>
              </ul>
              <p className="text-gray mb-4">
                After the retention period, your personal data will be securely
                deleted or anonymized so that it can no longer be associated
                with you.
              </p>
            </section>

            {/* Section 6 - Your Privacy Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                6. Your Privacy Rights
              </h2>
              <p className="text-gray mb-4">
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>

              <h3 className="text-xl font-semibold text-gray-dark mb-3">
                6.1 Access and Portability
              </h3>
              <p className="text-gray mb-4">
                You have the right to request a copy of the personal information
                we hold about you in a structured, commonly used, and
                machine-readable format.
              </p>

              <h3 className="text-xl font-semibold text-gray-dark mb-3">
                6.2 Correction
              </h3>
              <p className="text-gray mb-4">
                You have the right to request that we correct any inaccurate or
                incomplete personal information we hold about you.
              </p>

              <h3 className="text-xl font-semibold text-gray-dark mb-3">
                6.3 Deletion
              </h3>
              <p className="text-gray mb-4">
                You have the right to request that we delete your personal
                information, subject to certain legal exceptions (such as
                compliance with legal obligations or ongoing dispute
                resolution).
              </p>

              <h3 className="text-xl font-semibold text-gray-dark mb-3">
                6.4 Opt-Out of Marketing
              </h3>
              <p className="text-gray mb-4">
                You may opt out of receiving promotional communications from us
                at any time by clicking the &quot;unsubscribe&quot; link in any
                marketing email, or by contacting us at{" "}
                <a
                  href={`mailto:${PRIVACY_EMAIL}`}
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  {PRIVACY_EMAIL}
                </a>
                .
              </p>

              <h3 className="text-xl font-semibold text-gray-dark mb-3">
                6.5 GDPR Rights (European Users)
              </h3>
              <p className="text-gray mb-4">
                If you are located in the European Economic Area (EEA) or the
                United Kingdom, you have additional rights under the General
                Data Protection Regulation (GDPR), including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>
                  <strong>Right to Restrict Processing:</strong> You may request
                  that we limit how we use your data.
                </li>
                <li>
                  <strong>Right to Object:</strong> You may object to our
                  processing of your data based on legitimate interests.
                </li>
                <li>
                  <strong>Right to Withdraw Consent:</strong> Where processing
                  is based on consent, you may withdraw your consent at any
                  time.
                </li>
                <li>
                  <strong>Right to Lodge a Complaint:</strong> You have the
                  right to lodge a complaint with a supervisory authority in
                  your jurisdiction.
                </li>
              </ul>
              <p className="text-gray mb-4">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href={`mailto:${PRIVACY_EMAIL}`}
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  {PRIVACY_EMAIL}
                </a>
                . We will respond to your request within 30 days.
              </p>
            </section>

            {/* Section 7 - Cookies and Tracking */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray mb-4">
                We use cookies and similar tracking technologies to enhance your
                experience, analyze website usage, and assist in our marketing
                efforts. Cookies are small text files stored on your device when
                you visit our website.
              </p>
              <p className="text-gray mb-4">
                For detailed information about the types of cookies we use, how
                they work, and how to manage your cookie preferences, please
                visit our{" "}
                <a
                  href="/cookies"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Cookie Policy
                </a>
                .
              </p>
            </section>

            {/* Section 8 - Children's Privacy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                8. Children&apos;s Privacy
              </h2>
              <p className="text-gray mb-4">
                Our services are not intended for use by individuals under the
                age of 18 without the involvement of a parent or legal guardian.
                We do not knowingly collect personal information from children
                under 18 without parental consent.
              </p>
              <p className="text-gray mb-4">
                Applications for minors must be submitted by a parent or legal
                guardian who accepts this Privacy Policy on the minor&apos;s
                behalf. If we learn that we have collected personal information
                from a child under 18 without parental consent, we will take
                steps to delete that information promptly.
              </p>
            </section>

            {/* Section 9 - International Data Transfers */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                9. International Data Transfers
              </h2>
              <p className="text-gray mb-4">
                By using our services, your personal information may be
                transferred to and processed in countries outside your country
                of residence. Specifically, your application data may be
                transferred to the following destination countries as part of
                the application process:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                {services.map((service) => (
                  <li key={service.type}>
                    <strong>{formatDestination(service.destination)}</strong> (
                    {service.name})
                  </li>
                ))}
              </ul>
              <p className="text-gray mb-4">
                We implement appropriate safeguards for international data
                transfers, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>
                  Standard Contractual Clauses (SCCs) approved by the European
                  Commission.
                </li>
                <li>
                  Adequacy decisions where applicable, recognizing that certain
                  countries provide an adequate level of data protection.
                </li>
                <li>
                  Technical and organizational security measures to protect your
                  data during transfer and storage.
                </li>
              </ul>
            </section>

            {/* Section 10 - Third-Party Links */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                10. Third-Party Links
              </h2>
              <p className="text-gray mb-4">
                Our website may contain links to third-party websites, including
                official government immigration portals. We are not responsible
                for the privacy practices or content of these external sites. We
                encourage you to review the privacy policies of any third-party
                websites you visit.
              </p>
            </section>

            {/* Section 11 - California Privacy Rights (CCPA) */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                11. California Privacy Rights (CCPA)
              </h2>
              <p className="text-gray mb-4">
                If you are a California resident, you have the following rights
                under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>
                  <strong>Right to Know:</strong> You may request information
                  about the categories and specific pieces of personal
                  information we have collected about you.
                </li>
                <li>
                  <strong>Right to Delete:</strong> You may request the deletion
                  of your personal information, subject to certain exceptions.
                </li>
                <li>
                  <strong>Right to Non-Discrimination:</strong> We will not
                  discriminate against you for exercising your CCPA rights.
                </li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-4">
                <p className="text-gray">
                  <strong>We do not sell personal information.</strong> As
                  defined by the CCPA, we do not sell, and have not sold in the
                  preceding 12 months, any personal information of our users to
                  third parties.
                </p>
              </div>
              <p className="text-gray mb-4">
                To exercise your CCPA rights, please contact us at{" "}
                <a
                  href={`mailto:${PRIVACY_EMAIL}`}
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  {PRIVACY_EMAIL}
                </a>
                . We will verify your identity before processing your request
                and respond within 45 days.
              </p>
            </section>

            {/* Section 12 - Changes to This Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                12. Changes to This Privacy Policy
              </h2>
              <p className="text-gray mb-4">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, legal requirements, or services. When
                we make changes, we will update the &quot;Last Updated&quot;
                date at the top of this page.
              </p>
              <p className="text-gray mb-4">
                We encourage you to review this Privacy Policy periodically. For
                material changes, we may notify you via email or through a
                prominent notice on our website. Your continued use of our
                services after any modifications indicates your acceptance of
                the updated Privacy Policy.
              </p>
            </section>

            {/* Section 13 - Data Controller & Contact */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                13. Data Controller and Contact Information
              </h2>
              <p className="text-gray mb-4">
                The data controller responsible for your personal information
                is:
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-4">
                <p className="text-gray font-semibold mb-2">{COMPANY_NAME}</p>
                <p className="text-gray mb-1">{COMPANY_ADDRESS.line1}</p>
                {COMPANY_ADDRESS.line2 && (
                  <p className="text-gray mb-1">{COMPANY_ADDRESS.line2}</p>
                )}
                <p className="text-gray mb-1">
                  {COMPANY_ADDRESS.city}, {COMPANY_ADDRESS.postalCode}
                </p>
                <p className="text-gray mb-3">{COMPANY_ADDRESS.country}</p>
                <p className="text-gray">
                  <strong>Privacy Inquiries:</strong>{" "}
                  <a
                    href={`mailto:${PRIVACY_EMAIL}`}
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    {PRIVACY_EMAIL}
                  </a>
                </p>
              </div>
              <p className="text-gray mb-4">
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please do not hesitate to
                contact us at the email address above. We aim to respond to all
                inquiries within 30 days.
              </p>
            </section>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
