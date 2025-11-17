import Container from "../ui/Container";
import Section from "../ui/Section";
import { JSX } from "react";

interface Stat {
  value: string;
  label: string;
  icon?: JSX.Element;
}

const stats: Stat[] = [
  {
    value: "50,000+",
    label: "Applications Processed",
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
    value: "99%",
    label: "Approval Rate",
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
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    value: "24/7",
    label: "Expert Support",
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
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    value: "72 Hours",
    label: "Average Processing",
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
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function TrustBar() {
  return (
    <Section id="trust-bar" background="gray" padding="md">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon */}
              {stat.icon && (
                <div className="text-(--color-primary) mb-3 transition-transform group-hover:scale-110">
                  {stat.icon}
                </div>
              )}

              {/* Value */}
              <div className="text-3xl md:text-4xl font-bold text-(--color-gov-gray-dark) mb-2">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-sm md:text-base text-(--color-gov-gray)">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Security Badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-(--color-gov-gray-light)">
          <div className="flex items-center gap-2 text-(--color-gov-gray)">
            <svg
              className="w-6 h-6 text-(--color-success)"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-semibold">SSL Secured</span>
          </div>

          <div className="flex items-center gap-2 text-(--color-gov-gray)">
            <svg
              className="w-6 h-6 text-(--color-success)"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-semibold">Secure Payment</span>
          </div>

          <div className="flex items-center gap-2 text-(--color-gov-gray)">
            <svg
              className="w-6 h-6 text-(--color-success)"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
            </svg>
            <span className="font-semibold">Privacy Protected</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
