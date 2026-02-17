"use client";

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  step4ContactSchema,
  type Step4ContactFormData,
} from "@/app/lib/validation/application";
import { useTravelers } from "@/app/lib/store/postPaymentStore";
import { usePostPaymentApplication } from "@/app/lib/hooks/usePostPaymentApplication";
import { useFormSubmit } from "@/app/lib/hooks/useFormSubmit";
import Input from "@/app/components/ui/Input";
import Select from "@/app/components/ui/Select";
import Button from "@/app/components/ui/Button";
import TravelerAccordion from "@/app/components/application/TravelerAccordion";
import CountrySelect from "@/app/components/ui/CountrySelect";

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
  emergencyContactFirstName?: string;
  emergencyContactLastName?: string;
  emergencyContactEmail?: string;
  emergencyContactPhone?: string;
}

interface ESTAContactStepProps {
  applicationId: string;
  onNext: () => void;
  onBack: () => void;
}

export default function ESTAContactStep({
  applicationId,
  onNext,
  onBack,
}: ESTAContactStepProps) {
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
  } = useForm<Step4ContactFormData>({
    resolver: zodResolver(step4ContactSchema),
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
      phoneNumber: traveler.phoneNumber || "",
      phoneType: (traveler.phoneType as any) || "MOBILE",
      addressLine1: traveler.addressLine1 || "",
      addressLine2: traveler.addressLine2 || "",
      city: traveler.city || "",
      stateProvinceRegion: traveler.stateProvinceRegion || "",
      postalCode: traveler.postalCode || "",
      country: traveler.country || "",
      emergencyContactFirstName: traveler.emergencyContactFirstName || "",
      emergencyContactLastName: traveler.emergencyContactLastName || "",
      emergencyContactEmail: traveler.emergencyContactEmail || "",
      emergencyContactPhone: traveler.emergencyContactPhone || "",
    });
  };

  const handleTravelerChange = (travelerId: string) => {
    const traveler = travelers.find((t) => t.id === travelerId);
    if (traveler) {
      setCurrentTravelerId(travelerId);
      loadTravelerData(traveler);
    }
  };

  const onSubmit = useFormSubmit(
    setFormError,
    async (data: Step4ContactFormData) => {
      if (!currentTravelerId) throw new Error("No traveler selected");

      const travelerData = {
        id: currentTravelerId,
        ...data,
      };

      // Save all data in one call
      const success = await saveStep(travelerData);
      if (!success)
        throw new Error(error || "Failed to save contact information");

      // Move to next traveler or next step
      const currentIndex = travelers.findIndex(
        (t) => t.id === currentTravelerId
      );
      if (currentIndex < travelers.length - 1) {
        // Switch to next traveler
        handleTravelerChange(travelers[currentIndex + 1].id);
      } else {
        // All travelers done, move to next step
        onNext();
      }
    }
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Contact & Address Information
        </h1>
        <p className="text-gray-600">
          Provide your contact details and home address.
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
            {/* Main Contact Section */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Your Contact Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Phone Number"
                  placeholder="Include country code"
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
                placeholder="Apartment, suite, unit, etc. (optional)"
                error={errors.addressLine2?.message}
                {...register("addressLine2")}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="City"
                  error={errors.city?.message}
                  required
                  {...register("city")}
                />

                <Input
                  label="State/Province/Region"
                  error={errors.stateProvinceRegion?.message}
                  required
                  {...register("stateProvinceRegion")}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Postal Code"
                  error={errors.postalCode?.message}
                  required
                  {...register("postalCode")}
                />

                <Controller
                  name="country"
                  control={control}
                  render={({ field }) => (
                    <CountrySelect
                      label="Country"
                      error={errors.country?.message}
                      required
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      valueType="name"
                    />
                  )}
                />
              </div>
            </section>

            {/* Emergency Contact Section */}
            <section className="space-y-4 pt-6 border-t border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Emergency Contact
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  error={errors.emergencyContactFirstName?.message}
                  {...register("emergencyContactFirstName")}
                />

                <Input
                  label="Last Name"
                  error={errors.emergencyContactLastName?.message}
                  {...register("emergencyContactLastName")}
                />
              </div>

              <Input
                label="Email"
                type="email"
                error={errors.emergencyContactEmail?.message}
                {...register("emergencyContactEmail")}
              />

              <Input
                label="Phone Number"
                error={errors.emergencyContactPhone?.message}
                {...register("emergencyContactPhone")}
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
