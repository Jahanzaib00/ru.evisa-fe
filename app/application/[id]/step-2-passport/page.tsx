"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  step2PassportSchema,
  type Step2PassportFormData,
} from "@/app/lib/validation/application";
import { useTravelers } from "@/app/lib/store/postPaymentStore";
import { usePostPaymentApplication } from "@/app/lib/hooks/usePostPaymentApplication";
import { useFormSubmit } from "@/app/lib/hooks/useFormSubmit";
import Input from "@/app/components/ui/Input";
import Select from "@/app/components/ui/Select";
import Button from "@/app/components/ui/Button";
import TravelerAccordion from "@/app/components/application/TravelerAccordion";
import CountrySelect from "@/app/components/ui/CountrySelect";
import FileUpload from "@/app/components/ui/FileUpload";
import RadioGroup from "@/app/components/ui/RadioGroup";

interface Traveler {
  id: string;
  firstName: string;
  lastName: string;
  passportNumber?: string;
  passportType?: string;
  passportIssueDay?: number;
  passportIssueMonth?: number;
  passportIssueYear?: number;
  passportExpiryDay?: number;
  passportExpiryMonth?: number;
  passportExpiryYear?: number;
  nationalityOnPassport?: string;
  isEPassport?: boolean;
  nationalIdNumber?: string;
  countryOfResidence?: string;
  hasOtherCitizenship?: boolean;
  otherCitizenshipCountry?: string;
  citizenshipAcquisition?: string;
  previousCitizenship?: string;
  hasOtherPassports?: boolean;
  otherPassportDetails?: any;
  isGlobalEntryMember?: boolean;
  globalEntryPassId?: string;
  passportUrl?: string; // Database field is passportUrl, not passportScanUrl
}

