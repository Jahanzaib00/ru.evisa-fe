"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  travelerCitizenshipSchema,
  type TravelerCitizenshipFormData,
} from "@/app/lib/validations/application";
import { usePostPaymentStore } from "@/app/lib/store/postPaymentStore";
import { usePostPaymentApplication } from "@/app/lib/hooks/usePostPaymentApplication";
import Select from "@/app/components/ui/Select";
import Button from "@/app/components/ui/Button";
import TravelerAccordion from "@/app/components/application/TravelerAccordion";
import CountrySelect from "@/app/components/ui/CountrySelectWrapper";

interface Traveler {
  id: string;
  firstName: string;
  lastName: string;
  hasOtherCitizenship?: boolean;
  otherCitizenshipCountry?: string;
  citizenshipAcquisition?: string;
  previousCitizenship?: string;
  hasOtherPassports?: boolean;
}

export default function CitizenshipPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const params = use(paramsPromise);
  const [currentTravelerId, setCurrentTravelerId] = useState<string>("");
  const [hasOtherCitizenship, setHasOtherCitizenship] = useState(false);
  const { travelers } = usePostPaymentStore();
  const { updateTravelerCitizenship, isLoading, error } =
    usePostPaymentApplication();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<TravelerCitizenshipFormData>({
    resolver: zodResolver(travelerCitizenshipSchema),
  });

  const watchHasOther = watch("hasOtherCitizenship");

  useEffect(() => {
    setHasOtherCitizenship(watchHasOther);
  }, [watchHasOther]);

  // Set initial traveler on mount
  useEffect(() => {
    if (travelers.length > 0 && !currentTravelerId) {
      setCurrentTravelerId(travelers[0].id);
      loadTravelerData(travelers[0]);
    }
  }, [travelers]);

  const loadTravelerData = (traveler: Traveler) => {
    setValue("hasOtherCitizenship", traveler.hasOtherCitizenship ?? false);
    setValue("otherCitizenshipCountry", traveler.otherCitizenshipCountry || "");
    setValue(
      "citizenshipAcquisition",
      traveler.citizenshipAcquisition as
        | "BIRTH"
        | "PARENTS"
        | "NATURALIZATION"
        | "OTHER"
    );
    setValue("previousCitizenship", traveler.previousCitizenship || "");
    setValue("hasOtherPassports", traveler.hasOtherPassports ?? false);
    setHasOtherCitizenship(traveler.hasOtherCitizenship ?? false);
  };

  const handleTravelerChange = (travelerId: string) => {
    const traveler = travelers.find((t) => t.id === travelerId);
    if (traveler) {
      setCurrentTravelerId(travelerId);
      loadTravelerData(traveler);
    }
  };

  const onSubmit = async (data: TravelerCitizenshipFormData) => {
    if (!currentTravelerId) return;

    const success = await updateTravelerCitizenship(currentTravelerId, data);
    if (success) {
      const currentIndex = travelers.findIndex(
        (t) => t.id === currentTravelerId
      );
      if (currentIndex < travelers.length - 1) {
        const nextTraveler = travelers[currentIndex + 1];
        setCurrentTravelerId(nextTraveler.id);
        loadTravelerData(nextTraveler);
      } else {
        router.push(`/application/${params.id}/employment`);
      }
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Citizenship Information
        </h1>
        <p className="text-gray-600">
          Provide citizenship details for each traveler.
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
            <div>
              <label className="block text-sm font-medium text-gray-dark mb-3">
                Do you hold citizenship in any other country?
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    value="false"
                    {...register("hasOtherCitizenship")}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-gray-700">No</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    value="true"
                    {...register("hasOtherCitizenship")}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-gray-700">Yes</span>
                </label>
              </div>
            </div>

            {hasOtherCitizenship && (
              <CountrySelect
                label="Other Citizenship Country"
                error={errors.otherCitizenshipCountry?.message}
                required
                {...register("otherCitizenshipCountry")}
              />
            )}

            <Select
              label="How was citizenship acquired?"
              error={errors.citizenshipAcquisition?.message}
              required
              {...register("citizenshipAcquisition")}
            >
              <option value="">Select method</option>
              <option value="BIRTH">By birth</option>
              <option value="PARENTS">Through parents</option>
              <option value="NATURALIZATION">Naturalization</option>
              <option value="OTHER">Other</option>
            </Select>

            <div>
              <label className="block text-sm font-medium text-gray-dark mb-3">
                Do you hold any other valid passports?
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    value="false"
                    {...register("hasOtherPassports")}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-gray-700">No</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    value="true"
                    {...register("hasOtherPassports")}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-gray-700">Yes</span>
                </label>
              </div>
            </div>

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
