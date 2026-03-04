"use client";

import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApplicationStore } from "@/app/lib/store/applicationStore";
import ApplicationLayout from "@/app/components/application/ApplicationLayout";
import MobileOrderSummary from "@/app/components/application/MobileOrderSummary";
import PaymentModal from "@/app/components/payment/PaymentModal";
import { trackEvent } from "@/app/lib/analytics";
import { paymentsService } from "@/app/lib/api/services/payments.service";
import { getFlagEmoji } from "@/app/lib/countries";
import {
  extractErrorMessage,
  isErrorType,
  logError,
} from "@/app/lib/utils/errorHandler";
import {
  getProcessingTier,
  getDefaultProcessingTier,
  getServiceByDestination,
} from "@/app/lib/config/services";

interface Props {
  params: Promise<{
    destination: string;
  }>;
}

export default function ReviewPage({ params }: Props) {
  const router = useRouter();
  const { destination } = use(params);

  // Get service config
  const service = getServiceByDestination(destination);

  const {
    travelers,
    getTotalAmount,
    applicationId,
    processingTier,
    serviceType,
  } = useApplicationStore();

  // useState must be declared unconditionally (Rules of Hooks)
  const [denialProtection, setDenialProtection] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Auto-set default processing tier for flat-fee services arriving at review directly
  useEffect(() => {
    if (serviceType && !processingTier && service?.skipProcessingOptions) {
      const { setProcessingTier } = useApplicationStore.getState();
      const defaultTier = service.processingTiers.find((t: any) => t.isDefault);
      if (defaultTier) {
        setProcessingTier(defaultTier.type);
      }
    }
  }, [serviceType, processingTier, service]);

  useEffect(() => {
    if (!serviceType) {
      router.push(`/${destination}/apply`);
    }
    // For non-flat-fee services, require processing tier selection
    if (serviceType && !processingTier && !service?.skipProcessingOptions) {
      router.push(`/${destination}/apply`);
    }
  }, [serviceType, processingTier, router, destination, service]);

  const total = getTotalAmount();

  if (!serviceType || (!processingTier && !service?.skipProcessingOptions)) {
    return null;
  }

  // Calculate expected delivery time
  const getExpectedDeliveryTime = () => {
    const now = new Date();
    const deliveryTime = new Date(
      now.getTime() +
        ((processingTier && getProcessingTier(serviceType, processingTier)?.processingTime) ||
          getDefaultProcessingTier(serviceType).processingTime) *
          60 *
          60 *
          1000,
    );

    const isToday = deliveryTime.toDateString() === now.toDateString();

    const hours = deliveryTime.getHours();
    const minutes = deliveryTime.getMinutes();

    const ampm = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes.toString().padStart(2, "0");

    const dayLabel = isToday ? "Today" : "Tomorrow";

    return `${dayLabel} by ${displayHours}:${displayMinutes} ${ampm}`;
  };

  const handlePayment = async () => {
    if (!applicationId) {
      setError("No application found. Please complete the previous steps.");
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      trackEvent({
        action: "payment_initiated",
        category: "conversion",
        label: "review_page",
        value: total,
      });

      // Create payment intent
      const amountInCents = Math.round(total * 100);
      const guestEmail = travelers[0]?.email; // First traveler's email for guest users

      // Get currency from service config
      const currency = service?.pricing.currency.toLowerCase() || "usd";

      const response = await paymentsService.createPaymentIntent({
        applicationId,
        amount: amountInCents,
        currency,
        guestEmail,
      });

      // Only open payment modal if we successfully got a client secret
      if (response?.clientSecret) {
        setClientSecret(response.clientSecret);
        setShowPaymentModal(true);
      } else {
        throw new Error("No client secret received from server");
      }
    } catch (err: any) {
      // Log error for debugging
      logError(err, "Payment initialization");

      // Check if payment was already completed
      if (isErrorType(err, "payment has already been completed")) {
        // Redirect to success page instead of showing error
        trackEvent({
          action: "purchase",
          category: "conversion",
          label: "esta_application_already_paid",
          value: total,
        });
        router.push("/payment/success");
        return;
      }

      // Extract and display error message
      const errorMessage = extractErrorMessage(
        err,
        "Failed to initialize payment. Please try again.",
      );
      setError(errorMessage);

      // Make sure payment modal doesn't open on error
      setShowPaymentModal(false);
      setClientSecret(null);
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePaymentSuccess = () => {
    trackEvent({
      action: "purchase",
      category: "conversion",
      label: "esta_application",
      value: total,
    });

    setShowPaymentModal(false);
    setClientSecret(null);

    // Redirect to first step of post-payment flow (dynamic routing)
    if (applicationId) {
      router.replace(`/${destination}/application/${applicationId}/1`);
    } else {
      router.replace("/");
    }
  };

  const handlePaymentError = (errorMessage: string) => {
    // Log the error
    logError(new Error(errorMessage), "Payment processing");

    // Display error to user
    setError(errorMessage || "Payment failed. Please try again.");

    // Close payment modal and clear client secret
    setShowPaymentModal(false);
    setClientSecret(null);
  };

  const handlePrevious = () => {
    router.back();
  };

  return (
    <>
      <ApplicationLayout
        title="Review your order"
        showSidebar={true}
        showMobileCTA={true}
        mobileButtonText="Continue to payment"
        mobileButtonDisabled={isProcessing}
        onMobileButtonClick={handlePayment}
        onSidebarButtonClick={handlePayment}
        sidebarButtonText="Continue to payment"
        sidebarButtonDisabled={isProcessing}
        showPrevious={false}
        showTotalAmount={true}
        showProcessingFee={true}
        showProgressBar={false}
        onPreviousClick={handlePrevious}
      >
        <div className="space-y-6">
          {/* Expected Delivery */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center gap-3">
            <svg
              className="w-6 h-6 text-gray-dark shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <div className="text-sm">
              <span className="font-semibold text-gray-dark">
                Expected delivery date:
              </span>{" "}
              <span className="text-gray">{getExpectedDeliveryTime()}</span>
            </div>
          </div>

          {/* Service Product Card */}
          {service && (
            <div className="border border-gray-light rounded-lg p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-dark mb-4">
                    {service.name}
                  </h3>

                  <div className="space-y-2 text-sm text-gray">
                    <div>
                      <span className="font-medium text-gray-dark">
                        Valid for:
                      </span>{" "}
                      {service.validity.duration}
                    </div>
                    <div>
                      <span className="font-medium text-gray-dark">
                        Max stay:
                      </span>{" "}
                      {service.validity.stays}
                    </div>
                    <div>
                      <span className="font-medium text-gray-dark">
                        Number of entries:
                      </span>{" "}
                      {service.validity.multipleEntry ? "Multiple" : "Single"}
                    </div>
                  </div>
                </div>

                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <span className="text-3xl">
                    {getFlagEmoji(service.destinationCode.toLowerCase())}
                  </span>
                </div>
              </div>

              {/* Travelers List */}
              <div className="border-t border-gray-light pt-4">
                <p className="font-medium text-gray-dark mb-3 text-sm">
                  Travelers:
                </p>
                <div className="space-y-2">
                  {travelers.map((traveler, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray"
                    >
                      <svg
                        className="w-4 h-4 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        {traveler.firstName} {traveler.lastName}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Mobile Order Summary */}
          <MobileOrderSummary
            denialProtection={denialProtection}
            showDenialProtectionToggle={true}
            onDenialProtectionChange={setDenialProtection}
          />
        </div>
      </ApplicationLayout>

      {/* Error Message */}
      {error && (
        <div className="fixed top-4 right-4 max-w-md bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg shadow-lg z-50">
          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-red-600 shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <div className="flex-1">
              <p className="font-semibold text-sm">Payment Error</p>
              <p className="text-sm mt-1">{error}</p>
            </div>
            <button
              onClick={() => setError(null)}
              className="text-red-600 hover:text-red-800"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {clientSecret && (
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => {
            setShowPaymentModal(false);
            setClientSecret(null);
          }}
          clientSecret={clientSecret}
          amount={Math.round(total * 100)}
          onSuccess={handlePaymentSuccess}
          onError={handlePaymentError}
        />
      )}
    </>
  );
}
