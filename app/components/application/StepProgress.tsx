"use client";

import { usePathname } from "next/navigation";

interface Step {
  number: number;
  label: string;
  path: string;
}

const steps: Step[] = [
  { number: 1, label: "Trip details", path: "/apply" },
  { number: 2, label: "Your info", path: "/apply/personal-details" },
  { number: 3, label: "Passport", path: "/apply/passport-details" },
  { number: 4, label: "Checkout", path: "/apply/review" },
];

export default function StepProgress() {
  const pathname = usePathname();

  const currentStepIndex = steps.findIndex((step) => pathname === step.path);
  const currentStep = currentStepIndex >= 0 ? currentStepIndex + 1 : 1;

  return (
    <div className="w-full bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pt-8 lg:py-12">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = step.number < currentStep;
          const isCurrent = step.number === currentStep;
          const isUpcoming = step.number > currentStep;

          return (
            <div key={step.number} className="flex items-center flex-1">
              {/* Step Circle */}
              <div className="flex flex-col items-center sm:items-start">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all
                               ${
                                 isCompleted
                                   ? "bg-primary text-white"
                                   : isCurrent
                                   ? "bg-primary text-white"
                                   : "bg-gov-gray-lightest text-gov-gray border-2 border-gov-gray-light"
                               }`}
                >
                  {isCompleted ? (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    step.number
                  )}
                </div>

                {/* Step Label */}
                <span
                  className={`mt-2 text-xs sm:text-sm font-medium hidden sm:block
                               ${
                                 isCurrent
                                   ? "text-gov-gray-dark"
                                   : "text-gov-gray"
                               }`}
                >
                  {step.label}
                </span>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 mx-2 sm:mx-4">
                  <div
                    className={`h-full transition-all
                                 ${
                                   step.number < currentStep
                                     ? "bg-primary"
                                     : "bg-gov-gray-light"
                                 }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
