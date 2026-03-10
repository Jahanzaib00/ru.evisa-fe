import type { Metadata } from "next";
import Header from "../components/layout/Header";
import Footer from "../components/home/Footer";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import {
  SUPPORT_EMAIL,
  COMPANY_NAME,
  COMPANY_LEGAL_NAME,
} from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Refund Policy for eVisa Portal. Learn about our refund terms, conditions, and process for travel authorization services.",
};

export default function RefundPolicyPage() {
  const lastUpdated = "January 13, 2026";

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Section padding="lg" className="bg-gray-dark text-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Refund Policy
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
                This Refund Policy outlines the terms and conditions for refunds
                at {COMPANY_NAME}, operated by {COMPANY_LEGAL_NAME}. We strive
                to provide excellent service, and this policy ensures
                transparency regarding when refunds are available.
              </p>
              <p className="text-gray mb-0">
                Please read this policy carefully before using our services. By
                making a purchase, you agree to these refund terms.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                1. Understanding Your Fees
              </h2>
              <p className="text-gray mb-4">
                When you use our service, your total payment consists of two
                distinct components:
              </p>

              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-bold text-gray-dark mb-3">
                  1.1 Government Fees (Non-Refundable)
                </h3>
                <p className="text-gray mb-3">
                  Government fees are official charges imposed by the respective
                  government authorities for processing your travel
                  authorization. These fees are paid directly to government
                  agencies and are <strong>non-refundable under all
                  circumstances</strong>, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray mb-3">
                  <li>US ESTA: $40.00 USD (paid to U.S. Customs and Border Protection)</li>
                  <li>UK ETA: £16.00 GBP (paid to UK Home Office)</li>
                  <li>Other services: As specified at checkout</li>
                </ul>
                <p className="text-gray mb-0">
                  <strong>Important:</strong> Government fees are non-refundable
                  regardless of application outcome (approval or denial).
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-bold text-gray-dark mb-3">
                  1.2 Our Service Fees (Conditionally Refundable)
                </h3>
                <p className="text-gray mb-3">
                  Our service fees cover professional application assistance,
                  including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray mb-3">
                  <li>Application review and error checking</li>
                  <li>Form validation and submission</li>
                  <li>Real-time status monitoring</li>
                  <li>Email notifications</li>
                  <li>24/7 customer support</li>
                  <li>Document guidance</li>
                </ul>
                <p className="text-gray mb-3">
                  <strong>Service fee amounts vary by processing tier:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray">
                  <li>Standard Processing: Starting from $5.00</li>
                  <li>Rush Processing: Starting from $15.00-$20.00</li>
                  <li>Super Rush Processing: Starting from $35.00-$45.00</li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                2. When Refunds Are Available
              </h2>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                2.1 Before Application Submission
              </h3>
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg mb-4">
                <p className="text-gray mb-2">
                  <strong>Full Service Fee Refund Available</strong>
                </p>
                <p className="text-gray mb-0">
                  If you have not yet submitted your application to government
                  authorities, you may request a full refund of our service fee.
                  Government fees are still non-refundable as they have already
                  been processed.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                2.2 After Application Submission
              </h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-4">
                <p className="text-gray mb-2">
                  <strong>Service Fee Generally Non-Refundable</strong>
                </p>
                <p className="text-gray mb-0">
                  Once your application has been submitted to government
                  authorities, our service fee is generally non-refundable
                  because we have completed our service obligations.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                2.3 Service Error or Technical Issues
              </h3>
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg mb-4">
                <p className="text-gray mb-2">
                  <strong>Full Service Fee Refund Available</strong>
                </p>
                <p className="text-gray mb-0">
                  If we made a demonstrable error in processing your application,
                  or if technical issues on our platform prevented your
                  application from being submitted correctly, you are entitled to
                  a full refund of our service fee.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                2.4 Duplicate Applications
              </h3>
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg mb-4">
                <p className="text-gray mb-2">
                  <strong>Full Service Fee Refund Available</strong>
                </p>
                <p className="text-gray mb-0">
                  If you accidentally submit duplicate applications through our
                  service, we will refund the service fee for the duplicate
                  submission. Government fees for duplicate applications remain
                  non-refundable.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                4. Non-Refundable Circumstances
              </h2>
              <p className="text-gray mb-4">
                Refunds are <strong>NOT available</strong> in the following
                situations:
              </p>

              <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg mb-4">
                <ul className="space-y-3 text-gray">
                  <li>
                    <strong>Government fees:</strong> Never refundable under any
                    circumstances, including application denial
                  </li>
                  <li>
                    <strong>Change of mind:</strong> After application submission
                  </li>
                  <li>
                    <strong>Ineligibility:</strong> If you were ineligible to
                    apply and knowingly submitted an application anyway
                  </li>
                  <li>
                    <strong>Incorrect information:</strong> If you provided
                    incorrect or false information in your application
                  </li>
                  <li>
                    <strong>Travel plan changes:</strong> If your travel plans
                    change after application submission
                  </li>
                  <li>
                    <strong>Processing time:</strong> Delays in government
                    processing beyond our control
                  </li>
                  <li>
                    <strong>Approved applications:</strong> Successfully approved
                    applications (you received the service you paid for)
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                5. How to Request a Refund
              </h2>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                5.1 Refund Request Process
              </h3>
              <p className="text-gray mb-4">
                To request a refund, follow these steps:
              </p>
              <ol className="list-decimal pl-6 space-y-3 text-gray mb-4">
                <li>
                  <strong>Contact our support team:</strong> Email{" "}
                  {SUPPORT_EMAIL} with "Refund Request" in the subject line
                </li>
                <li>
                  <strong>Provide required information:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Application reference number</li>
                    <li>Email address used for application</li>
                    <li>Reason for refund request</li>
                    <li>
                      Supporting documentation (if applicable, e.g., denial
                      notification)
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Await review:</strong> We will review your request
                  within 3-5 business days
                </li>
                <li>
                  <strong>Receive decision:</strong> We will notify you of our
                  decision via email
                </li>
              </ol>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                5.2 Refund Processing Time
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
                <p className="text-gray mb-3">
                  <strong>Approved refunds are processed as follows:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray">
                  <li>
                    <strong>Processing time:</strong> 5-10 business days from
                    approval
                  </li>
                  <li>
                    <strong>Refund method:</strong> Original payment method
                    (credit/debit card)
                  </li>
                  <li>
                    <strong>Bank processing:</strong> Additional 3-5 business
                    days for your bank to process the credit
                  </li>
                  <li>
                    <strong>Total timeline:</strong> Typically 8-15 business days
                    total
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                5.3 Refund Request Deadline
              </h3>
              <p className="text-gray">
                Refund requests must be submitted within:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray">
                <li>
                  <strong>Before submission:</strong> Anytime before government
                  submission
                </li>
                <li>
                  <strong>After submission:</strong> Within 30 days of
                  application submission (only for eligible refund reasons)
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                6. Chargebacks and Disputes
              </h2>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-4">
                <p className="text-gray mb-3">
                  <strong>Important: Contact Us First</strong>
                </p>
                <p className="text-gray mb-0">
                  Before initiating a chargeback with your bank or credit card
                  company, please contact our support team at {SUPPORT_EMAIL}.
                  Most issues can be resolved quickly and amicably. Chargebacks
                  may result in additional fees and potential restrictions on
                  future service use.
                </p>
              </div>

              <p className="text-gray mb-4">
                If you have already initiated a chargeback:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray">
                <li>
                  We will provide full documentation to your bank demonstrating
                  service delivery
                </li>
                <li>
                  Fraudulent chargebacks may result in legal action and
                  blacklisting from future services
                </li>
                <li>
                  Valid disputes will be honored if you meet our refund policy
                  criteria
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                7. Amendments to This Policy
              </h2>
              <p className="text-gray">
                We may update this Refund Policy from time to time. Any changes
                will be posted on this page with an updated "Last Updated" date.
                Changes apply to applications submitted after the update date.
                Applications submitted before policy changes remain subject to
                the policy in effect at the time of submission.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                8. Contact Information
              </h2>
              <p className="text-gray mb-4">
                For refund requests or questions about this policy, contact us:
              </p>
              <div className="bg-blue-50 rounded-lg p-6">
                <ul className="space-y-2 text-gray">
                  <li>
                    <strong>Email:</strong> {SUPPORT_EMAIL}
                  </li>
                  <li>
                    <strong>Subject Line:</strong> Refund Request
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
                  <li>
                    <strong>Response Time:</strong> Within 1-2 business days
                  </li>
                </ul>
              </div>
            </section>

            {/* Summary */}
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 mt-12">
              <h3 className="text-xl font-bold text-gray-dark mb-4">
                Quick Reference Summary
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-dark mb-3">
                    ✓ Refundable:
                  </h4>
                  <ul className="space-y-2 text-gray text-sm">
                    <li>• Service fee before submission</li>
                    <li>• Service fee for our errors</li>
                    <li>• Service fee for duplicate applications</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-dark mb-3">
                    ✗ Non-Refundable:
                  </h4>
                  <ul className="space-y-2 text-gray text-sm">
                    <li>• Government fees (always)</li>
                    <li>• Service fee after submission</li>
                    <li>• Change of mind after submission</li>
                    <li>• Approved applications</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
