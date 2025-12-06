"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  step3USTravelSchema,
  type Step3USTravelFormData,
} from "@/app/lib/validation/application";
import { useApplication } from "@/app/lib/store/postPaymentStore";
import { usePostPaymentApplication } from "@/app/lib/hooks/usePostPaymentApplication";
import Input from "@/app/components/ui/Input";
import Select from "@/app/components/ui/Select";
import Button from "@/app/components/ui/Button";

export default function Step3USTravelPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const params = use(paramsPromise);
  const application = useApplication();
  const {
    updateUsContact,
    updateUsStay,
    updateTravelDetails,
    isLoading,
    error,
  } = usePostPaymentApplication();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Step3USTravelFormData>({
    resolver: zodResolver(step3USTravelSchema),
  });

  const watchIsTransiting = watch("isTransiting");

  useEffect(() => {
    if (application) {
      // Load US Contact data
      setValue(
        "usPointOfContactType",
        application.usPointOfContactType as "PERSON" | "HOTEL" | "COMPANY"
      );
      setValue("usPointOfContactName", application.usPointOfContactName || "");
      setValue(
        "usContactAddressLine1",
        application.usContactAddressLine1 || ""
      );
      setValue(
        "usContactAddressLine2",
        application.usContactAddressLine2 || ""
      );
      setValue("usContactCity", application.usContactCity || "");
      setValue("usContactState", application.usContactState || "");
      setValue("usContactZipCode", application.usContactZipCode || "");
      setValue("usContactPhone", application.usContactPhone || "");

      // Load US Stay data
      setValue("usStayAddressLine1", application.usStayAddressLine1 || "");
      setValue("usStayAddressLine2", application.usStayAddressLine2 || "");
      setValue("usStayCity", application.usStayCity || "");
      setValue("usStayState", application.usStayState || "");
      setValue("usStayZipCode", application.usStayZipCode || "");

      // Load Travel Details data
      setValue("isTransiting", application.isTransiting || false);
      setValue("transitDestination", application.transitDestination || "");
      setValue("pointOfEntry", application.pointOfEntry || "");
      setValue("arrivalDate", application.arrivalDate || "");
      setValue("flightVesselNumber", application.flightVesselNumber || "");
      setValue("purposeOfVisit", application.purposeOfVisit as any);
    }
  }, [application]);

  const onSubmit = async (data: Step3USTravelFormData) => {
    // Split into three sections
    const {
      usPointOfContactType,
      usPointOfContactName,
      usContactAddressLine1,
      usContactAddressLine2,
      usContactCity,
      usContactState,
      usContactZipCode,
      usContactPhone,
      usStayAddressLine1,
      usStayAddressLine2,
      usStayCity,
      usStayState,
      usStayZipCode,
      isTransiting,
      transitDestination,
      pointOfEntry,
      arrivalDate,
      flightVesselNumber,
      purposeOfVisit,
    } = data;

    const usContactData = {
      usPointOfContactType,
      usPointOfContactName,
      usContactAddressLine1,
      usContactAddressLine2,
      usContactCity,
      usContactState,
      usContactZipCode,
      usContactPhone,
    };

    const usStayData = {
      usStayAddressLine1,
      usStayAddressLine2,
      usStayCity,
      usStayState,
      usStayZipCode,
    };

    const travelDetailsData = {
      isTransiting,
      transitDestination,
      pointOfEntry,
      arrivalDate,
      flightVesselNumber,
      purposeOfVisit,
    };

    // Update all three sections
    const contactSuccess = await updateUsContact(usContactData);
    if (!contactSuccess) return;

    const staySuccess = await updateUsStay(usStayData);
    if (!staySuccess) return;

    const travelSuccess = await updateTravelDetails(travelDetailsData);
    if (!travelSuccess) return;

    // Navigate to next step
    router.push(`/application/${params.id}/step-4-contact`);
  };

  const copyContactToStay = () => {
    const contactLine1 = watch("usContactAddressLine1");
    const contactLine2 = watch("usContactAddressLine2");
    const contactCity = watch("usContactCity");
    const contactState = watch("usContactState");
    const contactZip = watch("usContactZipCode");

    setValue("usStayAddressLine1", contactLine1);
    setValue("usStayAddressLine2", contactLine2 || "");
    setValue("usStayCity", contactCity);
    setValue("usStayState", contactState);
    setValue("usStayZipCode", contactZip);
  };

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
        <section className="space-y-4">
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
        </section>

        {/* U.S. Stay Address Section */}
        <section className="space-y-4 pt-6 border-t border-gray-200">
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
        </section>

        {/* Travel Details Section */}
        <section className="space-y-4 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Travel Information
          </h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Are you transiting through the U.S. to another country?
            </label>
            <div className="flex space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="false"
                  checked={!watchIsTransiting}
                  {...register("isTransiting", {
                    setValueAs: (v) => v === "true",
                  })}
                  className="mr-2"
                />
                No
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="true"
                  checked={watchIsTransiting}
                  {...register("isTransiting", {
                    setValueAs: (v) => v === "true",
                  })}
                  className="mr-2"
                />
                Yes
              </label>
            </div>
          </div>

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
            required
            {...register("pointOfEntry")}
          />

          <Input
            label="Arrival Date"
            type="date"
            error={errors.arrivalDate?.message}
            required
            {...register("arrivalDate")}
          />

          <Input
            label="Flight/Vessel Number"
            placeholder="e.g., AA123"
            error={errors.flightVesselNumber?.message}
            required
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
