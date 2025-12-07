"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  travelerEmploymentSchema,
  type TravelerEmploymentFormData,
} from "@/app/lib/validation/application";
import { useTravelers } from "@/app/lib/store/postPaymentStore";
import { usePostPaymentApplication } from "@/app/lib/hooks/usePostPaymentApplication";
import { useFormSubmit } from "@/app/lib/hooks/useFormSubmit";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import TravelerAccordion from "@/app/components/application/TravelerAccordion";
import CountrySelect from "@/app/components/ui/CountrySelect";
import RadioGroup from "@/app/components/ui/RadioGroup";

interface Traveler {
  id: string;
  firstName: string;
  lastName: string;
  isEmployed?: boolean;
  jobTitle?: string;
  employerName?: string;
  employerAddressLine1?: string;
  employerAddressLine2?: string;
  employerCity?: string;
  employerStateProvince?: string;
  employerCountry?: string;
  employerPhone?: string;
}

export default function Step5EmploymentPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const params = use(paramsPromise);
  const [currentTravelerId, setCurrentTravelerId] = useState<string>("");
  const travelers = useTravelers();
  const { saveStep, isLoading, error } = usePostPaymentApplication();

  const {
    register,
    control,
    handleSubmit,
    reset,
    setError: setFormError,
    watch,
    formState: { errors },
  } = useForm<TravelerEmploymentFormData>({
    resolver: zodResolver(travelerEmploymentSchema),
  });

  const watchIsEmployed = watch("isEmployed");

  // Initialize with first traveler on mount only
  useEffect(() => {
    if (travelers.length > 0 && !currentTravelerId) {
      setCurrentTravelerId(travelers[0].id);
      loadTravelerData(travelers[0]);
    }
  }, []);

  const loadTravelerData = (traveler: Traveler) => {
    reset({
      isEmployed: traveler.isEmployed || false,
      jobTitle: traveler.jobTitle || "",
      employerName: traveler.employerName || "",
      employerAddressLine1: traveler.employerAddressLine1 || "",
      employerAddressLine2: traveler.employerAddressLine2 || "",
      employerCity: traveler.employerCity || "",
      employerStateProvince: traveler.employerStateProvince || "",
      employerCountry: traveler.employerCountry || "",
      employerPhone: traveler.employerPhone || "",
    });
  };

  const handleTravelerChange = (travelerId: string) => {
    const traveler = travelers.find((t) => t.id === travelerId);
    if (traveler) {
      setCurrentTravelerId(travelerId);
      loadTravelerData(traveler);
    }
  };

  const onSubmit = useFormSubmit(
    setFormError,
    async (data: TravelerEmploymentFormData) => {
      if (!currentTravelerId) throw new Error("No traveler selected");

      const travelerData = {
        id: currentTravelerId,
        ...data,
      };

      // Save all data in one call
      const success = await saveStep(travelerData);
      if (!success)
        throw new Error(error || "Failed to save employment information");

      // Move to next traveler or next step
      const currentIndex = travelers.findIndex(
        (t) => t.id === currentTravelerId
      );
      if (currentIndex < travelers.length - 1) {
        // Switch to next traveler
        handleTravelerChange(travelers[currentIndex + 1].id);
      } else {
        // All travelers done, move to next step
        router.push(`/application/${params.id}/step-6-eligibility`);
      }
    }
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Employment Information
        </h1>
        <p className="text-gray-600">
          Provide your current employment status and details (if applicable).
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      <TravelerAccordion
        travelers={travelers}
        activeTravelerId={currentTravelerId}
        onTravelerChange={handleTravelerChange}
        renderContent={() => (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Employment Status Section */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Employment Status
              </h2>

              <Controller
                name="isEmployed"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    label="Are you currently employed?"
                    options={[
                      { value: "false", label: "Not currently employed" },
                      { value: "true", label: "Currently employed" },
                    ]}
                    value={field.value ? "true" : "false"}
                    onChange={(val) => field.onChange(val === "true")}
                    onBlur={field.onBlur}
                  />
                )}
              />
            </section>

            {/* Employer Details Section - Conditional */}
            {watchIsEmployed && (
              <section className="space-y-4 pt-6 border-t border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Employer Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Job Title"
                    placeholder="Your position"
                    error={errors.jobTitle?.message}
                    required={watchIsEmployed}
                    {...register("jobTitle")}
                  />

                  <Input
                    label="Employer Name"
                    placeholder="Company name"
                    error={errors.employerName?.message}
                    required={watchIsEmployed}
                    {...register("employerName")}
                  />
                </div>

                <Input
                  label="Employer Address Line 1"
                  placeholder="Street address"
                  error={errors.employerAddressLine1?.message}
                  {...register("employerAddressLine1")}
                />

                <Input
                  label="Employer Address Line 2"
                  placeholder="Suite, unit, etc. (optional)"
                  error={errors.employerAddressLine2?.message}
                  {...register("employerAddressLine2")}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Employer City"
                    error={errors.employerCity?.message}
                    required={watchIsEmployed}
                    {...register("employerCity")}
                  />

                  <Input
                    label="Employer State/Province"
                    error={errors.employerStateProvince?.message}
                    {...register("employerStateProvince")}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Controller
                    name="employerCountry"
                    control={control}
                    render={({ field }) => (
                      <CountrySelect
                        label="Employer Country"
                        error={errors.employerCountry?.message}
                        required={watchIsEmployed}
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        valueType="name"
                      />
                    )}
                  />

                  <Input
                    label="Employer Phone"
                    error={errors.employerPhone?.message}
                    {...register("employerPhone")}
                  />
                </div>
              </section>
            )}

            <div className="flex justify-between pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
              >
                Back
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="min-w-[200px]"
              >
                {isLoading ? "Saving..." : "Save & Continue"}
              </Button>
            </div>
          </form>
        )}
      />
    </div>
  );
}
