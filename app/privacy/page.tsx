import type { Metadata } from "next";
import Header from "../components/layout/Header";
import Footer from "../components/home/Footer";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import { PRIVACY_EMAIL } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for ESTA Visa Portal. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  const lastUpdated = "November 19, 2025";

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
                At ESTA Visa Portal, we take your privacy seriously. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your personal information when you use our ESTA
                application assistance service.
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
                When you use our service to apply for ESTA, we collect personal
                information that you voluntarily provide, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>
                  <strong>Contact Information:</strong> Name, email address,
                  phone number, residential address
                </li>
                <li>
                  <strong>Travel Information:</strong> Passport details, travel
                  dates, destination address in the U.S.
                </li>
                <li>
                  <strong>Biographical Information:</strong> Date of birth,
                  place of birth, gender, citizenship, employment details
                </li>
                <li>
                  <strong>Emergency Contact:</strong> Emergency contact name and
                  phone number
                </li>
                <li>
                  <strong>Eligibility Information:</strong> Responses to ESTA
                  eligibility questions regarding health, criminal history, and
                  previous visa denials
                </li>
                <li>
                  <strong>Payment Information:</strong> Billing address and
                  payment details (processed securely through Stripe)
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                1.2 Information Automatically Collected
              </h3>
              <p className="text-gray mb-4">
                We automatically collect certain information when you visit our
                website:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray">
                <li>
                  <strong>Usage Data:</strong> IP address, browser type,
                  operating system, pages viewed, time spent on pages, access
                  times
                </li>
                <li>
                  <strong>Device Information:</strong> Device type, unique
                  device identifiers, mobile network information
                </li>
                <li>
                  <strong>Cookies and Tracking:</strong> We use cookies and
                  similar tracking technologies to enhance your experience and
                  analyze website usage
                </li>
              </ul>
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
                  To process and submit your ESTA application to U.S. Customs
                  and Border Protection
                </li>
                <li>
                  To review your application for errors and inconsistencies
                </li>
                <li>To communicate with you about your application status</li>
                <li>
                  To provide customer support and respond to your inquiries
                </li>
                <li>To process payments and prevent fraud</li>
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
                3.1 U.S. Government Authorities
              </h3>
              <p className="text-gray mb-4">
                Your ESTA application information is submitted to U.S. Customs
                and Border Protection and may be shared with other U.S.
                government agencies for the purpose of processing your travel
                authorization.
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
              <p className="text-gray">
                Your information may be transferred to and processed in the
                United States or other countries where our service providers
                operate. These countries may have data protection laws that are
                different from your country. By using our service, you consent
                to the transfer of your information to these countries. We
                ensure appropriate safeguards are in place to protect your
                information in accordance with this Privacy Policy.
              </p>
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
                13. Data Protection Officer
              </h2>
              <p className="text-gray">
                For questions or concerns about our privacy practices or to
                exercise your privacy rights, you can contact our Data
                Protection Officer at:
              </p>
              <div className="bg-blue-50 rounded-lg p-6 mt-4">
                <ul className="space-y-2 text-gray">
                  <li>
                    <strong>Email:</strong> {PRIVACY_EMAIL}
                  </li>
                  <li>
                    <strong>Subject Line:</strong> Privacy Request
                  </li>
                </ul>
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
