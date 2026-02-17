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

const uketaPassportSchema = z.object({
  passportNumber: z.string().min(1, "Passport number is required"),
  passportExpiryDay: z.number().min(1).max(31),
  passportExpiryMonth: z.number().min(1).max(12),
  passportExpiryYear: z.number().min(1900),
});

type UKETAPassportFormData = z.infer<typeof uketaPassportSchema>;

interface UKETAPassportStepProps {
  applicationId: string;
  onNext: () => void;
  onBack: () => void;
}

export default function UKETAPassportStep({
  applicationId,
  onNext,
  onBack,
}: UKETAPassportStepProps) {
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
  } = useForm<UKETAPassportFormData>({
    resolver: zodResolver(uketaPassportSchema),
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
      passportExpiryDay: traveler.passportExpiryDay || 1,
      passportExpiryMonth: traveler.passportExpiryMonth || 1,
      passportExpiryYear: traveler.passportExpiryYear || 2030,
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

  const handlePhotoUpload = async (url: string) => {
    if (!currentTravelerId) return;
    await saveStep({ id: currentTravelerId, photoUrl: url });
  };

  const onSubmit = useFormSubmit(
    setFormError,
    async (data: UKETAPassportFormData) => {
      if (!currentTravelerId) throw new Error("No traveler selected");

      const success = await saveStep({ id: currentTravelerId, ...data });
      if (!success)
        throw new Error(error || "Failed to save passport information");

      const currentIndex = travelers.findIndex(
        (t) => t.id === currentTravelerId,
      );
      if (currentIndex < travelers.length - 1) {
        handleTravelerChange(travelers[currentIndex + 1].id);
      } else {
        onNext();
      }
    },
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Passport Information
        </h1>
        <p className="text-gray-600">
          Enter your passport details and upload required documents.
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
            <section className="space-y-4">
              <Input
                label="Passport Number"
                error={errors.passportNumber?.message}
                required
                {...register("passportNumber")}
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Passport Expiry Date *
                </label>
                <div className="grid grid-cols-3 gap-4">
                  <Input
                    label="Day"
                    type="number"
                    min={1}
                    max={31}
                    {...register("passportExpiryDay", { valueAsNumber: true })}
                  />
                  <Input
                    label="Month"
                    type="number"
                    min={1}
                    max={12}
                    {...register("passportExpiryMonth", {
                      valueAsNumber: true,
                    })}
                  />
                  <Input
                    label="Year"
                    type="number"
                    min={1900}
                    {...register("passportExpiryYear", { valueAsNumber: true })}
                  />
                </div>
              </div>
            </section>

            <section className="space-y-4 pt-6 border-t border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Document Uploads
              </h2>
              <p className="text-sm text-gray-600">
                Upload your passport bio page and a recent photo.
              </p>

              <FileUpload
                label="Passport Photo"
                uploadType="passport"
                applicationId={applicationId}
                travelerId={currentTravelerId}
                currentFileUrl={
                  travelers.find((t) => t.id === currentTravelerId)?.passportUrl
                }
                onUploadComplete={handlePassportUpload}
                required
              />

              <FileUpload
                label="Personal Photo"
                uploadType="photo"
                applicationId={applicationId}
                travelerId={currentTravelerId}
                currentFileUrl={
                  travelers.find((t) => t.id === currentTravelerId)?.photoUrl
                }
                onUploadComplete={handlePhotoUpload}
                required
              />
            </section>

            <div className="flex justify-between pt-6">
              <Button type="button" variant="outline" onClick={onBack}>
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
