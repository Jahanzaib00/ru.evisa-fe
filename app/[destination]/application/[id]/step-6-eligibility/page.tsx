"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  step6EligibilitySchema,
  type Step6EligibilityFormData,
} from "@/app/lib/validation/application";
import { useTravelers } from "@/app/lib/store/postPaymentStore";
import { usePostPaymentApplication } from "@/app/lib/hooks/usePostPaymentApplication";
import { useFormSubmit } from "@/app/lib/hooks/useFormSubmit";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import TravelerAccordion from "@/app/components/application/TravelerAccordion";
import RadioGroup from "@/app/components/ui/RadioGroup";

interface Traveler {
  id: string;
  firstName: string;
  lastName: string;
  eligibilityQ1?: boolean;
  eligibilityQ2?: boolean;
  eligibilityQ3?: boolean;
  eligibilityQ4?: boolean;
  eligibilityQ5?: boolean;
  eligibilityQ6?: boolean;
  eligibilityQ7?: boolean;
  eligibilityQ8?: boolean;
  eligibilityQ9?: boolean;
  socialMediaPlatforms?: string[];
  socialMediaHandles?: Record<string, string>;
}

const ELIGIBILITY_QUESTIONS = [
  {
    id: "eligibilityQ1",
    text: "Do you have a communicable disease of public health significance?",
  },
  {
    id: "eligibilityQ2",
    text: "Have you ever been arrested or convicted for a crime involving moral turpitude?",
  },
  {
    id: "eligibilityQ3",
    text: "Have you ever violated any law related to possessing, using, or distributing illegal drugs?",
  },
  {
    id: "eligibilityQ4",
    text: "Have you ever engaged in or do you seek to engage in terrorist activities, espionage, sabotage, or genocide?",
  },
  {
    id: "eligibilityQ5",
    text: "Have you ever committed fraud or misrepresented yourself or others to obtain a visa or entry into the U.S.?",
  },
  {
    id: "eligibilityQ6",
    text: "Have you ever worked in the U.S. without authorization?",
  },
  {
    id: "eligibilityQ7",
    text: "Have you ever been refused a U.S. visa or been refused admission to the U.S., or withdrawn your application for admission?",
  },
  {
    id: "eligibilityQ8",
    text: "Have you ever stayed in the U.S. longer than the admission period granted by U.S. immigration?",
  },
  {
    id: "eligibilityQ9",
    text: "Have you traveled to, or been present in Iran, Iraq, Libya, North Korea, Somalia, Sudan, Syria, or Yemen on or after March 1, 2011?",
  },
];

const SOCIAL_MEDIA_PLATFORMS = [
  "Facebook",
  "Instagram",
  "Twitter/X",
  "LinkedIn",
  "TikTok",
  "YouTube",
  "WhatsApp",
  "WeChat",
  "Other",
];

