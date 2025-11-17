"use client";

import { useState } from "react";

interface MobileOrderSummaryProps {
  totalApplicants: number;
  governmentFee: number;
  serviceFee: number;
  denialProtection?: boolean;
  denialProtectionFee?: number;
  showDenialProtectionToggle?: boolean;
  onDenialProtectionChange?: (enabled: boolean) => void;
}

export default function MobileOrderSummary({
  totalApplicants,
  governmentFee,
  serviceFee,
  denialProtection = false,
  denialProtectionFee = 17.99,
  showDenialProtectionToggle = false,
  onDenialProtectionChange,
}: MobileOrderSummaryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const baseTotal = (governmentFee + serviceFee) * totalApplicants;
  const protectionCost = denialProtection
    ? denialProtectionFee * totalApplicants
    : 0;
  const grandTotal = baseTotal + protectionCost;

  return (
    <div className="md:hidden mb-6">
      {/* Collapsed View */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full bg-white border border-gov-gray-light rounded-lg p-5
                   hover:border-primary/40 hover:bg-blue-50/40 transition-all shadow-sm"
        aria-expanded={isExpanded}
        aria-label={isExpanded ? "Hide order summary" : "Show order summary"}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <svg
              className={`w-5 h-5 text-gov-gray-dark transition-transform shrink-0 ${
                isExpanded ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div className="text-left">
              <p className="text-sm font-semibold text-gov-gray-dark">
                {isExpanded ? "Hide" : "Show"} order summary
              </p>
              <p className="text-xs text-gov-gray mt-0.5">
                {totalApplicants}{" "}
                {totalApplicants === 1 ? "traveler" : "travelers"}
              </p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-2xl font-bold text-gov-gray-dark">
              ${grandTotal.toFixed(2)}
            </p>
          </div>
        </div>
      </button>

      {/* Expanded View */}
      {isExpanded && (
        <div className="border border-t-0 border-gov-gray-light rounded-b-lg bg-white p-4 space-y-4 -mt-1">
          {/* Pricing Breakdown */}
          <div className="space-y-3">
            <h5 className="text-sm font-semibold text-gov-gray-dark">
              Price Breakdown
            </h5>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gov-gray">
                  Processing fee{" "}
                  <span className="text-xs">(x{totalApplicants})</span>
                </span>
                <span className="font-medium text-gov-gray-dark">
                  ${(serviceFee * totalApplicants).toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gov-gray">
                  Government fee{" "}
                  <span className="text-xs">(x{totalApplicants})</span>
                </span>
                <span className="font-medium text-gov-gray-dark">
                  ${(governmentFee * totalApplicants).toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="border-t border-gov-gray-light pt-3">
            <div className="flex justify-between items-baseline">
              <span className="text-base font-bold text-gov-gray-dark">
                Total Amount
              </span>
              <div className="text-right">
                <p className="text-xs text-gov-gray mb-0.5">
                  For all travelers
                </p>
                <p className="text-2xl font-bold text-primary">
                  USD ${grandTotal.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="space-y-2 pt-2">
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
              <span>Secure payment processing</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gov-gray">
              <svg
                className="w-4 h-4 text-success shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gov-gray">
              <svg
                className="w-4 h-4 text-success shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Your data is protected</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
