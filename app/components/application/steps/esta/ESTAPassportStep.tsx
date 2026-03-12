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
import FileUpload from "@/app/components/ui/FileUpload";
import RadioGroup from "@/app/components/ui/RadioGroup";

const estaPassportSchema = z.object({
  passportNumber: z.string().min(1, "Номер паспорта обязателен"),
  passportType: z.string().min(1, "Тип паспорта обязателен"),
  passportIssueDay: z.number().min(1).max(31),
  passportIssueMonth: z.number().min(1).max(12),
  passportIssueYear: z.number().min(1900),
  passportExpiryDay: z.number().min(1).max(31),
  passportExpiryMonth: z.number().min(1).max(12),
  passportExpiryYear: z.number().min(1900),
  nationalityOnPassport: z.string().min(1, "Гражданство обязательно"),
  isEPassport: z.boolean(),
  nationalIdNumber: z.string().optional(),
  countryOfResidence: z.string().optional(),
});

type ESTAPassportFormData = z.infer<typeof estaPassportSchema>;

interface ESTAPassportStepProps {
  applicationId: string;
  onNext: () => void;
  onBack: () => void;
}

export default function ESTAPassportStep({ applicationId, onNext, onBack }: ESTAPassportStepProps) {
  const [currentTravelerId, setCurrentTravelerId] = useState<string>("");
  const travelers = useTravelers();
  const { saveStep, isLoading, error } = usePostPaymentApplication();

  const { register, handleSubmit, reset, control, setError: setFormError, formState: { errors } } = useForm<ESTAPassportFormData>({
    resolver: zodResolver(estaPassportSchema),
  });

  useEffect(() => {
    if (travelers.length > 0 && !currentTravelerId) {
      setCurrentTravelerId(travelers[0].id);
      loadTravelerData(travelers[0]);
    }
  }, []);

  const loadTravelerData = (traveler: any) => {
    reset({
      passportNumber: traveler.passportNumber || "",
      passportType: traveler.passportType || "REGULAR",
      passportIssueDay: traveler.passportIssueDay || 1,
      passportIssueMonth: traveler.passportIssueMonth || 1,
      passportIssueYear: traveler.passportIssueYear || 2020,
      passportExpiryDay: traveler.passportExpiryDay || 1,
      passportExpiryMonth: traveler.passportExpiryMonth || 1,
      passportExpiryYear: traveler.passportExpiryYear || 2030,
      nationalityOnPassport: traveler.nationalityOnPassport || "",
      isEPassport: traveler.isEPassport || false,
      nationalIdNumber: traveler.nationalIdNumber || "",
      countryOfResidence: traveler.countryOfResidence || "",
    });
  };

  const handleTravelerChange = (travelerId: string) => {
    const traveler = travelers.find((t) => t.id === travelerId);
    if (traveler) {
      setCurrentTravelerId(travelerId);
      loadTravelerData(traveler);
    }
  };

  const handlePassportUpload = async (url: string) => {
    if (!currentTravelerId) return;
    await saveStep({ id: currentTravelerId, passportUrl: url });
  };

  const onSubmit = useFormSubmit(setFormError, async (data: ESTAPassportFormData) => {
    if (!currentTravelerId) throw new Error("No traveler selected");
    
    const success = await saveStep({ id: currentTravelerId, ...data });
    if (!success) throw new Error(error || "Failed to save passport information");

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
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Паспортные данные</h1>
        <p className="text-gray-600">Введите данные паспорта и загрузите необходимые документы.</p>
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
              <Input label="Номер паспорта" error={errors.passportNumber?.message} required {...register("passportNumber")} />

              <Select label="Тип паспорта" error={errors.passportType?.message} required {...register("passportType")}>
                <option value="">Выберите тип</option>
                <option value="REGULAR">Обычный</option>
                <option value="OFFICIAL">Служебный</option>
                <option value="DIPLOMATIC">Дипломатический</option>
                <option value="SERVICE">Служебный</option>
              </Select>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Дата выдачи паспорта</label>
                <div className="grid grid-cols-3 gap-4">
                  <Input label="День" type="number" min={1} max={31} {...register("passportIssueDay", { valueAsNumber: true })} />
                  <Input label="Месяц" type="number" min={1} max={12} {...register("passportIssueMonth", { valueAsNumber: true })} />
                  <Input label="Год" type="number" min={1900} {...register("passportIssueYear", { valueAsNumber: true })} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Срок действия паспорта *</label>
                <div className="grid grid-cols-3 gap-4">
                  <Input label="День" type="number" min={1} max={31} {...register("passportExpiryDay", { valueAsNumber: true })} />
                  <Input label="Месяц" type="number" min={1} max={12} {...register("passportExpiryMonth", { valueAsNumber: true })} />
                  <Input label="Год" type="number" min={1900} {...register("passportExpiryYear", { valueAsNumber: true })} />
                </div>
              </div>

              <Input label="Гражданство по паспорту" error={errors.nationalityOnPassport?.message} required {...register("nationalityOnPassport")} />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Ваш паспорт электронный (с чипом)? *</label>
                <Controller
                  control={control}
                  name="isEPassport"
                  render={({ field }) => (
                    <RadioGroup
                      options={[
                        { value: "true", label: "Да" },
                        { value: "false", label: "Нет" },
                      ]}
                      value={field.value ? "true" : "false"}
                      onChange={(val: string) => {
                        // RadioGroup provides string values; convert to boolean for the form field
                        field.onChange(val === "true");
                      }}
                    />
                  )}
                />
              </div>

              <Input label="Номер национального удостоверения (если есть)" {...register("nationalIdNumber")} />
              <Input label="Страна проживания" {...register("countryOfResidence")} />
            </section>

            <section className="space-y-4 pt-6 border-t border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Загрузка паспорта</h2>
              <FileUpload
                label="Фото паспорта"
                uploadType="passport"
                applicationId={applicationId}
                travelerId={currentTravelerId}
                currentFileUrl={travelers.find((t) => t.id === currentTravelerId)?.passportUrl}
                onUploadComplete={handlePassportUpload}
                required
              />
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
