"use client";

import { Guide } from "@/app/lib/data/guides";
import { getGuideBySlug } from "@/app/lib/data/guides";
import Link from "next/link";

interface GuideContentProps {
  guide: Guide;
  relatedGuides?: Guide[];
}

export default function GuideContent({ guide }: GuideContentProps) {
  // Parse sections from guide content (assuming content has ## headings as section markers)
  const sections = guide.sections || [];

  return (
    <article className="prose prose-lg max-w-none">
      {/* Introduction */}
      <div id="introduction" className="scroll-mt-24">
        <div className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8">
          {guide.description}
        </div>
      </div>

      {/* Guide Sections */}
      {sections.map((section, idx) => (
        <div
          key={idx}
          id={section.id || `section-${idx}`}
          className="scroll-mt-24 mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 mt-12 border-l-4 border-blue-600 pl-6">
            {section.title}
          </h2>

          <div className="text-base md:text-lg leading-relaxed text-gray-700 space-y-6">
            {section.content.map((paragraph, pIdx) => {
              // Handle different content types
              if (typeof paragraph === "string") {
                return (
                  <p key={pIdx} className="mb-6">
                    {paragraph}
                  </p>
                );
              }

              // Handle lists
              if (paragraph.type === "list") {
                return (
                  <ul key={pIdx} className="space-y-3 ml-6 mb-6">
                    {paragraph.items?.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <span className="text-blue-600 mt-1.5 flex-shrink-0">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }

              // Handle callouts/alerts
              if (paragraph.type === "callout") {
                return (
                  <div
                    key={pIdx}
                    className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-2xl flex-shrink-0">💡</span>
                      <div>
                        <p className="font-semibold text-blue-900 mb-2">
                          {paragraph.title || "Important"}
                        </p>
                        <p className="text-gray-700">{paragraph.text}</p>
                      </div>
                    </div>
                  </div>
                );
              }

              // Handle warning boxes
              if (paragraph.type === "warning") {
                return (
                  <div
                    key={pIdx}
                    className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-2xl flex-shrink-0">⚠️</span>
                      <div>
                        <p className="font-semibold text-yellow-900 mb-2">
                          {paragraph.title || "Warning"}
                        </p>
                        <p className="text-gray-700">{paragraph.text}</p>
                      </div>
                    </div>
                  </div>
                );
              }

              return null;
            })}
          </div>

          {/* Inject CTA after every 2-3 sections */}
          {idx > 0 && (idx + 1) % 3 === 0 && (
            <div className="my-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 text-center shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
                Complete your ESTA application in minutes with our expert
                guidance and 99% approval rate
              </p>
              <Link
                href="/apply"
                className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Start Your Application →
              </Link>
            </div>
          )}
        </div>
      ))}

      {/* FAQ Section if available */}
      {guide.faqs && guide.faqs.length > 0 && (
        <div id="faqs" className="scroll-mt-24 mt-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {guide.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-600 transition-colors"
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="text-blue-600 flex-shrink-0">Q:</span>
                  <span>{faq.question}</span>
                </h3>
                <div className="text-base md:text-lg text-gray-700 ml-8">
                  <span className="font-semibold text-blue-600">A:</span>{" "}
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related Guides */}
      {guide.relatedGuides && guide.relatedGuides.length > 0 && (
        <div
          id="related"
          className="scroll-mt-24 mt-16 pt-12 border-t-2 border-gray-200"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Related Guides
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {guide.relatedGuides.map((guide) => {
              const relatedGuide = getGuideBySlug(guide);
              if (!relatedGuide) return;
              return (
                <Link
                  key={relatedGuide.slug} // unique key
                  href={`/guides/${relatedGuide.slug}`}
                  className="block border-2 border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-xl transition-all group"
                >
                  <div className="mb-3">
                    <span className="inline-block bg-gray-100 text-gray-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {relatedGuide.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {relatedGuide.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                    {relatedGuide.description}
                  </p>
                  {relatedGuide.estimatedReadTime && (
                    <p className="text-xs text-gray-500 flex items-center gap-1">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {relatedGuide.estimatedReadTime} min read
                    </p>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="mt-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Apply for Your ESTA Today
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied travelers. Our expert team will guide you
          through every step of the application process.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/apply"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Start Application Now
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            99% approval rate
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            24/7 expert support
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Money-back guarantee
          </span>
        </div>
      </div>
    </article>
  );
}
