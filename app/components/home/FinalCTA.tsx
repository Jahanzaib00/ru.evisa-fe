"use client";

import Button from "../ui/Button";
import Container from "../ui/Container";
import Section from "../ui/Section";
import { trackCTAClick } from "@/app/lib/analytics";

export default function FinalCTA() {
  const handleCTAClick = () => {
    trackCTAClick("final-cta");
    window.location.href = '/apply';
  };

  return (
    <Section id="final-cta" background="blue" padding="xl">
      <Container>
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Ready to Apply for Your ESTA?
          </h2>

          <p className="text-xl md:text-2xl mb-8 opacity-90 mx-auto text-white">
            Join 50,000+ travelers who trusted us with their ESTA application
          </p>

          <div className="flex flex-col items-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={handleCTAClick}
              className="min-w-[300px]"
            >
              Start Your Application Now
            </Button>

            <div className="flex items-center gap-2 text-sm opacity-90 mt-2 text-white">
              <svg
                className="w-5 h-5 text-white"
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
              <span className="font-semibold text-white">
                Average processing time: 24-72 hours
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm mt-4 text-white">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white">Secure & Encrypted</span>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white">99% Approval Rate</span>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
