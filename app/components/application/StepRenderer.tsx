"use client";

import { ServiceType, getService } from "@/app/lib/config/services";

// Import all shared step components
import ESTAEmploymentStep from "./steps/esta/ESTAEmploymentStep";
import SharedReviewStep from "./steps/shared/SharedReviewStep";

// Import all ESTA step components
import ESTAPersonalStep from "./steps/esta/ESTAPersonalStep";
import ESTAPassportStep from "./steps/esta/ESTAPassportStep";
import ESTAUSTravelStep from "./steps/esta/ESTAUSTravelStep";
import ESTAContactStep from "./steps/esta/ESTAContactStep";
import ESTAEligibilityStep from "./steps/esta/ESTAEligibilityStep";

// Import all UK ETA step components
import UKETAPersonalStep from "./steps/uk-eta/UKETAPersonalStep";
import UKETAPassportStep from "./steps/uk-eta/UKETAPassportStep";
import UKETAEmploymentStep from "./steps/uk-eta/UKETAEmploymentStep";

// Import all TDAC step components
import TDACTripDetailsStep from "./steps/tdac/TDACTripDetailsStep";
import TDACPersonalDetailsStep from "./steps/tdac/TDACPersonalDetailsStep";

// Component registry: maps component names (from service config) to actual components
const COMPONENT_REGISTRY: Record<
  string,
  React.ComponentType<StepComponentProps>
> = {
  // Shared components
  ESTAEmploymentStep,
  SharedReviewStep,

  // ESTA components
  ESTAPersonalStep,
  ESTAPassportStep,
  ESTAUSTravelStep,
  ESTAContactStep,
  ESTAEligibilityStep,

  // UK ETA components
  UKETAPersonalStep,
  UKETAPassportStep,
  UKETAEmploymentStep,

  // TDAC components
  TDACTripDetailsStep,
  TDACPersonalDetailsStep,
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
        <p className="text-red-600">Invalid step: {currentStep + 1}</p>
        <p className="text-sm text-gray-500 mt-2">
          Service: {serviceConfig.name} has {serviceConfig.steps.length} steps
        </p>
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
