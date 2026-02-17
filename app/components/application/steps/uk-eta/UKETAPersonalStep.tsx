"use client";

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTravelers } from "@/app/lib/store/postPaymentStore";
import { usePostPaymentApplication } from "@/app/lib/hooks/usePostPaymentApplication";
import { useFormSubmit } from "@/app/lib/hooks/useFormSubmit";
import Input from "@/app/components/ui/Input";
import Select from "@/app/components/ui/Select";
import Button from "@/app/components/ui/Button";
import TravelerAccordion from "@/app/components/application/TravelerAccordion";
import CountrySelect from "@/app/components/ui/CountrySelect";

// Validation schema - UK ETA is simpler than ESTA
const uketaPersonalSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  gender: z.enum(["M", "F", "X"]),
  birthDay: z.number().min(1).max(31),
  birthMonth: z.number().min(1).max(12),
  birthYear: z.number().min(1900),
  email: z.string().email("Invalid email"),
});

type UKETAPersonalFormData = z.infer<typeof uketaPersonalSchema>;

interface UKETAPersonalStepProps {
  applicationId: string;
  onNext: () => void;
  onBack: () => void;
}

export default function UKETAPersonalStep({ applicationId, onNext, onBack }: UKETAPersonalStepProps) {
  const [currentTravelerId, setCurrentTravelerId] = useState<string>("");
  const travelers = useTravelers();
  const { saveStep, isLoading, error } = usePostPaymentApplication();

  const { register, control, handleSubmit, reset, setError: setFormError, formState: { errors } } = useForm<UKETAPersonalFormData>({
    resolver: zodResolver(uketaPersonalSchema),
  });

  useEffect(() => {
    if (travelers.length > 0 && !currentTravelerId) {
      setCurrentTravelerId(travelers[0].id);
      loadTravelerData(travelers[0]);
    }
  }, []);

  const loadTravelerData = (traveler: any) => {
    reset({
      firstName: traveler.firstName || "",
      lastName: traveler.lastName || "",
      gender: traveler.gender as "M" | "F" | "X",
      birthDay: traveler.birthDay || 1,
      birthMonth: traveler.birthMonth || 1,
      birthYear: traveler.birthYear || 2000,
      email: traveler.email || "",
    });
  };

  const handleTravelerChange = (travelerId: string) => {
    const traveler = travelers.find((t) => t.id === travelerId);
    if (traveler) {
      setCurrentTravelerId(travelerId);
      loadTravelerData(traveler);
    }
  };

  const onSubmit = useFormSubmit(setFormError, async (data: UKETAPersonalFormData) => {
    if (!currentTravelerId) throw new Error("No traveler selected");

    const success = await saveStep({ id: currentTravelerId, ...data });
    if (!success) throw new Error(error || "Failed to save personal information");

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
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Personal Information</h1>
        <p className="text-gray-600">Provide your basic personal details as they appear on your passport.</p>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="First Name" placeholder="As shown on passport" error={errors.firstName?.message} required {...register("firstName")} />
                <Input label="Last Name" placeholder="As shown on passport" error={errors.lastName?.message} required {...register("lastName")} />
              </div>

              <Select label="Gender" error={errors.gender?.message} required {...register("gender")}>
                <option value="">Select gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="X">Other</option>
              </Select>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Date of Birth *</label>
                <div className="grid grid-cols-3 gap-4">
                  <Input label="Day" type="number" min={1} max={31} error={errors.birthDay?.message} required {...register("birthDay", { valueAsNumber: true })} />
                  <Input label="Month" type="number" min={1} max={12} error={errors.birthMonth?.message} required {...register("birthMonth", { valueAsNumber: true })} />
                  <Input label="Year" type="number" min={1900} max={new Date().getFullYear()} error={errors.birthYear?.message} required {...register("birthYear", { valueAsNumber: true })} />
                </div>
              </div>

              <Input label="Email Address" type="email" error={errors.email?.message} required {...register("email")} />
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
