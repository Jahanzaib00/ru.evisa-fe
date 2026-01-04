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

const estaEligibilitySchema = z.object({
  eligibilityQ1: z.boolean(),
  eligibilityQ2: z.boolean(),
  eligibilityQ3: z.boolean(),
  eligibilityQ4: z.boolean(),
  eligibilityQ5: z.boolean(),
  eligibilityQ6: z.boolean(),
  eligibilityQ7: z.boolean(),
  eligibilityQ8: z.boolean(),
  eligibilityQ9: z.boolean(),
});

type ESTAEligibilityFormData = z.infer<typeof estaEligibilitySchema>;

const ELIGIBILITY_QUESTIONS = [
  { id: "eligibilityQ1", text: "Do you have a communicable disease of public health significance?" },
  { id: "eligibilityQ2", text: "Have you ever been arrested or convicted for a crime involving moral turpitude?" },
  { id: "eligibilityQ3", text: "Have you ever violated any law related to possessing, using, or distributing illegal drugs?" },
  { id: "eligibilityQ4", text: "Have you ever engaged in or do you seek to engage in terrorist activities, espionage, sabotage, or genocide?" },
  { id: "eligibilityQ5", text: "Have you ever committed fraud or misrepresented yourself or others to obtain a visa or entry into the U.S.?" },
  { id: "eligibilityQ6", text: "Have you ever worked in the U.S. without authorization?" },
  { id: "eligibilityQ7", text: "Have you ever been refused a U.S. visa or been refused admission to the U.S., or withdrawn your application for admission?" },
  { id: "eligibilityQ8", text: "Have you ever stayed in the U.S. longer than the admission period granted by U.S. immigration?" },
  { id: "eligibilityQ9", text: "Have you traveled to, or been present in Iran, Iraq, Libya, North Korea, Somalia, Sudan, Syria, or Yemen on or after March 1, 2011?" },
];

interface ESTAEligibilityStepProps {
  applicationId: string;
  onNext: () => void;
  onBack: () => void;
}

export default function ESTAEligibilityStep({ applicationId, onNext, onBack }: ESTAEligibilityStepProps) {
  const [currentTravelerId, setCurrentTravelerId] = useState<string>("");
  const travelers = useTravelers();
  const { saveStep, isLoading, error } = usePostPaymentApplication();

  const { control, handleSubmit, reset, setError: setFormError } = useForm<ESTAEligibilityFormData>({
    resolver: zodResolver(estaEligibilitySchema),
  });

  useEffect(() => {
    if (travelers.length > 0 && !currentTravelerId) {
      setCurrentTravelerId(travelers[0].id);
      loadTravelerData(travelers[0]);
    }
  }, []);

  const loadTravelerData = (traveler: any) => {
    // Backend stores eligibility as JSON object
    const answers = traveler.eligibilityAnswers || {};
    reset({
      eligibilityQ1: answers.q1 || false,
      eligibilityQ2: answers.q2 || false,
      eligibilityQ3: answers.q3 || false,
      eligibilityQ4: answers.q4 || false,
      eligibilityQ5: answers.q5 || false,
      eligibilityQ6: answers.q6 || false,
      eligibilityQ7: answers.q7 || false,
      eligibilityQ8: answers.q8 || false,
      eligibilityQ9: answers.q9 || false,
    });
  };

  const handleTravelerChange = (travelerId: string) => {
    const traveler = travelers.find((t) => t.id === travelerId);
    if (traveler) {
      setCurrentTravelerId(travelerId);
      loadTravelerData(traveler);
    }
  };

  const onSubmit = useFormSubmit(setFormError, async (data: ESTAEligibilityFormData) => {
    if (!currentTravelerId) throw new Error("No traveler selected");

    // Send individual boolean fields (backend expects this format)
    const success = await saveStep({
      id: currentTravelerId,
      eligibilityQ1: data.eligibilityQ1,
      eligibilityQ2: data.eligibilityQ2,
      eligibilityQ3: data.eligibilityQ3,
      eligibilityQ4: data.eligibilityQ4,
      eligibilityQ5: data.eligibilityQ5,
      eligibilityQ6: data.eligibilityQ6,
      eligibilityQ7: data.eligibilityQ7,
      eligibilityQ8: data.eligibilityQ8,
      eligibilityQ9: data.eligibilityQ9,
    });
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
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Eligibility & Security Questions</h1>
        <p className="text-gray-600">Please answer all questions truthfully. These are required by U.S. Customs.</p>
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
              <h2 className="text-lg font-semibold text-gray-900">Security Questions</h2>

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
