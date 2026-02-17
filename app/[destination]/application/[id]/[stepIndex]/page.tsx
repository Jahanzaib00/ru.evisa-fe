"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { usePostPaymentStore } from "@/app/lib/store/postPaymentStore";
import { getService } from "@/app/lib/config/services";
import StepRenderer from "@/app/components/application/StepRenderer";

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
  // Layout handles loading/error states — application is guaranteed here
  const application = usePostPaymentStore((state) => state.application);

  // Layout will render null children until application is loaded
  if (!application) return null;

  const stepIndex = parseInt(params.stepIndex, 10);
  const service = getService(application.serviceType);
  const totalSteps = service.steps.length;

  if (isNaN(stepIndex) || stepIndex < 1 || stepIndex > totalSteps) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg max-w-md mx-auto">
          <p className="font-semibold">Invalid Step</p>
          <p className="text-sm mt-1">Please navigate using the sidebar or buttons.</p>
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
