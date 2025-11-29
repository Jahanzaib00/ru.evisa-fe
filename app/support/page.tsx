"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Header from "../components/layout/Header";
import Footer from "../components/home/Footer";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

// FAQ data structure
interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "General",
    question: "What is ESTA and do I need it?",
    answer:
      "ESTA (Electronic System for Travel Authorization) is an automated system that determines the eligibility of visitors to travel to the U.S. under the Visa Waiver Program (VWP). If you're a citizen of a VWP country traveling to the U.S. for tourism or business for 90 days or less, you need an approved ESTA before boarding your flight.",
  },
  {
    category: "General",
    question: "How is your service different from the government website?",
    answer:
      "While you can apply directly through the government website (esta.cbp.dhs.gov) for $40, our service provides additional value through expert form review, error checking, simplified application process, 24/7 multilingual support, real-time status monitoring, and resubmission assistance. We charge a $5 service fee in addition to the $40 government fee for these professional services.",
  },
  {
    category: "General",
    question: "Are you affiliated with the U.S. government?",
    answer:
      "No, we are a private company providing application assistance services. We are not affiliated with, endorsed by, or connected to the U.S. government, Department of Homeland Security, or any governmental agency. The official government website is esta.cbp.dhs.gov.",
  },
  {
    category: "Application Process",
    question: "How long does it take to complete the application?",
    answer:
      "Our simplified application process typically takes 10-15 minutes to complete. You'll need your passport, travel details, employment information, and an emergency contact. Most applications are approved within 24 hours, though it can take up to 72 hours in some cases.",
  },
  {
    category: "Application Process",
    question: "What documents do I need to apply?",
    answer:
      "You'll need a valid passport from a Visa Waiver Program country (valid for at least 6 months beyond your travel date), your travel itinerary (approximate dates and U.S. address), employment information, emergency contact details, and a valid payment method.",
  },
  {
    category: "Application Process",
    question: "Can I save my application and complete it later?",
    answer:
      "Yes! You can save your progress at any time and return to complete your application later. Simply log in to your account to continue where you left off. Your information is securely stored and will be available for 30 days.",
  },
  {
    category: "Application Process",
    question: "What if I make a mistake on my application?",
    answer:
      "Our form review process checks for common errors before submission. If you notice an error before submission, you can easily edit your information. After submission, some fields cannot be changed - in such cases, you may need to submit a new application. Contact our support team immediately if you notice any errors.",
  },
  {
    category: "Pricing & Payment",
    question: "How much does ESTA cost?",
    answer:
      "Our total fee is $45.00 USD per applicant, which includes the $40 U.S. government fee and our $5 service fee for application assistance, form review, and 24/7 support. Optional Denial Protection is available for $17.99 per applicant.",
  },
  {
    category: "Pricing & Payment",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards (Visa, Mastercard, American Express, Discover) through our secure payment processor, Stripe. All transactions are encrypted and PCI-DSS compliant. We do not store your credit card information.",
  },
  {
    category: "Pricing & Payment",
    question: "What is Denial Protection?",
    answer:
      "Denial Protection is an optional service for $17.99 per applicant. If your ESTA application is denied and you purchased this protection, we will refund our service fee ($5) and the denial protection fee ($17.99). Please note that the government fee ($40) is non-refundable under all circumstances as it's paid directly to the U.S. government.",
  },
  {
    category: "Pricing & Payment",
    question: "Can I get a refund?",
    answer:
      "You can request a refund of our service fee ($5) before your application is submitted. Once submitted, our service fee is non-refundable unless you purchased Denial Protection and your application is denied. The government fee ($40) is never refundable as it's paid directly to U.S. Customs and Border Protection.",
  },
  {
    category: "After Submission",
    question: "How do I check my application status?",
    answer:
      "Log in to your account to view your real-time application status. We also send email and SMS notifications when there are updates. You can also check your status directly on the official government website using your application number.",
  },
  {
    category: "After Submission",
    question: "What happens if my ESTA is approved?",
    answer:
      "You'll receive an email notification with your approval details. Your ESTA is electronically linked to your passport and is valid for 2 years or until your passport expires, whichever comes first. You can use it for multiple trips to the U.S. (up to 90 days per visit).",
  },
  {
    category: "After Submission",
    question: "What if my ESTA is denied?",
    answer:
      "If your ESTA is denied, we'll notify you immediately and provide guidance on next steps. You may need to apply for a traditional visa at a U.S. embassy or consulate. If you purchased Denial Protection, we'll process your refund according to our policy. The government fee is non-refundable in all cases.",
  },
  {
    category: "After Submission",
    question: "Can I modify my ESTA after it's approved?",
    answer:
      "You can update some information (like your U.S. address or contact details) on the official ESTA website. However, if you need to change passport information, nationality, or answers to eligibility questions, you must submit a new application. Contact our support team for assistance.",
  },
  {
    category: "Technical Issues",
    question: "I'm having trouble logging in. What should I do?",
    answer:
      "First, try resetting your password using the 'Forgot Password' link. Make sure you're using the correct email address associated with your account. Clear your browser cache and try again. If issues persist, contact our 24/7 support team for immediate assistance.",
  },
  {
    category: "Technical Issues",
    question: "Is my information secure?",
    answer:
      "Yes. We use bank-level encryption (SSL/TLS) to protect all data transmitted between your browser and our servers. Your information is stored on secure servers with restricted access. We're compliant with international data protection standards including GDPR. We never share your information except as required to process your application.",
  },
  {
    category: "Technical Issues",
    question: "What browsers do you support?",
    answer:
      "Our website works best on the latest versions of Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated for the best experience and security. If you experience issues, try clearing your cache or using a different browser.",
  },
];

