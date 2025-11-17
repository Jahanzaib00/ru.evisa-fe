"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApplicationStore } from "@/app/lib/store/applicationStore";
import { useApplication } from "@/app/lib/hooks/useApplication";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalDetailsSchema } from "@/app/lib/validation/schemas";
import ApplicationLayout from "@/app/components/application/ApplicationLayout";
import Input from "@/app/components/ui/Input";
import DatePicker from "@/app/components/ui/DatePicker";
import { LoadingSpinner } from "@/app/components/ui/Loader";
import { trackEvent } from "@/app/lib/analytics";

export default function PersonalDetailsPage() {
  const router = useRouter();
  const { travelers, totalApplicants, updateTravelers, completeStep } =
    useApplicationStore();

  const { verifyApplicationState, saveTravelers, isLoading, error } =
    useApplication();

  const [isVerifying, setIsVerifying] = useState(true);

  const defaultTravelers =
    travelers.length > 0
      ? travelers
      : Array.from({ length: totalApplicants }, () => ({
          firstName: "",
          lastName: "",
          birthDay: "",
          birthMonth: "",
          birthYear: "",
          email: "",
          marketingOptIn: false,
        }));

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(personalDetailsSchema),
    defaultValues: { travelers: defaultTravelers },
  });

  const { fields } = useFieldArray({
    control,
    name: "travelers",
  });

  const [expandedTraveler, setExpandedTraveler] = useState<number>(0);

  // Verify application state on mount
  useEffect(() => {
    const verify = async () => {
      const isValid = await verifyApplicationState();
      if (!isValid) {
        // Redirect to apply page if application is invalid
        router.push("/apply");
      } else {
        setIsVerifying(false);
      }
    };

    verify();
  }, [verifyApplicationState, router]);

  const onSubmit = async (data: any) => {
    // Save to localStorage (optimistic update)
    updateTravelers(data.travelers);

    // Save to server
    const success = await saveTravelers({ travelers: data.travelers });

    if (!success) {
      // Error is already set in hook
      // If error indicates invalid state, user will be redirected on next verification
      return;
    }

    completeStep(2);

    // Track analytics
    trackEvent({
      action: "step_2_completed",
      category: "conversion",
      label: "personal_details",
      value: data.travelers.length,
    });

    // Navigate to next step
    router.push("/apply/passport-details");
  };

  const handleContinue = () => {
    handleSubmit(onSubmit)();
  };

  const handlePrevious = () => {
    router.back();
  };

  // Show loading state while verifying
  if (isVerifying) {
    return (
      <ApplicationLayout
        title="Your personal details"
        description="Enter the details as they appear on your passport."
        showSidebar={false}
        showMobileCTA={false}
        showPrevious={false}
      >
        <LoadingSpinner />
      </ApplicationLayout>
    );
  }

  return (
    <ApplicationLayout
      title="Your personal details"
      description="Enter the details as they appear on your passport."
      showSidebar={true}
      showMobileCTA={true}
      mobileButtonText={isLoading ? "Saving..." : "Save and continue"}
      mobileButtonDisabled={isLoading}
      onMobileButtonClick={handleContinue}
      onSidebarButtonClick={handleContinue}
      sidebarButtonText={isLoading ? "Saving..." : "Save and continue"}
      sidebarButtonDisabled={isLoading}
      showPrevious={true}
      onPreviousClick={handlePrevious}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                <p className="font-semibold text-sm">Error</p>
                <p className="text-sm mt-1">{error}</p>
              </div>
            </div>
          </div>
        )}

        {fields.map((field, index) => {
          const travelerData = watch(`travelers.${index}`);
          const isExpanded = expandedTraveler === index;
          const travelerName =
            travelerData?.firstName && travelerData?.lastName
              ? `${travelerData.firstName} ${travelerData.lastName}`
              : `Traveler #${index + 1}`;

          return (
            <div
              key={field.id}
              className="border border-gov-gray-light rounded-lg overflow-hidden bg-gov-gray-lightest"
            >
              {/* Accordion Header */}
              <button
                type="button"
                onClick={() => setExpandedTraveler(isExpanded ? -1 : index)}
                className="w-full px-6 py-4 flex items-center justify-between
                         hover:bg-white transition-colors text-left"
              >
                <span className="font-semibold text-gov-gray-dark text-base">
                  Traveler #{index + 1}
                  {travelerData?.firstName && travelerData?.lastName && (
                    <span className="font-normal text-gov-gray ml-2">
                      - {travelerData.firstName} {travelerData.lastName}
                    </span>
                  )}
                </span>
                <svg
                  className={`w-5 h-5 text-gov-gray transition-transform ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Accordion Content */}
              {isExpanded && (
                <div className="px-6 py-6 bg-white border-t border-gov-gray-light space-y-6">
                  {/* First and Middle Name */}
                  <Input
                    label="First and middle name"
                    placeholder="John Michael"
                    required
                    {...register(`travelers.${index}.firstName` as const)}
                    error={
                      errors.travelers?.[index]?.firstName?.message as string
                    }
                  />

                  {/* Last Name */}
                  <Input
                    label="Last name"
                    placeholder="Smith"
                    required
                    {...register(`travelers.${index}.lastName` as const)}
                    error={
                      errors.travelers?.[index]?.lastName?.message as string
                    }
                  />

                  {/* Date of Birth */}
                  <DatePicker
                    label="Date of birth"
                    required
                    register={register}
                    dayFieldName={`travelers.${index}.birthDay` as const}
                    monthFieldName={`travelers.${index}.birthMonth` as const}
                    yearFieldName={`travelers.${index}.birthYear` as const}
                    dayError={
                      errors.travelers?.[index]?.birthDay?.message as string
                    }
                    monthError={
                      errors.travelers?.[index]?.birthMonth?.message as string
                    }
                    yearError={
                      errors.travelers?.[index]?.birthYear?.message as string
                    }
                    yearRange="past"
                    yearCount={100}
                  />

                  {/* Email Address - Only for first traveler */}
                  {index === 0 && (
                    <Input
                      type="email"
                      label="Email address"
                      placeholder="john.smith@example.com"
                      required
                      {...register(`travelers.${index}.email` as const)}
                      helperText="Your approved United States ESTA will be sent to this email address."
                      error={
                        errors.travelers?.[index]?.email?.message as string
                      }
                    />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </form>
    </ApplicationLayout>
  );
}
