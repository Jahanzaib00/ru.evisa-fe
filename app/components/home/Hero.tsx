"use client";

import Image from "next/image";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Section from "../ui/Section";
import { trackCTAClick } from "@/app/lib/analytics";

export default function Hero() {
  const handleCTAClick = () => {
    trackCTAClick("hero");
    window.location.href = "/apply";
  };

  return (
    <Section id="hero" padding="xl" className="relative overflow-hidden">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gov-gray-dark leading-tight mb-6">
              Get Your U.S. ESTA in 3 Simple Steps
            </h1>

            <p className="text-lg md:text-xl text-gov-gray mb-8 leading-relaxed">
              Expert assistance with your U.S. Electronic System for Travel
              Authorization. 99% approval rate. Apply now and get approved
              within 24 hours.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={handleCTAClick}
                className="min-w-[280px]"
              >
                Start Your Application
              </Button>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/hero.png"
              alt="Statue of Liberty"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <a
            href="#trust-bar"
            className="animate-bounce text-primary hover:text-primary-light"
            aria-label="Scroll to learn more"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </Container>
    </Section>
  );
}
