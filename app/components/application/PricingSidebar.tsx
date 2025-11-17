"use client";

import { Spinner } from "../ui/Loader";
import { useApplicationStore } from "@/app/lib/store/applicationStore";

interface PricingSidebarProps {
  showButton?: boolean;
  buttonText?: string;
  buttonDisabled?: boolean;
  onButtonClick?: () => void;
  showPrevious?: boolean;
  showPricing?: boolean;
  onPreviousClick?: () => void;
}

export default function PricingSidebar({
  showButton = true,
  buttonText = "Save and continue",
  buttonDisabled = false,
  onButtonClick,
  showPrevious = true,
  showPricing = true,
  onPreviousClick,
}: PricingSidebarProps) {
  const { totalApplicants, governmentFee, serviceFee, getTotalAmount } =
    useApplicationStore();

  const total = getTotalAmount();

  return (
    <div className="bg-white rounded-lg border border-gov-gray-light p-6 shadow-sm">
      {/* ESTA Info */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gov-gray-dark mb-4">
          United States ESTA
        </h3>

        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-gov-gray mt-0.5 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="font-medium text-gov-gray-dark">Valid for</p>
              <p className="text-gov-gray">2 years after issued</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-gov-gray mt-0.5 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
            </svg>
            <div>
              <p className="font-medium text-gov-gray-dark">
                Number of entries
              </p>
              <p className="text-gov-gray">Multiple entry</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-gov-gray mt-0.5 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="font-medium text-gov-gray-dark">Max stay</p>
              <p className="text-gov-gray">90 days per entry</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}

      <div className="border-t border-gov-gray-light pt-5">
        {showPricing && (
          <>
            <div className="space-y-3 text-sm mb-4">
              <div className="flex justify-between">
                <span className="text-gov-gray">
                  United States ESTA
                  <span className="ml-1">
                    {totalApplicants}{" "}
                    {totalApplicants === 1 ? "traveler" : "travelers"}
                  </span>
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gov-gray">Government fees</span>
                <span className="font-semibold text-gov-gray-dark">
                  ${(governmentFee * totalApplicants).toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gov-gray">Processing Fee</span>
                <span className="font-semibold text-gov-gray-dark">
                  ${(serviceFee * totalApplicants).toFixed(2)}
                </span>
              </div>
            </div>

            <div className="border-t border-gov-gray-light pt-4 mb-6">
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-medium text-gov-gray-dark">
                  Total
                </span>
                <div className="text-right">
                  <p className="text-xs text-gov-gray mb-1">
                    For all travelers
                  </p>
                  <p className="text-2xl font-bold text-gov-gray-dark">
                    USD ${total.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="space-y-3">
          {showButton && onButtonClick && (
            <button
              type="button"
              onClick={onButtonClick}
              disabled={buttonDisabled}
              className="w-full bg-primary hover:bg-primary-light text-white font-semibold
                           py-3.5 px-6 rounded-md transition-colors disabled:opacity-50
                           disabled:cursor-not-allowed text-base flex items-center justify-center gap-2"
            >
              {buttonDisabled && <Spinner size="sm" variant="white" />}
              {buttonText}
            </button>
          )}

          {showPrevious && onPreviousClick && (
            <button
              type="button"
              onClick={onPreviousClick}
              className="w-full text-primary hover:text-primary-light font-medium py-2
                           flex items-center justify-center gap-2 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Previous
            </button>
          )}
        </div>
      </div>

      {/* Trust Badge */}
      <div className="mt-6 pt-6 border-t border-gov-gray-light">
        <div className="flex items-center gap-2 text-xs text-gov-gray">
          <svg
            className="w-4 h-4 text-success shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>We take strong measures to protect your information.</span>
        </div>
      </div>
    </div>
  );
}
