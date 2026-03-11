import type { Metadata } from "next";
import Header from "../components/layout/Header";
import Footer from "../components/home/Footer";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import {
  SUPPORT_EMAIL,
  COMPANY_NAME,
  COMPANY_ADDRESS,
  COMPANY_TRADE_NAME,
} from "@/app/lib/constants";
import {
  getAllServices,
  formatGovernmentFee,
  formatFee,
} from "@/app/lib/helpers/legal-content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for eVisa Portal. Please read these terms carefully before using our travel authorization application assistance services.",
};

export default function TermsPage() {
  const lastUpdated = "March 11, 2026";
  const services = getAllServices();

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
                Please read these Terms of Service carefully before using our
                website and services. By accessing or using {COMPANY_NAME}, you
                agree to be bound by these terms. If you do not agree with any
                part of these terms, you should not use our service.
              </p>
            </div>

            {/* Section 1: Service Description */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                1. Service Description
              </h2>
              <p className="text-gray mb-4">
                {COMPANY_NAME} (&quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;) is a private commercial service that provides
                multi-destination travel authorization application assistance.
                We help travelers navigate the electronic travel authorization
                process for multiple countries worldwide. Our services currently
                include:
              </p>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                1.1 Available Services
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                {services.map((service) => (
                  <li key={service.type}>
                    <strong>{service.name}:</strong> Application assistance for
                    the {service.destination} {service.name.split(" ").pop()}
                  </li>
                ))}
                <li>
                  Additional destinations as we expand our service portfolio
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                1.2 Service Features
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray">
                <li>Application form review and error checking</li>
                <li>Simplified application interface</li>
                <li>Real-time application status monitoring</li>
                <li>Email notifications</li>
                <li>24/7 multilingual customer support</li>
                <li>Document guidance and assistance</li>
                <li>
                  Multiple processing tier options (
                  {services[0]?.processingTiers
                    .map((tier) => tier.label)
                    .join(", ")}
                  )
                </li>
                <li>Resubmission assistance if needed</li>
              </ul>
            </section>

            {/* Section 2: Disclaimer */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                2. Disclaimer
              </h2>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-4">
                <p className="text-gray mb-0">
                  <strong>Important:</strong> {COMPANY_NAME} is a private
                  commercial service and is{" "}
                  <strong>
                    not affiliated with, endorsed by, or connected to any
                    government agency or authority
                  </strong>
                  .
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                2.1 No Government Affiliation
              </h3>
              <p className="text-gray mb-4">
                We are an independent service provider. The respective
                government authorities responsible for processing travel
                authorizations include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                {services.map((service) => (
                  <li key={service.type}>
                    <strong>{service.destination}:</strong> The official
                    government authority responsible for {service.name}{" "}
                    applications
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                2.2 No Guarantee of Approval
              </h3>
              <p className="text-gray">
                While we maintain a high approval rate through our thorough
                review process,{" "}
                <strong>
                  we cannot and do not guarantee that your travel authorization
                  application will be approved
                </strong>
                . The final decision on all travel authorization applications is
                made solely by the respective government authorities. Approval
                depends on factors including but not limited to: eligibility
                requirements, information provided in your application, security
                screenings, and immigration history.
              </p>
            </section>

            {/* Section 3: Fees and Payment */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                3. Fees and Payment
              </h2>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                3.1 Fee Structure
              </h3>
              <p className="text-gray mb-4">
                Our fees vary by service and processing tier selected. Each
                application fee consists of:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>
                  <strong>Government Fee:</strong> The official fee charged by
                  the respective government authority (non-refundable)
                </li>
                <li>
                  <strong>Our Service Fee:</strong> Covers application review,
                  error checking, status monitoring, and support (varies by
                  processing tier)
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                3.2 Current Pricing
              </h3>
              <p className="text-gray mb-4">
                Below is the current pricing for each of our services:
              </p>

              {services.map((service) => (
                <div
                  key={service.type}
                  className="bg-white border border-gray-200 rounded-lg p-6 mb-4"
                >
                  <h4 className="font-bold text-gray-dark mb-3">
                    {service.name}
                  </h4>
                  <p className="text-gray mb-2">
                    Government Fee: {formatGovernmentFee(service)}{" "}
                    (non-refundable)
                  </p>
                  <ul className="space-y-1 text-gray">
                    {service.processingTiers.map((tier) => (
                      <li key={tier.type}>
                        {tier.label} ({tier.description}):{" "}
                        {formatFee(tier.serviceFee, service.pricing.currency)}{" "}
                        service fee
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <p className="text-sm text-gray mt-2 mb-4">
                <em>
                  Exact pricing is displayed during checkout. Fees may be
                  updated from time to time without prior notice.
                </em>
              </p>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                3.3 Payment Processing
              </h3>
              <p className="text-gray">
                All payments are processed securely through Stripe, a certified
                PCI Service Provider Level 1. We accept major credit and debit
                cards, as well as Google Pay and Apple Pay. We do not store your
                credit card information on our servers. All fees must be paid in
                full before your application is submitted to the relevant
                government authorities.
              </p>
            </section>

            {/* Section 4: Refund Policy Summary */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                4. Refund Policy
              </h2>

              <p className="text-gray mb-4">
                For complete details, please refer to our separate{" "}
                <a
                  href="/refund-policy"
                  className="text-blue-600 hover:text-blue-700 underline font-semibold"
                >
                  Refund Policy
                </a>
                . Key points are summarized below:
              </p>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                4.1 Service Fee Refunds
              </h3>
              <p className="text-gray mb-4">
                You may request a refund of our service fee under the following
                conditions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>
                  Before your application has been submitted to the respective
                  government authorities
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
                  <strong>Government Fees:</strong> All government fees are paid
                  directly to the respective government authorities and are
                  never refunded, regardless of application outcome
                </li>
                <li>
                  <strong>Our Service Fee after Submission:</strong> Once your
                  application has been submitted to government authorities
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                4.3 Refund Process
              </h3>
              <p className="text-gray">
                To request a refund, contact our support team at{" "}
                {SUPPORT_EMAIL}. Approved refunds will be processed within 5-10
                business days to the original payment method. For complete
                refund policy details, please visit our{" "}
                <a
                  href="/refund-policy"
                  className="text-blue-600 hover:text-blue-700 underline font-semibold"
                >
                  Refund Policy page
                </a>
                .
              </p>
            </section>

            {/* Section 5: User Responsibilities */}
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
                  Comply with all applicable laws and regulations regarding
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
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mt-4">
                <p className="text-gray mb-0">
                  <strong>Important:</strong> You are ultimately responsible for
                  the accuracy of all information submitted. Providing false or
                  misleading information may result in denial of your travel
                  authorization, ineligibility for future applications, and
                  potential legal consequences.
                </p>
              </div>
            </section>

            {/* Section 6: Limitation of Liability */}
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
                  travel authorization application by any government authority
                </li>
                <li>
                  We are not responsible for any travel delays, cancellations,
                  or expenses resulting from application denial or delay
                </li>
                <li>
                  Our total liability to you for any claim arising from our
                  services shall not exceed the total amount you paid us for the
                  specific application in question
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

            {/* Section 7: Privacy and Data Protection */}
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
                described in that policy. We are committed to protecting your
                personal data in accordance with applicable data protection laws
                and regulations.
              </p>
            </section>

            {/* Section 8: Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                8. Intellectual Property
              </h2>
              <p className="text-gray">
                All content on our website, including text, graphics, logos,
                images, and software, is the property of {COMPANY_NAME} or its
                content suppliers and is protected by international copyright
                laws. You may not reproduce, distribute, modify, or create
                derivative works from our content without express written
                permission.
              </p>
            </section>

            {/* Section 9: Service Modifications */}
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
                <li>
                  Adjust pricing for any of our services with updated pricing
                  reflected at checkout
                </li>
              </ul>
              <p className="text-gray mt-4">
                We will make reasonable efforts to notify users of significant
                changes to our terms or services.
              </p>
            </section>

            {/* Section 10: Governing Law */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                10. Governing Law and Disputes
              </h2>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                10.1 Dispute Resolution
              </h3>
              <p className="text-gray mb-4">
                Any disputes arising from these terms or our services shall be
                resolved according to the following process:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>
                  <strong>Informal Resolution:</strong> First, contact our
                  support team at {SUPPORT_EMAIL} to attempt to resolve the
                  dispute informally
                </li>
                <li>
                  <strong>Mediation:</strong> If informal resolution fails,
                  parties agree to attempt mediation before pursuing litigation
                </li>
                <li>
                  <strong>Jurisdiction:</strong> Any legal proceedings shall be
                  subject to the exclusive jurisdiction of the courts of Sweden
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                10.2 EU Consumer Rights
              </h3>
              <p className="text-gray">
                If you are a consumer residing in the European Union, you retain
                any mandatory consumer protection rights provided by the laws of
                your country of residence. Nothing in these Terms affects your
                statutory rights as a consumer under EU consumer protection law.
              </p>
            </section>

            {/* Section 11: Third-Party Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                11. Third-Party Services
              </h2>
              <p className="text-gray mb-4">
                Our service relies on third-party services to operate. These
                include but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray">
                <li>
                  <strong>Stripe:</strong> Payment processing, including credit
                  card, Google Pay, and Apple Pay transactions
                </li>
                <li>
                  <strong>Google Analytics:</strong> Website usage analytics and
                  performance monitoring
                </li>
              </ul>
              <p className="text-gray mt-4">
                We are not responsible for the practices or policies of these
                third parties. Your use of third-party services is subject to
                their respective terms and conditions.
              </p>
            </section>

            {/* Section 12: Severability */}
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

            {/* Section 13: Entire Agreement */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                13. Entire Agreement
              </h2>
              <p className="text-gray mb-4">
                These Terms of Service, together with our Privacy Policy, Cookie
                Policy, and Refund Policy, constitute the entire agreement
                between you and {COMPANY_NAME} regarding the use of our
                service, superseding any prior agreements.
              </p>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                13.1 Company Information
              </h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray mb-2">
                  <strong>Company:</strong> {COMPANY_NAME}
                </p>
                <p className="text-gray mb-2">
                  <strong>Trade Name:</strong> {COMPANY_TRADE_NAME}
                </p>
                <p className="text-gray mb-2">
                  <strong>Address:</strong> {COMPANY_ADDRESS.line1},{" "}
                  {COMPANY_ADDRESS.postalCode} {COMPANY_ADDRESS.city},{" "}
                  {COMPANY_ADDRESS.country}
                </p>
                <p className="text-gray mb-0">
                  <strong>Services Offered:</strong>{" "}
                  {services.map((s) => s.name).join(", ")}
                </p>
              </div>
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
