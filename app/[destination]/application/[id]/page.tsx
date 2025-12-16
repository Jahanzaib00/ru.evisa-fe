'use client';

import { use, useState, useEffect } from 'react';
import { applicationsService } from '@/app/lib/api/services/applications.service';
import { getService } from '@/app/lib/config/services';
import { Application } from '@/app/lib/api/types';
import StepRenderer from '@/app/components/application/StepRenderer';
import { LoadingSpinner } from '@/app/components/ui/Loader';
import { AlertCircle } from 'lucide-react';
import Link from 'next/link';

interface ApplicationHubPageProps {
  params: Promise<{ id: string }>;
}

export default function ApplicationHubPage({ params: paramsPromise }: ApplicationHubPageProps) {
  const params = use(paramsPromise);
  const [application, setApplication] = useState<Application | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);

  // Fetch application data
  useEffect(() => {
    const fetchApplication = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await applicationsService.getById(params.id);
        setApplication(data);
      } catch (err: any) {
        console.error('Failed to fetch application:', err);
        setError(err.message || 'Failed to load application');
      } finally {
        setIsLoading(false);
      }
    };

    if (params.id) {
      fetchApplication();
    }
  }, [params.id]);

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner />
          <p className="mt-4 text-gray-600">Loading application...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !application) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-red-800 mb-2">
              Failed to Load Application
            </h2>
            <p className="text-red-600 mb-4">
              {error || 'Application not found'}
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-light transition-colors font-semibold"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Get service configuration
  const service = getService(application.serviceType);
  const totalSteps = service.steps.length;
  const currentStepConfig = service.steps[currentStep - 1];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
      // Scroll to top on step change
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      // Scroll to top on step change
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {service.name} Application
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Application ID: {params.id.slice(0, 8)}...
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">
                Step {currentStep} of {totalSteps}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {currentStepConfig?.title}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">
              Overall Progress
            </span>
            <span className="text-sm font-bold text-primary">
              {Math.round((currentStep / totalSteps) * 100)}%
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            {service.steps.map((step, index) => {
              const stepNumber = index + 1;
              const isCompleted = stepNumber < currentStep;
              const isCurrent = stepNumber === currentStep;
              const isUpcoming = stepNumber > currentStep;

              return (
                <div
                  key={step.component}
                  className="flex flex-col items-center flex-1"
                >
                  {/* Step Circle */}
                  <div
                    className={`
                      w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all
                      ${
                        isCompleted
                          ? 'bg-primary text-white'
                          : isCurrent
                          ? 'bg-primary text-white'
                          : 'bg-gray-200 text-gray-600'
                      }
                    `}
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
                      stepNumber
                    )}
                  </div>

                  {/* Step Label (hidden on mobile) */}
                  <span
                    className={`
                      mt-2 text-xs font-medium text-center hidden sm:block
                      ${isCurrent ? 'text-gray-900' : 'text-gray-600'}
                    `}
                  >
                    {step.title}
                  </span>

                  {/* Connector Line */}
                  {index < service.steps.length - 1 && (
                    <div className="absolute top-4 left-1/2 w-full h-0.5 -z-10 hidden sm:block">
                      <div
                        className={`
                          h-full transition-all
                          ${stepNumber < currentStep ? 'bg-primary' : 'bg-gray-200'}
                        `}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StepRenderer
          serviceType={application.serviceType}
          currentStep={currentStep - 1}
          applicationId={params.id}
          onNext={handleNext}
          onBack={handleBack}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="bg-white border-t border-gray-200 sticky bottom-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              Back
            </button>

            <div className="text-sm text-gray-600">
              Step {currentStep} of {totalSteps}
            </div>

            <button
              type="button"
              onClick={handleNext}
              disabled={currentStep === totalSteps}
              className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              {currentStep === totalSteps ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
