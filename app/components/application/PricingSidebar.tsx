"use client";

import { Spinner } from "../ui/Loader";
import { useApplicationStore } from "@/app/lib/store/applicationStore";
import {
  getService,
  getCurrencySymbol,
  getProcessingTier,
  getDefaultProcessingTier,
} from "@/app/lib/config/services";

interface PricingSidebarProps {
  showButton?: boolean;
  buttonText?: string;
  buttonDisabled?: boolean;
  onButtonClick?: () => void;
  showPrevious?: boolean;
  showPricing?: boolean;
  showTotalAmount?: boolean;
  showProcessingFee?: boolean;
  onPreviousClick?: () => void;
}

export default function PricingSidebar({
  showButton = true,
  buttonText = "Save and continue",
  buttonDisabled = false,
  onButtonClick,
  showPrevious = true,
  showPricing = true,
  showTotalAmount = false,
  showProcessingFee = false,
  onPreviousClick,
}: PricingSidebarProps) {
  const { totalApplicants, serviceType, processingTier, getTotalAmount } =
    useApplicationStore();

  const total = getTotalAmount();
  const isMultipleTravelers = totalApplicants > 1;

  // Get service configuration
  const service = serviceType ? getService(serviceType) : null;
  const serviceName = service?.name || "Travel Authorization";
  const governmentFee = service?.pricing.government || 0;

  // Get the processing tier (default if not set)
  const tier =
    serviceType && processingTier
      ? getProcessingTier(serviceType, processingTier) ||
        getDefaultProcessingTier(serviceType)
      : serviceType
        ? getDefaultProcessingTier(serviceType)
        : null;
  const serviceFee = tier?.serviceFee || 0;

  const currency = service?.pricing.currency || "USD";
  const currencySymbol = getCurrencySymbol(currency);
  const validity = service?.validity;
  const validityText = validity?.duration || "N/A";
  const maxStay = validity?.stays || "N/A";
  const isMultipleEntry = validity?.multipleEntry ?? true;

  return (
    <div className="bg-white rounded-lg border border-gray-light p-6 shadow-sm">
      {/* Service Info */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-dark mb-4">{serviceName}</h3>

        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-gray mt-0.5 shrink-0"
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
              <p className="font-medium text-gray-dark">Valid for</p>
              <p className="text-gray">{validityText}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-gray mt-0.5 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
            </svg>
            <div>
              <p className="font-medium text-gray-dark">Number of entries</p>
              <p className="text-gray">
                {isMultipleEntry ? "Multiple entry" : "Single entry"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-gray mt-0.5 shrink-0"
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
              <p className="font-medium text-gray-dark">Max stay</p>
              <p className="text-gray">{maxStay}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="border-t border-gray-light pt-5">
        {showPricing && (
          <>
            <div className="space-y-3 text-sm mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-gray-dark font-medium">
                    {serviceName}
                  </span>
                  <p className="text-xs text-gray mt-0.5">
                    {totalApplicants}{" "}
                    {totalApplicants === 1 ? "traveler" : "travelers"}
                  </p>
                </div>
              </div>

              {governmentFee > 0 && (
                <div className="flex justify-between items-baseline">
                  <span className="text-gray">Government fees</span>
                  <div className="text-right">
                    {isMultipleTravelers && (
                      <p className="text-xs text-gray mb-0.5">
                        {currencySymbol}
                        {governmentFee.toFixed(2)} × {totalApplicants}
                      </p>
                    )}
                    <span className="font-semibold text-gray-dark">
                      {currencySymbol}
                      {(governmentFee * totalApplicants).toFixed(2)}
                    </span>
                  </div>
                </div>
              )}

              {showProcessingFee && (
                <div className="flex justify-between items-baseline">
                  <div>
                    {tier && (
                      <p className="text-sm text-gray mt-0.5">
                        {tier.label} processing fee
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    {isMultipleTravelers && (
                      <p className="text-xs text-gray mb-0.5">
                        {currencySymbol}
                        {serviceFee.toFixed(2)} × {totalApplicants}
                      </p>
                    )}
                    <span className="font-semibold text-gray-dark">
                      {currencySymbol}
                      {(serviceFee * totalApplicants).toFixed(2)}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-gray-light pt-4 mb-6">
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-medium text-gray-dark">
                  Total
                </span>
                <div className="text-right">
                  {showTotalAmount ? (
                    <>
                      {totalApplicants > 1 && (
                        <p className="text-xs text-gray mb-1">
                          For all travelers
                        </p>
                      )}
                      <p className="text-2xl font-bold text-gray-dark">
                        {currencySymbol}
                        {total.toFixed(2)} {currency.toUpperCase()}
                      </p>
                    </>
                  ) : (
                    <p className="text-md font-semibold text-gray-dark">
                      Calculated at checkout
                    </p>
                  )}
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
      <div className="mt-6 pt-6 border-t border-gray-light">
        <div className="flex items-center gap-2 text-xs text-gray">
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
