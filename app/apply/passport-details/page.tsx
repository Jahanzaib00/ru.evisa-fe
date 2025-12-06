"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApplicationStore } from "@/app/lib/store/applicationStore";
import { useApplication } from "@/app/lib/hooks/useApplication";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { passportDetailsSchema } from "@/app/lib/validation/apply";
import ApplicationLayout from "@/app/components/application/ApplicationLayout";
import Input from "@/app/components/ui/Input";
import DatePicker from "@/app/components/ui/DatePicker";
import CountrySelect from "@/app/components/ui/CountrySelect";
import Checkbox from "@/app/components/ui/Checkbox";
import { LoadingSpinner } from "@/app/components/ui/Loader";
import { trackEvent } from "@/app/lib/analytics";

export default function PassportDetailsPage() {
  const router = useRouter();
  const { travelers, nationality, updateTravelersPassport, completeStep } =
    useApplicationStore();

  const { verifyApplicationState, saveTravelers, isLoading, error } =
    useApplication();

  const [isVerifying, setIsVerifying] = useState(true);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(passportDetailsSchema),
    defaultValues: {
      travelers: travelers.map((t) => ({
        nationalityOnPassport: nationality || "spain",
        addLater: false,
        passportNumber: t.passportNumber || "",
        expiryDay: t.passportExpiryDay || "",
        expiryMonth: t.passportExpiryMonth || "",
        expiryYear: t.passportExpiryYear || "",
        countryOfBirth: t.countryOfBirth || "australia",
        countryOfResidence: t.countryOfResidence || "australia",
      })),
    },
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

  // Auto-expand first traveler with validation errors
  useEffect(() => {
    if (errors.travelers && Array.isArray(errors.travelers)) {
      const firstErrorIndex = errors.travelers.findIndex(
        (travelerError) =>
          travelerError && Object.keys(travelerError).length > 0
      );

      if (firstErrorIndex !== -1) {
        setExpandedTraveler(firstErrorIndex);
      }
    }
  }, [errors.travelers]);

  const onSubmit = async (data: any) => {
    // Merge passport data with existing traveler data
    const mergedTravelers = travelers.map((t, index) => ({
      ...t,
      passportNumber: data.travelers[index].passportNumber,
      passportExpiryDay: data.travelers[index].expiryDay,
      passportExpiryMonth: data.travelers[index].expiryMonth,
      passportExpiryYear: data.travelers[index].expiryYear,
      nationalityOnPassport: data.travelers[index].nationalityOnPassport,
      countryOfBirth: data.travelers[index].countryOfBirth,
      countryOfResidence: data.travelers[index].countryOfResidence,
    }));

    // Save to localStorage (optimistic update)
    updateTravelersPassport(data.travelers);

    // Save complete traveler data to server
    const success = await saveTravelers({ travelers: mergedTravelers });

    if (!success) {
      // Error is already set in hook
      return;
    }

    completeStep(3);

    // Track analytics
    trackEvent({
      action: "step_3_completed",
      category: "conversion",
      label: "passport_details",
    });

    // Navigate to next step
    router.push("/apply/review");
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
        title="Passport details"
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
      title="Passport details"
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
          const isExpanded = expandedTraveler === index;
          const addLater = watch(`travelers.${index}.addLater`);
          const travelerName = `${travelers[index]?.firstName} ${travelers[index]?.lastName}`;

          return (
            <div
              key={field.id}
              className="border border-gray-light rounded-lg overflow-hidden bg-gray-lightest"
            >
              {/* Accordion Header */}
              <button
                type="button"
                onClick={() => setExpandedTraveler(isExpanded ? -1 : index)}
                className="w-full px-6 py-4 flex items-center justify-between
                         hover:bg-white transition-colors text-left"
              >
                <span className="font-semibold text-gray-dark text-base">
                  Traveler #{index + 1} - {travelerName}
                </span>
                <svg
                  className={`w-5 h-5 text-gray transition-transform ${
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
                <div className="px-6 py-6 bg-white border-t border-gray-light space-y-6">
                  {/* Nationality on Passport */}
                  <Controller
                    name={`travelers.${index}.nationalityOnPassport` as const}
                    control={control}
                    render={({ field }) => (
                      <CountrySelect
                        label="Nationality on passport"
                        required
                        value={field.value}
                        onChange={field.onChange}
                        error={
                          errors.travelers?.[index]?.nationalityOnPassport
                            ?.message as string
                        }
                        valueType="name"
                      />
                    )}
                  />

                  {/* Add Passport Details Later Checkbox */}
                  <div className="bg-gray-lightest rounded-lg p-4">
                    <Checkbox
                      {...register(`travelers.${index}.addLater` as const)}
                      label="Add passport details later"
                    />
                  </div>

                  {/* Passport Number */}
                  {!addLater && (
                    <>
                      <Input
                        label="Passport number"
                        placeholder="XXXXXXXXX"
                        required={!addLater}
                        maxLength={20}
                        className="uppercase"
                        {...register(
                          `travelers.${index}.passportNumber` as const
                        )}
                        error={
                          errors.travelers?.[index]?.passportNumber
                            ?.message as string
                        }
                      />

                      {/* Passport Expiration Date */}
                      <DatePicker
                        label="Passport expiration date"
                        required
                        register={register}
                        dayFieldName={`travelers.${index}.expiryDay` as const}
                        monthFieldName={
                          `travelers.${index}.expiryMonth` as const
                        }
                        yearFieldName={`travelers.${index}.expiryYear` as const}
                        dayError={
                          errors.travelers?.[index]?.expiryDay
                            ?.message as string
                        }
                        monthError={
                          errors.travelers?.[index]?.expiryMonth
                            ?.message as string
                        }
                        yearError={
                          errors.travelers?.[index]?.expiryYear
                            ?.message as string
                        }
                        yearRange="future"
                        yearCount={30}
                      />
                    </>
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
