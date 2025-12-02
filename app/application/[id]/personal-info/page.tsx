"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  travelerPersonalSchema,
  type TravelerPersonalFormData,
} from "@/app/lib/validations/application";
import { usePostPaymentStore } from "@/app/lib/store/postPaymentStore";
import { usePostPaymentApplication } from "@/app/lib/hooks/usePostPaymentApplication";
import Input from "@/app/components/ui/Input";
import Select from "@/app/components/ui/Select";
import Button from "@/app/components/ui/Button";
import TravelerAccordion from "@/app/components/application/TravelerAccordion";
import CountrySelect from "@/app/components/ui/CountrySelectWrapper";

interface Traveler {
  id: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  gender?: string;
  birthDay?: number;
  birthMonth?: number;
  birthYear?: number;
  cityOfBirth?: string;
  countryOfBirth?: string;
  maritalStatus?: string;
  email?: string;
  aliases?: string[];
}

export default function PersonalInfoPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const params = use(paramsPromise);
  const [currentTravelerId, setCurrentTravelerId] = useState<string>("");
  const { travelers } = usePostPaymentStore();
  const { updateTravelerPersonal, isLoading, error } =
    usePostPaymentApplication();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TravelerPersonalFormData>({
    resolver: zodResolver(travelerPersonalSchema),
  });

  // Set initial traveler on mount
  useEffect(() => {
    if (travelers.length > 0 && !currentTravelerId) {
      setCurrentTravelerId(travelers[0].id);
      loadTravelerData(travelers[0]);
    }
  }, [travelers]);

  const loadTravelerData = (traveler: Traveler) => {
    setValue("firstName", traveler.firstName || "");
    setValue("middleName", traveler.middleName || "");
    setValue("lastName", traveler.lastName || "");
    setValue("aliases", traveler.aliases || []);
    setValue("gender", traveler.gender as "M" | "F" | "X");
    setValue("birthDay", traveler.birthDay || 1);
    setValue("birthMonth", traveler.birthMonth || 1);
    setValue("birthYear", traveler.birthYear || 1990);
    setValue("cityOfBirth", traveler.cityOfBirth || "");
    setValue("countryOfBirth", traveler.countryOfBirth || "");
    setValue(
      "maritalStatus",
      traveler.maritalStatus as "SINGLE" | "MARRIED" | "DIVORCED" | "WIDOWED"
    );
    setValue("email", traveler.email || "");
  };

  const handleTravelerChange = (travelerId: string) => {
    const traveler = travelers.find((t) => t.id === travelerId);
    if (traveler) {
      setCurrentTravelerId(travelerId);
      loadTravelerData(traveler);
    }
  };

  const onSubmit = async (data: TravelerPersonalFormData) => {
    if (!currentTravelerId) return;

    const success = await updateTravelerPersonal(currentTravelerId, data);
    if (success) {
      // Check if there are more travelers
      const currentIndex = travelers.findIndex(
        (t) => t.id === currentTravelerId
      );
      if (currentIndex < travelers.length - 1) {
        // Load next traveler
        const nextTraveler = travelers[currentIndex + 1];
        setCurrentTravelerId(nextTraveler.id);
        loadTravelerData(nextTraveler);
      } else {
        // All travelers done, go to next step
        router.push(`/application/${params.id}/parents`);
      }
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Personal Information
        </h1>
        <p className="text-gray-600">
          Please provide personal details for each traveler.
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
        renderContent={(traveler) => (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="First Name"
                placeholder="As shown on passport"
                error={errors.firstName?.message}
                required
                {...register("firstName")}
              />

              <Input
                label="Middle Name"
                placeholder="Optional"
                error={errors.middleName?.message}
                {...register("middleName")}
              />
            </div>

            <Input
              label="Last Name"
              placeholder="As shown on passport"
              error={errors.lastName?.message}
              required
              {...register("lastName")}
            />

            <Select
              label="Gender"
              error={errors.gender?.message}
              required
              {...register("gender")}
            >
              <option value="">Select gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="X">Unspecified</option>
            </Select>

            <div className="grid grid-cols-3 gap-4">
              <Input
                label="Birth Day"
                type="number"
                min={1}
                max={31}
                placeholder="DD"
                error={errors.birthDay?.message}
                required
                {...register("birthDay", { valueAsNumber: true })}
              />
              <Input
                label="Birth Month"
                type="number"
                min={1}
                max={12}
                placeholder="MM"
                error={errors.birthMonth?.message}
                required
                {...register("birthMonth", { valueAsNumber: true })}
              />
              <Input
                label="Birth Year"
                type="number"
                min={1900}
                max={new Date().getFullYear()}
                placeholder="YYYY"
                error={errors.birthYear?.message}
                required
                {...register("birthYear", { valueAsNumber: true })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="City of Birth"
                placeholder="City"
                error={errors.cityOfBirth?.message}
                required
                {...register("cityOfBirth")}
              />

              <CountrySelect
                label="Country of Birth"
                error={errors.countryOfBirth?.message}
                required
                {...register("countryOfBirth")}
              />
            </div>

            <Select
              label="Marital Status"
              error={errors.maritalStatus?.message}
              required
              {...register("maritalStatus")}
            >
              <option value="">Select status</option>
              <option value="SINGLE">Single</option>
              <option value="MARRIED">Married</option>
              <option value="DIVORCED">Divorced</option>
              <option value="WIDOWED">Widowed</option>
            </Select>

            <Input
              label="Email Address"
              type="email"
              placeholder="traveler@example.com"
              error={errors.email?.message}
              required
              {...register("email")}
            />

            <div className="flex justify-between pt-4">
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
