"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  step6EligibilitySchema,
  type Step6EligibilityFormData,
} from "@/app/lib/validation/application";
import { useTravelers } from "@/app/lib/store/postPaymentStore";
import { usePostPaymentApplication } from "@/app/lib/hooks/usePostPaymentApplication";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import TravelerAccordion from "@/app/components/application/TravelerAccordion";

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
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const params = use(paramsPromise);
  const [currentTravelerId, setCurrentTravelerId] = useState<string>("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const travelers = useTravelers();
  const { updateTravelerEligibility, updateTravelerSocialMedia, isLoading, error } =
    usePostPaymentApplication();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Step6EligibilityFormData>({
    resolver: zodResolver(step6EligibilitySchema),
  });

  useEffect(() => {
    if (travelers.length > 0 && !currentTravelerId) {
      setCurrentTravelerId(travelers[0].id);
      loadTravelerData(travelers[0]);
    }
  }, [travelers]);

  const loadTravelerData = (traveler: Traveler) => {
    // Eligibility questions
    setValue("eligibilityQ1", traveler.eligibilityQ1 || false);
    setValue("eligibilityQ2", traveler.eligibilityQ2 || false);
    setValue("eligibilityQ3", traveler.eligibilityQ3 || false);
    setValue("eligibilityQ4", traveler.eligibilityQ4 || false);
    setValue("eligibilityQ5", traveler.eligibilityQ5 || false);
    setValue("eligibilityQ6", traveler.eligibilityQ6 || false);
    setValue("eligibilityQ7", traveler.eligibilityQ7 || false);
    setValue("eligibilityQ8", traveler.eligibilityQ8 || false);
    setValue("eligibilityQ9", traveler.eligibilityQ9 || false);

    // Social media
    setSelectedPlatforms(traveler.socialMediaPlatforms || []);
    setValue("socialMediaPlatforms", traveler.socialMediaPlatforms || []);
    setValue("socialMediaHandles", traveler.socialMediaHandles || {});
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

  const onSubmit = async (data: Step6EligibilityFormData) => {
    if (!currentTravelerId) return;

    // Split into eligibility and social media data
    const {
      eligibilityQ1,
      eligibilityQ2,
      eligibilityQ3,
      eligibilityQ4,
      eligibilityQ5,
      eligibilityQ6,
      eligibilityQ7,
      eligibilityQ8,
      eligibilityQ9,
      socialMediaPlatforms,
      socialMediaHandles,
    } = data;

    const eligibilityData = {
      eligibilityQ1,
      eligibilityQ2,
      eligibilityQ3,
      eligibilityQ4,
      eligibilityQ5,
      eligibilityQ6,
      eligibilityQ7,
      eligibilityQ8,
      eligibilityQ9,
    };

    const socialMediaData = {
      socialMediaPlatforms,
      socialMediaHandles,
    };

    // Update eligibility
    const eligibilitySuccess = await updateTravelerEligibility(
      currentTravelerId,
      eligibilityData
    );
    if (!eligibilitySuccess) return;

    // Update social media
    const socialSuccess = await updateTravelerSocialMedia(
      currentTravelerId,
      socialMediaData
    );
    if (!socialSuccess) return;

    // Move to next traveler or next step
    const currentIndex = travelers.findIndex((t) => t.id === currentTravelerId);
    if (currentIndex < travelers.length - 1) {
      const nextTraveler = travelers[currentIndex + 1];
      setCurrentTravelerId(nextTraveler.id);
      loadTravelerData(nextTraveler);
    } else {
      router.push(`/application/${params.id}/step-7-review`);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Eligibility & Security Questions
        </h1>
        <p className="text-gray-600">
          Please answer all questions truthfully. These are required by U.S. Customs.
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
            {/* Eligibility Questions Section */}
            <section className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900">Security Questions</h2>
              <p className="text-sm text-gray-600">
                For most travelers, the answer to all questions is <strong>No</strong>.
              </p>

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
                      <p className="text-sm font-medium text-gray-900 mb-3">
                        {question.text}
                      </p>
                      <div className="flex space-x-6">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            value="false"
                            {...register(question.id as any, {
                              setValueAs: (v) => v === "true",
                            })}
                            className="mr-2"
                          />
                          No
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            value="true"
                            {...register(question.id as any, {
                              setValueAs: (v) => v === "true",
                            })}
                            className="mr-2"
                          />
                          Yes
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* Social Media Section */}
            <section className="space-y-4 pt-6 border-t border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Social Media</h2>

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
