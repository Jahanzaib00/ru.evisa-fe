"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  step3USTravelSchema,
  type Step3USTravelFormData,
} from "@/app/lib/validation/application";
import { useApplication } from "@/app/lib/store/postPaymentStore";
import { usePostPaymentApplication } from "@/app/lib/hooks/usePostPaymentApplication";
import { useFormSubmit } from "@/app/lib/hooks/useFormSubmit";
import Input from "@/app/components/ui/Input";
import Select from "@/app/components/ui/Select";
import Button from "@/app/components/ui/Button";
import RadioGroup from "@/app/components/ui/RadioGroup";

export default function Step3USTravelPage({
  params: paramsPromise,
}: {
  params: Promise<{ destination: string; id: string }>;
}) {
  const router = useRouter();
  const params = use(paramsPromise);
  const application = useApplication();
  const { saveStep, isLoading, error } = usePostPaymentApplication();

  const {
    register,
    control,
    handleSubmit,
    reset,
    setError: setFormError,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Step3USTravelFormData>({
    resolver: zodResolver(step3USTravelSchema),
  });

  const watchIsTransiting = watch("isTransiting");

  useEffect(() => {
    if (application) {
      reset({
        isTransiting: application.isTransiting || false,
        transitDestination: application.transitDestination || "",
        pointOfEntry: application.pointOfEntry || "",
        arrivalDate: application.arrivalDate || "",
        flightVesselNumber: application.flightVesselNumber || "",
        purposeOfVisit:
          (application.purposeOfVisit as "TOURISM" | "BUSINESS" | "TRANSIT") ||
          undefined,
      });
    }
  }, [application, reset]);

  const onSubmit = useFormSubmit(
    setFormError,
    async (data: Step3USTravelFormData) => {
      // Save all application-level data in one call
      const success = await saveStep(undefined, data);
      if (!success)
        throw new Error(error || "Failed to save US travel information");

      // Navigate to next step
      router.push(`/${params.destination}/application/${params.id}/step-4-contact`);
    }
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          U.S. Travel Details
        </h1>
        <p className="text-gray-600">
          Provide information about your U.S. contact, accommodation, and travel
          plans.
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* U.S. Point of Contact Section */}
        {/* <section className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">
            U.S. Point of Contact
          </h2>
          <p className="text-sm text-gray-600">
            Provide details of a person, hotel, or company in the U.S. where you
            can be reached.
          </p>

          <Select
            label="Contact Type"
            error={errors.usPointOfContactType?.message}
            required
            {...register("usPointOfContactType")}
          >
            <option value="">Select type</option>
            <option value="PERSON">Person</option>
            <option value="HOTEL">Hotel/Accommodation</option>
            <option value="COMPANY">Company/Business</option>
          </Select>

          <Input
            label="Contact Name"
            placeholder="Full name of person, hotel, or company"
            error={errors.usPointOfContactName?.message}
            required
            {...register("usPointOfContactName")}
          />

          <Input
            label="Address Line 1"
            placeholder="Street address"
            error={errors.usContactAddressLine1?.message}
            required
            {...register("usContactAddressLine1")}
          />

          <Input
            label="Address Line 2"
            placeholder="Apartment, suite, unit, etc. (optional)"
            error={errors.usContactAddressLine2?.message}
            {...register("usContactAddressLine2")}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              label="City"
              error={errors.usContactCity?.message}
              required
              {...register("usContactCity")}
            />

            <Input
              label="State"
              placeholder="e.g., CA, NY"
              error={errors.usContactState?.message}
              required
              {...register("usContactState")}
            />

            <Input
              label="ZIP Code"
              placeholder="e.g., 12345"
              error={errors.usContactZipCode?.message}
              required
              {...register("usContactZipCode")}
            />
          </div>

          <Input
            label="Phone Number"
            placeholder="U.S. phone number"
            error={errors.usContactPhone?.message}
            required
            {...register("usContactPhone")}
          />
        </section> */}

        {/* U.S. Stay Address Section */}
        {/* <section className="space-y-4 pt-6 border-t border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                U.S. Accommodation Address
              </h2>
              <p className="text-sm text-gray-600">
                Where will you be staying in the U.S.?
              </p>
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={copyContactToStay}
            >
              Same as contact address
            </Button>
          </div>

          <Input
            label="Address Line 1"
            placeholder="Street address"
            error={errors.usStayAddressLine1?.message}
            required
            {...register("usStayAddressLine1")}
          />

          <Input
            label="Address Line 2"
            placeholder="Apartment, suite, unit, etc. (optional)"
            error={errors.usStayAddressLine2?.message}
            {...register("usStayAddressLine2")}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              label="City"
              error={errors.usStayCity?.message}
              required
              {...register("usStayCity")}
            />

            <Input
              label="State"
              placeholder="e.g., CA, NY"
              error={errors.usStayState?.message}
              required
              {...register("usStayState")}
            />

            <Input
              label="ZIP Code"
              placeholder="e.g., 12345"
              error={errors.usStayZipCode?.message}
              required
              {...register("usStayZipCode")}
            />
          </div>
        </section> */}

        {/* Travel Details Section */}
        <section className="space-y-4 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Travel Information
          </h2>

          <Controller
            name="isTransiting"
            control={control}
            render={({ field }) => (
              <RadioGroup
                label="Are you transiting through the U.S. to another country?"
                options={[
                  { value: "false", label: "No" },
                  { value: "true", label: "Yes" },
                ]}
                value={field.value ? "true" : "false"}
                onChange={(val) => field.onChange(val === "true")}
                onBlur={field.onBlur}
              />
            )}
          />

          {watchIsTransiting && (
            <Input
              label="Transit Destination"
              placeholder="Final destination country"
              error={errors.transitDestination?.message}
              required
              {...register("transitDestination")}
            />
          )}

          <Input
            label="Point of Entry"
            placeholder="e.g., New York JFK, Los Angeles LAX"
            error={errors.pointOfEntry?.message}
            {...register("pointOfEntry")}
          />

          <Input
            label="Arrival Date"
            type="date"
            error={errors.arrivalDate?.message}
            {...register("arrivalDate")}
          />

          <Input
            label="Flight/Vessel Number"
            placeholder="e.g., AA123"
            error={errors.flightVesselNumber?.message}
            {...register("flightVesselNumber")}
          />

          <Select
            label="Purpose of Visit"
            error={errors.purposeOfVisit?.message}
            required
            {...register("purposeOfVisit")}
          >
            <option value="">Select purpose</option>
            <option value="TOURISM">Tourism / Vacation</option>
            <option value="BUSINESS">Business</option>
            <option value="TRANSIT">Transit to another country</option>
          </Select>
        </section>

        <div className="flex justify-between pt-6">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Back
          </Button>
          <Button type="submit" disabled={isLoading} className="min-w-[200px]">
            {isLoading ? "Saving..." : "Save & Continue"}
          </Button>
        </div>
      </form>
    </div>
  );
}
