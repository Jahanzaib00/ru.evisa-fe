"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePostPaymentStore } from "@/app/lib/store/postPaymentStore";
import { getService } from "@/app/lib/config/services";
import StepRenderer from "@/app/components/application/StepRenderer";
import { LoadingSpinner } from "@/app/components/ui/Loader";
import { AlertCircle } from "lucide-react";

interface DynamicStepPageProps {
  params: Promise<{
    destination: string;
    id: string;
    stepIndex: string;
  }>;
}

export default function DynamicStepPage({ params: paramsPromise }: DynamicStepPageProps) {
  const router = useRouter();
  const params = use(paramsPromise);
  const application = usePostPaymentStore((state) => state.application);
  const isLoading = usePostPaymentStore((state) => state.isLoading);
  const error = usePostPaymentStore((state) => state.error);

  // Parse step index from URL (1-based)
  const stepIndex = parseInt(params.stepIndex, 10);

  // Validate application exists
  if (!application) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-red-800 mb-2">
              Application Not Found
            </h2>
            <p className="text-red-600 mb-4">
              Unable to load your application. Please try again.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Get service configuration
  const service = getService(application.serviceType);
  const totalSteps = service.steps.length;

  // Validate step index
  if (isNaN(stepIndex) || stepIndex < 1 || stepIndex > totalSteps) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg max-w-md mx-auto">
          <p className="font-semibold">Invalid Step</p>
          <p className="text-sm mt-1">
            Please navigate using the sidebar or buttons.
          </p>
        </div>
      </div>
    );
  }

  const handleNext = () => {
    if (stepIndex < totalSteps) {
      router.push(`/${params.destination}/application/${params.id}/${stepIndex + 1}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (stepIndex > 1) {
      router.push(`/${params.destination}/application/${params.id}/${stepIndex - 1}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.back();
    }
  };

  return (
    <StepRenderer
      serviceType={application.serviceType}
      currentStep={stepIndex - 1} // Convert to 0-based index
      applicationId={params.id}
      onNext={handleNext}
      onBack={handleBack}
    />
  );
}
