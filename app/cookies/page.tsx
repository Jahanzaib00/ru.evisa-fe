import type { Metadata } from "next";
import Header from "../components/layout/Header";
import Footer from "../components/home/Footer";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import { PRIVACY_EMAIL, COMPANY_NAME, COMPANY_LEGAL_NAME } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy for eVisa Portal. Learn about how we use cookies and similar tracking technologies on our website.",
};

export default function CookiePolicyPage() {
  const lastUpdated = "January 13, 2026";

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Section padding="lg" className="bg-gray-dark text-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cookie Policy
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
                This Cookie Policy explains how {COMPANY_NAME}, operated by{" "}
                {COMPANY_LEGAL_NAME}, uses cookies and similar tracking
                technologies when you visit our website. This policy should be
                read in conjunction with our Privacy Policy.
              </p>
              <p className="text-gray mb-0">
                By continuing to use our website, you consent to our use of
                cookies as described in this policy.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                1. What Are Cookies?
              </h2>
              <p className="text-gray mb-4">
                Cookies are small text files that are placed on your device
                (computer, smartphone, or tablet) when you visit a website.
                They are widely used to make websites work more efficiently and
                provide information to website owners.
              </p>
              <p className="text-gray">
                Cookies allow websites to recognize your device and remember
                information about your visit, such as your preferences and
                previous actions. This helps improve your experience and allows
                us to provide better services.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                2. Technologies We Use
              </h2>
              <p className="text-gray mb-4">
                We use the following technologies on our website:
              </p>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                2.1 Google Analytics 4 (GA4)
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
                <p className="text-gray mb-3">
                  <strong>Purpose:</strong> Website analytics and usage
                  statistics
                </p>
                <p className="text-gray mb-3">
                  <strong>Measurement ID:</strong> G-L8ZTZHMWRZ
                </p>
                <p className="text-gray mb-3">
                  <strong>Data Collected:</strong> Page views, session duration,
                  bounce rate, user navigation patterns, device information
                  (anonymized)
                </p>
                <p className="text-gray mb-3">
                  <strong>Cookie Duration:</strong> Up to 2 years
                </p>
                <p className="text-gray mb-3">
                  <strong>Third Party:</strong> Google LLC
                </p>
                <p className="text-gray mb-0">
                  <strong>Opt-out:</strong>{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    Google Analytics Opt-out Browser Add-on
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    Google Privacy Policy
                  </a>
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                2.2 Stripe Payment Processing
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
                <p className="text-gray mb-3">
                  <strong>Purpose:</strong> Secure payment processing and fraud
                  prevention
                </p>
                <p className="text-gray mb-3">
                  <strong>Data Collected:</strong> Payment information,
                  transaction details, device fingerprinting for fraud detection
                </p>
                <p className="text-gray mb-3">
                  <strong>Cookie Duration:</strong> Session and persistent
                  cookies (varies by purpose)
                </p>
                <p className="text-gray mb-3">
                  <strong>Third Party:</strong> Stripe, Inc.
                </p>
                <p className="text-gray mb-3">
                  <strong>Security:</strong> PCI-DSS Level 1 certified
                </p>
                <p className="text-gray mb-0">
                  <strong>Privacy Policy:</strong>{" "}
                  <a
                    href="https://stripe.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    Stripe Privacy Policy
                  </a>
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                2.3 Local Storage & Session Storage
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
                <p className="text-gray mb-3">
                  <strong>Purpose:</strong> Save application progress, user
                  preferences, and authentication state
                </p>
                <p className="text-gray mb-3">
                  <strong>Data Stored:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray mb-3">
                  <li>
                    Partial application data (personal details, passport
                    information, travel details)
                  </li>
                  <li>Authentication tokens (for logged-in users)</li>
                  <li>Form progress indicators</li>
                  <li>User interface preferences</li>
                </ul>
                <p className="text-gray mb-3">
                  <strong>Storage Duration:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray mb-3">
                  <li>
                    <strong>localStorage:</strong> Persists until manually
                    cleared
                  </li>
                  <li>
                    <strong>sessionStorage:</strong> Cleared when browser tab is
                    closed
                  </li>
                </ul>
                <p className="text-gray mb-0">
                  <strong>First Party:</strong> Data stored locally on your
                  device, only transmitted to our servers when you submit your
                  application
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                2.4 Essential Cookies
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
                <p className="text-gray mb-3">
                  <strong>Purpose:</strong> Required for website functionality
                </p>
                <p className="text-gray mb-3">
                  <strong>Examples:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray mb-3">
                  <li>Session management cookies</li>
                  <li>Authentication cookies (keeping you logged in)</li>
                  <li>Security cookies (CSRF protection)</li>
                  <li>Load balancing cookies</li>
                </ul>
                <p className="text-gray mb-0">
                  <strong>Note:</strong> These cookies are strictly necessary for
                  the website to function and cannot be disabled without
                  affecting core functionality.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                3. Managing Your Cookie Preferences
              </h2>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                3.1 Browser Settings
              </h3>
              <p className="text-gray mb-4">
                Most web browsers allow you to control cookies through their
                settings. You can set your browser to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>Block all cookies</li>
                <li>Block third-party cookies only</li>
                <li>Delete cookies when you close your browser</li>
                <li>Accept cookies by default but allow you to reject specific ones</li>
                <li>Notify you when a cookie is being set</li>
              </ul>

              <div className="bg-blue-50 rounded-lg p-6 mb-4">
                <h4 className="font-bold text-gray-dark mb-3">
                  Browser-Specific Instructions:
                </h4>
                <ul className="space-y-2 text-gray">
                  <li>
                    <strong>Chrome:</strong>{" "}
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      Cookie settings in Chrome
                    </a>
                  </li>
                  <li>
                    <strong>Firefox:</strong>{" "}
                    <a
                      href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      Cookie settings in Firefox
                    </a>
                  </li>
                  <li>
                    <strong>Safari:</strong>{" "}
                    <a
                      href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      Cookie settings in Safari
                    </a>
                  </li>
                  <li>
                    <strong>Edge:</strong>{" "}
                    <a
                      href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      Cookie settings in Edge
                    </a>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-dark mb-3">
                3.2 Clear Local Storage
              </h3>
              <p className="text-gray mb-4">
                To clear localStorage and sessionStorage data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray mb-4">
                <li>
                  <strong>Chrome/Edge:</strong> Press F12 → Application tab →
                  Clear storage
                </li>
                <li>
                  <strong>Firefox:</strong> Press F12 → Storage tab → Right-click
                  → Delete all
                </li>
                <li>
                  <strong>Safari:</strong> Develop menu → Empty Caches (or clear
                  all website data in Settings)
                </li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p className="text-gray mb-0">
                  <strong>Important:</strong> Clearing localStorage will remove
                  any saved application progress. You will need to re-enter your
                  information if you clear this data.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                4. Do Not Track (DNT) Signals
              </h2>
              <p className="text-gray">
                Some browsers include a &quot;Do Not Track&quot; (DNT) feature.
                Currently, there is no uniform technology standard for
                recognizing and implementing DNT signals. We do not currently
                respond to DNT browser signals. However, you can control cookies
                through your browser settings as described above.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                5. Updates to This Cookie Policy
              </h2>
              <p className="text-gray">
                We may update this Cookie Policy from time to time to reflect
                changes in our practices, technology, legal requirements, or
                other factors. We will notify you of any material changes by
                posting the updated policy on our website and updating the
                &quot;Last Updated&quot; date. Your continued use of our website
                after such changes constitutes your acceptance of the updated
                Cookie Policy.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                6. Your Rights
              </h2>
              <p className="text-gray mb-4">
                Under GDPR and other data protection laws, you have rights
                regarding cookies and personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray">
                <li>
                  <strong>Right to Access:</strong> Request information about the
                  cookies we use
                </li>
                <li>
                  <strong>Right to Object:</strong> Object to the use of certain
                  non-essential cookies
                </li>
                <li>
                  <strong>Right to Withdraw Consent:</strong> Withdraw your
                  consent for non-essential cookies at any time
                </li>
                <li>
                  <strong>Right to Delete:</strong> Request deletion of data
                  collected through cookies (subject to legal requirements)
                </li>
              </ul>
            </section>

            {/* Contact Section */}
            <section className="bg-blue-50 rounded-lg p-6 mt-12">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">
                Questions About Our Cookie Policy?
              </h2>
              <p className="text-gray mb-4">
                If you have any questions about our use of cookies or this
                Cookie Policy, please contact us:
              </p>
              <ul className="space-y-2 text-gray">
                <li>
                  <strong>Email:</strong> {PRIVACY_EMAIL}
                </li>
                <li>
                  <strong>Subject Line:</strong> Cookie Policy Inquiry
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
                  By continuing to use our website, you acknowledge that you have
                  read and understood this Cookie Policy and consent to our use
                  of cookies as described herein.
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
