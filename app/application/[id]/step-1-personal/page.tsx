"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  step1PersonalSchema,
  type Step1PersonalFormData,
} from "@/app/lib/validation/application";
import { useTravelers } from "@/app/lib/store/postPaymentStore";
import { usePostPaymentApplication } from "@/app/lib/hooks/usePostPaymentApplication";
import { useFormSubmit } from "@/app/lib/hooks/useFormSubmit";
import Input from "@/app/components/ui/Input";
import Select from "@/app/components/ui/Select";
import Button from "@/app/components/ui/Button";
import TravelerAccordion from "@/app/components/application/TravelerAccordion";
import CountrySelect from "@/app/components/ui/CountrySelect";
import FileUpload from "@/app/components/ui/FileUpload";

interface Traveler {
  id: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  aliases?: string[];
  gender?: string;
  birthDay?: number;
  birthMonth?: number;
  birthYear?: number;
  cityOfBirth?: string;
  countryOfBirth?: string;
  maritalStatus?: string;
  email?: string;
  fatherFamilyName?: string;
  fatherFirstName?: string;
  motherFamilyName?: string;
  motherFirstName?: string;
  photoUrl?: string;
}

export default function Step1PersonalPage({
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
    formState: { errors },
  } = useForm<Step1PersonalFormData>({
    resolver: zodResolver(step1PersonalSchema),
  });

  // Initialize with first traveler on mount only
  useEffect(() => {
    if (travelers.length > 0 && !currentTravelerId) {
      setCurrentTravelerId(travelers[0].id);
      loadTravelerData(travelers[0]);
    }
  }, []);

  const loadTravelerData = (traveler: Traveler) => {
    reset({
      firstName: traveler.firstName || "",
      middleName: traveler.middleName || "",
      lastName: traveler.lastName || "",
      aliases: traveler.aliases || [],
      gender: traveler.gender as "M" | "F" | "X",
      birthDay: traveler.birthDay || 1,
      birthMonth: traveler.birthMonth || 1,
      birthYear: traveler.birthYear || 2000,
      cityOfBirth: traveler.cityOfBirth || "",
      countryOfBirth: traveler.countryOfBirth || "",
      maritalStatus: traveler.maritalStatus as any,
      email: traveler.email || "",
      fatherFamilyName: traveler.fatherFamilyName || "",
      fatherFirstName: traveler.fatherFirstName || "",
      motherFamilyName: traveler.motherFamilyName || "",
      motherFirstName: traveler.motherFirstName || "",
    });
  };

  const handleTravelerChange = (travelerId: string) => {
    const traveler = travelers.find((t) => t.id === travelerId);
    if (traveler) {
      setCurrentTravelerId(travelerId);
      loadTravelerData(traveler);
    }
  };

  const handlePhotoUpload = async (url: string) => {
    if (!currentTravelerId) return;
    await saveStep({ id: currentTravelerId, photoUrl: url }, undefined);
  };

  const onSubmit = useFormSubmit(
    setFormError,
    async (data: Step1PersonalFormData) => {
      if (!currentTravelerId) throw new Error("No traveler selected");
      const travelerData = {
        id: currentTravelerId,
        ...data,
      };

      const success = await saveStep(travelerData, undefined);
      if (!success)
        throw new Error(error || "Failed to save personal information");

      // Move to next traveler or next step
      const currentIndex = travelers.findIndex(
        (t) => t.id === currentTravelerId
      );

      if (currentIndex < travelers.length - 1) {
        // Switch to next traveler
        const nextTravelerId = travelers[currentIndex + 1].id;
        handleTravelerChange(nextTravelerId);
      } else {
        // All travelers done, move to next step
        router.push(`/application/${params.id}/step-2-passport`);
      }
    }
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Personal Information
        </h1>
        <p className="text-gray-600">
          Please provide accurate personal details as they appear on your
          passport.
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
            {/* Personal Information Section */}
            <section className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  placeholder="As shown on passport"
                  error={errors.firstName?.message}
                  required
                  {...register("firstName")}
                />

                <Input
                  label="Last Name"
                  placeholder="As shown on passport"
                  error={errors.lastName?.message}
                  required
                  {...register("lastName")}
                />
              </div>

              <Input
                label="Middle Name"
                error={errors.middleName?.message}
                {...register("middleName")}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Select
                  label="Gender"
                  error={errors.gender?.message}
                  required
                  {...register("gender")}
                >
                  <option value="">Select gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  <option value="X">Other</option>
                </Select>

                <Input
                  label="Day of Birth"
                  type="number"
                  min={1}
                  max={31}
                  error={errors.birthDay?.message}
                  required
                  {...register("birthDay", { valueAsNumber: true })}
                />

                <Input
                  label="Month of Birth"
                  type="number"
                  min={1}
                  max={12}
                  error={errors.birthMonth?.message}
                  required
                  {...register("birthMonth", { valueAsNumber: true })}
                />
              </div>

              <Input
                label="Year of Birth"
                type="number"
                min={1900}
                max={new Date().getFullYear()}
                error={errors.birthYear?.message}
                required
                {...register("birthYear", { valueAsNumber: true })}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="City of Birth"
                  error={errors.cityOfBirth?.message}
                  required
                  {...register("cityOfBirth")}
                />

                <Controller
                  name="countryOfBirth"
                  control={control}
                  render={({ field }) => (
                    <CountrySelect
                      label="Country of Birth"
                      error={errors.countryOfBirth?.message}
                      required
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      valueType="name"
                    />
                  )}
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
                error={errors.email?.message}
                required
                {...register("email")}
              />
            </section>

            {/* Personal Photo Upload Section */}
            <section className="space-y-4 pt-6 border-t border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Personal Photo
              </h2>
              <p className="text-sm text-gray-600">
                Upload a recent passport-style photo of yourself.
              </p>

              <FileUpload
                label="Personal Photo"
                uploadType="photo"
                applicationId={params.id}
                travelerId={currentTravelerId}
                currentFileUrl={
                  travelers.find((t) => t.id === currentTravelerId)?.photoUrl
                }
                onUploadComplete={handlePhotoUpload}
                required
              />
            </section>

            {/* Parents Information Section */}
            <section className="space-y-4 pt-6 border-t border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Parents Information
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Father's First Name"
                    error={errors.fatherFirstName?.message}
                    {...register("fatherFirstName")}
                  />

                  <Input
                    label="Father's Family Name"
                    error={errors.fatherFamilyName?.message}
                    {...register("fatherFamilyName")}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Mother's First Name"
                    error={errors.motherFirstName?.message}
                    {...register("motherFirstName")}
                  />

                  <Input
                    label="Mother's Family Name"
                    error={errors.motherFamilyName?.message}
                    {...register("motherFamilyName")}
                  />
                </div>
              </div>
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
