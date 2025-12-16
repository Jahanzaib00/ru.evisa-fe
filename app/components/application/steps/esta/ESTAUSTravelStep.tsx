"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { usePostPaymentApplication } from "@/app/lib/hooks/usePostPaymentApplication";
import { useFormSubmit } from "@/app/lib/hooks/useFormSubmit";
import Input from "@/app/components/ui/Input";
import Select from "@/app/components/ui/Select";
import Button from "@/app/components/ui/Button";
import RadioGroup from "@/app/components/ui/RadioGroup";

const estaTravelSchema = z.object({
  isTransiting: z.boolean(),
  transitDestination: z.string().optional(),
  pointOfEntry: z.string().optional(),
  arrivalDate: z.string().optional(),
  flightVesselNumber: z.string().optional(),
  purposeOfVisit: z.string().min(1, "Purpose is required"),
  usStayAddressLine1: z.string().optional(),
  usStayAddressLine2: z.string().optional(),
  usStayCity: z.string().optional(),
  usStayState: z.string().optional(),
  usStayZipCode: z.string().optional(),
  usPointOfContactType: z.string().optional(),
  usPointOfContactName: z.string().optional(),
  usContactAddressLine1: z.string().optional(),
  usContactCity: z.string().optional(),
  usContactState: z.string().optional(),
  usContactZipCode: z.string().optional(),
  usContactPhone: z.string().optional(),
});

type ESTATravelFormData = z.infer<typeof estaTravelSchema>;

interface ESTAUSTravelStepProps {
  applicationId: string;
  onNext: () => void;
  onBack: () => void;
}

export default function ESTAUSTravelStep({ applicationId, onNext, onBack }: ESTAUSTravelStepProps) {
  const { saveStep, isLoading, error } = usePostPaymentApplication();
  const { register, handleSubmit, setError: setFormError, control, formState: { errors } } = useForm<ESTATravelFormData>({
    resolver: zodResolver(estaTravelSchema),
  });

  const onSubmit = useFormSubmit(setFormError, async (data: ESTATravelFormData) => {
    // Save to application (not traveler) since it's application-level data
    const success = await saveStep(data, applicationId);
    if (!success) throw new Error(error || "Failed to save travel information");
    onNext();
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">U.S. Travel Details</h1>
        <p className="text-gray-600">Tell us about your travel plans to the United States.</p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">{error}</div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <section className="space-y-4">
          <Select label="Purpose of Visit" error={errors.purposeOfVisit?.message} required {...register("purposeOfVisit")}>
            <option value="">Select purpose</option>
            <option value="TOURISM">Tourism / Vacation</option>
            <option value="BUSINESS">Business</option>
            <option value="TRANSIT">Transit</option>
          </Select>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Are you transiting through the U.S.?</label>
            <Controller
              name="isTransiting"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  options={[
                    { value: "false", label: "No" },
                    { value: "true", label: "Yes" },
                  ]}
                  value={field.value ? "true" : "false"}
                  onChange={(value) => field.onChange(value === "true")}
                  onBlur={field.onBlur}
                />
              )}
            />
          </div>

          <Input label="Expected Arrival Date" type="date" {...register("arrivalDate")} />
          <Input label="Flight/Vessel Number (if known)" {...register("flightVesselNumber")} />
          <Input label="Point of Entry (City)" {...register("pointOfEntry")} />
        </section>

        <section className="space-y-4 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Address While in the U.S.</h2>
          <Input label="Address Line 1" {...register("usStayAddressLine1")} />
          <Input label="Address Line 2" {...register("usStayAddressLine2")} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="City" {...register("usStayCity")} />
            <Input label="State" {...register("usStayState")} />
          </div>
          <Input label="ZIP Code" {...register("usStayZipCode")} />
        </section>

        <section className="space-y-4 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">U.S. Point of Contact</h2>
          <Select label="Contact Type" {...register("usPointOfContactType")}>
            <option value="">Select type</option>
            <option value="PERSON">Person</option>
            <option value="HOTEL">Hotel</option>
            <option value="COMPANY">Company</option>
          </Select>
          <Input label="Contact Name" {...register("usPointOfContactName")} />
          <Input label="Contact Address" {...register("usContactAddressLine1")} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="City" {...register("usContactCity")} />
            <Input label="State" {...register("usContactState")} />
          </div>
          <Input label="ZIP Code" {...register("usContactZipCode")} />
          <Input label="Phone Number" {...register("usContactPhone")} />
        </section>

        <div className="flex justify-between pt-6">
          <Button type="button" variant="outline" onClick={onBack}>Back</Button>
          <Button type="submit" disabled={isLoading} className="min-w-[200px]">
            {isLoading ? "Saving..." : "Save & Continue"}
          </Button>
        </div>
      </form>
    </div>
  );
}
