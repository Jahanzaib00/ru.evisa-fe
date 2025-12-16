"use client";

import { ServiceType, getService } from "@/app/lib/config/services";

// Import all shared step components
import SharedContactStep from "./steps/shared/SharedContactStep";
import SharedEmploymentStep from "./steps/shared/SharedEmploymentStep";
import SharedReviewStep from "./steps/shared/SharedReviewStep";

// Import all ESTA step components
import ESTAPersonalStep from "./steps/esta/ESTAPersonalStep";
import ESTAPassportStep from "./steps/esta/ESTAPassportStep";
import ESTAUSTravelStep from "./steps/esta/ESTAUSTravelStep";
import ESTAEligibilityStep from "./steps/esta/ESTAEligibilityStep";

// Import all UK ETA step components
import UKETAPersonalStep from "./steps/uk-eta/UKETAPersonalStep";
import UKETAPassportStep from "./steps/uk-eta/UKETAPassportStep";
import UKETAEmploymentStep from "./steps/uk-eta/UKETAEmploymentStep";
import UKETAEligibilityStep from "./steps/uk-eta/UKETAEligibilityStep";

// Component registry: maps component names (from service config) to actual components
const COMPONENT_REGISTRY: Record<string, React.ComponentType<StepComponentProps>> = {
  // Shared components
  SharedContactStep,
  SharedEmploymentStep,
  SharedReviewStep,

  // ESTA components
  ESTAPersonalStep,
  ESTAPassportStep,
  ESTAUSTravelStep,
  ESTAEligibilityStep,

  // UK ETA components
  UKETAPersonalStep,
  UKETAPassportStep,
  UKETAEmploymentStep,
  UKETAEligibilityStep,
};

export interface StepComponentProps {
  applicationId: string;
  onNext: () => void;
  onBack: () => void;
}

interface StepRendererProps {
  serviceType: ServiceType;
  currentStep: number;
  applicationId: string;
  onNext: () => void;
  onBack: () => void;
}

export default function StepRenderer({ serviceType, currentStep, applicationId, onNext, onBack }: StepRendererProps) {
  // Get service configuration
  const serviceConfig = getService(serviceType);

  // Get the current step config
  const stepConfig = serviceConfig.steps[currentStep];

  if (!stepConfig) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Invalid step: {currentStep}</p>
      </div>
    );
  }

  // Get the component from registry
  const StepComponent = COMPONENT_REGISTRY[stepConfig.component];

  if (!StepComponent) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Component not found: {stepConfig.component}</p>
        <p className="text-sm text-gray-500 mt-2">
          Make sure the component is registered in COMPONENT_REGISTRY
        </p>
      </div>
    );
  }

  // Render the step component with required props
  return <StepComponent applicationId={applicationId} onNext={onNext} onBack={onBack} />;
}
