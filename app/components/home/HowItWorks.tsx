"use client";

import Button from "../ui/Button";
import Container from "../ui/Container";
import Section from "../ui/Section";
import { JSX } from "react";
import { trackCTAClick } from "@/app/lib/analytics";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Complete Application",
    description:
      "Fill out our simplified form with your passport and travel details. Takes about 10 minutes.",
    icon: (
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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    number: 2,
    title: "We Submit & Monitor",
    description:
      "We review for errors, submit to U.S. authorities, and track your application status in real-time.",
    icon: (
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
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Receive Approval",
    description:
      "Get your ESTA approval via email (usually within 72 hours). Valid for 2 years, multiple entries.",
    icon: (
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
          d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const handleCTAClick = () => {
    trackCTAClick("how-it-works");
    window.location.href = '/apply';
  };

  return (
    <Section id="how-it-works" background="gray" padding="xl">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gov-gray-dark mb-4">
            Get Your ESTA in 3 Easy Steps
          </h2>
          <p className="text-lg text-gov-gray mx-auto">
            Our streamlined process makes getting your travel authorization
            simple and fast
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-primary-light opacity-30" />
              )}

              {/* Step Card */}
              <div className="relative bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
                {/* Step Number Circle */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-primary-light mt-6 mb-4 flex justify-center">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gov-gray-dark mb-3 text-center">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gov-gray text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <Button variant="secondary" size="md" onClick={handleCTAClick}>
            Start Application Now
          </Button>
        </div>
      </Container>
    </Section>
  );
}
