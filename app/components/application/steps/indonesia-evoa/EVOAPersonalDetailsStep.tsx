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

const evoaPersonalDetailsSchema = z.object({
  gender: z.enum(["M", "F"], { message: "Укажите ваш пол" }),
  countryOfResidence: z.string().min(1, "Страна проживания обязательна"),
  employmentStatus: z.enum(["EMPLOYED", "RETIRED", "STUDENT", "UNEMPLOYED"], {
    message: "Укажите статус занятости",
  }),
});

type EVOAPersonalDetailsFormData = z.infer<typeof evoaPersonalDetailsSchema>;

interface EVOAPersonalDetailsStepProps {
  applicationId: string;
  onNext: () => void;
  onBack: () => void;
}

export default function EVOAPersonalDetailsStep({ onNext, onBack }: EVOAPersonalDetailsStepProps) {
  const [currentTravelerId, setCurrentTravelerId] = useState<string>("");
  const travelers = useTravelers();
  const { saveStep, isLoading, error } = usePostPaymentApplication();

  const { handleSubmit, setError: setFormError, control, reset, formState: { errors } } = useForm<EVOAPersonalDetailsFormData>({
    resolver: zodResolver(evoaPersonalDetailsSchema),
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

  const onSubmit = useFormSubmit(setFormError, async (data: EVOAPersonalDetailsFormData) => {
    if (!currentTravelerId) throw new Error("No traveler selected");

    const success = await saveStep({
      id: currentTravelerId,
      gender: data.gender,
      countryOfResidence: data.countryOfResidence,
      jobTitle: data.employmentStatus,
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
        <p className="text-gray-600">&mdash; Личные данные</p>
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
                  label="Пол"
                  options={[
                    { value: "M", label: "Мужской" },
                    { value: "F", label: "Женский" },
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
                  label="Страна проживания"
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  valueType="name"
                  required
                  error={errors.countryOfResidence?.message}
                  helperText="Укажите страну, в которой вы постоянно проживаете."
                />
              )}
            />

            {/* Employment Status */}
            <Controller
              name="employmentStatus"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  label="Статус занятости"
                  options={[
                    { value: "EMPLOYED", label: "Работаю" },
                    { value: "RETIRED", label: "На пенсии" },
                    { value: "STUDENT", label: "Студент" },
                    { value: "UNEMPLOYED", label: "Безработный" },
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
              <Button type="button" variant="outline" onClick={onBack}>Назад</Button>
              <Button type="submit" disabled={isLoading} className="min-w-[200px]">
                {isLoading ? "Сохранение..." : "Сохранить и продолжить"}
              </Button>
            </div>
          </form>
        )}
      />
    </div>
  );
}
