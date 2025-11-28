"use client";

import Link from "next/link";
import Button from "../ui/Button";
import { trackCTAClick } from "@/app/lib/analytics";

interface InlineCTAProps {
  variant?: "box" | "banner" | "sticky" | "minimal";
  position?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

/**
 * InlineCTA
 *
 * Conversion-focused CTA component for content pages
 * Multiple variants for different placement strategies
 *
 * Best Practices:
 * - Place after introduction (within first 2-3 paragraphs)
 * - Place mid-content (after key value points)
 * - Place at end before related content
 */
export default function InlineCTA({
  variant = "box",
  position = "mid-content",
  title = "Ready to Apply for Your ESTA?",
  description = "Get expert assistance with your ESTA application. 99% approval rate, 24/7 support.",
  buttonText = "Start Your Application",
  buttonHref = "/apply",
}: InlineCTAProps) {
  const handleClick = () => {
    trackCTAClick(`content-${variant}-${position}`);
  };

  if (variant === "sticky") {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-blue-900 text-white shadow-2xl border-t-4 border-blue-600 z-40 animate-slide-up">
        <div className="container mx-auto px-4 py-4 max-w-5xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
              <p className="text-sm text-blue-100">{description}</p>
            </div>
            <Link href={buttonHref} onClick={handleClick}>
              <Button variant="primary" size="md">
                {buttonText} →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "banner") {
    return (
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg p-6 my-8 shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-blue-100 text-lg">{description}</p>
          </div>
          <Link href={buttonHref} onClick={handleClick}>
            <Button variant="primary" size="lg">
              {buttonText} →
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (variant === "minimal") {
    return (
      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
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
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              {title}
            </h4>
            <p className="text-gray-700 mb-4">{description}</p>
            <Link href={buttonHref} onClick={handleClick}>
              <span className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                {buttonText}
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Default: box variant
  return (
    <div className="bg-blue-900 text-white rounded-xl p-8 my-12 text-center shadow-xl">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-xl text-blue-100 mb-6">{description}</p>
        <Link href={buttonHref} onClick={handleClick}>
          <Button variant="primary" size="lg">
            {buttonText} →
          </Button>
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm mt-6 text-blue-100">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>99% Approval Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Money-Back Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
}