export default function Step6EligibilityPage({
  params: paramsPromise,
}: {
  params: Promise<{ destination: string; id: string }>;
}) {
  const router = useRouter();
  const params = use(paramsPromise);
  const [currentTravelerId, setCurrentTravelerId] = useState<string>("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const travelers = useTravelers();
  const { saveStep, isLoading, error } = usePostPaymentApplication();

  const {
    register,
    control,
    handleSubmit,
    reset,
    setError: setFormError,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Step6EligibilityFormData>({
    resolver: zodResolver(step6EligibilitySchema),
  });

  // Log errors to see what's failing
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      console.log("❌ FORM VALIDATION ERRORS:", errors);
    }
  }, [errors]);

  // Initialize with first traveler on mount only
  useEffect(() => {
    if (travelers.length > 0 && !currentTravelerId) {
      setCurrentTravelerId(travelers[0].id);
      loadTravelerData(travelers[0]);
    }
  }, []);

  const loadTravelerData = (traveler: Traveler) => {
    // Update selected platforms state
    setSelectedPlatforms(traveler.socialMediaPlatforms || []);

    // Reset form with all data
    reset({
      eligibilityQ1: traveler.eligibilityQ1 || false,
      eligibilityQ2: traveler.eligibilityQ2 || false,
      eligibilityQ3: traveler.eligibilityQ3 || false,
      eligibilityQ4: traveler.eligibilityQ4 || false,
      eligibilityQ5: traveler.eligibilityQ5 || false,
      eligibilityQ6: traveler.eligibilityQ6 || false,
      eligibilityQ7: traveler.eligibilityQ7 || false,
      eligibilityQ8: traveler.eligibilityQ8 || false,
      eligibilityQ9: traveler.eligibilityQ9 || false,
      socialMediaPlatforms: traveler.socialMediaPlatforms || [],
      socialMediaHandles: traveler.socialMediaHandles || {},
    });
  };

  const handleTravelerChange = (travelerId: string) => {
    const traveler = travelers.find((t) => t.id === travelerId);
    if (traveler) {
      setCurrentTravelerId(travelerId);
      loadTravelerData(traveler);
    }
  };

  const handlePlatformToggle = (platform: string) => {
    const newPlatforms = selectedPlatforms.includes(platform)
      ? selectedPlatforms.filter((p) => p !== platform)
      : [...selectedPlatforms, platform];

    setSelectedPlatforms(newPlatforms);
    setValue("socialMediaPlatforms", newPlatforms);
  };

  const onSubmit = useFormSubmit(
    setFormError,
    async (data: Step6EligibilityFormData) => {
      console.log("💾 SUBMITTING FORM DATA:", data);

      if (!currentTravelerId) throw new Error("No traveler selected");

      const travelerData = {
        id: currentTravelerId,
        ...data,
      };

      console.log("📤 SENDING TO BACKEND:", travelerData);

      // Save all data in one call
      const success = await saveStep(travelerData);
      if (!success)
        throw new Error(
          error || "Failed to save eligibility and social media information"
        );

      // Move to next traveler or next step
      const currentIndex = travelers.findIndex(
        (t) => t.id === currentTravelerId
      );
      if (currentIndex < travelers.length - 1) {
        // Switch to next traveler
        handleTravelerChange(travelers[currentIndex + 1].id);
      } else {
        // All travelers done, move to next step
        router.push(`/${params.destination}/application/${params.id}/step-7-review`);
      }
    }
  );

  // Add handler to log when form submit is attempted
  const handleFormSubmit = (e: React.FormEvent) => {
    console.log("🔘 FORM SUBMIT CLICKED");
    handleSubmit(onSubmit)(e);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Eligibility & Security Questions
        </h1>
        <p className="text-gray-600">
          Please answer all questions truthfully. These are required by U.S.
          Customs.
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
          <form onSubmit={handleFormSubmit} className="space-y-8">
            {/* Eligibility Questions Section */}
            <section className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Security Questions
              </h2>

              {ELIGIBILITY_QUESTIONS.map((question, index) => (
                <div
                  key={question.id}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4"
                >
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

            {/* Social Media Section */}
            <section className="space-y-4 pt-6 border-t border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Social Media
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select platforms you use:
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {SOCIAL_MEDIA_PLATFORMS.map((platform) => (
                    <label
                      key={platform}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedPlatforms.includes(platform)}
                        onChange={() => handlePlatformToggle(platform)}
                        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <span className="text-sm text-gray-700">{platform}</span>
                    </label>
                  ))}
                </div>
              </div>

              {selectedPlatforms.length > 0 && (
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Enter your handles/usernames:
                  </label>
                  {selectedPlatforms.map((platform) => (
                    <Input
                      key={platform}
                      label={`${platform} Handle`}
                      placeholder={`Your ${platform} username`}
                      {...register(`socialMediaHandles.${platform}` as any)}
                    />
                  ))}
                </div>
              )}
            </section>

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
