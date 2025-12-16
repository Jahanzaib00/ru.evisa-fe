"use client";

import { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApplicationStore } from "@/app/lib/store/applicationStore";
import { useApplication } from "@/app/lib/hooks/useApplication";
import ApplicationLayout from "@/app/components/application/ApplicationLayout";
import CountrySelect from "@/app/components/ui/CountrySelect";
import { trackEvent } from "@/app/lib/analytics";
import { Minus, Plus } from "lucide-react";
import { MIN_APPLICANTS, MAX_APPLICANTS } from "@/app/lib/constants";
import { getServiceByDestination, isEligible } from "@/app/lib/config/services";
import {
  getCountryCodeByName,
  getCountryByCode,
  ALL_COUNTRIES,
} from "@/app/lib/countries";

interface Props {
  params: Promise<{
    destination: string;
  }>;
}

export default function TripDetailsPage({ params }: Props) {
  const router = useRouter();
  const { destination } = use(params);

  // Get service from destination slug
  const service = getServiceByDestination(destination);

  // Redirect if invalid destination
  useEffect(() => {
    if (!service) {
      router.push("/");
    }
  }, [service, router]);

  const {
    nationality,
    totalApplicants,
    setNationality,
    setTotalApplicants,
    setServiceType,
    setDestination: setStoreDestination,
  } = useApplicationStore();

  const { createOrGetApplication, isLoading, error } = useApplication();

  // Set service type and destination in store
  useEffect(() => {
    if (service) {
      setServiceType(service.type);
      setStoreDestination(service.destinationCode);
    }
  }, [service, setServiceType, setStoreDestination]);

  // Check eligibility
  const nationalityCode = nationality
    ? getCountryCodeByName(nationality)
    : null;
  const isEligibleNationality =
    service && nationalityCode
      ? isEligible(service.type, nationalityCode)
      : null;

  // Get eligible countries for this service
  const eligibleCountries = service
    ? service.eligibleNationalities
        .map((code) => getCountryByCode(code))
        .filter(
          (c): c is NonNullable<typeof c> => c !== null && c !== undefined
        )
    : [];

  const handleContinue = async () => {
    // if (!service || !isEligibleNationality) return;
    if (!service) return;

    // Create or validate application on server
    const applicationId = await createOrGetApplication(service.type);

    if (!applicationId) {
      return;
    }

    // Track analytics
    trackEvent({
      action: "step_1_completed",
      category: "conversion",
      label: "trip_details",
      value: totalApplicants,
    });

    // Navigate to next step with destination
    router.push(`/${destination}/apply/personal-details`);
  };

  const incrementApplicants = () => {
    if (totalApplicants < MAX_APPLICANTS) {
      setTotalApplicants(totalApplicants + 1);
    }
  };

  const decrementApplicants = () => {
    if (totalApplicants > MIN_APPLICANTS) {
      setTotalApplicants(totalApplicants - 1);
    }
  };

  if (!service) {
    return null; // Will redirect
  }

  const stepConfig = service.prePaymentSteps.tripDetails;
  const title = stepConfig.title;
  const description = stepConfig.description
    ?.replace("{nationality}", nationality || "your")
    .replace("{destination}", service.destination);

  return (
    <ApplicationLayout
      title={title}
      description={description || ""}
      showSidebar={true}
      showMobileCTA={true}
      mobileButtonText="Start Application"
      mobileButtonDisabled={isLoading}
      // mobileButtonDisabled={isLoading || !isEligibleNationality}
      onMobileButtonClick={handleContinue}
      onSidebarButtonClick={handleContinue}
      sidebarButtonText="Start Application"
      sidebarButtonDisabled={isLoading}
      // sidebarButtonDisabled={isLoading || !isEligibleNationality}
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

        {/* Eligibility Warning - Inline (iVisa style) */}
        {/* {nationality && isEligibleNationality === false && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="flex-1">
                <p className="font-semibold text-sm text-yellow-800">
                  Not Eligible
                </p>
                <p className="text-sm mt-1 text-yellow-700">
                  Unfortunately, {nationality} passport holders are not eligible
                  for {service.name}. You may need a traditional visa. Please
                  select a different nationality or contact support for
                  assistance.
                </p>
              </div>
            </div>
          </div>
        )} */}

        {/* Nationality Selector */}
        <div>
          <CountrySelect
            label="What's your nationality?"
            value={nationality}
            onChange={(value) => setNationality(value)}
            valueType="name"
            countries={ALL_COUNTRIES}
          />
        </div>

        {/* Applicants Counter */}
        <div>
          <label className="block text-sm font-medium text-gray-dark mb-3">
            Total applicants
          </label>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={decrementApplicants}
              disabled={totalApplicants <= MIN_APPLICANTS}
              className="w-12 h-12 rounded-full border-2 border-gray-light
                       flex items-center justify-center text-gray-dark
                       hover:border-primary hover:text-primary transition-colors
                       disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-light
                       disabled:hover:text-gray-dark"
              aria-label="Decrease applicants"
            >
              <Minus />
            </button>

            <span className="text-3xl font-bold text-dark-gray min-w-12 text-center">
              {totalApplicants}
            </span>

            <button
              type="button"
              onClick={incrementApplicants}
              disabled={totalApplicants >= MAX_APPLICANTS}
              className="w-12 h-12 rounded-full border-2 border-gray-light
                       flex items-center justify-center text-gray-dark
                       hover:border-primary hover:text-primary transition-colors
                       disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-light
                       disabled:hover:text-gray-dark"
              aria-label="Increase applicants"
            >
              <Plus />
            </button>
          </div>
        </div>

        {/* Trust Signal */}
        <div className="pt-6 border-t border-gray-light">
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
              <span className="font-semibold text-gray-dark">Excellent</span>
              <span className="text-gray mx-2">•</span>
              <span className="text-gray">66,000+ Reviews on Trustpilot</span>
            </div>
          </div>
        </div>
      </div>
    </ApplicationLayout>
  );
}
