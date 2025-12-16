"use client";

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTravelers } from "@/app/lib/store/postPaymentStore";
import { usePostPaymentApplication } from "@/app/lib/hooks/usePostPaymentApplication";
import { useFormSubmit } from "@/app/lib/hooks/useFormSubmit";
import Button from "@/app/components/ui/Button";
import TravelerAccordion from "@/app/components/application/TravelerAccordion";
import RadioGroup from "@/app/components/ui/RadioGroup";

// UK ETA has only 2 eligibility questions
const uketaEligibilitySchema = z.object({
  eligibilityQ1: z.boolean(),
  eligibilityQ2: z.boolean(),
});

type UKETAEligibilityFormData = z.infer<typeof uketaEligibilitySchema>;

const ELIGIBILITY_QUESTIONS = [
  { id: "eligibilityQ1", text: "Have you been convicted of a criminal offense in any country in the last 12 months?" },
  { id: "eligibilityQ2", text: "Have you previously been refused entry to the United Kingdom, or have you been deported or removed from the UK?" },
];

interface UKETAEligibilityStepProps {
  applicationId: string;
  onNext: () => void;
  onBack: () => void;
}

export default function UKETAEligibilityStep({ applicationId, onNext, onBack }: UKETAEligibilityStepProps) {
  const [currentTravelerId, setCurrentTravelerId] = useState<string>("");
  const travelers = useTravelers();
  const { saveStep, isLoading, error } = usePostPaymentApplication();

  const { control, handleSubmit, reset, setError: setFormError } = useForm<UKETAEligibilityFormData>({
    resolver: zodResolver(uketaEligibilitySchema),
  });

  useEffect(() => {
    if (travelers.length > 0 && !currentTravelerId) {
      setCurrentTravelerId(travelers[0].id);
      loadTravelerData(travelers[0]);
    }
  }, []);

  const loadTravelerData = (traveler: any) => {
    const answers = traveler.eligibilityAnswers || {};
    reset({
      eligibilityQ1: answers.q1 || false,
      eligibilityQ2: answers.q2 || false,
    });
  };

  const handleTravelerChange = (travelerId: string) => {
    const traveler = travelers.find((t) => t.id === travelerId);
    if (traveler) {
      setCurrentTravelerId(travelerId);
      loadTravelerData(traveler);
    }
  };

  const onSubmit = useFormSubmit(setFormError, async (data: UKETAEligibilityFormData) => {
    if (!currentTravelerId) throw new Error("No traveler selected");

    // Save answers as JSON
    const eligibilityAnswers = {
      q1: data.eligibilityQ1,
      q2: data.eligibilityQ2,
    };

    const success = await saveStep({ id: currentTravelerId, eligibilityAnswers });
    if (!success) throw new Error(error || "Failed to save eligibility information");

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
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Suitability Questions</h1>
        <p className="text-gray-600">Please answer all questions truthfully. These are required by UK Immigration.</p>
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
            <section className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900">Suitability Questions</h2>

              {ELIGIBILITY_QUESTIONS.map((question, index) => (
                <div key={question.id} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <Controller
                        name={question.id as any}
                        control={control}
                        render={({ field }) => (
                          <RadioGroup
                            label={question.text}
                            options={[
                              { value: "false", label: "No" },
                              { value: "true", label: "Yes" },
                            ]}
                            value={field.value ? "true" : "false"}
                            onChange={(val) => field.onChange(val === "true")}
                            onBlur={field.onBlur}
                            layout="horizontal"
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
              ))}
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
