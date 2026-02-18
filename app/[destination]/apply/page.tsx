"use client";

import { use, useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useApplicationStore } from "@/app/lib/store/applicationStore";
import { useApplication } from "@/app/lib/hooks/useApplication";
import { applicationsService } from "@/app/lib/api/services/applications.service";
import ApplicationLayout from "@/app/components/application/ApplicationLayout";
import CountrySelect from "@/app/components/ui/CountrySelect";
import { LoadingSpinner } from "@/app/components/ui/Loader";
import { trackEvent } from "@/app/lib/analytics";
import { Minus, Plus } from "lucide-react";
import { MIN_APPLICANTS, MAX_APPLICANTS } from "@/app/lib/constants";
import { getServiceByDestination } from "@/app/lib/config/services";
import { ALL_COUNTRIES } from "@/app/lib/countries";
import { ServiceType as ApiServiceType } from "@/app/lib/api/types";

interface Props {
  params: Promise<{ destination: string }>;
}

// ─── Inner component — needs Suspense because it calls useSearchParams ─────────

function TripDetailsContent({ destination }: { destination: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const resumeAppId = searchParams.get("resume");

  const service = getServiceByDestination(destination);

  const {
    nationality,
    totalApplicants,
    applicationId,
    setNationality,
    setTotalApplicants,
    setServiceType,
    setDestination: setStoreDestination,
    setApplicationId,
    setApplicationStatus,
    updateTravelers,
  } = useApplicationStore();

  const { createOrGetApplication, isLoading, error } = useApplication();
  const [isResuming, setIsResuming] = useState(false);
  const [resumeError, setResumeError] = useState<string | null>(null);

  // ── Redirect if destination is invalid ───────────────────────────────────
  useEffect(() => {
    if (!service) router.push("/");
  }, [service, router]);

  // ── Sync service type + destination slug into store ───────────────────────
  useEffect(() => {
    if (service) {
      setServiceType(service.type as unknown as ApiServiceType);
      setStoreDestination(service.destination);
    }
  }, [service, setServiceType, setStoreDestination]);

  // ── Resume from abandoned-email link (?resume={applicationId}) ───────────
  useEffect(() => {
    if (!resumeAppId || !service) return;
    // Don't re-run if the store already holds this application
    if (resumeAppId === applicationId) return;

    setIsResuming(true);
    setResumeError(null);

    applicationsService
      .getById(resumeAppId)
      .then((app) => {
        // Guard: only resume PENDING_PAYMENT applications for this destination
        if (app.status !== "PENDING_PAYMENT") {
          // Already paid — send them to the post-payment flow
          router.replace(`/${destination}/application/${app.id}/1`);
          return;
        }

        // Restore core store state from server
        setApplicationId(app.id);
        setApplicationStatus(app.status);
        setNationality(app.nationality ?? nationality);
        setTotalApplicants((app as any).totalApplicants ?? 1);

        // Restore traveler data into the store so form pages are pre-filled
        if (app.travelers && app.travelers.length > 0) {
          const storeTravelers = app.travelers.map((t: any) => ({
            firstName: t.firstName ?? "",
            lastName: t.lastName ?? "",
            birthDay: t.birthDay?.toString() ?? "",
            birthMonth: t.birthMonth?.toString() ?? "",
            birthYear: t.birthYear?.toString() ?? "",
            email: t.email ?? "",
            marketingOptIn: false,
            passportNumber: t.passportNumber ?? "",
            passportExpiryDay: t.passportExpiryDay?.toString() ?? "",
            passportExpiryMonth: t.passportExpiryMonth?.toString() ?? "",
            passportExpiryYear: t.passportExpiryYear?.toString() ?? "",
            nationalityOnPassport: t.nationalityOnPassport ?? "",
            countryOfBirth: t.countryOfBirth ?? "",
            countryOfResidence: t.countryOfResidence ?? "",
          }));
          updateTravelers(storeTravelers);
        }

        // Determine the furthest completed step and route there
        const nextStep = resolveResumeStep(app, destination);
        router.push(nextStep);
      })
      .catch(() => {
        setResumeError("We couldn't load your application. Please try again.");
        setIsResuming(false);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resumeAppId]);

  // ── Handlers ──────────────────────────────────────────────────────────────

  const handleContinue = async () => {
    if (!service) return;

    const id = await createOrGetApplication(
      service.type as unknown as ApiServiceType
    );
    if (!id) return;

    trackEvent({
      action: "step_1_completed",
      category: "conversion",
      label: "trip_details",
      value: totalApplicants,
    });

    router.push(`/${destination}/apply/personal-details`);
  };

  const increment = () => {
    if (totalApplicants < MAX_APPLICANTS) setTotalApplicants(totalApplicants + 1);
  };

  const decrement = () => {
    if (totalApplicants > MIN_APPLICANTS) setTotalApplicants(totalApplicants - 1);
  };

  // ── Loading states ────────────────────────────────────────────────────────

  if (!service) return null;

  if (isResuming) {
    return (
      <ApplicationLayout
        title="Restoring your application…"
        showSidebar={false}
        showMobileCTA={false}
        showPrevious={false}
      >
        <LoadingSpinner />
      </ApplicationLayout>
    );
  }

  // ── Render ────────────────────────────────────────────────────────────────

  const stepConfig = service.prePaymentSteps.tripDetails;
  const title = stepConfig.title;
  const description = stepConfig.description
    ?.replace("{nationality}", nationality || "your")
    .replace("{destination}", service.destination);

  const displayError = resumeError ?? error;

  return (
    <ApplicationLayout
      title={title}
      description={description || ""}
      showSidebar={true}
      showMobileCTA={true}
      mobileButtonText="Start Application"
      mobileButtonDisabled={isLoading}
      onMobileButtonClick={handleContinue}
      onSidebarButtonClick={handleContinue}
      sidebarButtonText="Start Application"
      sidebarButtonDisabled={isLoading}
      showPricing={false}
      showPrevious={false}
    >
      <div className="space-y-8">
        {/* Error */}
        {displayError && (
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
                <p className="text-sm mt-1">{displayError}</p>
              </div>
            </div>
          </div>
        )}

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
              onClick={decrement}
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
              onClick={increment}
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

// ─── Resume routing helper ─────────────────────────────────────────────────────

/**
 * Determines the furthest step the user completed and returns the next URL.
 * Checks server-side traveler data (reliable across devices).
 */
function resolveResumeStep(app: any, destination: string): string {
  const base = `/${destination}/apply`;
  const travelers: any[] = app.travelers ?? [];

  if (travelers.length === 0) {
    // No traveler data yet — start from the beginning
    return base;
  }

  const t = travelers[0];

  // Passport details complete → go to processing options
  if (t.passportNumber) {
    return `${base}/processing-options`;
  }

  // Personal details complete (email is captured here) → go to passport
  if (t.email) {
    return `${base}/passport-details`;
  }

  // Traveler record exists (name/DOB) but email not yet filled → personal details
  return `${base}/personal-details`;
}

// ─── Page wrapper — provides Suspense required by useSearchParams ──────────────

export default function TripDetailsPage({ params }: Props) {
  const { destination } = use(params);

  return (
    <Suspense
      fallback={
        <ApplicationLayout
          title="Loading…"
          showSidebar={false}
          showMobileCTA={false}
          showPrevious={false}
        >
          <LoadingSpinner />
        </ApplicationLayout>
      }
    >
      <TripDetailsContent destination={destination} />
    </Suspense>
  );
}
