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
import FileUpload from "@/app/components/ui/FileUpload";

// Validation schema
const estaPersonalSchema = z.object({
  firstName: z.string().min(1, "Имя обязательно"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Фамилия обязательна"),
  gender: z.enum(["M", "F", "X"]),
  birthDay: z.number().min(1).max(31),
  birthMonth: z.number().min(1).max(12),
  birthYear: z.number().min(1900),
  cityOfBirth: z.string().min(1, "Город рождения обязателен"),
  countryOfBirth: z.string().min(1, "Страна рождения обязательна"),
  maritalStatus: z.enum(["SINGLE", "MARRIED", "DIVORCED", "WIDOWED"]),
  email: z.string().email("Неверный email"),
  fatherFirstName: z.string().optional(),
  fatherFamilyName: z.string().optional(),
  motherFirstName: z.string().optional(),
  motherFamilyName: z.string().optional(),
});

type ESTAPersonalFormData = z.infer<typeof estaPersonalSchema>;

interface ESTAPersonalStepProps {
  applicationId: string;
  onNext: () => void;
  onBack: () => void;
}

export default function ESTAPersonalStep({ applicationId, onNext, onBack }: ESTAPersonalStepProps) {
  const [currentTravelerId, setCurrentTravelerId] = useState<string>("");
  const travelers = useTravelers();
  const { saveStep, isLoading, error } = usePostPaymentApplication();

  const { register, control, handleSubmit, reset, setError: setFormError, formState: { errors } } = useForm<ESTAPersonalFormData>({
    resolver: zodResolver(estaPersonalSchema),
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
      middleName: traveler.middleName || "",
      lastName: traveler.lastName || "",
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
    await saveStep({ id: currentTravelerId, photoUrl: url });
  };

  const onSubmit = useFormSubmit(setFormError, async (data: ESTAPersonalFormData) => {
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
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Личная информация</h1>
        <p className="text-gray-600">Укажите точные личные данные, как они указаны в вашем паспорте.</p>
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
                <Input label="Имя" placeholder="Как указано в паспорте" error={errors.firstName?.message} required {...register("firstName")} />
                <Input label="Фамилия" placeholder="Как указано в паспорте" error={errors.lastName?.message} required {...register("lastName")} />
              </div>

              <Input label="Отчество" error={errors.middleName?.message} {...register("middleName")} />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Select label="Пол" error={errors.gender?.message} required {...register("gender")}>
                  <option value="">Выберите пол</option>
                  <option value="M">Мужской</option>
                  <option value="F">Женский</option>
                  <option value="X">Другой</option>
                </Select>

                <Input label="День рождения" type="number" min={1} max={31} error={errors.birthDay?.message} required {...register("birthDay", { valueAsNumber: true })} />
                <Input label="Месяц рождения" type="number" min={1} max={12} error={errors.birthMonth?.message} required {...register("birthMonth", { valueAsNumber: true })} />
              </div>

              <Input label="Год рождения" type="number" min={1900} max={new Date().getFullYear()} error={errors.birthYear?.message} required {...register("birthYear", { valueAsNumber: true })} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Город рождения" error={errors.cityOfBirth?.message} required {...register("cityOfBirth")} />
                <Controller name="countryOfBirth" control={control} render={({ field }) => (
                  <CountrySelect label="Страна рождения" error={errors.countryOfBirth?.message} required value={field.value} onChange={field.onChange} onBlur={field.onBlur} valueType="name" />
                )} />
              </div>

              <Select label="Семейное положение" error={errors.maritalStatus?.message} required {...register("maritalStatus")}>
                <option value="">Выберите статус</option>
                <option value="SINGLE">Не женат/не замужем</option>
                <option value="MARRIED">В браке</option>
                <option value="DIVORCED">В разводе</option>
                <option value="WIDOWED">Вдовец/вдова</option>
              </Select>

              <Input label="Электронная почта" type="email" error={errors.email?.message} required {...register("email")} />
            </section>

            <section className="space-y-4 pt-6 border-t border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Личное фото</h2>
              <p className="text-sm text-gray-600">Загрузите недавнее фото паспортного формата.</p>
              <FileUpload
                label="Личное фото"
                uploadType="photo"
                applicationId={applicationId}
                travelerId={currentTravelerId}
                currentFileUrl={travelers.find((t) => t.id === currentTravelerId)?.photoUrl}
                onUploadComplete={handlePhotoUpload}
                required
              />
            </section>

            <section className="space-y-4 pt-6 border-t border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Данные родителей</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Имя отца" error={errors.fatherFirstName?.message} {...register("fatherFirstName")} />
                <Input label="Фамилия отца" error={errors.fatherFamilyName?.message} {...register("fatherFamilyName")} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Имя матери" error={errors.motherFirstName?.message} {...register("motherFirstName")} />
                <Input label="Фамилия матери" error={errors.motherFamilyName?.message} {...register("motherFamilyName")} />
              </div>
            </section>

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
