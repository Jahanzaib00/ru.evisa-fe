"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  usContactSchema,
  type UsContactFormData,
} from "@/app/lib/validations/application";
import { usePostPaymentStore } from "@/app/lib/store/postPaymentStore";
import { usePostPaymentApplication } from "@/app/lib/hooks/usePostPaymentApplication";
import Input from "@/app/components/ui/Input";
import Select from "@/app/components/ui/Select";
import Button from "@/app/components/ui/Button";
import SuccessBanner from "@/app/components/ui/SuccessBanner";
import { US_STATES } from "@/app/lib/constants";

export default function UsContactPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const params = use(paramsPromise);
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);
  const { application } = usePostPaymentStore();
  const { updateUsContact, isLoading, error } = usePostPaymentApplication();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UsContactFormData>({
    resolver: zodResolver(usContactSchema),
  });

  // Check if coming from payment success
  useEffect(() => {
    const fromPayment = sessionStorage.getItem("payment_success");
    if (fromPayment === params.id) {
      setShowSuccessBanner(true);
      sessionStorage.removeItem("payment_success");
    }
  }, [params.id]);

  // Populate form with existing data from store
  useEffect(() => {
    if (application) {
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
    }
  }, [application, setValue]);

  const onSubmit = async (data: UsContactFormData) => {
    const success = await updateUsContact(data);
    if (success) {
      router.push(`/application/${params.id}/us-stay`);
    }
  };

  return (
    <div>
      {showSuccessBanner && (
        <SuccessBanner
          title="Payment Successful!"
          message="Your payment has been processed successfully. Please complete the remaining information to finalize your ESTA application."
        />
      )}

      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          U.S. Contact Information
        </h1>
        <p className="text-gray-600">
          Provide contact details for someone in the United States who can be
          reached on your behalf.
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <Select
            label="Contact Type"
            error={errors.usPointOfContactType?.message}
            required
            {...register("usPointOfContactType")}
          >
            <option value="">Select type</option>
            <option value="PERSON">Person</option>
            <option value="HOTEL">Hotel</option>
            <option value="COMPANY">Company</option>
          </Select>

          <Input
            label="Contact Name"
            placeholder="Full name or business name"
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
            placeholder="Apt, suite, unit, etc. (optional)"
            error={errors.usContactAddressLine2?.message}
            {...register("usContactAddressLine2")}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="City"
              placeholder="City"
              error={errors.usContactCity?.message}
              required
              {...register("usContactCity")}
            />

            <Select
              label="State"
              error={errors.usContactState?.message}
              required
              {...register("usContactState")}
            >
              <option value="">Select state</option>
              {US_STATES.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="ZIP Code"
              placeholder="12345 or 12345-6789"
              error={errors.usContactZipCode?.message}
              required
              {...register("usContactZipCode")}
            />

            <Input
              label="Phone Number"
              placeholder="+1 234 567 8900"
              type="tel"
              error={errors.usContactPhone?.message}
              required
              {...register("usContactPhone")}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit" disabled={isLoading} className="min-w-[200px]">
            {isLoading ? "Saving..." : "Continue"}
          </Button>
        </div>
      </form>
    </div>
  );
}
