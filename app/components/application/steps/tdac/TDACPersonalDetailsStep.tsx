"use client";

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTravelers } from "@/app/lib/store/postPaymentStore";
import { usePostPaymentApplication } from "@/app/lib/hooks/usePostPaymentApplication";
import { useFormSubmit } from "@/app/lib/hooks/useFormSubmit";
import Button from "@/app/components/ui/Button";
import RadioGroup from "@/app/components/ui/RadioGroup";
import CountrySelect from "@/app/components/ui/CountrySelect";
import TravelerAccordion from "@/app/components/application/TravelerAccordion";

const tdacPersonalDetailsSchema = z.object({
  gender: z.enum(["M", "F"], { message: "Please select your gender" }),
  countryOfResidence: z.string().min(1, "Country of residence is required"),
  employmentStatus: z.enum(["EMPLOYED", "RETIRED", "STUDENT", "UNEMPLOYED"], {
    message: "Please select your employment status",
  }),
});

type TDACPersonalDetailsFormData = z.infer<typeof tdacPersonalDetailsSchema>;

interface TDACPersonalDetailsStepProps {
  applicationId: string;
  onNext: () => void;
  onBack: () => void;
}

export default function TDACPersonalDetailsStep({ onNext, onBack }: TDACPersonalDetailsStepProps) {
  const [currentTravelerId, setCurrentTravelerId] = useState<string>("");
  const travelers = useTravelers();
  const { saveStep, isLoading, error } = usePostPaymentApplication();

  const { handleSubmit, setError: setFormError, control, reset, formState: { errors } } = useForm<TDACPersonalDetailsFormData>({
    resolver: zodResolver(tdacPersonalDetailsSchema),
  });

  useEffect(() => {
    if (travelers.length > 0 && !currentTravelerId) {
      setCurrentTravelerId(travelers[0].id);
      loadTravelerData(travelers[0]);
    }
  }, []);

  const loadTravelerData = (traveler: any) => {
    reset({
      gender: (traveler.gender as "M" | "F") || undefined,
      countryOfResidence: traveler.countryOfResidence || "",
      employmentStatus: (traveler.jobTitle as "EMPLOYED" | "RETIRED" | "STUDENT" | "UNEMPLOYED") || undefined,
    });
  };

  const handleTravelerChange = (travelerId: string) => {
    const traveler = travelers.find((t) => t.id === travelerId);
    if (traveler) {
      setCurrentTravelerId(travelerId);
      loadTravelerData(traveler);
    }
  };

  const onSubmit = useFormSubmit(setFormError, async (data: TDACPersonalDetailsFormData) => {
    if (!currentTravelerId) throw new Error("No traveler selected");

    const success = await saveStep({
      id: currentTravelerId,
      gender: data.gender,
      countryOfResidence: data.countryOfResidence,
      jobTitle: data.employmentStatus, // Store employment status in jobTitle field
    });
    if (!success) throw new Error(error || "Failed to save personal details");

    const currentIndex = travelers.findIndex((t) => t.id === currentTravelerId);
    if (currentIndex < travelers.length - 1) {
      handleTravelerChange(travelers[currentIndex + 1].id);
    } else {
      onNext();
    }
  });

  const currentTraveler = travelers.find((t) => t.id === currentTravelerId);

  return (
    <div>
      <div className="mb-8">
        {currentTraveler && (
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
            {currentTraveler.firstName} {currentTraveler.lastName}
          </h1>
        )}
        <p className="text-gray-600">&mdash; Personal details</p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">{error}</div>
      )}

      <TravelerAccordion
        travelers={travelers}
        activeTravelerId={currentTravelerId}
        onTravelerChange={handleTravelerChange}
        renderContent={() => (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Gender */}
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  label="Gender"
                  options={[
                    { value: "M", label: "Male" },
                    { value: "F", label: "Female" },
                  ]}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  layout="vertical"
                  required
                  error={errors.gender?.message}
                />
              )}
            />

            {/* Country of Residence */}
            <Controller
              name="countryOfResidence"
              control={control}
              render={({ field }) => (
                <CountrySelect
                  label="Country of residence"
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  valueType="name"
                  required
                  error={errors.countryOfResidence?.message}
                  helperText="Select the country where you live permanently, not temporarily."
                />
              )}
            />

            {/* Employment Status */}
            <Controller
              name="employmentStatus"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  label="Employment status"
                  options={[
                    { value: "EMPLOYED", label: "Employed" },
                    { value: "RETIRED", label: "Retired" },
                    { value: "STUDENT", label: "Student" },
                    { value: "UNEMPLOYED", label: "Unemployed" },
                  ]}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  layout="vertical"
                  required
                  error={errors.employmentStatus?.message}
                />
              )}
            />

            <div className="flex justify-between pt-6">
              <Button type="button" variant="outline" onClick={onBack}>Back</Button>
              <Button type="submit" disabled={isLoading} className="min-w-[200px]">
                {isLoading ? "Saving..." : "Save & Continue"}
              </Button>
            </div>
          </form>
        )}
      />
    </div>
  );
}
