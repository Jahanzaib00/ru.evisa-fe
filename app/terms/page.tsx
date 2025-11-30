import type { Metadata } from "next";
import Header from "../components/layout/Header";
import Footer from "../components/home/Footer";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import { SUPPORT_EMAIL } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for ESTA Visa Portal. Please read these terms carefully before using our ESTA application assistance service.",
};

export default function TermsPage() {
  const lastUpdated = "November 19, 2025";

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Section padding="lg" className="bg-gray-dark text-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
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
              <p className="text-gray mb-0">
                Please read these Terms of Service carefully before using our
                website and services. By accessing or using ESTA Visa Portal,
                you agree to be bound by these terms. If you do not agree with
                any part of these terms, you should not use our service.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                1. Service Description
              </h2>
              <p className="text-gray mb-4">
                ESTA Visa Portal (&quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;) is a private company that provides application
                assistance services for the U.S. Electronic System for Travel
                Authorization (ESTA). Our services include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray">
                <li>Application form review and error checking</li>
                <li>Simplified application interface</li>
                <li>Real-time application status monitoring</li>
                <li>Email and SMS notifications</li>
                <li>24/7 multilingual customer support</li>
                <li>Document guidance and assistance</li>
                <li>Resubmission assistance if needed</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                2. Disclaimer
              </h2>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                2.1 No Guarantee of Approval
              </h3>
              <p className="text-gray">
                While we maintain a 99% approval rate through our thorough
                review process,{" "}
                <strong>
                  we cannot and do not guarantee that your ESTA application will
                  be approved
                </strong>
                . The final decision on all ESTA applications is made solely by
                U.S. Customs and Border Protection. Approval depends on factors
                including but not limited to: eligibility under the Visa Waiver
                Program, information provided in your application, and security
                screenings conducted by U.S. authorities.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-8" id="refund-policy">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                3. Fees and Payment
              </h2>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                3.1 Service Fees
              </h3>
              <p className="text-gray mb-4">
                Our total service fee is $45.00 USD per applicant, which
                includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>
                  <strong>U.S. Government Fee: $40.00</strong> - This is the
                  official ESTA application fee charged by the U.S. government.
                  This fee is non-refundable and is paid directly to U.S.
                  Customs and Border Protection.
                </li>
                <li>
                  <strong>Our Service Fee: $5.00</strong> - This covers our
                  application assistance services including form review, error
                  checking, status monitoring, and 24/7 support.
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                3.2 Optional Denial Protection
              </h3>
              <p className="text-gray mb-4">
                Denial Protection is available for $17.99 per applicant. If
                purchased and your ESTA is denied, we will provide a full refund
                of our service fee ($5.00) and the denial protection fee
                ($17.99). The government fee ($40.00) is non-refundable under
                all circumstances.
              </p>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                3.3 Payment Processing
              </h3>
              <p className="text-gray">
                All payments are processed securely through Stripe, a certified
                PCI Service Provider Level 1. We do not store your credit card
                information on our servers. All fees must be paid in full before
                your application is submitted to U.S. authorities.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                4. Refund Policy
              </h2>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                4.1 Service Fee Refunds
              </h3>
              <p className="text-gray mb-4">
                You may request a refund of our service fee ($5.00) under the
                following conditions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>
                  Before your application has been submitted to U.S. authorities
                </li>
                <li>
                  If you purchased Denial Protection and your application is
                  denied
                </li>
                <li>
                  If we made a demonstrable error in processing your application
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                4.2 Non-Refundable Fees
              </h3>
              <p className="text-gray mb-4">
                The following fees are <strong>non-refundable</strong> under all
                circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>
                  U.S. Government fee ($40.00) - This fee is paid directly to
                  the U.S. government and is never refunded, regardless of
                  application outcome
                </li>
                <li>
                  Our service fee after your application has been submitted
                  (unless Denial Protection was purchased and application is
                  denied)
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                4.3 Refund Process
              </h3>
              <p className="text-gray">
                To request a refund, contact our support team at {SUPPORT_EMAIL}
                . Approved refunds will be processed within 5-10 business days
                to the original payment method.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                5. User Responsibilities
              </h2>
              <p className="text-gray mb-4">
                By using our service, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray">
                <li>
                  Provide accurate, complete, and truthful information in your
                  application
                </li>
                <li>Review all information carefully before submission</li>
                <li>
                  Maintain the confidentiality of your account credentials
                </li>
                <li>
                  Comply with all applicable U.S. laws and regulations regarding
                  travel and immigration
                </li>
                <li>
                  Not use our service for any fraudulent or illegal purposes
                </li>
                <li>
                  Notify us immediately of any errors or changes needed to your
                  application before submission
                </li>
              </ul>
              <p className="text-gray mt-4">
                <strong>Important:</strong> You are ultimately responsible for
                the accuracy of all information submitted. Providing false or
                misleading information may result in denial of your ESTA,
                ineligibility for the Visa Waiver Program, and potential legal
                consequences.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-gray mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray">
                <li>
                  We are not liable for any denial, delay, or rejection of your
                  ESTA application by U.S. authorities
                </li>
                <li>
                  We are not responsible for any travel delays, cancellations,
                  or expenses resulting from application denial or delay
                </li>
                <li>
                  Our total liability to you for any claim arising from our
                  services shall not exceed the amount you paid us for our
                  service fee
                </li>
                <li>
                  We are not liable for indirect, incidental, consequential, or
                  punitive damages
                </li>
                <li>
                  We are not responsible for technical issues, system downtime,
                  or delays caused by third parties including government systems
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                7. Privacy and Data Protection
              </h2>
              <p className="text-gray">
                Your privacy is important to us. Our collection, use, and
                protection of your personal information is governed by our{" "}
                <a
                  href="/privacy"
                  className="text-blue-600 hover:text-blue-700 underline font-semibold"
                >
                  Privacy Policy
                </a>
                . By using our service, you consent to our privacy practices as
                described in that policy.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                8. Intellectual Property
              </h2>
              <p className="text-gray">
                All content on our website, including text, graphics, logos,
                images, and software, is the property of ESTA Visa Portal or its
                content suppliers and is protected by international copyright
                laws. You may not reproduce, distribute, modify, or create
                derivative works from our content without express written
                permission.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                9. Service Modifications and Termination
              </h2>
              <p className="text-gray mb-4">We reserve the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray">
                <li>
                  Modify, suspend, or discontinue any aspect of our service at
                  any time
                </li>
                <li>Update these Terms of Service at any time</li>
                <li>
                  Refuse service to anyone for any reason at our sole discretion
                </li>
                <li>
                  Terminate or suspend your account for violation of these terms
                </li>
              </ul>
              <p className="text-gray mt-4">
                We will make reasonable efforts to notify users of significant
                changes to our terms or services.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                10. Governing Law and Disputes
              </h2>
              <p className="text-gray">
                These Terms of Service are governed by and construed in
                accordance with the laws of the United States. Any disputes
                arising from these terms or our services shall be resolved
                through binding arbitration in accordance with the rules of the
                American Arbitration Association. You agree to waive any right
                to a jury trial or to participate in a class action lawsuit.
              </p>
            </section>

            {/* Section 11 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                11. Third-Party Services
              </h2>
              <p className="text-gray">
                Our service uses third-party services including payment
                processors (Stripe) and communication services. We are not
                responsible for the practices or policies of these third
                parties. Your use of third-party services is subject to their
                respective terms and conditions.
              </p>
            </section>

            {/* Section 12 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                12. Severability
              </h2>
              <p className="text-gray">
                If any provision of these Terms of Service is found to be
                unlawful, void, or unenforceable, that provision shall be deemed
                severable and shall not affect the validity and enforceability
                of the remaining provisions.
              </p>
            </section>

            {/* Section 13 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                13. Entire Agreement
              </h2>
              <p className="text-gray">
                These Terms of Service, together with our Privacy Policy,
                constitute the entire agreement between you and ESTA Visa Portal
                regarding the use of our service, superseding any prior
                agreements.
              </p>
            </section>

            {/* Contact Section */}
            <section className="bg-blue-50 rounded-lg p-6 mt-12">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                Questions About These Terms?
              </h2>
              <p className="text-gray mb-4">
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <ul className="space-y-2 text-gray">
                <li>
                  <strong>Email:</strong> {SUPPORT_EMAIL}
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
                  By using our service, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms of Service.
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
