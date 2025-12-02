"use client";

import { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  usStaySchema,
  type UsStayFormData,
} from "@/app/lib/validations/application";
import { usePostPaymentStore } from "@/app/lib/store/postPaymentStore";
import { usePostPaymentApplication } from "@/app/lib/hooks/usePostPaymentApplication";
import Input from "@/app/components/ui/Input";
import Select from "@/app/components/ui/Select";
import Button from "@/app/components/ui/Button";
import { US_STATES } from "@/app/lib/constants";

export default function UsStayPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const params = use(paramsPromise);
  const { application } = usePostPaymentStore();
  const { updateUsStay, isLoading, error } = usePostPaymentApplication();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UsStayFormData>({
    resolver: zodResolver(usStaySchema),
  });

  // Populate form with existing data from store
  useEffect(() => {
    if (application) {
      setValue("usStayAddressLine1", application.usStayAddressLine1 || "");
      setValue("usStayAddressLine2", application.usStayAddressLine2 || "");
      setValue("usStayCity", application.usStayCity || "");
      setValue("usStayState", application.usStayState || "");
      setValue("usStayZipCode", application.usStayZipCode || "");
    }
  }, [application, setValue]);

  const onSubmit = async (data: UsStayFormData) => {
    const success = await updateUsStay(data);
    if (success) {
      router.push(`/application/${params.id}/travel-details`);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          U.S. Stay Address
        </h1>
        <p className="text-gray-600">
          Where will you be staying during your visit to the United States?
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <Input
            label="Address Line 1"
            placeholder="Street address"
            error={errors.usStayAddressLine1?.message}
            required
            {...register("usStayAddressLine1")}
          />

          <Input
            label="Address Line 2"
            placeholder="Apt, suite, unit, etc. (optional)"
            error={errors.usStayAddressLine2?.message}
            {...register("usStayAddressLine2")}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="City"
              placeholder="City"
              error={errors.usStayCity?.message}
              required
              {...register("usStayCity")}
            />

            <Select
              label="State"
              error={errors.usStayState?.message}
              required
              {...register("usStayState")}
            >
              <option value="">Select state</option>
              {US_STATES.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </Select>
          </div>

          <Input
            label="ZIP Code"
            placeholder="12345 or 12345-6789"
            error={errors.usStayZipCode?.message}
            required
            {...register("usStayZipCode")}
          />
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
