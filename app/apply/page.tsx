"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApplicationStore } from "@/app/lib/store/applicationStore";
import { useApplication } from "@/app/lib/hooks/useApplication";
import ApplicationLayout from "@/app/components/application/ApplicationLayout";
import CountrySelect from "@/app/components/ui/CountrySelect";
import { trackEvent } from "@/app/lib/analytics";
import { Minus, Plus } from "lucide-react";
import { MIN_APPLICANTS, MAX_APPLICANTS } from "@/app/lib/constants";
import { ELIGIBLE_COUNTRIES } from "@/app/lib/countries";
import { autoSelectNationality } from "@/app/lib/ipGeolocation";

export default function TripDetailsPage() {
  const router = useRouter();
  const { nationality, totalApplicants, setNationality, setTotalApplicants } =
    useApplicationStore();

  const { createOrGetApplication, isLoading, error } = useApplication();

  const [selectedNationality, setSelectedNationality] = useState(
    nationality || ""
  );
  const [applicants, setApplicants] = useState(totalApplicants || 1);

  // Auto-select nationality based on IP on first mount
  useEffect(() => {
    const autoSelect = async () => {
      if (!nationality) {
        const eligibleCodes = ELIGIBLE_COUNTRIES.map((c) => c.code);
        const countryCode = await autoSelectNationality(eligibleCodes);

        const country = ELIGIBLE_COUNTRIES.find(
          (c) => c.code.toUpperCase() === countryCode.toUpperCase()
        );

        if (country) {
          setSelectedNationality(country.name);
        }
      }
    };

    autoSelect();
  }, []);

  const handleContinue = async () => {
    // Update store with selected values
    setNationality(selectedNationality);
    setTotalApplicants(applicants);

    // Create or validate application on server
    const applicationId = await createOrGetApplication();

    if (!applicationId) {
      // Error is already set in hook, just return
      return;
    }

    // Track analytics
    trackEvent({
      action: "step_1_completed",
      category: "conversion",
      label: "trip_details",
      value: applicants,
    });

    // Navigate to next step
    router.push("/apply/personal-details");
  };

  const incrementApplicants = () => {
    if (applicants < MAX_APPLICANTS) {
      setApplicants(applicants + 1);
    }
  };

  const decrementApplicants = () => {
    if (applicants > MIN_APPLICANTS) {
      setApplicants(applicants - 1);
    }
  };

  return (
    <ApplicationLayout
      title="Start Application for your United States ESTA"
      description={`The United States ESTA is mandatory for ${selectedNationality} passport holders planning to enter United States`}
      showSidebar={true}
      showMobileCTA={true}
      mobileButtonText={"Start your application"}
      mobileButtonDisabled={isLoading}
      onMobileButtonClick={handleContinue}
      onSidebarButtonClick={handleContinue}
      sidebarButtonText={"Start your application"}
      sidebarButtonDisabled={isLoading}
      showPricing={false}
      showPrevious={false}
    >
      <div className="space-y-8">
        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-red-600 shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="flex-1">
                <p className="font-semibold text-sm">Error</p>
                <p className="text-sm mt-1">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Nationality Selector */}
        <div>
          <CountrySelect
            label="What's your nationality?"
            value={selectedNationality}
            onChange={(value) => setSelectedNationality(value)}
            helperText="Ensure you select the nationality of the passport you'll be traveling with."
            valueType="name"
          />
        </div>

        {/* Applicants Counter */}
        <div>
          <label className="block text-sm font-medium text-gov-gray-dark mb-3">
            Total applicants
          </label>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={decrementApplicants}
              disabled={applicants <= MIN_APPLICANTS}
              className="w-12 h-12 rounded-full border-2 border-gov-gray-light
                       flex items-center justify-center text-gov-gray-dark
                       hover:border-primary hover:text-primary transition-colors
                       disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gov-gray-light
                       disabled:hover:text-gov-gray-dark"
              aria-label="Decrease applicants"
            >
              <Minus />
            </button>

            <span className="text-3xl font-bold text-gov-dark-gray min-w-12 text-center">
              {applicants}
            </span>

            <button
              type="button"
              onClick={incrementApplicants}
              disabled={applicants >= MAX_APPLICANTS}
              className="w-12 h-12 rounded-full border-2 border-gov-gray-light
                       flex items-center justify-center text-gov-gray-dark
                       hover:border-primary hover:text-primary transition-colors
                       disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gov-gray-light
                       disabled:hover:text-gov-gray-dark"
              aria-label="Increase applicants"
            >
              <Plus />
            </button>
          </div>
          <p className="mt-10 text-sm text-gov-gray">
            Maximum {MAX_APPLICANTS} applicants per application
          </p>
        </div>

        {/* Trust Signal */}
        <div className="pt-6 border-t border-gov-gray-light">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-sm">
              <span className="font-semibold text-gov-gray-dark">
                Excellent
              </span>
              <span className="text-gov-gray mx-2">•</span>
              <span className="text-gov-gray">
                66,000+ Reviews on Trustpilot
              </span>
            </div>
          </div>
        </div>
      </div>
    </ApplicationLayout>
  );
}
