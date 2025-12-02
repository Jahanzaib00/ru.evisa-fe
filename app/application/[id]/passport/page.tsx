"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  travelerPassportSchema,
  type TravelerPassportFormData,
} from "@/app/lib/validations/application";
import { usePostPaymentStore } from "@/app/lib/store/postPaymentStore";
import { usePostPaymentApplication } from "@/app/lib/hooks/usePostPaymentApplication";
import Input from "@/app/components/ui/Input";
import Select from "@/app/components/ui/Select";
import Button from "@/app/components/ui/Button";
import Checkbox from "@/app/components/ui/Checkbox";
import TravelerAccordion from "@/app/components/application/TravelerAccordion";
import CountrySelect from "@/app/components/ui/CountrySelectWrapper";

interface Traveler {
  id: string;
  firstName: string;
  lastName: string;
  passportNumber?: string;
  passportType?: string;
  passportIssueDay?: number;
  passportIssueMonth?: number;
  passportIssueYear?: number;
  passportExpiryDay?: number;
  passportExpiryMonth?: number;
  passportExpiryYear?: number;
  nationalityOnPassport?: string;
  isEPassport?: boolean;
  nationalIdNumber?: string;
  countryOfResidence?: string;
}

export default function PassportPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const params = use(paramsPromise);
  const [currentTravelerId, setCurrentTravelerId] = useState<string>("");
  const { travelers } = usePostPaymentStore();
  const { updateTravelerPassport, isLoading, error } =
    usePostPaymentApplication();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TravelerPassportFormData>({
    resolver: zodResolver(travelerPassportSchema),
  });

  // Set initial traveler on mount
  useEffect(() => {
    if (travelers.length > 0 && !currentTravelerId) {
      setCurrentTravelerId(travelers[0].id);
      loadTravelerData(travelers[0]);
    }
  }, [travelers]);

  const loadTravelerData = (traveler: Traveler) => {
    setValue("passportNumber", traveler.passportNumber || "");
    setValue(
      "passportType",
      traveler.passportType as "REGULAR" | "DIPLOMATIC" | "SERVICE" | "OFFICIAL"
    );
    setValue("passportIssueDay", traveler.passportIssueDay || 1);
    setValue("passportIssueMonth", traveler.passportIssueMonth || 1);
    setValue("passportIssueYear", traveler.passportIssueYear || 2020);
    setValue("passportExpiryDay", traveler.passportExpiryDay || 1);
    setValue("passportExpiryMonth", traveler.passportExpiryMonth || 1);
    setValue("passportExpiryYear", traveler.passportExpiryYear || 2030);
    setValue("nationalityOnPassport", traveler.nationalityOnPassport || "");
    setValue("isEPassport", traveler.isEPassport ?? false);
    setValue("nationalIdNumber", traveler.nationalIdNumber || "");
    setValue("countryOfResidence", traveler.countryOfResidence || "");
  };

  const handleTravelerChange = (travelerId: string) => {
    const traveler = travelers.find((t) => t.id === travelerId);
    if (traveler) {
      setCurrentTravelerId(travelerId);
      loadTravelerData(traveler);
    }
  };

  const onSubmit = async (data: TravelerPassportFormData) => {
    if (!currentTravelerId) return;

    const success = await updateTravelerPassport(currentTravelerId, data);
    if (success) {
      const currentIndex = travelers.findIndex(
        (t) => t.id === currentTravelerId
      );
      if (currentIndex < travelers.length - 1) {
        const nextTraveler = travelers[currentIndex + 1];
        setCurrentTravelerId(nextTraveler.id);
        loadTravelerData(nextTraveler);
      } else {
        router.push(`/application/${params.id}/documents`);
      }
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Passport Details
        </h1>
        <p className="text-gray-600">
          Enter passport information exactly as it appears on the document.
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> Your passport must be valid for at
                least 6 months beyond your intended stay in the U.S.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Passport Number"
                placeholder="Enter passport number"
                error={errors.passportNumber?.message}
                required
                {...register("passportNumber")}
              />

              <Select
                label="Passport Type"
                error={errors.passportType?.message}
                required
                {...register("passportType")}
              >
                <option value="REGULAR">Regular</option>
                <option value="DIPLOMATIC">Diplomatic</option>
                <option value="SERVICE">Service</option>
                <option value="OFFICIAL">Official</option>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-dark mb-3">
                Issue Date <span className="text-accent">*</span>
              </label>
              <div className="grid grid-cols-3 gap-4">
                <Input
                  placeholder="Day"
                  type="number"
                  min={1}
                  max={31}
                  error={errors.passportIssueDay?.message}
                  {...register("passportIssueDay", { valueAsNumber: true })}
                />
                <Input
                  placeholder="Month"
                  type="number"
                  min={1}
                  max={12}
                  error={errors.passportIssueMonth?.message}
                  {...register("passportIssueMonth", { valueAsNumber: true })}
                />
                <Input
                  placeholder="Year"
                  type="number"
                  min={1900}
                  error={errors.passportIssueYear?.message}
                  {...register("passportIssueYear", { valueAsNumber: true })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-dark mb-3">
                Expiry Date <span className="text-accent">*</span>
              </label>
              <div className="grid grid-cols-3 gap-4">
                <Input
                  placeholder="Day"
                  type="number"
                  min={1}
                  max={31}
                  error={errors.passportExpiryDay?.message}
                  {...register("passportExpiryDay", { valueAsNumber: true })}
                />
                <Input
                  placeholder="Month"
                  type="number"
                  min={1}
                  max={12}
                  error={errors.passportExpiryMonth?.message}
                  {...register("passportExpiryMonth", { valueAsNumber: true })}
                />
                <Input
                  placeholder="Year"
                  type="number"
                  min={2024}
                  error={errors.passportExpiryYear?.message}
                  {...register("passportExpiryYear", { valueAsNumber: true })}
                />
              </div>
            </div>

            <CountrySelect
              label="Nationality on Passport"
              error={errors.nationalityOnPassport?.message}
              required
              {...register("nationalityOnPassport")}
            />

            <div>
              <Checkbox
                label="This is an e-Passport (contains electronic chip)"
                {...register("isEPassport")}
              />
              <p className="text-xs text-gray mt-1 ml-6">
                Most modern passports have a small chip icon on the cover
              </p>
            </div>

            <Input
              label="National ID Number (if applicable)"
              placeholder="For Taiwan citizens only"
              error={errors.nationalIdNumber?.message}
              helperText="Leave blank if not applicable"
              {...register("nationalIdNumber")}
            />

            <CountrySelect
              label="Country of Residence"
              error={errors.countryOfResidence?.message}
              required
              {...register("countryOfResidence")}
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
