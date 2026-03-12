"use client";

import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApplicationStore } from "@/app/lib/store/applicationStore";
import { useApplication } from "@/app/lib/hooks/useApplication";
import ApplicationLayout from "@/app/components/application/ApplicationLayout";
import { LoadingSpinner } from "@/app/components/ui/Loader";
import { trackEvent } from "@/app/lib/analytics";
import {
  getServiceByDestination,
  getCurrencySymbol,
  ProcessingTierType,
} from "@/app/lib/config/services";
import { Check } from "lucide-react";

interface Props {
  params: Promise<{
    destination: string;
  }>;
}

export default function ProcessingOptionsPage({ params }: Props) {
  const router = useRouter();
  const { destination } = use(params);

  const {
    serviceType,
    processingTier,
    setProcessingTier,
    completeStep,
    totalApplicants,
  } = useApplicationStore();

  const { verifyApplicationState, isLoading, error } = useApplication();
  const [isVerifying, setIsVerifying] = useState(true);

  // Get service config
  const service = getServiceByDestination(destination);

  // Set default processing tier if not set
  useEffect(() => {
    if (service && !processingTier) {
      const defaultTier = service.processingTiers.find((t) => t.isDefault);
      if (defaultTier) {
        setProcessingTier(defaultTier.type);
      }
    }
  }, [service, processingTier, setProcessingTier]);

  // Skip this page for flat-fee services (auto-select default tier and redirect)
  useEffect(() => {
    if (service?.skipProcessingOptions) {
      const defaultTier = service.processingTiers.find((t) => t.isDefault);
      if (defaultTier) {
        setProcessingTier(defaultTier.type);
      }
      completeStep(4);
      router.replace(`/${destination}/apply/review`);
    }
  }, [service, destination, router, setProcessingTier, completeStep]);

  // Verify application state on mount
  useEffect(() => {
    const verify = async () => {
      const isValid = await verifyApplicationState();
      if (!isValid) {
        router.push(`/${destination}/apply`);
      } else {
        setIsVerifying(false);
      }
    };

    verify();
  }, [verifyApplicationState, router, destination]);

  const handleContinue = () => {
    if (!processingTier) {
      return;
    }

    completeStep(4);

    // Track analytics
    trackEvent({
      action: "step_4_completed",
      category: "conversion",
      label: `processing_options_${processingTier}`,
    });

    // Navigate to review
    router.push(`/${destination}/apply/review`);
  };

  const handlePrevious = () => {
    router.back();
  };

  // Show loading state while verifying
  if (isVerifying || !service) {
    return (
      <ApplicationLayout
        title="Выберите скорость обработки"
        showSidebar={false}
        showMobileCTA={false}
        showPrevious={false}
      >
        <LoadingSpinner />
      </ApplicationLayout>
    );
  }

  const currency = service.pricing.currency;
  const currencySymbol = getCurrencySymbol(currency);
  const governmentFee = service.pricing.government;

  return (
    <ApplicationLayout
      title="Выберите скорость обработки"
      showSidebar={true}
      showMobileCTA={true}
      mobileButtonText="Сохранить и продолжить"
      mobileButtonDisabled={!processingTier}
      onMobileButtonClick={handleContinue}
      onSidebarButtonClick={handleContinue}
      sidebarButtonText="Сохранить и продолжить"
      sidebarButtonDisabled={!processingTier}
      showPrevious={true}
      showProcessingFee={true}
      showTotalAmount={false}
      onPreviousClick={handlePrevious}
    >
      <div className="space-y-4">
        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
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
                <p className="font-semibold text-sm">Ошибка</p>
                <p className="text-sm mt-1">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Processing Tier Options */}
        {service.processingTiers.map((tier) => {
          const isSelected = processingTier === tier.type;

          return (
            <button
              key={tier.type}
              type="button"
              onClick={() => setProcessingTier(tier.type)}
              className={`
                w-full text-left border-2 rounded-lg p-6 transition-all duration-200
                ${
                  isSelected
                    ? "border-primary bg-blue-50 shadow-md"
                    : "border-gray-light bg-white hover:border-gray hover:shadow-sm"
                }
              `}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    {/* Tier Label */}
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-dark">
                        {currencySymbol}
                        {tier.serviceFee.toFixed(2)}
                      </h3>
                      <p className="text-sm font-semibold text-gray mt-0.5">
                        {tier.label} - {tier.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      {/* Info Box */}
      {totalApplicants > 1 && (
        <div className="mt-8 flex items-start gap-3">
          <svg
            className="w-5 h-5 text-primary shrink-0 mt-0.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <div className="text-sm text-gray">
            стоимость обработки указана за одного заявителя
          </div>
        </div>
      )}
    </ApplicationLayout>
  );
}
