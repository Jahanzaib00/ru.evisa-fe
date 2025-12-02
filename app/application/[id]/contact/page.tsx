"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  travelerContactSchema,
  type TravelerContactFormData,
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
  phoneNumber?: string;
  phoneType?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  stateProvinceRegion?: string;
  postalCode?: string;
  country?: string;
}

export default function ContactPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const params = use(paramsPromise);
  const [currentTravelerId, setCurrentTravelerId] = useState<string>("");
  const { travelers } = usePostPaymentStore();
  const { updateTravelerContact, isLoading, error } = usePostPaymentApplication();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TravelerContactFormData>({
    resolver: zodResolver(travelerContactSchema),
  });

  // Set initial traveler on mount
  useEffect(() => {
    if (travelers.length > 0 && !currentTravelerId) {
      setCurrentTravelerId(travelers[0].id);
      loadTravelerData(travelers[0]);
    }
  }, [travelers]);

  const loadTravelerData = (traveler: Traveler) => {
    setValue("phoneNumber", traveler.phoneNumber || "");
    setValue("phoneType", traveler.phoneType as "MOBILE" | "HOME" | "WORK");
    setValue("addressLine1", traveler.addressLine1 || "");
    setValue("addressLine2", traveler.addressLine2 || "");
    setValue("city", traveler.city || "");
    setValue("stateProvinceRegion", traveler.stateProvinceRegion || "");
    setValue("postalCode", traveler.postalCode || "");
    setValue("country", traveler.country || "");
  };

  const handleTravelerChange = (travelerId: string) => {
    const traveler = travelers.find((t) => t.id === travelerId);
    if (traveler) {
      setCurrentTravelerId(travelerId);
      loadTravelerData(traveler);
    }
  };

  const onSubmit = async (data: TravelerContactFormData) => {
    if (!currentTravelerId) return;

    const success = await updateTravelerContact(currentTravelerId, data);
    if (success) {
      const currentIndex = travelers.findIndex(
        (t) => t.id === currentTravelerId
      );
      if (currentIndex < travelers.length - 1) {
        const nextTraveler = travelers[currentIndex + 1];
        setCurrentTravelerId(nextTraveler.id);
        loadTravelerData(nextTraveler);
      } else {
        router.push(`/application/${params.id}/passport`);
      }
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Contact Information
        </h1>
        <p className="text-gray-600">
          Provide current contact details for each traveler.
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Phone Number"
                placeholder="+1 234 567 8900"
                type="tel"
                error={errors.phoneNumber?.message}
                required
                {...register("phoneNumber")}
              />

              <Select
                label="Phone Type"
                error={errors.phoneType?.message}
                required
                {...register("phoneType")}
              >
                <option value="">Select type</option>
                <option value="MOBILE">Mobile</option>
                <option value="HOME">Home</option>
                <option value="WORK">Work</option>
              </Select>
            </div>

            <Input
              label="Address Line 1"
              placeholder="Street address"
              error={errors.addressLine1?.message}
              required
              {...register("addressLine1")}
            />

            <Input
              label="Address Line 2"
              placeholder="Apt, suite, unit, etc. (optional)"
              error={errors.addressLine2?.message}
              {...register("addressLine2")}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="City"
                placeholder="City"
                error={errors.city?.message}
                required
                {...register("city")}
              />

              <Input
                label="State/Province/Region"
                placeholder="State or province"
                error={errors.stateProvinceRegion?.message}
                required
                {...register("stateProvinceRegion")}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Postal Code"
                placeholder="Postal/ZIP code"
                error={errors.postalCode?.message}
                required
                {...register("postalCode")}
              />

              <CountrySelect
                label="Country"
                error={errors.country?.message}
                required
                {...register("country")}
              />
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
