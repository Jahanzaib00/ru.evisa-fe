"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  step2PassportSchema,
  type Step2PassportFormData,
} from "@/app/lib/validation/application";
import { useTravelers } from "@/app/lib/store/postPaymentStore";
import { usePostPaymentApplication } from "@/app/lib/hooks/usePostPaymentApplication";
import Input from "@/app/components/ui/Input";
import Select from "@/app/components/ui/Select";
import Button from "@/app/components/ui/Button";
import TravelerAccordion from "@/app/components/application/TravelerAccordion";
import CountrySelect from "@/app/components/ui/CountrySelectWrapper";
import FileUpload from "@/app/components/ui/FileUpload";

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
  passportScanUrl?: string;
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
  const {
    updateTravelerPassport,
    updateTravelerCitizenship,
    updateTravelerGlobalEntry,
    isLoading,
    error,
  } = usePostPaymentApplication();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Step2PassportFormData>({
    resolver: zodResolver(step2PassportSchema),
  });

  const watchNationalityOnPassport = watch("nationalityOnPassport");
  const watchHasOtherCitizenship = watch("hasOtherCitizenship");
  const watchHasOtherPassports = watch("hasOtherPassports");
  const watchIsGlobalEntryMember = watch("isGlobalEntryMember");

  useEffect(() => {
    if (travelers.length > 0 && !currentTravelerId) {
      setCurrentTravelerId(travelers[0].id);
      loadTravelerData(travelers[0]);
    }
  }, [travelers]);

  const loadTravelerData = (traveler: Traveler) => {
    // Passport fields
    setValue("passportNumber", traveler.passportNumber || "");
    setValue("passportType", traveler.passportType as any);
    setValue("passportIssueDay", traveler.passportIssueDay || 1);
    setValue("passportIssueMonth", traveler.passportIssueMonth || 1);
    setValue("passportIssueYear", traveler.passportIssueYear || 2020);
    setValue("passportExpiryDay", traveler.passportExpiryDay || 1);
    setValue("passportExpiryMonth", traveler.passportExpiryMonth || 1);
    setValue("passportExpiryYear", traveler.passportExpiryYear || 2030);
    setValue("nationalityOnPassport", traveler.nationalityOnPassport || "");
    setValue("isEPassport", traveler.isEPassport || false);
    setValue("nationalIdNumber", traveler.nationalIdNumber || "");
    setValue("countryOfResidence", traveler.countryOfResidence || "");

    // Citizenship fields
    setValue("hasOtherCitizenship", traveler.hasOtherCitizenship || false);
    setValue("otherCitizenshipCountry", traveler.otherCitizenshipCountry || "");
    setValue("citizenshipAcquisition", traveler.citizenshipAcquisition as any);
    setValue("previousCitizenship", traveler.previousCitizenship || "");
    setValue("hasOtherPassports", traveler.hasOtherPassports || false);
    setValue("otherPassportDetails", traveler.otherPassportDetails);

    // Global Entry fields
    setValue("isGlobalEntryMember", traveler.isGlobalEntryMember || false);
    setValue("globalEntryPassId", traveler.globalEntryPassId || "");
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
    await updateTravelerPassport(currentTravelerId, { passportUrl: url });
  };

  const onSubmit = async (data: Step2PassportFormData) => {
    if (!currentTravelerId) return;

    // Split into passport, citizenship, and global entry data
    const {
      passportNumber,
      passportType,
      passportIssueDay,
      passportIssueMonth,
      passportIssueYear,
      passportExpiryDay,
      passportExpiryMonth,
      passportExpiryYear,
      nationalityOnPassport,
      isEPassport,
      nationalIdNumber,
      countryOfResidence,
      hasOtherCitizenship,
      otherCitizenshipCountry,
      citizenshipAcquisition,
      previousCitizenship,
      hasOtherPassports,
      otherPassportDetails,
      isGlobalEntryMember,
      globalEntryPassId,
    } = data;

    const passportData = {
      passportNumber,
      passportType,
      passportIssueDay,
      passportIssueMonth,
      passportIssueYear,
      passportExpiryDay,
      passportExpiryMonth,
      passportExpiryYear,
      nationalityOnPassport,
      isEPassport,
      nationalIdNumber,
      countryOfResidence,
    };

    const citizenshipData = {
      hasOtherCitizenship,
      otherCitizenshipCountry,
      citizenshipAcquisition,
      previousCitizenship,
      hasOtherPassports,
      otherPassportDetails,
    };

    const globalEntryData = {
      isGlobalEntryMember,
      globalEntryPassId,
    };

    // Update all three sections
    const passportSuccess = await updateTravelerPassport(
      currentTravelerId,
      passportData
    );
    if (!passportSuccess) return;

    const citizenshipSuccess = await updateTravelerCitizenship(
      currentTravelerId,
      citizenshipData
    );
    if (!citizenshipSuccess) return;

    const globalEntrySuccess = await updateTravelerGlobalEntry(
      currentTravelerId,
      globalEntryData
    );
    if (!globalEntrySuccess) return;

    // Move to next traveler or next step
    const currentIndex = travelers.findIndex((t) => t.id === currentTravelerId);
    if (currentIndex < travelers.length - 1) {
      const nextTraveler = travelers[currentIndex + 1];
      setCurrentTravelerId(nextTraveler.id);
      loadTravelerData(nextTraveler);
    } else {
      router.push(`/application/${params.id}/step-3-us-travel`);
    }
  };

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
                <h3 className="text-md font-medium text-gray-800 mb-2">
                  Issue Date
                </h3>
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
                <h3 className="text-md font-medium text-gray-800 mb-2">
                  Expiry Date
                </h3>
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

              <CountrySelect
                label="Nationality on Passport"
                error={errors.nationalityOnPassport?.message}
                required
                {...register("nationalityOnPassport")}
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

              <CountrySelect
                label="Country of Residence"
                error={errors.countryOfResidence?.message}
                required
                {...register("countryOfResidence")}
              />
            </section>

            {/* Citizenship Section */}
            <section className="space-y-4 pt-6 border-t border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Citizenship Information
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Do you hold any other citizenship?
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="false"
                      checked={!watchHasOtherCitizenship}
                      {...register("hasOtherCitizenship", {
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
                      checked={watchHasOtherCitizenship}
                      {...register("hasOtherCitizenship", {
                        setValueAs: (v) => v === "true",
                      })}
                      className="mr-2"
                    />
                    Yes
                  </label>
                </div>
              </div>

              {watchHasOtherCitizenship && (
                <CountrySelect
                  label="Other Citizenship Country"
                  error={errors.otherCitizenshipCountry?.message}
                  required
                  {...register("otherCitizenshipCountry")}
                />
              )}

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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Do you hold any other valid passports?
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="false"
                      checked={!watchHasOtherPassports}
                      {...register("hasOtherPassports", {
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
                      checked={watchHasOtherPassports}
                      {...register("hasOtherPassports", {
                        setValueAs: (v) => v === "true",
                      })}
                      className="mr-2"
                    />
                    Yes
                  </label>
                </div>
              </div>
            </section>

            {/* Global Entry Section */}
            <section className="space-y-4 pt-6 border-t border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Global Entry
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Are you a Global Entry member?
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="false"
                      checked={!watchIsGlobalEntryMember}
                      {...register("isGlobalEntryMember", {
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
                      checked={watchIsGlobalEntryMember}
                      {...register("isGlobalEntryMember", {
                        setValueAs: (v) => v === "true",
                      })}
                      className="mr-2"
                    />
                    Yes
                  </label>
                </div>
              </div>

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
