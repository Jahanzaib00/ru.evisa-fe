"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  travelDetailsSchema,
  type TravelDetailsFormData,
} from "@/app/lib/validations/application";
import { usePostPaymentStore } from "@/app/lib/store/postPaymentStore";
import { usePostPaymentApplication } from "@/app/lib/hooks/usePostPaymentApplication";
import Input from "@/app/components/ui/Input";
import Select from "@/app/components/ui/Select";
import Button from "@/app/components/ui/Button";
import Checkbox from "@/app/components/ui/Checkbox";

export default function TravelDetailsPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const params = use(paramsPromise);
  const [isTransiting, setIsTransiting] = useState(false);
  const { application } = usePostPaymentStore();
  const { updateTravelDetails, isLoading, error } =
    usePostPaymentApplication();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<TravelDetailsFormData>({
    resolver: zodResolver(travelDetailsSchema),
  });

  const watchIsTransiting = watch("isTransiting");

  useEffect(() => {
    setIsTransiting(watchIsTransiting);
  }, [watchIsTransiting]);

  // Populate form with existing data from store
  useEffect(() => {
    if (application) {
      setValue("isTransiting", application.isTransiting || false);
      setValue("transitDestination", application.transitDestination || "");
      setValue("pointOfEntry", application.pointOfEntry || "");
      setValue(
        "arrivalDate",
        application.arrivalDate
          ? application.arrivalDate.split("T")[0]
          : ""
      );
      setValue("flightVesselNumber", application.flightVesselNumber || "");
      setValue(
        "purposeOfVisit",
        (application.purposeOfVisit as "TOURISM" | "BUSINESS" | "TRANSIT") ||
          ("" as any)
      );
      setIsTransiting(application.isTransiting || false);
    }
  }, [application, setValue]);

  const onSubmit = async (data: TravelDetailsFormData) => {
    const success = await updateTravelDetails(data);
    if (success) {
      router.push(`/application/${params.id}/personal-info`);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Travel Details
        </h1>
        <p className="text-gray-600">
          Provide information about your upcoming trip to the United States.
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div>
            <Checkbox
              label="I am transiting through the U.S. to another country"
              {...register("isTransiting")}
            />
          </div>

          {isTransiting && (
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
            placeholder="City or airport code (e.g., JFK, LAX)"
            error={errors.pointOfEntry?.message}
            helperText="Where will you first enter the United States?"
            required
            {...register("pointOfEntry")}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Arrival Date"
              type="date"
              error={errors.arrivalDate?.message}
              required
              {...register("arrivalDate")}
            />

            <Input
              label="Flight/Vessel Number"
              placeholder="AA1234"
              error={errors.flightVesselNumber?.message}
              required
              {...register("flightVesselNumber")}
            />
          </div>

          <Select
            label="Purpose of Visit"
            error={errors.purposeOfVisit?.message}
            required
            {...register("purposeOfVisit")}
          >
            <option value="">Select purpose</option>
            <option value="TOURISM">Tourism</option>
            <option value="BUSINESS">Business</option>
            <option value="TRANSIT">Transit</option>
          </Select>
        </div>

        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Back
          </Button>
          <Button type="submit" disabled={isLoading} className="min-w-[200px]">
            {isLoading ? "Saving..." : "Continue"}
          </Button>
        </div>
      </form>
    </div>
  );
}
