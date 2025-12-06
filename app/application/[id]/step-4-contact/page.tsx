"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  step4ContactSchema,
  type Step4ContactFormData,
} from "@/app/lib/validation/application";
import { useTravelers } from "@/app/lib/store/postPaymentStore";
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
  emergencyContactFirstName?: string;
  emergencyContactLastName?: string;
  emergencyContactEmail?: string;
  emergencyContactPhone?: string;
}

export default function Step4ContactPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const params = use(paramsPromise);
  const [currentTravelerId, setCurrentTravelerId] = useState<string>("");
  const travelers = useTravelers();
  const {
    updateTravelerContact,
    updateTravelerEmergencyContact,
    isLoading,
    error,
  } = usePostPaymentApplication();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Step4ContactFormData>({
    resolver: zodResolver(step4ContactSchema),
  });

  useEffect(() => {
    if (travelers.length > 0 && !currentTravelerId) {
      setCurrentTravelerId(travelers[0].id);
      loadTravelerData(travelers[0]);
    }
  }, [travelers]);

  const loadTravelerData = (traveler: Traveler) => {
    // Contact fields
    setValue("phoneNumber", traveler.phoneNumber || "");
    setValue("phoneType", (traveler.phoneType as any) || "MOBILE");
    setValue("addressLine1", traveler.addressLine1 || "");
    setValue("addressLine2", traveler.addressLine2 || "");
    setValue("city", traveler.city || "");
    setValue("stateProvinceRegion", traveler.stateProvinceRegion || "");
    setValue("postalCode", traveler.postalCode || "");
    setValue("country", traveler.country || "");

    // Emergency contact fields
    setValue(
      "emergencyContactFirstName",
      traveler.emergencyContactFirstName || ""
    );
    setValue(
      "emergencyContactLastName",
      traveler.emergencyContactLastName || ""
    );
    setValue("emergencyContactEmail", traveler.emergencyContactEmail || "");
    setValue("emergencyContactPhone", traveler.emergencyContactPhone || "");
  };

  const handleTravelerChange = (travelerId: string) => {
    const traveler = travelers.find((t) => t.id === travelerId);
    if (traveler) {
      setCurrentTravelerId(travelerId);
      loadTravelerData(traveler);
    }
  };

  const onSubmit = async (data: Step4ContactFormData) => {
    if (!currentTravelerId) return;

    // Split into contact and emergency contact data
    const {
      phoneNumber,
      phoneType,
      addressLine1,
      addressLine2,
      city,
      stateProvinceRegion,
      postalCode,
      country,
      emergencyContactFirstName,
      emergencyContactLastName,
      emergencyContactEmail,
      emergencyContactPhone,
    } = data;

    const contactData = {
      phoneNumber,
      phoneType,
      addressLine1,
      addressLine2,
      city,
      stateProvinceRegion,
      postalCode,
      country,
    };

    const emergencyContactData = {
      emergencyContactFirstName,
      emergencyContactLastName,
      emergencyContactEmail,
      emergencyContactPhone,
    };

    // Update contact info
    const contactSuccess = await updateTravelerContact(
      currentTravelerId,
      contactData
    );
    if (!contactSuccess) return;

    // Update emergency contact
    const emergencySuccess = await updateTravelerEmergencyContact(
      currentTravelerId,
      emergencyContactData
    );
    if (!emergencySuccess) return;

    // Move to next traveler or next step
    const currentIndex = travelers.findIndex((t) => t.id === currentTravelerId);
    if (currentIndex < travelers.length - 1) {
      const nextTraveler = travelers[currentIndex + 1];
      setCurrentTravelerId(nextTraveler.id);
      loadTravelerData(nextTraveler);
    } else {
      router.push(`/application/${params.id}/step-5-employment`);
    }
  };

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

                <CountrySelect
                  label="Country"
                  error={errors.country?.message}
                  required
                  {...register("country")}
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
