"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTravelers } from "@/app/lib/store/postPaymentStore";
import { usePostPaymentApplication } from "@/app/lib/hooks/usePostPaymentApplication";
import { useFormSubmit } from "@/app/lib/hooks/useFormSubmit";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import TravelerAccordion from "@/app/components/application/TravelerAccordion";

// UK ETA only needs current occupation
const uketaEmploymentSchema = z.object({
  jobTitle: z.string().min(1, "Current occupation is required"),
});

type UKETAEmploymentFormData = z.infer<typeof uketaEmploymentSchema>;

interface UKETAEmploymentStepProps {
  applicationId: string;
  onNext: () => void;
  onBack: () => void;
}

export default function UKETAEmploymentStep({ applicationId, onNext, onBack }: UKETAEmploymentStepProps) {
  const [currentTravelerId, setCurrentTravelerId] = useState<string>("");
  const travelers = useTravelers();
  const { saveStep, isLoading, error } = usePostPaymentApplication();

  const { register, handleSubmit, reset, setError: setFormError, formState: { errors } } = useForm<UKETAEmploymentFormData>({
    resolver: zodResolver(uketaEmploymentSchema),
  });

  useEffect(() => {
    if (travelers.length > 0 && !currentTravelerId) {
      setCurrentTravelerId(travelers[0].id);
      loadTravelerData(travelers[0]);
    }
  }, []);

  const loadTravelerData = (traveler: any) => {
    reset({
      jobTitle: traveler.jobTitle || "",
    });
  };

  const handleTravelerChange = (travelerId: string) => {
    const traveler = travelers.find((t) => t.id === travelerId);
    if (traveler) {
      setCurrentTravelerId(travelerId);
      loadTravelerData(traveler);
    }
  };

  const onSubmit = useFormSubmit(setFormError, async (data: UKETAEmploymentFormData) => {
    if (!currentTravelerId) throw new Error("No traveler selected");

    const success = await saveStep({ id: currentTravelerId, ...data });
    if (!success) throw new Error(error || "Failed to save employment information");

    const currentIndex = travelers.findIndex((t) => t.id === currentTravelerId);
    if (currentIndex < travelers.length - 1) {
      handleTravelerChange(travelers[currentIndex + 1].id);
    } else {
      onNext();
    }
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Employment Information</h1>
        <p className="text-gray-600">Tell us about your current occupation.</p>
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
            <section className="space-y-4">
              <Input
                label="Current Occupation"
                placeholder="e.g., Software Engineer, Teacher, Student"
                error={errors.jobTitle?.message}
                required
                {...register("jobTitle")}
              />
              <p className="text-sm text-gray-500">
                Please provide your current occupation or profession. If you are retired or unemployed, please state so.
              </p>
            </section>

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