const categories = [
  "All",
  "General",
  "Application Process",
  "Pricing & Payment",
  "After Submission",
  "Technical Issues",
];

export default function SupportPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter FAQs based on category and search
  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Section padding="lg" className="bg-linear-to-b from-blue-50 to-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-dark mb-6">
              Support & Help Center
            </h1>
            <p className="text-xl text-gray mb-8">
              Get answers to your questions about ESTA applications
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-12 rounded-lg border-2 border-gray-300 focus:border-primary text-lg"
              />
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section padding="xl" className="bg-gray-50" id="faq">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-dark mb-8 text-center">
              Frequently Asked Questions
            </h2>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-white text-gray hover:bg-gray-lightest"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
                    >
                      <span className="font-semibold text-gray-dark pr-4">
                        {faq.question}
                      </span>
                      <svg
                        className={`w-6 h-6 text-gray-400 shrink-0 transition-transform ${
                          openFAQ === index ? "transform rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openFAQ === index && (
                      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                        <p className="text-gray leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <svg
                    className="w-16 h-16 text-gray-400 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-lg text-gray mb-4">
                    No results found for your search.
                  </p>
                  <p className="text-gray">
                    Try different keywords or contact our support team for
                    assistance.
                  </p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Options */}
      <Section padding="lg" className="bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Email Support */}
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gov-gray-dark mb-2">
                Email Support
              </h3>
              <p className="text-gov-gray mb-4">
                Get a response within 24 hours
              </p>
              <a
                href="mailto:support@estavisaportal.com"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                support@estavisaportal.com
              </a>
            </div>

            {/* Check Status */}
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gov-gray-dark mb-2">
                Check Status
              </h3>
              <p className="text-gov-gray mb-4">
                Track your application progress
              </p>
              <a
                href="/orders"
                className="text-purple-600 hover:text-purple-700 font-semibold"
              >
                View My Applications
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Additional Resources */}
      <Section padding="lg" className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-dark mb-8 text-center">
              Additional Resources
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Official Resources */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-dark mb-4">
                  Official U.S. Government Resources
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://esta.cbp.dhs.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
                    >
                      Official ESTA Website
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.cbp.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
                    >
                      U.S. Customs and Border Protection
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://travel.state.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
                    >
                      U.S. State Department Travel Info
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Our Resources */}
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-dark mb-4">
                  ESTA Visa Portal Resources
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/about"
                      className="text-green-600 hover:text-green-700 font-semibold"
                    >
                      About Our Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms"
                      className="text-green-600 hover:text-green-700 font-semibold"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy"
                      className="text-green-600 hover:text-green-700 font-semibold"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#requirements"
                      className="text-green-600 hover:text-green-700 font-semibold"
                    >
                      ESTA Requirements
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Still Need Help CTA */}
      <Section
        padding="lg"
        className="bg-linear-to-r from-blue-600 to-indigo-600 text-white"
      >
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-lg mb-8 opacity-90">
              Our support team is available 24/7 to assist you with any
              questions or concerns about your ESTA application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@estavisaportal.com"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
