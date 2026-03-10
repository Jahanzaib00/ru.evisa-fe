"use client";

import { useState, useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { usePostPaymentApplication } from "@/app/lib/hooks/usePostPaymentApplication";
import { useFormSubmit } from "@/app/lib/hooks/useFormSubmit";
import { useTravelers } from "@/app/lib/store/postPaymentStore";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import RadioGroup from "@/app/components/ui/RadioGroup";
import { getFlagEmoji } from "@/app/lib/countries";

const PHONE_CODES: { code: string; dialCode: string; name: string }[] = [
  { code: "AE", dialCode: "+971", name: "United Arab Emirates" },
  { code: "US", dialCode: "+1", name: "United States" },
  { code: "GB", dialCode: "+44", name: "United Kingdom" },
  { code: "AU", dialCode: "+61", name: "Australia" },
  { code: "CA", dialCode: "+1", name: "Canada" },
  { code: "DE", dialCode: "+49", name: "Germany" },
  { code: "FR", dialCode: "+33", name: "France" },
  { code: "IN", dialCode: "+91", name: "India" },
  { code: "CN", dialCode: "+86", name: "China" },
  { code: "JP", dialCode: "+81", name: "Japan" },
  { code: "KR", dialCode: "+82", name: "South Korea" },
  { code: "SG", dialCode: "+65", name: "Singapore" },
  { code: "MY", dialCode: "+60", name: "Malaysia" },
  { code: "ID", dialCode: "+62", name: "Indonesia" },
  { code: "PH", dialCode: "+63", name: "Philippines" },
  { code: "TH", dialCode: "+66", name: "Thailand" },
  { code: "VN", dialCode: "+84", name: "Vietnam" },
  { code: "RU", dialCode: "+7", name: "Russia" },
  { code: "BR", dialCode: "+55", name: "Brazil" },
  { code: "MX", dialCode: "+52", name: "Mexico" },
  { code: "ZA", dialCode: "+27", name: "South Africa" },
  { code: "NZ", dialCode: "+64", name: "New Zealand" },
  { code: "IT", dialCode: "+39", name: "Italy" },
  { code: "ES", dialCode: "+34", name: "Spain" },
  { code: "NL", dialCode: "+31", name: "Netherlands" },
  { code: "SE", dialCode: "+46", name: "Sweden" },
  { code: "NO", dialCode: "+47", name: "Norway" },
  { code: "DK", dialCode: "+45", name: "Denmark" },
  { code: "CH", dialCode: "+41", name: "Switzerland" },
  { code: "AT", dialCode: "+43", name: "Austria" },
  { code: "BE", dialCode: "+32", name: "Belgium" },
  { code: "PT", dialCode: "+351", name: "Portugal" },
  { code: "IE", dialCode: "+353", name: "Ireland" },
  { code: "PL", dialCode: "+48", name: "Poland" },
  { code: "CZ", dialCode: "+420", name: "Czech Republic" },
  { code: "HU", dialCode: "+36", name: "Hungary" },
  { code: "RO", dialCode: "+40", name: "Romania" },
  { code: "GR", dialCode: "+30", name: "Greece" },
  { code: "TR", dialCode: "+90", name: "Turkey" },
  { code: "SA", dialCode: "+966", name: "Saudi Arabia" },
  { code: "QA", dialCode: "+974", name: "Qatar" },
  { code: "KW", dialCode: "+965", name: "Kuwait" },
  { code: "BH", dialCode: "+973", name: "Bahrain" },
  { code: "OM", dialCode: "+968", name: "Oman" },
  { code: "EG", dialCode: "+20", name: "Egypt" },
  { code: "NG", dialCode: "+234", name: "Nigeria" },
  { code: "KE", dialCode: "+254", name: "Kenya" },
  { code: "PK", dialCode: "+92", name: "Pakistan" },
  { code: "BD", dialCode: "+880", name: "Bangladesh" },
  { code: "LK", dialCode: "+94", name: "Sri Lanka" },
  { code: "NP", dialCode: "+977", name: "Nepal" },
  { code: "IL", dialCode: "+972", name: "Israel" },
  { code: "JO", dialCode: "+962", name: "Jordan" },
  { code: "LB", dialCode: "+961", name: "Lebanon" },
  { code: "FI", dialCode: "+358", name: "Finland" },
  { code: "HR", dialCode: "+385", name: "Croatia" },
  { code: "CO", dialCode: "+57", name: "Colombia" },
  { code: "AR", dialCode: "+54", name: "Argentina" },
  { code: "CL", dialCode: "+56", name: "Chile" },
  { code: "PE", dialCode: "+51", name: "Peru" },
  { code: "HK", dialCode: "+852", name: "Hong Kong" },
  { code: "TW", dialCode: "+886", name: "Taiwan" },
  { code: "MM", dialCode: "+95", name: "Myanmar" },
  { code: "KH", dialCode: "+855", name: "Cambodia" },
  { code: "LA", dialCode: "+856", name: "Laos" },
].sort((a, b) => a.name.localeCompare(b.name));

const mdacTripDetailsSchema = z.object({
  phoneCountryCode: z.string().min(1, "Country code is required"),
  phoneNumber: z.string().min(4, "Phone number is required"),
  arrivalDate: z.string().min(1, "Arrival date is required"),
  hasFlightBooked: z.enum(["true", "false"]),
  flightNumber: z.string().optional(),
}).refine(
  (data) => data.hasFlightBooked === "false" || (data.flightNumber && data.flightNumber.length > 0),
  { message: "Flight number is required when a flight is booked", path: ["flightNumber"] }
);

type MDACTripDetailsFormData = z.infer<typeof mdacTripDetailsSchema>;

interface MDACTripDetailsStepProps {
  applicationId: string;
  onNext: () => void;
  onBack: () => void;
}

export default function MDACTripDetailsStep({ applicationId, onNext, onBack }: MDACTripDetailsStepProps) {
  const { saveStep, isLoading, error, application } = usePostPaymentApplication();
  const travelers = useTravelers();
  const [isCodeDropdownOpen, setIsCodeDropdownOpen] = useState(false);
  const [codeSearchTerm, setCodeSearchTerm] = useState("");
  const codeDropdownRef = useRef<HTMLDivElement>(null);
  const codeSearchInputRef = useRef<HTMLInputElement>(null);

  const existingPhone = travelers[0]?.phoneNumber || "";
  const existingExtras = application?.serviceExtras || {};

  const parsePhone = (phone: string) => {
    for (const entry of PHONE_CODES) {
      if (phone.startsWith(entry.dialCode)) {
        return { code: entry.dialCode, number: phone.slice(entry.dialCode.length) };
      }
    }
    return { code: "+1", number: phone };
  };

  const parsed = parsePhone(existingPhone);

  const { register, handleSubmit, setError: setFormError, control, watch, setValue, formState: { errors } } = useForm<MDACTripDetailsFormData>({
    resolver: zodResolver(mdacTripDetailsSchema),
    defaultValues: {
      phoneCountryCode: parsed.code || "+1",
      phoneNumber: parsed.number || "",
      arrivalDate: application?.arrivalDate ? new Date(application.arrivalDate).toISOString().split("T")[0] : "",
      hasFlightBooked: existingExtras.hasFlightBooked ? "true" : "false",
      flightNumber: application?.flightVesselNumber || "",
    },
  });

  const selectedCode = watch("phoneCountryCode");
  const hasFlightBooked = watch("hasFlightBooked");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (codeDropdownRef.current && !codeDropdownRef.current.contains(event.target as Node)) {
        setIsCodeDropdownOpen(false);
        setCodeSearchTerm("");
      }
    };
    if (isCodeDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      setTimeout(() => codeSearchInputRef.current?.focus(), 0);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCodeDropdownOpen]);

  const filteredCodes = PHONE_CODES.filter(
    (c) =>
      c.name.toLowerCase().includes(codeSearchTerm.toLowerCase()) ||
      c.dialCode.includes(codeSearchTerm)
  );

  const selectedEntry = PHONE_CODES.find((c) => c.dialCode === selectedCode);

  const onSubmit = useFormSubmit(setFormError, async (data: MDACTripDetailsFormData) => {
    const fullPhone = `${data.phoneCountryCode}${data.phoneNumber}`;
    const firstTravelerId = travelers[0]?.id;
    if (!firstTravelerId) throw new Error("No traveler found");

    const travelerData = { id: firstTravelerId, phoneNumber: fullPhone };
    const applicationData: Record<string, any> = {
      arrivalDate: data.arrivalDate,
      flightVesselNumber: data.hasFlightBooked === "true" ? data.flightNumber : "",
      serviceExtras: {
        ...existingExtras,
        hasFlightBooked: data.hasFlightBooked === "true",
        phoneCountryCode: data.phoneCountryCode,
      },
    };

    const success = await saveStep(travelerData, applicationData);
    if (!success) throw new Error(error || "Failed to save trip details");
    onNext();
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Trip details</h1>
        <p className="text-gray-600">General details about your trip to Malaysia.</p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">{error}</div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Phone Number */}
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-dark mb-1.5">
            Phone number <span className="text-accent">*</span>
          </label>
          <div className="flex gap-3">
            <div className="relative" ref={codeDropdownRef}>
              <button
                type="button"
                onClick={() => setIsCodeDropdownOpen(!isCodeDropdownOpen)}
                className={`flex items-center gap-1.5 px-3 py-3 border rounded-md transition-colors bg-white min-w-[100px]
                  ${isCodeDropdownOpen ? "border-primary ring-2 ring-primary ring-opacity-20" : "border-gray-light"}
                  hover:border-primary`}
              >
                {selectedEntry && (
                  <span className="text-lg leading-none">{getFlagEmoji(selectedEntry.code)}</span>
                )}
                <span className="text-base text-gray-dark">{selectedCode}</span>
                <svg className={`w-4 h-4 text-gray transition-transform ${isCodeDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 20 20" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 8l4 4 4-4" />
                </svg>
              </button>

              {isCodeDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-light rounded-md shadow-lg max-h-72 overflow-hidden z-50 w-72">
                  <div className="p-2 border-b border-gray-light sticky top-0 bg-white">
                    <input
                      ref={codeSearchInputRef}
                      type="text"
                      value={codeSearchTerm}
                      onChange={(e) => setCodeSearchTerm(e.target.value)}
                      placeholder="Search country or code..."
                      className="w-full px-3 py-2 text-sm border border-gray-light rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div className="overflow-y-auto max-h-56">
                    {filteredCodes.map((entry) => (
                      <button
                        key={entry.code}
                        type="button"
                        onClick={() => {
                          setValue("phoneCountryCode", entry.dialCode);
                          setIsCodeDropdownOpen(false);
                          setCodeSearchTerm("");
                        }}
                        className={`w-full px-3 py-2.5 flex items-center gap-2.5 text-left transition-colors hover:bg-gray-50
                          ${selectedCode === entry.dialCode ? "bg-primary bg-opacity-10" : ""}`}
                      >
                        <span className="text-lg leading-none">{getFlagEmoji(entry.code)}</span>
                        <span className="flex-1 text-sm">{entry.name}</span>
                        <span className="text-sm text-gray">{entry.dialCode}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex-1">
              <input
                {...register("phoneNumber")}
                type="tel"
                placeholder="Enter phone number"
                className={`w-full px-4 py-3 text-base border rounded-md transition-colors
                  ${errors.phoneNumber ? "border-accent focus:border-accent focus:ring-accent" : "border-gray-light focus:border-primary focus:ring-primary"}
                  focus:outline-none focus:ring-2 focus:ring-opacity-20 bg-white text-gray-dark placeholder-gray`}
              />
            </div>
          </div>
          <p className="mt-1.5 text-sm text-gray">Confirm the country code, then enter the number.</p>
          {errors.phoneNumber && (
            <p className="mt-1.5 text-sm text-accent font-medium">{errors.phoneNumber.message}</p>
          )}
        </div>

        <Input
          label="Arrival date"
          type="date"
          error={errors.arrivalDate?.message}
          required
          {...register("arrivalDate")}
        />

        <Controller
          name="hasFlightBooked"
          control={control}
          render={({ field }) => (
            <RadioGroup
              label="Do you have a flight booked?"
              options={[
                { value: "true", label: "Yes" },
                { value: "false", label: "No" },
              ]}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors.hasFlightBooked?.message}
            />
          )}
        />

        {hasFlightBooked === "true" && (
          <Input
            label="Flight number"
            placeholder="e.g. MH370"
            error={errors.flightNumber?.message}
            required
            {...register("flightNumber")}
          />
        )}

        <div className="flex justify-between pt-6">
          <Button type="button" variant="outline" onClick={onBack}>Back</Button>
          <Button type="submit" disabled={isLoading} className="min-w-[200px]">
            {isLoading ? "Saving..." : "Next"}
          </Button>
        </div>
      </form>
    </div>
  );
}
