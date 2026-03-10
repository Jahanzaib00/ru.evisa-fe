"use client";

import { usePathname } from "next/navigation";
import { useApplicationStore } from "@/app/lib/store/applicationStore";
import { getService } from "@/app/lib/config/services";

interface Step {
  number: number;
  label: string;
  pathPattern: string;
}

const BASE_STEPS: Step[] = [
  { number: 1, label: "Your info", pathPattern: "/apply/personal-details" },
  { number: 2, label: "Passport", pathPattern: "/apply/passport-details" },
];

const PROCESSING_STEP: Step = {
  number: 3,
  label: "Processing",
  pathPattern: "/apply/processing-options",
};

const CHECKOUT_LABEL = "Checkout";

export default function StepProgress() {
  const pathname = usePathname();
  const { serviceType } = useApplicationStore();

  const service = serviceType ? getService(serviceType) : null;
  const skipProcessing = service?.skipProcessingOptions ?? false;

  // Build steps dynamically based on service config
  const steps: Step[] = skipProcessing
    ? [
        ...BASE_STEPS,
        { number: 3, label: CHECKOUT_LABEL, pathPattern: "/apply/review" },
      ]
    : [
        ...BASE_STEPS,
        PROCESSING_STEP,
        { number: 4, label: CHECKOUT_LABEL, pathPattern: "/apply/review" },
      ];

  // Extract destination from pathname
  const pathParts = pathname.split("/").filter(Boolean);
  const destination = pathParts.length > 0 ? pathParts[0] : "";

  // Match current step
  const currentStepIndex = steps.findIndex(
    (step) =>
      pathname === `/${destination}${step.pathPattern}` ||
      pathname.endsWith(step.pathPattern)
  );
  const currentStep = currentStepIndex >= 0 ? steps[currentStepIndex].number : 1;

  return (
    <div className="w-full bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pt-8 lg:py-12">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = step.number < currentStep;
          const isCurrent = step.number === currentStep;

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
                                   : "bg-gray-lightest text-gray border-2 border-gray-light"
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
                               ${isCurrent ? "text-gray-dark" : "text-gray"}`}
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
                                     : "bg-gray-light"
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