export default function Step2PassportPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const params = use(paramsPromise);
  const [currentTravelerId, setCurrentTravelerId] = useState<string>("");
  const travelers = useTravelers();
  const { saveStep, isLoading, error } = usePostPaymentApplication();

  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    setError: setFormError,
    formState: { errors },
  } = useForm<Step2PassportFormData>({
    resolver: zodResolver(step2PassportSchema),
  });

  const watchNationalityOnPassport = watch("nationalityOnPassport");
  const watchHasOtherCitizenship = watch("hasOtherCitizenship");
  const watchIsGlobalEntryMember = watch("isGlobalEntryMember");

  // Initialize with first traveler on mount only
  useEffect(() => {
    if (travelers.length > 0 && !currentTravelerId) {
      setCurrentTravelerId(travelers[0].id);
      loadTravelerData(travelers[0]);
    }
  }, []);

  const loadTravelerData = (traveler: Traveler) => {
    // Use reset() to properly reset form state including submission state
    reset({
      // Passport fields
      passportNumber: traveler.passportNumber || "",
      passportType: traveler.passportType as any,
      passportIssueDay: traveler.passportIssueDay || 1,
      passportIssueMonth: traveler.passportIssueMonth || 1,
      passportIssueYear: traveler.passportIssueYear || 2020,
      passportExpiryDay: traveler.passportExpiryDay || 1,
      passportExpiryMonth: traveler.passportExpiryMonth || 1,
      passportExpiryYear: traveler.passportExpiryYear || 2030,
      nationalityOnPassport: traveler.nationalityOnPassport || "",
      isEPassport: traveler.isEPassport || false,
      nationalIdNumber: traveler.nationalIdNumber || "",
      countryOfResidence: traveler.countryOfResidence || "",
      // Citizenship fields
      hasOtherCitizenship: traveler.hasOtherCitizenship || false,
      otherCitizenshipCountry: traveler.otherCitizenshipCountry || "",
      citizenshipAcquisition: traveler.citizenshipAcquisition as any,
      previousCitizenship: traveler.previousCitizenship || "",
      hasOtherPassports: traveler.hasOtherPassports || false,
      otherPassportDetails: traveler.otherPassportDetails,
      // Global Entry fields
      isGlobalEntryMember: traveler.isGlobalEntryMember || false,
      globalEntryPassId: traveler.globalEntryPassId || "",
    });
  };

  const handleTravelerChange = (travelerId: string) => {
    const traveler = travelers.find((t) => t.id === travelerId);
    if (traveler) {
      setCurrentTravelerId(travelerId);
      loadTravelerData(traveler);
    }
  };

  const handlePassportScanUpload = async (url: string) => {
    if (!currentTravelerId) return;
    await saveStep({ id: currentTravelerId, passportUrl: url });
  };

  const onSubmit = useFormSubmit(
    setFormError,
    async (data: Step2PassportFormData) => {
      if (!currentTravelerId) throw new Error("No traveler selected");

      const travelerData = {
        id: currentTravelerId,
        ...data,
      };

      // Save all data in one call
      const success = await saveStep(travelerData);
      if (!success)
        throw new Error(
          error || "Failed to save passport and citizenship information"
        );

      // Move to next traveler or next step
      const currentIndex = travelers.findIndex(
        (t) => t.id === currentTravelerId
      );
      if (currentIndex < travelers.length - 1) {
        // Switch to next traveler
        handleTravelerChange(travelers[currentIndex + 1].id);
      } else {
        // All travelers done, move to next step
        router.push(`/application/${params.id}/step-3-us-travel`);
      }
    }
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Passport & Citizenship
        </h1>
        <p className="text-gray-600">
          Provide your passport details and citizenship information as they
          appear on your passport.
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
            {/* Passport Information Section */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Passport Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Passport Number"
                  placeholder="As shown on passport"
                  error={errors.passportNumber?.message}
                  required
                  {...register("passportNumber")}
                />

                <Select
                  label="Passport Type"
                  error={errors.passportType?.message}
                  required
                  {...register("passportType")}
                >
                  <option value="">Select type</option>
                  <option value="REGULAR">Regular</option>
                  <option value="DIPLOMATIC">Diplomatic</option>
                  <option value="SERVICE">Service</option>
                  <option value="OFFICIAL">Official</option>
                </Select>
              </div>

              <div>
                <p className="text-md font-semibold text-gray-900">
                  Issue Date
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input
                    label="Day"
                    type="number"
                    min={1}
                    max={31}
                    error={errors.passportIssueDay?.message}
                    required
                    {...register("passportIssueDay", { valueAsNumber: true })}
                  />
                  <Input
                    label="Month"
                    type="number"
                    min={1}
                    max={12}
                    error={errors.passportIssueMonth?.message}
                    required
                    {...register("passportIssueMonth", { valueAsNumber: true })}
                  />
                  <Input
                    label="Year"
                    type="number"
                    min={1900}
                    error={errors.passportIssueYear?.message}
                    required
                    {...register("passportIssueYear", { valueAsNumber: true })}
                  />
                </div>
              </div>

              <div>
                <p className="text-md font-semibold text-gray-900">
                  Expiry Date
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input
                    label="Day"
                    type="number"
                    min={1}
                    max={31}
                    error={errors.passportExpiryDay?.message}
                    required
                    {...register("passportExpiryDay", { valueAsNumber: true })}
                  />
                  <Input
                    label="Month"
                    type="number"
                    min={1}
                    max={12}
                    error={errors.passportExpiryMonth?.message}
                    required
                    {...register("passportExpiryMonth", {
                      valueAsNumber: true,
                    })}
                  />
                  <Input
                    label="Year"
                    type="number"
                    min={2024}
                    error={errors.passportExpiryYear?.message}
                    required
                    {...register("passportExpiryYear", { valueAsNumber: true })}
                  />
                </div>
              </div>

              <Controller
                name="nationalityOnPassport"
                control={control}
                render={({ field }) => (
                  <CountrySelect
                    label="Nationality on Passport"
                    error={errors.nationalityOnPassport?.message}
                    required
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    valueType="name"
                  />
                )}
              />

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="isEPassport"
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  {...register("isEPassport")}
                />
                <label htmlFor="isEPassport" className="text-sm text-gray-700">
                  This is an e-Passport (has electronic chip)
                </label>
              </div>

              {watchNationalityOnPassport === "Taiwan" && (
                <Input
                  label="National ID Number"
                  helperText="Required for Taiwan citizens"
                  error={errors.nationalIdNumber?.message}
                  required
                  {...register("nationalIdNumber")}
                />
              )}

              <Controller
                name="countryOfResidence"
                control={control}
                render={({ field }) => (
                  <CountrySelect
                    label="Country of Residence"
                    error={errors.countryOfResidence?.message}
                    required
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    valueType="name"
                  />
                )}
              />
            </section>

            {/* Citizenship Section */}
            <section className="space-y-4 pt-6 border-t border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Citizenship Information
              </h2>

              <Select
                label="How did you acquire citizenship?"
                error={errors.citizenshipAcquisition?.message}
                required
                {...register("citizenshipAcquisition")}
              >
                <option value="">Select...</option>
                <option value="BIRTH">By Birth</option>
                <option value="PARENTS">From Parents</option>
                <option value="NATURALIZATION">Naturalization</option>
                <option value="OTHER">Other</option>
              </Select>

              <Input
                label="Previous Citizenship (if any)"
                error={errors.previousCitizenship?.message}
                {...register("previousCitizenship")}
              />

              <Controller
                name="hasOtherCitizenship"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    label="Do you hold any other citizenship?"
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

              {watchHasOtherCitizenship && (
                <Controller
                  name="otherCitizenshipCountry"
                  control={control}
                  render={({ field }) => (
                    <CountrySelect
                      label="Other Citizenship Country"
                      error={errors.otherCitizenshipCountry?.message}
                      required
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      valueType="name"
                    />
                  )}
                />
              )}

              <Controller
                name="hasOtherPassports"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    label="Do you hold any other valid passports?"
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
            </section>

            {/* Global Entry Section */}
            <section className="space-y-4 pt-6 border-t border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Global Entry
              </h2>

              <Controller
                name="isGlobalEntryMember"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    label="Are you a Global Entry member?"
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

              {watchIsGlobalEntryMember && (
                <Input
                  label="Global Entry PASSID"
                  error={errors.globalEntryPassId?.message}
                  required
                  {...register("globalEntryPassId")}
                />
              )}
            </section>

            {/* Passport Scan Upload Section */}
            <section className="space-y-4 pt-6 border-t border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Document Upload
              </h2>
              <p className="text-sm text-gray-600">
                Please upload a clear scan or photo of your passport information
                page.
              </p>

              <FileUpload
                label="Passport Scan"
                uploadType="passport"
                applicationId={params.id}
                travelerId={currentTravelerId}
                currentFileUrl={
                  travelers.find((t) => t.id === currentTravelerId)?.passportUrl
                }
                onUploadComplete={handlePassportScanUpload}
                required
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
