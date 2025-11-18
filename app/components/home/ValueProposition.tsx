import Container from "../ui/Container";
import Section from "../ui/Section";
import { JSX } from "react";

interface Benefit {
  icon: JSX.Element;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Simple Application Process",
    description:
      "Our easy-to-follow form takes just 10 minutes. We check for errors before submission to maximize approval chances.",
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Fast Processing",
    description:
      "Most applications approved within 4-24 hours. We monitor your status and notify you immediately.",
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    title: "Secure & Private",
    description:
      "Bank-level encryption protects your personal information. We never share your data with third parties.",
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    title: "Expert Support",
    description:
      "24/7 live support in English and Urdu. Our team helps with any questions throughout the process.",
  },
];

export default function ValueProposition() {
  return (
    <Section id="value-proposition" padding="xl">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gov-gray-dark mb-4">
            Why Choose Us for Your ESTA?
          </h2>
          <p className="text-lg text-gov-gray mx-auto">
            We make the ESTA application process simple, secure, and stress-free
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white border border-gov-gray-light rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="text-primary mb-4">{benefit.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gov-gray-dark mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gov-gray leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
